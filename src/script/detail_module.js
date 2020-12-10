define(['jquery_cookie'], function() {
    return {
        init: function() {
            let $sid = location.search.substring(1).split('=')[1];
            if (!$sid) {
                $sid = 1;
            }
            $.ajax({
                url: 'http://localhost/dashboard/js/cbfproject/php/detail.php',
                data: {
                    sid: $sid
                },
                dataType: 'json'
            }).done(function(data) {
                // console.log(data);
                // console.log(data.urls);
                $('#smallpic').attr('src', data.url);
                $('.loadtitle').html(data.title);
                $('.loadpcp').html(data.price);

                let $picurl = data.urls.split(',');
                let $strhtml = '';
                const $list = $('#list');
                // console.log($picurl);
                $.each($picurl, function(index, value) {
                    $strhtml += `
                    <li>
                        <img src="${value}"/>
                    </li>
                `;
                });
                $list.html($strhtml);
            });
            let arrsid = [];
            let arrnum = [];

            function getcookietoarray() {
                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                    arrsid = $.cookie('cookiesid').split(',');
                    arrnum = $.cookie('cookienum').split(',');
                }
            }
            $('.p-btn a').on('click', function() {
                getcookietoarray();
                if ($.inArray($sid, arrsid) === -1) {
                    arrsid.push($sid);
                    $.cookie('cookiesid', arrsid, { expires: 10, path: '/' });
                    arrnum.push($('#count').val());
                    $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
                } else {
                    let $index = $.inArray($sid, arrsid);
                    arrnum[$index] = parseInt(arrnum[$index]) + parseInt($('#count').val());
                    $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
                }
                alert('按钮被点击了');
            });
        }
    }
});