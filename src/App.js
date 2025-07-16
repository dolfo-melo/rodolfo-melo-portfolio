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
        <h1>Bem-vindo ao meu portfólio!!</h1>
      </div>
    </div>
  );
}

export default App;
