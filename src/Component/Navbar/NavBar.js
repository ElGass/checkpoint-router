import React,{useState} from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import Add from './Add';

function NavBar({handlesearch}) {
    const [Search, setSearch] = useState("")
    
    return (
        <Navbar bg="light" variant="light" expand="lg">
  <Navbar.Brand href="#home" style={{color:'#007bff'}}>GNflix</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     <Add/>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>setSearch(e.target.value)}  />
      <Button onClick={handlesearch(Search)} variant="dark">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
    
}

export default NavBar
