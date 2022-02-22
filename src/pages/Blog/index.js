import React from 'react';
import Rodape from '../../components/Rodape';
import Navegador from '../../components/NavBar';
import background from '../../assets/imgs/capa1.png';
import BlogPage1 from '../../components/BlogPage1';
import './styles.scss';

const Blog = () => {

  


  const texto = `A Secretaria de Saúde do Amazonas (SES-Am) confirmou, na tarde desta quinta-feira (6), dois casos de infecção por Influenza A (H3N2) e Covid-19 no estado.

  De acordo com a SES, o primeiro caso foi diagnosticado em uma mulher, de 25 anos, que apresenta sintomas leves, como tosse. Ela é moradora de Manacapuru, Região Metropolitana de Manaus, e retornou de São Paulo no dia 3.
  
  O segundo caso também foi diagnosticado em uma mulher. A paciente, de 24 anos, apresenta sintomas leves. Ela teve amostra coletada no dia 3 de janeiro, quando retornou de São Paulo.
  
  A Secretaria de Saúde informou que as duas pacientes estão com o esquema vacinal completo, com as duas doses do imunizante contra a Covid-19.
  
  A chamada dupla contaminação é constatada quando os dois testes – para gripe e para Covid – dão positivo. Ela foi apelidada de "flurona" (união dos termos "flu", de influenza, com "rona" de coronavírus) na imprensa internacional, mas o termo não designa um novo tipo de doença, apenas uma forma simplificada de se referir à ocorrência simultânea de contaminações.`;

  
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
        <BlogPage1
          titulo="Brasil bate recorde de exportação de soja em 2021; milho cai ao menor patamar desde 2012"
          subtitulo="País vendeu 86,63 milhões de toneladas de soja ao exterior, no ano passado. Recorde anterior havia sido em 2018."
          data="05/01/2022"
          hora="10h52"
          redator="Aislan Silva Costa"
          texto1={texto}
        />

        <BlogPage1
          titulo="'King's Man: A origem' retrata absurdos 'historicamente corretos' da 1ª Guerra Mundial"
          subtitulo="'É inacreditável que basicamente uma briga familiar possa custar as vidas de tantos milhões de jovens homens', diz ator Rhys Ifans sobre conflito presente no filme, que estreia esta quinta (6)."
          data="06/01/2022"
          hora="06h00"
          redator="Cesar Soto, g1"
          imgCapa={"https://s2.glbimg.com/KR7PU8oQIKqm_I4tvt8olg_dyOc=/0x0:2578x1450/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/V/i/aWlsbdQAOOqBB0o3D6qw/kings-man-origem-ralph-fiennes-2.jpg"}
          texto1={`Em dois filmes, a franquia cinematográfica "Kingsman" explorou o mundo da espionagem britânica, com pitadas de humor e sequências de ação que conquistaram o público com seus exageros – como a capanga com próteses afiadas nas pernas.

          No novo capítulo que estreia nesta quinta-feira (6), "King's Man: A origem", além de trocar de nome por algum motivo, vai até o início do século 20 para explorar um outro tipo de absurdo: o da Primeira Guerra Mundial.
          
          "Nada é mais louco que a Primeira Guerra Mundial. Os eventos que levaram a ela. É incrível que basicamente uma briga familiar possa custar as vidas de tantos milhões de jovens homens", diz o ator galês Rhys Ifans ("O Espetacular Homem-Aranha") em entrevista ao g1.`}
          video1={"https://www.youtube.com/embed/no0d18qvw0o"}
          texto2={`Aos 54 anos, ele se junta ao diretor e roteirista Matthew Vaughn e a um elenco encabeçado por Ralph Fiennes ("O grande Hotel Budapeste") para interpretar uma das figuras vilanescas mais conhecidas da história, o místico russo Grigori Rasputin.`}

          citacao={`"Há tantos elementos no filme que são malucos e loucos, mas na verdade estão corretos historicamente. Por exemplo, havia membros do Serviço Secreto britânico realmente presentes, que tiveram uma participação integral no assassinato de Rasputin. Então, não achei que nada era louco demais."`}
          texto3={`Se o subtítulo não deixa claro o suficiente, "King's Man" retrata a origem da organização secreta de espionagem no começo do século 20, quando um duque (Fiennes) investe seus recursos e habilidades para impedir que vilões históricos dêem início à Grande Guerra.

          Esse contexto provoca um ritmo um pouco menos descontraído que os dois filmes anteriores. Afinal, o conflito resultou em cerca de 20 milhões de mortes entre 1914 e 1918.`}

          imgFim={"https://s2.glbimg.com/CskhHsmqB5tZL_cpKg1PzjRbu_A=/0x0:2578x1080/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/V/3/ItiowTRAqKMC5r8DmmBA/kings-man-origem-rhys-ifans.jpg"}

        />

        <BlogPage1
          titulo="Anvisa aprova registro de insumo da Fiocruz, e Brasil terá vacina 100% nacional contra Covid-19"
          subtitulo="Aprovação era a etapa final do processo de transferência de tecnologia da vacina da AstraZeneca. A previsão da Fiocruz é de que as primeiras doses do imunizante sejam envasadas ainda em janeiro e entregues ao Ministério da Saúde em fevereiro."
          data="06/01/2022"
          hora="06h00"
          redator="g1"
          videoCapa={"https://www.youtube.com/embed/wkXWAnkxAt0"}

          texto1={`A Agência Nacional de Vigilância Sanitária (Anvisa) aprovou, nesta sexta-feira (7), o registro do insumo farmacêutico ativo (IFA) da vacina da AstraZeneca contra a Covid-19 fabricado pela Fundação Oswaldo Cruz (Fiocruz). Com isso, o Brasil terá um imunizante produzido totalmente em território nacional (veja mais no vídeo acima).


          Essa etapa era a última do processo de transferência de tecnologia da produção da vacina. Agora, o "ingrediente" da vacina (ou seja, o IFA) será produzido no país, em vez de ser importado de fora. No ano passado, a Fiocruz precisou atrasar a entrega de vários lotes de vacina por falta do IFA.
          
          A Fiocruz tem o equivalente a 21 milhões de doses em IFA nacional, em diferentes etapas de produção e controle de qualidade. A previsão é a de que as primeiras doses do imunizante sejam envasadas ainda em janeiro e entregues ao Ministério da Saúde em fevereiro.`}



        />

      </div>

      <div >
        <Rodape />
      </div>
    </div>
  );
}

export default Blog;