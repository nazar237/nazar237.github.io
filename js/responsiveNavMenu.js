function navMenu(){
    var elemOpen = document.getElementById("nav_menu_open");
    var elemClose = document.getElementById("nav_menu_close");

    if(elemOpen.style.display == "none")
    {
        elemOpen.style.display = "inline-block", 
        elemClose.style.display = "none";
    }
    else
    {
        elemOpen.style.display = "none",
        elemClose.style.display = "inline-block";
    }
};