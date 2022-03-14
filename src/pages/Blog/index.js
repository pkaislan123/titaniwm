import React, { useState, useEffect } from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import background from '../../assets/imgs/capa1.png';
import Skeleton from '@material-ui/lab/Skeleton';
import api from '../../services/api';
import Grid from '@material-ui/core/Grid';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel'


const Blog = () => {


  const [loading, setLoading] = useState(true);
  const [noticias, setNoticias] = useState([]);


  /*
 <BlogPage1
          titulo={props.titulo}
          subtitulo={props.sub_titulo}
          data={props.data_noticia}
          hora={props.hora_noticia + "h"}
          redator={props.usuario.nome + " " + props.usuario.sobrenome}

          img1={props.url_img1}
          video1={props.url_video1}
          texto1={props.texto1}

          citacao={props.citacao}

          img2={props.url_img2}
          video2={props.url_video2}
          texto2={props.texto2}


          img3={props.url_img3}
          video3={props.url_video3}
          texto3={props.texto3}


        />
  */



  useEffect(() => {

    async function listarNoticias() {
      try {

        const response = await api.get('/v1/protected/noticias/listar');
        setNoticias(response.data)
        setLoading(false);

      } catch (_err) {
        // avisar('Houve um problema com o login, verifique suas credenciais! ' + cpf + " " + senha );
        console.log("Erro ao listar noticias: " + _err)

      }

    }

    listarNoticias();


  }, []);


  return (
    <div >
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",


      }} >

        <Navegador noticias={'underline'} />

        <div style={{ height: 5, backgroundColor: '#808080' }}>
        </div>
      </div>



      <Grid
        container
        direction="row"
        item xs={12} sm={12} md={12} lg={12} xl={12}
        justifyContent="center"
        alignItems="center"
      >




        <Carousel interval={5000} fade style={{ width: '100%' }}>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src="https://www.agroprecision.com.br/wp-content/uploads/2021/11/Quer-mais-produtividade-e-rentabilidade-na-soja.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src="https://www.bioblog.com.br/wp-content/uploads/2020/12/corn-5134432_1920.jpg"
              alt="Milho"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src="https://blog.syngentadigital.ag/wp-content/uploads/2017/08/sorgo-forrageiras-campo.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <p style={{ margin: 50 }} />
        <span style={{ width: '100%', fontWeight: 'bold', color: 'black', textAlign: 'center', fontSize: 36 }} > Blog da LD Armazéns</span>

        <br></br>
        <span style={{ width: '100%', color: 'black', textAlign: 'center', fontSize: 16 }} > Informativos da LD Armazém - Notícias do Mundo Agro - Soja - Milho - Sorgo - Fertilizantes</span>

        <p style={{ margin: 50 }} />


      </Grid>

      <div>
        {loading ?
          <Skeleton animation={"wave"} width={'100%'} style={{ backgroundColor: '#48D1CC' }}>
          </Skeleton>
          :
          <div>


            <Grid
              container
              direction="row"
              item xs={12} sm={12} md={12} lg={12} xl={12}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12} sm={12} md={12} lg={1} xl={1} >
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={10} xl={10}
                container
              >

                {
                  noticias.map((noticia) => (

                    <Grid
                      key={noticia.id_noticia}
                      container
                      direction="column"
                      item xs={12} sm={12} md={12} lg={3} xl={3}
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      style={{ padding: 10 }}
                    >

                      <img alt="img1" style={{ width: '100%', height: 150 }}

                        src={noticia.url_img1}
                      />
                      <p style={{ margin: 5 }} />
                      <a style={{ fontSize: 16, lineHeight: '20px', color: 'black' }} href={"/noticias/" + noticia.data_noticia + "/" + encodeURIComponent(noticia.titulo) + "/" + noticia.id_noticia} >{noticia.titulo}</a>
                      <p style={{ margin: 5 }} />
                      <span style={{ fontSize: 16 }} > Em {noticia.data_noticia} {noticia.hora_noticia} </span>

                    </Grid>
                  ))
                }
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={1} xl={1} >
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

export default Blog;