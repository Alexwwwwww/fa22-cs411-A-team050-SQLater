import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { IconButton } from "@mui/material";
import axios from "axios";

const NavBar = () => {
  const IsConnectionOpen = () => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:5000/isConnectionOpen",
    }).then((response) => {
      console.log(response);
    });
  };

  console.log(IsConnectionOpen())

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <LocalLibraryIcon className="home-style" />
          <Navbar.Brand className="logo" href="/">
            ILLearn
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="link" href="hw">
              Homework Assignments
            </Nav.Link>
            <Nav.Link className="link" href="ga">
              GA Assignments
            </Nav.Link>
            <Nav.Link className="link" href="edit">
              Edit Assignments
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">
              <IconButton>
                <HomeRoundedIcon fontSize="medium" className="home-style" />
              </IconButton>
            </Nav.Link>
            <Nav.Link href="/">
              <IconButton>
                <SettingsRoundedIcon fontSize="medium" className="home-style" />
              </IconButton>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
