function importCss(s) {
    var t = document.createElement("link");
    t.href = s,
    t.rel = "stylesheet",
    document.body.appendChild(t)
}
function importJs(s) {
    var t = document.createElement("script");
    t.src = s,
    t.type = "text/javascript",
    document.body.appendChild(t)
}
var browerUrl = window.location.href,
host = window.location.host;
if (/(tmall|taobao)\.com/.test(host) && !/1688\.com/.test(host) && (importCss("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/imagesearch/css/imagesearch.css"), importJs("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/imagesearch/js/imagesearch.js")), !/list\.tmall\.com/.test(host) && !/s\.taobao\.com/.test(host) || /1688\.com/.test(host) || (importCss("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/taolist/css/taolist.css"), importJs("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/taolist/js/taolist.js")), (/detail\.tmall\.com/.test(host) || /item\.taobao\.com/.test(host)) && !/1688\.com/.test(host)) {
    importCss("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/taodetail/css/taodetail.css"),
    importJs("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/taodetail/js/taodetail.js"),
    importCss("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/prism/css/prism.css");
    var scriptG2 = document.createElement("script");
    scriptG2.type = "text/javascript",
    scriptG2.onload = function() {
        importJs("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/prism/js/prism.js")
    },
    scriptG2.src = "//a.alipayobjects.com/g/datavis/g2/2.1.2/index.js",
    document.body.appendChild(scriptG2)
} ! /detail\.tmall\.com/.test(host) && !/item\.taobao\.com/.test(host) || /1688\.com/.test(host) || (importCss("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/ad/css/ad.css"), importJs("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/ad/js/ad.js")),
/(tmall|taobao)\.com/.test(host) && !/1688\.com/.test(host) && (importCss("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/rankboard/css/rankboard.css"), importJs("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/rankboard/js/rankboard.js")),
/trade\.taobao\.com\/trade\/itemlist\/list_sold_items/.test(browerUrl) && (importCss("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/taomanager/css/taomanager.css"), importJs("//astyle-src.alicdn.com/app/searchweb/products/zhaohuoshenqi/taomanager/js/taomanager.js"));;