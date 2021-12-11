import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Navbar.css'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Formbuilder from './Formbuilder';
import Milestones from './Milestones';
import Overview from './Overview';
import Summary from './Summary';
import Reporting from './Reporting';

function Header() {
    return (
      <>
      <Router>
      <div className='topdiv'><h1 className='head'>THE GOOD PLATFORM</h1></div>
        <Navbar className='navbar'>
        <Container>
        
        <Nav className="me-auto">
          <Nav.Link as={Link} to={'/overview'} >OVERVIEW</Nav.Link>
          <Nav.Link as={Link} to={"/formbuilder"} >FORM BUILDER</Nav.Link>
          <Nav.Link  as={Link} to={'/milestones'} >MILE STONES</Nav.Link>
          <Nav.Link  as={Link} to={'/reporting'} >REPORTING</Nav.Link>
          <Nav.Link  as={Link} to={"/"} >PROPOSAL SUMMARY</Nav.Link>

        </Nav>
        </Container>
      </Navbar>
      
      <div>
            <Routes>
          <Route path="/overview" element={<Overview />}/>
    
          <Route path="/formbuilder" element={ <Formbuilder />}/>
   
          <Route path="/milestones" element={<Milestones/>}/>
 
          <Route path="/reporting" element={<Reporting/>}/>

          <Route path="/" element={<Summary/>}/>
        </Routes>
            </div>
            </Router>
      
      </>
    )
}

export default Header
