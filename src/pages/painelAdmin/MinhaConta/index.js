import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../components/menu';
import Cookies from 'js-cookie';
import api from '../../../services/api';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import NavBarAdmin from "../../../components/NavBarAdmin";
import Rodape from '../../../components/Rodape';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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



export default function ContaAdmin() {
  const classes = useStyles();
  const [meusDados, setMeusDados] = useState([]);
  const [loading, setLoading] = useState(true);



  async function listarMeusDados() {
    try {

      const token = Cookies.get('token');

      const headers = {
        'Authorization': 'Bearer ' + token
      }


      const id_usuario = Cookies.get('id_usuario');
      console.log("id na tela de enderecos: " + id_usuario)

      await api.get("v1/protected/retornardadosusuario/" + id_usuario, {
        headers: headers
      }).then(function (response) {

        setMeusDados(response.data)

        console.log(" Meus Dados: " + response);
        setLoading(false);


      });



    } catch (_err) {
      // avisar('Houve um problema com o login, verifique suas credenciais! ' + cpf + " " + senha );
      console.log("Erro ao listar seus dados: " + _err)

    }

  }




  useEffect(() => {


    listarMeusDados();



  }, []);


  async function modificar() {
    try {

      const id_usuario = Cookies.get('id_usuario');


      console.log("fazer alteraçoes chamado");
      console.log("id usuario: " + id_usuario);
      const cadastro_usuario = {
        url_img_perfil: meusDados.url_img_perfil,
        sobre: meusDados.sobre,
      }

      const headers = {
        'Authorization': 'Bearer ' + Cookies.get("token")
      }

      const response = await api.put('/v1/protected/user/alterar/' + id_usuario, cadastro_usuario,
        { headers: headers });

      const cadastro_salvo = response.data;
      if (cadastro_salvo) {
        alert("Alterações salvas com sucesso!");
        window.location.reload(false);

      } else {
        alert("Erro de Conexão, tente novamente mais tarde");
      }
    } catch (_err) {
      console.log("erro ao cadastrar: " + _err);
      alert("Erro de Conexão, tente novamente mais tarde");

    }
  }



  return (
    <div>
      <NavBarAdmin />
      <div className={classes.root} style={{ backgroundColor: '#DCDCDC' }}>
        <MenuAdmin titulo={"Meus Dados"} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <Container maxWidth="lg" className={classes.container}>
            {loading ?
              <Skeleton animation={"wave"} width={'100%'} style={{ backgroundColor: '#48D1CC' }}>
              </Skeleton>
              :
              <div>
                <Typography variant="h6" component="h2" style={{ fontWeight: 'bold', marginBottom: 20 }}>
                  Dados Pessoais
                </Typography>
                <Paper elevation={5}  >
                  <Grid container spacing={1}
                    direction="row"
                    alignItems="center"
                    item xs={12}
                  >
                    <Grid item xs={2}>
                      <Typography style={{ textAlign: 'right' }}>
                        Nome Completo:
                      </Typography>
                    </Grid>

                    <Grid item xs={8}>
                      <Typography style={{ fontSize: 22 }}>
                        {meusDados.nome} {meusDados.sobrenome}
                      </Typography>
                    </Grid>



                  </Grid>
                </Paper>

                <Paper elevation={5} style={{ marginTop: 5 }}>
                  <Grid container spacing={1}
                    direction="row"
                    alignItems="center"
                    item xs={12}
                  >
                    <Grid item xs={2}>
                      <Typography style={{ textAlign: 'right' }}>
                        Cargo:
                      </Typography>
                    </Grid>

                    <Grid item xs={8}>
                      <Typography style={{ fontSize: 22 }}>
                        {meusDados.cargo}
                      </Typography>
                    </Grid>



                  </Grid>
                </Paper>



                <Typography variant="h6" component="h2" style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 20 }}>
                  Dados da Conta
                </Typography>

                <Paper elevation={5} style={{ marginTop: 8 }}>
                  <Grid container spacing={1}
                    direction="row"
                    alignItems="center"
                    item xs={12}
                  >
                    <Grid item xs={2}>
                      <Typography style={{ textAlign: 'right' }}>
                        E-mail:
                      </Typography>
                    </Grid>

                    <Grid item xs={8}>
                      <Typography style={{ fontSize: 22 }}>
                        {meusDados.email}
                      </Typography>
                    </Grid>


                  </Grid>
                </Paper>

                <Paper elevation={5} style={{ marginTop: 8 }}>
                  <Grid container spacing={1}
                    direction="row"
                    alignItems="center"
                    item xs={12}
                  >
                    <Grid item xs={2}>
                      <Typography style={{ textAlign: 'right' }}>
                        Foto do Perfil:
                      </Typography>
                    </Grid>

                    <Grid item xs={8}>
                      <Grid item xs={12} style={{ padding: 10, paddingTop: 2 }}>
                        <TextField
                          id="url_img_perfil"
                          variant="standard"
                          name="url_img_perfil"
                          fullWidth
                          label="Url Foto do Perfil"
                          value={meusDados.url_img_perfil}
                          onChange={e => setMeusDados(prevState => ({ ...prevState, 'url_img_perfil': e.target.value }))}
                        />
                      </Grid>
                    </Grid>



                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={2}>

                    </Grid>

                    <Grid item xs={8}>
                      <img alt="foto_perfil" style={{ height: 200, width: 200, borderRadius: '100%' }}
                        src={meusDados.url_img_perfil}
                      />
                    </Grid>


                  </Grid>
                </Paper>

                <Paper elevation={5} style={{ marginTop: 8 }}>
                  <Grid container spacing={1}
                    direction="row"
                    alignItems="center"
                    item xs={12}
                  >
                    <Grid item xs={2}>
                      <Typography style={{ textAlign: 'right' }}>
                        Sobre:
                      </Typography>
                    </Grid>

                    <Grid item xs={8}>
                      <TextField
                        id="sobre"
                        variant="standard"
                        name="sobre"
                        fullWidth
                        label="Sobre"
                        multiline
                        rows={3}
                        value={meusDados.sobre}
                        onChange={e => setMeusDados(prevState => ({ ...prevState, 'sobre': e.target.value }))}
                      />
                    </Grid>

                    <Grid item xs={2}>

                    </Grid>

                    <Grid item xs={2} style={{ padding: 30 }}>

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={modificar}
                      > Salvar  </Button>

                    </Grid>

                  </Grid>
                </Paper>

              </div>

            }
          </Container>

        </main>
      </div>
      <div >
        <Rodape />
      </div>
    </div>
  );
}