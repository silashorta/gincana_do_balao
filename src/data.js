const data = [
    {
      "id": 1,
      "perguntas": "Qual é a população atual da China?",
      "alternativas": "",
      "respostas": "(Resposta: Aproximadamente 1.41 bilhão)"
    },
    {
      "id": 2,
      "perguntas": "Quantos países existem no mundo?",
      "alternativas": "",
      "respostas": "(Resposta: Cerca de 195 países reconhecidos)"
    },
    {
      "id": 3,
      "perguntas": "Qual é a altitude média do Monte Everest em metros?",
      "alternativas": "",
      "respostas": "(Resposta: Aproximadamente 8.848 metros)"
    },
    {
      "id": 4,
      "perguntas": "Quantos anos a Grande Muralha da China tem?",
      "alternativas": "",
      "respostas": "(Resposta: 2242)"
    },
    {
      "id": 5,
      "perguntas": "Qual é o número atômico do ouro na tabela periódica?",
      "alternativas": "",
      "respostas": "(Resposta: 79)"
    },
    {
      "id": 6,
      "perguntas": "Quantas obras de William Shakespeare são amplamente reconhecidas como autênticas?",
      "alternativas": "",
      "respostas": "(Resposta: 39)"
    },
    {
      "id": 7,
      "perguntas": "Qual é o número atual de membros permanentes do Conselho de Segurança das Nações Unidas?",
      "alternativas": "",
      "respostas": "Resposta: 5)"
    },
    {
      "id": 8,
      "perguntas": "Quantos Oscars ganhou o filme mais premiado na história do Oscar?",
      "alternativas": "",
      "respostas": "(Resposta: 11 Oscars - Ben-Hur, Titanic e O Senhor dos Anéis: O Retorno do Rei)"
    },
    {
      "id": 9,
      "perguntas": "Qual é a duração média de uma gestação humana em semanas?",
      "alternativas": "",
      "respostas": "(Resposta: Cerca de 40 semanas)"
    },
    {
      "id": 10,
      "perguntas": "Quantos anos tem a Mona Lisa, a famosa pintura de Leonardo da Vinci?",
      "alternativas": "",
      "respostas": "(Resposta: 520)"
    },
    {
      "id": 11,
      "perguntas": "Quantos bytes compõem um kilobyte?",
      "alternativas": "",
      "respostas": "(Resposta: 1024 bytes)"
    },
    {
      "id": 12,
      "perguntas": "Qual é a velocidade da luz em metros por segundo?",
      "alternativas": "",
      "respostas": "(Resposta: Aproximadamente 299.792.458 metros por segundo)"
    },
    {
      "id": 13,
      "perguntas": "Quantos continentes existem no mundo?",
      "alternativas": "",
      "respostas": "(Resposta: 7)"
    },
    {
      "id": 14,
      "perguntas": "Qual é a idade aproximada da Terra em bilhões de anos?",
      "alternativas": "",
      "respostas": "(Resposta: Cerca de 4,5 bilhões de anos)"
    },
    {
      "id": 15,
      "perguntas": "Quantos elementos químicos naturais existem na tabela periódica?",
      "alternativas": "",
      "respostas": "(Resposta: 118)"
    },
    {
      "id": 16,
      "perguntas": "Qual é a altura do edifício Burj Khalifa em Dubai em metros?",
      "alternativas": "",
      "respostas": "(Resposta: Aproximadamente 828 metros)"
    },
    {
      "id": 17,
      "perguntas": "Quantos dentes permanentes tem um adulto, incluindo molares, pré-molares, caninos e incisivos?",
      "alternativas": "",
      "respostas": "(Resposta: 32)"
    },
    {
      "id": 18,
      "perguntas": "Em que ano a Revolução Francesa começou?",
      "alternativas": "",
      "respostas": "(Resposta: 1789)"
    },
    {
      "id": 19,
      "perguntas": "Quantos versos há no total na \"Ilíada\" de Homero?",
      "alternativas": "",
      "respostas": "(Resposta: Cerca de 15.700 versos)"
    },
    {
      "id": 20,
      "perguntas": "Quantos músculos esqueléticos existem no corpo humano?",
      "alternativas": "",
      "respostas": "(Resposta: 650)"
    },
    {
      "id": 21,
      "perguntas": "Quantos ossos adultos humanos têm?",
      "alternativas": "",
      "respostas": "(Resposta: 206)"
    },
    {
      "id": 22,
      "perguntas": "Qual é a temperatura de ebulição da água em graus Celsius ao nível do mar?",
      "alternativas": "",
      "respostas": "(Resposta: 100 graus Celsius)"
    },
    {
      "id": 23,
      "perguntas": "Quantos pares de nervos cranianos existem no cérebro humano?",
      "alternativas": "",
      "respostas": "(Resposta: 12 pares)"
    },
    {
      "id": 24,
      "perguntas": "Quantos lados tem um dodecágono?",
      "alternativas": "",
      "respostas": "(Resposta: 12 lados)"
    },
    {
      "id": 25,
      "perguntas": "Qual é a pontuação máxima em uma partida de boliche?",
      "alternativas": "",
      "respostas": "(Resposta: 300 pontos)"
    },
    {
      "id": 26,
      "perguntas": "Quantos quilômetros quadrados tem a área total da Austrália?",
      "alternativas": "",
      "respostas": "(Resposta: Aproximadamente 7.692.024 km²)"
    },
    {
      "id": 27,
      "perguntas": "Quantos centímetros em um metro?",
      "alternativas": "",
      "respostas": "(Resposta: 100 centímetros)"
    },
    {
      "id": 28,
      "perguntas": "Em que ano a Declaração de Independência dos Estados Unidos foi assinada?",
      "alternativas": "",
      "respostas": "(Resposta: 1776)"
    },
    {
      "id": 29,
      "perguntas": "Quantos planetas no sistema solar têm anéis visíveis?",
      "alternativas": "",
      "respostas": "(Resposta: 4 - Júpiter, Saturno, Urano e Netuno)"
    },
    {
      "id": 30,
      "perguntas": "Quantos anos durou a Guerra dos Cem Anos?",
      "alternativas": "",
      "respostas": "(Resposta: 116 anos, de 1337 a 1453)"
    },
    {
      "id": 31,
      "perguntas": "Quantas teclas tem um piano padrão?",
      "alternativas": "",
      "respostas": "(Resposta: 88 teclas)"
    },
    {
      "id": 32,
      "perguntas": "Quantos lados tem um cubo?",
      "alternativas": "",
      "respostas": "(Resposta: 6 lados)"
    },
    {
      "id": 33,
      "perguntas": "Quantos quilômetros quadrados tem a Groenlândia?",
      "alternativas": "",
      "respostas": "(Resposta: Aproximadamente 2.166.086 km²)"
    },
    {
      "id": 34,
      "perguntas": "Qual é a velocidade de rotação da Terra em quilômetros por hora no equador?",
      "alternativas": "",
      "respostas": "(Resposta: Aproximadamente 1670 km/h)"
    },
    {
      "id": 35,
      "perguntas": "Quantos anos durou o Renascimento?",
      "alternativas": "",
      "respostas": "(Resposta: Aproximadamente de meados do século XIV ao início do século XVII)"
    },
    {
      "id": 36,
      "perguntas": "Quantos jogadores compõem uma equipe de polo aquático durante uma partida?",
      "alternativas": "",
      "respostas": "(Resposta: 7 jogadores)"
    },
    {
      "id": 37,
      "perguntas": "Quantos presidentes os Estados Unidos tiveram até 2022?",
      "alternativas": "",
      "respostas": "(Resposta: 46 presidentes)"
    },
    {
      "id": 38,
      "perguntas": "Quantos estados compõem os Estados Unidos?",
      "alternativas": "",
      "respostas": "(Resposta: 50 estados)"
    },
    {
      "id": 39,
      "perguntas": "Qual é o número atômico do hidrogênio?",
      "alternativas": "",
      "respostas": "(Resposta: 1)"
    },
    {
      "id": 40,
      "perguntas": "Quantos dentes decíduos (de leite) tem uma criança humana normalmente?",
      "alternativas": "",
      "respostas": "(Resposta: 20 dentes)"
    },
    {
      "id": 41,
      "perguntas": "Qual é o resultado da expressão matemática 5² - 3 x 4 + 8 ÷ 2?",
      "alternativas": "",
      "respostas": "(Resposta: 13)"
    },
    {
      "id": 42,
      "perguntas": "Se um retângulo tem um comprimento de 10 unidades e uma largura de 5 unidades, qual é a área do retângulo?",
      "alternativas": "",
      "respostas": "(Resposta: 50 unidades quadradas)"
    },
    {
      "id": 43,
      "perguntas": "Se um ônibus sai de uma cidade A às 8h e chega à cidade B às 12h, quanto tempo dura a viagem?",
      "alternativas": "",
      "respostas": "(Resposta: 4 horas)"
    },
    {
      "id": 44,
      "perguntas": "Qual é o valor de π (pi) arredondado para duas casas decimais?",
      "alternativas": "",
      "respostas": "(Resposta: 3.14)"
    },
    {
      "id": 45,
      "perguntas": "Se um número é aumentado em 20% e, em seguida, diminuído em 20%, qual é o resultado final em relação ao número original?",
      "alternativas": "",
      "respostas": "(Resposta: 96% do número original)"
    },
    {
      "id": 46,
      "perguntas": "Se um triângulo equilátero tem um lado de 6 metros, qual é a medida de cada um dos seus ângulos internos?",
      "alternativas": "",
      "respostas": "(Resposta: 60 graus)"
    },
    {
      "id": 47,
      "perguntas": "Quantos graus tem a soma de todos os ângulos internos de um hexágono?",
      "alternativas": "",
      "respostas": "(Resposta: 720 graus)"
    },
    {
      "id": 48,
      "perguntas": "Se um número é dividido por 2 e depois subtraído 5, o resultado é 7. Qual é o número original?",
      "alternativas": "",
      "respostas": "(Resposta: 24)"
    },
    {
      "id": 49,
      "perguntas": "João tem o dobro da idade de Maria, e a soma de suas idades é 30 anos. Quantos anos tem cada um?",
      "alternativas": "",
      "respostas": "(Resposta: João tem 20 anos e Maria tem 10 anos)"
    },
    {
      "id": 50,
      "perguntas": "Se um número é multiplicado por 3 e depois adicionado 15, o resultado é 42. Qual é o número original?",
      "alternativas": "",
      "respostas": "(Resposta: 9)"
    },
    {
      "id": 51,
      "perguntas": "Se um ônibus transporta 40 passageiros e há 5 ônibus iguais, quantos passageiros no total?",
      "alternativas": "",
      "respostas": "(Resposta: 200 passageiros)"
    },
    {
      "id": 52,
      "perguntas": "Se o dobro de um número é igual a 50, qual é o número?",
      "alternativas": "",
      "respostas": "(Resposta: 25)"
    },
    {
      "id": 53,
      "perguntas": "Se uma pizza é dividida em 8 pedaços e você come 3 pedaços, qual a fração da pizza que você comeu?",
      "alternativas": "",
      "respostas": "(Resposta: 3/8)"
    },
    {
      "id": 54,
      "perguntas": "Se você é o filho único da sua mãe, como você se refere ao irmão do seu pai?",
      "alternativas": "",
      "respostas": "(Resposta: Tio)"
    },
    {
      "id": 55,
      "perguntas": "Se a irmã do seu pai é sua tia, qual é o grau de parentesco entre você e a filha dela?",
      "alternativas": "",
      "respostas": "(Resposta: Prima)"
    },
    {
      "id": 56,
      "perguntas": "Se a mãe do seu cônjuge é sua sogra, como você se refere ao marido da irmã do seu cônjuge?",
      "alternativas": "",
      "respostas": "(Resposta: Cunhado)"
    },
    {
      "id": 57,
      "perguntas": "Se o filho do seu irmão é seu sobrinho, como você se refere à mãe desse sobrinho?",
      "alternativas": "",
      "respostas": "(Resposta: Cunhada)"
    },
    {
      "id": 58,
      "perguntas": "Que país é conhecido como \"Terra do Sol Nascente\"?",
      "alternativas": "",
      "respostas": "(Resposta: Japão)"
    },
    {
      "id": 59,
      "perguntas": "Qual é o país mais populoso do mundo?",
      "alternativas": "",
      "respostas": "(Resposta: China)"
    },
    {
      "id": 60,
      "perguntas": "Em que continente está localizado o Egito?",
      "alternativas": "",
      "respostas": "(Resposta: África)"
    },
    {
      "id": 61,
      "perguntas": "Qual o país mais extenso da América do Sul?",
      "alternativas": "",
      "respostas": "(Resposta: Brasil)"
    },
    {
      "id": 62,
      "perguntas": "Quantas Copas do Mundo a seleção brasileira de futebol já venceu?",
      "alternativas": "",
      "respostas": "(Resposta: 5)"
    },
    {
      "id": 63,
      "perguntas": "Qual país sediou a primeira Copa do Mundo de futebol?",
      "alternativas": "",
      "respostas": "(Resposta: Uruguai, em 1930)"
    },
    {
      "id": 64,
      "perguntas": "Quantas bolas de ouro tem o jogador Lionel Messi",
      "alternativas": "",
      "respostas": "(Resposta: 8)"
    },
    {
      "id": 65,
      "perguntas": "Qual o nome do clube que coleciona mais títulos da UEFA Champions League?",
      "alternativas": "",
      "respostas": "(Resposta: Real Madrid)"
    },
    {
      "id": 66,
      "perguntas": "Qual é o animal mais rápido do mundo?",
      "alternativas": "",
      "respostas": "(Resposta: Falco Peregrinus, o falcão-peregrino)"
    },
    {
      "id": 67,
      "perguntas": "Qual é o maior mamífero terrestre?",
      "alternativas": "",
      "respostas": "(Resposta: Elefante africano)"
    },
    {
      "id": 68,
      "perguntas": "Quem são os únicos mamíferos capazes de voar?",
      "alternativas": "",
      "respostas": "(Resposta: Morcegos)"
    },
    {
      "id": 69,
      "perguntas": "Qual é o maior réptil do mundo?",
      "alternativas": "",
      "respostas": "(Resposta: Crocodilo de água salgada)"
    },
    {
      "id": 70,
      "perguntas": "Quanto tempo um tigre pode ficar sem comer?",
      "alternativas": "",
      "respostas": "(Resposta: Pode passar várias semanas sem comida)"
    },
    {
      "id": 71,
      "perguntas": "Que animal é conhecido por sua capacidade de camuflagem e mudança de cor?",
      "alternativas": "",
      "respostas": "(Resposta: Camaleão)"
    },
    {
      "id": 72,
      "perguntas": "Qual é o maior primata do mundo?",
      "alternativas": "",
      "respostas": "(Resposta: Gorila)"
    },
    {
      "id": 73,
      "perguntas": "Que mamífero é capaz de viver tanto na água quanto na terra?",
      "alternativas": "",
      "respostas": "(Resposta: Golfinho)"
    },
    {
      "id": 74,
      "perguntas": "Quem foi o primeiro homem na Bíblia?",
      "alternativas": "",
      "respostas": "(Resposta: Adão)"
    },
    {
      "id": 75,
      "perguntas": "Qual profeta foi engolido por uma baleia?",
      "alternativas": "",
      "respostas": "(Resposta: Jonas)"
    },
    {
      "id": 76,
      "perguntas": "Quem foi o filho mais novo de Jacó?",
      "alternativas": "",
      "respostas": "(Resposta: Benjamim)"
    },
    {
      "id": 77,
      "perguntas": "Qual foi o primeiro milagre de Jesus, de acordo com os Evangelhos?",
      "alternativas": "",
      "respostas": "(Resposta: Transformação de água em vinho em um casamento em Caná)"
    },
    {
      "id": 78,
      "perguntas": "Quem foi o rei que construiu o Templo de Jerusalém?",
      "alternativas": "",
      "respostas": "(Resposta: Salomão)"
    },
    {
      "id": 79,
      "perguntas": "Qual era o nome da esposa de Abraão?",
      "alternativas": "",
      "respostas": "(Resposta: Sara)"
    },
    {
      "id": 80,
      "perguntas": "Quem liderou os israelitas na conquista de Jericó?",
      "alternativas": "",
      "respostas": "(Resposta: Josué)"
    },
    {
      "id": 81,
      "perguntas": "Quais eram os nomes dos dois espiões que trouxeram um cacho de uvas gigante de Canaã?",
      "alternativas": "",
      "respostas": "(Resposta: Josué e Calebe)"
    },
    {
      "id": 82,
      "perguntas": "Qual profeta teve uma visão dos ossos secos que voltaram à vida?",
      "alternativas": "",
      "respostas": "(Resposta: Ezequiel)"
    },
    {
      "id": 83,
      "perguntas": "Quem foi o rei que escreveu muitos dos Salmos na Bíblia?",
      "alternativas": "",
      "respostas": "(Resposta: Davi)"
    },
    {
      "id": 84,
      "perguntas": "Quem foi o profeta que desafiou os profetas de Baal no Monte Carmelo?",
      "alternativas": "",
      "respostas": "(Resposta: Elias)"
    },
    {
      "id": 85,
      "perguntas": "Qual era a profissão de Mateus antes de se tornar um dos doze apóstolos?",
      "alternativas": "",
      "respostas": "(Resposta: Cobrador de impostos)"
    },
    {
      "id": 86,
      "perguntas": "Quem foi a esposa de Isaque?",
      "alternativas": "",
      "respostas": "(Resposta: Rebeca)"
    },
    {
      "id": 87,
      "perguntas": "Qual é o quinto livro do Antigo Testamento?",
      "alternativas": "",
      "respostas": "(Resposta: Deuteronômio)"
    },
    {
      "id": 88,
      "perguntas": "Qual o nome do profeta que foi engolido por um grande peixe?",
      "alternativas": "",
      "respostas": "(Resposta: Jonas)"
    },
    {
      "id": 89,
      "perguntas": "Qual era o nome da esposa de Jó?",
      "alternativas": "",
      "respostas": "(Resposta: A esposa de Jó não é nomeada na Bíblia)"
    },
    {
      "id": 90,
      "perguntas": "Quem era o irmão mais velho de Moisés?",
      "alternativas": "",
      "respostas": "(Resposta: Arão)"
    },
    {
      "id": 91,
      "perguntas": "Qual é o livro que descreve a história de Rute?",
      "alternativas": "",
      "respostas": "(Resposta: O Livro de Rute)"
    },
    {
      "id": 92,
      "perguntas": "Quem foi o discípulo que traiu Jesus por trinta moedas de prata?",
      "alternativas": "",
      "respostas": "(Resposta: Judas Iscariotes)"
    },
    {
      "id": 93,
      "perguntas": "Qual foi o sinal do pacto que Deus fez com Noé?",
      "alternativas": "",
      "respostas": "(Resposta: O arco-íris)"
    },
    {
      "id": 94,
      "perguntas": "Quem foi o profeta que viu um vale cheio de ossos secos e recebeu a ordem de profetizar sobre eles?",
      "alternativas": "",
      "respostas": "(Resposta: Ezequiel)"
    },
    {
      "id": 95,
      "perguntas": "Qual foi o destino final de Elias, de acordo com a Bíblia?",
      "alternativas": "",
      "respostas": "(Resposta: Elias foi arrebatado ao céu em um redemoinho.)"
    },
    {
      "id": 96,
      "perguntas": "Quem teve as visões registradas no livro de Apocalipse?",
      "alternativas": "",
      "respostas": "(Resposta: João)"
    },
    {
      "id": 97,
      "perguntas": "Qual é o quarto livro do Novo Testamento, que conta a história da vida, morte e ressurreição de Jesus?",
      "alternativas": "",
      "respostas": "(Resposta: O Evangelho de João)"
    },
    {
      "id": 98,
      "perguntas": "Quem foi o primeiro rei de Israel, ungido por Samuel?",
      "alternativas": "",
      "respostas": "(Resposta: Saul)"
    },
    {
      "id": 99,
      "perguntas": "Qual era o nome da mulher de Ananias, que foi repreendida por esconder parte do dinheiro que eles deveriam doar à comunidade cristã primitiva?",
      "alternativas": "",
      "respostas": "(Resposta: Safira)"
    },
    {
      "id": 100,
      "perguntas": "Quem interpretou o sonho do faraó no Antigo Testamento?",
      "alternativas": "",
      "respostas": "(Resposta: José)"
    },
    {
      "id": 101,
      "perguntas": "Qual é o menor livro da Bíblia?",
      "alternativas": "",
      "respostas": "(Resposta: Segunda carta de João)"
    },
    {
      "id": 102,
      "perguntas": "Qual é o maior livro da Bíblia?",
      "alternativas": "",
      "respostas": "(Resposta: Salmos)"
    },
    {
      "id": 103,
      "perguntas": "Quantas pragas foram enviadas ao Egito?",
      "alternativas": "a) 7 Pragas b) 10 Pragas c) 3 Pragas",
      "respostas": "b) 10 Pragas. Referência bíblica: Êxodo capítulo 7 ao 10."
    },
    {
      "id": 104,
      "perguntas": "Quem foi lançado na cova dos leões?",
      "alternativas": "a) Paulo b) José c) Daniel",
      "respostas": "c) Daniel. Referência bíblica: Daniel 6:16."
    },
    {
      "id": 105,
      "perguntas": "Qual instrumento Davi gostava de tocar?",
      "alternativas": "a) Tambor b) Harpa c) Flauta",
      "respostas": "b) Harpa. Referência bíblica: 1 Samuel 16:23."
    },
    {
      "id": 106,
      "perguntas": "Na parábola do semeador, quais sementes que cresceram e deram uma boa colheita?",
      "alternativas": "a) As sementes que caíram nas pedras. b) As sementes que caíram em boa terra. c) As sementes que caíram entre os espinhos.",
      "respostas": "b) As sementes que caíram em boa terra. Referência bíblica: Mateus 13:23."
    },
    {
      "id": 107,
      "perguntas": "Jesus comparou o Reino de Deus a qual semente?",
      "alternativas": "a) Ao grão de mostarda. b) Ao grão de milho. c) A semente de uva.",
      "respostas": "a) Ao grão de mostarda. Referência bíblica: Mateus 13:31-32."
    },
    {
      "id": 108,
      "perguntas": "Quem são conhecidos como os patriarcas na Bíblia?",
      "alternativas": "a) Jesus, Maria e José b) Pedro, João e Tiago c) Abraão, Isaque e Jacó",
      "respostas": "c) Abraão, Isaque e Jacó. Referência bíblica: Êxodo 3:6."
    },
    {
      "id": 109,
      "perguntas": "Quem foi o 'assistente' do profeta Elias?",
      "alternativas": "a) Eliseu b) Enoque c) Jonas",
      "respostas": "Eliseu. Referência bíblica: 1 Reis 19:19-21."
    },
    {
      "id": 110,
      "perguntas": "Na transfiguração, quem apareceu ao lado de Jesus?",
      "alternativas": "a) Enoque e Elias b) Elias e Moisés c) Abraão e Isaque",
      "respostas": "b) Elias e Moisés. Referência bíblica: Lucas 9:29-30."
    },
    {
      "id": 111,
      "perguntas": "Qual é o último capítulo da Bíblia?",
      "alternativas": "a) Apocalipse 22 b) Apocalipse 16 c) Malaquias 4",
      "respostas": "b) Apocalipse 22"
    },
    {
      "id": 112,
      "perguntas": "O que aconteceu quando Paulo e Silas louvavam na prisão?",
      "alternativas": "a) Houve um terremoto na prisão e todas as portas se abriram! b) Os saldados pediram para que os dois se calassem. c) Os dois foram agredidos pelos outros prisioneiros.",
      "respostas": "a) Houve um terremoto na prisão e todas as portas se abriram! Referência bíblica: Atos 16:25-26."
    },
    {
      "id": 113,
      "perguntas": "Quem era a mãe de Samuel?",
      "alternativas": "a) Isabel b) Maria c) Ana",
      "respostas": "c) Ana. Referência bíblica: 1 Samuel 1:20."
    },
    {
      "id": 114,
      "perguntas": "Quem era a mãe de Ismael, filho de Abraão?",
      "alternativas": "a) Sara b) Sete c) Hagar",
      "respostas": "c) Hagar. Referência bíblica: Gênesis 16:15."
    },
    {
      "id": 115,
      "perguntas": "Quando Moisés foi colocado num cesto e lançado no rio, quem o encontrou?",
      "alternativas": "a) A rainha de Sabá. b) A filha do faraó. c) Joquebede",
      "respostas": "b) A filha do faraó. Referência bíblica: Êxodo 2:5-6."
    },
    {
      "id": 116,
      "perguntas": "Quem foi o imperador da Babilônia?",
      "alternativas": "a) Jeocaz b) Nabucodonosor c) Faraó",
      "respostas": "b) Nabucodonosor. Referência bíblica: 2 Reis 24:1-2."
    },
    {
      "id": 117,
      "perguntas": "Quem negou Jesus 3 vezes?",
      "alternativas": "a) Judas b) Pedro c) André",
      "respostas": "b) Pedro. Referência bíblica: Marcos 14:72."
    },
    {
      "id": 118,
      "perguntas": "Como morreu Judas?",
      "alternativas": "a) Assassinado b) Acidente c) Suicídio",
      "respostas": "c) Suicídio. Referência bíblica: Mateus 27:5."
    },
    {
      "id": 119,
      "perguntas": "Qual foi o primeiro nome de Abraão?",
      "alternativas": "a) Israel b) Abrão c) Adão",
      "respostas": "b) Abrão. Referência bíblica: Gênesis 17:5."
    },
    {
      "id": 120,
      "perguntas": "Quanto tempo durou a chuva do dilúvio?",
      "alternativas": "a) 7 dias e 7 noites b) 40 dias e 40 noites c) 3 dias e 3 noites",
      "respostas": "b) 40 dias e 40 noites. Referência bíblica: Gênesis 7:17."
    },
    {
      "id": 121,
      "perguntas": "Quem ajudou Jesus a carregar a cruz?",
      "alternativas": "a) João b) Simão Cirineu c) Timóteo",
      "respostas": "b) Simão Cirineu. Referência bíblica:Marcos 15:21."
    },
    {
      "id": 122,
      "perguntas": "Antes de ser Rei, qual era o trabalho de Davi?",
      "alternativas": "a) Caçador b) Pastor de ovelhas c) Carpinteiro",
      "respostas": "Pastor de ovelhas"
    },
    {
      "id": 123,
      "perguntas": "Em que cidade nasceu Jesus?",
      "alternativas": "a) Jerusalém b) Belém c) Samaria",
      "respostas": "b) Belém. Referência bíblica: Mateus 2:1."
    },
    {
      "id": 124,
      "perguntas": "O que acontece logo depois que Pedro negou a Jesus pela terceira vez?",
      "alternativas": "a) o véu do templo se rasgou b) o céu ficou em trevas c) o galo cantou",
      "respostas": "c) o galo cantou. Referência bíblica: Mateus 26:74."
    },
    {
      "id": 125,
      "perguntas": "Sansão se apaixonou por qual mulher?",
      "alternativas": "a) Rute b) Dalila c) Sara",
      "respostas": "b) Dalila. Referência bíblica: Juízes 16:4."
    },
    {
      "id": 126,
      "perguntas": "Quem pediu para andar nas águas com Jesus?",
      "alternativas": "a) Pedro b) Tiago c) João",
      "respostas": "a) Pedro. Referência bíblica: Mateus 14:28-29."
    },
    {
      "id": 127,
      "perguntas": "Lázaro foi ressuscitado depois de quantos dias?",
      "alternativas": "a) 10 b) 3 c) 4",
      "respostas": "c) 4. Referência bíblica: João 11:38-39."
    },
    {
      "id": 128,
      "perguntas": "Qual foi o primeiro nome do Apóstolo Paulo?",
      "alternativas": "a) Saulo b) Tiago c) Barnabé",
      "respostas": "a) Saulo. Referência bíblica: Atos 9:4-5."
    },
    {
      "id": 129,
      "perguntas": "O que quer dizer \"Rabi\"?",
      "alternativas": "a) Rei b) Pai c) Mestre",
      "respostas": "c) Mestre. Referência bíblica: João 1:38."
    },
    {
      "id": 130,
      "perguntas": "Aquele que está em Cristo nova criatura é; as coisas velhas já passaram;...",
      "alternativas": "a) eis que passaram da morte para a vida.\" b) eis que já ressuscitou dos mortos.\" c) eis que tudo se fez novo.",
      "respostas": "c) eis que tudo se fez novo.\" Referência bíblica: 2 Coríntios 5:17."
    },
    {
      "id": 131,
      "perguntas": "Quem subiu na árvore para ver Jesus passar?",
      "alternativas": "a) Ananias b) Tadeu c) Zaqueu",
      "respostas": "c) Zaqueu. Referência bíblica: Lucas 19:2-5."
    },
    {
      "id": 132,
      "perguntas": "Complete a frase: \"Cedo é na hora e nhora é ...",
      "alternativas": "",
      "respostas": "Atrasado"
    },
    {
      "id": 133,
      "perguntas": "Qual foi o Apóstolo que ficou temporariamente cego?",
      "alternativas": "a) Tiago b) Paulo c) Pedro",
      "respostas": "b) Paulo enquanto se chamava Saulo. Referência bíblica: Atos 9:8"
    },
    {
      "id": 134,
      "perguntas": "Jesus curou 10 leprosos. Quantos voltaram para agradecer?",
      "alternativas": "a) 10 b) 1 c) 3",
      "respostas": "b) 1. Referência bíblica: Lucas 17:11-19."
    },
    {
      "id": 135,
      "perguntas": "Quem foi colocado num cesto e lançado no rio ainda quando era bebê?",
      "alternativas": "a) Jesus b) Jonas c) Moisés",
      "respostas": "c) Moisés. Referência bíblica: Êxodo 2:1-10."
    },
    {
      "id": 136,
      "perguntas": "Quem derrotou Golias?",
      "alternativas": "a) Josué b) Sansão c) Davi",
      "respostas": "c) Davi. Referência bíblica: 1 Samuel 17:50."
    },
    {
      "id": 137,
      "perguntas": "Qual era o nome da montanha onde Moisés recebeu os 10 Mandamentos?",
      "alternativas": "a) Monte Horebe b) Monte Sinai c) Monte das Oliveiras",
      "respostas": "b) Monte Sinai. Referência bíblica: Êxodo 19:18."
    },
    {
      "id": 138,
      "perguntas": "Quem se tornou uma coluna de sal depois que olhou para trás?",
      "alternativas": "a) Maria Madalena b) Mulher de Ló c) Nabucodonosor",
      "respostas": "b) Mulher de Ló. Referência bíblica: Gênesis 19:26."
    },
    {
      "id": 139,
      "perguntas": "Quem foi escolhido pelos discípulos para substituir Judas Iscariotes ?",
      "alternativas": "a) Matias b) Paulo c) Barnabé",
      "respostas": "a) Matias. Referência bíblica: Atos 1:26."
    },
    {
      "id": 140,
      "perguntas": "Qual animal falou com Balaão?",
      "alternativas": "a) Doguinho caramelo b) Jumenta c) Tartaruga Ninja",
      "respostas": "b) Jumenta. Referência bíblica: Números 22:28."
    },
    {
      "id": 141,
      "perguntas": "Qual o nome e a idade da pessoa mais velha mencionada na Bíblia?",
      "alternativas": "A) Enos, viveu 905 anos\nB) Noé, viveu 990 anos\nC) Matusalém, viveu 969 anos\nD) Rainha Ester, viveu 859 anos",
      "respostas": "Letra C - Matusalém (ou Metusalém) viveu 969 anos. Ele era filho de Enoque, que andou com Deus e foi o avô de Noé."
    },
    {
      "id": 142,
      "perguntas": "Qual desses não teve o seu nome mudado na Bíblia?",
      "alternativas": "A) Sara\nB) Abraão\nC) Jacó\nD) Davi\nE) Pedro",
      "respostas": "Letra D - Davi não teve seu nome mudado. Sara era Sarai (Gn.17:15), Abraão era Abrão (Gn. 17:5), Jacó tornou-se Israel (Gn. 32.28) e Pedro era Simão (João 1:42)"
    },
    {
      "id": 143,
      "perguntas": "Qual dos nomes de Deus Moisés deveria dar aos israelitas, quando falasse de quem tinha lhe enviado?",
      "alternativas": "A) \"Elohim\"\nB) \"El Shadday\"\nC) \"Eu sou o que sou\"\nD) \"Eu sou o Senhor",
      "respostas": "Letra C - \"Eu sou o que Sou\" foi a resposta dada por Deus a Moisés, quando perguntou sobre o Seu nome. Cf. Êxodo 3:13-14."
    },
    {
      "id": 144,
      "perguntas": "Sobre Samuel, o que não é verdade?",
      "alternativas": "A) Sua mãe se chamava Ana\nB) Ungiu 3 reis de Israel: José, Saul e Davi\nC) Sucedeu o profeta Eli\nD) Teve uma visão enquanto ainda era muito novo",
      "respostas": "Letra B - O profeta Samuel ungiu a Saul e Davi como reis de Israel. José não foi rei. Foi governador no Egito muitos anos antes."
    },
    {
      "id": 145,
      "perguntas": "Enquanto pastor de ovelhas, Davi protegeu seu rebanho de dois animais perigosos. Quais?",
      "alternativas": "A) serpente e dromedário\nB) urso e leão\nC) cobra e lobo\nD) urso e escorpião",
      "respostas": "Letra B - Um leão e um urso foram os animais que Davi matou. Cf. 1 Samuel 17:34-37"
    },
    {
      "id": 146,
      "perguntas": "Qual o nome da ilha onde João escreveu o livro de Apocalipse?",
      "alternativas": "A) Ilha de Creta\nB) Ilha de Malta\nC) Ilha de Patmos\nD) Ilha de Pérgamo",
      "respostas": "Letra C - Na ilha de Patmos, João teve a visão do que acontecerá no final dos tempos. Cf. Apocalipse 1:9"
    },
    {
      "id": 147,
      "perguntas": "Deus mandou que Abraão olhasse para o quê, quando lhe fez uma promessa?",
      "alternativas": "A) Para o arco-íris no céu, símbolo da aliança com Abraão\nB) Para a areia do mar, para que contasse os grãos de areia, se pudesse\nC) Para as estrelas do céu, para que as contasse, se pudesse\nD) Para a floresta da terra prometida, para contar as árvores frutíferas",
      "respostas": "Letra C - Deus mandou contar as estrelas do céu, se é que ele poderia contá-las, como uma ilustração da grande descendência que daria a Abraão através de Isaque."
    },
    {
      "id": 148,
      "perguntas": "Quem eram os dois irmãos de Moisés?",
      "alternativas": "A) Esaú e Jacó\nB) Miriã e Arão\nC) Josué e Calebe\nD) Priscila e Áquila",
      "respostas": "Letra B - Miriã (ou Miriam) e Arão (Aarão) eram os irmãos de Moisés. Cf. Êxodo 15:20-21 e Êxodo 6:16-20."
    },
    {
      "id": 149,
      "perguntas": "1. A Bíblia é composta por quantos livros?",
      "alternativas": "A) 88 livros\nB) 37 livros\nC) 66 livros\nD) 100 livros",
      "respostas": "Letra C - A Bíblia é uma coletânea composta por 66 livros, que foram escritos em hebraico, aramaico e grego e vai de Gênesis a Apocalipse."
    },
    {
      "id": 150,
      "perguntas": "De acordo com 2 Timóteo 3:16, toda a Escritura é:",
      "alternativas": "A) ditada por Deus, letra por letra\nB) baseada nos sonhos dos profetas e apóstolos\nC) inspirada por Deus e útil para seus propósitos\nD) transcrita por anjos para ensinar aos homens",
      "respostas": "Letra C - Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça. (2 Timóteo 3:16)"
    },
    {
      "id": 151,
      "perguntas": "A Bíblia é dividida em:",
      "alternativas": "A) 3 partes: Pentateuco, livros históricos e Evangelhos\nB) 2 partes: Antigo Testamento e Novo Testamento\nC) 3 partes: Velho Testamento, Salmos e Novo Testamento\nD) 2 partes: Livros da Lei e Apocalipse",
      "respostas": "Letra B - A Bíblia é dividida em Antigo e Novo Testamentos, uma separação dos livros escritos antes e depois de Jesus Cristo. O Velho Testamento é formado por 39 livros e vai de Gênesis a Malaquias. O Novo Testamento é composto de 27 livros e vai de Mateus até Apocalipse."
    },
    {
      "id": 152,
      "perguntas": "Qual é o menor versículo da Bíblia?",
      "alternativas": "A) João 11:35\nB) Ester 8:9\nC) Êxodo 20:13\nD) Jó 3:2",
      "respostas": "Letra D - Considerando o número de caracteres em nosso idioma, Jó 3:2 é o menor: \"Disse Jó:\" - (versão Almeida Revista Atualizada -ARA), ou \"dizendo:\" (Nova Versão Internacional-NVI), contendo apenas 7 caracteres."
    },
    {
      "id": 153,
      "perguntas": "Qual é o maior e o menor capítulos da Bíblia?",
      "alternativas": "A) O maior capítulo é de Isaías 66 e o menor capítulo é Salmo 2\nB) O maior é o Salmo 119 e o menor é o Salmo 117\nC) O maior capítulo é Lamentações de Jeremias 3 e o menor é 2ª carta de João\nD) O maior é o Salmo 150 e o menor é Judas 1",
      "respostas": "Letra B - De acordo com os originais, o Salmo 119 é o mais extenso capítulo de toda a Bíblia. Trata-se de um salmo didático, formado por acróstico do alfabeto hebraico e possui 176 versículos. Já o menor capítulo é o Salmo 117. Trata-se de um hino de louvor ao Senhor, com 2 versos apenas."
    },
    {
      "id": 154,
      "perguntas": "Com que idade Jesus começou seu ministério?",
      "alternativas": "A) Com aproximadamente 30 anos\nB) Com 18 anos\nC) Com 12 anos\nD) Com aproximadamente 7 anos",
      "respostas": "Letra A - Jesus iniciou seu ministério com cerca de 30 anos. Cf. Lucas 3:23. Entre os judeus por volta dessa idade é que um homem era considerado maduro."
    },
    {
      "id": 155,
      "perguntas": "O nome de Jesus é o nome acima de todo os nomes (Fp. 2:9). Cristo significa:",
      "alternativas": "A) O sobrenome que Jesus recebeu da família de José, seu pai terreno.\nB) \"Ungido\", \"consagrado\" do grego, equivalente a 'Messias' no hebraico.\nC) Um nome da família de Maria que Jesus recebeu na infância.\nD) Um título hebraico que significa: Rei dos judeus.",
      "respostas": "Letra B - Cristo é o título derivado do grego que significa o \"Ungido, consagrado\", equivalente a Messias, do hebraico. Com o tempo, unido a Jesus deu a forma de nome próprio do Senhor Jesus Cristo."
    },
    {
      "id": 156,
      "perguntas": "Qual mulher foi tida por bêbada enquanto orava pedindo um filho ao Senhor?",
      "alternativas": "A) Raquel\nB) Ana\nC) Abigail\nD) Sara",
      "respostas": "Letra B - Ana orou e chorou diante de Deus, mas o sacerdote Eli pensou que estivesse embriagada. Ver 1 Samuel 1:9-14."
    },
    {
      "id": 157,
      "perguntas": "Quem era a mulher que ameaçou de morte ao profeta Elias?",
      "alternativas": "A) Jerusa\nB) A médium de En-Dor\nC) Jezabel\nD) A viúva de Sarepta",
      "respostas": "Letra C - A rainha Jezabel, esposa de Acabe, depois do confronto com os 450 profetas de Baal no monte Carmelo. Ver 1 Reis 19:1-3."
    },
    {
      "id": 158,
      "perguntas": "Quem foi a jovem que deu água a Eliezer e aos seus camelos, na Mesopotâmia?",
      "alternativas": "A) Milca\nB) Raquel\nC) Rute\nD) Rebeca",
      "respostas": "Letra D - Rebeca, a bonita jovem que tirava água na fonte deu água ao servo de Abraão e aos seus camelos. Ver: Gênesis 24:15-19."
    },
    {
      "id": 159,
      "perguntas": "Quantos anos viveu Sara?",
      "alternativas": "",
      "respostas": "Sara morreu com 127 anos. Ver Gênesis 23:1."
    },
    {
      "id": 160,
      "perguntas": "Qual era o ofício (profissão) de Priscila?",
      "alternativas": "A) Vendedora de tecido de púrpura\nB) Fabricante de tendas\nC) Fabricante de ídolos\nD) Costureira de vestidos",
      "respostas": "Letra B - Priscila e Áquila, seu marido, eram fabricantes de tendas. Ver: Atos 18:2-3."
    },
    {
      "id": 161,
      "perguntas": "Qual o nome da nora de Noemi?",
      "alternativas": "A) Joquebede\nB) Isabel\nC) Rute\nD) Raquel\nE) Ana",
      "respostas": "Letra C - Rute era a nora de Noemi, moabita que se converteu e tornou-se numa ascendente da linhagem real de Davi. Ver: Rute 1-4."
    },
    {
      "id": 162,
      "perguntas": "Qual dos profetas fez flutuar o ferro de um machado?",
      "alternativas": "A) Elias\nB) Eliseu\nC) Isaías\nD) Ezequiel",
      "respostas": "Letra B - Eliseu foi quem fez flutuar um machado. Foi sucessor de Elias e realizou muitos milagres nos tempos do Antigo Testamento. Ver: 2 Reis 6:1-7."
    }
  ]

  export default data