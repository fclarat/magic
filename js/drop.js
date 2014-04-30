/*! 
 * jquery.event.drop - v 2.0.0 
 * Copyright (c) 2010 Three Dub Media - http://threedubmedia.com
 * Open Source MIT License - http://threedubmedia.com/code/license
 */
;
(function(f) {
	f.fn.drop = function(c, a, d) {
		var g = typeof c == "string" ? c : "", e = f.isFunction(c) ? c : f
				.isFunction(a) ? a : null;
		if (g.indexOf("drop") !== 0)
			g = "drop" + g;
		d = (c == e ? a : d) || {};
		return e ? this.bind(g, d, e) : this.trigger(g)
	};
	f.drop = function(c) {
		c = c || {};
		b.multi = c.multi === true ? Infinity : c.multi === false ? 1
				: !isNaN(c.multi) ? c.multi : b.multi;
		b.delay = c.delay || b.delay;
		b.tolerance = f.isFunction(c.tolerance) ? c.tolerance
				: c.tolerance === null ? null : b.tolerance;
		b.mode = c.mode || b.mode || "intersect"
	};
	var l = f.event, i = l.special, b = f.event.special.drop = {
		multi : 1,
		delay : 20,
		mode : "overlap",
		targets : [],
		datakey : "dropdata",
		livekey : "livedrop",
		add : function(c) {
			var a = f.data(this, b.datakey);
			a.related += 1;
			if (!a.live && c.selector) {
				a.live = true;
				l.add(this, "dropinit." + b.livekey, b.delegate)
			}
		},
		remove : function() {
			f.data(this, b.datakey).related -= 1
		},
		setup : function() {
			if (!f.data(this, b.datakey)) {
				f.data(this, b.datakey, {
					related : 0,
					active : [],
					anyactive : 0,
					winner : 0,
					location : {}
				});
				b.targets.push(this)
			}
		},
		teardown : function() {
			if (!f.data(this, b.datakey).related) {
				f.removeData(this, b.datakey);
				l.remove(this, "dropinit", b.delegate);
				var c = this;
				b.targets = f.grep(b.targets, function(a) {
					return a !== c
				})
			}
		},
		handler : function(c, a) {
			var d;
			if (a)
				switch (c.type) {
				case "mousedown":
					d = f(b.targets);
					if (typeof a.drop == "string")
						d = d.filter(a.drop);
					d.each(function() {
						var g = f.data(this, b.datakey);
						g.active = [];
						g.anyactive = 0;
						g.winner = 0
					});
					a.droppable = d;
					b.delegates = [];
					i.drag.hijack(c, "dropinit", a);
					b.delegates = f.unique(i.drag.flatten(b.delegates));
					break;
				case "mousemove":
					b.event = c;
					b.timer || b.tolerate(a);
					break;
				case "mouseup":
					b.timer = clearTimeout(b.timer);
					if (a.propagates) {
						i.drag.hijack(c, "drop", a);
						i.drag.hijack(c, "dropend", a);
						f.each(b.delegates || [], function() {
							l.remove(this, "." + b.livekey)
						})
					}
					break
				}
		},
		delegate : function(c) {
			var a = [], d, g = f.data(this, "events") || {};
			f.each(g.live || [], function(e, h) {
				if (h.preType.indexOf("drop") === 0) {
					d = f(c.currentTarget).find(h.selector);
					d.length
							&& d.each(function() {
								l.add(this, h.origType + "." + b.livekey,
										h.origHandler, h.data);
								f.inArray(this, a) < 0 && a.push(this)
							})
				}
			});
			b.delegates.push(a);
			return a.length ? f(a) : false
		},
		locate : function(c, a) {
			var d = f.data(c, b.datakey), g = f(c), e = g.offset() || {}, h = g
					.outerHeight();
			g = g.outerWidth();
			e = {
				elem : c,
				width : g,
				height : h,
				top : e.top,
				left : e.left,
				right : e.left + g,
				bottom : e.top + h
			};
			if (d) {
				d.location = e;
				d.index = a;
				d.elem = c
			}
			return e
		},
		contains : function(c, a) {
			return (a[0] || a.left) >= c.left && (a[0] || a.right) <= c.right
					&& (a[1] || a.top) >= c.top
					&& (a[1] || a.bottom) <= c.bottom
		},
		modes : {
			intersect : function(c, a, d) {
				return this.contains(d, [ c.pageX, c.pageY ]) ? 1E9
						: this.modes.overlap.apply(this, arguments)
			},
			overlap : function(c, a, d) {
				return Math.max(0, Math.min(d.bottom, a.bottom)
						- Math.max(d.top, a.top))
						* Math.max(0, Math.min(d.right, a.right)
								- Math.max(d.left, a.left))
			},
			fit : function(c, a, d) {
				return this.contains(d, a) ? 1 : 0
			},
			middle : function(c, a, d) {
				return this.contains(d, [ a.left + a.width * 0.5,
						a.top + a.height * 0.5 ]) ? 1 : 0
			}
		},
		sort : function(c, a) {
			return a.winner - c.winner || c.index - a.index
		},
		tolerate : function(c) {
			var a, d, g, e, h, m, j = 0, k, p = c.interactions.length, n = [
					b.event.pageX, b.event.pageY ], o = b.tolerance
					|| b.modes[b.mode];
			do
				if (k = c.interactions[j]) {
					if (!k)
						return;
					k.drop = [];
					h = [];
					m = k.droppable.length;
					if (o)
						g = b.locate(k.proxy);
					a = 0;
					do
						if (d = k.droppable[a]) {
							e = f.data(d, b.datakey);
							if (d = e.location) {
								e.winner = o ? o.call(b, b.event, g, d) : b
										.contains(d, n) ? 1 : 0;
								h.push(e)
							}
						}
					while (++a < m);
					h.sort(b.sort);
					a = 0;
					do
						if (e = h[a])
							if (e.winner && k.drop.length < b.multi) {
								if (!e.active[j] && !e.anyactive)
									if (i.drag.hijack(b.event, "dropstart", c,
											j, e.elem)[0] !== false) {
										e.active[j] = 1;
										e.anyactive += 1
									} else
										e.winner = 0;
								e.winner && k.drop.push(e.elem)
							} else if (e.active[j] && e.anyactive == 1) {
								i.drag.hijack(b.event, "dropend", c, j, e.elem);
								e.active[j] = 0;
								e.anyactive -= 1
							}
					while (++a < m)
				}
			while (++j < p);
			if (b.last && n[0] == b.last.pageX && n[1] == b.last.pageY)
				delete b.timer;
			else
				b.timer = setTimeout(function() {
					b.tolerate(c)
				}, b.delay);
			b.last = b.event
		}
	};
	i.dropinit = i.dropstart = i.dropend = b
})(jQuery);