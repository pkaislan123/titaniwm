import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../components/menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Cookies from 'js-cookie';
import api from '../../../services/api';
import { useHistory } from "react-router-dom";
import moment from 'moment';
import {

    Link

} from "react-router-dom";

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
}));



export default function CadastroNoticia() {
    const classes = useStyles();
    const history = useHistory();

    /* variaveis de estado de cadastro de endereco*/
    const [titulo, setTitulo] = useState('');
    const [subTitulo, setSubTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [dataNoticia, setDataNoticia] = useState( moment(new Date()).format("DD/MM/YYYY") );
    const [horaNoticia, setHoraNoticia] = useState(moment(new Date()).format("HH:MM"));
    const [citacao, setCitacao] = useState('');

    const [texto1, setTexto1] = useState('');
    const [texto2, setTexto2] = useState('');
    const [texto3, setTexto3] = useState('');

    const [url_img1, setUrlImg1] = useState('');
    const [url_img2, setUrlImg2] = useState('');
    const [url_img3, setUrlImg3] = useState('');

    const [url_video1, setUrlVideo1] = useState('');
    const [url_video2, setUrlVideo2] = useState('');
    const [url_video3, setUrlVideo3] = useState('');


    async function salvar() {
        try {

            const id_usuario = Cookies.get('id_usuario');


            console.log("cadastrar chamado");
            console.log("id usuario: " + id_usuario);
            const cadastro_noticia = {
              titulo: titulo,
              sub_titulo: subTitulo,
              data_noticia: dataNoticia,
              hora_noticia: horaNoticia, 
              url_img1: url_img1,  
              url_img2: url_img2,  
              url_img3: url_img3,  
              texto1: texto1,
              texto2: texto2,
              texto4: texto3,
              url_video1: url_video1,  
              url_video2: url_video2,  
              url_video3: url_video3,
              citacao: citacao,
              usuario: { id_usuario: id_usuario, },
              categoria: categoria,
            }

            const headers = {
              'Authorization': 'Bearer ' + Cookies.get("token")
            }

            const response = await api.post('/v1/protected/noticias/cadastrarnoticia', cadastro_noticia,
              { headers: headers });

            const cadastro_salvo = response.data;
            if (cadastro_salvo) {
              history.push({
                pathname: '/minhasnoticias',
              })
            } else {
              alert("Erro de Conexão, tente novamente mais tarde");
            }
          } catch (_err) {
            console.log("erro ao cadastrar: " + _err);
            alert("Erro de Conexão, tente novamente mais tarde");

          }
    }



    useEffect(() => {


    }, []);


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

                <MenuAdmin titulo={"Cadastrar Nova Notícia"} />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container} >
                        <React.Fragment >
                            <Grid container spacing={2} >


                                <Grid item xs={12} >
                                    <TextField
                                        variant="standard"
                                        name="titulo"
                                        label="Título"
                                        required
                                        id="titulo"
                                        autoComplete="titulo"
                                        value={titulo}
                                        onChange={e => setTitulo(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={3}

                                    />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField
                                        variant="standard"
                                        name="subtitulo"
                                        label="Sub Título"
                                        required
                                        id="subtitulo"
                                        autoComplete="subtitulo"
                                        value={subTitulo}
                                        onChange={e => setSubTitulo(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={3}

                                    />
                                </Grid>

                                <Grid item xs={6} >
                                    <TextField
                                        variant="standard"
                                        name="categoria"
                                        label="Categoria desta Notícia"
                                        required
                                        id="categoria"
                                        autoComplete="categoria"
                                        value={categoria}
                                        onChange={e => setCategoria(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={3}

                                    />
                                </Grid>

                                <Grid item xs={6} >
                                    <TextField
                                        variant="standard"
                                        name="dataNoticia"
                                        label="Data desta Notícia"
                                        required
                                        id="dataNoticia"
                                        autoComplete="dataNoticia"
                                        value={dataNoticia}
                                        onChange={e => setDataNoticia(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={3}

                                    />
                                </Grid>

                                <Grid item xs={6} >
                                    <TextField
                                        variant="standard"
                                        name="horaNoticia"
                                        label="Hora desta Notícia"
                                        required
                                        id="horaNoticia"
                                        autoComplete="horaNoticia"
                                        value={horaNoticia}
                                        onChange={e => setHoraNoticia(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={3}

                                    />
                                </Grid>
                                
                                <Grid item xs={12} >
                                    <TextField
                                        variant="standard"
                                        name="url_img1"
                                        label="Url Imagem Capa"
                                        id="url_img1"
                                        autoComplete="url_img1"
                                        value={url_img1}
                                        onChange={e => setUrlImg1(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={2}

                                    />
                                </Grid>


                                <Grid item xs={12} >
                                    <TextField
                                        variant="standard"
                                        name="url_video1"
                                        label="Url Vídeo Capa"
                                        id="url_video1"
                                        autoComplete="url_video1"
                                        value={url_video1}
                                        onChange={e => setUrlVideo1(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={2}

                                    />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField
                                        variant="standard"
                                        name="texto1"
                                        label="Texto Inicial"
                                        required
                                        id="texto1"
                                        autoComplete="texto1"
                                        value={texto1}
                                        onChange={e => setTexto1(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={10}

                                    />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField
                                        variant="standard"
                                        name="citacao"
                                        label="Citação"
                                        id="citacao"
                                        autoComplete="citacao"
                                        value={citacao}
                                        onChange={e => setCitacao(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={3}

                                    />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField
                                        variant="standard"
                                        name="texto2"
                                        label="Texto Médio"
                                        id="texto2"
                                        autoComplete="texto2"
                                        value={texto2}
                                        onChange={e => setTexto2(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={10}

                                    />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField
                                        variant="standard"
                                        name="url_img2"
                                        label="Url Imagem Meio do Texto"
                                        id="url_img2"
                                        autoComplete="url_img2"
                                        value={url_img2}
                                        onChange={e => setUrlImg2(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={2}

                                    />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField
                                        variant="standard"
                                        name="url_video2"
                                        label="Url Vídeo Meio do Texto"
                                        id="url_video2"
                                        autoComplete="url_video2"
                                        value={url_video2}
                                        onChange={e => setUrlVideo2(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={2}

                                    />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField
                                        variant="standard"
                                        name="texto3"
                                        label="Texto Final"
                                        id="texto3"
                                        autoComplete="texto3"
                                        value={texto3}
                                        onChange={e => setTexto3(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={10}

                                    />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField
                                        variant="standard"
                                        name="url_img3"
                                        label="Url Imagem Final"
                                        id="url_img3"
                                        autoComplete="url_img3"
                                        value={url_img3}
                                        onChange={e => setUrlImg3(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={2}

                                    />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField
                                        variant="standard"
                                        name="url_video3"
                                        label="Url Vídeo Final"
                                        id="url_video3"
                                        autoComplete="url_video3"
                                        value={url_video3}
                                        onChange={e => setUrlVideo3(e.target.value)}
                                        fullWidth
                                        multiline={true}
                                        rows={2}

                                    />
                                </Grid>

                               
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    item xs={10}
                                >
                                    <Button style={{ marginTop: 50 }}
                                        variant="contained"
                                        color="primary"
                                        onClick={salvar}
                                    > Salvar  </Button>
                                </Grid>

                            </Grid>


                        </React.Fragment>


                    </Container>

                </main>
            </div>
        </div>
    );


}


