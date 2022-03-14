import React, { useState, useEffect } from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import background from '../../assets/imgs/capa1.png';
import './styles.scss';
import Skeleton from '@material-ui/lab/Skeleton';
import api from '../../services/api';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import Divider from "@material-ui/core/Divider";


const Cotacoes = () => {


  const [loading, setLoading] = useState(true);
  const [produtos, setProdutos] = useState([]);


  function currencyFormat(num) {
    return 'R$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  function formatData(data) {
    var dataCtr = moment(data, "YYYY-MM-DD hh:mm");
    return dataCtr.format("DD/MM/YYYY HH:mm")
  }





  useEffect(() => {

    async function listarCotacoes() {
      try {

        const response = await api.get('/v1/protected/produtos/listar');
        console.log("Produtos" + response.data)

        setProdutos(response.data)
        setLoading(false);

      } catch (_err) {
        // avisar('Houve um problema com o login, verifique suas credenciais! ' + cpf + " " + senha );
        console.log("Erro ao listar cotacoes: " + _err)

      }

    }

    listarCotacoes();


  }, []);




  const ProdutoItem = ({ props }) => {
    return (
      <div>
        <Grid
          container
          direction="row"
          item xs={12} sm={12} md={12} lg={12} xl={12}
          component={Paper} elevation={6} square

          style={{ marginTop: "0.5%", marginBottom: '3%' }}
        >

          <Grid
            container
            item xs={12} sm={12} md={12} lg={12} xl={12}
            direction="row" style={{ marginTop: "3%", marginBottom: '3%' }}>

            <Grid item xs={12} sm={12} md={12} lg={1} xl={1} >
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={10} xl={10}
              container
              direction="row"

            >

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                {props.url_referencia && props.url_referencia.length > 0 ?
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ padding: 10 }}>
                    <img alt="img1" height={300} width={300}

                      src={props.url_referencia}
                    />
                  </Grid>
                  : <div></div>}

              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                <br></br>
                <span style={{ fontWeight: 'bold', fontSize: 22, }} > {props.nome_produto} {props.transgenia}</span>

              </Grid>

              <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} direction="row"
                style={{ color: 'white', textAlign: 'center', backgroundColor: 'green' }}>

                <Grid item xs={12} sm={12} md={12} lg={1} xl={1}  >
                  <span style={{ fontSize: 16 }} >Medida</span>

                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={2} xl={2} >
                  <span style={{ fontSize: 16 }} >Quantidade</span>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={2} xl={2} >
                  <span style={{ fontSize: 16 }} >Unidade</span>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={2} xl={2} >
                  <span style={{ fontSize: 16 }} >Valor</span>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={2} xl={2} >
                  <span style={{ fontSize: 16 }} >Data</span>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
                  <span style={{ fontSize: 16 }} >Fonte</span>
                </Grid>
              </Grid>

            
                {
                  props.cotacoes.map((props) => (


                    <Grid key={props.id_cotacao} container item xs={12} sm={12} md={12} lg={12} xl={12} direction="row"
                      style={{ textAlign: 'center'}}>

                      <Grid item xs={12} sm={12} md={12} lg={1} xl={1} >
                        <span style={{ fontSize: 16 }} >{props.medida}</span>

                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={2} xl={2} >
                        <span style={{ fontSize: 16, }} >{props.quantidade}</span>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={2} xl={2} >
                        <span style={{ fontSize: 16, }} >{props.unidade}</span>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={2} xl={2} >
                        <span style={{ fontSize: 16, }} >{currencyFormat(props.valor)}</span>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={2} xl={2} >
                        <span style={{ fontSize: 16, }} >{formatData(props.data_hora)}</span>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
                        <span style={{ fontSize: 16, }} >{props.localidade} - {props.indicador}</span>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                        <Divider style={{ color: 'black', backgroundColor: 'black', width: '100%', height: 3 }} />
                      </Grid>

                    </Grid>
                  ))
                }
         
            </Grid>


            <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
            </Grid>

          </Grid>

        </Grid>

      </div>
    )
  }


  return (
    <div >
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",


      }} >

        <Navegador servicos={"underline"}/>

        <div style={{ height: 5, backgroundColor: '#808080' }}>
        </div>
      </div>



      <div>
        <Grid
          container
          direction="row"
          item xs={12} sm={12} md={12} lg={12} xl={12}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <span style={{ fontWeight: 'bold', padding: 30, fontSize: 28, lineHeight: '50px' }} >Cotações</span>

        </Grid>

        {loading ?
          <Skeleton animation={"wave"} width={'100%'} style={{ backgroundColor: '#48D1CC' }}>
          </Skeleton>
          :
          <div style={{ paddingInline: 25 }}>

            {
              produtos.map((produto) => (
                <ProdutoItem props={produto} key={produto.id_produto} />

              ))
            }


          </div>

        }


      </div>

      <div >
        <Rodape />
      </div>
    </div >
  );
}

export default Cotacoes;