import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Cookies from 'js-cookie';
import api from '../../services/api';
import Skeleton from '@material-ui/lab/Skeleton';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../painelAdmin/components/menu';
import MenuCliente from '../painelCliente/components/menu';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {  useParams } from "react-router-dom";
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
  table: {
    minWidth: 650,
  },
}));


export default function Contratos() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [quantidade, setQuantidade] = useState(0);
  const { tipo } = useParams();

  const [codigo, setCodigo] = useState('');
  const [produto, setProduto] = useState('');
  const [transgenia, setTransgenia] = useState('');
  const [filtroCompradores, setFiltroCompradores] = useState('');
  const [filtroVendedores, setFiltroVendedores] = useState('');
  const [safra, setSafra] = useState('');

  const [contratosFiltrados, setContratosFiltrados] = useState([]);
  const [contratosRefatorados, setContratosRefatorados] = useState([]);

  function somarQuantidades() {
    let soma = 0;
    for(let i in contratosFiltrados){
      
      let quantidade_local = contratosFiltrados[i].medida === "Sacos" ? parseFloat(contratosFiltrados[i].quantidade) : parseFloat(contratosFiltrados[i].quantidade) * 60
      soma += quantidade_local;
      
    }
    setQuantidade( soma);
    
  }

 

  useEffect(() => {

    
    async function listarMeusDados(tipo) {
      try {
  
        var dados = [];

        const token = Cookies.get('token');
        const headers = {
          'Authorization': 'Bearer ' + token
        }
        const id_usuario = Cookies.get('id_usuario');
        console.log("id na tela de contratos: " + id_usuario)
  
        await api.get("v1/protected/retornardadoscliente/" + id_usuario, {
          headers: headers
        }).then(function (response) {
            console.log(" Meus Dados: " + response);
           dados = response.data;
        });
  
        var url = tipo === 0 ? "v1/protected/contratos/listar" : tipo === 1 ? "v1/protected/contratos/listarContratosComprador/" : "v1/protected/contratos/listarContratosVendedor/"
  
        var identificacao = dados.tipo_cliente === 0 ? dados.cpf : dados.cnpj;
        await api.get(url + identificacao, {
          headers: headers
        }).then(function (response) {
          setContratosFiltrados(response.data)
          setContratosRefatorados(response.data)
        
          let soma = 0;
          for(let i in response.data){
            
            let quantidade_local = response.data[i].medida === "Sacos" ? parseFloat(response.data[i].quantidade) : parseFloat(response.data[i].quantidade) * 60
            soma += quantidade_local;
            
          }
          setQuantidade( soma);

          console.log(" Meus Contratos: " + response);
          setLoading(false);
  
        });
  
      } catch (_err) {
        // avisar('Houve um problema com o login, verifique suas credenciais! ' + cpf + " " + senha );
        console.log("Erro ao listar seus dados: " + _err)
  
      }
  
    }

    
    listarMeusDados();



  }, []);



  function currencyFormat(num) {
    return 'R$ ' + parseFloat(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }



  function CollapsibleTable() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead >

            <TableRow >
              <TableCell colSpan={1}></TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white' }} align="center" colSpan={1}>ID</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white' }} colSpan={1}>Código</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white' }} colSpan={1}>Data Contrato</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white' }} colSpan={1}>Compradores</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white' }} colSpan={1}>Vendedores</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white' }} colSpan={1}>Status</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white' }} colSpan={1}>Data Entrega</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white' }} colSpan={1}>Quantidade</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white' }} colSpan={1}>Medida</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white' }} colSpan={1}>Produto</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white' }} colSpan={1}>Transgenia</TableCell>
              <TableCell style={{ backgroundColor: 'brown', color: 'white' }} colSpan={1}>Safra</TableCell>
              <TableCell style={{ Width: 200, backgroundColor: 'brown', color: 'white' }} colSpan={1}>Valor Unidade</TableCell>
              <TableCell style={{ Width: 50, backgroundColor: 'brown', color: 'white' }} colSpan={1}>Valor Total</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {contratosFiltrados.map((contrato) => (
              <Row key={contrato.id} row={contrato} />
            ))}
            <TableRow>
              <TableCell colSpan={7}></TableCell>
              <TableCell style={{ fontSize: 18, backgroundColor: 'green', color: 'white' }} colSpan={1}>Quantidade Total:</TableCell>
              <TableCell style={{ fontSize: 20, backgroundColor: 'green', color: 'white' }} colSpan={2} align="right"> {quantidade} sacos </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }




  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);


    function setOpenInfoExtra(open) {
      setOpen(open);
    }

    function retornarStatusContrato(status) {
      if (status === 1) {
        return "ASSINAR";
      } else if (status === 2) {
        return "ASSINADO";

      } else if (status === 3) {
        return "CONCLUIDO";

      } else if (status === 0) {
        return "A APROVAR";

      } else if (status === 4) {
        return "CANCELADO";

      }
    }

    function retornarCorStatusContrato(status) {
      if (status === 1) {
        return "yellow";
      } else if (status === 2) {
        return "green";

      } else if (status === 3) {
        return "blue";

      } else if (status === 0) {
        return "orange";

      } else if (status === 4) {
        return "red";

      }
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
          <TableCell colSpan={1} align="right">{row.codigo.toUpperCase()}</TableCell>
          <TableCell colSpan={1} align="right">{row.data_contrato.toUpperCase()}</TableCell>

          <TableCell colSpan={1} align="right">{
            row.compradores.map((comprador) =>
              comprador.tipo_cliente === 0 ? comprador.nome_empresarial.toUpperCase() : comprador.razao_social.toUpperCase()
                + ";"
            )
          } </TableCell>
          <TableCell colSpan={1} align="right">{
            row.vendedores.map((vendedor) =>
              vendedor.tipo_cliente === 0 ? vendedor.nome_empresarial.toUpperCase() : vendedor.razao_social.toUpperCase()
                + ";"
            )
          }</TableCell>

          <TableCell colSpan={1} style={{ backgroundColor: retornarCorStatusContrato(row.status_contrato), color: retornarCorStatusContrato(row.status_contrato) === 'yellow' ? 'black' : 'white' }} align="right">{
            retornarStatusContrato(row.status_contrato).toUpperCase()
          }</TableCell>
          <TableCell colSpan={1} align="right">{row.data_entrega.toUpperCase()}</TableCell>

          <TableCell colSpan={1} align="right">{
            row.quantidade
          }</TableCell>

          <TableCell colSpan={1} align="right">{
            row.medida.toUpperCase()
          }</TableCell>


          <TableCell colSpan={1} align="right">{
            row.safra.produto.nome_produto.toUpperCase()
          }</TableCell>

          <TableCell colSpan={1} align="right">{
            row.safra.produto.transgenia.toUpperCase()
          }</TableCell>

          <TableCell colSpan={1} align="right">{row.safra.ano_plantio}/{row.safra.ano_colheita}</TableCell>

          <TableCell colSpan={1} align="right">{currencyFormat(row.valor_produto)}</TableCell>

          <TableCell colSpan={1} align="right">{currencyFormat(row.valor_a_pagar)}</TableCell>


        </TableRow>

      </React.Fragment>
    );
  }

  function filtrarCodigo(params) {
    setCodigo(params)
    filtrar();
  }

  function filtrarProduto(params) {
    setProduto(params)
    filtrar();
  }

  function filtrarTransgenia(params) {
    setTransgenia(params)
    filtrar();
  }

  function filtrarSafra(params) {
    setSafra(params)
    filtrar();
  }


  function filtrarCompradores(params) {
    setFiltroCompradores(params)
    filtrar();
  }


  function filtrarVendedores(params) {
    setFiltroVendedores(params)
    filtrar();
    
  }





  function filtrar() {

     let novaLista = contratosRefatorados.map((contrato) => {
      var nome_compradores = contrato.compradores.map((comprador) =>
        comprador.tipo_cliente === 0 ? comprador.nome_empresarial : comprador.razao_social
          + ";"
      ).toString().toUpperCase();
      contrato['nome_compradores'] = nome_compradores
      var nome_vendedores = contrato.vendedores.map((vendedor) =>
        vendedor.tipo_cliente === 0 ? vendedor.nome_empresarial : vendedor.razao_social
          + ";"
      ).toString().toUpperCase();
      contrato['nome_vendedores'] = nome_vendedores
      var desc_safra = contrato.safra.ano_plantio + "/" + contrato.safra.ano_colheita
      contrato['desc_safra'] = desc_safra
      return contrato;

    })
    setContratosFiltrados(novaLista.filter(
      item =>
        item.codigo.includes(codigo)  &&
         item.nome_compradores.includes(filtroCompradores.toUpperCase())  &&
        item.nome_vendedores.includes(filtroVendedores.toUpperCase()) &&
        item.safra.produto.nome_produto.toUpperCase().includes(produto.toUpperCase()) &&
        item.safra.produto.transgenia.toUpperCase().includes(transgenia.toUpperCase()) &&
        item.desc_safra.includes(safra)
    ))

    somarQuantidades();


  }

  

  const renderMenu = () => {

    const regra = Cookies.get('regra');
    console.log("regra na funcao render na tela de contratos: " + regra);

    if (regra === "ROLE_ADMIN") {
      return <MenuAdmin titulo={tipo === 0 ? "Contratos" : tipo === 1 ? "Contratos Como Comprador" : "Contratos Como Vendedor"}/>
    } else if (regra === "ROLE_CLIENTE") {
      return <MenuCliente titulo={tipo === 0 ? "Contratos" : tipo === 1 ? "Contratos Como Comprador" : "Contratos Como Vendedor"} />
    }
  }



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
       {renderMenu()}
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <div style={{ padding: 10 }}>
            {loading ?
              <Skeleton animation={"wave"} width={'100%'} style={{ backgroundColor: '#48D1CC' }}>
              </Skeleton>
              :
              <div >
                <div style={{ backgroundColor: 'white' }}>
                  <Grid
                    container
                    direction="row"
                    item xs={12} sm={12} md={12} lg={12} xl={12}
                    justifyContent="center"
                    alignItems="center"

                  >

                    <Grid item xs={2} style={{ padding: 20 }}>
                      <TextField
                        variant="standard"
                        name="codigo"
                        label="Código"
                        id="codigo"
                        value={codigo}
                        onChange={e => filtrarCodigo(e.target.value)}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={2} style={{ padding: 20 }}>
                      <TextField
                        variant="standard"
                        name="compradores"
                        label="Compradores"
                        id="compradores"
                        value={filtroCompradores}
                        onChange={e => filtrarCompradores(e.target.value)}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={2} style={{ padding: 20 }}>
                      <TextField
                        variant="standard"
                        name="vendedores"
                        label="Vendedores"
                        id="vendedores"
                        value={filtroVendedores}
                        onChange={e => filtrarVendedores(e.target.value)}
                        fullWidth
                      />
                    </Grid>



                    <Grid item xs={2} style={{ padding: 20 }} >
                      <TextField
                        variant="standard"
                        name="produto"
                        label="Produto"
                        id="produto"
                        value={produto}
                        onChange={e => filtrarProduto(e.target.value)}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={2} style={{ padding: 20 }}>
                      <TextField
                        variant="standard"
                        name="transgenia"
                        label="Transgenia"
                        id="transgenia"
                        value={transgenia}
                        onChange={e => filtrarTransgenia(e.target.value)}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={2} style={{ padding: 20 }}>
                      <TextField
                        variant="standard"
                        name="safra"
                        label="Safra"
                        id="safra"
                        value={safra}
                        onChange={e => filtrarSafra(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                </div>
                <CollapsibleTable></CollapsibleTable>

              </div>

            }
          </div>

        </main>
      </div>
    </div>
  );
}

