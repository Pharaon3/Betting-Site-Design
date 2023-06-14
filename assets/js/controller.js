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