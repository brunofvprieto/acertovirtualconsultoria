"use client";

import { useEffect } from "react";

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------------- NAV ---------------- */
function Nav() {
  const links = [
    ["#fernanda", "Fernanda Coelho"],
    ["#metodo", "Método HACE"],
    ["#treinamento", "Treinamento"],
    ["#resultados", "Resultados"],
    ["#depoimentos", "Depoimentos"],
    ["#contato", "Contato"],
  ];
  return (
    <nav className="sticky top-0 z-50 border-b border-dourado/20 bg-offwhite/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-xl text-bordo">
          Acerto <span className="text-dourado">Virtual</span>
        </a>
        <div className="hidden gap-7 md:flex">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-[13.5px] font-medium text-tinta transition-colors hover:text-bordo"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <header className="trama relative overflow-hidden bg-bordo text-offwhite">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-10 select-none font-display text-[22rem] leading-none text-white/[0.04]"
      >
        HACE
      </div>
      {/* filete dourado no topo, como a gola da camisa */}
      <div className="h-1 w-full bg-gradient-to-r from-dourado via-dourado-light to-dourado" />
      <div className="mx-auto grid max-w-6xl items-end gap-x-8 px-6 pt-20 md:grid-cols-[1.1fr,0.9fr] md:pt-24">
        <div className="pb-16 md:pb-28">
          <p className="eyebrow reveal">
            Acerto Virtual · Consultoria &amp; Treinamento em Atendimento
          </p>
          <h1 className="reveal mt-6 font-display text-4xl leading-[1.12] md:text-6xl">
            Excelência em gestão e{" "}
            <span className="text-dourado-light">atendimento humanizado</span>
          </h1>
          <p className="reveal mt-6 max-w-xl text-base font-light text-offwhite/80 md:text-lg">
            Uma proposta de transformação para o atendimento em clínicas,
            consultórios e hospitais — com metodologia própria, validada em
            centenas de instituições por todo o Brasil.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-4">
            <a
              href="#metodo"
              className="rounded-md bg-dourado px-8 py-3.5 text-sm font-semibold text-bordo-dark transition-transform hover:-translate-y-0.5"
            >
              Conheça o Método HACE
            </a>
            <a
              href="#contato"
              className="rounded-md border border-offwhite/30 px-8 py-3.5 text-sm font-semibold text-offwhite transition-colors hover:border-dourado hover:text-dourado-light"
            >
              Fale conosco
            </a>
          </div>
        </div>
        <div className="relative flex items-end justify-center md:justify-end">
          {/* brilho dourado atrás da Fernanda */}
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 h-[85%] w-[120%] -translate-x-1/2 rounded-full bg-dourado/20 blur-3xl"
          />
          <img
            src="/fernanda.png"
            alt="Fernanda Coelho, fundadora da Acerto Virtual"
            className="relative z-10 w-72 max-w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] md:w-[26rem]"
          />
        </div>
      </div>
    </header>
  );
}

