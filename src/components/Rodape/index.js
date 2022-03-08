import React from 'react'
import './styles.scss';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';

const Rodape = () => {

    const date = new Date();


    return (
        <div>
            <div className="footer-top-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">


                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <div className="footer-about-us">
                                    <h2><span>LD Armazéns Gerais</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>
                                    <div className="footer-social">
                                        <a href="#/" target="_blank"><i className="fa fa-facebook"></i></a>
                                        <a href="#/" target="_blank"><i className="fa fa-twitter"></i></a>
                                        <a href="#/" target="_blank"><i className="fa fa-youtube"></i></a>
                                        <a href="#/" target="_blank"><i className="fa fa-linkedin"></i></a>
                                        <a href="#/" target="_blank"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                </div>
                            </Grid>


                            <Grid item xs={12} sm={4}>
                                <div className="footer-menu">
                                    <h2 className="footer-wid-title">Navegação </h2>
                                    <ul>
                                        <li><a href="/">Início</a></li>
                                        <li><a href="/minhaconta">Minha Conta</a></li>
                                        <li><a href="/sobre">Sobre Nós</a></li>
                                        <li><a href="/localizacao">Onde Estamos</a></li>
                                        <li><a href="/noticias">Notícias</a></li>
                                        <li><a href="/contato">Fale Conosoco</a></li>
                                    </ul>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <div className="footer-menu">
                                    <h2 className="footer-wid-title">Acesso Rápido</h2>
                                    <ul>
                                        <li><a href="/patio">Informaçõs do Pátio</a></li>
                                        <li><a href="/cotacoes">Cotações</a></li>
                                        <li><a href="#/">Status</a></li>
                                    </ul>
                                </div>
                            </Grid>


                        </Grid>


                    </div>
                </div>
            </div>

            <div className="footer-bottom-area">
                <div className="container">
                    <Grid item xs={12} >
                        <div  style={{ textAlign: 'center' }}>
                            <div className="copyright">
                                <p>&copy; {moment(date).format("yyyy")} LD Armazéns Gerais. Todos os Direitos Reservados Programado <i className="fa fa-heart"></i> por <a href="https://wpexpand.com" target="noopener noreferrer"> titaniwm</a></p>
                            </div>

                        </div>
                    </Grid>

                </div>
            </div>

        </div>

    )
}
export default Rodape;