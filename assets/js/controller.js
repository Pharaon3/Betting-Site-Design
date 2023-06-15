function toggle() {
    if($("#sidemenus").hasClass('sidemenus-show')) {
        $("#sidemenus").removeClass("sidemenus-show");
        $(".fa-chevron-down").removeClass("hidden");
        $(".fa-chevron-up").addClass("hidden");
    }
    else {
        $("#sidemenus").addClass("sidemenus-show");
        $(".fa-chevron-up").removeClass("hidden");
        $(".fa-chevron-down").addClass("hidden");
    }
}
function collapse(id){
    if($("#" + id).hasClass("sidebar-collapsed")) $("#" + id).removeClass("sidebar-collapsed");
    else $("#" + id).addClass("sidebar-collapsed");
}
function toggleBetslip() {
    if($("#right-content-body").hasClass('mobile-hidden')) $("#right-content-body").removeClass("mobile-hidden");
    else $("#right-content-body").addClass("mobile-hidden");
}
function countdown() {
    var interval = setInterval(function () {
        var container = document.getElementById('middle-content');
        var totalHeight = 0;
        for (var i = 0; i < container.children.length; i++) {
            var child = container.children[i];
            totalHeight += child.offsetHeight + 10;
        }
        totalHeight -= 10;
        let height3 = document.getElementById("footer").clientHeight;
        let heightlogo = document.getElementById("logo").clientHeight;
        $("#sidemenus").css("height", totalHeight - heightlogo + 'px');
        if (window.innerWidth < 786) $("#sidemenus").css("height", totalHeight  + height3 - heightlogo - 30 + 'px');
    }, 100);
}
function max(a, b){
    if (a > b) return a;
    return b;
}