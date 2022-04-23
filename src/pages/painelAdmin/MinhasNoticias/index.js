import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../components/menu';
import Cookies from 'js-cookie';
import api from '../../../services/api';
import Skeleton from '@material-ui/lab/Skeleton';
import NavBarAdmin from "../../../components/NavBarAdmin";
import Rodape from '../../../components/Rodape';
import { DataGrid, ptBR, GridToolbarContainer, GridLinkOperator, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, GridToolbarDensitySelector } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Link } from "@material-ui/core";

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& .cabecalho_transparente': {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            color: 'rgba(0, 0, 0, 0)',
        },
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


function novaNoticia() {
    window.location.href = "/cadastrarnoticia"

}

export default function MinhasNoticias() {
    const [minhasNoticias, setMinhasNoticias] = useState([]);

    const [loading, setLoading] = useState(true);


    const classes = useStyles();


    const handleCellClick = (param, event) => {
        event.stopPropagation();
    };

    const handleRowClick = (param, event) => {
        event.stopPropagation();
    };


  

    
    async function deletarNoticia(event, cellValues) {

        console.log("Funcao deletar noticia chamada, id: " + cellValues.row.id_noticia);
        if (window.confirm("Excluir a Notícia Selecionada?")) {
            var result = await api.delete("v1/protected/noticias/excluirNoticia/" + cellValues.row.id_noticia);
            console.log("resultado da exclusao: " + result.status);
            if (result.status === 204) {

                window.location.href = "/minhasnoticias";

            } else {
                alert("Erro ao Excluir! Tente novamente");
            }
        }
    }
    
   
    const columnsDataGrid = [

        {
            headerName: 'ID',
            field: 'id_noticia',
            id: 1,
            headerClassName: 'cabecalho_azul',
        },
        {
            headerName: 'Título',
            field: 'titulo',
            id: 2,
            minWidth: 500,
            headerClassName: 'cabecalho_azul',
        },
        {
            headerName: 'Data',
            field: 'data_noticia',
            minWidth: 150,
            id: 3,
            headerClassName: 'cabecalho_azul',
        },
        {
            headerName: 'Hora',
            field: 'hora_noticia',
            minWidth: 150,
            id: 4,
            headerClassName: 'cabecalho_azul',

        },
        {
            field: "vizualizar",
            headerName: "Vizualizar",
            headerClassName: 'cabecalho_transparente',
            sortable: false,
            id: 5,
            minWidth: 150,
            renderCell: (cellValues) => {
                return <Link  target="_blank" href={"/noticias/" + cellValues.row.data_noticia + "/" + encodeURIComponent(cellValues.row.titulo) + "/" + cellValues.row.id_noticia }>Vizualizar</Link>;
              }
        },

        {
            field: "excluir",
            headerName: "Excluir",
            headerClassName: 'cabecalho_transparente',
            sortable: false,
            id: 6,
            minWidth: 150,
            renderCell: (cellValues) => {
                return (
                  <Button
                  startIcon={<DeleteIcon />}
                    variant="outlined"
                    onClick={(event) => {
                      deletarNoticia(event, cellValues);
                    }}
                  >
                    Excluir
                  </Button>
                );
              }
        },

        {
            field: "editar",
            headerName: "Editar",
            headerClassName: 'cabecalho_transparente',
            sortable: false,
            id: 6,
            minWidth: 150,
            renderCell: (cellValues) => {
                return (
                    <Button color="primary" 
                    href={"/alterarnoticia/" + cellValues.row.id_noticia}
                    target="_blank"
                    >Editar</Button>
                );
              }
        },


    ];





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

    const filterModel = {
        items: [

        ],
        linkOperator: GridLinkOperator.Or,
    };



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



    return (
        <div>

            <NavBarAdmin />
            <div className={classes.root} style={{ backgroundColor: '#DCDCDC' }}>
                <MenuAdmin titulo={"Minhas Notícias"} />

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
                                rows={minhasNoticias} columns={columnsDataGrid}
                                initialState={{ filter: { filterModel } }}
                                getRowId={(row) => row.id_noticia}
                                onCellClick={handleCellClick}
                                onRowClick={handleRowClick}
                                components={{
                                    Toolbar: CustomToolbar,
                                }}
                            />

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

                </main>
            </div>
            <div >
                <Rodape />
            </div>
        </div>
    );
}



