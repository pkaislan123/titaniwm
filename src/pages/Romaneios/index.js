import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Cookies from 'js-cookie';
import api from '../../services/api';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import MenuCliente from '../painelCliente/components/menu';
import NavBarAdmin from "../../components/NavBarAdmin";
import Rodape from '../../components/Rodape';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';


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

export default function Romaneios() {
  const classes = useStyles();
  const [romaneiosFiltrados, setRomaneiosFiltrados] = useState([]);
  const [romaneiosOriginais, setRomaneiosOriginais] = useState([]);





  const [loading, setLoading] = useState(true);

  const [codigo, setCodigo] = useState('');
  const [produto, setProduto] = useState('');
  const [motorista, setMotorista] = useState('');
  const [placa, setPlaca] = useState('');

  const [operacao, setOperacao] = useState('');

  const [filtroRemetente, setfiltroRemetente] = useState('');
  const [filtroDestinatario, setfiltroDestinatario] = useState('');
  const [safra, setSafra] = useState('');



  const [height, setHeight] = useState(0);


  function checkDimenssoes() {

    var altura = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;


    setHeight(altura * 0.75);

  }

  window.addEventListener('resize', function (event) {
    checkDimenssoes();
  });


  
  useEffect(() => {

    async function listarMeusDados() {
      try {
        setLoading(true);
        var dados = [];

        const token = Cookies.get('token');

        const headers = {
          'Authorization': 'Bearer ' + token
        }


        const id_usuario = Cookies.get('id_usuario');
        console.log("id na tela de romaneios: " + id_usuario)

        await api.get("v1/protected/retornardadoscliente/" + id_usuario, {
          headers: headers
        }).then(function (response) {
          dados = response.data
          console.log(" Meus Dados: " + response);



        });

        var url = "v1/protected/romaneios/";

        var identificacao = dados.tipo_cliente === 0 ? dados.cpf : dados.cnpj;
        await api.get(url + identificacao , {
          headers: headers
        }).then(function (response) {
          setRomaneiosFiltrados(response.data)
          setRomaneiosOriginais(response.data)
          console.log(" Meus Romaneios: " + response.data);


          setLoading(false);

        });



      } catch (_err) {
        // avisar('Houve um problema com o login, verifique suas credenciais! ' + cpf + " " + senha );
        console.log("Erro ao listar seus dados: " + _err)

      }

    }


    checkDimenssoes();

    listarMeusDados();


  }, []);


  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);


    function setOpenInfoExtra(open) {
      setOpen(open);
    }




    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpenInfoExtra(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>


          <TableCell colSpan={1} align="right">{row.id}</TableCell>
          <TableCell colSpan={1} align="right">{row.codigo}</TableCell>
          <TableCell colSpan={1} align="right">{row.operacao}</TableCell>
          <TableCell colSpan={1} align="right">{row.data_romaneio}</TableCell>
          <TableCell colSpan={1} align="right">{row.safra.produto.nome_produto.toUpperCase()}</TableCell>
          <TableCell colSpan={1} align="right">{row.safra.ano_plantio}/{row.safra.ano_colheita}</TableCell>
          <TableCell colSpan={1} align="right">{
            row.remetente.tipo_cliente === 0 ? row.remetente.nome_empresarial.toUpperCase() : row.remetente.razao_social.toUpperCase()
          } </TableCell>
          <TableCell colSpan={1} align="right">{
            row.destinatario != null ? row.destinatario.tipo_cliente === 0 ? row.destinatario.nome_empresarial.toUpperCase() : row.destinatario.razao_social.toUpperCase() : ""
          } </TableCell>
          <TableCell colSpan={1} align="right">{row.nome_motorista}</TableCell>
          <TableCell colSpan={1} align="right">{row.cpf_motorista}</TableCell>
          <TableCell colSpan={1} align="right">{row.placa}</TableCell>
          <TableCell colSpan={1} align="right">{row.peso_bruto}</TableCell>
          <TableCell colSpan={1} align="right">{row.tara}</TableCell>
          <TableCell colSpan={1} align="right">{row.peso_liquido}</TableCell>
          <TableCell colSpan={1} align="right">{row.umidade}</TableCell>
          <TableCell colSpan={1} align="right">{row.impureza}</TableCell>
          <TableCell colSpan={1} align="right">{row.ardidos}</TableCell>
          <TableCell colSpan={1} align="right">{row.avariados}</TableCell>

        </TableRow>


      </React.Fragment>
    );
  }



  function CollapsibleTable() {
    return (
      <TableContainer component={Paper} style={{ height: height }}>
        <Table aria-label="collapsible table">
          <TableHead>

            <TableRow  >
              <TableCell colSpan={1}></TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} align="center" colSpan={1}>ID</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Código</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Operação</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Data Romaneio</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>produto</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Safra</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Remetente</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Destinátario</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Motorista</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>CPF</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Placa</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Peso Bruto</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Peso Tara</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Peso Líquido</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Umidade</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Impureza</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Ardidos</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white', position: "sticky", top: 0 }} colSpan={1}>Avariados</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {romaneiosFiltrados.map((romaneio) => (
              <Row key={romaneio.id} row={romaneio} />
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    );
  }

  function filtrar() {


    let arraybkp = romaneiosOriginais;

    let novaLista = arraybkp.map((romaneio) => {
      var remetente = romaneio.remetente.tipo_cliente === 0 ? romaneio.remetente.nome_empresarial : romaneio.remetente.razao_social

      romaneio['nome_remetente'] = remetente.toUpperCase()

      var destinatario = romaneio.destinatario !== null ? romaneio.destinatario.tipo_cliente === 0 ? romaneio.destinatario.nome_empresarial : romaneio.destinatario.razao_social : ""

      romaneio['nome_destinatario'] = destinatario.toUpperCase()

      var produto = romaneio.safra.produto.nome_produto.toUpperCase();

      romaneio['nome_produto'] = produto;

      var desc_safra = romaneio.safra.ano_plantio + "/" + romaneio.safra.ano_colheita
      romaneio['desc_safra'] = desc_safra

      return romaneio;

    })

    let novaListaFiltrada = novaLista.filter(
      item =>
        (filtroRemetente !== "" && filtroRemetente !== null) ? item.nome_remetente.includes(filtroRemetente.toUpperCase()) : 2 &&
          (filtroDestinatario !== "" && filtroDestinatario !== null) ? item.nome_destinatario.includes(filtroDestinatario.toUpperCase()) : 2 &&
            (produto !== "" && produto !== null) ? item.nome_produto.includes(produto.toUpperCase()) : 2 &&
              (safra !== "" && safra !== null) ? item.desc_safra.includes(safra) : 2 &&
                (motorista !== "" && safra !== motorista) ? item.nome_motorista.includes(motorista.toUpperCase()) : 2 &&
                  (placa !== "" && placa !== null) ? item.placa.includes(placa.toUpperCase()) : 2 &&
                    (operacao !== "" && operacao !== null) ? item.operacao.includes(operacao.toUpperCase()) : 2

    )


    setRomaneiosFiltrados(novaListaFiltrada);



  }


  return (
    <div>

      <NavBarAdmin />
      <div className={classes.root} style={{ backgroundColor: '#DCDCDC' }}>
        <MenuCliente titulo={"Romaneios"} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <div style={{ backgroundColor: 'white' }}>
            <Grid
              container
              direction="row"
              item xs={12} sm={12} md={12} lg={12} xl={12}
              justifyContent="center"
              alignItems="center"

            >

              <Grid item xs={1} style={{ padding: 10 }}>
                <TextField
                  variant="standard"
                  name="codigo"
                  label="Código"
                  id="codigo"
                  value={codigo}
                  onChange={e => setCodigo(e.target.value)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={2} style={{ padding: 10 }}>
                <TextField
                  variant="standard"
                  name="operacao"
                  label="Operação"
                  id="operacao"
                  value={operacao}
                  onChange={e => setOperacao(e.target.value)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={2} style={{ padding: 10 }}>
                <TextField
                  variant="standard"
                  name="remetente"
                  label="Remetente"
                  id="remetente"
                  value={filtroRemetente}
                  onChange={e => setfiltroRemetente(e.target.value.toUpperCase())}
                  fullWidth
                />
              </Grid>

              <Grid item xs={2} style={{ padding: 10 }}>
                <TextField
                  variant="standard"
                  name="destinatario"
                  label="Destinatario"
                  id="destinatario"
                  value={filtroDestinatario}
                  onChange={e => setfiltroDestinatario(e.target.value.toUpperCase())}
                  fullWidth
                />
              </Grid>



              <Grid item xs={1} style={{ padding: 10 }} >
                <TextField
                  variant="standard"
                  name="produto"
                  label="Produto"
                  id="produto"
                  value={produto}
                  onChange={e => setProduto(e.target.value.toUpperCase())}
                  fullWidth
                />
              </Grid>

              <Grid item xs={1} style={{ padding: 10 }}>
                <TextField
                  variant="standard"
                  name="safra"
                  label="Safra"
                  id="safra"
                  value={safra}
                  onChange={e => setSafra(e.target.value)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={2} style={{ padding: 10 }}>
                <TextField
                  variant="standard"
                  name="motorista"
                  label="Motorista"
                  id="motorista"
                  value={motorista}
                  onChange={e => setMotorista(e.target.value)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={1} style={{ padding: 10 }}>
                <TextField
                  variant="standard"
                  name="placa"
                  label="Placa"
                  id="placa"
                  value={placa}
                  onChange={e => setPlaca(e.target.value)}
                  fullWidth
                />
              </Grid>




              <Grid item xs={1} >

                <Button
                  variant="contained"
                  color="primary"
                  onClick={filtrar}
                > filtrar  </Button>

              </Grid>


            </Grid>

          </div>
          <div style={{ padding: 10, width: '100%', height: '70%' }}>
            {loading ?
              <Skeleton animation={"wave"} width={'100%'} style={{ backgroundColor: '#48D1CC' }}>
              </Skeleton>
              :
                <CollapsibleTable></CollapsibleTable>

            }
          </div>

        </main>
      </div >

      <div >
        <Rodape />
      </div>
    </div >
  );
}

