import React, { useState, useEffect } from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import background from '../../assets/imgs/capa1.png';
import imgExemplo from '../../assets/imgs/capa2.png';
import './styles.scss';

const Localizacao = () => {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);


    function checkDimenssoes() {
        var largura = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        var altura = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        console.log("altura: " + altura);
        console.log("largura: " + largura);

        setHeight(altura * 0.7);
        setWidth(largura * 0.7);

    }

    window.addEventListener('resize', function (event) {
        checkDimenssoes();
    });

    useEffect(() => {

        checkDimenssoes();

    }, []);

    return (
        <div >
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",


            }} >


                <Navegador />
                <div style={{ height: 5, backgroundColor: '#808080' }}>
                </div>

                <div style={{ backgroundColor: '#8B4513', color: 'white' }}>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        item xs={12} sm={12} md={12} lg={12} xl={12}
                    >

                        <Grid item xs={12} sm={12} md={12} lg={1} xl={1} >
                            
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            item xs={12} sm={12} md={12} lg={10} xl={10}
                            style={{ paddingTop: 40, paddingBottom: 40 }}
                            spacing={3}
                        >

                            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}
                             style={{ textAlign: "justify" }}
                            justifyContent="center">
                                <Typography component="h1" variant="h5" >
                                    <span style={{ fontSize: 44 }}>O Armazém</span><br></br> <br></br>

                                    Estamos bem localizados às margens da MG 188, no km 242, na cidade de Guarda-Mor/MG,
                                    contamos com amplo pátio aos utilizadores com restaurante e vestiário.
                                    Estamos a 103 km de Coromandel, a 78 km de Paracatu, atendemos
                                    Produtores Rurais de toda a região do Noroeste de Minas.
                                    <br></br>  <br></br>
                                    Desde 2018 a administração da LD Armazém vem investindo na modernização do armazém,
                                    nossas instalações estão prontas a receber você cliente
                                    e você amigo caminhoneiro. Para um serviço de excelência, temos recepção
                                    e classificação no pátio do armazém.
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                <img alt="Armazém"  style={{ width: '100%'}}
                                    src={imgExemplo}
                                />
                            </Grid>



                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={1} xl={1} >
                        </Grid>
                    </Grid>

                    <div style={{ backgroundColor: '#E6E6FA', color: 'black' }}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            item xs={12} sm={12} md={12} lg={12} xl={12}
                            style={{ paddingBottom: 100 }}
                        >
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                                <Typography component="h1" variant="h3" style={{fontWeight: 'bold' , textAlign: 'center', paddingTop: 150, paddingBottom: 100 }}>
                                    Onde Estamos?
                                </Typography>
                            </Grid>
                            <iframe
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDCL-kmB8NJF2jWAFU8emWx7ldg-B16-nc&q=LD+ARMAZ%C3%89M+GERAIS+LTDA,Guarda-Mor+MG&maptype=satellite"
                                width={width}
                                height={height}
                                title="Localização no Mapa"
                                style={{ paddingBottom: 30 }}
                                allowFullScreen={true}
                                onLoad={() => checkDimenssoes()}

                            >
                            </iframe>

                        </Grid>
                    </div>
                </div>
            </div>

            <div >
                <Rodape />
            </div>
        </div >
    );
}


export default Localizacao;
