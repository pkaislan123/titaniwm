import React, { useState } from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import Cookies from 'js-cookie';
import background from '../../assets/imgs/capa1.png';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import './styles.scss';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '50vh',
    },

    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    entrada: {
        fontSize: 22
    },
}));

export default function Login() {

    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [erroSenha, setErroSenha] = useState(false);
    const [textoErroSenha, setTextoErroSenha] = useState('');

    const history = useHistory();

    function validateSenha() {

        if (senha.length > 2) {

            setErroSenha(false);
            setTextoErroSenha('');
            return true;
        } else {

            setErroSenha(true);
            setTextoErroSenha("Revise esse campo");

            return false;
        }
    }





    async function logar() {
        try {

            if (validateSenha()) {


                console.log("logar chamado");
                const credentials = {
                    login: username,
                    senha: senha
                }
                const response = await api.post('/v1/protected/signin', credentials);

                const token = response.data.token;
                console.log("token na tela de login: " + token);

                Cookies.set('token', token);
                Cookies.set('id_usuario', response.data.id);


                const regra = response.data.role;
                console.log("regra na tela de login: " + regra);
                Cookies.set('regra', regra);


                // Adds the token to the header
                api.defaults.headers.common.Authorization = `Bearer ${token}`;

                console.log("token: " + Cookies.get('token'));

                history.push({
                    pathname: '/minhaconta',

                })
            }
        } catch (_err) {
            console.log("erro: " + _err);
            try {
                if (_err.response.status === 401) {
                    console.log("erro 401, login errado: ");
                    setErroSenha(true);
                    setTextoErroSenha("Usuário ou Senha Inválidos");
                } else {
                    alert("Erro ao Logar! Verifique sua conexão com a internet! Tente Novamente em alguns instantes!");
                    setErroSenha(false);
                    setTextoErroSenha("");

                }
                return 0;
            } catch (_err) {
                alert("Erro ao Logar! Verifique sua conexão com a internet! Tente Novamente em alguns instantes!");

            }
        }
    };



    return (
        <div >
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",


            }} >

                <Navegador />

                <div style={{ height: 5, backgroundColor: '#808080' }}>
                </div>
            </div>
            <div style={{ paddingTop: 20, paddingBottom: 250 }}>
                <Grid container component="main" className={classes.root} justifyContent='center'>
                    <CssBaseline />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square  >
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Acesse sua conta LD
                            </Typography>

                            <TextField
                                id="usuario"
                                variant="standard"
                                margin="normal"
                                name="usuario"
                                fullWidth
                                label="Usuário"
                                required
                                autoComplete="usuario"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                inputProps={{ maxLength: 60, minLength: 15 }}
                                InputLabelProps={{ className: classes.entrada }}
                                style={{ paddingTop: 5, paddingBottom: 10 }}
                            />

                            <TextField
                                error={erroSenha}
                                id="password"
                                helperText={textoErroSenha}
                                variant="standard"
                                name="password"
                                fullWidth
                                label="Senha"
                                required
                                type="password"
                                autoComplete="current-password"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                                inputProps={{ maxLength: 15, minLength: 8 }}
                                InputLabelProps={{ className: classes.entrada }}
                                style={{ paddingTop: 5, paddingBottom: 10 }}

                            />

                            <a
                                style={{ fontSize: 18, color: 'black', fontWeight: 'bold' , paddingBottom: 20}}
                                href="/lgpd">
                                Lei Geral de Proteção de Dados</a>

                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={logar}


                            >
                                Entrar
                            </Button>
                            <Grid container style={{ paddingTop: 15, paddingBottom: 10 }} >
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Esqueceu sua Senha?
                                    </Link>
                                </Grid>

                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div >
                <Rodape />
            </div>
        </div>
    );
}

