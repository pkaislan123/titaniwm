import React, { useEffect } from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import background from '../../assets/imgs/capa1.png';
import email from '../../assets/imgs/email.png';
import telefone from '../../assets/imgs/telefone.png';
import whatsapp from '../../assets/imgs/whatsapp.png';

import './styles.scss';

const Contato = () => {


    useEffect(() => {


    }, []);

    return (
        <div className="container-fluid"  >
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",


            }} >


                <Navegador />
                <div style={{ height: 5, backgroundColor: '#808080' }}>
                </div>

                <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        item xs={12} sm={12} md={12} lg={12} xl={12}
                        style={{ paddingTop: 40, paddingBottom: 40 }}
                    >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "center" }} >
                            <Typography component="h1" variant="h5" >
                                <span style={{ fontSize: 44 }}> Como você prefere falar com a gente?</span><br></br> <br></br>
                            </Typography>
                        </Grid>

                    </Grid>
                </div>

                <div style={{ backgroundColor: 'white', color: 'black' }}>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        item xs={12} sm={12} md={12} lg={12} xl={12}
                        style={{ paddingTop: 40, paddingBottom: 40 }}
                    >

                        <Grid item xs={12} sm={12} md={12} lg={3} xl={3} style={{ textAlign: "center" }} >
                            <Grid
                                container
                                direction="column"
                                alignItems="center"
                                item xs={12} sm={12} md={12} lg={12} xl={12}
                                style={{ paddingTop: 40, paddingBottom: 40 }}
                            >
                                
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "left" }} >
                                <img alt="email"
                                    style={{ weight: 30, height: 30 }}
                                    src={email}
                                />
                                <Typography component="h1" variant="h5" >
                                    <span style={{ fontSize: 24, color: '#20165b', fontWeight: 'bold' }}> E-mail</span>
                                </Typography>

                                <Typography component="h1" variant="h5" >
                                  <span style={{ fontSize: 18, color: 'black' }}> Tem alguma dúvida?</span>
                                </Typography>

                                <Typography component="h1" variant="h5" >
                                 <span style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}> ldarmazens@gmail.com</span>
                                </Typography>

                                </Grid>
                              
                            </Grid>
                        </Grid>
                      


                        <Grid item xs={12} sm={12} md={12} lg={3} xl={3} style={{ textAlign: "center" }} >
                            <Grid
                                container
                                direction="column"
                                alignItems="center"
                                item xs={12} sm={12} md={12} lg={12} xl={12}
                                style={{ paddingTop: 40, paddingBottom: 40 }}
                            >
                               
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "left" }} >
                                <img alt="telefone"
                                    style={{ weight: 30, height: 30 }}
                                    src={telefone}
                                />
                                <Typography component="h1" variant="h5" >
                                    <span style={{ fontSize: 24, color: '#20165b', fontWeight: 'bold' }}> Telefone</span>
                                </Typography>

                                <Typography component="h1" variant="h5" >
                               <span style={{ fontSize: 18, color: 'black' }}> Ligue para nós</span>
                                </Typography>

                                <Typography component="h1" variant="h5" >
                                 <span style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}> Léticia: (38) 99936-5303</span>
                                </Typography>

                                </Grid>
                              
                              

                            </Grid>
                        </Grid>


                        <Grid item xs={12} sm={12} md={12} lg={3} xl={3} style={{ textAlign: "center" }} >
                            <Grid
                                container
                                direction="column"
                                alignItems="center"
                                item xs={12} sm={12} md={12} lg={12} xl={12}
                                style={{ paddingTop: 40, paddingBottom: 40 }}
                            >
                                
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "left" }} >
                                <img alt="whatsapp"
                                    style={{ weight: 30, height: 30 }}
                                    src={whatsapp}
                                />
                                <Typography component="h1" variant="h5" >
                                    <span style={{ fontSize: 24, color: '#20165b', fontWeight: 'bold' }}>Whatsapp</span>
                                </Typography>

                                <Typography component="h1" variant="h5" >
                               <span style={{ fontSize: 18, color: 'black' }}> Converse conosco</span>
                                </Typography>

                                <a 
                                style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }} 
                                href="https://api.whatsapp.com/send?1=pt_BR&phone=5538999365303">
                                   
                                    Web</a>
               

                                </Grid>
                               
                              
                            </Grid>
                        </Grid>


                    </Grid>
                </div>

            </div>

            <div >
                <Rodape />
            </div>
        </div >
    );
}


export default Contato;
