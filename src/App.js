import { useState } from 'react';
import fotoPerfil from './img/foto_perfil.png';
import foodyFinds from './img/foodyFinds.png';
import pokedex from './img/pokedex.png';
import yukaMedicina from './img/yukaMedicina.png';
import subnetRain from './img/subnetRain.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(fab, fas);

/* ── Folder Icon (Desktop Shortcut) ── */
function DesktopFolder({ label, onClick, color }) {
  return (
    <button className={`desktop-folder desktop-folder--${color || 'green'}`} onClick={onClick}>
      <div className="desktop-folder__icon">
        <div className="desktop-folder__tab" />
        <div className="desktop-folder__body" />
      </div>
      <span className="desktop-folder__label">{label}</span>
    </button>
  );
}

/* ── Window Modal ── */
function WindowModal({ title, children, onClose, className = '', progressWidth = 60 }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-window ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-window__titlebar">
          <div className="modal-window__titlebar-text">
            <span>{title}</span>
          </div>
          <button className="modal-window__close" onClick={onClose} aria-label="Fechar">
            ✕
          </button>
        </div>
        <div
          className="modal-window__progress"
          style={{
            background: `linear-gradient(90deg, var(--lightGreen) 0%, var(--green) ${progressWidth}%, transparent ${progressWidth}%)`,
          }}
        />
        <div className="modal-window__body">{children}</div>
      </div>
    </div>
  );
}



/* ── Tool Item ── */
function ToolItem({ icon, label }) {
  return (
    <div className="tool-item">
      <FontAwesomeIcon icon={icon} className="tool-item__icon" />
      <span className="tool-item__label">{label}</span>
    </div>
  );
}

