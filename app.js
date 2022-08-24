const h1 = document.querySelector(".hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    //way 1
    h1.classList.toggle("clicked");

    //way 2
    // const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }
}

function handleTitleClick(){
    const currentColor = h1.style.color;
    h1.style.color = currentColor === "blue" ?  "tomato" :  "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "pink"
}

function handleWindowCopy(){
    alert("copier!")
}

function handleWindowOffline(){
    alert("SOS NO WIFI!")
}

function handleWindowOnline(){
    alert("ALL GOOD!")
}


h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)