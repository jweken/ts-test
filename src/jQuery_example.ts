interface JQuery {
    text(content: string);
}

interface JQueryStatic {
    get(url: string, callback: (data: string) => any);
    (query: string): JQuery;
    (ready: () => any): any;
}
var $: JQueryStatic;
$.get("file:///./basic.html",
    function (data: string) {
        $("div").text(data);
    }
);
