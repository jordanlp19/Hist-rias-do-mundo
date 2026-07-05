const articles = [
  {
    id: 1,
    title: "Como organizar a estrutura de um site de artigos",
    slug: "estrutura-site-artigos",
    description:
      "Uma visão prática para separar frontend, backend, rotas e dados antes de começar o design.",
    category: "Desenvolvimento",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    date: "2026-06-11",
    author: "Jordan",
    content:
      "Antes de desenhar as páginas, vale criar uma base estável para os dados. O frontend deve consumir uma API simples, enquanto o backend centraliza a lista de artigos e a busca por slug. Assim, a interface pode evoluir sem depender de mudanças grandes na estrutura.",
  },
  {
    id: 2,
    title: "O papel do slug em páginas de conteúdo",
    slug: "papel-do-slug",
    description:
      "Entenda por que URLs legíveis facilitam navegação, compartilhamento e manutenção.",
    category: "Conteúdo",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
    date: "2026-06-12",
    author: "Jordan",
    content:
      "O slug é a parte amigável da URL de um artigo. Em vez de usar apenas um ID numérico, uma rota como /artigos/papel-do-slug comunica melhor o assunto da página. Também ajuda a manter links mais fáceis de ler e reaproveitar.",
  },
  {
    id: 3,
    title:
      "Napoleão Bonaparte: a trajetória do militar que transformou a Europa",
    slug: "napoleao-bonaparte-trajetoria",
    description:
      "Líder militar, estrategista e imperador francês, Napoleão Bonaparte marcou profundamente a história europeia entre o fim do século XVIII e o início do século XIX.",
    category: "História",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
    date: "2026-07-04",
    author: "Jordan Lopes",
    content: `Da ilha da Córsega ao Exército Francês

Napoleão Bonaparte nasceu em 15 de agosto de 1769, na ilha da Córsega, poucos meses após o território passar do domínio de Gênova para a França. Filho de uma família da pequena nobreza local, recebeu educação militar desde cedo e ingressou na Academia Militar de Brienne antes de concluir sua formação na Escola Militar de Paris.

Durante os primeiros anos de carreira, destacou-se pela habilidade em artilharia e pelo conhecimento tático. O período coincidiu com profundas transformações políticas na França, impulsionadas pela Revolução Francesa iniciada em 1789.

A rápida ascensão ao poder

Em meio às guerras revolucionárias, Napoleão ganhou notoriedade ao comandar tropas francesas em diversas campanhas militares. Sua atuação na Campanha da Itália (1796-1797) consolidou sua reputação como um dos principais estrategistas de sua geração.

Em 1799, aproveitando a instabilidade política francesa, participou do golpe conhecido como 18 de Brumário, que encerrou o governo do Diretório e estabeleceu o Consulado. Poucos anos depois, em 1804, foi coroado imperador dos franceses.

O auge do Império Francês

Entre 1804 e 1812, Napoleão liderou uma série de campanhas militares que ampliaram significativamente a influência francesa sobre grande parte da Europa continental.

Vitórias em batalhas como Austerlitz, Jena e Wagram consolidaram seu domínio militar. Além das conquistas territoriais, promoveu reformas administrativas e jurídicas, sendo o Código Napoleônico uma das mais duradouras. Esse conjunto de leis influenciou diversos sistemas jurídicos ao redor do mundo e permanece como uma de suas principais heranças históricas.

A campanha da Rússia e o início da queda

Em 1812, Napoleão iniciou a invasão da Rússia com um dos maiores exércitos já reunidos até então. Apesar do avanço inicial, a estratégia russa de recuar, destruir suprimentos e evitar confrontos decisivos, aliada ao rigoroso inverno, provocou perdas devastadoras ao exército francês.

A campanha enfraqueceu significativamente o Império e incentivou outras potências europeias a formar novas alianças contra a França.

O exílio, o retorno e Waterloo

Após sucessivas derrotas militares, Napoleão abdicou do trono em 1814 e foi enviado para a ilha de Elba.

Menos de um ano depois, conseguiu escapar e retornou à França, reassumindo o poder durante o período conhecido como os Cem Dias.

Seu retorno, porém, foi breve. Em 18 de junho de 1815, foi derrotado na Batalha de Waterloo por uma coalizão liderada pelo duque de Wellington e pelo marechal prussiano Gebhard von Blücher.

Após a derrota definitiva, foi exilado para a remota ilha de Santa Helena, no Atlântico Sul, onde permaneceu até sua morte, em 5 de maio de 1821.

O legado de Napoleão

Mais de dois séculos após sua morte, Napoleão Bonaparte continua sendo uma das figuras mais estudadas da história.

Para alguns historiadores, destacou-se como um reformador que modernizou instituições e fortaleceu princípios administrativos e jurídicos. Para outros, suas campanhas militares contribuíram para conflitos que provocaram enormes perdas humanas em toda a Europa.

Independentemente da interpretação, existe amplo consenso de que suas ações alteraram profundamente o equilíbrio político europeu e influenciaram a formação do mundo contemporâneo.

Fontes:
Encyclopaedia Britannica - Napoleon I.
Musée de l'Armée (França) - Acervo histórico sobre Napoleão Bonaparte.
Biblioteca Nacional da França (Bibliothèque nationale de France).
Andrew Roberts. Napoleon: A Life. Penguin Books, 2014.
David G. Chandler. The Campaigns of Napoleon. Scribner, 1966.`,
  },
];

export default articles;
