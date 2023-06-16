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
function countdown(pagelink="") {
    var interval = setInterval(function () {
        let container = document.getElementById('middle-content');
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
    if (pagelink=="detail"){
        let container1 = $("#bet-cards");
        if (container1.scrollLeft() == 0) {
            $("#leftbtn").removeClass("bet-card-active");
        } else if (!$("#leftbtn").hasClass("bet-card-active")) $("#leftbtn").addClass("bet-card-active");
        let rightdif = document.getElementById("bet-cards-button").getBoundingClientRect().left - document.getElementById("bet-card4").getBoundingClientRect().right;
        // console.log("rightdif", rightdif);
        if (rightdif > 20) {
            $("#rightbtn").removeClass("bet-card-active");
        } else if (!$("#rightbtn").hasClass("bet-card-active")) $("#rightbtn").addClass("bet-card-active")
    }
    if (window.innerWidth > 1300){
        $("#middle-content").css("max-width", window.innerWidth - 672);
    } else if (window.innerWidth > 786){
        $("#middle-content").css("max-width", window.innerWidth - 287);
    } else $("#middle-content").css("max-width", "100%");
    }, 100);
}
function max(a, b){
    if (a > b) return a;
    return b;
}
function scrollHorizontal (contId, amount){
    let container = $("#" + contId);
    let leftVal = container.scrollLeft();
    container.scrollLeft(max(0, leftVal + amount));
    // if (container.scrollLeft() == 0) {
    //     $("#leftbtn").removeClass("bet-card-active");
    // } else if (!$("#leftbtn").hasClass("bet-card-active")) $("#leftbtn").addClass("bet-card-active");
}