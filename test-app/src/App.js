// import logo from './logo.svg';
// import './App.css';
import { Link, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import { NotFound } from "./pages/NotFound"
// import { BookRoutes } from "./BookRoutes"
// import { Navbar } from "./pages/Navbar"
import { BookList } from "./pages/BookList"
import Contact from "./pages/Contact"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button  from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import BookApi  from "./Data"

function App() {
  const location = useLocation()
  return (
    <>
    <Container>
     <nav>
     
        <ButtonGroup>
        <Button variant="outline-secondary">
          <Link to="/home">Home</Link>
        </Button>
        </ButtonGroup>
      
        <ButtonGroup>
          <Button variant="outline-secondary">
          <Link end to="/books">Books</Link>
            </Button>
            </ButtonGroup>
       
        <ButtonGroup>
        <Button variant="outline-secondary">
          <Link end to="/contact">Contact</Link>
          </Button>
          </ButtonGroup>
     </nav>
    {location.state}
     <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/books/*" element={<BookList/>} />
    <Route path="/contacts" element={<Contact/>} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  </Container>
  </>
  )
 
}

export default App