/* ---------------- NÚMEROS ---------------- */
function Numeros() {
  const stats = [
    ["25 anos", "de secretariado executivo"],
    ["500+", "consultórios e clínicas atendidos"],
    ["4.600+", "secretárias remotas treinadas"],
    ["1.200+", "secretárias presenciais treinadas"],
  ];
  return (
    <div className="border-b border-dourado/20 bg-bordo-dark">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
        {stats.map(([num, label]) => (
          <div key={num} className="reveal px-6 py-8 text-center">
            <div className="font-display text-3xl text-dourado-light md:text-4xl">
              {num}
            </div>
            <div className="mt-1 text-[13px] text-offwhite/70">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- FERNANDA ---------------- */
function Fernanda() {
  return (
    <section id="fernanda" className="bg-creme py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Quem conduz</p>
          <h2 className="mt-4 font-display text-4xl text-bordo md:text-5xl">
            Fernanda Coelho
          </h2>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-[340px,1fr] md:gap-16">
          <figure className="reveal relative aspect-[3/4] overflow-hidden rounded-lg">
            <img
              src="/fernanda-bio.jpg"
              alt="Fernanda Coelho"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bordo-deep/95 to-transparent px-5 pb-5 pt-12 text-offwhite">
              <div className="font-display text-lg">Fernanda Coelho</div>
              <div className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-dourado-light">
                Fundadora · Acerto Virtual
              </div>
            </figcaption>
          </figure>
          <div className="reveal space-y-5 text-[16px] leading-relaxed text-cinza">
            <p>
              <strong className="text-tinta">
                Secretária executiva há 25 anos
              </strong>
              , Fernanda Coelho dedica-se, nos últimos 8 anos, exclusivamente à
              gestão do atendimento em clínicas e consultórios médicos.
            </p>
            <p>
              É graduada em <strong className="text-tinta">Letras</strong> e
              pós-graduada em{" "}
              <strong className="text-tinta">Gestão de Clínicas</strong> e{" "}
              <strong className="text-tinta">Gestão Hospitalar</strong>, unindo
              domínio da comunicação a uma sólida formação técnica em
              administração da saúde.
            </p>
            <p>
              Fundadora da{" "}
              <strong className="text-tinta">Acerto Virtual Assessoria</strong>{" "}
              — desde 2018, a primeira empresa de secretariado remoto
              humanizado do Brasil e hoje referência nacional na área da saúde
              —, Fernanda desenvolveu ao longo da carreira uma metodologia
              própria de atendimento, o{" "}
              <strong className="text-tinta">Método HACE</strong>, aplicada com
              consistência em centenas de clínicas por todo o país.
            </p>
            <p>
              Palestrante, já participou de diversos congressos e eventos da
              área da saúde, compartilhando sua visão sobre experiência do
              paciente, conversão e excelência no atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MÉTODO HACE ---------------- */
function Metodo() {
  const pilares = [
    [
      "H",
      "Humanizado",
      "Escuta ativa e acolhimento real do paciente, reduzindo a ansiedade e a sensação de abandono no atendimento.",
    ],
    [
      "A",
      "Acolhedor",
      "Recepção que orienta e tranquiliza desde o primeiro contato, organizando expectativas e reduzindo conflitos.",
    ],
    [
      "C",
      "Comercial",
      "Visão de gestão: cada atendimento é também uma oportunidade de otimizar fluxo, tempo e resultados.",
    ],
    [
      "E",
      "Estratégico",
      "Processos documentados, replicáveis e mensuráveis — a base para uma gestão mais eficiente.",
    ],
  ];
  return (
    <section id="metodo" className="trama bg-bordo py-24 text-offwhite">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Metodologia própria</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            O Método HACE
          </h2>
          <p className="mt-5 text-offwhite/75">
            Validado em centenas de clínicas e consultórios, o método se apoia
            em quatro pilares que se sustentam mutuamente.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map(([letra, titulo, texto]) => (
            <div
              key={letra}
              className="reveal group bg-bordo p-8 transition-colors hover:bg-bordo-dark"
            >
              <span className="block font-display text-7xl leading-none text-dourado">
                {letra}
              </span>
              <h3 className="mt-4 font-display text-xl">{titulo}</h3>
              <p className="mt-2 text-sm text-offwhite/70">{texto}</p>
            </div>
          ))}
        </div>
        <blockquote className="reveal mt-12 max-w-3xl rounded-r-lg border-l-2 border-dourado bg-white/5 px-8 py-7">
          <p className="font-display text-lg italic leading-relaxed text-offwhite/90 md:text-xl">
            Não se trata de scripts engessados, e sim de raciocínio de
            atendimento: acolhimento, investigação da necessidade real,
            condução clara do processo e acompanhamento.
          </p>
        </blockquote>
      </div>
    </section>
  );
}

/* ---------------- TREINAMENTO PERSONALIZADO ---------------- */
function Treinamento() {
  return (
    <section id="treinamento" className="bg-offwhite py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Como funciona</p>
          <h2 className="mt-4 font-display text-4xl text-bordo md:text-5xl">
            Um treinamento totalmente personalizado
          </h2>
          <p className="mt-5 text-cinza">
            Antes de qualquer conteúdo, Fernanda realiza um diagnóstico
            completo da equipe e da realidade da clínica, do consultório ou do
            hospital. Não acreditamos em treinamentos prontos: cada equipe
            possui desafios, perfis e necessidades diferentes.
          </p>
          <p className="mt-4 text-cinza">
            O primeiro passo é entender o perfil profissional de cada
            colaborador — secretária, recepcionista, equipe de enfermagem,
            gestores e demais profissionais envolvidos no atendimento. A partir
            desse diagnóstico, é desenvolvido um treinamento exclusivo,
            direcionado exatamente para os pontos que precisam ser aprimorados.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Clínicas e consultórios */}
          <article className="reveal rounded-lg border border-dourado/25 bg-creme p-8 md:p-10">
            <p className="eyebrow">Clínicas e consultórios</p>
            <h3 className="mt-3 font-display text-2xl text-bordo">
              Dois grandes pilares de atendimento
            </h3>
            <div className="mt-6 space-y-6 text-[15px] leading-relaxed text-cinza">
              <div>
                <h4 className="mb-2 font-semibold text-tinta">
                  Atendimento presencial
                </h4>
                <p>
                  Desenvolvimento completo da postura profissional da equipe:
                  etiqueta profissional, discrição, elegância, comunicação
                  verbal e não verbal, vocabulário adequado, linguagem
                  percebida, comportamento e posicionamento diante do paciente.
                  A equipe aprende como agir em situações de pressão, como
                  lidar com pacientes difíceis e quais condutas preservam a
                  imagem da clínica.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-tinta">
                  Atendimento por telefone e WhatsApp
                </h4>
                <p>
                  Aplicação de um método humanizado, acolhedor e comercial:
                  técnicas de acolhimento, investigação da necessidade do
                  paciente, apresentação de valor, condução da conversa,
                  fidelização, acompanhamento da jornada do paciente,
                  estratégias para aumento da conversão de agendamentos,
                  recuperação de pacientes que desistiram, pós-consulta e
                  fortalecimento do relacionamento.
                </p>
              </div>
            </div>
          </article>

          {/* Hospitais */}
          <article className="reveal rounded-lg border border-dourado/25 bg-creme p-8 md:p-10">
            <p className="eyebrow">Hospitais</p>
            <h3 className="mt-3 font-display text-2xl text-bordo">
              Excelência em toda a jornada do paciente
            </h3>
            <div className="mt-6 space-y-6 text-[15px] leading-relaxed text-cinza">
              <p>
                O foco é a experiência completa: atendimento humanizado,
                organização e gestão de agendas, comunicação entre setores,
                postura profissional, excelência no atendimento presencial e
                pelo WhatsApp, além da integração entre recepção, enfermagem e
                equipe administrativa.
              </p>
              <div>
                <h4 className="mb-2 font-semibold text-tinta">
                  Com a equipe de enfermagem
                </h4>
                <p>
                  Temas específicos da rotina hospitalar e ambulatorial: a
                  forma correta de recepcionar o paciente, postura
                  profissional, limites da relação profissional, comunicação
                  adequada, relacionamento entre a equipe, ética, discrição,
                  trabalho em equipe e condutas que fortalecem a imagem da
                  instituição.
                </p>
              </div>
            </div>
          </article>
        </div>

        <p className="reveal mx-auto mt-14 max-w-3xl text-center font-display text-xl italic leading-relaxed text-bordo md:text-2xl">
          "O objetivo não é apenas ensinar técnicas, mas transformar a forma
          como a equipe atende, se comunica e representa a instituição."
        </p>
      </div>
    </section>
  );
}

/* ---------------- RESULTADOS ---------------- */
function Resultados() {
  const itens = [
    [
      "Redução de filas e do tempo de espera percebido",
      "Fluxos de atendimento mais claros tornam a jornada do paciente mais rápida e previsível.",
    ],
    [
      "Capacitação das equipes",
      "Recepção, atendimento, agendamento e enfermagem preparados para entregar excelência todos os dias.",
    ],
    [
      "Padronização de processos",
      "Rotinas documentadas e replicáveis, garantindo o mesmo padrão de atendimento em toda a instituição.",
    ],
    [
      "Redução de conflitos e reclamações",
      "Acolhimento e comunicação mais humanizada diminuem atritos entre equipes e pacientes.",
    ],
    [
      "Aumento da conversão de agendamentos",
      "Atendimento com visão comercial: mais pacientes agendados, recuperados e fidelizados.",
    ],
    [
      "Indicadores de acompanhamento",
      "Métricas simples para a gestão medir, mês a mês, a evolução do atendimento.",
    ],
  ];
  return (
    <section id="resultados" className="bg-creme py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Impacto na gestão</p>
          <h2 className="mt-4 font-display text-4xl text-bordo md:text-5xl">
            O que este trabalho pode transformar
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map(([titulo, texto]) => (
            <div
              key={titulo}
              className="reveal rounded-lg border border-dourado/20 bg-offwhite p-7"
            >
              <div className="mb-4 h-[3px] w-9 rounded-full bg-dourado" />
              <h3 className="font-display text-lg text-bordo">{titulo}</h3>
              <p className="mt-2 text-sm text-cinza">{texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MODELO DE ATUAÇÃO ---------------- */
function Modelo() {
  const etapas = [
    [
      "Diagnóstico inicial",
      "Avaliação do atendimento na clínica, no consultório ou no hospital: recepção, agendamento, fluxos, perfis profissionais e pontos de atrito.",
    ],
    [
      "Implantação gradual do Método HACE",
      "Introdução da metodologia junto às equipes, respeitando a realidade e o ritmo de cada instituição.",
    ],
    [
      "Capacitações e reciclagens periódicas",
      "Treinamentos contínuos para manter o padrão de atendimento vivo nas equipes, mesmo com rotatividade.",
    ],
    [
      "Acompanhamento e auditoria contínua",
      "Verificação constante dos padrões de atendimento, com correções de rota e apoio direto às equipes.",
    ],
    [
      "Relatórios de evolução para a gestão",
      "Indicadores e resultados apresentados periodicamente, com total transparência.",
    ],
  ];
  return (
    <section className="bg-offwhite py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Como trabalhamos</p>
          <h2 className="mt-4 font-display text-4xl text-bordo md:text-5xl">
            Modelo de atuação
          </h2>
          <p className="mt-5 text-cinza">
            Um serviço contínuo de consultoria, organização de processos e
            capacitação das equipes de atendimento.
          </p>
        </div>
        <div className="mt-12 max-w-3xl">
          {etapas.map(([titulo, texto], i) => (
            <div
              key={titulo}
              className="reveal grid grid-cols-[64px,1fr] gap-6 border-b border-dourado/20 py-8 last:border-none"
            >
              <span className="font-display text-4xl leading-none text-dourado">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl text-bordo">{titulo}</h3>
                <p className="mt-1.5 text-[15px] text-cinza">{texto}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="reveal mt-8 max-w-2xl text-sm text-cinza">
          Escopo, entregas e periodicidade são definidos em contrato,
          garantindo previsibilidade para a instituição e continuidade do
          trabalho junto às equipes.
        </p>
      </div>
    </section>
  );
}

/* ---------------- DEPOIMENTOS ---------------- */
function Depoimentos() {
  const depoimentos = [
    [
      "Dra Louise Montesanti",
      "A transformação no atendimento foi perfeita. Sinto que ganhei uma parceira para a vida toda.",
      "/depoimentos/louise.jpg",
    ],
    [
      "Dr Hasten Frota",
      "A análise de perfil é o diferencial. O relatório que ela faz é muito bem organizado e explicativo.",
      "/depoimentos/hasten.jpg",
    ],
    [
      "Dra Pricila Pessoa",
      "Foi o melhor investimento que fiz. Ela é treinada com as técnicas certas.",
      "/depoimentos/pricila.jpg",
    ],
    [
      "Dr Daniel Moraes",
      "Treinamento dinâmico. Agora as secretárias criam processos, convertem e ajudam no crescimento.",
      "/depoimentos/daniel.jpg",
    ],
  ];
  return (
    <section id="depoimentos" className="bg-creme py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Quem já viveu essa transformação</p>
          <h2 className="mt-4 font-display text-4xl text-bordo md:text-5xl">
            Depoimentos reais
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {depoimentos.map(([nome, texto, foto]) => (
            <figure
              key={nome}
              className="reveal flex flex-col rounded-lg border border-dourado/25 bg-offwhite p-7"
            >
              <span
                aria-hidden
                className="font-display text-5xl leading-none text-dourado"
              >
                &ldquo;
              </span>
              <blockquote className="mt-1 flex-1 text-[14.5px] leading-relaxed text-cinza">
                {texto}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-dourado/20 pt-5">
                <img
                  src={foto}
                  alt={nome}
                  className="h-12 w-12 rounded-full border-2 border-dourado/50 object-cover"
                />
                <div className="font-display text-[15px] text-bordo">
                  {nome}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function Contato() {
  return (
    <section
      id="contato"
      className="trama bg-bordo-deep py-28 text-center text-offwhite"
    >
      <div className="mx-auto max-w-3xl px-6">
        <p className="eyebrow reveal">Vamos conversar</p>
        <h2 className="reveal mx-auto mt-5 font-display text-4xl leading-tight md:text-5xl">
          Transformar o atendimento começa com uma decisão.
        </h2>
        <p className="reveal mx-auto mt-6 max-w-xl text-offwhite/75">
          A Acerto Virtual está pronta para levar à sua instituição a mesma
          excelência que a tornou referência nacional em atendimento
          humanizado na saúde.
        </p>
        <a
          href="https://www.acertovirtual.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal mt-10 inline-block rounded-md bg-dourado px-10 py-4 text-sm font-semibold text-bordo-dark transition-transform hover:-translate-y-0.5"
        >
          Conheça a Acerto Virtual
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bordo-deep py-7 text-center">
      <p className="text-xs text-offwhite/50">
        © 2026 Acerto Virtual Assessoria e Treinamentos Estratégicos ·{" "}
        <a
          href="https://www.acertovirtual.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-offwhite/70 hover:text-dourado-light"
        >
          acertovirtual.com.br
        </a>
      </p>
    </footer>
  );
}

export default function Home() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <Fernanda />
      <Numeros />
      <Metodo />
      <Treinamento />
      <Resultados />
      <Modelo />
      <Depoimentos />
      <Contato />
      <Footer />
    </>
  );
}
