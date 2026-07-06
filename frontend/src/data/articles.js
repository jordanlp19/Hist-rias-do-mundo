const articles = [
  {
    id: 1,
    title: "Como organizar a estrutura de um site de artigos",
    slug: "estrutura-site-artigos",
    description:
      "Uma visao pratica para separar rotas, paginas e dados antes de comecar o design.",
    category: "Desenvolvimento",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    date: "2026-06-11",
    author: "Jordan",
    content: `Antes de desenhar as paginas, vale criar uma base estavel para os dados. Na versao 1 do Histórias do Mundo, os artigos ficam dentro do proprio frontend para simplificar a publicacao, reduzir dependencias e facilitar a hospedagem na Vercel.

Essa decisao permite que novas publicacoes sejam adicionadas por commit no GitHub, sem exigir um servidor Express ativo. Mais tarde, a mesma camada de dados pode ser adaptada para Markdown, MDX, CMS ou banco de dados.`,
  },
  {
    id: 2,
    title: "O papel do slug em paginas de conteudo",
    slug: "papel-do-slug",
    description:
      "Entenda por que URLs legiveis facilitam navegacao, compartilhamento e manutencao.",
    category: "Conteudo",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
    date: "2026-06-12",
    author: "Jordan",
    content: `O slug e a parte amigavel da URL de um artigo. Em vez de usar apenas um ID numerico, uma rota como /artigos/papel-do-slug comunica melhor o assunto da pagina.

Ele tambem ajuda a manter links mais faceis de ler, compartilhar e reaproveitar. Em um portal de conteudo, isso faz diferenca tanto para o leitor quanto para a organizacao interna do projeto.`,
  },
  {
    id: 3,
    title:
      "Napoleao Bonaparte: a trajetoria do militar que transformou a Europa",
    slug: "napoleao-bonaparte-trajetoria",
    description:
      "Lider militar, estrategista e imperador frances, Napoleao Bonaparte marcou profundamente a historia europeia entre o fim do seculo XVIII e o inicio do seculo XIX.",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
    date: "2026-07-04",
    author: "Jordan Lopes",
    content: `Da ilha da Corsega ao Exercito Frances

Napoleao Bonaparte nasceu em 15 de agosto de 1769, na ilha da Corsega, poucos meses apos o territorio passar do dominio de Genova para a Franca. Filho de uma familia da pequena nobreza local, recebeu educacao militar desde cedo e ingressou na Academia Militar de Brienne antes de concluir sua formacao na Escola Militar de Paris.

Durante os primeiros anos de carreira, destacou-se pela habilidade em artilharia e pelo conhecimento tatico. O periodo coincidiu com profundas transformacoes politicas na Franca, impulsionadas pela Revolucao Francesa iniciada em 1789.

A rapida ascensao ao poder

Em meio as guerras revolucionarias, Napoleao ganhou notoriedade ao comandar tropas francesas em diversas campanhas militares. Sua atuacao na Campanha da Italia (1796-1797) consolidou sua reputacao como um dos principais estrategistas de sua geracao.

Em 1799, aproveitando a instabilidade politica francesa, participou do golpe conhecido como 18 de Brumario, que encerrou o governo do Diretorio e estabeleceu o Consulado. Poucos anos depois, em 1804, foi coroado imperador dos franceses.

O auge do Imperio Frances

Entre 1804 e 1812, Napoleao liderou uma serie de campanhas militares que ampliaram significativamente a influencia francesa sobre grande parte da Europa continental.

Vitorias em batalhas como Austerlitz, Jena e Wagram consolidaram seu dominio militar. Alem das conquistas territoriais, promoveu reformas administrativas e juridicas, sendo o Codigo Napoleonico uma das mais duradouras. Esse conjunto de leis influenciou diversos sistemas juridicos ao redor do mundo e permanece como uma de suas principais herancas historicas.

A campanha da Russia e o inicio da queda

Em 1812, Napoleao iniciou a invasao da Russia com um dos maiores exercitos ja reunidos ate entao. Apesar do avanco inicial, a estrategia russa de recuar, destruir suprimentos e evitar confrontos decisivos, aliada ao rigoroso inverno, provocou perdas devastadoras ao exercito frances.

A campanha enfraqueceu significativamente o Imperio e incentivou outras potencias europeias a formar novas aliancas contra a Franca.

O exilio, o retorno e Waterloo

Apos sucessivas derrotas militares, Napoleao abdicou do trono em 1814 e foi enviado para a ilha de Elba.

Menos de um ano depois, conseguiu escapar e retornou a Franca, reassumindo o poder durante o periodo conhecido como os Cem Dias.

Seu retorno, porem, foi breve. Em 18 de junho de 1815, foi derrotado na Batalha de Waterloo por uma coalizao liderada pelo duque de Wellington e pelo marechal prussiano Gebhard von Blucher.

Apos a derrota definitiva, foi exilado para a remota ilha de Santa Helena, no Atlantico Sul, onde permaneceu ate sua morte, em 5 de maio de 1821.

O legado de Napoleao

Mais de dois seculos apos sua morte, Napoleao Bonaparte continua sendo uma das figuras mais estudadas da historia.

Para alguns historiadores, destacou-se como um reformador que modernizou instituicoes e fortaleceu principios administrativos e juridicos. Para outros, suas campanhas militares contribuiram para conflitos que provocaram enormes perdas humanas em toda a Europa.

Independentemente da interpretacao, existe amplo consenso de que suas acoes alteraram profundamente o equilibrio politico europeu e influenciaram a formacao do mundo contemporaneo.

Fontes:
Encyclopaedia Britannica - Napoleon I.
Musee de l'Armee (Franca) - Acervo historico sobre Napoleao Bonaparte.
Biblioteca Nacional da Franca (Bibliotheque nationale de France).
Andrew Roberts. Napoleon: A Life. Penguin Books, 2014.
David G. Chandler. The Campaigns of Napoleon. Scribner, 1966.`,
  },
];

export default articles;
