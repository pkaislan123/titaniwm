import React from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import capa from '../../assets/imgs/capa.jpg';
import './styles.scss';


const Home = () => {








  return (
    <div >
      <div style={{
        backgroundImage: `url(${capa})`,
        backgroundSize: "cover",
        height:1000

      }} >

        <Navegador corFundo={'rgba(0,0,0,0.5)'}  travado={true} corTexto={'white'} />


      </div>
      <div >
        <Rodape />
      </div>
    </div >
  );
}

export default Home;