import React, { useState } from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import background from '../../assets/imgs/fale-conosco.jpg';
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
import api from '../../services/api';
import './styles.scss';

const Contato = () => {

    const [nome, setNome] = useState('');
    const [erroNome, setErroNome] = useState(false);
    const [textoErroNome, setTextoErroNome] = useState('');

    const [email, setEmail] = useState('');
    const [erroEmail, setErroEmail] = useState(false);
    const [textoErroEmail, setTextoErroEmail] = useState('');

    const [telefone, setTelefone] = useState('');
    const [erroTelefone, setErroTelefone] = useState(false);
    const [textoErroTelefone, setTextoErroTelefone] = useState('');

    const [assunto, setAssunto] = useState('');
    const [erroAssunto, setErroAssunto] = useState(false);
    const [textoErroAssunto, setTextoErroAssunto] = useState('');

    const [mensagem, setMensagem] = useState('');
    const [erroMensagem, setErroMensagem] = useState(false);
    const [textoErroMensagem, setTextoErroMensagem] = useState('');


    function validateNome() {
        if (nome?.length > 2) {
            setErroNome(false);
            setTextoErroNome('');
            return true;
        } else {
            setErroNome(true);
            setTextoErroNome("Inclua seu sobrenome");
            return false;
        }
    }

    function validateAssunto() {
        if (assunto?.length > 2) {
            setErroAssunto(false);
            setTextoErroAssunto('');
            return true;
        } else {
            setErroAssunto(true);
            setTextoErroAssunto("Qual assunto quer tratar?");
            return false;
        }
    }




    function validateMensagem() {
        if (mensagem?.length > 2) {
            setErroMensagem(false);
            setTextoErroMensagem('');
            return true;
        } else {
            setErroMensagem(true);
            setTextoErroMensagem("Conte um pouco mais...");
            return false;
        }
    }

    function validateTelefone() {
        if (telefone?.length > 2) {
            setErroTelefone(false);
            setTextoErroTelefone('');
            return true;
        } else {
            setErroTelefone(true);
            setTextoErroTelefone("Revise esse campo, por favor!");
            return false;
        }
    }

    function validateEmail() {
        //var re1 = /\S+@\S+\.\S+/;
        var re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        var re2 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+\.[A-Za-z]+$/;
        if (re.test(email) || re2.test(email)) {

            setErroEmail(false);
            setTextoErroEmail('');
            return true;
        } else {

            setErroEmail(true);
            setTextoErroEmail("Informe um e-mail!");

            return false;
        }
    }





    const changeAssunto = (event) => {
        setAssunto(event.target.value);
    };



    async function enviarMensagem() {
        try {

            validateNome();
            validateEmail();
            validateAssunto();
            validateTelefone();
            validateMensagem();
            if (validateNome() && validateMensagem() && validateTelefone() && validateEmail() && validateAssunto()) {
                console.log("cadastro aceito");


                const enviar = {
                    nome: nome,
                    email: email,
                    telefone: telefone,
                    assunto: assunto,
                    mensagem: mensagem,
                }


                 await api.post('/v1/protected/email/enviar', enviar);
                alert("Recebemos sua mensagem " + nome + ", em breve entraremos em contato com você!");
                limpar();
                /*
                                const cadastro_salvo = response.data;
                                if (cadastro_salvo) {
                                    alert("Recebemos sua mensagem " + nome + ", em breve entraremos em contato com você!");
                
                                } else {
                                    alert("Erro de Conexão, tente novamente!");
                
                                }
                                */
            }
        } catch (_err) {
            console.log("erro ao cadastrar: " + _err);
            alert("Erro de Conexão, tente novamente mais tarde");

        }

    }


    function limpar() {
        setNome("");
        setEmail("");
        setTelefone("");
        setMensagem("");
    }

    return (
        <div className="container-fluid"  >
            <div style={{
                backgroundImage: `url(${background})`,


            }} >
                <Navegador corFundo={'rgba(0,0,0,0.2)'} travado={false} corTexto={'white'} contato={"underline"} />
                <div style={{ height: 1, backgroundColor: 'Wheat' }}>
                </div>

                <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', color: 'white' }}>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        item xs={12} sm={12} md={12} lg={12} xl={12}
                        style={{ paddingTop: 40, paddingBottom: 60 }}
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
                        style={{ paddingTop: 40, paddingBottom: 60, textAlign: 'center' }}
                    >

                        <Grid item xs={12} sm={12} md={12} lg={2} xl={2} ></Grid>
                        <Grid item xs={12} sm={12} md={12} lg={8} xl={8} >
                            <span style={{ fontSize: 18 }}> Com um atendimento ágil e de qualidade, queremos garantir total satisfação de todos os nossos clientes.</span><br></br> <br></br>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} xl={2} ></Grid>

                    </Grid>
                </div>

                <div style={{ backgroundColor: 'white', color: 'black' }}>


                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        item xs={12} sm={12} md={12} lg={12} xl={12}
                    >

                        <Grid item xs={12} sm={12} md={12} lg={2} xl={2}></Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            item xs={12} sm={12} md={12} lg={8} xl={8}
                            style={{ paddingTop: 40, paddingBottom: 40 }}
                        >

                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
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

                                            <a href={"mailto:comercial@titaniwm.com"} style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}> comercial@titaniwm.com</a>
                                        </Typography>
                                        <Typography component="h1" variant="h5" >

                                            <a href={"mailto:financeiro@titaniwm.com"} style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}> financeiro@titaniwm.com</a>
                                        </Typography>
                                        <Typography component="h1" variant="h5" >

                                            <a href={"mailto:suporte@titaniwm.com"} style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}> suporte@titaniwm.com</a>
                                        </Typography>

                                    </Grid>

                                </Grid>
                            </Grid>



                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
                                <Grid
                                    container
                                    direction="column"
                                    alignItems="center"
                                    item xs={12} sm={12} md={12} lg={12} xl={12}
                                >

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
                                        <Typography  >
                                            <span stye={{ fontSize: 18 }}> Central: </span>
                                            <span style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}> (38) 9 9941-6698</span>

                                        </Typography>
                                        <br></br>
                                        <br></br>
                                        <br></br>


                                    </Grid>



                                </Grid>
                            </Grid>


                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}  >
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
                                            style={{ fontSize: 18, color: 'green', fontWeight: 'bold', textDecoration: 'underline' }}
                                            href="https://api.whatsapp.com/send?1=pt_BR&phone=5538999365303">

                                            Web</a>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>


                                    </Grid>


                                </Grid>
                            </Grid>


                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} xl={2} > </Grid>
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
                                <span style={{ fontSize: 22, color: 'black' }}> Se preferir, preencha o formulário ao lado, e logo entraremos em contato com você!</span>
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
                                            error={erroNome}
                                            helperText={textoErroNome}
                                            onChange={(event) => { setNome(event.target.value) }}
                                        />
                                        <TextField
                                            id="email"
                                            label="E-mail"
                                            variant="standard"
                                            margin="dense"
                                            fullWidth
                                            error={erroEmail}
                                            helperText={textoErroEmail}
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
                                            error={erroTelefone}
                                            helperText={textoErroTelefone}
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
                                                    error={erroAssunto}
                                                    helperText={textoErroAssunto}
                                                >
                                                    <MenuItem value={"Financeiro"}>Financeiro</MenuItem>
                                                    <MenuItem value={"Comercial"}>Comercial</MenuItem>
                                                    <MenuItem value={"Administrativo"}>Suporte</MenuItem>
                                                    <MenuItem value={"Administrativo"}>Críticas</MenuItem>
                                                    <MenuItem value={"Administrativo"}>Elogios</MenuItem>

                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <TextField style={{ marginTop: 10 }}
                                            variant="standard"
                                            name="mensagem"
                                            label="Sua mensagem"
                                            id="mensagem"
                                            value={mensagem}
                                            error={erroMensagem}
                                            helperText={textoErroMensagem}
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
                                        onClick={() => enviarMensagem()}
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