/* ── Project Card ── */
function ProjectCard({ image, title, desc, siteUrl, repoUrl }) {
  return (
    <div className="project-card">
      <div className="project-card__image-wrapper">
        <img src={image} alt={title} className="project-card__image" />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{desc}</p>
        <div className="project-card__links">
          <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
            Ver site
          </a>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
            Repositório
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Data ── */
const projects = [
  {
    image: subnetRain,
    title: 'Subnet Rain',
    desc: 'Calculadora de IPV4, IPV6, VSLM',
    siteUrl: 'https://subnet-rain.vercel.app',
    repoUrl: 'https://github.com/dolfo-melo/calcIP',
  },
  {
    image: foodyFinds,
    title: 'Foody Finds',
    desc: 'Front-End / Scrum Master',
    siteUrl: 'https://dolfo-melo.github.io/nutriApi/',
    repoUrl: 'https://github.com/dolfo-melo/nutriApi',
  },
  {
    image: pokedex,
    title: 'Pokedex',
    desc: 'Consumo da PokeAPI',
    siteUrl: 'https://dolfo-melo.github.io/pokedexSearch/',
    repoUrl: 'https://github.com/dolfo-melo/pokedexSearch',
  },
  {
    image: yukaMedicina,
    title: 'Yuka Medicina',
    desc: 'Página de Login e Formulário',
    siteUrl: 'https://dolfo-melo.github.io/loginMedicina/',
    repoUrl: 'https://github.com/dolfo-melo/loginMedicina',
  },
];

const tools = [
  { icon: ['fab', 'html5'], label: 'HTML5' },
  { icon: ['fab', 'css3-alt'], label: 'CSS3' },
  { icon: ['fab', 'js-square'], label: 'JavaScript' },
  { icon: ['fab', 'python'], label: 'Python' },
  { icon: ['fab', 'microsoft'], label: '.NET' },
  { icon: ['fas', 'database'], label: 'PostgreSQL' },
  { icon: ['fab', 'react'], label: 'React' },
  { icon: ['fab', 'git-alt'], label: 'Git' },
  { icon: ['fab', 'github'], label: 'GitHub' },
  { icon: ['fab', 'linux'], label: 'Linux' },
  { icon: ['fab', 'windows'], label: 'Windows' },
  { icon: ['fas', 'network-wired'], label: 'Redes' },
];

const experiences = [
    {
    role: 'Suporte técnico',
    company: 'NEWSUPRI · Tempo integral',
    date: 'abr de 2026 - o momento · 2 meses',
    location: 'Aracaju, Sergipe, Brasil · No local',
    skills: 'Protocolo de internet (IP), Wi-Fi e mais 8 competências',
    detailedSkills: ['Protocolo de internet (IP)', 'Wi-Fi', 'Rede de Computadores', 'Virtual LAN', 'Arquitetura de Redes', 'DNS', 'DHCP', 'Cisco', 'HPE Aruba', 'Suporte Técnico'],
  },
  {
    role: 'Content Creator',
    company: 'YouTube · Autônomo',
    date: 'out de 2024 - o momento · 1 ano 8 meses',
    location: 'Aracaju-SE',
    skills: 'Design gráfico, Edição de vídeo e mais 6 competências',
    detailedSkills: ['Design gráfico', 'Edição de Vídeo', 'Gestão de Projetos', 'Comunicação', 'Edicação e Publicação', 'Gestão', 'Edição de Áudio', 'Edição de Imagens'],
  },
  {
    role: 'Assistente de treinamento',
    company: 'School Vision Professional · Tempo integral',
    date: 'jun de 2024 - nov de 2024 · 6 meses',
    location: 'Aracaju, Sergipe, Brasil · No local',
    skills: 'Informática, Infraestrutura e mais 22 competências',
    detailedSkills: ['Informática', 'Infraestrutura', 'Resolução de Problemas', 'Impressoras', 'Suporte de Redes', 'Wi-fi', 'Rede LAN', 'Infraestutura de Rede', 'Gestão de Projetos', 'Sistemas Operacionais', 'Windows', 'Linux', 'Sistema de Produtividade Notion', 'Servidor Windows', 'Microsoft Office', 'Gestão', 'Fluxogramas', 'Montagem e Manutenção de Computadores', 'Redes sem fio', 'Suporte Help Desk', 'Atualização de Software', 'Suporte Técnico', 'Infraestrutura de Tecnologia da Informação'],
  }
];

const youtubeVideos = [
  'znxWYdq9Qj4?si=KNjESNekJqevbI4A',
  'qzuxupU5cWY?si=kqyn3gSY-bn4R3UI',
  '1GDOs8QRQfM?si=3AjpZdfwj_uqHuvO',
  'OZepatK--8A?si=uxc4937ntc36Aic-',
  'IHOy_GWUkqY?si=5N4rFopa_H91DbpF',
];

/* ══════════════════════════════════════
   MAIN APP — DESKTOP OS
   ══════════════════════════════════════ */
function App() {
  const [openWindow, setOpenWindow] = useState(null);
  const [skillsModalData, setSkillsModalData] = useState(null);

  const openModal = (name) => setOpenWindow(name);
  const closeModal = () => setOpenWindow(null);

  return (
    <div className="os-desktop">
      {/* ── Desktop Grid Area ── */}
      <main className="os-desktop__area">
        {/* Left column folders */}
        <div className="os-desktop__col os-desktop__col--left">
          <DesktopFolder label="experience" onClick={() => openModal('experience')} color="green" />
          <DesktopFolder label="projects" onClick={() => openModal('projects')} color="yellow" />
          <DesktopFolder label="tools" onClick={() => openModal('tools')} color="purple" />
        </div>

        {/* Center: Profile (Initial Screen) */}
        <div className="os-desktop__center">
          <div className="profile profile--desktop">
            <img src={fotoPerfil} alt="Rodolfo Melo" className="profile__photo" />
            <span className="profile__greeting">olá! eu sou</span>
            <h2 className="profile__name">Rodolfo Melo</h2>
            <span className="profile__role">Suporte Técnico | Desenvolvedor FullStack</span>
            <p className="profile__quote">
              "Conhecimento plural traz soluções mais criativas."
            </p>
          </div>
        </div>

        {/* Right column folders */}
        <div className="os-desktop__col os-desktop__col--right">
          <DesktopFolder label="youtube" onClick={() => openModal('youtube')} color="red" />
          <DesktopFolder label="contact" onClick={() => openModal('contact')} color="blue" />
          <DesktopFolder label="resume" onClick={() => openModal('about')} color="pink" />
        </div>
      </main>



      {/* ═══════════════════════════════
          MODAL WINDOWS
          ═══════════════════════════════ */}

      {/* EXPERIENCE */}
      {openWindow === 'experience' && (
        <WindowModal title="C:\RODOLFO\experience" onClose={closeModal} className="modal-window--wide" progressWidth={80}>
          <div className="experience-list">
            {experiences.map((exp, i) => (
              <div key={i} className="experience-item">
                <h3 className="experience-item__role">{exp.role}</h3>
                <span className="experience-item__company">{exp.company}</span>
                <span className="experience-item__date">{exp.date}</span>
                <span className="experience-item__location">{exp.location}</span>
                <button 
                  className="experience-item__skills-btn" 
                  onClick={() => setSkillsModalData(exp)}
                >
                  <FontAwesomeIcon icon={['fas', 'gem']} className="experience-item__skills-icon" /> {exp.skills}
                </button>
              </div>
            ))}
          </div>
        </WindowModal>
      )}

      {/* ABOUT / RESUME */}
      {openWindow === 'about' && (
        <WindowModal title="C:\RODOLFO\resume" onClose={closeModal} className="modal-window--wide" progressWidth={65}>
          <div className="about">
            <p>
              <strong>Sawubona!!</strong> Me chamo Rodolfo Melo, sou de Aracaju (SE).
            </p>
            <p>
              Sou profissional formado em Ciência da Computação, com atuação na área de Tecnologia
              da Informação, combinando experiência em suporte técnico e desenvolvimento de software.
            </p>
            <p>
              Atualmente atuo com suporte técnico, com experiência em infraestrutura de redes,
              incluindo configuração e suporte a ambientes Wi-Fi, diagnóstico de conectividade e
              atuação em incidentes relacionados a rede. Possuo conhecimento em conceitos como VLAN,
              DHCP e DNS, aplicando boas práticas para identificação e resolução de problemas.
            </p>
            <p>
              Paralelamente, possuo competências em desenvolvimento Full Stack, com conhecimentos em
              HTML, CSS, JavaScript, React, TypeScript, C#, ASP.NET MVC e MySQL, desenvolvendo
              soluções com foco em performance, organização e boas práticas de código.
            </p>
            <p>
              Também possuo experiência com design, edição de vídeos e pacote Office, contribuindo
              para uma visão multidisciplinar e orientada à entrega de valor.
            </p>
            <p>
              <strong>
                Se achar que posso contribuir com seu time ou ideia, vamos conversar! Estou à
                disposição para bater um papo.
              </strong>
            </p>
          </div>
        </WindowModal>
      )}

      {/* TOOLS */}
      {openWindow === 'tools' && (
        <WindowModal title="C:\RODOLFO\tools" onClose={closeModal} progressWidth={45}>
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <ToolItem key={i} icon={tool.icon} label={tool.label} />
            ))}
          </div>
        </WindowModal>
      )}

      {/* PROJECTS */}
      {openWindow === 'projects' && (
        <WindowModal title="C:\RODOLFO\projects" onClose={closeModal} className="modal-window--full" progressWidth={70}>
          <div className="projects-grid">
            {projects.map((proj, i) => (
              <ProjectCard key={i} {...proj} />
            ))}
          </div>
        </WindowModal>
      )}

      {/* YOUTUBE */}
      {openWindow === 'youtube' && (
        <WindowModal title="C:\RODOLFO\youtube" onClose={closeModal} className="modal-window--full" progressWidth={55}>
          <div className="youtube-grid">
            {youtubeVideos.map((videoId, i) => (
              <div key={i} className="youtube-card">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`YouTube video ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </WindowModal>
      )}

      {/* CONTACT */}
      {openWindow === 'contact' && (
        <WindowModal title="C:\RODOLFO\contato" onClose={closeModal} progressWidth={50}>
          <div className="contact-content">
            <p className="contact-content__label">E-mail</p>
            <p className="contact-content__info">
              <a href="mailto:rodofoidas@gmail.com">rodofoidas@gmail.com</a>
            </p>
            <p className="contact-content__label">Telefone</p>
            <p className="contact-content__info">
              <a href="tel:+5579988175698">(+55) 079 98817-5698</a>
            </p>
            <div className="contact-content__socials">
              <a href="https://www.linkedin.com/in/rodolfo-melo/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn
              </a>
              <a href="https://github.com/dolfo-melo" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']} /> GitHub
              </a>
              <a href="https://www.instagram.com/dolfo_melo/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'instagram']} /> Instagram
              </a>
            </div>
          </div>
        </WindowModal>
      )}

      {/* DETAILED SKILLS SUB-MODAL */}
      {skillsModalData && (
        <WindowModal 
          title={`C:\\RODOLFO\\skills\\${skillsModalData.role.toLowerCase().replace(/\s+/g, '_')}`} 
          onClose={() => setSkillsModalData(null)} 
          progressWidth={100}
        >
          <div className="skills-detailed">
            <h3 className="skills-detailed__title">Competências de {skillsModalData.role}</h3>
            <ul className="skills-detailed__list">
              {skillsModalData.detailedSkills.map((skill, idx) => (
                <li key={idx} className="skills-detailed__item">
                  <FontAwesomeIcon icon={['fas', 'check-circle']} className="skills-detailed__icon" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </WindowModal>
      )}

      {/* ── Footer Taskbar ── */}
      <footer className="os-footer">
        <div className="os-footer__socials">
          <a href="https://www.linkedin.com/in/rodolfo-melo/" target="_blank" rel="noopener noreferrer" className="os-footer__social-link os-footer__social-link--linkedin" aria-label="LinkedIn">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>
          <a href="https://github.com/dolfo-melo" target="_blank" rel="noopener noreferrer" className="os-footer__social-link os-footer__social-link--github" aria-label="GitHub">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a href="https://www.instagram.com/dolfo_melo/" target="_blank" rel="noopener noreferrer" className="os-footer__social-link os-footer__social-link--instagram" aria-label="Instagram">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
          <a href="https://www.youtube.com/@dolfo_melo" target="_blank" rel="noopener noreferrer" className="os-footer__social-link os-footer__social-link--youtube" aria-label="YouTube">
            <FontAwesomeIcon icon={['fab', 'youtube']} />
          </a>
        </div>
        <p className="os-footer__copy">Rodolfo Melo © 2025</p>
      </footer>
    </div>
  );
}

export default App;
