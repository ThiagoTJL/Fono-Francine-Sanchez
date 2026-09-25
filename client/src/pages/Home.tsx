import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  Headphones,
  HeartPulse,
  Instagram,
  Linkedin,
  Mic2,
  MoveUpRight,
  Play,
  Quote,
  Sparkles,
  Stethoscope,
  Volume2,
  Waves,
  Wind,
} from "lucide-react";

const focusAreas = [
  {
    icon: Volume2,
    eyebrow: "Saúde vocal",
    title: "Rouquidão & falhas na voz",
    text: "Investigue o que está por trás do cansaço vocal, da voz soprosa e das falhas que aparecem no meio da fala.",
    tone: "coral",
  },
  {
    icon: Mic2,
    eyebrow: "Performance",
    title: "Aprimoramento vocal & canto",
    text: "Mais liberdade, resistência e controle para cantar, gravar, dar aula ou usar a voz por muitas horas.",
    tone: "teal",
  },
  {
    icon: Headphones,
    eyebrow: "Comunicação",
    title: "Dicção & oratória",
    text: "Fale com clareza, presença e naturalidade — sem forçar, decorar ou perder a sua personalidade.",
    tone: "sand",
  },
  {
    icon: HeartPulse,
    eyebrow: "Reabilitação",
    title: "Nódulos & prega vocal",
    text: "Acompanhamento individual para nódulos, paralisia de prega vocal e outros desafios da produção da voz.",
    tone: "plum",
  },
];

const testimonials = [
  {
    quote:
      "Eu terminava o dia sem voz e achava que era normal. Em poucas semanas, voltei a dar aula sem medo de falhar no meio da explicação.",
    name: "Marina A.",
    role: "Professora e palestrante",
    initials: "MA",
  },
  {
    quote:
      "O trabalho foi muito além de exercícios. Entendi minha voz, parei de compensar e finalmente consegui cantar com mais segurança.",
    name: "Rafael M.",
    role: "Cantor e compositor",
    initials: "RM",
  },
  {
    quote:
      "A diferença na minha oratória foi imediata: mais clareza, menos tensão e uma presença que eu não sabia que podia construir.",
    name: "Camila R.",
    role: "Executiva",
    initials: "CR",
  },
];

const faqs = [
  {
    question: "Como sei se preciso de fonoaudiologia?",
    answer:
      "Se a rouquidão dura mais de duas semanas, se a voz falha, cansa, dói ou limita seu trabalho, já vale investigar. Também é possível buscar acompanhamento para aprimorar a voz mesmo sem uma queixa clínica.",
  },
  {
    question: "O atendimento é apenas para quem canta?",
    answer:
      "Não. A voz é uma ferramenta de trabalho para professores, líderes, vendedores, advogados, atores, criadores de conteúdo e qualquer pessoa que queira se comunicar com mais conforto e presença.",
  },
  {
    question: "Atende casos de nódulos e paralisia de prega vocal?",
    answer:
      "Sim. O acompanhamento é individualizado e pode acontecer em conjunto com o otorrinolaringologista responsável, respeitando cada diagnóstico e etapa de reabilitação.",
  },
  {
    question: "As sessões podem ser online?",
    answer:
      "Sim. A avaliação e os exercícios podem ser adaptados para o formato online em muitos casos. Na conversa inicial, identificamos qual formato faz mais sentido para você.",
  },
  {
    question: "Quanto tempo leva para perceber mudanças?",
    answer:
      "Cada voz tem seu tempo. Algumas pessoas percebem mais conforto nas primeiras sessões; outras precisam de um processo mais longo. O plano é construído com metas claras e acompanhamento próximo.",
  },
];

