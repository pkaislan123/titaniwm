import React, { useState, useEffect } from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import Grid from '@material-ui/core/Grid';
import capa from '../../assets/imgs/capa_tela_contratos.png';
import silo from '../../assets/imgs/silo_graos.png';
import ciclo_de_vida_contrato from '../../assets/imgs/ciclo_de_vida_contrato.png';
import controles from '../../assets/imgs/controles.png';
import tickets_e_nfs from '../../assets/imgs/tickets_e_nfs.png';
import envios from '../../assets/imgs/envios.png';
import www from '../../assets/imgs/www.png';
import usando_programa from '../../assets/imgs/usando_programa.jpeg';

import './styles.scss';

import Carousel from 'react-bootstrap/Carousel';



const GestaoDeFinancas = () => {


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    const [width, setWidth] = useState(0);


    function checkDimenssoes() {
        var largura = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
      
        console.log("largura: " + largura);

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
            <div >
                <div style={{
                    backgroundImage: `url(${silo})`,
                    backgroundSize: "cover",
                    height: '90%'

                }} >

                    <Navegador travado={false} />
                    <div style={{ backgroundColor: 'rgba(3,0,15,0.6)', color: 'white' }}>
                        <Grid
                            container
                            direction="row"
                            item xs={12} sm={12} md={12} lg={12} xl={12}
                            justifyContent="center"
                            alignItems="center"
                            style={{ paddingTop: 50, paddingBottom: 65, textAlign: width < 768 ? 'center' : null }}
                        >

                            <Grid item xs={12} sm={12} md={12} lg={1} xl={1}
                            >
                            </Grid>

                            <Grid
                                container
                                direction="row"
                                item xs={12} sm={12} md={12} lg={5} xl={5}
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                style={{ paddingTop: 10, paddingBottom: 10 }}
                            >

                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                    style={{ paddingBottom: 50 }}

                                >
                                    <span style={{ fontWeight: 'bold', fontSize: 55, color: 'Azure' }}>
                                        e-Contract
                                    </span>
                                </Grid>

                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                >
                                    <span style={{ fontSize: 28, color: 'LightGoldenrodYellow' }}>
                                        Software especializado em Gestão de Contratos de Commodities para seu negócio!
                                    </span>
                                </Grid>



                            </Grid>
                            <Grid
                                container
                                direction="row"
                                item xs={12} sm={12} md={12} lg={5} xl={5}
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                style={{ paddingTop: 10, paddingBottom: 10 }}
                            >

                                <img alt="img1"

                                    src={capa}
                                />



                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={1} xl={1}
                            >
                            </Grid>

                        </Grid>

                    </div>
                </div>

            </div>
            <div style={{ padding: 10 }}>
                <Grid
                    container
                    direction="row"
                    item xs={12} sm={12} md={12} lg={12} xl={12}
                    justifyContent="center"
                    alignItems="center"
                    style={{ paddingBottom: 10 }}
                >

                    <Grid item xs={12} sm={12} md={12} lg={1} xl={1}
                    >
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        item xs={12} sm={12} md={12} lg={5} xl={5}
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        style={{ paddingTop: 40, paddingBottom: 10 }}
                    >

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                            style={{ paddingBottom: 5 }}

                        >
                            <div style={{ backgroundColor: 'green', width: '66%', height: 5, marginBottom: 20 }}> </div>
                            <span style={{ fontWeight: 'bold', fontSize: 33, paddingTop: 20 }}>
                                Flexível, Modular e Expansível
                            </span>

                        </Grid>



                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                            style={{ paddingTop: 20 }}
                        >
                            <p>O <span style={{ fontWeight: 'bold' }}>e-Contract</span> é um <span style={{ fontWeight: 'bold' }}> software gestor</span> voltado ao segmento do agronegócio, pode ser usado tanto por produtores agricolas
                                que desejam uma melhor gestão de seus contratos, bem como para armazéns de grãos e corretoras que negociam grandes volumes de commodities.</p>

                        </Grid>

                    </Grid>


                    <Grid item xs={12} sm={12} md={12} lg={1} xl={1}
                    >
                    </Grid>

                </Grid>

            </div>
            <div style={{ backgroundColor: "Azure", padding: 10 }}>
                <Grid
                    container
                    direction="row"
                    item xs={12} sm={12} md={12} lg={12} xl={12}
                    justifyContent="center"
                    alignItems="center"
                    style={{ paddingTop: 50}}
                >

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <p style={{ fontSize: 28 }}>
                            O que o <span style={{ fontWeight: 'bold' }}>
                                e-Contract
                            </span> tem a te oferecer?
                        </p>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={1} xl={1}
                    >
                    </Grid>


                    <Grid
                        container
                        direction="row"
                        item xs={12} sm={12} md={12} lg={10} xl={10}
                        justifyContent="center"
                        alignItems="center"
                       
                    >


                        <Carousel 
                        style={{  width: width < 768 ? '100%' : '70%',  paddingBottom: 40, color: 'black' }}
                            indicators={true}
                            activeIndex={index} onSelect={handleSelect}
                            index={index}
                        >
                            <Carousel.Item
                            interval={10000}>
                                <img
                                    className="d-block w-100"
                                    src={ciclo_de_vida_contrato}
                                    alt="First slide"
                                />
                                {width < 768 ?
                                    <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '25px', paddingTop: 30, textAlign: 'center' }}>Gerencie o <span style={{ fontWeight: 'bold' }}>Ciclo de Vida</span> de seus <span style={{ textDecoration: 'underline' }}>contratos</span> desde a negociação até a conclusão</p>
                                    :
                                    <p>
                                        <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '20px', paddingTop: 30, textAlign: 'center' }}>Gerencie o <span style={{ fontWeight: 'bold' }}>Ciclo de Vida</span> de Seus <span style={{ textDecoration: 'underline' }}>Contratos</span></p>
                                        <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '0px', textAlign: 'center' }}>desde a negociação até a conclusão</p>
                                    </p>
                                }

                            </Carousel.Item>

                            <Carousel.Item interval={10000}>
                                <img
                                    className="d-block w-100"
                                    src={controles}
                                    alt="Second slide"
                                />

                                {width < 768 ?
                                    <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '25px', paddingTop: 30, textAlign: 'center' }}>Em cada <span style={{ textDecoration: 'underline' }}>contrato</span>, faça o gerenciamento de recebimentos, carregamentos e pagamentos</p>

                                    :
                                    <p>
                                        <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '20px', paddingTop: 30, textAlign: 'center' }}>Em cada <span style={{ textDecoration: 'underline' }}>contrato</span>, faça o gerenciamento de</p>
                                        <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '0px', textAlign: 'center', fontStyle: 'italic' }}>recebimentos, carregamentos e pagamentos</p>
                                    </p>
                                }

                            </Carousel.Item>

                            <Carousel.Item interval={10000}>
                                <img
                                    className="d-block w-100"
                                    src={tickets_e_nfs}
                                    alt="Thirty slide"
                                />
                                {width < 768 ?
                                    <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '25px', paddingTop: 30, textAlign: 'center' }}>Gerencie e faça  <span style={{ textDecoration: 'underline' }}>auditoria</span> de notas fiscais e tickets</p>

                                    :
                                    <p>
                                        <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '20px', paddingTop: 30, textAlign: 'center' }}>Gerencie e faça  <span style={{ textDecoration: 'underline' }}>auditoria</span> de</p>
                                        <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '0px', textAlign: 'center', fontWeight: 'bolder' }}>notas fiscais e tickets</p>
                                    </p>
                                }

                            </Carousel.Item>

                            <Carousel.Item interval={10000}>
                                <img
                                    className="d-block w-100"
                                    src={envios}
                                    alt="Thirty slide"
                                />
                                {width < 768 ?
                                    <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '25px', paddingTop: 30, textAlign: 'center' }}><span style={{ fontWeight: 'bolder' }}>Envie</span> todo tipo de documento via <span style={{ fontWeight: 'bolder' }}>email e whatsapp</span>  dentro da plataforma</p>

                                    :
                                    <p>
                                        <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '20px', paddingTop: 30, textAlign: 'center' }}><span style={{ fontWeight: 'bolder' }}>Envie</span> todo tipo de documento</p>
                                        <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '0px', textAlign: 'center' }}>via <span style={{ fontWeight: 'bolder' }}>email e whatsapp</span>  dentro da plataforma</p>
                                    </p>
                                }
                            </Carousel.Item>


                            <Carousel.Item interval={10000}>
                                <img
                                    className="d-block w-100"
                                    src={www}
                                    alt="Thirty slide"
                                />

                                {width < 768 ?
                                    <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '25px', paddingTop: 30, textAlign: 'center' }}> Mantenha seus clientes conectados através de um WebSite exclusivo e App para dispositivos móveis  </p>

                                    :
                                    <p>
                                        <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '20px', paddingTop: 30, textAlign: 'center' }}> Mantenha seus clientes conectados através de um </p>
                                        <p style={{ color: 'Indigo', fontSize: 22, lineHeight: '0px', textAlign: 'center' }}>WebSite exclusivo e App para dispositivos móveis  </p>
                                    </p>
                                }
                            </Carousel.Item>


                        </Carousel>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={1} xl={1}
                    >
                    </Grid>

                </Grid>


            </div>

            <div style={{ backgroundColor: "Azure", padding: 10 }}>
                <Grid
                    container
                    direction="row"
                    item xs={12} sm={12} md={12} lg={12} xl={12}
                    justifyContent="center"
                    alignItems="center"
                    style={{ paddingTop: 50, paddingBottom: 10 }}
                >

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                        style={{ paddingBottom: 5 }}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <p style={{ fontSize: 28 }}> Como o <span style={{ fontWeight: 'bold' }}>
                            e-Contract
                        </span> funciona?
                        </p>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={2} xl={2}
                    >
                    </Grid>


                    <Grid
                        container
                        direction="row"
                        item xs={12} sm={12} md={12} lg={8} xl={8}
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        style={{ fontSize: 22 }}
                    >

                        <p>  <span style={{ fontWeight: 'bold' }}>Para Você:</span> No seu négocio o e-Contract pode fazer muito.
                            Administre prazos de recebimento de produtos, agende corretamento a expedição, mantenha o departamento financeiro sadio,
                            faça controle e auditoria de tickets adventos do seu gerenciador de balança. Mantenha se em dia com o fisco administrando corretamente
                            suas notas fiscais.
                        </p>




                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={2} xl={2}
                    >
                    </Grid>

                </Grid>

            </div>

            <div >
                <div style={{
                    backgroundImage: width < 768 ? null : `url(${usando_programa})`,
                    backgroundColor: 'Indigo',
                    backgroundSize: "cover",
                    height: 500

                }} >
                    <div style={{ backgroundColor: 'rgba(3,0,15,0.6)', color: 'white' }}>
                        <Grid
                            container
                            direction="row"
                            item xs={12} sm={12} md={12} lg={12} xl={12}
                            justifyContent="center"
                            alignItems="center"
                            style={{ height: 500 }}
                        >

                            <p style={{ fontSize: 45, marginTop: 60, fontWeight: 'bold', textAlign: 'center' }}> Torne simples, intuitivo e eficaz <br></br>a gestão de contratos em seu negócio!</p>

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

export default GestaoDeFinancas;