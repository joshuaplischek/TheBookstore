
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
            <div class="line"></div>
            <div class="image-div"><img src="./img/book_cover.png" alt=""></div>
            <div class="line"></div>
            <div class="informations"></div>
            <div class="line"></div>
            <div class="comments"></div>
            <div class="write-comments">
                <input type="text">
                <img onclick="" src="./img/send.png" alt="">
            </div>
            

        </div>
    `
}