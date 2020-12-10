define([], function() {
    return {
        init: function() {
            const $username = $('#username');
            const $span = $('span');
            $username.on('blur', function() {
                $.ajax({
                    type: 'post',
                    url: 'http://localhost/dashboard/js/cbfproject/php/reg.php',
                    data: {
                        xingming: $username.val()
                    }
                }).done(function(data) {
                    if (!data) {
                        $span.css('color', 'green').html('√');
                    } else {
                        $span.css('color', 'red').html('该用户名已存在');
                    }
                });
            });
        }
    }
});