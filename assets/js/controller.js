function toggle() {
    if($("#sidemenus").hasClass('sidemenus-show')) $("#sidemenus").removeClass("sidemenus-show");
    else $("#sidemenus").addClass("sidemenus-show");
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
        let height1 = document.getElementById("middle-content-header").clientHeight;
        let height2 = document.getElementById("middle-content-body").clientHeight;
        let height3 = document.getElementById("footer").clientHeight;
        let heightlogo = document.getElementById("logo").clientHeight;
        $("#sidemenus").css("height", height1 + height2 - heightlogo + 'px');
        if (window.innerWidth < 786) $("#sidemenus").css("height", height1 + height2 + height3 - heightlogo - 30 + 'px');
    }, 100);
}
function max(a, b){
    if (a > b) return a;
    return b;
}