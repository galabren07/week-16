// import { Link } from "react-router-dom"
// import Book from "./Book"
// import Alert from 'react-bootstrap/Alert';
import React from "react";
import Book  from "./Book.js";

export function BookList() {
   const Books = [
   {
      book: "1",
   title: "The Great Gatsby",
   description: "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922",
   published: 1925,
   author: "F. Scott Fitzgerald",
   genre: ["tragedy"],
   image:
   "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg"
}, 
   {
      book: "2",
   title: "The Lord Of The Rings",
   description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction",
   published: "1954",
   author: "J.R.R Tolkien",
   genre: ["High fantasy Adventure"],
   image:
   "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"
}, 
   {
      book: "3",
   title: "The Diary of A Young Girl",
   description: "The Diary of a Young Girl, also known as The Diary of Anne Frank, is a book of the writings from the Dutch language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands.",
   published: "1947",
   author: "Anne Frank",
   genre: ["Autobiography"],
   image:
   "https://upload.wikimedia.org/wikipedia/en/4/47/Het_Achterhuis_%28Diary_of_Anne_Frank%29_-_front_cover%2C_first_edition.jpg"
},
];
  
  
//    return (
//       <div>
//       <h1>BookList</h1>
//       {/* <Alert key={index} variant="primary">
//          <Link to={`${match.url}/${post.id}`}> */}
        
//  {MyBooks.map((bookData)=>(<Book data={bookData} key={bookData.book}/>))}
//          {/* </Link>
//       </Alert> */}
      
//       </div>
//    )
   return (
      <div>
         {Books.map((book, index) => (
            <Book key={index} variant="primary" 
            title={book.title}
            
            description={book.description}
            
            published={book.published}
            
            author={book.author}

            genre={book.genre}

            image={book.image}
            />
            
         
         ))}
      </div>
   );
         
}