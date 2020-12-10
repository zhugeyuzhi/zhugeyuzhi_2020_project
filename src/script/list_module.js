define(['jquery_lazyload'], function() {
    return {
        init: function() {
            const $list = $('.list ul');
            $.ajax({
                url: 'http://localhost/dashboard/js/cbfproject/php/listdata.php',
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '';
                $.each(data, function(index, value) {
                    $strhtml += `
                        <li>
                            <a href="detail.html?sid=${value.sid}">
                                <img class="lazy" data-original="${value.url}" width="200 height="200"/>
                                <p>${value.title}</p>
                                <span>￥${value.price}</span>
                            </a>
                        </li>
                    `;
                });
                $list.html($strhtml);
                $(function() {
                    $("img.lazy").lazyload({
                        effect: "fadeIn"
                    })
                });
            });
        }
    }
});