$(document).ready(
    function(){
        $("form").submit( function () {
            $.ajax({
                data:$.param($(this).serializeArray()),
                dataType:'script',
                type:'get',
                url:'chat.php'
            });
            return false;
            $('form .message').value = "";
        } );
    })

setInterval(function() {
    $.ajax({
        success:function(request){
            $('#chat').html(request);
        },
        url:'chat.html',
        cache: false
    })
}, 2000)
