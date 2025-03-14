
function init(){
    renderBooks()
}

function renderBooks() {
    let sliderRef = document.getElementById("book_slider");
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
            <div>
                <input type="text">
                <button onclick=""></button>
            </div>
            

        </div>
    `
}