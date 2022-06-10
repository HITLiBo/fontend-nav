$('.addButton').on('click', () => {
    let url = window.prompt('请问你要添加的网址是?')
    let newurl;
    let Newurl;
    if (url.indexOf('http') !== 0) {
        newurl = 'https://' + url;
    }
    console.log(newurl)
    const $siteList = $('.siteList')
    const $lastList = $siteList.find('li.last')
    Newurl = url.toUpperCase();
    const $li = $(` <li>
                <a href="${newurl}">
                    <div class="site">

                        <div class="logo">${Newurl[0]}</div>
                        <div class="link">${url}</div>
                    </div>
                </a>
            </li>`).insertBefore($lastList)
})