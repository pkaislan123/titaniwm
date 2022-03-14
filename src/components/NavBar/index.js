import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown'
import './styles.css';

import {

  Link

} from "react-router-dom";


const Navegador = (props) => {


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


  const LogoExtendida = () => {
    return (
      <h1 >
        <span style={{paddingLeft: 50,fontSize: 54, color: 'white' }}>LD Armazéns</span>
        
      </h1>
    )
  }

  const LogoRecolhida = () => {
    return (
      <h1>
        <span style={{ paddingLeft: 20, fontSize: 54, color: 'white' }}>LD</span>
        <p style={{ margin: 1}} />
        <span style={{ paddingLeft: 20, fontSize: 54, color: 'white' }}>Armazéns</span>

      </h1>
    )
  }

  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
      <div style={{ paddingTop: 40 }} >
        <Link className="a"

          to={{
            pathname: "/",

          }}
        >
          
            {width > 600 ?
              <LogoExtendida />
              :
              <LogoRecolhida />

            }
          
        </Link>
      </div>


      <Navbar expand="lg" className={"color-nav"}>
        <Container  >
          <Navbar.Toggle style={{ marginBottom: 20, backgroundColor: 'rgba(255,255,255,0.8)' }} />
          <Navbar.Collapse
            style={{
              backgroundColor: width >= 1000 ? "rgba(0,0,0,0.0)" : "black",
              padding: width >= 1000 ? '' : '5%',
            }} >
            <Nav className="ml-auto">
              <Nav.Item >
                <Nav.Link id="nav-link" style={{ textDecoration: props.inicio}} href="/" >Início</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link id="nav-link" style={{ textDecoration: props.sobre}} href="/sobre">  Sobre Nós </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link id="nav-link" style={{ textDecoration: props.noticias}} href="/noticias">  Notícias </Nav.Link>
              </Nav.Item>


              <NavDropdown
                title="Serviços ao Cliente"
                id="nav-dropdown"
                style={{textDecoration: props.servicos}}

              >
                <NavDropdown.Item eventKey="1.0" id="nav-link" href="/minhaconta">Minha Conta
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="2.0" id="nav-link" href="/patio">Informações do Pátio
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="3.0" id="nav-link" href="/cotacoes">Cotações
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="4.0" id="nav-link" href="/status">Status
                </NavDropdown.Item>
              </NavDropdown>






              <Nav.Item>
                <Nav.Link id="nav-link" style={{ textDecoration: props.localizacao}} href="/localizacao">  Onde Estamos </Nav.Link>
              </Nav.Item>



              <Nav.Item>
                <Nav.Link id="nav-link" style={{ textDecoration: props.contato}} href="/contato">Fale Conosco</Nav.Link>
              </Nav.Item>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default Navegador;
