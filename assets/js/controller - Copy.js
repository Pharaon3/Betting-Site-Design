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
        let middlecontainer = document.getElementById('middle-content');
        var middletotalHeight = 0;
        for (var i = 0; i < middlecontainer.children.length; i++) {
            var child = middlecontainer.children[i];
            middletotalHeight += child.offsetHeight + 10;
        }
        let rightcontainer = document.getElementById('right-content');
        var righttotalHeight = 0;
        for (var i = 0; i < rightcontainer.children.length; i++) {
            var child = rightcontainer.children[i];
            righttotalHeight += child.offsetHeight + 10;
        }
        let totalHeight = max(middletotalHeight, righttotalHeight);
        totalHeight -= 10;
        let height3 = document.getElementById("footer").clientHeight;
        let heightlogo = document.getElementById("logo").clientHeight;
        $("#sidemenus").css("height", totalHeight - heightlogo + 'px');
        if (window.innerWidth < 786) $("#sidemenus").css("height", totalHeight  + height3 - heightlogo - 30 + 55 + 'px');
    if (pagelink=="detail"){
            let container1 = $("#bet-cards");
            if (container1.scrollLeft() == 0) {
                $("#leftbtn").removeClass("bet-card-active");
            } else if (!$("#leftbtn").hasClass("bet-card-active")) $("#leftbtn").addClass("bet-card-active");
            let cards = document.getElementById("bet-cards").children;
            lastcardwidth = 0;
            if (cards.length) {
                let lastcard = cards[cards.length - 1];
                lastcardwidth = lastcard.getBoundingClientRect().right;
            }
            let rightdif = document.getElementById("bet-cards-button").getBoundingClientRect().left - lastcardwidth;
            if (rightdif > 20) {
                $("#rightbtn").removeClass("bet-card-active");
            } else if (!$("#rightbtn").hasClass("bet-card-active")) $("#rightbtn").addClass("bet-card-active")
        }

    if (window.innerWidth > 1300){
            $("#middle-content").css("max-width", window.innerWidth - 672);
    } else if (window.innerWidth > 786){
            $("#middle-content").css("max-width", window.innerWidth - 287);
        } else $("#middle-content").css("max-width", "100%");

    }, 1);
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