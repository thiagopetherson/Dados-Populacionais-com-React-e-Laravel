import React from 'react'; // Importando o React e os hook useState e useCallback
import logo from '../../assets/react.png' // Importando a imagem
import './header.css' // Importando o CSS do Header
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Header(){

    return(
        <div>
            <Navbar bg="light" variant="light" className="justify-content-center">
                <Container className="justify-content-center">
                    <Navbar.Brand to="/">
                        <img src={logo} style={{width:80, marginTop: -7}} />
                    </Navbar.Brand>
                    <Nav className="me-auto justify-content-center">
                      <Link to="/" className="nav-link fw-bold">Home</Link>
                      <Link to="/graficos" className="nav-link fw-bold">Gráficos</Link>
                      <Link to="/tabelas" className="nav-link fw-bold">Tabelas</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}