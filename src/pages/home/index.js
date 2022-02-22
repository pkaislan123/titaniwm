import React from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import background from '../../assets/imgs/capa1.png';
import Grid from '@material-ui/core/Grid';
import './styles.scss';

const Home = () => {

  
  
  return (
    <div >
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",


      }} >
        
        <Navegador />

        <div style={{ height: 5, backgroundColor: '#808080' }}>
        </div>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <Grid
            container
            direction="row"
            item xs={12} sm={12} md={12} lg={12} xl={12}
            justifyContent="center"
            alignItems="center"
            style={{ paddingTop: 100, paddingBottom: 150 }}

          >

            <Grid item xs={12} sm={12} md={12} lg={2} xl={2} >
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8} style={{ paddingInline: '5%', textAlign:'justify' }}>


              <br></br> <br></br>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign:'center'}}>
                <span style={{ fontSize: 42, color: 'white' }}>Somos especialistas no que fazemos de melhor</span>
              </Grid>
              <br></br> <br></br>

              <span style={{ fontSize: 22, color: 'white' }}>
                Nosso Armazém vem se reencontrando consigo mesmo nos últimos anos, passamos por diversas transformações,
                diversos rostos estiveram por aqui, reinventamos nosso modo de pensar, de trabalhar, nosso modelo de negócios,
                reinventamos até nosso nome, nos modernizamos, enfim, não temos medo da mudança, isso tudo visando um
                objetivo claro: Atender bem nossos clientes.

                <br></br> <br></br>

                Temos alta capacidade de armazenamento, equipamentos certificados, máquinarios modernos e uma equipe de profissionais
                qualificados para a execução da limpeza, padronização e secagem, garantindo assim toda a segurança na
                armazenagem, beneficiamento e rentabilidade dos grãos.
                Compramos e Vendemos grãos intermediando nossos clientes com as maiores e melhores
                empresas do setor agrícola do país, temos parcerias com multinacionais como a CJ Selecta
                e a Bungue.

                <br></br> <br></br>

                Aqui na LD Armazéns Atender bem nossos Clientes é nossa prioridade, nosso melhor serviço é
                tratar nosso cliente com todo respeito e dedicação, quer seja na negociação, quer seja em todo o cuidado
                das etapas do beneficiamento dos grãos.
              </span>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={2} xl={2} >
            </Grid>
          </Grid>

        </div>
      </div>

      <div >
        <Rodape />
      </div>
    </div>
  );
}

export default Home;