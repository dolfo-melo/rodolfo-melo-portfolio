import icone from './img/rodolfo-melo-logo.svg';
import fotoPerfil from './img/foto_perfil_nova.png';
import foodyFinds from './img/foodyFinds.png';
import pokedex from './img/pokedex.png';
import yukaMedicina from './img/yukaMedicina.png';
import apiViaCep from './img/apiViaCep.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(fab, fas);

function App() {
  return (
    <div className="app">
      <head>
        <link rel="icon" href={icone} />
      </head>
      
      <div className="appHeader">
        <header>
          <img src={fotoPerfil} className="appLogo" alt="logo" />
          <h1>Rodolfo Melo</h1>
          <p>Suporte Técnico | Desenvolvedor FullStack </p>
          <FontAwesomeIcon className="headerIcon" icon={['fas', 'arrow-down']} />
          <section className="socialLinks">
            <a href="https://github.com/dolfo-melo" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a href="https://www.linkedin.com/in/rodolfo-melo/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
            <a href="https://www.instagram.com/dolfo_melo/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a href="https://www.youtube.com/@dolfo_melo" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'youtube']} />
            </a>
        </section>
        </header>
        
      </div>
      
      <div className="sobreMimContent">
        <h1>Sobre Mim</h1>
        <div className="sobreMim">
          <p><strong>Sawubona!!</strong> Me chamo Rodolfo Melo, sou de Aracaju (SE).</p>
          <p>Sou formado em <strong>Ciência da Computação</strong> pela Universidade Estácio de Sá e, desde sempre, fui movido pela curiosidade. Estudo diversos temas, especialmente dentro da computação:</p>
          <ul>
            <li>Desenvolvimento FullStack <strong>(HTML, CSS, JavaScript, Python, .NET)</strong>;</li>
            <li>Bancos de Dados <strong>(PostgreSQL)</strong>;</li>
            <li>Suporte Técnico <strong>(Windows, Linux, Redes de Computadores)</strong>;</li>
            <li>Ferramentas corporativas <strong>(Office 365, Notion, Administração de Sistemas)</strong>.</li>
            <li>Montagem e manutenção de computadores;</li>
          </ul>
          <p>Também me aventuro em outras áreas, como design gráfico, edição de vídeo, nutrição e educação física — acredito que conhecimento plural traz soluções mais criativas.</p>
          <h2>Por que este Portfólio??</h2>
          <ul>
            <li>Quero mostrar minhas habilidades na prática (desde o código até o conteúdo);</li>
            <li>Busco oportunidades para colaborar em projetos impactantes.</li>
          </ul>
          <p><strong>Se achar que posso contribuir com seu time ou ideia, vamos conversar! Estou à disposição para bater um papo.</strong></p>
          <h2>Abaixo segue alguns dos meus trabalhos</h2>
        </div>
      </div>

      <div className="youtubeContent">
        <h1>Youtube</h1>
        <div className="youtubeProjects">
          <div className="youtubeItem">
            <iframe width="840" height="472" src="https://www.youtube.com/embed/znxWYdq9Qj4?si=KNjESNekJqevbI4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          
          <div className="youtubeItem">
            <iframe width="840" height="472" src="https://www.youtube.com/embed/qzuxupU5cWY?si=kqyn3gSY-bn4R3UI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          
          <div className="youtubeItem">
           <iframe width="840" height="472" src="https://www.youtube.com/embed/1GDOs8QRQfM?si=3AjpZdfwj_uqHuvO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          
          <div className="youtubeItem">
            <iframe width="840" height="472" src="https://www.youtube.com/embed/OZepatK--8A?si=uxc4937ntc36Aic-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          
          <div className="youtubeItem">
            <iframe width="840" height="472" src="https://www.youtube.com/embed/IHOy_GWUkqY?si=5N4rFopa_H91DbpF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div className="projectContent">
        <h1>Projetos</h1>
        <div className="projects">
          <div className="projectContainer">
          <div className="projectItem">
            <img src={foodyFinds} alt="thumbProj" border="0"/> 
            <h2>Foody Finds</h2>
            <p>Função: Front-End/Scrum Master</p>
            <div className="projectHeader">
            <a href="https://dolfo-melo.github.io/nutriApi/" target="blanked">Ver site</a>
            <a href="https://github.com/dolfo-melo/nutriApi" target="blanked">Ver repositório</a>
            </div>
          </div>
          <div className="projectItem">
            <img src={pokedex} alt="thumbProj" border="0"/>
            <h2>Pokedex</h2>
            <p>Consumo da pokeAPI</p>
            <div className="projectHeader">
            <a href="https://dolfo-melo.github.io/pokedexSearch/" target="blanked">Ver site</a>
            <a href="https://github.com/dolfo-melo/pokedexSearch" target="blanked">Ver repositório</a>
            </div> 
          </div>
          </div>
          <div className="projectContainer">
          <div className="projectItem">
            <img src={yukaMedicina} alt="thumbProj" border="0"/> 
            <h2>Yuka Medicina</h2>
            <p>Página de Login e Formulário</p>
            <div className="projectHeader">
            <a href="https://dolfo-melo.github.io/loginMedicina/" target="blanked">Ver site</a>
            <a href="https://github.com/dolfo-melo/loginMedicina" target="blanked">Ver repositório</a>
            </div>
          </div>
          <div className="projectItem">
            <img src={apiViaCep} alt="thumbProj" border="0"/> 
            <h2>API via CEP</h2>
            <p>Consumo da OpenWeatherAPI</p>
            <div className="projectHeader">
            <a href="https://dolfo-melo.github.io/APIVIACEP/" target="blanked">Ver site</a>
            <a href="https://github.com/dolfo-melo/APIVIACEP" target="blanked">Ver repositório</a>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <h2>Contato</h2>
        <p>rodofoidas@gmail.com</p>
        <p>(+55) 079 98817-5698</p>
        <h4>Desenvolvido por Rodolfo Melo © 2025. Todos os direitos reservados</h4>
      </div>
    </div>
  );
}

export default App;