function scrollToContact() {
  document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <header className="site-header">
        <div className="container flex items-center justify-between gap-6 py-5">
          <a href="#top" className="brand-mark" aria-label="Voz em Foco - início">
            <span className="brand-icon"><Waves size={20} strokeWidth={2.3} /></span>
            <span>
              <strong>voz em foco</strong>
              <small>fonoaudiologia</small>
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            <a href="#especialidades" className="nav-link">Especialidades</a>
            <a href="#metodo" className="nav-link">Como funciona</a>
            <a href="#depoimentos" className="nav-link">Histórias reais</a>
          </nav>
          <button onClick={scrollToContact} className="button button-small button-outline hidden sm:inline-flex">
            Falar com a clínica <ArrowRight size={16} />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal-up">
              <div className="eyebrow"><span className="eyebrow-dot" /> sua voz merece cuidado</div>
              <h1>Uma voz mais <em>livre</em> para você se expressar.</h1>
              <p className="hero-lead">
                Fonoaudiologia especializada em voz, fala e performance para quem quer cuidar da saúde vocal, recuperar a confiança e comunicar o que tem de melhor.
              </p>
              <div className="hero-actions">
                <button onClick={scrollToContact} className="button button-primary button-large">Agendar avaliação <ArrowRight size={18} /></button>
                <a href="#metodo" className="text-link"><span className="play-icon"><Play size={12} fill="currentColor" /></span> Conheça o processo</a>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack" aria-hidden="true"><span>J</span><span>M</span><span>R</span><span>+</span></div>
                <div><strong>cuidado que se escuta</strong><small>Atendimento individual e baseado em evidências</small></div>
              </div>
            </div>
            <div className="hero-visual reveal-up delay-one">
              <div className="hero-image-wrap">
                <img src="/manus-storage/hero-voz-em-foco_912882ab.jpg" alt="Fonoaudióloga sorrindo em um estúdio de terapia vocal" className="hero-image" />
                <div className="hero-image-wash" />
                <div className="voice-card glass-card">
                  <span className="voice-card-icon"><Volume2 size={17} /></span>
                  <span><small>seu próximo passo</small><strong>começa pela escuta</strong></span>
                </div>
              </div>
              <div className="wave-decoration" aria-hidden="true"><svg viewBox="0 0 300 90" fill="none"><path d="M1 48C25 48 25 22 49 22C73 22 73 68 97 68C121 68 121 10 145 10C169 10 169 80 193 80C217 80 217 33 241 33C265 33 265 49 299 49" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M1 65C25 65 25 47 49 47C73 47 73 78 97 78C121 78 121 34 145 34C169 34 169 86 193 86C217 86 217 57 241 57C265 57 265 66 299 66" stroke="currentColor" strokeOpacity=".25" strokeWidth="2" strokeLinecap="round" /></svg></div>
            </div>
          </div>
          <div className="hero-bottom-line"><div className="container flex items-center justify-between gap-8"><span>voz saudável</span><i /><span>comunicação autêntica</span><i /><span>performance sustentável</span><i /><span>cuidado individual</span></div></div>
        </section>

        <section className="pain-section section-pad" id="especialidades">
          <div className="container">
            <div className="section-intro split-intro">
              <div><div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> talvez você se reconheça</div><h2>Quando a voz pesa, <br /><em>tudo sente.</em></h2></div>
              <p>Você não precisa se acostumar com uma voz cansada, presa ou imprevisível. Existe um caminho cuidadoso — e ele começa entendendo o que o seu corpo está tentando dizer.</p>
            </div>
            <div className="focus-grid">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return <article className={`focus-card tone-${area.tone}`} key={area.title}>
                  <div className="focus-number">0{index + 1}</div>
                  <div className="focus-icon"><Icon size={22} /></div>
                  <div className="focus-content"><span className="card-eyebrow">{area.eyebrow}</span><h3>{area.title}</h3><p>{area.text}</p><a href="#contato" className="card-link">Quero cuidar disso <MoveUpRight size={16} /></a></div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="method-section section-pad" id="metodo">
          <div className="container method-grid">
            <div className="method-sticky">
              <div className="eyebrow eyebrow-coral"><span className="eyebrow-dot" /> o método voz em foco</div>
              <h2>Clareza no plano.<br /><em>Leveza no processo.</em></h2>
              <p>Não existe exercício solto ou fórmula pronta. Cada atendimento conecta avaliação, percepção e prática para a mudança fazer sentido na sua rotina.</p>
              <button onClick={scrollToContact} className="button button-dark">Quero encontrar meu caminho <ArrowRight size={17} /></button>
              <div className="method-note"><CircleCheck size={18} /> Plano terapêutico explicado em cada etapa</div>
            </div>
            <div className="steps-list">
              <div className="step-item"><span className="step-index">01</span><div><h3>Escutar antes de intervir</h3><p>Na avaliação, investigamos sua história, sua rotina vocal e o que muda quando você fala, canta ou se apresenta.</p></div><Stethoscope className="step-icon" size={26} /></div>
              <div className="step-item"><span className="step-index">02</span><div><h3>Entender o que a voz pede</h3><p>Você passa a perceber tensão, respiração, ressonância e os hábitos que podem estar sobrecarregando sua voz.</p></div><Wind className="step-icon" size={26} /></div>
              <div className="step-item"><span className="step-index">03</span><div><h3>Treinar com intenção</h3><p>Exercícios simples, progressivos e aplicáveis ao seu dia: na sala de aula, no palco, no trabalho ou em casa.</p></div><Mic2 className="step-icon" size={26} /></div>
              <div className="step-item"><span className="step-index">04</span><div><h3>Levar a mudança para a vida</h3><p>O objetivo é uma voz que funciona fora da sessão — com autonomia, confiança e mais prazer em se comunicar.</p></div><Sparkles className="step-icon" size={26} /></div>
            </div>
          </div>
        </section>

        <section className="quote-section section-pad" id="depoimentos">
          <div className="container">
            <div className="quote-heading"><div className="eyebrow eyebrow-coral"><span className="eyebrow-dot" /> histórias que ganharam voz</div><h2>O resultado aparece <em>no cotidiano.</em></h2><p>Pequenas mudanças na forma de usar a voz transformam a forma de estar presente.</p></div>
            <div className="testimonial-grid">
              {testimonials.map((item) => <article className="testimonial-card" key={item.name}><Quote size={26} className="quote-mark" /><p>“{item.quote}”</p><div className="testimonial-author"><span className="initials">{item.initials}</span><span><strong>{item.name}</strong><small>{item.role}</small></span></div></article>)}
            </div>
          </div>
        </section>

        <section className="authority-section section-pad">
          <div className="container authority-grid">
            <div className="authority-portrait"><div className="portrait-shape"><div className="portrait-placeholder"><Mic2 size={48} strokeWidth={1.2} /><span>presença que acolhe<br />técnica que transforma</span></div></div><span className="portrait-caption">Dra. Helena Martins <small>Fonoaudióloga • CRFa 2-XXXXX</small></span></div>
            <div className="authority-copy"><div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> sobre o cuidado</div><h2>Seu corpo tem respostas.<br /><em>A gente aprende a escutar.</em></h2><p>Meu trabalho é criar um espaço seguro para você entender a própria voz — sem julgamentos, atalhos ou promessas irreais. Técnica e acolhimento caminham juntos em cada plano terapêutico.</p><div className="authority-points"><span><Check size={16} /> Especialização em voz profissional</span><span><Check size={16} /> Atendimento presencial e online</span><span><Check size={16} /> Integração com equipe médica quando necessário</span></div><button onClick={scrollToContact} className="text-link dark-link">Conheça o cuidado de perto <ArrowRight size={16} /></button></div>
          </div>
        </section>

        <section className="cta-section section-pad" id="contato">
          <div className="container cta-grid">
            <div className="cta-copy"><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> seu próximo capítulo</div><h2>Pronto para dar espaço à sua <em>melhor voz?</em></h2><p>Conte um pouco sobre o que você está vivendo. A primeira conversa é um ponto de partida, sem compromisso.</p><div className="cta-details"><span><CircleCheck size={17} /> Resposta em até 1 dia útil</span><span><CircleCheck size={17} /> Atendimento personalizado</span></div></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted ? <div className="form-success"><span><Check size={26} /></span><h3>Mensagem recebida.</h3><p>Obrigada por confiar sua história à Voz em Foco. Em breve, entraremos em contato para conversar.</p><button type="button" onClick={() => setSubmitted(false)} className="text-link light-link">Enviar outra mensagem</button></div> : <>
                <div className="form-top"><span>Vamos começar?</span><small>leva menos de 2 minutos</small></div>
                <label>Seu nome<input name="name" required placeholder="Como podemos te chamar?" /></label>
                <label>Seu melhor contato<input name="contact" required placeholder="WhatsApp ou e-mail" /></label>
                <label>O que trouxe você até aqui?<select name="reason" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Rouquidão ou falhas na voz</option><option>Aprimoramento vocal ou canto</option><option>Dicção ou oratória</option><option>Nódulos ou prega vocal</option><option>Outro motivo</option></select></label>
                <button className="button button-coral button-large" type="submit">Quero conversar <ArrowRight size={18} /></button>
                <small className="form-privacy">Seus dados ficam seguros e são usados apenas para este contato.</small>
              </>}
            </form>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq"><div className="container faq-grid"><div><div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> ainda ficou com dúvida?</div><h2>Vamos deixar<br /><em>tudo claro.</em></h2><p>Se a sua pergunta não estiver aqui, fale com a gente. Cada caso merece ser ouvido com atenção.</p><a href="#contato" className="text-link dark-link">Falar com a clínica <ArrowRight size={16} /></a></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={faq.question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{faq.question}</span><ChevronDown size={19} /></button><div className="faq-answer"><p>{faq.answer}</p></div></div>)}</div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><a href="#top" className="brand-mark"><span className="brand-icon"><Waves size={20} strokeWidth={2.3} /></span><span><strong>voz em foco</strong><small>fonoaudiologia</small></span></a><p>Saúde vocal, comunicação e presença para você viver sua voz por inteiro.</p></div><div className="footer-links"><div><span>explore</span><a href="#especialidades">Especialidades</a><a href="#metodo">Como funciona</a><a href="#depoimentos">Histórias reais</a></div><div><span>converse</span><a href="#contato">Agendar avaliação</a><a href="#faq">Dúvidas frequentes</a><a href="mailto:oi@vozemfoco.com.br">oi@vozemfoco.com.br</a></div></div></div><div className="container footer-bottom"><span>© 2026 Voz em Foco. Todos os direitos reservados.</span><span className="social-links"><a href="#contato" aria-label="Instagram"><Instagram size={17} /></a><a href="#contato" aria-label="LinkedIn"><Linkedin size={17} /></a></span><span>feito para vozes únicas.</span></div></footer>
    </div>
  );
}
