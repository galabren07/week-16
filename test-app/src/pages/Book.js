import React from "react";
import { Api }  from "./data.js"
// import { BookList } from "./BookList";

// import { BookList } from "./pages/BookList"




// export const Book=(props) => {
//   console.log(props.data);
//   return (
//   <h1>
//     Book {props.data.title} 
//     </h1>
//   )
// }

export default class Book extends React.Component {
  constructor (props) {
    console.log(props)
    super(props);
    this.state = {
      feedback: "",
      allFeedBack: []

    }
  }
   getFeedBack = async () => {
  const feedBack= await Api.get ()
  }
  render() {
    return (
      <div className="container mt-4">
        <h1 className="display-4 text-center"/>
        <i className="fas fa-book-open text-primary"></i>
        <div className="card mb-4 bg-dark text-light p-3">
         <div className="card-body">
          <div className="row">
            <div className="col-6">
              <img
              src={this.props.image}
              alt="book image"
              className="mb-5 img-thumbnail"
              />
            </div>
            <div className="col-7">
              <h2 className="mb-5">{this.props.data}</h2>
              <p className="mb-4">Title: {this.props.title}</p>
              <p className="mb-2 border-bottom">
                  Published: {this.props.published}
                </p>
                <p className="mb-2 border-bottom">
                  Genre: {this.props.genre}
                </p>
                <p className="mb-2 border-bottom">
                  Author: {this.props.author}                                                                                                                                                                                                                   }
                </p>
                <p className="mb-2 border-bottom">
                  Description: {this.props.description}
                </p>
                <br />                                                
           
            </div>
          </div>                                 

         </div>                                     
        </div>
      </div>
    );
  }
}

// export const Book = (props) => {
//   const { book, updateBook } = props;

//   const deleteRoom = (roomId) => {
//       const updatedBook ={
//           ...Book,
//           rooms: Book.rooms.filter((x) => x._id !== roomId)
//       };
//     updateBook(updatedBook);  
//   }

//   const addNewRoom = (room) => updateBook({ ...book, rooms: [...house.rooms, room]});

//   const rooms = () => (
//       <ul>
//           {BookList.rooms.map((room, index) => (
//               <li key={index}>
//                   <label> {`${room.name} Area: ${room.area}`}</label>
//                   <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
//               </li>
//           ))}
//       </ul>
//   );

//   return (
//       <div>
//        <h1>{book.name}</h1>
//        {
//           rooms({ rooms, bookId: book._id, deleteRoom})
//        }
//        {/* <NewRoomForm addNewRoom={addNewRoom} /> */}
//       </div>
//   );
//   };