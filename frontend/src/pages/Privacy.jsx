const sections = [
  {
    title: "1. Apresentação",
    content: (
      <>
        <p>Bem-vindo ao Histórias do Mundo.</p>
        <p>
          Este documento reúne nossa Política de Privacidade, Política de Cookies e Termos de Uso, explicando como coletamos, utilizamos e protegemos as informações dos visitantes do site, bem como as regras para utilização de nosso conteúdo.
        </p>
        <p>Ao acessar este site, você concorda com as condições descritas abaixo.</p>
      </>
    ),
  },
  {
    title: "2. Quem somos",
    content: (
      <>
        <p>O Histórias do Mundo é um portal dedicado à divulgação de conteúdos relacionados à história, geopolítica, ciência, cultura, tecnologia e atualidades.</p>
        <p>Nosso objetivo é oferecer conteúdo informativo, educativo e de fácil compreensão para o público em geral.</p>
      </>
    ),
  },
  {
    title: "3. Coleta de informações",
    content: (
      <>
        <p>Durante a navegação, algumas informações podem ser coletadas automaticamente, incluindo:</p>
        <ul><li>endereço IP;</li><li>tipo de navegador;</li><li>dispositivo utilizado;</li><li>sistema operacional;</li><li>páginas acessadas;</li><li>tempo de permanência;</li><li>origem do acesso;</li><li>dados estatísticos de navegação.</li></ul>
        <p>Essas informações são utilizadas exclusivamente para melhorar a experiência dos visitantes, analisar o desempenho do site e garantir sua segurança.</p>
        <p>Não coletamos dados pessoais sensíveis sem o consentimento do usuário.</p>
      </>
    ),
  },
  {
    title: "4. Formulários de contato",
    content: (
      <>
        <p>Caso o visitante utilize algum formulário de contato disponível no site, poderão ser solicitados dados como:</p>
        <ul><li>nome;</li><li>endereço de e-mail;</li><li>mensagem enviada.</li></ul>
        <p>Essas informações serão utilizadas apenas para responder ao contato realizado e não serão comercializadas ou compartilhadas com terceiros, exceto quando exigido por lei.</p>
      </>
    ),
  },
  {
    title: "5. Cookies",
    content: (
      <>
        <p>Este site utiliza cookies para melhorar a navegação e oferecer uma experiência personalizada.</p>
        <p>Os cookies podem ser utilizados para:</p>
        <ul><li>lembrar preferências do usuário;</li><li>medir audiência;</li><li>compreender como o site é utilizado;</li><li>melhorar o desempenho das páginas;</li><li>exibir publicidade personalizada, quando aplicável.</li></ul>
        <p>O visitante pode desativar os cookies diretamente nas configurações de seu navegador. Entretanto, algumas funcionalidades do site poderão deixar de funcionar corretamente.</p>
      </>
    ),
  },
  {
    title: "6. Google Analytics",
    content: (
      <>
        <p>Este site poderá utilizar ferramentas como o Google Analytics para compreender estatísticas de acesso, incluindo:</p>
        <ul><li>número de visitantes;</li><li>páginas mais acessadas;</li><li>tempo médio de navegação;</li><li>localização aproximada dos acessos;</li><li>dispositivos utilizados.</li></ul>
        <p>Esses dados são coletados de forma agregada e não identificam individualmente os visitantes.</p>
      </>
    ),
  },
  {
    title: "7. Google AdSense",
    content: (
      <>
        <p>O Histórias do Mundo poderá exibir anúncios fornecidos pelo Google AdSense.</p>
        <p>O Google pode utilizar cookies para apresentar anúncios mais relevantes aos usuários com base em suas visitas anteriores a este e a outros sites.</p>
        <p>Esses cookies podem ser utilizados para medir o desempenho dos anúncios e personalizar a publicidade exibida.</p>
        <p>Mais informações podem ser encontradas na Política de Privacidade do Google.</p>
      </>
    ),
  },
  {
    title: "8. Compartilhamento de informações",
    content: (
      <>
        <p>Não vendemos nem comercializamos informações pessoais de nossos visitantes.</p>
        <p>As informações poderão ser compartilhadas apenas:</p>
        <ul><li>quando exigido por determinação legal;</li><li>para cumprimento de obrigações legais;</li><li>com prestadores de serviços responsáveis pela hospedagem, análise de acesso ou publicidade, sempre dentro das normas aplicáveis.</li></ul>
      </>
    ),
  },
  {
    title: "9. Segurança",
    content: (
      <>
        <p>Adotamos medidas técnicas e administrativas para proteger as informações coletadas contra acesso não autorizado, perda, alteração ou divulgação indevida.</p>
        <p>Entretanto, nenhum sistema conectado à internet é completamente livre de riscos, razão pela qual não é possível garantir segurança absoluta.</p>
      </>
    ),
  },
  {
    title: "10. Propriedade intelectual",
    content: (
      <>
        <p>Todo o conteúdo publicado no Histórias do Mundo, incluindo textos, imagens, ilustrações, identidade visual e demais materiais, é protegido pelas leis de direitos autorais, salvo quando indicado de forma diferente.</p>
        <p>É permitida a citação de pequenos trechos, desde que seja mencionada a fonte e incluído um link para o artigo original.</p>
        <p>Não é permitida a reprodução integral dos conteúdos sem autorização prévia.</p>
      </>
    ),
  },
  {
    title: "11. Uso das informações",
    content: (
      <>
        <p>Os conteúdos publicados possuem finalidade informativa e educativa.</p>
        <p>Embora sejam produzidos com base em fontes consideradas confiáveis, podem existir atualizações, revisões históricas ou mudanças decorrentes de novos acontecimentos.</p>
        <p>O Histórias do Mundo não garante que todas as informações permanecerão permanentemente atualizadas.</p>
      </>
    ),
  },
  {
    title: "12. Links para terceiros",
    content: (
      <>
        <p>O site poderá conter links para páginas externas.</p>
        <p>Não somos responsáveis pelas políticas de privacidade, conteúdo ou práticas adotadas por outros sites.</p>
        <p>Recomendamos que o usuário leia as políticas de privacidade de cada serviço acessado.</p>
      </>
    ),
  },
  {
    title: "13. Direitos do usuário",
    content: (
      <>
        <p>Sempre que aplicável, o usuário poderá solicitar:</p>
        <ul><li>acesso aos dados eventualmente fornecidos;</li><li>correção de informações;</li><li>exclusão de dados pessoais;</li><li>esclarecimentos sobre o tratamento de informações.</li></ul>
        <p>As solicitações poderão ser realizadas por meio dos canais de contato disponíveis no site.</p>
      </>
    ),
  },
  {
    title: "14. Alterações desta política",
    content: (
      <>
        <p>Esta política poderá ser atualizada a qualquer momento para refletir mudanças legais, técnicas ou operacionais.</p>
        <p>A versão mais recente estará sempre disponível nesta página.</p>
      </>
    ),
  },
  {
    title: "15. Contato",
    content: (
      <>
        <p>Em caso de dúvidas sobre esta Política de Privacidade, Cookies e Termos de Uso, utilize a página de contato disponível no site.</p>
        <p>Ao continuar navegando no Histórias do Mundo, o visitante declara estar ciente e de acordo com os termos apresentados neste documento.</p>
      </>
    ),
  },
];

function Privacy() {
  return (
    <article className="rounded-lg bg-white p-6 shadow sm:p-8">
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">Política de Privacidade, Cookies e Termos de Uso</h1>
        <p className="mt-3 text-sm text-slate-500">Última atualização: 01 de agosto de 2026</p>
      </header>

      <div className="text-slate-700">
        {sections.map((section) => (
          <section className="border-b border-slate-200 py-6 last:border-b-0 last:pb-0" key={section.title}>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">{section.title}</h2>
            <div className="space-y-4 leading-7 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

export default Privacy;
