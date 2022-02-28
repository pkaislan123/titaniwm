import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuCliente from '../components/menu';
import Cookies from 'js-cookie';
import api from '../../../services/api';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {

  Link

} from "react-router-dom";
import './styles.scss';

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



export default function ContaArmazem() {
  const classes = useStyles();
  const [meusDados, setMeusDados] = useState([]);
  const [meusEnderecos, setMeusEnderecos] = useState([]);

  const [loading, setLoading] = useState(true);



 
 

  useEffect(() => {

    async function listarMeusDados() {
      try {

        var dados = [];
  
        const token = Cookies.get('token');
        const headers = {
          'Authorization': 'Bearer ' + token
        }
  
  
        const id_usuario = Cookies.get('id_usuario');
        console.log("id na tela de painel cliente: " + id_usuario)
  
        await api.get("v1/protected/retornardadoscliente/" + id_usuario, {
          headers: headers
        }).then(function (response) {
          setMeusDados(response.data)
          dados = response.data
  
          console.log(" Meus Dados: " + response);
  
  
        });
  
  
        var identificacao = dados.tipo_cliente === 0 ? dados.cpf : dados.cnpj;
        await api.get("v1/protected/retornarenderecos/" + identificacao, {
          headers: headers
        }).then(function (response) {
          setMeusEnderecos(response.data)
      
          console.log(" Meus Enderecos: " + response);
          setLoading(false);
      
        });
  
  
      } catch (_err) {
        // avisar('Houve um problema com o login, verifique suas credenciais! ' + cpf + " " + senha );
        console.log("Erro ao listar seus dados: " + _err)
  
      }
  
    }
  
    listarMeusDados();


  }, []);




  return (
    <div>

      <div style={{ backgroundColor: 'black', width: '100%', height: 90 }}>
      <div style={{ paddingTop: 10}} >
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
        <MenuCliente titulo={"Meus Dados"} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <Container maxWidth="lg" className={classes.container}>
            {loading ?
              <Skeleton animation={"wave"} width={'100%'} style={{ backgroundColor: '#48D1CC' }}>
              </Skeleton>
              :
              <div>
                <Typography variant="h6" component="h2" style={{ fontWeight: 'bold', marginBottom: 20 }}>
                  Dados do Cliente
                </Typography>
                <Paper elevation={5}  >
                  <Grid container spacing={1}
                    direction="row"
                    alignItems="center"
                    item xs={12}
                  >
                    <Grid item xs={2}>
                      <Typography style={{ textAlign: 'right' }}>
                        Razão Social:
                      </Typography>
                    </Grid>

                    <Grid item xs={8}>
                      <Typography style={{ fontSize: 22 }}>
                        { meusDados.tipo_cliente === 0 ? meusDados.nome_empresarial : meusDados.razao_social}
                      </Typography>
                    </Grid>

                  

                  </Grid>
                </Paper>

                <Paper elevation={5}  style={{ marginTop: 5 }}>
                  <Grid container spacing={1}
                    direction="row"
                    alignItems="center"
                    item xs={12}
                  >
                    <Grid item xs={2}>
                      <Typography style={{ textAlign: 'right' }}>
                        CPF/CNPJ:
                      </Typography>
                    </Grid>

                    <Grid item xs={8}>
                      <Typography style={{ fontSize: 22 }}>
                      { meusDados.tipo_cliente === 0 ? meusDados.cpf : meusDados.cnpj}

                      </Typography>
                    </Grid>

                 

                  </Grid>
                </Paper>


                <Typography variant="h6" component="h2" style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 20 }}>
                  Meus Endereços
                </Typography>
                { meusEnderecos.map((endereco) => 
                 <Paper elevation={5} key={endereco.id_cliente} style={{marginTop: 10}}>
                 <Grid container spacing={1}
                   direction="row"
                   alignItems="center"
                   item xs={12}
                 >
                   <Grid item xs={2}>
                     <Typography style={{ textAlign: 'right' }}>
                       Inscrição Estadual:
                     </Typography>
                   </Grid>

                   <Grid item xs={4}>
                     <Typography style={{ fontSize: 22 }}>
                       { endereco.ie}
                     </Typography>
                   </Grid>

                   <Grid item xs={2}>
                     <Typography style={{ textAlign: 'right' }}>
                      Ocupação:
                     </Typography>
                   </Grid>

                   <Grid item xs={4}>
                     <Typography style={{ fontSize: 22 }}>
                      {endereco.ocupacao}
                     </Typography>
                   </Grid>

                   <Grid item xs={2}>
                     <Typography style={{ textAlign: 'right' }}>
                       Endereço:
                     </Typography>
                   </Grid>

                   <Grid item xs={10}>
                     <Typography style={{ fontSize: 22 }}>
                       { endereco.rua}, Bairro: {endereco.bairro}, nº: {endereco.numero}. CEP: {endereco.cep} {endereco.cidade}/{endereco.uf} 
                     </Typography>
                   </Grid>

                   
                 

                 </Grid>
               </Paper>
                
                )}
               


              </div>

            }
          </Container>

        </main>
      </div>
    </div>
  );
}