let bookIsLiked = "./img/fav.png";
let bookIsNotLikesd = "./img/fav -liked.png";

function init(){
    renderBooks();
}

function renderBooks() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML="";

    for (let i = 0; i < books.length; i++) {
        contentRef.innerHTML += getBookTemplate(i);
        

        let commentsRef = document.getElementById("commentsTable-"+i);

        for (let j = 0; j < books[i].comments.length; j++) {
            commentsRef.innerHTML += getCommentTemplate(i,j);
            
        }
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
                <table class="infoTbale">
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
            <div class="comments">
                <table class="desgin-Comments-Table" id="commentsTable-${i}">

                </table>
            </div>
            <div class="write-comments">
                <input id="commentsInput-${i}" type="text">
                <img onclick="sendComment(${i})" src="./img/send.png" alt="">
            </div>
            

        </div>
    `
}

function getCommentTemplate(i,j) {
    return /*html*/`
        <tr>
            <td>${books[i].comments[j].username}</td>
            <td>${books[i].comments[j].comment}</td>
        </tr>
    `
}

function sendComment(i) {
    let commentsInputRef = document.getElementById("commentsInput-"+i);
    let inputComments = commentsInputRef.value;
    if (inputComments === "") {
        return;
    }

    books[i].comments.push({
        username: "User69",
        comment: inputComments
    });
    renderBooks();
    commentsInputRef="";
}
    
