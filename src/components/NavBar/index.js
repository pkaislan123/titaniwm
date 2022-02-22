import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown'
import './styles.css';
import {

  Link

} from "react-router-dom";
const Navegador = () => {

 

  return (
    <div>
      <div style={{ paddingTop: 40 }} >
        <Link className="a"

          to={{
            pathname: "/",

          }}
        >
          <h1>
            <span style={{ paddingLeft: 50, fontSize: 54, color: 'white' }}>LD Armazéns</span>
          </h1>
        </Link>
      </div>


      <Navbar expand="lg" className="color-nav">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ml-auto">




              <Nav.Item >
                <Nav.Link id="nav-link" href="/" >Início</Nav.Link>
              </Nav.Item>
              <Navbar.Text style={{ color: 'white' }}>|</Navbar.Text>

              <Nav.Item>
                <Nav.Link id="nav-link" href="/sobre">  Sobre Nós </Nav.Link>
              </Nav.Item>
              <Navbar.Text style={{ color: 'white' }}>|</Navbar.Text>

              <Nav.Item>
                <Nav.Link id="nav-link" href="/noticias">  Notícias </Nav.Link>
              </Nav.Item>
              <Navbar.Text style={{ color: 'white' }}>|</Navbar.Text>


              <NavDropdown
                title="Serviços ao Cliente"
                id="nav-dropdown"

              >
                <NavDropdown.Item eventKey="1.0" id="nav-link" href="/minhaconta">Minha Conta
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="2.0" id="nav-link" href="#features">Informações do Pátio
                </NavDropdown.Item>
              </NavDropdown>

              <Navbar.Text style={{ color: 'white' }}>|</Navbar.Text>





              <Nav.Item>
                <Nav.Link id="nav-link" href="/localizacao">  Onde Estamos </Nav.Link>
              </Nav.Item>

              <Navbar.Text style={{ color: 'white' }}>|</Navbar.Text>


              <Nav.Item>
                <Nav.Link id="nav-link" href="/contato">Fale Conosco</Nav.Link>
              </Nav.Item>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default Navegador;
