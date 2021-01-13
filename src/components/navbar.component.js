import React from 'react'
import {Link} from "react-router-dom"

// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Topbar() {
        
        return (
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand to="/" as={Link}>Shopping Lists</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link to="/" as={Link}>My Lists</Nav.Link>
            <Nav.Link to="/newlist"  as={Link}>New List</Nav.Link>
            <Nav.Link to="/managecatalog"  as={Link}>Manage Catalog</Nav.Link>
          </Nav>
          </Navbar>
            // <AppBar position="static" color="secondary">
            // <Toolbar>
            //   <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            //     <MenuIcon />
            //   </IconButton>
            //   <Typography variant="h6" className={classes.title}>
            //     
            //   </Typography>
            //   <Typography variant="h6" className={classes.title}>
            //     <Link to="/newlist" component={RouterLink}>New List</Link>
            //   </Typography>
            //   <Typography variant="h6" className={classes.title}>
            //     <Link to="/managecatalog" component={RouterLink}>Manage Catalog</Link>
            //   </Typography>
            //   </Toolbar>
            // </AppBar>
        )
}
export default Topbar