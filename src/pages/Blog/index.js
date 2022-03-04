import React, { useState, useEffect } from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import background from '../../assets/imgs/capa1.png';
import BlogPage1 from '../../components/BlogPage1';
import './styles.scss';
import Skeleton from '@material-ui/lab/Skeleton';
import api from '../../services/api';

const Blog = () => {


  const [loading, setLoading] = useState(true);
  const [noticias, setNoticias] = useState([]);

  

  const NoticiaItem = ({ props }) => {

    return (

      <div >


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
      </div>
    );
  };


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

        <Navegador />

        <div style={{ height: 5, backgroundColor: '#808080' }}>
        </div>
      </div>


     
      <div>
        {loading ?
          <Skeleton animation={"wave"} width={'100%'} style={{ backgroundColor: '#48D1CC' }}>
          </Skeleton>
          :
          <div>
            
            {
              noticias.map((row) => (
                <NoticiaItem props={row} key={row.id_noticia} />

              ))
            }
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