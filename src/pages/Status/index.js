import React, { useState, useEffect } from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import background from '../../assets/imgs/capa1.png';
import Grid from '@material-ui/core/Grid';
import './styles.scss';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import api from '../../services/api';



const Status = () => {


  const [dadosStatus, setDadosStatus] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {


   

    async function listarStatus() {
      try {

        const response = await api.get('/v1/protected/statusarmazem/listar');
        setDadosStatus(response.data)

        setLoading(false);

      } catch (_err) {
        // avisar('Houve um problema com o login, verifique suas credenciais! ' + cpf + " " + senha );
        console.log("Erro ao listar seus dados: " + _err)

      }

    }

    listarStatus();

  }, []);

  

  return (
    <div >
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",


      }} >

        <Navegador  servicos={'underline'}/>
        
        <div style={{ height: 5, backgroundColor: '#808080' }}>
        </div>


        <div style={{ backgroundColor: 'white', color: 'black' }}>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            item xs={12} sm={12} md={12} lg={12} xl={12}
            style={{ paddingTop: 40 }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "center" }} >
              <Typography component="h1" variant="h5" >
                <span style={{ fontSize: 44 }}> Como está operando nosso armazém?</span><br></br> <br></br>
              </Typography>
            </Grid>

          </Grid>
        </div>

        {loading ?
          <Skeleton animation={"wave"} width={'100%'} style={{ backgroundColor: '#48D1CC' }}>
          </Skeleton>
          :
          <div style={{ backgroundColor: 'white', color: 'black', paddingBottom: 100 }}>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              item xs={12} sm={12} md={12} lg={12} xl={12}
            >

              <Grid item xs={12} sm={12} md={12} lg={2} xl={2} style={{ textAlign: "center" }} >
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  item xs={12} sm={12} md={12} lg={12} xl={12}
                >


                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "center" }} >
                    <Typography component="h1" variant="h5" >
                      <span style={{ fontSize: 18, color: 'black' }}> Status do Armazém</span>
                    </Typography>
                    <Typography component="h1" variant="h5" >
                      <span style={{ fontSize: 24, color: '#20165b', fontWeight: 'bold' }}> {dadosStatus.status_armazem}</span>
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>



              <Grid item xs={12} sm={12} md={12} lg={2} xl={2} style={{ textAlign: "center" }} >
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  item xs={12} sm={12} md={12} lg={12} xl={12}
                >


                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "center" }} >
                    <Typography component="h1" variant="h5" >
                      <span style={{ fontSize: 18, color: 'black' }}> Status do Embarque</span>
                    </Typography>
                    <Typography component="h1" variant="h5" >
                      <span style={{ fontSize: 24, color: '#20165b', fontWeight: 'bold' }}> {dadosStatus.status_embarque}</span>
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>


              <Grid item xs={12} sm={12} md={12} lg={2} xl={2} style={{ textAlign: "center" }} >
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  item xs={12} sm={12} md={12} lg={12} xl={12}
                >

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "center" }} >

                  <Typography component="h1" variant="h5" >
                      <span style={{ fontSize: 18, color: 'black' }}> Status do Desembarque</span>
                    </Typography>
                    <Typography component="h1" variant="h5" >
                      <span style={{ fontSize: 24, color: '#20165b', fontWeight: 'bold' }}> {dadosStatus.status_desembarque}</span>
                    </Typography>


                  </Grid>


                </Grid>
              </Grid>


              
              <Grid item xs={12} sm={12} md={12} lg={2} xl={2} style={{ textAlign: "center" }} >
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  item xs={12} sm={12} md={12} lg={12} xl={12}
                >


                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "center" }} >
                    <Typography component="h1" variant="h5" >
                      <span style={{ fontSize: 18, color: 'black' }}> Horário de Encerramento</span>
                    </Typography>
                    <Typography component="h1" variant="h5" >
                      <span style={{ fontSize: 24, color: '#20165b', fontWeight: 'bold' }}> {dadosStatus.horario_encerramento} horas</span>
                    <br></br><br></br>
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>

            </Grid>
          </div>
        }

      </div>

      <div >
        <Rodape />
      </div>
    </div>
  );
}

export default Status;