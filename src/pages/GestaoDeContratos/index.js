import React from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import Grid from '@material-ui/core/Grid';
import capa from '../../assets/imgs/capa_tela_contratos.png';
import silo from '../../assets/imgs/silo_graos.png';
import tela_contratos from '../../assets/imgs/tela_de_contratos.png';

const GestaoDeContratos = () => {






    return (
        <div >
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
                            style={{ paddingTop: 50, paddingBottom: 65 }}
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
                                        Software especializado em Gestão de Contratos de Commodities: tanto para você, como para sua empresa!
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
            <div>
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
                        style={{ paddingTop: 10, paddingBottom: 10 }}
                    >

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                            style={{ paddingBottom: 5 }}

                        >
                            <span style={{ fontWeight: 'bold', fontSize: 22 }}>
                                Você ou Sua Empresa ainda utiliza planilhas para o controle e gestão de contratos de commodities?
                            </span>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                            style={{ paddingTop: 20 }}
                        >
                            <p>O <span style={{ fontWeight: 'bold' }}>e-Contract</span> é um <span style={{ fontWeight: 'bold' }}>ERP</span> voltado ao segmento do agronegócio, pode ser usado tanto por produtores agricolas
                                que desejam uma melhor gestão de seus contratos, bem como para armazéns de grãos e corretoras que negociam grandes volumes de commodities.</p>

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

                            src={tela_contratos}
                        />



                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={1} xl={1}
                    >
                    </Grid>

                </Grid>

            </div>
            <div style={{backgroundColor: "Azure"}}>
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
                        <span style={{  fontSize: 28 }}>
                            O que o e-Contract tem a te oferecer?
                        </span>
                    </Grid>

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

                       



                    </Grid>
                    <Grid
                        container
                        direction="row"
                        item xs={12} sm={12} md={12} lg={5} xl={5}
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        style={{ paddingTop: 10, paddingBottom: 10 }}
                    >

                        


                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={1} xl={1}
                    >
                    </Grid>

                </Grid>

            </div>
            <div >
                <Rodape />
            </div>
        </div >
    );
}

export default GestaoDeContratos;