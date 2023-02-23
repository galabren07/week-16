// import { Link } from "react-router-dom"
// import Book from "./Book"
// import Alert from 'react-bootstrap/Alert';
import React from "react";
import Book from './Book';


export function BookList() {
   const Books = [
   {
      book: "1",
   title: "The Great Gatsby",
   published: 1925,
   author: "F. Scott Fitzgerald",
   genre: ["tragedy"],
   imgSrc:
   "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg"
}, 
   {
      book: "2",
   title: "The Lord Of The Rings",
   published: "1954",
   author: "J.R.R Tolkien",
   genre: ["High fantasy Adventure"],
   imgSrc:
   "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"
}, 
   {
      book: "3",
   title: "The Diary of A Young Girl",
   description: "",
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
            <Book> key={index} variant="primary"
            title:{book.title}
            
            description={book.description}
            
            publish={book.published}
            
            author={book.author}

            genre={book.genre}

            image={book.image}
            </Book>
            
         
         ))}
      </div>
   );
         
}