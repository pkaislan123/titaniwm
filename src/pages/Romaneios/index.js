import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Cookies from 'js-cookie';
import api from '../../services/api';
import Skeleton from '@material-ui/lab/Skeleton';

import MenuAdmin from '../painelAdmin/components/menu';
import MenuCliente from '../painelCliente/components/menu';
import { DataGrid, ptBR, GridToolbarContainer, GridLinkOperator, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, GridToolbarDensitySelector } from '@material-ui/data-grid';
import {

  Link

} from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .cabecalho_azul': {
      backgroundColor: 'rgba(0, 0, 255, 1)',
      color: 'white',
    },
    '& .cabecalho_verde': {
      backgroundColor: 'rgba(0, 100, 0, 1)',
      color: 'white',
    },
    '& .cabecalho_verde_claro': {
      backgroundColor: 'rgba(107,142,35, 1)',
      color: 'white',
    },
    '& .cabecalho_marrom_claro': {
      backgroundColor: 'rgba(184,134,11, 1)',
      color: 'white',
    },
    '& .cabecalho_verde_cyan': {
      backgroundColor: 'rgba(0,139,139, 1)',
      color: 'white',
    },
    '& .cabecalho_verde_dark_sea': {
      backgroundColor: 'rgba(60,179,113, 1)',
      color: 'white',
    },
    '& .cabecalho_marrom_escuro': {
      backgroundColor: 'rgba(139,69,19, 1)',
      color: 'white',
    },
    '& .cabecalho_marrom_chocolate': {
      backgroundColor: 'rgba(210,105,30, 1)',
      color: 'white',
    },
    '& .cabecalho_darkslate': {
      backgroundColor: 'rgba(47,79,79, 1)',
      color: 'white',
    },
    '& .super-app.negative': {
      backgroundColor: 'rgba(157, 255, 118, 0.49)',
      color: '#1a3e72',
      fontWeight: '600',
    },
    '& .super-app.positive': {
      backgroundColor: '#d47483',
      color: '#1a3e72',
      fontWeight: '600',
    },
    '& .super-app.neutro': {
      backgroundColor: '#363636',
      color: 'white',
      fontWeight: '600',
    },
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
  const [romaneios, setRomaneios] = useState([]);
  const [regra, setRegra] = useState('');
  const [loading, setLoading] = useState(true);
  const [meusDados, setMeusDados] = useState([]);


  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };



  const columnsDataGrid = [

    {
      headerName: 'ID',
      field: 'id',
      id: 1,
      headerClassName: 'cabecalho_azul',
    },
    {
      headerName: 'Código',
      field: 'codigo',
      minWidth: 150,
      id: 2,
      headerClassName: 'cabecalho_azul',

    },
    {
      headerName: 'Data',
      field: 'data_romaneio',
      minWidth: 150,
      id: 3,
      headerClassName: 'cabecalho_azul',

    },
    

  ];


 

  async function procurarRegra() {
    try {
      const regra = Cookies.get('regra');
      setRegra(regra);

      if (regra === "ROLE_ADMIN") {

      } else if (regra === "ROLE_CLIENTE") {

      }

    } catch (_err) {

    }
  }


  async function listarMeusDados() {
    try {

      const token = Cookies.get('token');

      const headers = {
        'Authorization': 'Bearer ' + token
      }


      const id_usuario = Cookies.get('id_usuario');
      console.log("id na tela de romaneios: " + id_usuario)

      await api.get("v1/protected/retornardadoscliente/" + id_usuario, {
        headers: headers
      }).then(function (response) {
        setMeusDados(response.data)

        console.log(" Meus Dados: " + response);



      });

      var url = "v1/protected/romaneios/";

      var identificacao = meusDados.tipo_cliente === 0 ? meusDados.cpf : meusDados.cnpj;
      await api.get(url + identificacao, {
        headers: headers
      }).then(function (response) {
        setRomaneios(response.data)

        console.log(" Meus Romaneios: " + response.data);
        setLoading(false);

      });



    } catch (_err) {
      // avisar('Houve um problema com o login, verifique suas credenciais! ' + cpf + " " + senha );
      console.log("Erro ao listar seus dados: " + _err)

    }

  }

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  useEffect(() => {

    procurarRegra();
   // listarMeusDados();



  }, [loading]);

  const filterModel = {
    items: [
     
    ],
    linkOperator: GridLinkOperator.Or,
  };

  const renderMenu = () => {
    console.log("regra na funcao render na tela de romaneios: " + regra);

    if (regra === "ROLE_ADMIN") {
      return <MenuAdmin titulo={"Romaneios"}/>
    } else if (regra === "ROLE_CLIENTE") {
      return <MenuCliente titulo={"Romaneios"} />
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
        {
          renderMenu()
        }
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <div style={{ padding: 10, width: '100%', height: '70%' }}>
            {loading ?
              <Skeleton animation={"wave"} width={'100%'} style={{ backgroundColor: '#48D1CC' }}>
              </Skeleton>
              :

              <DataGrid localeText={ptBR.props.MuiDataGrid.localeText}
                pagination
                checkboxSelection
                rows={romaneios} columns={columnsDataGrid}
                initialState={{ filter: { filterModel } }}
                rowP
                onCellClick={handleCellClick}
                onRowClick={handleRowClick}
                components={{
                  Toolbar: CustomToolbar,
                }}
              />

            }
          </div>

        </main>
      </div>
    </div>
  );
}

