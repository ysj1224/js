const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickClass = "active"
    if(h1.classList.contains(clickClass)) {
        h1.classList.remove(clickClass);
    } else {
        h1.classList.add(clickClass);
    }
}

h1.addEventListener("click", handleTitleClick);


  