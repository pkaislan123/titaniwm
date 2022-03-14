import React from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import background from '../../assets/imgs/capa1.png';
import gehaka from '../../assets/imgs/gehaka.png';
import Grid from '@material-ui/core/Grid';

import './styles.scss';

const About = () => {

 

  return (
    <div >
      <div

      >
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }} >
         
          <Navegador  sobre={'underline'}/>
          <div style={{ height: 5, backgroundColor: '#808080' }}>
          </div>

          <div style={{
            
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white'
          }}>
            <Grid
              container
              direction="row"
               item xs={12} sm={12} md={12} lg={12} xl={12}
              justifyContent="center"
              style={{paddingTop: 100, paddingBottom: 180}}
              alignItems="center"
            >

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >

              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={5} xl={5}   >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}   >
                  <span style={{ fontSize: 42,  }}> Um pouco de História... </span>
                </Grid>
                <br></br>
                <span style={{ fontSize: 34,  }}>  1º Fase - O Ínicio da Jornada</span>
                <br></br>
                <span style={{ fontSize: 22,  }}>
                  As obras para o então armazém A Produtiva iniciarám-se em 2010, em primeiro momento, como uma empresa familiar. A conclusão se deu em dezembro de 2012,
                  a primeira safra iniciou-se logo em janeiro de 2013.
                  <br></br>
                </span>
                <br></br>

                <span style={{ fontSize: 34,  }}>  2º Fase - Em Busca de Novos Ares</span>
                <br></br>
                <span style={{ fontSize: 22,  }}>
                  Em 2018, após um tempo para respirar, a administração da unidade volta a tomar conhecimento sobre o armazém, aqui é onde
                  começa a trilhar um novo caminho.
                  <br></br>
                </span>
                <br></br>
                <span style={{ fontSize: 34,  }}>  3º Fase - Reestruturação</span>
                <br></br>
                <span style={{ fontSize: 22,  }}>
                  Em 2020, com foco no objetivo de reestruturação da unidade, o armazém passa por mudanças, e repensado o modelo de négocios, 
                  a unidade de armazenamento entra em expansão, aumentando sua capacidade, reeinventa também sua
                  identidade passando a ser chamar LD Armazéns Gerais.
                  <br></br>
                </span>
                <br></br>
                <span style={{ fontSize: 34,  }}>  4º Fase - Modernização</span>
                <br></br>
                <span style={{ fontSize: 22,  }}>
                  Em 2021, com foco na modernização da unidade, o armazém investe em novos equipamentos, novos máquinarios,
                  em soluções energéticas, revitalizando o que já existia antes.
                  <br></br>
                </span>


              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={1} xl={1} >
              </Grid>

            </Grid>

          </div>
        </div>


        <div style={{  backgroundColor: 'white', color: 'black' }}>
          <Grid
            container
            direction="row"
            item xs={12} sm={12} md={12} lg={12} xl={12}
            style={{paddingTop: 60, paddingBottom: 60}}
          >

            <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}  style={{textAlign:'justify'}}>

              <br></br> <br></br>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign:'center'}}  >
                <span style={{ fontSize: 42 }}>  Como Trabalhamos atualmente?</span>
              </Grid>
              <br></br> <br></br>
              <span style={{ fontSize: 22 }}>

                Contamos com equipamentos de Classificação de Grãos de alta qualidade e certificados no INMETRO, como os medidores de umidade da Gehaka. Temos profissionais
                especializados na classificação de grãos.
                <br></br>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign: "center"}} >
                  <img alt="umidade"
                    style={{ weight: 300, height: 300, paddingRight: 20 }}
                    src={gehaka}
                  />
                </Grid>
                <br></br> <br></br>
                Investimos em máquinarios modernos de ultima geração com alta velocidade de fluxo, alta capacidade de limpeza,
                secagem e armazenagem, como elevadores de grãos, pré-limpezas, secadores e transportadores da CASP.
                <br></br> <br></br>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  item xs={12}
                  style={{textAlign: "center"}}
                >

                  <img alt="maquina"
                    style={{ weight: 300, height: 300, padding: 20 }}
                    src={'https://www.casp.com.br/site2016/wp-content/uploads/2020/08/elevador-de-caneca-scaled.jpg'}
                  />

                  <img alt="maquina"
                    style={{ weight: 300, height: 300, padding: 20 }}
                    src={'https://www.casp.com.br/site2016/wp-content/uploads/2020/08/transp-corrente.jpg'}
                  />

                  <img alt="maquina"
                    style={{ weight: 300, height: 300, padding: 20 }}
                    src={'https://www.casp.com.br/site2016/wp-content/uploads/2020/08/maq-limpeza-scaled.jpg'}
                  />

                  <img alt="maquina"
                    style={{ weight: 300, height: 300, padding: 20 }}
                    src={'https://www.casp.com.br/site2016/wp-content/uploads/2020/08/02-secadores-tratada.jpg'}
                  />
                </Grid>

                <br></br>  <br></br>
                Em 2021 realizamos investimos na matriz energética da unidade com a instalação de painéis
                fotovoltaicos para geração de energia solar.
                <br></br>  <br></br>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign: "center"}} >
                  <img alt="energia solar"
                    style={{ weight: 300, height: 300, padding: 20 }}
                    src={'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/energia-solar.jpeg'}
                  />
                </Grid>
                <br></br>  <br></br>
                Contamos com classificação de cargas na portaria do armazém usando coletor hidráulico,
                com isso, aumentamos a velocidade de recebimento e processamento de grãos.
                <br></br>  <br></br>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign: "center"}} >
                  <img alt="coletor hidraulico"
                    style={{ weight: 300, height: 300, padding: 20 }}
                    src={'https://balancascapital.com.br/wp-content/uploads/2017/02/P-16.jpg'}
                  />
                </Grid>

                <br></br>  <br></br>
                Também com investimentos na areá de tecnologia da informação, contamos com ferramentas
                que facilitam a comunicação do Armazém com seus clientes, em nosso site o cliente da LD Armazéns
                pode consultar seus contratos e romaneios. Com o "Serviço de Notificação", o produtor rural
                recebe em tempo real informações sobre suas cargas no armazém.
              </span>
              <br></br>  <br></br>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign: "center"}} >
                <img alt="whatsapp"
                  style={{ weight: 300, height: 300, padding: 20 }}
                  src={'https://marcas-logos.net/wp-content/uploads/2020/03/WHATSAPP-LOGO.png'}
                />
              </Grid>

              <br></br>  <br></br>

            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
            </Grid>

          </Grid>

        </div>



        <div style={{ backgroundColor: '#20165b' }}>
          <Grid
            container
            direction="row"
            item xs={12} sm={12} md={12} lg={12} xl={12}
            justifyContent="center"
            style={{paddingBottom: 80}}
          >

            <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >


              <br></br> <br></br>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}   >
              <span style={{ fontSize: 42, color: 'white' }}>  O que vem por aí?</span>
              </Grid>
              <br></br> <br></br>

              <span style={{ fontSize: 22, color: 'white' }}>
                Ao longo dos últimos 10 anos o armazém mudou, se reiventou, se reestruturol e vem se modernizando cada vez mais, nosso
                foco e crescer para que cada vez mais possamos oferecer um serviço de qualidade aos nossos parceiros, clientes e amigos.

              </span>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
            </Grid>
          </Grid>
        </div>

        <div style={{  backgroundColor: 'black' }}>
          <Grid
            container
            direction="row"
            item xs={12} sm={12} md={12} lg={12} xl={12}
            justifyContent="center"
            style={{paddingTop: 60, paddingBottom: 60}}
          >

            <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
           

              <span style={{ fontSize: 22, color: 'white' }}>
                A LD Armazéns sabe que trabalhar sozinho é impossível, e ter com quem contar
                e imprescindível, por isso temos parcerias com as maiores e melhores empresas do setor
                agrícola do páis.
              </span>

              <br></br> <br></br>
              <span style={{ fontSize: 34, color: 'white',  }}>Nossos parceiros:</span>
              <br></br> <br></br>

              <Grid
                container
                direction="row"
                justifyContent="center"
                item xs={12}
              >

                <img alt="selecta"
                  style={{ weight: 150, height: 150, padding: 20 }}
                  src={'https://www.cjselecta.com.br/images/cj-selecta-logo.svg?crc=4629735'}
                />

                <img alt="alianca"
                  style={{ weight: 200, height: 200, padding: 20 }}
                  src={'https://cdn.shortpixel.ai/spai/w_224+q_lossless+ret_img+to_webp/https://wingsltda.com.br/wp-content/uploads/2021/12/alianca-agricola.jpg'}
                />

                <img alt="bungue"
                  style={{ weight: 80, height: 80 , padding: 20}}
                  src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bunge_Limited_Logo.svg/2560px-Bunge_Limited_Logo.svg.png'}
                />
              </Grid>

            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
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

export default About;