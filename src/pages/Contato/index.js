import React, { useEffect, useState } from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import background from '../../assets/imgs/capa1.png';
import img_email from '../../assets/imgs/email.png';
import img_telefone from '../../assets/imgs/telefone.png';
import whatsapp from '../../assets/imgs/whatsapp.png';
import { TextField, Container } from '@material-ui/core';
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import './styles.scss';

const Contato = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');


    const changeAssunto = (event) => {
        setAssunto(event.target.value);
    };

    useEffect(() => {


    }, []);

    return (
        <div className="container-fluid"  >
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",


            }} >


                <Navegador contato={"underline"}/>
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
                            >


                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "left" }} >
                                    <img alt="email"
                                        style={{ weight: 30, height: 30 }}
                                        src={img_email}
                                    />
                                    <Typography component="h1" variant="h5" >
                                        <span style={{ fontSize: 24, color: '#20165b', fontWeight: 'bold' }}> E-mail</span>
                                    </Typography>
                                    <br></br>
                                    <Typography component="h1" variant="h5" >
                                        <span style={{ fontSize: 18, color: 'black' }}> Tem alguma dúvida?</span>
                                    </Typography>
                                    <br></br>
                                    <Typography component="h1" variant="h5" >
                                        <span style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>  ldarmazensgerais@hotmail.com</span>
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
                            >
                                <br></br> <br></br> <br></br>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "left" }} >
                                    <img alt="telefone"
                                        style={{ weight: 30, height: 30 }}
                                        src={img_telefone}
                                    />
                                    <Typography component="h1" variant="h5" >
                                        <span style={{ fontSize: 24, color: '#20165b', fontWeight: 'bold' }}> Telefone</span>
                                    </Typography>
                                    <br></br>
                                    <Typography component="h1" variant="h5" >
                                        <span style={{ fontSize: 18, color: 'black' }}> Ligue para nós</span>
                                    </Typography>
                                    <br></br>
                                    <Typography component="h1" variant="h5" >
                                        <span style={{ fontSize: 18, color: 'black' }}> Escritório: </span>
                                        <span style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}> (38) 9 9985-6817</span>

                                        <br></br>
                                        <span style={{ fontSize: 18, color: 'black' }}> Levi:</span>
                                        <span style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}> (38) 9 9734-3848</span>

                                        <br></br>
                                        <span style={{ fontSize: 18, color: 'black' }}> José Miguel: </span>
                                        <span style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}> (38) 9 9833-8275</span>

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
                            >

                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "left" }} >
                                    <img alt="whatsapp"
                                        style={{ weight: 30, height: 30 }}
                                        src={whatsapp}
                                    />
                                    <Typography component="h1" variant="h5" >
                                        <span style={{ fontSize: 24, color: '#20165b', fontWeight: 'bold' }}>Whatsapp</span>
                                    </Typography>
                                    <br></br>
                                    <Typography component="h1" variant="h5" >
                                        <span style={{ fontSize: 18, color: 'black' }}> Converse conosco</span>
                                    </Typography>
                                    <br></br>
                                    <a
                                        style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}
                                        href="https://api.whatsapp.com/send?1=pt_BR&phone=5538999365303">

                                        Web</a>


                                </Grid>


                            </Grid>
                        </Grid>


                    </Grid>
                </div>

                <div style={{ height: 5, backgroundColor: 'green' }}>
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
                        <Grid item xs={12} sm={12} md={12} lg={1} xl={1} style={{ textAlign: "left" }} >

                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={5} xl={5} style={{ textAlign: "left" }} >
                            <Typography component="h1" variant="h5" >
                                <span style={{ fontSize: 22, color: 'black' }}> Se preferir, preencha o formulário ao lado, e logo entraremos em contato com você</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4} style={{ textAlign: "left" }} >
                            <Grid
                                container
                                direction="row"
                                item xs={12} sm={12} md={12} lg={12} xl={12}

                            >
                                <Container maxWidth="sm" component="article" className="form">
                                    <form onSubmit={(event) => {
                                        event.preventDefault();
                                    }}>
                                        <TextField
                                            id="nome"
                                            label="Nome"
                                            variant="standard"
                                            margin="dense"
                                            fullWidth
                                            value={nome}
                                            onChange={(event) => { setNome(event.target.value) }}
                                        />
                                        <TextField
                                            id="email"
                                            label="E-mail"
                                            variant="standard"
                                            margin="dense"
                                            fullWidth
                                            value={email}
                                            onChange={(event) => { setEmail(event.target.value) }}
                                        />
                                        <TextField
                                            id="telefone"
                                            label="Telefone"
                                            variant="standard"
                                            margin="dense"
                                            fullWidth
                                            value={telefone}
                                            onChange={(event) => { setTelefone(event.target.value) }}
                                        />

                                        <Box sx={{ minWidth: 120 }} style={{ marginTop: 10 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="label-assunto">Assunto</InputLabel>
                                                <Select
                                                    labelId="label-assunto"
                                                    id="select-assunto"
                                                    value={assunto}
                                                    label="Assunto"
                                                    onChange={changeAssunto}
                                                >
                                                    <MenuItem value={"Administrativo"}>Administrativo</MenuItem>
                                                    <MenuItem value={"Financeiro"}>Financeiro</MenuItem>
                                                    <MenuItem value={"Comercial"}>Comercial</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <TextField style={{ marginTop: 10 }}
                                            variant="standard"
                                            name="mensagem"
                                            label="Sua mensagem"
                                            id="mensagem"
                                            value={mensagem}
                                            fullWidth
                                            onChange={(event) => { setMensagem(event.target.value) }}
                                            multiline
                                            rows={6}
                                        />

                                    </form>
                                </Container>

                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    item xs={12} sm={12} md={12} lg={12} xl={12}
                                >

                                    <a
                                        style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 20 }}
                                        href="/lgpd">
                                        Lei Geral de Proteção de Dados</a>

                                    <Button style={{ marginTop: 30 }}
                                        variant="contained"
                                        color="primary"
                                    > Enviar  </Button>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={1} xl={1} style={{ textAlign: "left" }} >

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
