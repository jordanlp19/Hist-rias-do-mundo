import partnerIcon from "../assets/icons/Partner.svg";

function Parcerias() {
  return (
    <section className="rounded-lg bg-white p-6 shadow">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-amber-100">
          <img className="h-9 w-9" src={partnerIcon} alt="" aria-hidden="true" />
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-bold">Parcerias</h2>
          <div className="space-y-4 text-slate-700">
            <p className="indent-8">
              O Histórias do Mundo está aberto a parcerias com empresas, instituições, projetos e profissionais que compartilhem do interesse pela divulgação de conhecimento, educação, história, geopolítica e temas relacionados.
            </p>

            <p className="indent-8">
              Nosso trabalho alcança uma audiência altamente engajada por meio das redes sociais, oferecendo oportunidades para ações de divulgação que respeitem a experiência do público e estejam alinhadas aos valores do projeto.
            </p>

            <p>
              As modalidades de parceria podem incluir:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Conteúdo patrocinado;</li>
              <li>Divulgação de produtos e serviços;</li>
              <li>Campanhas institucionais;</li>
              <li>Projetos educacionais e culturais;</li>
              <li>Outras ações de comunicação desenvolvidas em conjunto.</li>
            </ul>

            <p className="indent-8">
              Todas as parcerias são avaliadas individualmente, buscando garantir transparência, relevância para a audiência e alinhamento com a proposta editorial do Histórias do Mundo.
            </p>

            <p className="indent-8">
              Se você deseja apresentar uma proposta ou obter mais informações, entre em contato pelo nosso{" "}
              <a
                className="font-semibold text-blue-600 hover:text-blue-800"
                href="mailto:historiasmundobr@gmail.com"
              >
                e-mail
              </a>{" "}
              oficial. Será um prazer conversar sobre possíveis oportunidades de colaboração.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parcerias;
