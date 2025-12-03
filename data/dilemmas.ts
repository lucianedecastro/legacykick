
import type { Dilemma } from '../types';

export const DILEMMAS: Dilemma[] = [
  {
    id: 1,
    year: 1941,
    position: 'circulo_central',
    title: 'O Decreto-Lei da Proibição',
    situation: 'O governo de Getúlio Vargas publica o Decreto-Lei 3.199, que proíbe a prática de esportes "incompatíveis com a natureza feminina". O futebol está entre eles. Você é uma jovem apaixonada por futebol.',
    question: 'O que você faz diante da proibição?',
    choices: [
      { id: '1a', text: 'Continua jogando secretamente, em campos de várzea e longe dos olhos da fiscalização.', feedback: 'Você mantém a chama acesa, mas corre riscos. A resistência começa na clandestinidade.', points: 10 },
      { id: '1b', text: 'Abandona o futebol e busca outros interesses, como costura ou dança, para se adequar às expectativas.', feedback: 'Você se adapta, mas um sonho é deixado para trás. Muitas mulheres foram forçadas a fazer o mesmo.', points: 0 },
    ],
    historicalFact: 'Em 14 de abril de 1941, o Decreto-Lei 3.199 foi assinado, marginalizando as mulheres do futebol por quase 40 anos. A justificativa era proteger a "natureza feminina" e a função da maternidade.',
  },
  {
    id: 2,
    year: 1959,
    position: 'area_defensiva_jogador_centro',
    title: 'Os jogos da resistência',
    situation: 'Mesmo com a proibição, times femininos continuam a existir, muitas vezes se apresentando como atrações em eventos preliminares de jogos masculinos.',
    question: 'Seu time é convidado para jogar em um evento beneficente. Como você reage?',
    choices: [
      { id: '2a', text: 'Aceita. É uma forma de continuar jogando, mesmo que como espetáculo, e manter o time unido.', feedback: 'A visibilidade, mesmo que caricata, mantém o futebol feminino vivo na memória popular.', points: 10 },
      { id: '2b', text: 'Recusa, por considerar a proposta humilhante e que não trata o esporte com a seriedade que merece.', feedback: 'Sua dignidade é importante, mas a falta de oportunidades pode levar ao fim do time.', points: 5 },
    ],
    historicalFact: 'Times como o Araguari Atlético Clube, de Minas Gerais, faziam sucesso nos anos 50, mas eram frequentemente tratados como entretenimento exótico, não como esporte legítimo.',
  },
  {
    id: 3,
    year: 1965,
    position: 'area_defensiva_jogador_lateral',
    title: 'Consolidação da Proibição',
    situation: 'O Conselho Nacional de Desportos (CND) emite a Deliberação nº 7, reforçando a proibição e detalhando quais esportes são vedados às mulheres, incluindo futebol, lutas e polo aquático.',
    question: 'Você vê a notícia no jornal. Qual sua atitude?',
    choices: [
      { id: '3a', text: 'Organiza um protesto silencioso com outras jogadoras, enviando cartas ao CND.', feedback: 'A ação é um marco de resistência organizada, mostrando que as jogadoras não estavam passivas.', points: 15 },
      { id: '3b', text: 'Sente-se desmotivada e foca em outras áreas da vida, como os estudos ou a família.', feedback: 'O peso da lei e da sociedade desanima muitas atletas, um reflexo do ambiente hostil da época.', points: 0 },
    ],
    historicalFact: 'A Deliberação de 1965 foi uma resposta do regime militar à crescente insistência das mulheres em praticar esportes "masculinos", mostrando uma forte repressão cultural.',
  },
  {
    id: 4,
    year: 1979,
    position: 'meio_campo_defensivo',
    title: 'O Fim da Proibição',
    situation: 'Após anos de luta e pressão de movimentos feministas e de mulheres no esporte, a proibição é finalmente revogada. O futebol feminino volta a ser legal no Brasil.',
    question: 'A notícia se espalha. Qual é sua primeira ação?',
    choices: [
      { id: '4a', text: 'Organiza um "re-jogo" comemorativo no campo do bairro, convidando todas as mulheres que jogavam escondido.', feedback: 'A celebração marca um novo começo e fortalece a comunidade de jogadoras.', points: 10 },
      { id: '4b', text: 'Procura um clube para tentar formar um time oficial, pensando no futuro e na profissionalização.', feedback: 'Sua visão de futuro é crucial para transformar a permissão em oportunidade real.', points: 15 },
    ],
    historicalFact: 'A revogação em 1979 não significou apoio imediato. Foram necessários mais anos para que a modalidade fosse definitivamente regulamentada.',
  },
   {
    id: 5,
    year: 1983,
    position: 'meio_campo_lateral',
    title: 'A Regulamentação',
    situation: 'O CND finalmente regulamenta a prática do futebol feminino, mas com regras "adaptadas", como tempo de jogo menor e bola mais leve. A medida é vista por muitas como discriminatória.',
    question: 'Como você e seu time reagem a estas regras?',
    choices: [
      { id: '5a', text: 'Aceitam as regras para poder participar dos primeiros campeonatos oficiais e mostrar seu valor em campo.', feedback: 'Jogar pelas regras impostas é um passo estratégico para ocupar os espaços e lutar por mais de dentro.', points: 10 },
      { id: '5b', text: 'Boicotam os torneios que usam essas regras, exigindo igualdade de condições desde o início.', feedback: 'A luta por igualdade é fundamental, mas a ausência nos campos pode retardar o crescimento da modalidade.', points: 5 },
    ],
    historicalFact: 'A regulamentação de 1983 foi um passo ambíguo: reconhecia o esporte, mas o fazia sob uma ótica paternalista e discriminatória, reflexo do preconceito da época.',
  },
  {
    id: 6,
    year: 1988,
    position: 'meio_campo_ofensivo',
    title: 'O Torneio Experimental da FIFA',
    situation: 'A FIFA organiza um torneio experimental na China para testar a viabilidade de uma Copa do Mundo Feminina. O Brasil é convidado a enviar uma seleção.',
    question: 'A convocação é feita às pressas, sem apoio ou estrutura. Você aceita ir?',
    choices: [
      { id: '6a', text: 'Sim, é uma chance única de representar o Brasil e mostrar o talento do nosso futebol ao mundo.', feedback: 'Sua coragem e de suas colegas resulta em um surpreendente 3º lugar, colocando o Brasil no mapa do futebol feminino.', points: 20 },
      { id: '6b', text: 'Não, as condições são muito precárias e amadoras. É preciso exigir um mínimo de estrutura da confederação.', feedback: 'A exigência por melhores condições é justa, mas perder a oportunidade pode custar caro para a visibilidade do esporte.', points: 5 },
    ],
    historicalFact: 'A Seleção Brasileira, que tinha como base, jogadoras do Radar, um time do Rio de Janeiro, viajou para a China e conquistou a medalha de bronze, um feito heroico que impulsionou a criação da Copa do Mundo Feminina oficial em 1991.',
  },
  {
    id: 7,
    year: 1996,
    position: 'area_de_ataque_adversario_lateral',
    title: 'A Primeira Olimpíada',
    situation: 'O futebol feminino estreia como modalidade olímpica nos Jogos de Atlanta. O Brasil tem uma geração talentosa com nomes como Sissi, Pretinha, Formiga e Roseli.',
    question: 'A mídia foca mais na aparência das jogadoras do que em seu desempenho. O que você faz?',
    choices: [
      { id: '7a', text: 'Ignora os comentários e dá entrevistas focadas apenas no jogo, na tática e nos resultados.', feedback: 'Sua postura profissional ajuda a mudar a narrativa e a educar a imprensa e o público.', points: 15 },
      { id: '7b', text: 'Usa o espaço na mídia para criticar abertamente o sexismo e exigir respeito.', feedback: 'Sua voz corajosa inspira outras atletas e expõe o preconceito, mesmo que isso gere atritos com a imprensa.', points: 15 },
    ],
    historicalFact: 'A Olimpíada de 1996 foi um marco. Apesar do 4º lugar, a visibilidade ajudou a consolidar a seleção e a inspirar uma nova geração de meninas a jogar futebol no Brasil.',
  },
  {
    id: 8,
    year: 2007,
    position: 'area_de_ataque_adversario_centro',
    title: 'A Final da Copa do Mundo',
    situation: 'O Brasil chega à final da Copa do Mundo contra a Alemanha, com uma campanha espetacular e Marta eleita a melhor do mundo. A expectativa é alta, mas a seleção perde o jogo.',
    question: 'Após a derrota, no vestiário, qual é o sentimento predominante?',
    choices: [
      { id: '8a', text: 'Frustração pela derrota, mas orgulho pela jornada e pela visibilidade conquistada para o esporte no Brasil.', feedback: 'A maturidade de ver a conquista além do resultado é o que constrói um legado duradouro.', points: 10 },
      { id: '8b', text: 'Decepção profunda. A sensação é de que uma chance de ouro para mudar o patamar do esporte foi perdida.', feedback: 'A dor da derrota é real, mas ela serve de combustível para as batalhas futuras.', points: 5 },
    ],
    historicalFact: 'A prata em 2007 teve um sabor agridoce, e Marta, eleita a melhor jogadora e vencedora da Chuteira de Ouro da competição, desabafa ao final do jogo com um "A gente está se acostumando com o segundo lugar".',
  },
  {
    id: 9,
    year: 2011,
    position: 'area_de_ataque_adversario_centro',
    title: 'Fim das Sereias da Vila',
    situation: 'É 2011, e o time feminino do Santos, multicampeão e com grandes nomes, é desmantelado sob a alegação de falta de verba, apesar de ter patrocinadores.',
    question: 'Como você reage a essa decisão, que parece um retrocesso para o futebol feminino no Brasil?',
    choices: [
      { id: '8a', text: 'Mobilizar a opinião pública e buscar novos apoios para a manutenção e valorização da equipe feminina.', feedback: 'Transforma o problema em uma oportunidade para conscientizar e lutar por mais apoio.', points: 10 },
      { id: '8b', text: 'Aceitar a decisão do clube, entendendo que são questões financeiras internas.', feedback: 'Implica em resignação e a perda de um time feminino de referência.', points: 5 },
    ],
    historicalFact: 'Em 2011, o presidente do Santos FC, Luís Álvaro de Oliveira Ribeiro (Laor), anunciou o fim do time feminino do clube por falta de verba, apesar da equipe ter cinco patrocinadores. Essa decisão foi amplamente criticada e vista como um retrocesso para a modalidade, evidenciando o desinteresse de muitos dirigentes em investir no futebol feminino, mesmo com o sucesso e o talento das atletas.',
  },
  {
    id: 10,
    year: 2013,
    position: 'linha_de_fundo_adversaria',
    title: 'A Luta por um Calendário',
    situation: 'Muitas jogadoras profissionais no Brasil enfrentam um calendário curto, com campeonatos que duram poucos meses. O resto do ano é de incerteza e falta de jogos.',
    question: 'Seu clube só oferece contrato de 3 meses. O que você faz?',
    choices: [
      { id: '9a', text: 'Aceita o contrato curto, pois é a única oportunidade de jogar profissionalmente no país.', feedback: 'A necessidade de jogar muitas vezes se sobrepõe à busca por condições ideais de trabalho.', points: 5 },
      { id: '9b', text: 'Junta-se a outras atletas para criar um movimento exigindo um calendário anual e contratos mais longos.', feedback: 'A união das jogadoras é a força mais poderosa para promover mudanças estruturais no esporte.', points: 20 },
    ],
    historicalFact: 'A primeira edição do Campeonato Brasileiro de Futebol Feminino ocorreu em 2013, sendo o time do Centro Olímpico de São Paulo o campeão inaugural. Vinte equipes de diversos estados do Brasil participaram do torneio, que marcou o início da principal competição nacional da modalidade.',
  },
  {
    id: 11,
    year: 2027,
    position: 'gol_adversario',
    title: 'Uma Copa para chamar de nossa',
    situation: 'O Brasil sedia a Copa do Mundo Feminina pela primeira vez em 2027, um marco histórico que coloca os holofotes do mundo sobre o nosso futebol. Há um entusiasmo sem precedentes e a expectativa de que este evento impulsione de vez a modalidade no país.',
    question: 'Com o Brasil sendo o centro do mundo do futebol feminino, qual deve ser o legado principal desta Copa?',
    choices: [
      { id: '10a', text: '"Aproveitar a visibilidade para garantir que cada clube brasileiro tenha uma estrutura de base sólida e acessível para novas jogadoras, do Norte ao Sul."', feedback: 'Focar na base é garantir um futuro sustentável. Sua visão prioriza a formação de talentos a longo prazo, essencial para manter o Brasil competitivo nas próximas décadas.', points: 10},
      { id: '10b', text: '"Pressionar por políticas de igualdade salarial e profissionalização total, usando o megaevento como alavanca para mudar leis e mentalidades de uma vez por todas."', feedback: 'Sua abordagem política busca mudanças estruturais e imediatas. Usar o clamor da Copa para lutar por direitos iguais é uma estratégia poderosa para a profissionalização do esporte.', points: 10},
    ],
    historicalFact: 'A Copa do Mundo Feminina de 2027 é um evento inédito no Brasil. A visibilidade e o investimento gerados pela competição representam uma oportunidade única para transformar o futebol feminino nacional, superando desafios históricos de desigualdade e falta de apoio.'
}
];
