import fotoPerfil from './img/foto_perfil_nova.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(fab, fas);

function App() {
  return (
    <div className="app">
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
      
      <div className="appContent">
        <h1>Sobre Mim</h1>
        <div className="sobreMim">
          <p><strong>Sawubona!!</strong> Me chamo Rodolfo Melo, sou de Aracaju (SE).</p>
          <p>Sou formado em <strong>Ciência da Computação</strong> pela Universidade Estácio de Sá e, desde sempre, fui movido pela curiosidade. Estudo diversos temas, especialmente dentro da computação:</p>
          <ul>
            <li>Desenvolvimento <strong>(Front-End e Back-End)</strong>;</li>
            <li>Suporte Técnico <strong>(Windows, Linux, Redes de Computadores)</strong>;</li>
            <li>Montagem e manutenção de computadores;</li>
            <li>Ferramentas corporativas <strong>(Office 365, Notion, administração de sistemas)</strong>.</li>
          </ul>
          <p>Também me aventuro em outras áreas, como design gráfico, edição de vídeo, nutrição e educação física — acredito que conhecimento plural traz soluções mais criativas.</p>
          <h2>Por que este Portfólio??</h2>
          <ul>
            <li>Quero mostrar minhas habilidades na prática (desde o código até o conteúdo);</li>
            <li>Busco oportunidades para colaborar em projetos impactantes.</li>
          </ul>
          <p>Se achar que posso contribuir com seu time ou ideia, vamos conversar! Estou à disposição para bater um papo.</p>
          <h2>Abaixo segue alguns dos meus trabalhos</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
