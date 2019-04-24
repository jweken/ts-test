var $;
$.get("file:///./basic.html", function (data) {
    $("div").text(data);
});