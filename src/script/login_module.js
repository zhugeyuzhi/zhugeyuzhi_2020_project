define([], function() {
    return {
        init: function() {
            const $username = $('#username');
            const $password = $('#password');
            const $login = $('#login');

            $login.on('click', function() {
                $.ajax({
                    type: 'post',
                    url: 'http://localhost/dashboard/js/cbfproject/php/login.php',
                    data: {
                        user: $username.val(),
                        pass: $password.val()
                    }
                }).done(function(data) {
                    if (!data) {
                        alert('用户名或者密码有误!');
                        $password.val('');
                    } else {
                        location.href = 'index1.html';
                        localStorage.setItem('loginname', $username.val());
                    }
                });
            });
        }
    }
});