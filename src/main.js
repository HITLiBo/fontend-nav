const $siteList = $(".siteList");
const $lastList = $siteList.find("li.last");
const x = localStorage.getItem("x");
const xObject = JSON.parse(x);
const hashMap = xObject || [
  {
    logo: "A",
    url: "https://www.acfun.cn",
  },
  {
    logo: "B",
    url: "https://www.bilibili.com",
  },
];

const simplify = (url) => {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .replace(/\/.*/, "");
};

const render = () => {
  $siteList.find("li:not(.last)").remove();
  hashMap.forEach((node, index) => {
    const $li = $(` <li>
               
                    <div class="site">
                        <div class="logo">${node.logo[0]}</div>
                        <div class="link">${simplify(node.url)}</div>
                        <div class="close"><img src="img/close.png" alt="" class='icon'></div>
                    </div>
                
            </li>`).insertBefore($lastList);
    $li.on("click", () => {
      window.open(node.url);
    });
    $li.on("click", ".close", (e) => {
      e.stopPropagation();
      hashMap.splice(index, 1);
      render();
    });
  });
};
render();
$(".addButton").on("click", () => {
  let url = window.prompt("请问你要添加的网址是?");
  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
  console.log(url);
  hashMap.push({ logo: simplify(url)[0].toUpperCase(), url: url });

  render();
});
window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap);
  window.localStorage.setItem("x", string);
};
