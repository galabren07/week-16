// import logo from './logo.svg';
// import './App.css';
import { Link, Route, Routes } from "react-router-dom"

// import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import BookList from "./pages/BookList"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }




function App() {
  return (
    <>
    <nav>
      <ul>
        <li> 
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </nav>
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books" element={<BookList />} />
  </Routes>
  </>
  )
 
}

export default App;
