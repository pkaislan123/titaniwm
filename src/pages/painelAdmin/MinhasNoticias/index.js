import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../components/menu';
import Cookies from 'js-cookie';
import api from '../../../services/api';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {

    Link

} from "react-router-dom";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    table: {
        minWidth: 650,
    },
}));


function novaNoticia() {
    window.location.href = "/cadastrarnoticia"

}

export default function MinhasNoticias() {
    const classes = useStyles();
    const [minhasNoticias, setMinhasNoticias] = useState([]);

    const [loading, setLoading] = useState(true);

    async function deletarNoticia(id_noticia) {

        console.log("Funcao deletar noticia chamada, id: " + id_noticia);
        if (window.confirm("Excluir a Notícia Selecionada?")) {
            var result = await api.delete("v1/protected/noticias/excluirNoticia/" + id_noticia);
            console.log("resultado da exclusao: " + result.status);
            if (result.status === 204) {

                window.location.href = "/minhasnoticias";

            } else {
                alert("Erro ao Excluir! Tente novamente");
            }
        }
    }






    useEffect(() => {




        async function listarNoticias() {
            try {
                const token = Cookies.get('token');

                const headers = {
                    'Authorization': 'Bearer ' + token
                }


                const id_usuario = parseInt(Cookies.get('id_usuario'), 10);
                console.log("id na tela de minhas noticias: " + id_usuario)

                await api.get("v1/protected/noticias/listarPorUsuario/" + id_usuario, {
                    headers: headers
                }).then(function (response) {
                    setMinhasNoticias(response.data)

                    console.log(" Minhas Notícias: " + response);
                    setLoading(false);


                });


            } catch (_err) {
                // avisar('Houve um problema com o login, verifique suas credenciais! ' + cpf + " " + senha );
                console.log("Erro ao listar noticias: " + _err)

            }

        }

        listarNoticias();


    }, []);


    const NoticiaItem = ({ props }) => {

        return (

            <div className="Item-container" style={{ padding: 10 }} >

                <Paper elevation={3}   >
                    <Grid container spacing={1} style={{ padding: 20 }}>
                        <Grid item xs={12}
                        >
                            <Typography >
                                Título: {props.titulo}
                            </Typography>

                            <Typography >
                                Data: {props.data_noticia}
                            </Typography>

                            <Typography >
                                Hora: {props.hora_noticia}
                            </Typography>

                        </Grid>

                        <Grid item xs={4}>
                            <ButtonGroup aria-label="outlined primary button group">
                                <Button color="primary" href={"/noticias/" + props.data_noticia + "/" + encodeURIComponent(props.titulo) + "/" + props.id_noticia }>Vizualizar</Button>
                                <Button color="primary" href={"/alterarnoticia/" + props.id_noticia}>Atualizar</Button>
                                <Button color="secondary" onClick={() => deletarNoticia(props.id_noticia)} >Excluir</Button>

                            </ButtonGroup>
                        </Grid>

                    </Grid>
                </Paper>
            </div>
        );
    };

    return (
        <div>

            <div style={{ backgroundColor: 'black', width: '100%', height: 90 }}>
                <div style={{ paddingTop: 10 }} >
                    <Link className="a"

                        to={{
                            pathname: "/",

                        }}
                    >
                        <h1>
                            <span style={{ fontSize: 44, color: 'white' }}>LD Armazéns</span>

                        </h1>
                    </Link>
                </div>
            </div>
            <div className={classes.root} style={{ backgroundColor: '#DCDCDC' }}>

                <MenuAdmin titulo={"Minhas Notícias"} />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />

                    <Container maxWidth="lg" className={classes.container}>
                        {loading ?
                            <Skeleton animation={"wave"} width={'100%'} style={{ backgroundColor: '#48D1CC' }}>
                            </Skeleton>
                            :
                            <div>

                                {
                                    minhasNoticias.map((row) => (
                                        <NoticiaItem props={row} key={row.id_noticia} />

                                    ))
                                }



                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    item xs={12}
                                >
                                    <Button style={{ marginTop: 20 }}
                                        variant="contained"
                                        color="primary"
                                        onClick={novaNoticia}
                                    >
                                        Nova Notícia
                                    </Button>
                                </Grid>

                            </div>

                        }
                    </Container>

                </main>
            </div>
        </div>
    );
}