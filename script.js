let bookIsLiked = "./img/fav.png";
let bookIsNotLikesd = "./img/fav -liked.png";

function init(){
    renderBooks();
}

function renderBooks() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML0="";

    for (let i = 0; i < books.length; i++) {
        contentRef.innerHTML += getBookTemplate(i);
    }
    checkLikedBooks()
}

function likeBook(){
    
}

function checkLikedBooks(i) {
    let likeOrUnlike = document.getElementById("toggelLikes").innerHTML;
    let likedBook = Object.key(books[i].liked);
    if (likedBook = true) {
        likebookTrueOrFlase = likeStatus[0]
    }
}



function getBookTemplate(i) {
    return/*html*/`
        <div class="bookContainer">
            <div class="titleArea"><p>${books[i].name}</p></div>
            <div class="line"></div>
            <div class="image-div"><img src="./img/book_cover.png" alt=""></div>
            <div class="line"></div>
            <div class="informations">
                <div class="price-like-container">
                    <div id="bookPrice"><p>${books[i].price} €</p></div>
                    <div id="likeButton">
                        <p class="like-counter">${books[i].likes}</p> 
                        <img src="./img/fav.png" alt="">
                    </div>
                </div>
                <table>
                    <tr>
                        <td>Author</td>
                        <td>:${books[i].author}</td>
                    </tr>
                    <tr>
                        <td>Erscheinungsjahr</td>
                        <td>:${books[i].publishedYear}</td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td>:${books[i].genre}</td>
                    </tr>
                </table>
            </div>
            <div class="line"></div>
            <div class="comments"></div>
            <div class="write-comments">
                <input type="text">
                <img onclick="" src="./img/send.png" alt="">
            </div>
            

        </div>
    `
}