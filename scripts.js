function openProject(id) {
    if (document.getElementById(id+"Dropdown").style.top != 100+"%"){
        closeAll();
        document.getElementById(id+"Dropdown").style.top = 100+"%";
        document.getElementById(id+"Dropdown").style.opacity = 100+"%";
        var height = document.getElementById(id+"Dropdown").clientHeight
        height = height + (20)
        document.getElementById(id+"Container").style.marginBottom = height + "px";

    } else{
        document.getElementById(id+"Dropdown").style.transition = "top .4s ease-in-out, opacity 1s ease";
        document.getElementById(id+"Dropdown").style.top = 0+"%";
        document.getElementById(id+"Dropdown").style.opacity = 0+"%";
        document.getElementById(id+"Container").style.marginBottom = 5+"%";
    }
}

function closeAll(){
    var dropdowns = document.getElementsByClassName("dropdown");
    var containers = document.getElementsByClassName("container");
    var overlays = document.getElementsByClassName("overlay");
    for (let i = 0; i < dropdowns.length; i++){
        dropdowns[i].style.opacity = 0+"%";
        dropdowns[i].style.top = 0+"%";
    }
    for (let i = 0; i < containers.length; i++){
        containers[i].style.marginBottom = 5+"%";
    }

}
