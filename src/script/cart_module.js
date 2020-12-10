define(['jquery_cookie'], function() {
    return {
        init: function() {
            function getcookietoarray() {
                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                    let $arrsid = $.cookie('cookiesid').split(',');
                    let $arrnum = $.cookie('cookienum').split(',');
                    $.each($arrsid, function(index, value) {
                        rendergoods($arrsid[index], $arrnum[index]);
                    });
                }
            }
            getcookietoarray();

            function rendergoods(sid, num) {
                $.ajax({
                    url: 'http://localhost/dashboard/js/cbfproject/php/listdata.php',
                    dataType: 'json'
                }).done(function(data) {
                    // console.log(data);
                    $.each(data, function(index, value) {
                        if (sid === value.sid) {
                            let $clonebox = $('.goods-item:hidden').clone(true, true);
                            $clonebox.find('.goods-pic img').attr('src', value.url);
                            $clonebox.find('.goods-d-info a').html(value.title);
                            $clonebox.find('.b-price strong').html(value.price);
                            $clonebox.find('.quantity-form input').val(num);
                            $clonebox.find('.b-sum strong').html((value.price * num).toFixed(2));
                            $clonebox.css('display', 'block');
                            $('.item-list').append($clonebox);
                        }
                    });
                });
            }
        }
    }
});