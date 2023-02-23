import React from "react";
import BookApi  from "./data"

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
  constructor (props){
    super(props);
    this.state={
      feedback: "",
      allFeedBack: []

    }
  }
   getFeedBack = async () => {
  const feedBack= await BookApi.get ()
  }
  render() {
    return (
      <div className="container mt-4">
        <h1 class="display-4 text-center"/>
        <i class="fas fa-book-open text-primary"></i>
        <div className="card mb-4 bg-dark text-light p-3">
         <div className="card-body">
          <div className="row">
            <div className="col-6">
              <img
              src={this.props.img}
              alt="book img"
              className="mb-5 img-thumbnail"
              />
            </div>
            <div className="col-7">
              <h2 className="mb-5">{this.props.data}</h2>
              <p className="mb-4">Title: {this.props.title}</p>
              <p className="mb-2 border-bottom">
                  Published: {this.props.published   }
                </p>
                <p className="mb-2 border-bottom">
                  Genre: {this.props.genre}
                </p>
                <p className="mb-2 border-bottom">
                  Rating: {this.props.author                                                                                                                                                                                                                   }
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