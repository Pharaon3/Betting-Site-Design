function toggle() {
    if($("#sidebarMenu").hasClass('collapse')) $("#sidebarMenu").removeClass("collapse");
    else $("#sidebarMenu").addClass("collapse");
}
function collapse(id){
    if($("#" + id).hasClass("sidebar-collapsed")) $("#" + id).removeClass("sidebar-collapsed");
    else $("#" + id).addClass("sidebar-collapsed");
}