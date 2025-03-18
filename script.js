let bookIsNotLikesd = "./img/fav.png";
let bookIsLiked = "./img/fav-liked.png";

function init(){
    renderBooks();
}

function renderBooks() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML="";

    for (let i = 0; i < books.length; i++) {
        contentRef.innerHTML += getBookTemplate(i);
        let commentsRef = document.getElementById(`commentsTable-${i}`);

        for (let j = 0; j < books[i].comments.length; j++) {
            commentsRef.innerHTML += getCommentTemplate(i,j);    
        }
        likeOrUnlike(i)
    }
}

function likeOrUnlike(i) {
    let likeImageRef = document.getElementById(`likeImage${i}`);
    if (books[i].liked === true) { 
        likeImageRef.src = bookIsLiked;
        
    } else{
        likeImageRef.src = bookIsNotLikesd;
    }
}

function switchLike(i){
    let likeRefImg = document.getElementById(`likeImage${i}`);
    let likesContentRef = books[i].liked;

    if (likesContentRef === true) {
        likeRefImg = bookIsNotLikesd;
        books[i].liked = false;  
        books[i].likes -= 1; 
    } else{
        likeRefImg = bookIsLiked;
        books[i].liked = true;
        books[i].likes += 1;
    }
    renderBooks()
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
                    <div class="like-button-container" id="likeButton${i}">
                        <p id="likeCounter${i}">${books[i].likes}</p> 
                        <img onclick="switchLike(${i})" id="likeImage${i}" src="" alt="">
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
    
