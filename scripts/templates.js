function getRenderBookInfoTemplate(bookIndex, bookCommentsRef) {
    let heartAtStart = (books[bookIndex].liked) ? 'red_heart' : '';
    
    return /*html*/`
      <div class="book_overview">
        <div class="book_title">
          <h2>${books[bookIndex].name}</h2>
        </div>
        <div class="book_cover">
          <img src="./assets/img/book-svgrepo-com.svg" alt="cover">
        </div>
        <div class="book_price">
          <h2>${books[bookIndex].price.toFixed(2)} €</h2>
          <div class="likes">
            <p id="likes_counter${bookIndex}">${books[bookIndex].likes}</p>
            <img onclick="toggleHeartAndCounter(${bookIndex})" class="${heartAtStart}" id="like_heart${bookIndex}" src="./assets/icons/heart-svgrepo-com.svg" alt="like">
          </div>
        </div>
        <div class="book_info">
          <table>
            <tr>
              <th><b>Author </b></td>
              <td> : ${books[bookIndex].author}</td>
            </tr>
            <tr>
              <th><b>Erscheinungsjahr </b></td>
              <td> : ${books[bookIndex].publishedYear}</td>
            </tr>
            <tr>
              <th><b>Genre </b></td>
              <td> : ${books[bookIndex].genre}</td>
            </tr>
          </table> 
        </div>
        ${getRenderBookCommentsTemplate(bookCommentsRef)}
      </div>
    `
}

function getRenderBookCommentsTemplate(bookCommentsRef) {
  return /*html*/`
    <div class="book_comments">
      <h3>Kommentare :</h3>
      <div class="book_comments_table_overflow" >
        <table>
          ${bookCommentsRef}
        </table>
      </div>
    </div>
    <div class="book_comments_input_section">
      <input class="book_comments_input_field" type="text">
      <img onclick="sendInput()" src="./assets/icons/send-2-svgrepo-com.svg" alt="">
    </div>
  `
}