import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Instagram,
  Laptop2,
  MessageCircle,
  Mic2,
  MoveUpRight,
  Play,
  ShieldCheck,
  Speech,
  Sparkles,
  Star,
  UserRound,
  Video,
  Volume2,
  Waves,
} from "lucide-react";

// Edite somente esta constante quando quiser trocar o WhatsApp principal.
const WHATSAPP_URL =
  "https://wa.me/5514991089006?text=Ol%C3%A1%21%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20fonoaudiologia%20online%20e%20agendar%20uma%20consulta";
const INSTAGRAM_URL = "https://www.instagram.com/fonofrancinesanchez/";

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, string>) => void;
    };
  }
}

function trackWhatsAppClick(source: string) {
  try {
    window.umami?.track("whatsapp_click", { source });
  } catch {
    // O clique e a abertura do WhatsApp não são bloqueados se o analytics falhar.
  }
}

const focusAreas = [
  {
    icon: Volume2,
    title: "Rouquidão e falhas na voz",
    text: "Investigue o cansaço vocal, a voz soprosa e as falhas que aparecem durante a fala ou no trabalho.",
  },
  {
    icon: Mic2,
    title: "Aprimoramento vocal e canto",
    text: "Desenvolva mais controle, resistência e liberdade para cantar, gravar ou usar a voz por muitas horas.",
  },
  {
    icon: MessageCircle,
    title: "Dicção e oratória",
    text: "Fale com clareza, presença e naturalidade em reuniões, aulas, apresentações e vídeos.",
  },
  {
    icon: ShieldCheck,
    title: "Nódulos e prega vocal",
    text: "Acompanhamento individualizado para nódulos, paralisia de prega vocal e outras necessidades clínicas.",
  },
];

const faqs = [
  {
    question: "Como funciona a fonoaudiologia online?",
    answer:
      "As sessões acontecem individualmente por videochamada, em um horário combinado. Na consulta, conversamos sobre sua história, sua rotina vocal e seus objetivos para construir uma avaliação e um acompanhamento personalizado.",
  },
  {
    question: "A terapia online funciona para voz, dicção e oratória?",
    answer:
      "Sim. Voz, fala, respiração, articulação e comunicação podem ser observadas e trabalhadas por videochamada com orientações e exercícios adaptados à sua necessidade.",
  },
  {
    question: "Atende casos de nódulos ou paralisia de prega vocal?",
    answer:
      "Sim. A fonoterapia pode acompanhar casos de nódulos e paralisia de prega vocal com um plano individualizado, respeitando o diagnóstico e a etapa do cuidado.",
  },
  {
    question: "Para quem é a fonoterapia online?",
    answer:
      "A fonoterapia online é para youtubers, cantores, pastores, professores, líderes, ministros de louvor, profissionais da voz, idosos e para qualquer pessoa que queira cuidar da voz, da fala e da comunicação.",
  },
  {
    question: "Preciso ter equipamentos especiais para a sessão?",
    answer:
      "Não. Você precisa de um celular ou computador com câmera, microfone e internet. Um ambiente silencioso e fones de ouvido podem ajudar, mas não são obrigatórios.",
  },
  {
    question: "Como agendo minha avaliação online?",
    answer:
      "Clique em qualquer botão de WhatsApp nesta página e envie a mensagem pronta. A partir daí, você recebe as orientações para encontrar um horário e tirar suas dúvidas.",
  },
];

const googleReviews = [
  {
    name: "Elane Melo",
    text: "Dra. Francine foi muito paciente em cada detalhe, tratamento humanizado, demonstrando muito cuidado e carinho.",
  },
  {
    name: "Pamela Santos",
    text: "Excelente fonoaudióloga! Muito atenciosa, paciente e extremamente profissional. Explica tudo com clareza, transmite confiança e realiza um atendimento humanizado. Percebi uma grande evolução durante o tratamento. Recomendo de olhos fechados!",
  },
  {
    name: "ninaa Rodrigues",
    text: "Quero elogiar o atendimento da fonoaudióloga Francine, foi simplesmente incrível, acolhedor, atencioso e feito com muito profissionalismo. Um verdadeiro cuidado com cada detalhe!",
  },
  {
    name: "Angela Maria",
    text: "Profissional maravilhosa e comprometida com seu trabalho, faz por amor a sua profissão, só tenho a agradecer ❤️",
  },
];

function WhatsAppButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a className={`button ${className}`} href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("cta") }>
      {children}
    </a>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const currentReview = googleReviews[reviewIndex];

  return (
    <div className="online-site">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand-mark" aria-label="Clínica la Vie - início">
            <img className="clinic-logo" src="/manus-storage/clinica-la-vie-logo_52749000.png" alt="Clínica la Vie — Francine Sanchez Lemes, fonoaudióloga" />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#necessidades">Necessidades</a>
            <a href="#online">Terapia online</a>
            <a href="#quem-sou">Quem sou eu</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <WhatsAppButton className="button-header"><MessageCircle size={15} /> Agendar avaliação</WhatsAppButton>
        </div>
      </header>

      <main id="inicio">
        <section className="online-hero">
          <div className="container hero-inner">
            <div className="hero-content">
              <div className="eyebrow"><span /> fonoaudiologia online</div>
              <h1>Cuide da sua voz <em>de onde estiver.</em></h1>
              <p className="hero-subtitle">Terapia fonoaudiológica online em todo o Brasil e exterior, por videochamada e com atendimento individualizado para sua voz, sua fala e sua comunicação.</p>
              <div className="hero-actions">
                <WhatsAppButton className="button-primary button-large"><MessageCircle size={18} /> Agendar avaliação pelo WhatsApp</WhatsAppButton>
              </div>
              <div className="hero-trust"><span><Check size={15} /> 100% online</span><span><Check size={15} /> Sessões individuais</span><span><Check size={15} /> De qualquer lugar</span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame"><img src="/manus-storage/796a6962-7c4b-4851-97c5-60c04e3b49d3_db63d12a.png" alt="Dra. Francine Y. Sanchez Lemes, fonoaudióloga" /><div className="hero-image-overlay" /></div>
              <div className="hero-info-card"><span className="info-icon"><Video size={17} /></span><span><small>atendimento por</small><strong>videochamada</strong></span></div>
              <div className="hero-note-card"><Speech size={19} /><span>Uma voz saudável<br /><strong>para viver sua rotina.</strong></span></div>
            </div>
          </div>
          <div className="hero-bottom"><div className="container"><span>voz</span><i /><span>fala</span><i /><span>comunicação</span><i /><span>cuidado online</span></div></div>
        </section>

        <section className="section section-white" id="necessidades">
          <div className="container">
            <div className="section-heading two-columns"><div><div className="eyebrow eyebrow-green"><span /> cuidado para a sua necessidade</div><h2>O que você gostaria de <em>transformar?</em></h2></div><p>Você não precisa conviver com uma voz cansada, presa ou imprevisível. O acompanhamento começa entendendo o que está acontecendo e o que você deseja conquistar.</p></div>
            <div className="areas-grid">{focusAreas.map((area, index) => { const Icon = area.icon; return <article className="area-card" key={area.title}><span className="area-number">0{index + 1}</span><span className="area-icon"><Icon size={21} /></span><h3>{area.title}</h3><p>{area.text}</p><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("necessidade_card")} className="card-link">Quero saber mais <MoveUpRight size={15} /></a></article>; })}</div>
          </div>
        </section>

        <section className="section section-mint" id="online">
          <div className="container online-grid">
            <div className="online-copy">
              <div className="eyebrow eyebrow-coral"><span /> simples, próximo e personalizado</div>
              <h2>Como funciona a <em>fonoaudiologia online?</em></h2>
              <p>O cuidado acontece ao vivo, por videochamada, com a mesma atenção de um atendimento individualizado — sem deslocamento e no ritmo da sua rotina.</p>
              <WhatsAppButton className="button-dark">Quero saber mais sobre a terapia online <ArrowRight size={17} /></WhatsAppButton>
            </div>
            <div className="online-features">
              <div className="feature-row"><span><Video size={20} /></span><div><strong>Videochamada ao vivo</strong><p>Um encontro reservado e focado em você.</p></div></div>
              <div className="feature-row"><span><UserRound size={20} /></span><div><strong>Sessões individuais</strong><p>Orientações que respeitam sua história e seus objetivos.</p></div></div>
              <div className="feature-row"><span><Laptop2 size={20} /></span><div><strong>De qualquer lugar</strong><p>Faça sua sessão de onde estiver, com mais comodidade.</p></div></div>
              <div className="feature-row"><span><Sparkles size={20} /></span><div><strong>Prática entre as sessões</strong><p>Exercícios e acompanhamento para levar o cuidado à rotina.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section section-white benefits-section">
          <div className="container benefits-grid"><div className="benefits-visual"><img className="benefits-photo" src="/manus-storage/805f9dd8-aaa4-45be-8b0e-50cff0855e29_b6f0e8bb.png" alt="Dra. Francine Sanchez Lemes realizando exercício de voz" /><div className="benefit-quote"><Speech size={15} /><span>mais presença<br /><strong>ao se comunicar</strong></span></div></div><div className="benefits-copy"><div className="eyebrow eyebrow-green"><span /> o que você leva desse processo</div><h2>Mais conforto para <em>usar sua voz.</em></h2><p>O acompanhamento fonoaudiológico pode ajudar você a perceber melhor sua voz, organizar sua comunicação e construir estratégias para a sua rotina — sem promessas prontas e sem perder a sua autenticidade.</p><div className="check-list"><span><Check size={16} /> Entender seus padrões de voz e fala</span><span><Check size={16} /> Reduzir esforço e tensão ao se comunicar</span><span><Check size={16} /> Desenvolver clareza, presença e confiança</span><span><Check size={16} /> Ter orientação profissional durante o processo</span></div><WhatsAppButton className="button-outline-dark">Agende sua avaliação online <ArrowRight size={16} /></WhatsAppButton></div></div>
        </section>

        <section className="section section-soft" id="quem-sou">
          <div className="container about-grid">
            <div className="about-photo">
              <img src="/manus-storage/747f50ef-aa35-4fff-abb4-cd6f7c9d84ef_76a7b0e0.png" alt="Dra. Francine Y. Sanchez Lemes, fonoaudióloga" />
            </div>
            <div className="about-copy">
              <div className="eyebrow eyebrow-coral"><span /> uma conversa de perto</div>
              <h2>Quem sou <em>eu</em></h2>
              <p className="editable-note">Dra. Francine Y. Sanchez Lemes</p>
              <p className="about-role">CRFa 2-22090</p>
              <p>Sou fonoaudióloga formada pela USP, com especialização em voz profissional, comunicação e canto.</p>
              <p>Atuo com uma abordagem personalizada, acolhedora e baseada em evidências, atendendo adultos, profissionais da voz e crianças de forma online para todo o Brasil e exterior.</p>
              <p>Meu propósito é ajudar cada pessoa a se comunicar melhor, com mais confiança e qualidade de vida, respeitando suas necessidades e sua individualidade.</p>
              <div className="about-tags"><span>voz profissional</span><span>comunicação e canto</span><span>fonoaudiologia online</span></div>
              <WhatsAppButton className="button-dark">Fale comigo pelo WhatsApp <MessageCircle size={16} /></WhatsAppButton>
            </div>
          </div>
        </section>

        <section className="section section-white evaluation-section">
          <div className="container"><div className="section-heading centered"><div className="eyebrow eyebrow-green"><span /> seu primeiro passo</div><h2>Como funciona a <em>consulta online?</em></h2><p>Uma conversa inicial para entender sua necessidade e explicar o melhor caminho para o seu caso.</p></div><div className="evaluation-grid"><div><span>01</span><Clock3 size={22} /><h3>Você entra em contato</h3><p>Envie uma mensagem pelo WhatsApp e conte brevemente o que gostaria de trabalhar.</p></div><div><span>02</span><MessageCircle size={22} /><h3>A gente conversa</h3><p>Combinamos o melhor horário e o formato da consulta por videochamada.</p></div><div><span>03</span><ShieldCheck size={22} /><h3>Você entende o plano</h3><p>Depois da primeira consulta, você recebe orientações claras sobre a avaliação e os próximos passos.</p></div></div><div className="center-cta"><WhatsAppButton className="button-primary button-large"><MessageCircle size={18} /> Agendar minha avaliação online</WhatsAppButton></div></div>
        </section>

        <section className="section reviews-section" id="avaliacoes">
          <div className="container reviews-layout">
            <div className="reviews-intro">
              <div className="eyebrow eyebrow-coral"><span /> experiência de quem já passou por aqui</div>
              <h2>A voz de quem <em>confia.</em></h2>
              <p>Confira avaliações publicadas no Google por pessoas que conheceram o trabalho da Dra. Francine.</p>
              <div className="google-label"><span className="google-g">G</span><span><strong>Avaliações do Google</strong><small>Publicadas no perfil do Google</small></span></div>
            </div>
            <div className="reviews-carousel" aria-label="Carrossel estático de avaliações do Google">
              <div className="review-card">
                <div className="review-card-top"><div className="google-label compact"><span className="google-g">G</span><span><strong>Google</strong><small>Avaliação publicada</small></span></div><div className="review-stars" aria-label="5 estrelas">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={17} fill="currentColor" />)}</div></div>
                <blockquote>“{currentReview.text}”</blockquote>
                <div className="review-author"><span className="review-avatar">{currentReview.name.charAt(0)}</span><strong>{currentReview.name}</strong></div>
              </div>
              <div className="reviews-controls"><button type="button" onClick={() => setReviewIndex((reviewIndex - 1 + googleReviews.length) % googleReviews.length)} aria-label="Avaliação anterior"><ChevronLeft size={18} /></button><div className="review-dots">{googleReviews.map((review, index) => <button type="button" key={review.name} className={index === reviewIndex ? "is-active" : ""} onClick={() => setReviewIndex(index)} aria-label={`Ver avaliação de ${review.name}`} />)}</div><button type="button" onClick={() => setReviewIndex((reviewIndex + 1) % googleReviews.length)} aria-label="Próxima avaliação"><ChevronRight size={18} /></button></div>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="duvidas"><div className="container faq-grid"><div className="faq-intro"><div className="eyebrow eyebrow-coral"><span /> perguntas frequentes</div><h2>Vamos deixar <em>tudo claro.</em></h2><p>Se a sua pergunta não estiver aqui, fale comigo pelo WhatsApp. Cada caso merece ser ouvido com atenção.</p><WhatsAppButton className="button-outline-dark">Falar comigo <ArrowRight size={16} /></WhatsAppButton></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={faq.question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{faq.question}</span><ChevronDown size={18} /></button><div className="faq-answer"><p>{faq.answer}</p></div></div>)}</div></div></section>

        <section className="final-cta"><div className="container final-cta-inner"><div><div className="eyebrow eyebrow-light"><span /> atendimento 100% online</div><h2>Sua voz pode ocupar<br /><em>mais espaço.</em></h2><p>Agende uma conversa inicial e descubra como a fonoaudiologia online pode fazer sentido para você.</p></div><WhatsAppButton className="button-primary button-large"><MessageCircle size={18} /> Agendar avaliação pelo WhatsApp <ArrowRight size={17} /></WhatsAppButton></div></section>
      </main>

        <footer className="site-footer"><div className="container footer-main"><a href="#inicio" className="brand-mark"><img className="clinic-logo clinic-logo-footer" src="/manus-storage/clinica-la-vie-logo_52749000.png" alt="Clínica la Vie — Francine Sanchez Lemes, fonoaudióloga" /></a><div className="footer-nav"><a href="#necessidades">Necessidades</a><a href="#online">Terapia online</a><a href="#quem-sou">Quem sou eu</a><a href="#duvidas">Dúvidas</a></div><div className="footer-socials"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="footer-instagram" aria-label="Instagram da Dra. Francine Sanchez Lemes"><Instagram size={17} /> <span>Instagram</span></a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("footer")} className="footer-whatsapp"><MessageCircle size={16} /> WhatsApp</a></div></div><div className="container footer-bottom"><span>© 2026 Clínica la Vie. Todos os direitos reservados.</span><span>Atendimento fonoaudiológico online.</span></div></footer>
        <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick("floating_button")} aria-label="Agendar consulta pelo WhatsApp" title="Agendar consulta pelo WhatsApp"><MessageCircle size={23} /><span>Agendar pelo WhatsApp</span></a>
    </div>
  );
}
