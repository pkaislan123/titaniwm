import React, {  useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown'
import './styles.css';

import {

  Link

} from "react-router-dom";
const Navegador = () => {

 
  const [width, setWidth] = useState(0);


    function checkDimenssoes() {
        var largura = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
      

        setWidth(largura);

    }

    window.addEventListener('resize', function (event) {
        checkDimenssoes();
    });

    useEffect(() => {

        checkDimenssoes();

    }, []);

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


      <Navbar expand="lg" className={"color-nav"}>
        <Container  >
          <Navbar.Toggle style={{backgroundColor: width >= 1000 ? "rgba(0,0,0,0.0)" : "rgba(0,0,0,0.3)"}} />
          <Navbar.Collapse 
          style={{backgroundColor: width >= 1000 ? "rgba(0,0,0,0.0)" : "black",
          padding: width >= 1000 ? '' : '5%',
          }} >
            <Nav className="ml-auto">
              <Nav.Item >
                <Nav.Link id="nav-link" href="/" >Início</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link id="nav-link" href="/sobre">  Sobre Nós </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link id="nav-link" href="/noticias">  Notícias </Nav.Link>
              </Nav.Item>


              <NavDropdown 
                title="Serviços ao Cliente"
                id="nav-dropdown"

              >
                <NavDropdown.Item eventKey="1.0" id="nav-link" href="/minhaconta">Minha Conta
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="2.0" id="nav-link" href="/patio">Informações do Pátio
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="3.0" id="nav-link" href="/cotacoes">Cotações
                </NavDropdown.Item>
              </NavDropdown>






              <Nav.Item>
                <Nav.Link id="nav-link" href="/localizacao">  Onde Estamos </Nav.Link>
              </Nav.Item>



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
