
function init(){
    renderBooks()
}

function renderBooks() {
    let sliderRef = document.getElementById("content");
    sliderRef.innerHTML0="";

    for (let i = 0; i < books.length; i++) {
        sliderRef.innerHTML += getBookTemplate(i);
    
    }
}

function getBookTemplate(i) {
    return/*html*/`
        <div class="bookContainer">
            <div class="titleArea"><p>Titel</p></div>
            <div><img src="" alt=""></div>
            <div></div>
            <div class="write-comment">
                <input type="text">
                <img onclick="" src="" alt="">
            </div>
            

        </div>
    `
}