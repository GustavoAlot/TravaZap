async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
  Cidade de Deus
Bráulio Mantovani
Baseado no romance de Paulo Lins
12º tratamento
Dezembro 2001
1 EXT. CASA DE ALMEIDINHA - DIA 1
Abrimos com a imagem de um FACÃO sendo afiado.
CARACTERES em superposição: 1981
Ouve-se o murmúrio de VOZES alegres, vozes CANTANDO um samba
acompanhado de um BATUQUE. Não vemos as pessoas. Mas os sons
deixam claro que se trata de um ambiente festivo.
A letra do samba tem como tema: comida.
MÃOS NEGRAS amarram com um barbante a PERNA de um GALO.
O galo é imponente e vistoso. Alternamos o galo --incomodado por
ter a perna amarrada -- a imagens que sugerem a preparação de um
almoço:
ÁGUA FERVENDO numa enorme panela.
O galo parece reagir à imagem anterior.
Batatas sendo descascadas por MÃOS de uma mulher negra.
O galo reage como se entendesse a situação: vai virar comida.
GALINHAS MORTAS sendo depenadas por MÃOS de mulheres negras.
O galo reage. Ele tenta libertar a perna amarrada ao barbante.
MÃO masculina negra percute o couro de um pandeiro.
A letra do samba faz referência explícita ao tema comida.
O galo parece entender que seu fim está próximo.
Um FACÃO sendo afiado por mãos negras masculinas. A faca vai
CRESCENDO, tornando-se cada vez mais ameaçadora.
O galo se desespera. Luta. E escapa.
ALMEIDINHA, o negro que segura o facão, percebe a fuga do galo e
dá o alarme.
ALMEIDINHA
O galo fugiu!
Pela primeira vez, vemos a casa de Almeidinha do lado de fora.
Trata-se de um lugar pobre, uma casa de alvenaria da Cidade de
Deus. A festa está acontecendo no quintal.
A fuga do galo provoca um grande ALVOROÇO entre os convidados:
na maioria homens, JOVENS, NEGROS e MULATOS. Apenas alguns são
BRANCOS. Estão quase todos de calção e chinelo.
Dezenas de bandidos saem correndo atrás do galo. Eles fazem
parte da quadrilha de Zé Pequeno. Todos berrando:
(CONT.)
VOZES DOS BANDIDOS
Pega o galo, pega o galo!
2 EXT. RUA PRÓXIMA - DIA 2
BUSCA-PÉ, o narrador da história, tem nas mãos uma câmera
fotográfica profissional. É negro e tem aproximadamente 18 anos.
Ao lado dele o amigo BARBANTINHO.
Eles caminham por uma rua do conjunto
BARBANTINHO
Aí, Busca-Pé... Tu acha mesmo que os cara
vão te dar emprego no jornal se tu
conseguir tirar essa foto?
BUSCA-PÉ
Eu tenho que arriscar.
BARBANTINHO
Porra! Tu tá arriscando é a vida. Por causa
de uma foto, mermão! Dá um tempo!
MONTAGEM PARALELA
Intercalamos a conversa de Barbantinho e Busca-Pé às imagens dos
bandidos perseguindo o galo pelas vielas da Cidade de Deus:
VIELA - BANDIDOS
Com ZÉ PEQUENO -- gordinho, pescoço socado e cabeçudo -- à
frente, os bandidos perseguem o galo pelas vielas da Cidade de
Deus. Os bandidos estão se divertindo com a situação.
Zé Pequeno aparece em close imediatamente após Busca-Pé dizer
“daquele filho da puta”.
A perseguição é cheia de peripécias, com o galo "dando um baile"
nos perseguidores.
Durante a perseguição, passamos por alguns dos caminhos
tortuosos da Cidade de Deus: casas simples, algumas casas muito
pobres, ruas mal cuidadas, moradores na maioria negros, pobres
e ASSUSTADOS com a correria dos bandidos.
RUA - BUSCA-PÉ E BARBANTINHO
BARBANTINHO (CONT.)
Na boa, Busca-Pé. Eu acho que os cara do
jornal tão de sacanagem. Eles nunca vão te
dar emprego.
BUSCA-PÉ
Pô, Barbantinho. Se conseguir essa foto, eu
vou ficar na moral com os caras, tá
entendendo?
pág.2.
1 CONT.: 1
(CONT.)
BARBANTINHO
Tu tá falando dum jeito que parece até que
a gente tá num episódio da Missão
Impossível.
BUSCA-PÉ
Pior é que é.
VIELA - BANDIDOS
Zé Pequeno, ao dobrar uma viela, tromba com um VENDEDOR de
PANELAS. Zé Pequeno cai no meio das panelas. Dá sua RISADA FINA,
ESTRIDENTE E RÁPIDA.
Ele se levanta, e começa a ESPANCAR violentamente o vendedor de
panelas.
Zé Pequeno tira de trás do calção uma PISTOLA. Parece que ele
vai matar o coitado. Mas, em vez disso, aponta o revólver para o
alto, e dá a ordem:
ZÉ PEQUENO
Senta o dedo no galo!
Imediatamente, todos os bandidos sacam suas armas e correm atrás
do galo, que está se aproximando cada vez mais a uma esquina.
RUA - BUSCA-PÉ E BARBANTINHO
BARBANTINHO
Porra, Busca-Pé! Vamo sai saindo. Se tu
encontrar o cara? Ele deve tá querendo te
matar.
BUSCA-PÉ
Barbantinho, se liga: a última coisa que eu
queria na minha vida era ter que ficar cara
a cara com aquele bandido de novo.
Neste exato momento, as duas ações paralelas se encontram: o
galo vira a esquina. E atrás dele surgem Zé Pequeno e sua
gangue.
Barbantinho arregala os olhos. Busca-Pé levanta um pouco a
câmera fotográfica em direção ao olho mas não consegue levar o
gesto até o final. Ele fica paralisado, olhando para Zé Pequeno
que aponta a arma para Busca-Pé e grita:
ZÉ PEQUENO
Segura o galo.
Busca-Pé assume a pose de goleiro, fica meio abobalhado,
tentando agarrar o galo, que passa no meio das pernas dele.
Uma MULHER que empurra um carrinho de bebê vê a cena e se afasta
apressadamente.
pág.3.
2 CONT.: 2
(CONT.)
Zé Pequeno avança em direção a Busca-Pé.
Busca-Pé está apavorado. Barbantinho, paralisado.
Zé Pequeno pára de repente. Todos os bandidos apontam suas armas
para alguém que está atrás de Busca-Pé.
Busca-Pé olha para trás e vê uma PATRULHA de 6 policiais.
À frente da patrulha está o detetive Cabeção -- nordestino e malencarado.
Busca-Pé ainda na pose de goleiro desajeitado. A imagem congela.
BUSCA-PÉ (V.O.)
Na Cidade de Deus, não dá pra saber o que é
pior: encarar os bandidos ou a polícia. É
um bangue-bangue sem mocinho. E sempre foi
assim... Desde que eu...
FUSÃO PARA:
3 EXT. CAMPINHO - DIA 3
Um grupo de garotinhos jogando futebol. Entre eles estão os
meninos Busca-Pé e Barbantinho. A idade dos garotos varia de 8 a
10 anos.
CARACTERES em superposição: ANOS 60
O MENINO BUSCA-PÉ está jogando como goleiro. Seus gestos são
idênticos aos do jovem Busca-Pé tentando agarrar o galo na cena
anterior.
A bola vem na direção dele. E passa por entre as pernas do
menino, que se revela um frangueiro.
BUSCA-PÉ (V.O.)
(...) me conheço por gente.
Gritos da molecada. O jogo continua.
BUSCA-PÉ (V.O. cont.) (cont.)
Muito malandro já chegou na Cidade de Deus
com experiência ou com disposição pra
bandidagem...
PERTO DALI
DADINHO e BENÉ -- também garotos na faixa dos 8 aos 10 anos,
todos negros -- se aproximam do jogo.
Barbantinho agarra a bola assustado.
pág.4.
2 CONT.: (2) 2
(CONT.)
BARBANTINHO
Miou o jogo!
DADINHO
Aí, molecada! Deixa eu dar uns toque nessa
bola manera aí!
STILL de Dadinho em CLOSE.
BUSCA-PÉ (V.O.)
Dadinho, por exemplo, parecia que já tinha
nascido bandido.
Barbantinho, nervoso, joga a bola para Busca-Pé, que fica
perplexo.
Dadinho se aproxima de Busca-Pé de maneira ameaçadora.
Bené se coloca entre os dois. Não é tão assustador quanto
Dadinho. Ele fala para Busca-Pé.
BENÉ
Como é que tu chama?
BUSCA-PÉ
Busca-Pé.
STILL de Bené e Busca-Pé.
BUSCA-PÉ (V.O.) (cont.)
Pra quem ainda não percebeu, esse aí com o
Bené sou eu.
Imagem volta a ganhar movimento.
BENÉ
Não deixa o Dadinho chuta tua bola, não,
que ele é perna-de-pau. No primeiro chute
ele fura a bola.
Busca-Pé hesita. Não entrega a bola mas não consegue disfarçar o
medo que sente de Dadinho.
Busca-Pé começa a recuar, andando para trás, preparando-se para
correr.
Logo nos primeiros passos, Busca-Pé tromba com alguém maior do
que ele: CABELEIRA, um bandido de uns 18 anos, que veste uma
CAMISETA BRANCA.
Cabeleira toma a bola de Busca-Pé.
Dadinho aplaude.
DADINHO
Aí, Cabeleira! Mostra que tu sabe da arte.
pág.5.
3 CONT.: 3
(CONT.)
Cabeleira afasta os meninos com um gesto autoritário.
CABELEIRA
Vamo afastando, molecada!
Todos formam um círculo em volta do bandido.
Cabeleira faz embaixadas com a bola de futebol revelando uma
extrema habilidade...
BUSCA-PÉ (V.O.)
Pra contar a história da Cidade de Deus, eu
tenho começar pela história desse cara aí:
o Cabeleira!
Chegam ALICATE e MARRECO, de armas na mão. Marreco carrega
também uma CAMISETA VERMELHA.
MARRECO
Qualé, cumpádi? O caminhão do gás tá quase
chegando! Tu vai ficá aí de bobó?
Cabeleira esboça um leve sorriso, sem perder o controle da bola.
Há uma troca de olhares entre Marreco e Busca-Pé: um ar de
cumplicidade.
ALICATE
Cumé que é, Cabeleira? Num vai dizê que tu
vai negá fogo?
Cabeleira chuta bola com força, para o alto. Imitando os
trejeitos de um pistoleiro do velho oeste, saca a arma,
escondida na parte de trás do calção, e dispara para o alto.
A bola de futebol EXPLODE.
4 ARTE - CARTELA 4
Texto enche a tela: A HISTÓRIA DE CABELEIRA
5 EXT. RUA DO CONJUNTO - DIA 5
Um CAMINHÃO DE GÁS cruza uma esquina ao longe.
Quase na outra esquina, entram Cabeleira, Marreco e Alicate --
todos armados e usando camisetas vermelhas --, junto com Dadinho
e Bené. Os maiores amarram camisetas na cabeça para cobrir parte
do rosto, imitando bandidos de westerns, de quem copiam também
os trejeitos.
Eles cortam o caminho pelos quintais para se aproximarem e
surpreenderem o caminhão.
Dadinho e Bené também põe a camiseta sobre o rosto, para imitar
os mais velhos.
pág.6.
3 CONT.: (2) 3
(CONT.)
Marreco atravessa a rua na frente do caminhão. Põe a mão atrás
para puxar a arma.
DENTRO DO CAMINHÃO
Mão na buzina. Entendemos que o motorista acelerou.
NA RUA
Marreco se esquiva para não ser atropelado.
No meio das casas, Cabeleira dá um tiro para o alto e comanda o
ataque. O caminhão está cercado por meninos de todos os lados.
Cabeleira pára na frente do caminhão e aponta a arma para
frente.
Marreco e Alicate entram no enquadramento enquanto texto está
apresentando cada um.
BUSCA-PÉ (V.O.)
Cabeleira era o cara que mandava no Trio
Ternura. E o Trio Ternura era ele mais o
Alicate e o...
(pausa, tom triste)
Marreco...
Cabeleira dá um tiro para o alto.
CABELEIRA
Todo mundo parado aí! O primeiro que se
mexê leva bala!
MARRECO
E hoje tem gás de graça pra todo mundo.
Os moradores dão vivas.
Na fila dos moradores, estão LÚCIA MARACANÃ e BERENICE.
Lúcia Maracanã saúda os bandidos: ela reconhece o bando mesmo
com eles usando os lenços sobre o rosto.
Motorista e ajudante saem com as mãos para cima
Abrem a caçamba e começam saquear o caminhão. Alicate, ajudado
por um morador entrega um botijão para Berenice e Lúcia.
Berenice olha para Cabeleira enquanto ele dá um tranco no
ajudante por tentar esconder parte do dinheiro.
CABELEIRA
Tu tá disposto a morrer pra salvar o
dinheiro do teu patrão, rapá?
Marreco tira o dinheiro do ajudante. Muito troco. Notas
pequenas.
pág.7.
5 CONT.: 5
(CONT.)
Moradores saem carregando botijões.
Camburão da polícia vira a esquina, os garotos correm.
6 EXT. RUAS DO CONJUNTO - DIA 6
Cabeleira, Alicate e Marreco correm, perseguidos de perto, por
um POLICIAL que dá tiros para o alto. Eles riem. E também atiram
para o alto.
BUSCA-PÉ (V.O.)
O Trio Ternura não tinha medo de ninguém.
Nem da polícia... Eles achavam que a Cidade
de Deus era deles. Mas tinha um monte de
bandido que achava a mesma coisa. Naquele
tempo, a Cidade de Deus ainda não tinha
dono.
Os bandidos se metem pelas ruelas do local.
MONTAGEM cria a sensação de labirinto: o Policial nunca sabe
para onde ir.
Os bandidos param um instante. Tiram as camisetas vermelhas,
jogando-as por trás do muro de uma casa. Todos agora estão de
camiseta branca. Eles continuam correndo até o...
7 EXT. CAMPINHO - DIA 7
Eles chegam ao campinho onde os garotos estão jogando futebol
com a bola murcha, que Cabeleira estourou antes com o tiro, e
fingem que fazem parte do jogo.
O Policial passa correndo por eles, sem se dar conta de quem
eles são.
Assim que o Policial some da vista, eles caem na gargalhada.
BUSCA-PÉ (V.O.)
Com o know how que eu adquiri no
entendimento da bandidagem, eu posso falar
com toda a segurança: o Trio Ternura, no
fundo, era um bando de pé-de-chinelo.
Marreco se aproxima de Busca-Pé.
BUSCA-PÉ (V.O. cont.) (cont.)
Principalmente o meu irmão: o Marreco.
Marreco tira dinheiro do calção e entrega para Busca-Pé.
MARRECO
Aí, Busca-Pé! Leva esse dinheiro aí pra mãe
compra umas comida. Mas não conta pro velho
que fui eu que te dei!
Cabeleira atira dinheiro para o alto.
pág.8.
5 CONT.: (2) 5
(CONT.)
CABELEIRA
Aí molecada, pra vocês comprar uma bola
nova.
Os bandidos se afastam.
Busca-Pé faz um sinal para Barbantinho. Eles saem correndo e a
câmera os acompanha.
8 EXT. RUAS DO CONJUNTO - DIA 8
Busca Pé e Barbantinho correm pelas ruas de terra e com poucas
casas, em direção aos Apês.
Os garotos passam pelo meio de uma mudança que chega. Olham tudo
com mesmo movimento de cabeça.
Um GAROTO da mesma idade que está chegando, olha para eles com
uma cara meio deslocada. Busca Pé e Barbantinho, fazem cara de
poucos amigos. Marcando território.
Ao longo da rua, mais duas mudanças. Barbantinho e Busca Pé
passam examinando. Uma GAROTA BONITINHA sorri.
Umm caminhão em primeiro plano de onde descem várias pessoas
carregando malas e trouxas. Uma fila vai se formando, de costas
para a câmera.
Uma ASSISTENTE SOCIAL orienta os novos moradores.
BUSCA-PÉ (V.O.)
Quando eu cheguei na Cidade de Deus, eu era
ainda moleque. E a minha família era como
todas as outras que tavam se mudando pra
lá: a gente tinha ficado sem casa por causa
das enchentes... E a filosofia do governo
naquela época consistia no seguinte
raciocínio: não tem onde pôr? Manda pra
Cidade de Deus!
Os dois garotos viram e descem o barranco em direção ao mato.
9 EXT. POMAR DE UM SÍTIO - DIA 9
Busca-Pé e Barbantinho comem goiabas no pé.
BUSCA-PÉ
Barbantinho, tu vai querer ser o que quando
crescer?
BARBANTINHO
Eu...
Antes que Barbantinho termine a fala, GRITOS de mulher fazem os
meninos descerem da árvore em disparada.
pág.9.
7 CONT.: 7
(CONT.)
VOZ DE MULHER
Some daqui! Vai roubar goiaba da sua mãe!
10 EXT. BARRO VERMELHO - DIA 10
Barbantinho e Busca-Pé descem correndo pelo Barro Vermelho com
outros moleques. Estão felizes, brincando, dando cambalhotas.
11 EXT. RIO - DIA 11
Barbantinho está nadando no rio. Busca-Pé observa da margem.
Barbantinho tira a cabeça da água e fala do rio mesmo:
BARBANTINHO
Tu acha que eu vou conseguir ser salvavidas que nem meu pai?
BUSCA-PÉ
Sei lá...
BARBANTINHO
É... Ser salva-vidas é mais difícil que ser
peixeiro que nem o seu pai.
Busca-Pé fica um pouco bravo.
BUSCA-PÉ
Quem disse que eu quero ser peixeiro?
Peixeiro fede.
BARBANTINHO
E tu quer ser o quê?
Busca-Pé abre a mão e olha para o dinheiro que Marreco lhe
entregou antes.
BUSCA-PÉ
Sei lá... Trabalhar de bandido que nem meu
irmão, eu não quero. Nem de polícia. Tenho
medo de tomar tiro...
12 INT. CASA DE CABELEIRA - DIA 12
Marreco dá uma longa tragada num baseado.
Dadinho, brincando, encosta uma arma na orelha dele. Alicate
percebe e dá o alerta.
ALICATE
Vira esse negócio pra lá, moleque! Tu tá
maluco.
Marreco dá um tapa em Dadinho e arranca a arma das mãos dele.
pág.10.
9 CONT.: 9
(CONT.)
MARRECO
Dá essa merda aqui! Tu não tem o que fazer,
moleque? Vai buscá uma Coca-cola pra nós.
Cabeleira intervém.
CABELEIRA
Vamo com calma que o Dadinho é do conceito,
tá ligado?
Dadinho olha para Marreco num misto de raiva e desafio.
DADINHO
E isso aí, mermão. Eu também sou bichosolto, tá ligado?
Marreco passa o baseado para Alicate, que passa Cabeleira, que
passa para Dadinho.
CABELEIRA
Amanhã tu vem com a gente sabargar o
caminhão de gás de novo.
ALICATE
De novo?
CABELEIRA
Não quero ficar duro, não, porque dá azar
de sujar e a gente não tem nem um qualquer
pra dar um calaboca pros homi, morou?
ALICATE
A polícia vai ficar na moita, só esperando
pra encaçapar vagabundo, morou? Vou ficar
entocado.
CABELEIRA
Se hoje foi dia do Gasbrás, amanhã vai ser
o Minasgás.
MARRECO
Caminhão de gás só dá couro de rato. O
negócio é meter uma cachanga de bacana.
ALICATE
É... É assim que a gente acerta a boa! E
sai dessa vida.
DADINHO
Acerta nada... Essa história de meter
cachanga é robada. Eu sei de um jeito mais
melhor de acertar a boa.
Todos riem.
Cabeleira defende o menino.
pág.11.
12 CONT.: 12
(CONT.)
CABELEIRA
Cala boca todo mundo que o Dadinho é mais
esperto que vocês tudo! Conta aí,
cumpádi... Que é que tu tá pensando?
Dadinho olha para a arma que tem nas mãos. Olha para Cabeleira e
dá uma risada peculiar. É a risada que ouvimos antes: a risada
do futuro Zé Pequeno.
13 INT. DEPOIMENTO - MINIBIOGRAFIA 13
Recepcionista do Motel que será assaltado logo adiante fala para
a câmera.
RECEPCIONISTA
Eu não sou de ficar em casa chorando por
causo de homem, não. Tem amiga minha que
diz que só namora sério. Depois, fica tudo
igual: leva um pé na bunda. E chora, e
chora, e chora. Eu, hem. Meu negócio é
trocar o óleo toda a semana.
14 EXT. RECEPÇÃO DO MOTEL - NOITE 14
Um carro último tipo da época parado na recepção do motel. Um
HOMEM com pinta de playboy pega o documento que a Recepcionista,
a mesma da cena anterior, entrega para ele.
No banco do passageiro, uma MULHER tipo perua da época. Ela olha
feio para a Recepcionista, que está sorrindo coquete para o
homem.
O carro entra no motel.
A câmera sobe, acompanhando o veículo e num movimento contínuo
faz transição para:
15 EXT. TERRENO BALDIO - NOITE  15
Atrás de um muro, no terreno baldio ao lado do motel, estão
Marreco, Dadinho, Alicate e Cabeleira.
Os bandidos checam as armas.
Dadinho tenta colocar a mão na arma de Marreco, que dá um tapa
na cabeça do moleque.
MARRECO
Tira a mão, seu moleque.
Cabeleira entrega uma arma para Dadinho, que mal consegue
controlar a empolgação.
pág.12.
12 CONT.: (2) 12
(CONT.
CABELEIRA
Aí, Dadinho... Tu só veio com a gente
porque a idéia foi tua. Mas tu ainda é
muito moleque.
Dadinho se decepciona.
DADINHO
E daí?
CABELEIRA
Daí que tu vai ficar aqui dando cobertura.
Se pintar samango, tu dá um tiro naquele
vidro pra avisar a gente.
Cabeleira aponta o local onde Dadinho deve atirar.
MARRECO
Vamo lá, cumpádi!
Cabeleira dá um tapa afetuoso na cabeça de Dadinho.
CABELEIRA
Na próxima tu vem junto! Vamo lá!
Os bandidos se afastam, deixando Dadinho frustrado. Ele fala
sozinho.
DADINHO
Dá tiro em vidro! Esses cara pensa que eu
não tenho disposição...
16 ARTE - CARTELA 16
Texto enche a tela: O PLANO DE DADINHO
17 INT. COZINHA DO MOTEL - NOITE 17
Os bandidos estão amarrando e amordaçando os seguranças e
funcionários do motel. Entre eles, a Recepcionista, que fala
compulsivamente.
RECEPCIONISTA
Por que vocês tão fazendo isso, meninos? Os
moços forte como vocês! Podiam trabalhar...
Ganhar a vida honestamente. Vocês nem cara
de bandido tem. Se eu encontrasse com um de
vocês num lugar... assim... Num baile, por
exemplo, eu...
Antes que ela termine a frase, Cabeleira amordaça a boca dela.
CABELEIRA
Ô mulher chata!
pág.13.
15 CONT.: 1
18 EXT. DIANTE DO MOTEL - NOITE 18
Dadinho está brincando com a arma, fazendo-a girar como fazem os
caubóis nos westerns.
Ele finge disparar contra inimigos imaginários. Mas a
brincadeira logo perde a graça.
Dadinho está visivelmente entediado.
19 INT. QUARTO DO MOTEL - NOITE 19
O casal que vimos entrar anteriormente no motel está transando.
Ouvem-se BATIDAS na porta.
O Homem se assusta.
HOMEM
Quem é?
A porta se abre. Alguém entra. Pelo uniforme, percebemos que se
trata de um garçom, carregando uma bandeja repleta de garrafas
de cerveja. As garrafas estão na altura da cabeça do garçom,
impedindo-nos de ver o rosto dele.
HOMEM (CONT.)
Eu não chamei o serviço de quarto, cara!
Sai daqui!
O garçom atira a bandeja sobre o casal e aponta uma arma. O
garçom é Cabeleira.
CABELEIRA
Cortesia da casa doutor! Agora, vamo
passando a grana aí! Rapidinho,
rapidinho...
Começa a tocar um SAMBA, cuja letra fala de dinheiro, de se dar
bem na vida.
20 INT. QUARTOS DIVERSOS DO MOTEL - NOITE 20
Sucessão de quartos sendo invadidos e casais sendo assaltados.
Os bandidos colocam dinheiro, relógios, pulseiras e cordões de
ouro em sacos de papel pardo.
As diferentes cenas revelam ainda as personalidades dos
bandidos:
Marreco, desastrado, flerta com uma PROSTITUTA que dá mole para
ele enquanto o cliente entrega o dinheiro.
Num outro quarto, Marreco empurra o HOMEM para o banheiro e dá
um beijo na MULHER BONITA.
pág.14.
(CONT.
Em outro quarto, Marreco bebe direto do gargalo de uma garrafa
de uísque.
MARRECO
Isso aqui que é doze anos, é?
Alicate, gentil, tenta assaltar mas ao mesmo tempo acalma garota
que está sendo assaltada.
Em outro quarto, uma MULHER MAGRINHA está muito nervosa. Ela
abre a bolsa e todo o conteúdo cai no chão: batom, estojo de pó
de arroz, carteira, absorvente higiênico. Alicate ajuda a mulher
a recolher as coisas.
Entre os pertences da mulher, Alicate vê uma corrente de ouro
que tem um crucifixo com um Cristo. A imagem o deixa perturbado.
Ele faz o sinal da cruz, beija o crucifixo e devolve a corrente
de ouro para a MULHER MAGRINHA, que está apavorada na cama ao
lado de um HOMEM NU igualmente apavorado.
Cabeleira, impaciente, rápido, profissional e mais violento. Ele
entra e sai rapidamente em vários quartos.
21 EXT. DIANTE DO MOTEL - NOITE 21
Um vidro blindex é estilhaçado por uma bala ao mesmo tempo em
que:
Ouve-se o TIRO de alerta.
22 INT. QUARTOS DO MOTEL - NOITE 22
Em 3 quartos diferentes, Cabeleira, Marreco e Alicate reagem ao
som do tiro.
23 INT. CORREDOR DE SERVIÇO DO MOTEL - NOITE 23
Os bandidos se encontram no corredor de serviço.
Ouvem-se mais TIROS.
CABELEIRA
A polícia, cambada. Vamo simbora!
MARRECO
Vamo roubar um carro.
ALICATE
Mas ninguém aqui sabe dirigir.
MARRECO
Eu sei.
CABELEIRA
Então vamo lá. Cada um pega uma chave num
quarto.
pág.15.
20 CONT.: 20
24 INT. QUARTO DO MOTEL - NOITE 24
Cabeleira passa para um quarto. Olha bem feio para o homem do
casal. Olha no criado mudo. Pega as chaves do carro que estão lá
e sai correndo.
25 EXT. ESTACIONAMENTO DO MOTEL - NOITE 25
Os bandidos estão experimentando as chaves para ver qual carro
abre.
ALICATE
Duvido que tu sabe dirigir, Marreco.
Duvido.
MARRECO
Claro que eu sei.
Cabeleira encontra um carro com a porta amassada que está com o
vidro aberto e a chave no contato.
CABELEIRA
Aqui, Marreco. Esse aqui tá com a chave.
Marreco olha para o carro e faz cara feia, enquanto Cabeleira
abre a porta.
MARRECO
Esse aí tá amassado.
Mais TIROS.
Cabeleira dá um tapa cabeça de Marreco e o empurra para dentro
do carro.
CABELEIRA
Deixa de ser viado, rapá.
Os bandidos entram no carro.
CABELEIRA (cont.)
Pára na saída pra gente pegar o Dadinho.
26 EXT. DIANTE DO MOTEL - NOITE 26
O carro breco seco.
Cabeleira coloca a cabeça pra fora.
CABELEIRA
Dadinho!
TIROS.
pág.16.
27 INT. CARRO - NOITE 27
MARRECO
Ele deve ter fugido. Vamo embora!
CABELEIRA
Os filhos da puta devem ter matado ele.
O carro arranca.
FADE OUT.
Som de TIROS.
FADE IN.
28 INT. COZINHA DO MOTEL - NOITE 28
CLOSE da Recepcionista morta, com tiro no meio da testa.
Os outros funcionários também estão mortos.
29 EXT. RUA QUE DÁ ACESSO À CIDADE DE DEUS - NOITE 29
O carro roubado pelos bandidos entra desgovernado no conjunto.
30 INT. CARRO - NOITE 30
Marreco está dirigindo o carro roubado. Está apavorado. Não
consegue controlar bem o carro.
CABELEIRA
Tu falou que sabia dirigir, seu merda!
Marreco perde o controle do carro.
31 EXT. DIANTE DO BAR DO PINGÜIM - NOITE 31
O carro desgovernado desce a ladeira diante do bar do Pingüim.
As PESSOAS que estão nas mesas se assustam e pulam na hora em
que o carro invade o bar e se choca contra um muro.
Uma pequena multidão cerca o carro que acaba de bater contra um
muro.
Cabeleira sai do carro e dá um encontrão em um dos curiosos: o
CEARÁ.
Do outro lado, saem Marreco e Alicate. Eles tiram os sacos de
papel pardo do carro e começam a correr.
Cabeleira dá tiros para o alto para dispersar os curiosos.
pág.17.
(CONT.
CABELEIRA
Vamo circulando aí... Ninguém viu nada,
hem? Ninguém viu porra nenhuma.
Os bandidos saem correndo.
Cabeleira sai correndo, olhando feio para o Ceará que, por usa
vez, olha para o bandido com ódio.
CLOSE do Ceará com olhar de ódio.
CEARÁ
Eu ainda vou foder com a vida desses
bandidos. Esses crioulo filho da puta!
Durante a locução a seguir, a câmera acompanha o Ceará indo até
um TELEFONE DO BAR, fazendo um gesto para PINGÜIM, o dono bar,
indicando que precisa telefonar. Pingüim assente com a cabeça.
Ceará começa a discar.
BUSCA-PÉ (V.O.)
O Ceará, na verdade, não tinha raiva de
bandido. Ele odiava mesmo era preto. Mas
essa não é a hora da história dele. Agora,
o que interessa mesmo...
32 EXT. QUINTAL DE CASA POPULAR - NOITE 32
Cabeleira, Marreco e Alicate pulam o muro em slow motion, vistos
de baixo, como se estivessem voando.
BUSCA-PÉ (V.O. cont.)
... é a história do Trio Ternura.
Começa a soar uma SIRENE DE POLÍCIA.
Alicate cai de mal jeito, e corta o pé.
ALICATE
Filho da puta!
CABELEIRA
Puta que pariu! Os samango tão vindo aí.
Alicate geme.
CABELEIRA (cont.)
Que foi, rapá?
MARRECO
O Alicate fudeu o pé.
CABELEIRA
É o seguinte, Marreco. Tu leva o Alicate
por meio do mato. Eu vou pro outro lado.
Dou uns tiro pra chamar a atenção dos
samango.
pág.18.
31 CONT.: 31
(CONT.)
MARRECO
E tu vai se esconde onde?
CABELEIRA
Eu tenho um lugar...
Os bandidos se dividem. Cabeleira vai para um lado.
Alicate manca e geme: seu pé sangra muito. Marreco ajuda o amigo
oferecendo os ombros como apoio.
MARRECO
Pára de chorar, rapá.
Alicate faz o sinal da cruz olhando para o céu.
ALICATE
Perdoe os meus pecados, nosso senhor Jesus
Cristo. Me alivia dessa dor!
Ao longe, soa mais alto a SIRENE da polícia.
33 EXT. BAR DO PINGÜIM - NOITE 33
Cabeção -- mais jovem do que no início do filme -- sai de um
camburão, e cumprimenta o detetive TOURO, também nordestino e
com pinta de violento.
Touro é tipo linha-dura. Cabeção tem vocação de corrupto. Eles
examinam o carro batido.
Há uma troca de olhares cúmplices entre o Ceará e Touro.
CABEÇÃO É esse carro aí do motel.
Cabeção engatilha a arma. Tem um sorriso sádico no rosto.
TOURO
Os filhos da puta mataram seis no motel!
São uns assassinos. Pra onde eles fugiram?
Ninguém responde.
CABEÇÃO
Porra! Ninguém vai falar nada? Vocês não
sabem que esses caras são uns elementos
muito perigosos? Tem que prender esses
caras!
Touro olha discretamente para Ceará que discretamente aponta
para a direção em que os bandidos fugiram.
TOURO
Ele devem ter corrido pro mato. Eu garanto
que eles não sai vivo de lá.
pág.19.
32 CONT.: 32
34 EXT. MATAGAL - NOITE 34
Marreco e Alicate caminham pelo mato. Alicate está mal,
sangrando. É ajudado por Marreco.
35 EXT. MESMO MATAGAL - NOITE 35
Cabeção, Touro e outros 3 policiais abrem caminho pelo mesmo
matagal. Eles andam decididos. Têm sede de sangue.
Touro dá um comando para os 3 policiais.
TOURO
Vocês vão por esse lado aí. Corre, que eles
devem de tá perto.
Os 3 policiais se separam de Touro e Cabeção.
CABEÇÃO
Os caras levaram a maior grana lá do motel.
A gente pode meter a mão nisso aí.
TOURO
Eu me contento de enche esses crioulo filho
da puta de bala.
CABEÇÃO
Tu tá invocado comigo? Tu tá pensando que
eu sou ladrão, é? Desde quando tirar
dinheiro de nego ladrão é crime?
TOURO
Não é isso, não.
Os policiais param e se sentam bem debaixo de uma enorme
FIGUEIRA, cujo aspecto é sinistro.
Cabeção tira um baseado do bolso. Acende.
TOURO (CONT.)
Aí, não conta pra ninguém: a filha da puta
da minha mulher foi embora.
CABEÇÃO
Tu tá brincando?
TOURO
E a merda é que ela fica pedindo dinheiro
pra tudo.
A câmera sobre, revelando no alto da árvore Marreco e Alicate,
escondidos entre os galhos.
Marreco precisa tapar a boca para conter o riso. Os bandidos têm
que ficar quietos, resistindo em silêncio ao frio e aos
mosquitos. E, no caso de Alicate, à dor no pé.
pág.20.
(CONT.)
Mosquitos não param de picar Alicate, que vai ficando cada vez
mais incomodado com a situação.
CABEÇÃO
Tá vendo... Se tu der um dinheiro pra ela,
ela volta. A merda é acha os nego filho da
puta!
TOURO
A gente acha. O meu chegado lá vai
descobrir pra gente.
INSERT: BAR - NOITE
Still do Ceará falando ao telefone público.
BUSCA-PÉ (V.O.)
O chegado em questão é o Ceará. Mas essa
ainda não é a hora da história dele...
VOLTAMOS PARA: MATAGAL
Alicate sofre com a dor. Apoia a cabeça num tronco e vê uma gota
de orvalho ou algum stock shot do microcosmos.
Olha para o céu e vê as últimas estrelas. A voz dos policiais
fica distante. Já está começando clarear. A música cria um clima
de viagem.Ao longe, soa um TIRO.
Cabeção joga o baseado no chão, e apaga o baseado com o pé.
CABEÇÃO
Vamo nessa?
Os policiais se retiram.
Na árvore, Marreco respira aliviado e quebra o clima de Alicate.
MARRECO
Caralho! Pensei que os samangos iam passar
a noite aqui.
ALICATE
Marreco, tu viu a foto que os astronauta
tiraram da Terra?
MARRECO
Tu acreditou? Aquilo é tudo mentira, rapá!
É invenção dos americano.
ALICATE
A Terra aqui pra gente é grande pra
caramba. Mas lá no espaço é só um pontinho
azul. Um pontinho de nada. Uma coisinha,
assim, sem a menor importância.
pág.21.
35 CONT.: 35
(CONT.)
MARRECO
Tu tá legal, Alicate?
Alicate parece não ouvir o que diz Marreco.
ALICATE
E se a Terra é quase como se fosse um nada,
a gente é o quê? Menos que nada? Se a gente
nada, tudo isso que a gente faz serve pra
quê? Pra que que a gente vive essa vida de
bicho solto?
MARRECO
Porra! Pra arrumar dinheiro!
ALICATE
Pra que que a gente corre risco de levar
tiro? Pra que que a gente foge dos samango?
Machuca o pé? Leva picada de mosquito?
MARRECO
Melhor que comer de marmita, não é cumpádi?
ALICATE
Tu já imaginou como deve de ser bom sentir
o sossego de um rio que vai passando
assim... devagarinho... só fazendo carinho
de leve por onde ele passa... Só escutando
passarinho cantar... As pessoas
conversar... As crianças brincar...
MARRECO
Tu fumou o quê, Alicate?
ALICATE
Marreco, tu já trabalhou, né?
MARRECO
Já...
ALICATE
Como é que é trabalhar? Os caras fala o
quê?
MARRECO
Sei lá! Só trabalhei com o eu pai. Pai só
fala merda.
36 EXT. DIANTE DA CASA DE LÚCIA MARACANÃ - NOITE 36
O som dos disparos do fim da cena anterior coincide com o som de
batidas na porta.
Trata-se de Cabeleira. Ele está exaurido, batendo à porta de
Lúcia Maracanã.
pág.22.
35 CONT.: (2) 35
(CONT.)
CABELEIRA
Lúcia! Abre essa porra!
Quem abre a porta, surpreendendo Cabeleira, é Berenice.
Soa uma canção romântica da época.
Cabeleira e Berenice ficam se olhando.
Lúcia Maracanã aparece zangada.
LÚCIA MARACANÃ
Que que tu tá fazendo aqui?
Cabeleira não responde. Continua olhando apaixonadamente para
Berenice.
Lúcia Maracanã percebe o clima de romance, e fala com ironia.
LÚCIA MARACANÃ (CONT.)
Cabeleira, o Cabeção e o Touro tão bem aí,
atrás de você!
Cabeleira apenas grunhe, revelando não ter prestado a menor
atenção ao que disse Lúcia Maracanã.
CABELEIRA
Ã-hã...
Irritada, Lúcia Maracanã grita.
LÚCIA MARACANÃ
Ca-be-lei-ra!
Cabeleira volta a si...
CABELEIRA
Tô precisando me esconder da polícia.
LÚCIA MARACANÃ
Entra aí, seu otário...
Cabeleira entra na casa. Lúcia Maracanã olha para os lados antes
de fechar a porta.
37 EXT. MATAGAL - AMANHECER 37
No alto da figueira, Alicate continua o seu devaneio.
ALICATE
Porra! Tenta coisa no mundo que é boa só de
olhar. Tem tanta paz por aí né? Quer saber,
eu vou rapar fora dessa vida, morou?
Alicate vai descendo da árvore com uma certa dificuldade mas
cheio de determinação
pág.23.
36 CONT.: 36
(CONT.)
MARRECO
Aonde é que tu tá indo? Peraí, rapá! Dá um
tempo pros samango ir embora!
ALICATE
Eu disse que eu vou rapar fora dessa vida.
Senão eu vou amanhecer com a boca cheia de
formiga ou então se fuder numa cadeia. Essa
onda de bicho-solto é pra maluco. Não é pra
mim. Eu vou voltar pra igreja.
Marreco fica perplexo com a atitude de Alicate, que sai
caminhando resoluto.
38 INT. DEPOIMENTO - MINIBIOGRAFIA 38
JOVEM NEGRO trabalhador fala para a câmera.
JOVEM TRABALHADOR
Tem um irmão meu que é bicho-solto, tá me
entendendo? O que eu quero dizer é que ele
é bandido. Ele me vê saindo pro trabalho e
diz assim pra mim:
(tom de “malandro”)
“Trabalhá que nem escravo pra quê? Pra
ficar comendo de marmita? Pra ficar
recebendo ordem de branquelo? Acordá cedão
pra pegar no batente e ganhar merreca? Tu é
otário! Eu num trabalho nem fudendo”
(tom normal)
Isso é o que diz meu irmão, com o perdão da
linguagem, que eu não falo assim, não. Eu
sou trabalhador e homem de fé. Acredito na
misericórdia de nosso senhor Jesus Cristo
filho de Deus Pai Todo-poderoso, criador do
céu e da terra.
39 EXT. RUAS DO CONJUNTO - AMANHECER 39
Os raios do sol começam a iluminar as ruas da Cidade de Deus.
Alicate -- com as mesmas roupas que usava no assalto ao motel --
caminha pelas ruas do conjunto.
Está com o olhar vidrado, fitando o vazio e falando sozinho.
ALICATE
Aquele que habita no esconderijo do
Altíssimo, à sombra do Onipotente
descansará.
PERTO DALI...
Cabeção e Touro caminham lado a lado, rumo ao que parece ser um
encontro inesperado e inevitável com Alicate.
pág.24.
37 CONT.: 37
(CONT.
PERTO DALI...
Alicate caminha ao encontro dos policiais.
Alguns metros atrás deles, um JOVEM TRABALHADOR -- o mesmo da
minibiografia que vimos há pouco -- caminha no mesmo sentido.
ALICATE (CONT.)
Direi do Senhor: Ele é o meu Deus, o meu
refúgio, a minha fortaleza, e nele
confiarei.
PERTO DALI...
Cabeção avista algo, pára abruptamente, e saca a arma.
CABEÇÃO
Ali, ali!
TOURO
Ali, onde?
PERTO DALI...
Alicate segue seu caminho quase em transe.
ALICATE
Não temerás espanto noturno, nem seta que
voe de dia.
PERTO DALI...
Cabeção e Touro preparam o bote.
CABEÇÃO
Agora!
Os dois saem correndo e atirando para o alto.
CABEÇÃO (CONT.)
Parado aí seu safado!
Alicate não se altera.
O Jovem Trabalhador Negro, que vinha atrás dele, começa a correr
desesperado no sentido oposto.
Cabeção e Touro passam ao lado de Alicate, mas não o reconhecem.
TOURO
Mão na cabeça, seu bandido filho da puta!
Alicate olha para trás.
Ouvem-se TIROS.
pág.25.
39 CONT.: 39
(CONT.)
Alicate prossegue em seu caminho.
ALICATE
Não temerás peste que ande na escuridão,
nem mortandade que assole ao meio-dia.
Cabeção e Touro examinam o corpo do Jovem Trabalhador. Touro
acha a carteira profissional do morto. Esconde a carteira no
bolso.
TOURO
Porra! Esse não é nenhum deles! Não é nem
bandido.
Cabeção tira uma arma do bolso e a coloca na mão do morto.
CABEÇÃO
Agora é.
Cabeção aperta o dedo do morto contra o gatilho da arma que ele
plantou na mão dele fazendo com que ela dispare.
Câmera acompanha a trajetória da bala perdida: ela ricocheteia
numa parede, ricocheteia de novo bem pertinho da cabeça de um
MENINO que está dormindo na rua e finalmente vai na direção de:
Alicate caminhando. A bala estilhaça o espelho retrovisor de um
carro estacionado, onde vimos antes, refletida, a imagem de
Alicate.
Alicate, visto de costas, se afastando do perigo.
BUSCA-PÉ (V.O.)
Depois do fracasso no assalto do motel,
cada bandido foi pro seu lado. Cada um, pro
seu destino... O destino do Alicate ficou
nas mãos de Deus.
40 INT. CASA DE LÚCIA MARACANÃ - NOITE 40
Cabeleira tira a camiseta enquanto olha apaixonado para
Berenice.
BUSCA-PÉ  (V.O.)
O destino do Cabeleira cravou um flecha no
coração do bandido.
41 INT. COZINHA DA CASA DE BUSCA-PÉ - DIA 41
Marreco em close, cabisbaixo.
BUSCA-PÉ (V.O.)
E o destino do meu irmão Marreco, ficou na
mão do meu pai.
Marreco leva uma bofetada na cara.
pág.26.
39 CONT.: (2) 39
(CONT.
Câmera abre e revela DITO, pai de Busca-Pé e Marreco. Ele tem um
punhado de notas na mão.
DITO
Tu pensa que eu não sei que foi tu que deu
esse dinheiro pro teu irmão? Dinheiro sujo.
Dito atira as notas na cara de Marreco.
Junto à pia, descascando batatas, aparentemente alheia a tudo,
está a MÃE de Busca-Pé.
DITO (cont.)
Tu não vergonha na cara?
Marreco quer falar, mas Dito não deixa.
DITO (cont.)
Nem abre essa boca pra falar comigo. A
partir de hoje tu vai trabalhar como eu. Tu
vai vender peixe. E pra tu criar vergonha
na cara, teu irmão, que é menor que tu, vai
junto pra tomar conta. Busca-Pé, tu vai
tomar conta do teu irmão. Se tu roubar de
novo, Marreco, tu vai apanhar de cinta até
sangrar. E tu também, Busca-Pé.
Busca-Pé olha feio para Marreco.
BUSCA-PÉ (V.O.)
O pior de ter irmão bandido, é que sempre
sobra pra tu também. Honestidade não
compensa.
FADE OUT.
42 INT. COZINHA DA CASA DE LÚCIA MARACANÃ - DIA 42
Berenice está lavando a louça do café da manhã. Cabeleira ajuda,
enxugando os pratos.
Cabeleira está tenso. Ensaia várias vezes iniciar uma conversa
com Berenice, mas não consegue ir em frente. Até que ela toma a
iniciativa.
O diálogo a seguir é entrecortado por breves momentos de
silêncio seguidos de efeitos de transição que sinalizam passagem
de tempo: pequenas elipses.
A cada transição, há menos louça suja.
BERENICE
Se você tem alguma coisa pra dizer, diz
logo, Cabeleira! Você tá me deixando
nervosa!
pág.27.
41 CONT.: 41
(CONT.)
CABELEIRA
É que eu ainda tô escolhendo as palavras
certa, tá sabendo?
BERENICE
Você deve ser um cara muito escolhedor.
Gente assim não se dá bem na vida, não,
sentiu?
SILÊNCIO.
EFEITO: PASSAGEM DE TEMPO.
CABELEIRA
Então é o seguinte: vou te mandar uma letra
invocada agora: acho que meu coração te
escolheu, morou? Quem escolhe é o otário do
coração, e quando eu te vi meu relógio
despertou pensando que era manhã de sol.
BERENICE
Tu tá é de conversa fiada, rapá... Coração
de malandro bate é na sola do pé e não
desperta, não, fica sempre na moita!
CABELEIRA
Pô, mina... Já viu falar em amor à primeira
vista?
BERENICE
Malandro não ama, malandro só sente desejo.
CABELEIRA
Assim não dá nem pra conversar...
BERENICE
Malandro não conversa, malandro desenrola
uma idéia!
CABELEIRA
Pô, tudo que eu falo, você mete a foice!
BERENICE
Malandro não fala, malandro manda uma
letra!
CABELEIRA
Vou parar de gastar meu português contigo.
BERENICE
Malandro não pára, malandro dá um tempo.
SILÊNCIO.
pág.28.
42 CONT.: 42
(CONT.)
EFEITO: PASSAGEM DE TEMPO.
CABELEIRA
Falar de amor com você é barra pesada.
BERENICE
Que amor nada, rapá. Tu tá é de sete-um!
CABELEIRA
Malandro vira otário quando ama.
SILÊNCIO.
EFEITO: PASSAGEM DE TEMPO.
Berenice larga o prato na pia, e coloca os braços em volta do
pescoço de Cabeleira, oferecendo-se para um beijo.
BERENICE
Tu vai acabar me convencendo...
Eles se beijam na boca.
FADE OUT.
43 EXT. LOCAÇÕES DIVERSAS - DIA 43
Seqüência de cenas rápidas mostrando Cabeção e Touro dando
batidas na favela atrás dos bandidos:
Touro pára junto a uma rodinha de JOVENS. Faz perguntas. Todos
balançam a cabeça negativamente.
Cabeção chuta a porta de uma casa. E aponta a escopeta dele para
dentro da casa.
Volta Touro na rodinha de jovens. Ele dá tapas nas caras de
vários deles.
Volta Cabeção diante da casa: umas 5 CRIANÇAS bem pequenas saem
com as mãos na cabeça.
Cabeção correndo atrás de um JOVEM vestido com roupas de
trabalhador. O jovem vira uma esquina e dá de cara com Touro,
que o agarra.
Cabeção chega por trás e dá um tapa na cabeça do jovem.
O jovem entrega a carteira para Cabeção, que tira dela todo o
dinheiro.
BUSCA-PÉ (V.O.)
Depois do assalto do motel, a polícia ficou
dando incerta na favela durante uns três
meses. Todo dia alguém apanhava, alguém ia
preso, alguém se dava mal.
pág.29.
42 CONT.: (2) 42
(CONT.)
(CONT.)
Mas ninguém contava por onde andavam os
bichos soltos do Trio Ternura.
44 INT. CASA DE BERENICE - NOITE 44
Cabeleira está deitado no sofá, fumando um baseado. Berenice
está andando de um lado para o outro, com cara de quem está
sofrendo um tremendo enjôo.
BERENICE
Cabeleira, agora que eu tô grávida, tu tem
que largar essa vida de bicho-solto e
arrumar um trabalho.
CABELEIRA
Porra! Desde quando trabalhar dá dinheiro?
BERENICE
Ficar de papo pro ar também não dá
dinheiro, seu vagabundo.
CABELEIRA
Pô, Berenice... Tu sabe que meu sonho é
comprar um sítio e criar galinha contigo...
Mas primeiro eu tenho que acertar a boa, tá
entendendo?
BERENICE
Isso é conversa de malandro. Tu sabe que
isso num acontece... Eu não quero que o meu
nenê seja filho de bandido.
CABELEIRA
Porra! Eu quase acertei a boa no assalto do
motel! Eu posso tentar de novo!
BERENICE
Tentar de novo? O Cabeção e o Touro ainda
tão querendo te pegá por aquelas morte do
motel...
CABELEIRA
Eu num matei ninguém! Os filhos da puta é
que devem ter matado o Dadinho. O moleque
sumiu. Eu num matei ninguém!
BERENICE
Alguém matou... Ou tu larga dessa vida, ou
eu te largo! Teus amigos já te abandonou
tudo..
CABELEIRA
Ninguém me abandonou...
BERENICE
Não? O Alicate virou crente. E o Marreco
virou otário.
pág.30.
43 CONT.: 43
BUSCA-PÉ (V.O.) (cont.)
45 EXT. DIANTE DA CASA DO CEARÁ - DIA 45
Marreco, vestido como o pai, está empurrando um carrinho de
peixe. Busca-Pé vai ao lado dele. Quando ele chega bem diante da
casa do Ceará, ele diminui a marcha e grita num tom malicioso.
MARRECO
Peeiiixeiroooo.
PERTO DALI - NO BAR DO PINGÜIM
Numa mesa do bar do Pingüim, o Ceará observa Marreco à
distância.
BUSCA-PÉ (V.O.)
Finalmente, chegou a hora de contar a
história do Ceará...
DIANTE DA CASA
A porta da casa se abre. Surge um belíssima nordestina: a MULHER
DO Ceará.
BUSCA-PÉ (V.O.)(cont.)
... da mulher do Ceará e de como a história
deles tem a ver com a história do meu irmão
marreco, que virou otário mas não tomou
jeito.
A mulher do Ceará vai até o carrinho comprar peixe.
Busca-Pé olha feio para Marreco, que faz uma cara cínica como se
dissesse: “Eu não posso evitar”.
NO BAR DO PINGÜIM
O Ceará olha feio para a mulher, percebendo que há um flerte
entre ela e Marreco.
46 ARTE - CARTELA 46
Texto enche a tela: A HISTÓRIA DO Ceará
47 EXT. QUINTAL DA CASA DO CEARÁ - DIA 47
A VIZINHA, uma negra bonita, conversa com a Mulher do Ceará, que
está pendurando a roupa no varal.
VIZINHA
Seu marido não te chupa, não?
MULHER DO CEARÁ
Não. Acho que ele tem nojo. Eu também não
sei se eu ia gostar.
pág.31.
(CONT.)
VIZINHA
Ah, minha filha... Você não conhece as
coisa boa da vida. Antes do meu meter, tem
que cair de língua uma meia hora. E no cu?
Você não deixa ele colocar no teu, não?
MULHER DO CEARÁ
Graças a Deus que não! Deve doer muito.
VIZINHA
Nas primeiras vezes dói, mas depois vai que
é uma beleza. Mas tem que ter uma banana.
MULHER DO CEARÁ
Como assim, banana?
VIZINHA
Ah! Minha filha... Você pega uma banana,
esquenta ela um pouquinho, enfia na xereca
e manda ele colocar atrás. Parece que você
vai voar? Pede pra ele fazer pra você ver
como é bom.
A Mulher do Ceará faz uma cara de safada.
MULHER DO CEARÁ
Ah! Eu tenho medo de pedir essas coisas pra
ele...
VIZINHA
Medo por quê? Homem que é homem gosta
dessas sacanagem.
48 INT. DEPOIMENTO - MINIBIOGRAFIA 48
A Mulher do Ceará fala para a câmera. Ela está com o olho roxo:
levou uma porrada na cara.
MULHER DO CEARÁ
O meu marido é um cabra do muito frouxo.
Quem bate em mulher, é frouxo. E cabra
frouxo é chifrudo. Pois eu vou arrumar um
amante pra fazer comigo o que aquele
chifrudo não é capaz de fazer. E tem que
ser um amante negão. Crioulo e de pau bem
grande. E tem que gostar de banana!
49 INT. QUARTO DO CEARÁ - DIA 49
Um golpe de uma PÁ esmaga violentamente uma banana sobre a cama.
GRITOS da mulher do Ceará.
Marreco pega a camiseta e agilmente abre a janela do quarto e
escapa por ela ainda pelado.
pág.32.
47 CONT.: 47
(CONT.
A Mulher tenta abotoar o vestido quando vê o Ceará vindo com a
pá em direção a ela.
A Mulher cai. Tem sangue no rosto.
Pela janela, o Ceará vê Marreco correndo em direção a Busca-Pé.
50 EXT. RUA PRÓXIMA - DIA 50
Busca-Pé, entediado, está sentado ao lado do carrinho e peixe.
Ele se liga ao ouvir os berros do irmão, que vira a esquina
apenas de camiseta.
MARRECO
Busca-Pé! Busca-Pé!
Marreco chega junto a Busca-Pé, que começa a rir.
MARRECO (cont.)
Tira o calção.
BUSCA-PÉ
O quê?
MARRECO
Vai rápido. Faz o que eu tô mandando
moleque.
BUSCA-PÉ
Nem fodendo que eu vou ficar pelado na rua.
Marreco tira a camiseta.
MARRECO
Veste aí, que em você fica comprida.
Busca-Pé hesita.
MARRECO (cont.)
Tu quer que eu morra. Vamo logo.
Envergonhado, Busca-Pé tira o calção e veste rapidamente a
camiseta.
Começamos a ouvir uma SIRENE DE POLÍCIA se aproximando.
MARRECO (cont.)
Vai, Busca-Pé. O filho da puta deve ter me
entregado pra polícia.
Marreco veste o calção de Busca-Pé e sai correndo.
pág.33.
49 CONT.: 49
51 EXT. DIANTE DA CASA DO CEARÁ - DIA 51
Um camburão da polícia pára diante da casa. O Ceará corre
animado até o veículo. Dentro do camburão estão Cabeção e
Touro.
O Ceará aponta a direção para onde correu Cabeleira.
CEARÁ
Ele foi pra lá.
O camburão arranca cantando pneu e pára e vai até a:
ESQUINA
O camburão pára ao lado de Busca-Pé, que aponta para o sentido
contrário ao que correu Marreco.
BUSCA-PÉ
Ele foi pra lá.
O camburão sai a toda velocidade para o lado errado.
52 EXT. VIELA - DIA 52
Dadinho e Bené estão repartindo dinheiro roubado.
Marreco chega esbaforido.
MARRECO
Dadinho! Porra! Pensei que tu tava morto.
Tu tá cheio da grana. Passa essa grana aí
que eu preciso fugir.
DADINHO
A grana é nossa.
Marreco dá um tapa na cara de Dadinho e arranca o dinheiro
dele.
MARRECO
Mandei passar a grana, moleque. Aí...
Avisa lá o Cabeleira que o Ceará chifrudo
tá entregando a gente pra polícia. Eu vou
sai saindo.
Marreco sai correndo.
53 INT. QUARTO DA CASA DO CEARÁ - NOITE 53
A Mulher do Ceará, toda machucada no rosto, está amordaçada e
apavorada. Vemos apenas o rosto dela em CLOSE, de cabeça para
baixo.
Ouve-se a voz do Ceará.
pág.34.
(CONT.)
CEARÁ (OFF)
Tu tá pensando que eu vou ficar com fama de
chifrudo. Tu tá muito enganada.
Ela tenta gritar. Começa a cair terra sobre o rosto dela.
Câmera abre, revelando que o Ceará está enterrando a mulher viva
no lugar onde antes estava a cama do casal.
54 EXT. RUA - NOITE 54
Cabeleira e Dadinho caminham apressadamente. Cabeleira faz um
agrado na cabeça de Dadinho, como se fosse o seu filho.
CABELEIRA
Que bom que tu tá vivo, rapá! Tu num sabe
como eu fiquei preocupado... Agora, vamo
lá... Me mostra quem é o chifrudo alcaguete
filho da puta!
55 INT. BAR DO PINGÜIM - NOITE 55
JABÁ, nordestino, e Ceará estão jogando cartas. Ceará está
completamente bêbado de cachaça.
JABÁ
Tá com algum problema, companheiro? Brigou
com a mulher de novo?
Ceará ignora a pergunta.
CEARÁ
Traz outra branquinha aí, Pingüim!
JABÁ
Vai com calma, rapá! Tu já bebeu demais da
conta!
O Ceará se levanta e vai em direção ao banheiro.
CEARÁ
Preciso mijar.
O Ceará entra pela porta do banheiro.
CORTA PARA:
Uma mão negra coloca o copo de cachaça violentamente sobre a
mesa, derrubando a bebida sobre as cartas.
Jabá levanta enfurecido para protestar, mas dá de cara com um
revólver apontado para o seu rosto. Quem segura o revólver é
Cabeleira. Ao lado dele, está Dadinho.
CABELEIRA
É esse aí o otário alcagüete filho da puta?
pág.35.
53 CONT.: 53
(CONT.
DADINHO
Ele mesmo!
JABÁ
Que conversa é essa? Eu não sou quem vocês
tão pensando, não.
CABELEIRA
Pra fora! E mão na cabeça!
A porta do banheiro se abre. O Ceará vê o que está acontecendo.
Sua expressão é de pavor. Volta a fechar a porta e espia a cena
por uma pequena fresta.
Jabá se levanta e caminha para fora do bar. Os fregueses apenas
olham a cena.
56 EXT. PRAÇA - NOITE 56
Jabá sai do bar com as mãos na cabeça. Cabeleira e Dadinho vêm
logo atrás.
Eles ficam próximos ao barracão de obras.
CABELEIRA
Pode parar aí! Vira de frente pra mim! Fica
aqui embaixo da luz pra nego saber o que
acontece com alcagüete.
Jabá obedece. Cabeleira entrega a arma para Dadinho.
CABELEIRA (CONT.)
Aí Dadinho, tu nunca matou ninguém! Passa o
dedo-duro.
Dadinho segura a arma como se ela fosse um objeto mágico. Sua
expressão é de absoluta felicidade.
JABÁ
Pelo amor de Deus! Eu não fiz nada contra
vocês!
Dadinho atira e mata Jabá. Cabeleira olha para o menino com
admiração e assombro.
57 EXT. RUA DO CONJUNTO - DIA 57
Berenice faz sinal para um carro que passa.
O carro dá uma freada brusca.
O Motorista, enfurecido, começa a xingar Berenice.
MOTORISTA
Qué morrê, condenada?
pág.36.
55 CONT.: 55
(CONT.)
No mesmo instante, Cabeleira aparece por trás do carro e encosta
o cano de sua pistola na cabeça do motorista.
CABELEIRA
Condenado tá você se num fazer o que eu
mandar. Fica com a mão na direção.
O Motorista obedece. Berenice entra no carro e vai para o banco
de trás. Cabeleira, sempre apontando a arma para o motorista, dá
volta e entra no carro, sentando no banco do passageiro.
MOTORISTA
Olha! Tá cheio de polícia aí virando a
esquina...
Cabeleira encosta a arma na cabeça do Motorista.
CABELEIRA
Cala a boca e vamo embora.
MOTORISTA
Pra onde?
CABELEIRA
Pra longe daqui. Vai, pisa nessa merda.
O Motorista, assustado, acaba deixando o carro morrer.
CABELEIRA (cont.)
Tá de sacanagem, seu filho da puta?
O Motorista tenta dar a partida, mas acaba afogando o motor.
MOTORISTA
Pelo amor de Deus! Esse carro é uma merda.
Tem vez que só pega no tranco.
BERENICE
Desce pra empurrar, Cabeleira.
Cabeleira desce do carro.
58 EXT. DIANTE DA CASA DO CEARÁ - DIA 58
Dois camburões estão parados diante da casa do Ceará. Uma
pequena MULTIDÃO está aglomerada no local. Entre eles, está
Busca-Pé, usando uniforme de escola pública.
59 EXT. DIANTE DA CASA DO CEARÁ - DIA 59
Dois SOLDADOS da PM saem da casa carregando o corpo da Mulher
do Ceará.
A Vizinha conversa com Cabeção.
pág.37.
57 CONT.: 57
(CONT.)
VIZINHA
Ele batia nela, seu guarda. Dava sem dó. Eu
sabia que ia acontecer uma desgraça.
O Ceará, cabisbaixo, é algemado por Touro.
CABEÇÃO
Pô, Ceará! Que é que tu foi fazer?
O Ceará levanta a cabeça para falar com Cabeção e vê ao longe:
PONTO DE VISTA DO Ceará
Na esquina, Cabeleira está empurrando o carro.
DIANTE DA CASA DO Ceará
CEARÁ
Olha lá, Cabeção! O bandido filho da puta!
Cabeção vê Cabeleira e sorri maliciosamente.
CABEÇÃO
Touro! Chegou a hora da gente acertar as
contas com essa criolada.
Touro saca a arma.
NO CARRO
O motorista vira a chave no contato.
NA RUA
Cabeção engatilha a arma. Ele e Touro partem em direção ao
carro.
NA ESQUINA
Cabeleira empurra com toda a sua força.
NO CARRO
Berenice vibra ao perceber que o motor pegou. O Motorista
respira aliviado. Mas logo se assusta ao ver...
NA RUA
Cabeção e Touro caminham em direção ao carro, empunhando suas
armas.
TOURO
Parado aí, seu filho da puta.
Touro dispara. O tiro atinge a lataria do carro.
pág.38.
59 CONT.: 59
(CONT.)
NO CARRO
O Motorista acelera e sai com tudo.
NA ESQUINA
Cabeleira saca a arma, dispara e acerta Cabeção, que cai morto.
Cabeção dispara.
NO CARRO
Berenice olha para trás. E começa a chorar.
FADE OUT.
FADE IN.
NA MESMA ESQUINA
O corpo de Cabeleira está cercado por velas acesas.
Alguns moradores estão de pé, em volta do cadáver, rezando numa
espécie de velório improvisado. Lúcia Maracanã está presente.
Alicate reza.
Toda a cena é vista do ponto de vista do menino Busca-Pé, ainda
vestindo o uniforme da escola.
Um FOTÓGRAFO meio seboso, de jornal sensacionalista, abre espaço
entre os curiosos e começa a fotografar a cena. Ele se abaixa
para registrar a cena de outro ângulo. Neste momento, vemos que
o menino Busca-Pé está ao lado do fotógrafo.
FOTÓGRAFO
Chega um pouco pra lá, garoto.
O menino Busca-Pé fica maravilhado com a câmera fotográfica.
BUSCA-PÉ (V.O.)
Tudo de que eu me lembro do dia da morte do
Cabeleira é uma confusão de gente... E uma
câmera fotográfica...
Barbantinho, afastado da confusão, chama Busca-Pé.
Busca-Pé vai se afastando da câmera, caminhando em direção a
Barbantinho.
Um carro passa entre ele e a câmera.
Quando o carro sai de quadro, percebemos uma passagem de tempo:
BUSCA-PÉ, agora com 16 anos, está caminhando no mesmo sentido
que o pequeno Busca-Pé e usando uniforme de escola pública.
pág.39.
59 CONT.: (2) 59
(CONT.)
A paisagem está um pouco mudada: as casas têm outras cores,
muros e lajes.
Busca-Pé encontra BARBANTINHO, também com 16 anos, vindo no
sentido oposto, e também usando uniforme de escola pública.
BARBANTINHO
Aí, Busca-Pé! Tá indo pra escola?
BUSCA-PÉ
Tô.
BARBANTINHO
Eu tô voltando de lá. Vem comigo.
BUSCA-PÉ
Pra onde?
FUSÃO PARA:
60 EXT. PRAIA - DIA 60
Vários uniformes escolares dobrados ou simplesmente jogados
sobre a areia da praia.
Câmera sobe, revelando Busca-Pé e Barbantinho tirando os
uniformes. Eles usam sungas no lugar das cuecas.
Busca-Pé pega na mochila uma camerazinha tipo Xereta
CARACTERES em superposição: ANOS 70
BUSCA-PÉ (V.O.)
Eu cresci paradão na idéia de um dia ter
uma câmera fotográfica. E como todo pobre,
eu tive que começar de baixo: eu consegui
comprar a câmera mais vagabunda do mundo.
MULHERES de biquini passam diante deles: bronzeadas, lindas,
gostosas.
Busca-Pé e Barbantinho olham “babando”. Busca-Pé começa a
enquadrar.
PONTO DE VISTA DA CÂMERA DE BUSCA-PÉ
Mulheres na praia.
BARBANTINHO (em off) É por isso que eu quero ser salva-vidas. Já
pensou? Um dia inteiro na praia, vendo
passar essas... essas...
Volta para os dois.
pág.40.
59 CONT.: (3) 59
(CONT.)
BUSCA-PÉ
Essas...
BARBANTINHO
Busca-Pé, me diz uma coisa. Tu continua só
na mão ou já...
Busca-Pé fica constrangido. Mas antes que a conversa continue,
uma voz feminina faz Busca-Pé desviar o olhar.
Ele volta a olhar pela câmera.
PONTO DE VISTA DA CÂMERA DE BUSCA-PÉ
ANGÉLICA - mais ou menos 15 anos, branca, bonita e sexy - está
acenando para Busca-Pé, está saindo do mar e caminhando em
direção a eles.
BUSCA-PÉ  (V.O.)
Ai, Angélica... Como eu era louco por ela.
Todo mundo sabia que ela, além de linda,
era a única cocota que transava. E eu tava
louco para perder a virgindade com ela.
Volta para Busca-Pé, com cara de apaixonado. Barbantinho dá uma
chacoalhada nele.
BARBANTINHO
Justo com ela, Busca-Pé? Ela já tem
namorado.
BUSCA-PÉ
E daí?
BARBANTINHO
O pai dela é sargento do exército!
BUSCA-PÉ
Ninguém é perfeito.
Busca-Pé enquadra Angélica mais uma vez.
Ouve-se clique ao mesmo tempo em que o movimento do obturador
funciona como cortina de transição para:
Vários COCOTAS -- rapazes e moças -- fazendo pose para Busca-Pé.
Entre eles, está Angélica:
Há uma evidente troca de olhares entre ela e Busca-Pé.
Afastado da turma está Barbantinho -- agora também com 16 anos.
Ele está fazendo flexões para parecer mais musculoso na foto.
BUSCA-PÉ
Vamos lá, Barbantinho. Pára com essa
viadagem.
pág.41.
60 CONT.: 60
(CONT.
Barbantinho vai se juntar ao grupo. Antes de se juntar ao grupo
ele checa os músculos do peito para ver se estão maiores.
Por trás de Angélica, chega THIAGO, branco, 17 anos. Ele está
todo molhado. Encoxa Angélica, que leva um susto, e dá um beijo
nela. Um beijo que ela corresponde.
Busca-Pé faz cara de triste e bate a foto.
Imagem do grupo de amigos em still. A foto revela que Busca-Pé
tem um olhar de fotógrafo: há uma luz especial no rosto de
Angélica. E Thiago, de alguma maneira, aparece diminuído na foto
ou uma sombra cobre o rosto dele.
BUSCA-PÉ (V.O.) (CONT.)
Mas, mesmo assim, eu era uma espécie de
fotógrafo oficial da minha turma: a turma
dos cocotas.
CORTA PARA:
NA MESMA PRAIA
Os cocotas tomam sol na areia. Angélica e Thiago abraços. Não há
dúvida: eles são namorados. Busca-Pé mal consegue tirar os olhos
dela, que não passa totalmente despercebido para Thiago.
BUSCA-PÉ
Tô na maior secura!
THIAGO
Deixa de ser chincheiro, rapá! Maconha não
tá com nada! O negócio agora é cheirar.
ANGÉLICA
Pô, Thiago! Tu só fala em cheirar, o tempo
todo! Eu prefiro ficar no baseado, manero.
Morou?
Busca-Pé se aproxima de Angélica.
BUSCA-PÉ
Se tu tá a afim, eu vou buscar um baseado
pra você!
Angélica apenas sorri.
Thiago, enciumado, entra no meio dos dois.
THIAGO
Eu tô mais a fim de cheirar um branco. É
tóchico de verdade!
Quase como se tivessem combinado, Busca-Pé e Angélica corrigem
juntos a pronúncia de Thiago.
pág.42.
60 CONT.: (2) 60
(CONT.)
BUSCA-PÉ
É tó-csi-co!
ANGÉLICA
É tó-csi-co!
Busca-Pé e Angélica se olham e riem. Busca-Pé com cara de
apaixonado.
Thiago fica visivelmente enciumado. Ele não consegue disfarçar a
raiva. Ele se levanta bruscamente, e dá um beijo forçado em
Angélica, que o rechaça.
ANGÉLICA
Ai! Tu tá com a boca salgada.
Thiago provoca Barbantinho para escapar da situação.
THIAGO
Qualé, Barbantinho? Tu quer ser salva-vida
que nem teu pai, mas só fica aí na
ginástica! Tu tem é medo de água.
BARBANTINHO
Fica na tua!
THIAGO
Aí, mermão! Aposto uma cerveja como tu não
sabe nadar melhor que eu.
BARBANTINHO
Tá valendo!
Barbantinho e Thiago correm em direção ao mar.
Busca-Pé aproveita para se aproximar de Angélica.
BUSCA-PÉ
É o seguinte, Angélica... Se tu tá mermo a
fim de dar um catranco, eu busco um
especial pra você lá na boca do Neguinho.
Angélica dá um beijinho nos lábios de Busca-Pé.
BUSCA-PÉ (V.O.) (CONT.)
Naquele momento, eu senti que faria
qualquer negócio pra agradar aquela mina...
Comprar fumo, comprar pó... Qualquer
coisa...
(CONT.)
61 EXT. APÊS - DIA 61
Geral dos prédios Apês, com Busca-Pé caminhando.
BUSCA-PÉ (V.O. cont.)
Mas se eu soubesse quem eu ia encontrar,
lá nos Apês, justamente...
(CONT.)
pág.43.
60 CONT.: (3) 6
62 INT. BOCA-DE-FUMO DOS APÊS - DIA 62
Neguinho -- um malandro negro e franzino, que usa óculos
escuros, cordão e pulseiras de ouro -- está endolando maconha e
cheirando cocaína. Dois VAPORES de menos de 10 anos ajudam o
traficante na tarefa.
Busca-Pé está presente, contando dinheiro que tem para comprar
maconha.
BUSCA-PÉ (V.O. cont.)
(...) na boca do meu chegado, o Neguinho,
eu juro que eu não teria ido lá. Nem pela
Angélica.
Alguém bate violentamente na porta. Neguinho estranha.
NEGUINHO
Quem tá aí?
Em vez da resposta, Neguinho ouve novas batidas na porta. Desta
vez, elas soam mais alto e mais violentas.
Neguinho pega uma arma e faz sinal para um dos vapores abrir a
porta.
Busca-Pé fica apavorado.
Um dos vapores, um menino com menos de 10 anos, abre a porta.
Neguinho respira aliviado e abaixa arma. Por enquanto, não
revelamos a identidade dos visitantes. Apenas ouvimos uma voz
aguda:
ZÉ PEQUENO (OFF)
Qualé, Neguinho?
Busca-Pé olha para o ponto de onde vem a voz e se assusta mais
ainda.
Neguinho, ao contrário, se tranqüiliza.
NEGUINHO
Porra, cumpádi! Como é que vocês chegam
desse jeito na minha boca?
A mesma voz soa agora ameaçadora:
ZÉ PEQUENO (OFF)
Quem foi que falou que essa boca é tua?
Neguinho faz cara de apavorado.
Imagem em still.
pág.44.
(CONT.)
FUSÃO PARA:
Sucessão de ações com a câmera registrando sempre no mesmo
ângulo a Boca dos Apês.
Os personagens que vão sendo apresentados na narração de BuscaPé aparecem e somem como fantasmas.
O ambiente pouco muda: uma mesa aparece ora num lugar ora em
outro; há mais ou menos móveis e objetos em um momento ou outro;
mais ou menos armas etc.
No começo, vemos apenas um colchão.
BUSCA-PÉ (V.O.)
A boca-de-fumo dos Apês é uma história à
parte...
EFEITO DE TRANSIÇÃO.
VELHA BÁ -- uma mulher de aproximadamente 40 anos -- fazendo
sexo oral com o jovem mulato GRANDE.
BUSCA-PÉ (V.O. cont.) (CONT.)
Quem começou a usar aquele apartamento dos
Apês pra vender droga foi a Velha Bá. Às
vezes ela dava droga pra molecada, em troca
de algum favor especial... O favorito era
moleque chamado Grande!
EFEITO DE TRANSIÇÃO.
Grande, agora adulto, muito alto e com cara de poucos amigos,
expulsa a Velha Bá com um chute na bunda.
BUSCA-PÉ (V.O. cont.) (cont.)
Daí, o Grande cresceu... O esquema da Bá
era tão amador, que foi fácil pra ele tomar
conta do negócio...
EFEITO DE TRANSIÇÃO.
SANDRO CENOURA -- um menino branco, sua muito, está apenas de
calção (ou seja: sem camisa e descalço). Ele tem em volta do
pescoço um TRAPO BRANCO sujo e rasgado, que ele usa para enxugar
o suor do rosto e do peito.
Cenoura recebe trouxinhas de maconha de Grande. Na boca também
estão presentes outros moleques.
BUSCA-PÉ (V.O. cont.) (cont.)
O Grande usava a molecada dos Apês pra
trabalhar vapor. Eles é que levavam a droga
pelo conjunto. O vapor mais esperto da boca
do Grande era um moleque branco e seboso
chamado Sandro Cenoura.
pág.45.
62 CONT.: 62
(CONT.)
EFEITO DE TRANSIÇÃO.
Sandro Cenoura -- agora com uns dezesseis anos e melhor vestido -
- recebe de Grande uma TOALHA DE ROSTO branca: Grande tira o
trapo que está em volta do pescoço de Cenoura e,
ritualisticamente, o substitui pela toalha nova.
Observando a cena, está o jovem Neguinho, futuro dono da boca.
BUSCA-PÉ (V.O. cont.) (cont.)
O Cenoura ganhou a confiança do Grande. Foi
subindo de posto, seguiu direitinho o plano
de carreira do tráfico... até virar gerente
da boca...
EFEITO DE TRANSIÇÃO.
O ambiente está repleto de vapores fazendo trouxinhas de
maconha. Entre eles, destaca-se Neguinho.
Cenoura, já com uns 18 anos, -- sempre enxugando o suor com a
toalha branca -- está recebendo a visita do amigo ARISTÓTELES,
também branco e mais ou menos da mesma idade de Cenoura.
Cenoura oferece um baseado já aceso para Aristóteles, que fuma
com prazer.
Cenoura é sem dúvida o manda-chuva do pedaço.
BUSCA-PÉ (V.O. cont.) (cont.)
Um dia Cenoura recebeu na boca um amigo
dele de infância: o Aristóteles. Numa época
em que Cenoura tinha sido expulso de casa
pelo pai, a família do Aristóteles deu
guarida pra ele: casa, comida e roupa
lavada. Agora, era o Aristóteles que tava
precisando de ajuda...
ARISTÓTELES
Meu irmão, vou te dar um papo responsa,
morou? O caso é o seguinte: tô
desempregado, minha mina tá tendo aí que
fazer uma operação dum caroço que apareceu
aí na barriga dela, tá sabendo?
CENOURA
Quer dinheiro?
ARISTÓTELES
Não! Quero que tu me arruma um peso pra eu
passar aí no sapatinho, sabe qualé? Tu me
dá o peso que eu vendo rapidinho.
Cenoura entrega um pacote grande de maconha para Aristóteles.
pág.46.
62 CONT.: (2) 62
(CONT.)
BUSCA-PÉ (V.O.)
Cenoura deu um força pro Aristóteles... Só
que nunca mais viu o dinheiro da maconha
que ele tinha passado pro amigo.
EFEITO DE TRANSIÇÃO.
Cenoura e Grande sozinhos na boca. Cenoura está cabisbaixo e
suando mais do que de costume: não pára de se enxugar com a
toalha.
BUSCA-PÉ (V.O. cont.) (cont.)
E teve que se explicar pro Grande...
Grande fala com frieza e solenidade:
GRANDE
Ou tu passa o cara. Ou eu te passo você.
EFEITO DE TRANSIÇÃO.
Cenoura aponta uma arma contra a cabeça de Aristóteles que, de
joelhos, implora por clemência.
ARISTÓTELES
Porra, mermão! A gente é amigo! Tu tem que
me dá uma chance, porra! Cenoura, me
escut...
Cenoura dispara, e chora sobre o cadáver de Aristóteles.
BUSCA-PÉ (V.O.)
O Cenoura não teve escolha... Também, uma
história com um cara chamado Aristóteles,
só podia acabar em tragédia. O Cenoura
sentiu vontade de matar o Grande, mas nem
precisou...
EFEITO DE TRANSIÇÃO.
Cabeção e outros policiais levam Grande preso.
BUSCA-PÉ (V.O. cont.) (cont.)
O Grande foi preso pelos samangos e morreu
na cadeia.
EFEITO DE TRANSIÇÃO.
Sandro Cenoura está conversando com Neguinho.
BUSCA-PÉ (V.O. cont.) (cont.)
O Cenoura tomou conta de tudo o que era do
Grande. Mas não quis ficar com a boca dos
Apês. Pra ele, aquele lugar era maldito. O
Cenoura deixou a boca pro vapor que ele
mais confiava.
pág.47.
62 CONT.: (3) 62
(CONT.)
CENOURA
Aí, Neguinho. Tu é meu homem de confiança.
Eu vou montar outra boca lá na Quinze. Tu
me passa uma parte do que tu faturar aqui.
É só tu respeitar meu território que num
vai ter arengação. Combinado.
Neguinho sorri radiante.
FUSÃO PARA:
Voltamos à mesma ação que deu início ao flash-back, vista agora
de um outro ponto de vista.
Vemos a cara de pânico de Neguinho.
BUSCA-PÉ (V.O.)
Foi assim que boca-de-fumo dos Apês ficou
na mão do Neguinho. Mas isso também não foi
por muito tempo...
Uma vez mais, ouvimos a voz aguda e ameaçadora:
ZÉ PEQUENO (OFF)
Quem foi que falou que essa boca é tua?
NEGUINHO
Qualé, Dadinho? Tu...
Finalmente revelamos o dono da voz: Dadinho -- agora com 18 anos
e com o nome de Zé Pequeno. Atrás dele estão BENÉ -- mesma faixa
etária -- e TUBA -- um pouco mais jovem e com jeito de bobo.
ZÉ PEQUENO
Dadinho o caralho! Meu nome agora é Zé
Pequeno, tá entendendo?
EFEITO: close de Zé Pequeno em still.
63 ARTE - CARTELA 63
Texto enche a tela: A HISTÓRIA DE ZÉ PEQUENO
64 EXT. DIANTE DO MOTEL - NOITE - FLASH-BACK 64
FUNDIMOS o rosto de Zé Pequeno ao de Dadinho, também em STILL,
retomando a cena do assalto ao motel.
BUSCA-PÉ (V.O.)
Zé Pequeno sempre quis ser o dono da Cidade
de Deus. Desde os tempos de moleque, quando
ele ainda se chamava Dadinho...
Imagem ganha movimento.
Dadinho olha pra um lado e para o outro. Não vê nada. Tudo está
calmo.
pág.48.
62 CONT.: (4) 62
(CONT
DADINHO
Porra! Eu é que não vou ficar de bobó aqui
fora.
Dadinho dispara contra o vidro.
65 EXT. MOTEL - NOITE - REPLAY 65
Os bandidos do lado de fora das suítes, entre os carros
estacionados.
Ouve-se o TIRO de alerta.
CABELEIRA
Sujou, cambada. Vamo simbora!
66 INT. COZINHA DO MOTEL - NOITE 66
Dadinho executa os funcionários que estão amarrados.
67 INT. QUARTO DO MOTEL - NOITE 67
Dadinho entra no mesmo quarto assaltado antes por Cabeleira. O
Homem está consolando a Mulher, que chora.
HOMEM
Porra! Outra vez? Teu amigo já levou tudo o
que eu tinha! Sai fora daqui moleque!
Dadinho dá sua risada característica, enquanto dispara sua arma,
matando o casal.
68 EXT. LARGO DO SÃO FRANCISCO - DIA 68
Bené está engraxando o sapato de um FREGUÊS -- um senhor de uns
50 anos, com uma cara bem simpática.
BUSCA-PÉ  (V.O.)
Depois do assalto do motel, o Dadinho deu
um tempo fora da Cidade de Deus. E teve que
dar duro pra descolar um pichulé...
FREGUÊS
Faz tempo que você trabalha de engraxate,
menino?
BENÉ
Que mané engraxate, o quê! Trabalhar é
coisa de otário.
O Freguês não entende.
FREGUÊS
Como assim, menino?
pág.49.
64 CONT.: 64
(CON
BENÉ
Otário assim... como tu mermo, rapá!
O Freguês leva uma PAULADA na cabeça.
Vemos Dadinho, com um pedaço de pau na mão, e mais um GAROTO
atrás do Freguês desmaiado. Eles roubam a carteira e o relógio
do Freguês, que se contorce de dor no chão.
69 EXT. VIELA - DIA / FLASH BACK 69
Replay de trechos da cena em que Dadinho e Bené estão repartindo
dinheiro roubado.
BUSCA-PÉ  (V.O. cont.)
O problema era encontrar algum bicho-solto
que mandasse no pedaço,
Marreco chega esbaforido.
BUSCA-PÉ (V.O. cont.)
Como o meu irmão... o Marreco.
MARRECO
Passa essa grana aí que eu preciso fugir.
DADINHO
A grana é nossa.
Marreco dá um tapa na cara de Dadinho e arranca o dinheiro
dele.
MARRECO
Mandei passar a grana, moleque..
Marreco sai correndo.
Marreco e começa a se afastar, quando ouve a voz de Dadinho.
DADINHO (OFF)
Aí, meu cumpádi! Tem um outro negócio aqui
pra tu levar...
Marreco se vira, e se espanta.
Dadinho aponta uma arma na direção dele. Marreco tenta fugir,
mas é baleado nas costas.
Dadinho vai até Marreco, que se contorce de dor. Dadinho
descarrega a arma no bandido ferido, dando sua risada
característica.
FUSÕES SUCESSIVAS mostram Dadinho, na mesma posição, atirando e
rindo, ficando MAIS VELHO, até chegar aos dezoito anos.
pág.50.
68 CONT.:
70 INT. SALÃO DE BAILE - NOITE 70
O local está lotado de gente. Quase todos com cara de bandido.
Dadinho e Bené entram com pose de donos do pedaço.
BUSCA-PÉ (V.O.)
Dadinho virou um dos assaltantes mais
procurados do Rio de Janeiro. Com dezoito
anos, ele era o bandido mais respeitado na
Cidade de Deus.
Dadinho é cumprimentado por todos, sempre com muita deferência,
especialmente por Tuba, que não se cansa de cumprimentar o
bandido e resiste em soltar-lhe a mão.
TUBA
Parabéns, Dadinho! Parabéns, memo, rapá.
Puxa, dezoito anos, hem! Feliz aniversário
e tudo de bom... Parabéns de verdade...
Dadinho se livra do aperto de mão de Tuba.
DADINHO
Cala a boca, rapá!
Dadinho vê alguém. Dá sua gargalhada perversa. E vai ao encontro
de MANÉ GALINHA, um jovem muito bonito, de olhos azuis, pele
escura e cabelo liso. Ele está numa rodinha com 3 MULHERES, as
mais bonitas do baile.
DADINHO (cont.)
Aí, bonitão! Sempre com as gostosas, né?
Mas macho mermo tu não é. Tá certo?
Galinha vira as costas.
Dadinho dá um tapa na cabeça dele.
DADINHO (cont.)
Tô falando com você, viado de merda.
As mulheres se afastam. Uma roda de curiosos se forma em volta.
Dadinho dá um tapa forte na cara de Galinha.
DADINHO (cont.)
Se tu virar as costas pra mim de novo, vai
levar tiro.
Clima geral de constrangimento. Só Pequeno ri da humilhação de
Mané Galinha.
Bené chega e segura Dadinho.
BENÉ
Deixa disso, rapá.
Galinha se afasta.
pág.51.
(CONT.)
Bené olha para flertando para uma das moças: MOSCA, sua futura
mulher.
Dadinho leva Bené para um canto afastado.
DADINHO
Aí, Bené! Chega mais! Quem é que é mais
chinfreiro no meio da bandidagem?
PONTO DE VISTA DE BENÉ:
Vemos bandidos bem-vestidos e usando correntes e relógios de
ouro. Entre eles, destaque para Sandro Cenoura e Neguinho.
DADINHO (OFF) (cont.)
Tu tá vendo o Cenoura?... Tu tá vendo o
Neguinho?.. O Sérgio Dezenove, Chevete,
Jerry Adriane, Espada Incerta... Tu tá
vendo tudo esses cara de roupa de marca e
cheio de grana?
Voltamos para os dois.
Enquanto Dadinho fala, Bené fica paquerando Mosca à distância,
trocando olhares.
DADINHO (CONT.)
Tudo traficante, mermão! Assaltar não tem
futuro. Se a gente queremos mandar na
Cidade de Deus, o negócio é vender droga. A
gente vamo tomar as boca-de-fumo de todo
mundo aqui, meu cumpádi. E vamo começar a
vender do branco, que é isso que os playboy
tão querendo.
Bené ri do amigo. Pensa que Dadinho está brincando, e ironiza:
BENÉ
Tá certo, mermão! E a gente vamo começa
quando?
DADINHO
Agora mermo.
71 INT. TERREIRO DE UMBANDA - NOITE 71
Cerimônia de umbanda. Dadinho, acompanhado por Bené, consulta o
Exu.
EXU
Eu sou o Diabo, moleco! Se quiser eu te
tiro desse buraco, esse, boto suncê num
lugar formosado, esse, mas, se tu fuder
comigo, vamo lá.
pág.52.
70 CONT.: 70
(CONT.)
(CONT.)
Eu te dou proteção de balador de atirador,
esse, te tiro das garras de butina preta,
esse, boto zimbrador no teu bolso e mostro
os inimigado, esse. Só quero uma garrafa de
marafo e um toco, esse... Não precisa
falador, esse, não, pensa no que tu quer.
(CONT.)
Dadinho fecha os olhos e se concentra. O Exu parece ler os
pensamentos do bandido.
Zé Pequeno dá um sorriso “ambicioso”.
EXU (cont.)
Tu agora num vai se chamá Dadinho... Tu
agora vai ser chamado com o nome que eu
quero que tu seja chamado, esse... Tu agora
vai se chamá Zé Pequeno.
FIM DO FLASH-BACK.
72 INT. BOCA-DE-FUMO DOS APÊS - DIA 72
Retomamos a cena que deu origem ao flash-back.
Zé Pequeno ameaça Neguinho.
ZÉ PEQUENO
Dadinho o caralho! Meu nome agora é Zé
Pequeno, tá entendendo?
TUBA
O nome dele é Zé Pequeno, tá entendendo?
Pequeno saca a arma e aponta contra a cabeça de Neguinho.
Bené intervém.
BENÉ
Não tem que passar o cara, Pequeno. Ele já
viu que tu é que manda aqui agora.
NEGUINHO
É isso, cumpádi! Quem manda na boca é tu
mermo! Eu vou sair saindo.
Zé Pequeno dá um tiro no pé de Neguinho.
ZÉ PEQUENO
Tu vai ficar vivo. Mas tu vai ficar vivo
aqui mermo. Tu vai trabalhar pra nóis. Se
tu voltar pra boca do Cenoura, tu morre, tá
ligado?
Neguinho, sofrendo com a dor, concorda apenas com um movimento
de cabeça.
pág.53.
71 CONT.: 71
EXU (cont.)
(CONT.)
Busca-Pé, que assiste a tudo calado, vê sobre a mesa um
revólver. Zé Pequeno está de costas para ele. Busca-Pé percebe a
oportunidade.
BUSCA-PÉ  (V.O.)
O certo seria eu aproveitar aquela chance
pra vingar a morte do meu irmão. Tem gente
que pensa que pra quem nasce na favela é
fácil pegar um berro e sair atirando.
Em vez de pegar a arma, Busca-Pé começa a se afastar
sorrateiramente em direção à porta.
BUSCA-PÉ (V.O. cont.)
Puta pensamento idiota...
Zé Pequeno se vira e aponta a arma para Busca-Pé.
ZÉ PEQUENO
Tu tá pensando que vai aonde?
Bené segura o braço de Pequeno.
BENÉ
O cara é do conceito. É o Busca-Pé.
Pequeno dá a risada sinistra.
ZÉ PEQUENO
Tu que era irmão do Marreco, né.
Busca-Pé só assente com a cabeça, temendo pelo pior.
ZÉ PEQUENO (cont.)
Sai saindo. E diz pra todo mundo que a boca
dos Apê é do Zé Pequeno. E que já tamo
vendendo pó.
73 EXT. PROXIMIDADES DA BOCA DOS APÊS - DIA/NOITE 73
Um jovem PLAYBOY branco se aproxima de um MOLEQUE.
PLAYBOY
Onde é que tá o movimento?
O Moleque aponta para uma direção qualquer.
CÂMERA CORRIGE PARA:
Cena clipada, mostrando o movimento de consumidores de drogas na
boca dos Apês. São pessoas de todos tipos, de todas as classes
sociais.
Pára um CARRO e 2 MOLEQUES levam o pó.
Um garoto entrega uma arma e leva papelotes em troca.
pág.54.
72 CONT.: 72
(CONT
HOMEM DE 40 ANOS bem vestido se informa com Menino.
GAROTÃO dá dinheiro. Pequeno, que vai passando, pede também o
relógio. O Garotão entrega. Pequeno, simpático, tira o pó da mão
do VAPOR e dá para o Garotão.
Thiago pára de bicicleta, negocia, e compra.
Jovens entram levando nas mãos dinheiro, objetos de ouro e
armas. E saem com trouxinhas de droga.
O pequeno FILÉ COM FRITAS passa de mãos dadas com MÃE dele. Faz
um tchauzinho para Bené e Pequeno. A Mãe puxa com força a mão do
menino, deixando claro que ela não quer que ele se envolva com
aquela turma.
BUSCA-PÉ (V.O.)
A boca dos Apês decolou rapidinho. Era
fácil de chegar nela até pra quem era de
fora da Cidade de Deus. Pra quem era
playboy, ficou fácil conseguir um branco
manero. Pra mim é que a situação foi
ficando mais difícil.
Busca-Pé vira uma esquina e vê, no meio da rua, Zé Pequeno, Bené
e outros bandidos.
Ele volta por onde veio e começa a dar a volta no bloco.
BUSCA-PÉ (V.O. cont.) (cont.)
Eu morria de medo do Zé Pequeno... E ele ia
tomando conta do pedaço. Eu fazia possível
pra não cruzar o meu caminho com o dele.
74 EXT. LOCAÇÕES DIVERSAS / ARTE / ANIMAÇÃO - MAPA 74
Mapa estilizado da Cidade de Deus indicando a localização das
bocas. Efeito de animação acompanha a narração de Busca-Pé de
maneira a ilustrar o crescimento da área de Zé Pequeno.
BUSCA-PÉ (V.O. cont.)
A boca dos Apês era pouco pro bandido. Ele
logo tomou outra boca que tinha na Treze,
do Jerry Adriane.
Justaposição de Jerry Adriane caído no chão, cercado por Zé
Pequeno e outros bandidos.
ZÉ PEQUENO
Ataque soviético nele.
Os bandidos disparam.
No mapa, boca de Lá Embaixo é sinalizada.
pág.55.
73 CONT.: 73
(CONT.)
BUSCA-PÉ (V.O.)
Depois tomou a boca do Espada Incerta, que
ficava Lá Embaixo.
Justaposição de Zé Pequeno matando Espada Incerta junto ao
barracão de obras, sob a luz, tal como na execução de Jabá.
No mapa, novas bocas são sinalizadas.
BUSCA-PÉ (V.O.cont.) (cont.)
Zé Pequeno montou mais duas bocas em volta
dos Apês. Por onde eu fosse, lá tava o Zé
Pequeno. O bandido só não mandava lá na
Quinze: o território do Sandro Cenoura.
75 EXT. BOCA DE CENOURA - DIA 75
Busca-Pé comprando droga de Sandro Cenoura.
BUSCA-PÉ (V.O. cont.)
Cada vez que eu queria fumar um baseado, eu
tinha que subir até a Quinze, na boca do
Sandro Cenoura.
76 EXT. RUA DO CONJUNTO - DIA 76
Busca-Pé correndo pela rua ansioso.
BUSCA-PÉ  (V.O. cont.)
Mas o sacrifício valia a pena. Porque eu só
fumava...
77 EXT. FIGUEIRA MAL-ASSOMBRADA - DIA 77
Busca-Pé acende um baseado e passa para Angélica, que está
olhando as fotos que ele fez na praia. Ela fuma. Ele fuma. Eles
se beijam.
BUSCA-PÉ (V.O. cont.)
... quando eu tava com a Angélica. Assim
que ela dispensou o Thiago, eu caí matando.
E conquistei o coração da mina.
ANGÉLICA
Busca-Pé, tuas fotos são lindas. Tu leva o
maior jeito.
Busca-Pé mal consegue disfarçar a vaidade.
BUSCA-PÉ
Tu acha mesmo?
ANGÉLICA
Claro que sim. Olha só...
pág.56.
74 CONT.: 74
(CON
PONTO DE VISTA DE ANGÉLICA
O dedo de Angélica vai mostrando detalhes da foto: Thiago
aparece diminuído ou coberto por uma sombra e há uma luz
especial sobre o rosto de Angélica.
ANGÉLICA (OFF cont.) (cont.)
Olha que bonita que eu saí...
BUSCA-PÉ (OFF)
Você é linda.
ANGÉLICA (OFF)
Tô falando sério. E olha o Thiago, como
ficou sem graça.
Volta para dois, muito agarradinhos.
BUSCA-PÉ
Ele é sem graça.
Busca-Pé olha nos olhos de Angélica. Ela faz uma cara de safada.
Ele se move de maneira a dar a entender que ela está abrindo o
zíper da calça dele.
Busca-Pé sua. Está excitado, mas, ao mesmo tempo, tenso. Ele
segura um dos peitos de Angélica. Na outra mão, ainda segura o
baseado. Vai dar um beijo nela quando...
OTÁVIO e LAMPIÃO e mais outros 4 MOLEQUES bandidos, passam pela
Figueira e topam com Busca-Pé e Angélica. Ela se assusta. BuscaPé, também, mas tenta disfarçar o medo.
A molecada cerca Busca-Pé e Angélica.
OTÁVIO
Aí! Dá pra gente experimentar o bagulho.
Busca-Pé passa o baseado para Otávio. Ele dá uma tragada e passa
o baseado para Lampião.
Angélica, assustada, se levanta, se ajeita e sai correndo.
Busca-Pé vai atrás.
BUSCA-PÉ
Angélica, espera aí!
Otávio não entende nada. Mas agradece num grito.
OTÁVIO
Valeu, cumpádi. Tu é legal pra caramba,
hem?
pág.57.
77 CONT.: 77
78 ARTE - CARTELA 78
Texto enche a tela: BENÉ E OS COCOTAS
79 EXT. DIANTE DA BOCA DOS APÊS - DIA 79
Thiago entrega Neguinho -- que está visivelmente mal-humorado --
uma corrente de ouro e um relógio e recebe em troca trouxinhas
de cocaína.
BUSCA-PÉ (V.O.)
Depois que levou o fora da Angélica, o
Thiago tava cada vez mais ligadão em
cocaína. Diziam até que ele andava roubando
dinheiro e coisas da casa dele para comprar
droga na boca dos Apês.
Bené está por perto, recebendo um sanduíche das mãos de Filé com
Fritas. Bené dá dinheiro para Filé com Fritas e faz um cafuné
rápido na cabeça do garoto, que sorri agradecido.
Bené olha Thiago de um jeito estranho.
PONTO DE VISTA DE BENÉ:
O olhar de Bené "analisa" o visual de Thiago: tênis Adidas,
short Pier, camiseta Hang Ten, cabelo encaracolado.
Thiago está montando em sua BICICLETA DE 10 MARCHAS, quando
percebe o olhar estranho de Bené, fica meio desconfiado, e acaba
derrubando a BICICLETA de Neguinho -- também de 10 marchas --,
que está por perto.
Neguinho se irrita e empurra Thiago.
NEGUINHO
Qualé branquelo? Tu tá a fim de fuder
comigo?
Thiago deixa cair a sua bicicleta para levantar a de Neguinho,
sem deixar de notar que continua sendo observado estranhamente
por Bené.
THIAGO
Desculpa aí, meu cumpádi!
NEGUINHO
Cumpádi o caralho! Batizei algum filho teu?
Vamo saindo aí, rapá. Rapidinho.
Thiago monta na sua bicicleta, empina a dianteira com extrema
perícia e sai pedalando.
Bené, logo em seguida, monta na bicicleta de Neguinho.
pág.58.
(CONT.)
BENÉ
Aí, Neguinho! Me empresta tua magrela pra
eu dar uma banda.
NEGUINHO
Vai fundo, Bené.
Bené sai pedalando meio desajeitado atrás de Thiago.
80 EXT. RUAS NAS PROXIMIDADES DA BOCA - DIA 80
Thiago pedala tranqüilamente, ser perceber que está sendo
seguido por Bené. O clima é de tensão. Bené pedala cada vez mais
rápido, alcançando Thiago rapidamente.
Thiago leva um SUSTO ao ver Bené emparelhado com ele, perde o
equilíbrio e quase cai.
Eles param lado a lado.
BENÉ
Aí, meu cumpádi! vamo fazer uma corrida aí
nóis dois.
Thiago tenta disfarçar o medo falando firme.
THIAGO
Tu diz até aonde...
BENÉ
A gente vamo até as Últimas Triagens e
depois volta pra cá. Tá pronto?
THIAGO
Na hora que tu quiser.
BENÉ
Um... dois... três... Já!
Thiago sai na frente e começa a se distanciar rapidamente de
Bené.
Ele olha para trás, e vê que está ganhando fácil. Em vez de se
empolgar, fica preocupado.
Thiago dá um sutil brecadinha para perder velocidade.
Quando Bené consegue ultrapassá-lo, Thiago respira aliviado.
Bené ganha a corrida.
Ele pára sua bicicleta, e espera Thiago chegar até ele. A
expressão do bandido é mais simpática que antes.
BENÉ (CONT.)
Tá pensando que é mole?
pág.59.
79 CONT.: 79
(CONT.)
THIAGO
É, tu é foda mermo!
BENÉ
Aí, tu comprou esse tênis aonde?
THIAGO
Comprei lá em Madureira.
BENÉ
E a camisa?
THIAGO
Na Sul. É tudo roupa de marca.
BENÉ
Aí, se eu te der o dinheiro tu compra lá
pra mim?
THIAGO
Compro. Tu quer uma camiseta, um short e um
tênis, né?
Bené tira do calção um EMBRULHO CILÍNDRICO e o entrega a Thiago.
BENÉ
Me traz umas calça de marca, também... Aí,
pode comprar tudo o que der com esse
dinheiro...
Thiago desenrola o embrulho fica perplexo com quantidade de
dinheiro que tem nas mãos.
THIAGO
Que tamanho que você usa?
BENÉ
Sei lá. Mede aí.
THIAGO
Com quê?
BENÉ
Com palmo, porra.
Com um certo receio de tocar no bandido, Thiago começa a tomar
as medidas de Bené usando com padrão o palmo.
Começa a tocar “Metamorfose Ambulante”, de Raul Seixas.
81 INT. CORREDOR DO CAFOFO - NOITE 81
Continua o som de Raul Seixas. Espalhadas pelo chão, dúzias de
camisetas, shorts, calças e pares de tênis.
Thiago e Mosca -- mulher de Bené -- estão encaracolando o cabelo
de Bené, sem revelar exatamente o que eles estão fazendo.
pág.60.
80 CONT.: 8
82 INT. CORREDOR DO CAFOFO DE ZÉ PEQUENO - DIA 82
Bené está diante de Zé Pequeno, Neguinho e Tuba, exibindo seu
novo visual. Os cabelos dele estão encaracolados.
BENÉ
Virei playboy!
Ninguém sabe como reagir. Olham para Pequeno.
ZÉ PEQUENO
Aí, rapaziada! Tem que tomar cuidado no
pedaço agora. Cocota bota ovo depois que
balança a bundinha no baile!
Pequeno começa a rir. Os bandidos caem na gargalhada.
TUBA
É... Balança a bundinha...
Os bandidos riem mais ainda. E começam a imitar os sons e
movimentos das galinhas.
Bené saca a arma e atira no chão, quase acertando o pé de Tuba.
Os bandidos saem correndo e rindo, perseguidos por Bené, que
continua disparando.
83 INT. SALÃO DE BAILE - NOITE 83
Cena mostra Bené como elemento de ligação entre bandidos e
cocotas.
Todos se misturam numa parte do salão. Todos bebem cerveja à
vontade. Além de fumar maconha e cheirar cocaína.
Bené é querido por todos.
Busca-Pé chega de mãos dadas com Angélica. Eles saúdam
Barbantinho, que faz o som da festa.
Angélica está bastante à vontade em meio a tantos bandidos.
BUSCA-PÉ
Fica tranqüilo. A rapaziada aqui me
considera do conceito.
ANGÉLICA
Eu tô na boa, Busca-Pé. Relaxa.
Angélica se afasta um pouco. Busca-Pé sussurra para Barbantinho.
BUSCA-PÉ
E aí? Não vai ter ninguém na tua casa,
mesmo?
pág.61.
(CONT.)
BARBANTINHO
Ninguém, rapá. Tu pode levar o broto pra lá
e ó... Quebrar esse teu cabaço aí.
BUSCA-PÉ
Fala baixo, Barbantinho.
Bené passa por eles. Busca-Pé o cumprimenta com reverência.
BUSCA-PÉ (cont.)
E aí, Bené!
Neste momento, Angélica volta para perto de Busca-Pé. Bené e
Angélica trocam olhares e sorrisos. Busca-Pé fica enciumado.
Câmera acompanha Bené, que é saudado efusivamente por onde
passa.
BUSCA-PÉ (V.O.) (CONT.)
Bené era o bandido mais responsa da Cidade
de Deus. Ele vivia pagando cerveja pra todo
mundo. Distribuía maconha e cocaína à
vontade.
(CONT.)
Bené encontra Thiago. Eles se abraçam. Apontam na direção de
Busca-Pé e Angélica. E caminham em direção a eles. Busca-Pé faz
cara de quem, no mínimo, vai levar uma surra.
BUSCA-PÉ (V.O. cont.) (cont.)
Meu único problema era que a amizade entre
o Bené e o Thiago. O Thiago ainda tava de
bronca comigo por causa da Angélica. E se o
Bené quisesse foder comigo, eu tava morto.
Porém, Bené faz com que ele e Thiago se dêem as mãos, num gesto
de paz. Thiago não esconde estar fazendo aquilo contra a sua
vontade.
BUSCA-PÉ (V.O. cont.) (cont.)
Mas ainda bem que o Bené era legal pra
caramba... Por causa dele, o Thiago fez as
pazes comigo...
Bené e Angélica flertam. Bené tira Angélica para dançar.
BUSCA-PÉ (V.O. cont.) (cont.)
E por causa dele, eu percebi que não ia ser
com a Angélica que eu ia perder a minha
virgindade...
Mosca, a mulher de Bené, se aproxima. Ela percebe a troca de
olhares entre Bené e Angélica, e puxa o marido pelo braço para
longe dali.
pág.62.
83 CONT.: 83
(CONT.)
BUSCA-PÉ (V.O. cont.) (cont.)
Pena que nem todos os bandidos eram como o
Bené...
CÂMERA SE MOVE PARA:
84 EXT. DIANTE DO GALPÃO DO BAILE - NOITE 84
Uma RODA DE CURIOSOS fora. No meio da roda Pequeno e Cenoura
discutem violentamente.
Tuba, como sempre, está o mais perto que pode de Zé Pequeno. Ele
tenta falar, mas não consegue. E limita apenas a imitar os
gestos de Zé Pequeno.
Também vemos Neguinho ao lado da mulher dele, uma jovem negra
GRÁVIDA. O olhar de Neguinho revela seu preferência por Cenoura.
ZÉ PEQUENO
Aí, Cenoura. Tu não tem que deixar aqueles
moleques lá da caixa baixa ficar roubando
aqui na favela não, morou?
CENOURA
Meu irmão, eu cuido da minha vida, não
quero saber da vida dos outros, não. Vai
você mermo dar idéia a eles, morou?
ZÉ PEQUENO
Vim te dar idéia, porque tô sabendo que os
cara tão formando contigo lá na tua área.
CENOURA
Tu inventando isso pra tomar minha boca,
rapá! Pensa que eu não tô sabendo.
Pequeno saca uma arma.
Cenoura saca uma arma.
Bené se coloca entre os rivais.
BENÉ
Pô, meus cumpádi! A gente tamo na moral!
ZÉ PEQUENO
Porra, Bené! O cara tá fudendo a nossa
segurança no pedaço! A molecada da Treze tá
barbarizando! Tu vai esperar os samango vim
pra cima da gente? Morou?
BENÉ
Na moral, cumpádi! Na moral! Aí, Cenoura!
Tu é irmão, tá ligado? É só tu avisar os
moleques da Caixa Baixa que tu gosta lá pra
dar um tempo, tá ligado?
pág.63.
83 CONT.: (2) 83
(CONT.)
CENOURA
Pode deixar que vou dar uma idéia lá com
eles, Bené.
ZÉ PEQUENO
Tu diz pra Caixa Baixa o seguinte: na
favela do Zé Pequeno ninguém estrupa e
ninguém rouba, tá ligado?
85 INT. PADARIA - DIA 85
Um paralelepípedo estilhaça o vidro de um balcão.
O PORTUGUÊS, dono da padaria, coloca as mãos na cabeça, atônito.
A molecada da CAIXA BAIXA aproveita a confusão para roubar os
frangos assados de uma máquina de assar.
BUSCA-PÉ (V.O.)
A Caixa Baixa era um bando de moleques de
rua que entravam na Cidade de Deus pra
roubar. O que eles não sabiam é que a
Cidade de Deus agora tinha dono...
RAFAEL, o menorzinho do bando, entra na padaria e sai com as
mãos cheias de doces.
86 EXT. RUA DA CIDADE DE DEUS - DIA 86
Cena mostra como os bandidos são respeitados pelos moradores.
Vários cumprimentam Zé Pequeno e Bené com verdadeira admiração.
Filé com Fritas, um garoto de 8 anos, faz parte da patrulha.
Tuba, como sempre, segue Zé Pequeno de perto.
BUSCA-PÉ  (V.O. cont.)
O pior é que a Cidade de Deus virou um
lugar mais seguro pros moradores depois que
o Zé Pequeno assumiu o controle da
situação. Quase que não tinha mais crime
nenhum.
(CONT.)
Um DONO DE PADARIA vem ao encontro dos bandidos. Não ouvimos o
que ele diz, mas entendemos que está se queixando com eles.
BUSCA-PÉ (V.O. cont.)
E se alguém tivesse alguma queixa, não
precisa chamar a polícia. Era só falar com
Zé Pequeno.
pág.64.
84 CONT.: 8
87 EXT. LIMITE DA FAVELA - DIA 87
6 moleques da Caixa Baixa, todos por volta de 10 anos, estão
escondidos numa viela, devorando os frangos assados que roubaram
da padaria. Otávio --o líder do bando, 11 anos -- faz um
discurso enquanto come.
O pequeno Rafael, num canto, come apenas os doces que roubou
sozinho. Ele parece acompanhar a conversa com movimentos de
cabeça. Tem um sorriso maroto.
OTÁVIO
O negócio é tóchico, tá ligado?
LAMPIÃO
Se tu quer ser traficante tem que começar
de avião, morou?
OTÁVIO
Essa onda de avião é roubada. Até tu pegar
consideração pra ser vapor e depois
segurança até virar gerente, demora a maior
etapa. Pra tu ficar na frente da boca, tu
tem que esperar os mais antigos morrer ou
ser preso.
LAMPIÃO
É assim que tem que ser. Quando os mais
velho, de dezoito, vinte ano morre, os mais
novo assume.
OTÁVIO
Tô fora! O negócio é fazer que nem o
Pequeno fez: tem que passar todo mundo!
LAMPIÃO
Mas aí precisa de arma!
OTÁVIO
Craro que precisa. Bandido que é bandido
tem que andar trepado.
STILL: OTÁVIO EM CLOSE. A IMAGEM OCUPA A TELA COMO SE FOSSE UM
SLIDE.
BUSCA-PÉ (V.O.)
O moleque mais esperto da Caixa Baixa era o
Otávio.
FUSÃO, SIMULANDO TRANSIÇÃO DE
PROJETOR DE SLIDE, PARA
88 INT. CARRO - DIA / REPLAY / COMPUTAÇÃO GRÁFICA 88
Mantendo o mesmo visual de slide sendo projetado, vemos o STILL
de Berenice, sentada no banco de trás do carro seqüestrado por
Cabeleira.
pág.65.
(CONT.
BUSCA-PÉ  (V.O. cont.)
O Otávio tinha a quem puxar...
TRANSIÇÃO DE PROJEÇÃO DE SLIDES.
STILL de Cabeleira empurrando o carro.
BUSCA-PÉ (V.O. cont.)
Ele era filho do Cabeleira...
TRANSIÇÃO DE PROJEÇÃO DE SLIDES.
STILL de Berenice no banco de trás do carro.
BUSCA-PÉ (V.O. cont.) (cont.)
... e da Berenice. O que aconteceu com
ela...
TRANSIÇÃO DE PROJEÇÃO DE SLIDES.
Volta STILL de Berenice.
Efeito: superposição de imagem de ultra-som mostrando o bebê
Otávio em formação, na barriga de Berenice.
BUSCA-PÉ (V.O. cont.) (cont.)
E como é que o Otávio nasceu e cresceu...
(CONT.)
FUSÃO, SIMULANDO TRANSIÇÃO DE
PROJETOR DE SLIDE, PARA
89 EXT. LIMITE DA FAVELA - DIA 89
Volta o STILL de Otávio comendo o frango
BUSCA-PÉ (V.O. cont.)
... e voltou pra Cidade de Deus é uma
história que eu nunca soube. E o Zé
Pequeno, pelo jeito, também não. Porque se
ele soubesse que aquele era o filho do
Cabeleira, ele teria tratado melhor o
moleque.
Imagem volta ao normal. Repetimos a última fala de Otávio.
OTÁVIO
O negócio é fazer que nem o Pequeno fez:
tem que passar todo mundo!
Otávio recebe um violento tapa na cabeça.
Neste momento, os bandidinhos percebem que estão cercados por Zé
Pequeno seguido por Tuba, Filé com Fritas e mais DOIS
TELEGUIADOS.
pág.66.
88 CONT.: 88
(CONT.
ZÉ PEQUENO
Tá falando o que de mim aí, otário?
Otávio, Lampião e outros dois conseguem fugir, “driblando”
habilmente os homens de Pequeno.
ZÉ PEQUENO (cont.)
Porra, os moleque são bom de fuga, hem?
Dois outros ficam imobilizados pelo pânico. Zé Pequeno vai até
eles, empunhando a arma.
ZÉ PEQUENO (cont.)
Vocês dois aí vão paga pelos que fugiram.
Vai ser o quê? Tiro no pé ou na mão?
Os garotos hesitam. Um deles, o pequeno Rafael, começa a chorar.
ZÉ PEQUENO (cont.)
Perguntei se vai ser tiro no pé ou na mão.
Como é que é?
Rafael estica a mão.
RAFAEL
Na mão, na mão.
Zé Pequeno dá sua gargalhada sinistra e atira nos pés dos
garotos. Em seguida, entrega sua arma ao garotinho Filé com
Fritas.
ZÉ PEQUENO
Aí, Filé com Fritas... Tu nunca passou
ninguém. Escolhe um dos dois, e senta o
dedo nele.
Tuba se coloca entre Filé com Fritas e Zé Pequeno.
TUBA
Deixa que eu passo ele, Zé Pequeno! Deixa
que eu passo!
ZÉ PEQUENO
Cala a boca, rapá!
Tuba abaixa a cabeça humilhado.
A mão do menino treme ao segurar a arma.
ZÉ PEQUENO (cont.)
E tu, rapá? Vai passá um deles ou num vai?
Os bandidos fazem uma espécie de torcida para animar o garoto,
que depois de alguma hesitação DISPARA seguidamente em um dos
bandidinhos. Sobra Rafael.
pág.67.
89 CONT.: 89
(CONT.)
ZÉ PEQUENO (CONT.)
Aí! Agora tu vai mancando até o buraco onde
tu se esconde com teus amigo. E avisa pra
eles que ninguém sacaneia na favela do Zé
Pequeno, morou?
Rafael vai mancando lentamente. Pequeno engatilha a arma. Fica
evidente que Pequeno pode matar o menino pelas costas quando bem
entender. O bandidinho percebe o perigo. Tenta se deslocar mais
rapidamente, apesar da dor provocada pelo ferimento no pé.
Rafael sua. Pequeno dá sua risada característica.
Finalmente, Rafael consegue virar a esquina do beco. Ele pára,
encosta no muro, e respira aliviado.
Ouvimos a RISADA de Pequeno, que assusta o bandidinho.
Rafael coloca o rosto na quina do muro para ver se está sendo
seguido.
DOIS DISPAROS SEGUIDOS.
Vemos duas balas, em slow motion, indo em direção a ele. A
primeira bala passa bem perto da cabeça dele. Quando a segunda
bala se aproxima de Rafael, a câmera desenquadra para não
mostrar o desfecho.
FADE OUT
90 EXT. BOCA DOS APÊS - DIA 90
Padeiro dá uma rosca de presente para Pequeno.
BUSCA-PÉ (V.O.)
Enquanto o Zé Pequeno ganhava o respeito
dos moradores...
Bené e Angélica estão por perto, se beijando.
BUSCA-PÉ (V.O. cont.) (cont.)
 ... o Bené ganhava o coração das minas.
Busca-Pé, meio de longe, observa a cena parado e estarrecido.
BUSCA-PÉ (V.O. cont.) (cont.)
E eu? Bom... Eu continuava virgem, sem
namorada e duro. Eu não tinha outra saída.
91 ARTE - CARTELA 91
Texto enche a tela: VIDA DE OTÁRIO
pág.68.
89 CONT.: (2) 89
92 INT. MAKRO - DIA 92
Vemos Busca-Pé caminhando, entediado, pelos corredores do
supermercado. Ele olha para os lados e para os produtos na
prateleira: CHOCOLATES. Tudo leva a crer que ele está lá para
roubar.
De repente, um FUNCIONÁRIO passa por ele e o saúda. A atitude de
Busca-Pé muda completamente. Vemos que ele tem um crachá na
camisa: ele também é funcionário.
BUSCA-PÉ (V.O.)
Eu arrumei emprego de fiscal numa loja do
Makro, bem longe da Cidade de Deus.
Trabalhei lá um tempão, ganhando mixaria.
Eu já tava torcendo para eles me mandar
embora. Com a grana da indenização e
comprar uma máquina fotográfica de verdade.
Mas não foi bem assim que as coisas
aconteceram...
Câmera se move para outro corredor, onde, Otávio e Lampião
(bandidos da Caixa Baixa) estão enfiando mercadorias no calção.
Um SEGURANÇA flagra. Eles saem correndo, perseguidos pelo
Segurança, e acabam cruzando com Busca-Pé.
Otávio vê Busca-Pé e o saúda alegremente. Um SEGURANÇA vê a
cena.
OTÁVIO
Aí, meu cumpádi, fumando muito do bom?
SEGURANÇAS da loja tentam capturar os garotos, mas eles driblam
os marmanjos, saltam sobre uma caixa e correm livres para a rua.
Um dos seguranças olha feio para Busca-Pé.
93 INT. ESCRITÓRIO DO GERENTE - DIA 93
Vemos o GERENTE gritando com Busca-Pé, que fica de cabeça baixa,
ouvindo a bronca.
BUSCA-PÉ (V.O. cont.)
O filho da puta do gerente achou que eu
tava formado com os moleques da Caixa
Baixa. Me mandou embora por justa causa.
Sem porra nenhuma de indenização.
Honestidade não compensa.
94 EXT. RUA DA FAVELA - DIA 94
Busca-Pé, deprimido, está encostado num muro.
Bené e Zé Pequeno passam por eles em cima de mobiletes, fazendo
curvas, indo e vindo. Zé Pequeno gargalha como uma criança que
descobre um brinquedo novo.
pág.69.
(CONT.)
Ao fazer uma curva mais fechada para retornar, Zé Pequeno perde
o equilíbrio e cai. A mobilete cai sobre um dos braços do
bandido. Bené ri.
Busca-Pé faz cara de quem teve um insight.
95 ARTE - CARTELA 95
Texto enche a tela: CAINDO NO CRIME
96 INT. ÔNIBUS - NOITE 96
Busca-Pé e Barbantinho entram no ônibus e se sentam no banco de
trás.
O trocador é Mané Galinha.
Busca-Pé vê que a arma de brinquedo, enfiada na cintura da calça
de Barbantinho, está aparecendo. Ele conversam SUSSURRANDO.
BUSCA-PÉ
Esconde o berro aí, rapá!
Barbantinho esconde a arma sob a camiseta.
BARBANTINHO
Que mané berro! Isso aqui não é de nem de
espoleta.
BUSCA-PÉ
Foda-se! É só pra assustar!
O ônibus pára. Uma MULHER GORDA entra com uma atitude
ostensivamente agressiva.
Ela passa com dificuldade pela catraca.
GORDA
Demorou pra vim esse ônibus hoje, hem?
GALINHA
A culpa é da empresa, dona. Eles não bota o
número de carros que precisa na linha. Por
isso que demora.
A Gorda olha feio para Galinha. Ele olha para Busca-Pé e
Barbantinho com o sorriso de quem busca cumplicidade. Os dois
riem de volta, nervosamente. E voltam a falar sussurrando.
BARBANTINHO
Eu já vi esse cara antes! Acho que ele mora
lá na favela. Ele deve de ter reconhecido a
gente.
pág.70.
94 CONT.: 94
(CONT.)
BUSCA-PÉ
Pára com isso, mané! Foda-se se o cara é de
lá. Tu acha que ele vai ligar se a gente
levar o dinheiro do patrão dele?
BARBANTINHO
Não sei não...
BUSCA-PÉ
Vamo lá! Agora.
Os dois se levantam e se aproximam da roleta. Mas antes que
Barbantinho tenha tempo de sacar a garrucha, Galinha se dirige a
eles com uma oferta desconcertante:
GALINHA
Dá um pulo aí um dos dois e paga um só.
Os jovens se surpreendem. Busca-Pé pula a catraca. Barbantinho
passa normalmente e paga.
GALINHA (CONT.)
Ainda bem que é a última viagem.
BARBANTINHO
Tu não mora lá na Cidade de Deus?
GALINHA
Moro no Quinze. Vocês são de lá também.
BARBANTINHO
É...
GALINHA
Aí... Vocês têm que estudar pra sair
daquele lugar, morou? Ali tem muito
bandido.
BARBANTINHO
O Busca-Pé faz colegial. Eu tô me
preparando pra ser salva-vida. Que nem meu
pai.
GALINHA
É isso aí.
BUSCA-PÉ
Tu estuda?
GALINHA
Estudei até o colegial. Só tirava nota
alta. Servi o exército. Fui o melhor
atirador do meu batalhão. Mas mesmo assim
tá difícil pegá emprego melhor que esse
aqui.
pág.71.
96 CONT.: 96
(CONT.)
BARBANTINHO
Tô sabendo. O Busca-Pé quer trabalhar de
fotógrafo. Mas com a máquina Xereta que ele
tem, não dá.
BUSCA-PÉ
Pior é que é.
GALINHA
Mas tem acreditar, rapá! Ó... Eu sei lutar
caratê. Se um dia eu conseguir arrumar um
emprego numa academia, cumpádi, eu saio da
favela.
BARBANTINHO
Tu é bom de briga, então?
GALINHA
Eu sou de paz, mermão. Mas se precisar...
O ônibus pára. Busca-Pé puxa Barbantinho pelo braço.
BUSCA-PÉ
Aí, Barbantinho! vamo nessa!
GALINHA
Vão com Deus!
Barbantinho sai cantarolando.
97 EXT. DIANTE DE UMA PADARIA - NOITE 97
Barbantinho e Busca-Pé descem do ônibus. Um olha para o outro
como se pedissem desculpas.
BARBANTINHO
Não ia dar, né?
BUSCA-PÉ
Não... O cara era legal pra caramba!
BARBANTINHO
Aí! Vamo voltar pra casa?
Busca-Pé vê que estão diante de uma padaria.
BUSCA-PÉ
Nem fodendo! Ó lá! Vamo roubar essa padaria
aí! Tem pouca gente. Vamo que vai ser mole!
Os dois caminham em direção à padaria.
CORTA PARA:
pág.72.
96 CONT.: (2) 9
98 INT. PADARIA - NOITE 98
PASSAGEM DE TEMPO: entendemos que Busca-Pé e Barbantinho já
estão na padaria há algum tempo. Eles conversam animadamente com
a MOÇA DO CAIXA -- uma jovem bonita, simpática que usa uma blusa
com um decote bastante atrevido, do qual Busca-Pé não consegue
tirar os olhos. Ela não disfarça que está gostando de ser
cobiçada.
BUSCA-PÉ (V.O.)
O lance da padaria também não rolou. A mina
do caixa era legal pra caramba.
A Moça do Caixa anota algo num guardanapo de papel, tipo
sedinha, e entrega para Busca-Pé, junto com um sonho de valsa
que ela discretamente rouba do caixa. O clima é de flerte.
BUSCA-PÉ (V.O. cont.) (cont.)
E ela era muito gostosa. E me deu o maior
mole. Quando ela me passou o telefone, eu
achei que daquela vez eu ia até o fim.
99 EXT. AVENIDA - NOITE 99
Busca-Pé e Barbantinho andam por uma avenida escura e deserta,
fazendo sinal de carona para os poucos carros que passam.
BUSCA-PÉ
Não desanima, não, meu cumpádi! O começo é
sempre mais difícil.
BARBANTINHO
Pior é que é!
BUSCA-PÉ
O que você achou dela?
Um FUSCA pára um pouco adiante.
Busca-Pé e Barbantinho correm até o carro. Quando eles chegam, a
porta do passageiro se abre.
O PAULISTA que dirige o carro -- um jovem universitário -- está
ansioso.
PAULISTA
Porra, meu! Tô perdidão! Como é que chego
na Barra?
Busca-Pé e Barbantinho se entreolham com cumplicidade. Ambos
sorriem com uma leve expressão de maldade no rosto.
BUSCA-PÉ
A gente tamo indo pra lá!
PAULISTA
Entra aí!
pág.73.
(CONT.)
Barbantinho ajeita a arma no calção.
BUSCA-PÉ (V.O.)
Naquele momento eu pensei: esse paulista
vai dançar! Porque nenhum paulista pode ser
legal pra caramba.
100 EXT. DEPOIMENTO - MINIBIOGRAFIA 100
A Mulher de Neguinho, que é negra, segura no colo um bebê branco
e fala para a câmera.
MULHER DE NEGUINHO
Tem coisa que é vontade de Deus. E a
vontade de Deus a gente não discute, tá
sabendo? Eu sou preta. Meu marido é preto.
Mas Deus quis que nóis tinha um filho
branco, e o filho nasceu branco.
101 EXT. AVENIDA ESCURA - NOITE 101
Um rabecão chega e estaciona ao lado de um fusquinha da polícia
no acostamento de uma avenida escura, à beira de um matagal.
Ouvimos os sons de FREADAS BRUSCAS e SIRENES.
102 EXT. MATAGAL - NOITE 102
Policiais civis e técnicos da perícia examinam algo que não
podemos ver. Entendemos que há um cadáver no local. Um dos
peritos fotografa a cena do crime.
INSERT:
3 fotos sucessivas do cadáver: é a mulher de Neguinho.
O detetive Cabeção -- mais velho -- chega e abre caminho entre
os policiais presentes. Ele olha para o cadáver -- que ainda não
vemos -- com uma expressão de assombro.
CABEÇÃO
Puta que pariu! O animal que fez isso só
pode ter saído de um lugar: vamo pra Cidade
de Deus!
103 EXT. AVENIDA ESCURA - NOITE 103
O mesmo fusca que antes parou para dar carona a Busca-Pé e
Barbantinho trafega agora pela avenida do matagal, diminuindo a
marcha ao passar pelo lugar onde estão estacionadas as viaturas
de polícia.
Criamos a impressão de que se trata de um crime cometido por
Busca-Pé e Barbantinho.
pág.74.
99 CONT.:
104 INT. FUSCA - NOITE 104
No interior do fusca vemos o Paulista e Busca-Pé, na frente, e
Barbantinho, atrás.
O Paulista aumenta o volume do toca-fitas. A música que toca é
"Magrelinha", com Luiz Melodia.
BARBANTINHO
Grande Melodia!
PAULISTA
Você gosta dele?
BARBANTINHO
Pra caralho! Sou apaixonado por MPB. Sou
apaixonado por música.
PAULISTA
Então, vai dizer que você não gosta de um
baise, meu?
Barbantinho se anima e entra na conversa.
BARBANTINHO
Não vou dizer que eu não conheço...
Paulista tira do bolso uma embalagem plástica de negativo
fotográfico, passando-a para Busca-Pé.
PAULISTA
Pela cara de você... Maluco saca maluco,
meu.
Busca-Pé abre a embalagem, saboreia o cheiro da maconha, pega
uma sedinha no bolso, um punhado de maconha da embalagem, enrola
um baseado.
BUSCA-PÉ  (V.O.)
Eu sempre fui um mestre na arte de enrolar
baseado. Se eu tivesse a mesma habilidade
com as mulheres...
Detalhe da língua de Busca-Pé lambendo o papel: é a sedinha da
menina da padaria: o telefone dela está anotado.
Busca-Pé acende o baseado, queimando o número do telefone.
BUSCA-PÉ  (V.O.) (CONT.)
Não teria queimado tantas oportunidades de
perder a virgindade.
Barbantinho, agradecido, bate no ombro do Paulista.
BARBANTINHO
Tu é legal pra caramba, hem?
pág.7
105 INT. BOCA DOS APÊS - NOITE 105
Neguinho está levando a maior surra de Zé Pequeno, que bate com
uma certa dificuldade porque está com o braço engessado.
Bené fica quieto num canto, apenas observando.
Tuba, sempre por perto, imita discretamente os gestos de Zé
Pequeno.
ZÉ PEQUENO
Tinha que passar ela longe da favela, seu
filho da puta! Agora a polícia tá de bronca
todo dia no pedaço! Chifrudo filho da puta!
TUBA
É... Chifrudo... Filho da puta!
Zé Pequeno saca a arma e encosta o cano na cabeça de Neguinho,
que implora pela vida aos prantos.
NEGUINHO
Porra, Pequeno! Foi lavação de honra, meu
cumpádi! A família dela já me cagüetou!
Essa bronca não ficar pra você, não.
Zé Pequeno dá sua risada característica enquanto engatilha a
arma.
Bené intervém, tirando a arma da mão de Pequeno.
BENÉ
Não atira, não, meu cumpádi. Tu já castigou
o cara!
ZÉ PEQUENO
Qualé, Bené! Tu conhece a lei, rapá! Quem
mata na favela do Zé Pequeno tem que morrer
pra dar o exemplo.
BENÉ
Mas o mané aí fez uma parada que era do
contexto dele mermo, tá ligado. Aí...
(cont.)
Bené levanta Neguinho com violência, e o expulsa da boca com um
chute na bunda.
BENÉ (cont.)
Tu tem sair saindo rapidinho daqui, morou
Neguinho? Tu faltou com respeito, mané!
Agora tu vai ter se mudar pra outra favela,
tá ligado?
Zé Pequeno fica furioso com o amigo.
Bené estica duas carreiras gordas de cocaína.
pág.76.
(CONT.
ZÉ PEQUENO
Tinha que ter passado o cara, cumpádi. Quem
cria cobra morre picado, rapá!
BENÉ
Que nada, rapá! Aquilo é otário!
TUBA
É traidor!
ZÉ PEQUENO
Cala a boca, rapá!
Bené cheira uma carreira. Se levanta. Passa o canudo para Zé
Pequeno cheirar. E caminha em direção à porta.
BENÉ
Aí, cumpádi! Vou sair saindo... Minha
namorada cocotinha tá me esperando pra eu
dar um pega nela, morou?
Zé Pequeno segura Bené pelo braço.
ZÉ PEQUENO
Aí, mermão! Tu vai lá e aproveita bem. Dá
uma carga nela! Mas tu te prepara, cumpádi!
A gente vamo dá um tempo na moral até os
samango sair de cima. Depois, a gente vamo
tomar a boca do Cenoura e passar todo mundo
lá na Quinze... Morou?
Bené responde apenas com um movimento de cabeça, sinalizando que
está de acordo com Pequeno. Mas seu olhar não consegue disfarçar
o fingimento: entendemos que as intenções de Bené não são as
mesmas que as de Zé Pequeno.
106 INT. QUARTO DE MOTEL - NOITE 106
Bené e Angélica, abraçados na cama, fumam um baseado.
ANGÉLICA
Sabe o que eu acho, Bené?
BENÉ
Que eu sou gostoso pra caralho.
ANGÉLICA
Você é, sim. Mas eu tô falando de outra
coisa. Sabe o que eu acho que a gente tinha
que fazer?
BENÉ
Dar mais uma?
ANGÉLICA
Pô, Bené. Tô falando sério.
pág.77.
105 CONT.: 105
(CONT.)
BENÉ
Desculpa, meu amor. O que você quer fazer?
ANGÉLICA
Eu quero ir embora com você.
BENÉ
Pra onde?
ANGÉLICA
Pra um sítio. Pra viver numas de paz e
amor, tá sabendo? Esse papo de violência
não tá com nada. Tu é como eu. A gente é
hippie de coração.
BENÉ
Paz e amor é?
ANGÉLICA
É.
107 ARTE - CARTELA 107
Texto enche a tela: A DESPEDIDA DE BENÉ
108 INT. SALÃO DE BAILE - NOITE 108
No mesmo salão das outras vezes, Bené dá uma festa de despedida.
Barbantinho está fazendo o som. Busca-Pé está perto dele.
Bené e Angélica trocam beijos e abraços intensos. Estão
totalmente apaixonados.
BUSCA-PÉ (V.O.)
O Bené era gente fina demais pra continuar
naquela vida de bandido... Ele decidiu
largar tudo, inclusive a mulher, pra sair
saindo com a Angélica. Eles iam comprar um
sítio. E viver felizes pra sempre.
Zé Pequeno passa por Busca-Pé, esbarrando nele. Zé Pequeno
parece ser a única pessoa mal-humorada no local. E observa Bené
com um olhar desconfiado.
Tuba segue Zé Pequeno de perto, como se fosse um cachorrinho.
BUSCA-PÉ (cont.)
Quem não gostou da idéia foi o Zé Pequeno.
O cara parecia que ia dar um troço...
Bené nota o olhar de Pequeno. Deixa Angélica de lado e vai ao
encontro de Pequeno.
ZÉ PEQUENO
Aí, meu cumpádi! Tenho que de dar uma
letra.
pág.78.
106 CONT.: 106
(CONT.)
BENÉ
Que letra!
ZÉ PEQUENO
Tu num pode se mandá com essa cocota, rapá.
E a tua mulher?
BENÉ
Ela que se foda! Eu quero viver na paz no
meu sítio, tá ligado? Vamo fumar maconha à
vera e escutá disco do Raul Seixas o dia
inteiro...
Zé Pequeno dá sua risada característica.
NUM CANTO
Neguinho espreita Zé Pequeno. O rosto dele está machucado.
Voltamos à conversa entre Pequeno e Bené.
ZÉ PEQUENO
Tu quer dividir o que a gente ganhou junto
pra virar playboy, mané? Tu tá esquecendo
dos nossos planos? Aí... semana que vem a
gente vai atacar lá na Quinze. Vamo tomar a
boca do Cenoura. Tu pode ficar com ela pra
você.
BENÉ
Qualé, Pequeno? A gente conhece o Cenoura
há uma etapa. Deixa o cara!
ZÉ PEQUENO
Nem fodendo! O cara é nosso inimigo. Tem
que passá ele!
BENÉ
Aí, tu faz o que tu quiser. Tu é irmão meu,
cumpádi! Eu não vou entrar em arengação
contigo.
Bené se afasta.
Zé Pequeno fica perplexo. Olha para os lados. Não sabe o que
fazer. Anda para um lado, pára. Se vira para outro lado. Anda.
Pára. Está visivelmente perturbado, perdido. O espaço parece
girar em torno dele.
Até que ele vê Mané Galinha mais uma vez cercado de BELAS
MULHERES.
Zé Pequeno caminha resoluto em direção a Mané Galinha.
NUM CANTO
Neguinho se afasta. Ele manca.
pág.79.
108 CONT.: 108
(CONT.)
NO MEIO DO SALÃO
Zé Pequeno chega até onde está Galinha e dá um tapa na cara
dele.
ZÉ PEQUENO
Aí, bonitão. Tu tá sempre com mulherada,
né? Quero vê se tu é macho. Tira a roupa
aí. Tira tudo.
Galinha olha para Pequeno com jeito desafiador. Uma roda se
abre.
Zé Pequeno saca o revólver.
ZÉ PEQUENO (cont.)
Mandei tu tirar a roupa.
Galinha percebe que não tem outra saída. Abaixa a cabeça e
começa a desabotoar a camisa. Ele evita encarar o bandido nos
olhos.
NUM CANTO
Neguinho encontra uma posição de onde vê bem Zé Pequeno. Ele
tira uma arma da cintura da calça. Vê se ninguém está olhando.
NO MEIO DO SALÃO
Mané Galinha continua o striptease. Em volta dele, todos dão
risada e gritam:
CORO
Tira, tira, tira.
Entre as pessoas que estão em volta, está Busca-Pé, mas ele não
olha para Mané Galinha e sim para o que acontece...
NUM CANTO
Neguinho faz pontaria em Zé Pequeno. Sua mão treme. Seu olhar é
de ódio. Ele está pronto para atirar. Mas Zé Pequeno começa a se
movimentar em volta de Mané Galinha, fazendo com que Neguinho o
perca de vista.
NEGUINHO
Filho da puta!
Neguinho procura uma nova posição.
NUM OUTRO CANTO
Bené está dançando Angélica, alheio ao que acontece no meio do
salão.
pág.80.
108 CONT.: (2) 108
(CONT.)
Thiago chega junto um COCOTA, que carrega uma CÂMERA FOTOGRÁFICA
profissional. Thiago quebra o clima romântico.
THIAGO
Aí, Bené! O cumpádi aqui tá querendo trocar
essa câmera por um bagulho responsa.
BENÉ
Tu roubou isso de quem, mané?
COCOTA
Do meu pai!
BENÉ
Leva pra outro. Isso não é mais comigo!
ANGÉLICA
O Busca-Pé que ia se ligar nessa câmera!
Thiago fica enciumado.
THIAGO
Que mané Busca-Pé.
Bené tira do bolso um pacote razoavelmente grande de cocaína,
entrega o pacote para o Cocota e pega a câmera dele. Em seguida,
olha para os lados e avista Busca-Pé.
BENÉ
Aí, Busca-Pé! Chega mais!
Busca-Pé se afasta da roda e se aproxima de Bené, olhando de
relance para o canto onde está Neguinho. Busca-Pé percebe qual é
a intenção do bandido.
Busca-Pé se junta a Bené, que dá a câmera para ele.
BENÉ (cont.)
Tu num qué sê fotógrafo? Tomá aí: um
presente meu.
Busca-Pé abre um sorriso que é uma mistura de incredulidade e
plenitude.
NO MEIO DO SALÃO
Galinha está pelado, cobrindo o pênis com as mãos. Zé Pequeno
olha na direção de Bené, e vê que Busca-Pé está com ele.
Pequeno sai da roda e caminha na direção de Bené com cara de
invocado.
Pequeno chega junto a Bené e, abruptamente, arranca a câmera das
mãos de Busca-Pé e o empurra com violência. Busca-Pé cai no
chão. Olha feio para Pequeno. Mas Pequeno olha mais feio ainda.
E Busca-Pé baixa os olhos humilhado.
pág.81.
108 CONT.: (3) 108
(CONT.)
Zé Pequeno se aproxima de Bené numa postura corporal
desafiadora. Mesmo sendo baixinho, ele impõe respeito.
Bené toma a câmera dele.
BENÉ
Dá isso aqui, rapá!
Bené e Zé Pequeno ficam disputando a câmera: um puxa a máquina
da mão do outro.
NUM CANTO
Neguinho tem Pequeno novamente na mira. Engatilha a arma.
Do PONTO DE VISTA de Neguinho, vemos que Bené discute com
Pequeno. Bené tira a câmera das mãos de Pequeno e a devolve para
Busca-Pé, que a essa altura já está se levantando.
Neguinho dispara.
Na confusão, Bené é atingido, e cai morto nos braços de Zé
Pequeno.
A confusão no salão é geral.
Neguinho foge desesperado.
Angélica chora junto ao cadáver de Bené.
Zé Pequeno fica descontrolado. Dá ordens para todo lado, sem
fazer muito nexo.
ZÉ PEQUENO
Pega ele. Leva ele pro hospital.
Tuba se abaixa. Encosta a cabeça no peito de Bené.
TUBA
Ele tá morto.
ZÉ PEQUENO
E daí? Mandei levar pro hospital. Vocês aí.
Vão atrás do filho da puta que deu o tiro.
A comoção é geral. Todos correm de um lado para outro, até que
Zé Pequeno fica sozinho, diante do corpo de Bené, iluminado
pelas luzes do baile.
Começa a piscar a luz estroboscópica.
109 INT. CAFOFO DE CENOURA - NOITE 109
Neguinho -- completamente transtornado -- conversa com Cenoura,
que o escuta limpando calmamente sua arma.
pág.82.
108 CONT.: (4) 108
(CONT.
NEGUINHO
Aí, Cenoura! Eu se fudi nessa! Mas tu vai
se fuder também. O Pequeno tá louco pra
tomar tua boca.
Cenoura coloca as balas na arma.
NEGUINHO (CONT.)
Nóis tem atacar o cara de surpresa antes,
tá ligado?
Cenoura se levanta, fica atrás de Neguinho, apontando a arma na
nuca do assassino.
CENOURA
Tu matou o malandro mais responsa da Cidade
de Deus.
Cenoura atira. Neguinho cai morto.
110 EXT. CEMITÉRIO - DIA 110
O enterro de Bené reúne uma enorme quantidade de pessoas.
Todos estão muito sérios e tristes.
Angélica e Mosca choram abraçadas.
Busca-Pé fotografa tudo com sua câmera xereta. Ele trata a
câmera com muito carinho: segura a câmera com cuidado, protege a
lente com as mãos etc. Barbantinho está ao lado dele.
De repente, Thiago começa a cantar, baixinho.
THIAGO
Viva... Viva... Viva a sociedade
alternativa!
Busca-Pé olha para Thiago, que o encara nos olhos, continuando a
cantar.
THIAGO (cont.)
Viva... Viva... Viva a sociedade
alternativa!
Busca-Pé começa a fazer coro com Thiago.
BUSCA-PÉ
Viva... Viva... Viva a
sociedade alternativa!
THIAGO
Viva... Viva... Viva a
sociedade alternativa!
Barbantinho também começa a cantar. Logo, bandidos começam a
cantar junto. Entre eles, Sandro Cenoura.
O enterro se transforma numa grande festa.
Cocotas e bandidos cantam juntos "Sociedade Alternativa".
pág.83.
109 CONT.: 109
(CONT.)
Angélica começa a chorar convulsivamente. Ela se afasta da
multidão. A câmera acompanha Angélica até que ela cruza, na
saída do cemitério com:
Zé Pequeno chega acompanhado de um séquito de bandidos malencarados.
Tuba está ao lado de Zé Pequeno, seguindo-o de perto e imitando
os gestos dele. Tuba deixa claro que deseja ocupar o lugar de
Bené.
Zé Pequeno não canta. Apenas olha sério para a multidão festiva
em volta do túmulo de Bené.
Tuba começa a cantar, mas Zé Pequeno olha feio para ele. E Tuba
pára de cantar imediatamente, percebendo que deu um fora.
Pequeno olha para Cenoura com ódio. Cenoura não se amedronta.
De repente, Pequeno saca o revólver. Tuba percebe a ação e o
imita.
Pequeno dá tiros para o alto. Tuba faz o mesmo. E,
imediatamente, todos os bandidos que estão com ele também atiram
para o alto.
A multidão se dispersa correndo e gritando.
Pequeno dá sua gargalhada sinistra.
Numa montagem rápida de planos fechados, vemos o caixão de Bené
sendo colocado no buraco e, em seguida, sendo coberto por terra.
111 EXT. RUAS DO CONJUNTO - DIA / MAPA DE GUERRA 111
Acompanhado de um séquito de bandidos, Pequeno caminha pelas
ruas da Cidade de Deus, rumo à boca de Cenoura.
Desta vez, ele não é saudado pelos moradores, que entram em suas
casas e fecham portas e janelas, demonstrando o medo que sentem
de Pequeno.
EFEITO: em meia fusão entra MAPA DA FAVELA com linhas tracejadas
que mostram a trajetória de Zé Pequeno rumo à Boca da 15.
Música militar.
BUSCA-PÉ (V.O.)
Depois que Bené morreu, ninguém mais podia
segurar Zé Pequeno. Ele tava decidido a
matar o Cenoura e quem mais fosse pra virar
o único dono da Cidade de Deus...E quem é
que ia se atrever a dizer alguma coisa? A
Cidade de Deus tava condenada a ser a
favela do Zé Pequeno.
pág.84.
110 CONT.: 110
112 EXT. PRAÇA - DIA  112
Pequeno e seu exército de bandidos chegam numa praça. Bandidos
chegam por todos os lados e recebem armas.
BUSCA-PÉ (V.O.)
A quadrilha do Sandro Cenoura não era páreo
pro exército do Pequeno. Um ataque ali ia
ser um banho de sangue. Só um milagre ia
poder salvar o Cenoura...
Volta o mapa de guerra da favela em meia fusão.
De uma das casas da praça, sai uma LOURA de parar o trânsito.
BUSCA-PÉ (V.O.) (CONT.)
Mas tem lugar melhor nesse mundo pra
acontecer milagre do que uma favela chamada
Cidade de Deus?
A Loura passa apressada diante de Zé Pequeno e seu bando. Os
bandidos param para apreciar a vista. Zé Pequeno mexe com ela.
ZÉ PEQUENO
Coisa linda!
LOURA
Vê se te enxerga.
Os bandidos riem. Pequeno fica furioso. A Loura caminha
depressa. Pequeno vê ela virar uma esquina. E dá sua risada
característica.
Ele segue a Loura. E alguns bandidos vão atrás.
Virando uma esquina, Zé Pequeno vê a Loura “atracada” com Mané
Galinha, num beijo voluptuoso.
Alternamos entre o beijo e Zé Pequeno em close, fazendo uma cara
cada vez mais perversa.
BUSCA-PÉ (V.O.)
O problema do Zé Pequeno com o Mané Galinha
era muito simples: o Pequeno era feio. O
Galinha, bonitão. O Mané Galinha
conquistava qualquer mulher. O Zé Pequeno
só conseguia mulher pagando ou usando a
força...
Galinha percebe a aproximação de Pequeno e os dois se olham.
BUSCA-PÉ (V.O. cont.) (cont.)
A parada aí era entre o bonitão do bem e o
feioso do mal.
pág.85
113 EXT. TERRENO BALDIO - NOITE 113
Zé Pequeno sobe o calção. Entendemos que um estupro acaba de
acontecer.
Vários bandidos seguram Mané Galinha no chão. Um deles tem arma
encostada na cabeça de Galinha.
Zé Pequeno dá um tiro que passa de raspão no pé de Galinha.
Ninguém diz nada. Os bandidos apenas riem. E vão embora.
Mané Galinha se arrasta até a Loura, machucada, despida e
humilhada.
Galinha tenta abraçá-la, mas não consegue tocá-la. Ele apenas
chora.
114 EXT. DEPOIMENTO - MINIBIOGRAFIA 114
o AVÔ de Mané Galinha fala para a câmera. É um velhinho
simpático, com cara de bonzinho.
AVÔ
Sabe o que mais me enche o saco na minha
casa? É ouvir falar de Deus... Tudo crente,
na minha casa... E sabe o que me enche o
saco também? Que me digam que eu sou
bonzinho. Eu não sou bonzinho, muito menos
acredito em Deus. Eu sou é marxistaleninista. Acredito na força do povo, no
movimento de base, na organização do
proletariado, na luta armada. Mas ninguém
me faz caso nem na minha casa. É tudo
crente...
115 INT. COZINHA DA CASA DE GALINHA - NOITE 115
Galinha chora, enquanto conversa com um dos seus irmãos: GELSON,
um pouco mais jovem que Galinha.
GALINHA
Puta que pariu! Ela era virgem, tu sabia?
Virgem! Bandido filho da puta. Eu juro que
se eu tivesse dinheiro, mudava hoje mesmo.
Ia pra bem longe desta merda de lugar!
GELSON
É isso mermo que tu tem que fazer. Tu e a
tua noiva têm que se mandar daqui pra
sempre.
GALINHA
Eu não tenho mais coragem nem de olhar na
cara dela. Eu tava lá e não fiz porra
nenhuma. Por que que aquele bandido filho
da puta não me matou?
pág.86.
116 EXT. PRAÇA - NOITE 116
Zé Pequeno está caminhando, seguido por bandidos. De repente,
tem um insight:
ZÉ PEQUENO
Por que eu não matei aquele otário filho da
puta? Vamo lá passar o cara!
Pequeno dá meia volta, e sai apressado, seguido por vários
bandidos.
Os outros bandidos se dispersam
Música começa a criar um clima de tensão.
117 INT. COZINHA DA CASA DE GALINHA - NOITE 117
Close de Galinha chorando.
Música aumenta a tensão.
118 EXT. DIANTE DA CASA DE GALINHA - NOITE 118
Do lado de fora da casa, Pequeno e vários bandidos armados com
metralhadoras. Atiram para o alto.
ZÉ PEQUENO
Aí, seu otário! Tu é macho? Sai pra me
enfrentar!
Mais tiros de metralhadora. Pequeno dá sua risada
característica.
PERTO DALI
Escondido atrás de um monte de entulho, Cenoura observa a cena.
119 INT. COZINHA DE GALINHA - NOITE 119
Galinha quer sair para enfrentar Pequeno. Gelson tenta segurálo. Ambos falam aos berros.
GALINHA
Porra! O que esse filho da puta quer
comigo?
GELSON
Fica frio, fica frio!
GALINHA
Fica frio o caralho! Se eu não for falar
com o cara, ele mata todo mundo aqui!
pág.87.
(CONT.
A MÃE e outros 4 IRMÃOS de Galinha entram na cozinha, assustados
com os tiros e com os gritos.
GELSON
Me ajuda a segurar ele aqui.
Todos pulam sobre Galinha, conseguindo derrubá-lo e segurá-lo no
chão.
Gelson se afasta. Abre discretamente um gaveta, e tira dela uma
faca, que esconde na cintura do calção. Gelson sai da cozinha
120 EXT. DIANTE DA CASA DE GALINHA - NOITE 120
Pequeno e seus bandidos continuam disparando para o alto.
ZÉ PEQUENO
Sai pra fora otário! Senão eu vou invadir e
matar todo mundo aí dentro.
A porta da casa se abre. Gelson aparece com as mãos para cima.
GELSON
Aí... Na boa... Tô saindo.
Zé Pequeno estranha.
ZÉ PEQUENO
Tu não é o tal do Galinha, não! Minha
parada é com o Galinha! Cadê o filho da
puta? Eu sou o Zé Pequeno! Eu comi a
vagabunda dele? Cadê o chifrudo do Galinha?
Gelson vai se aproximando de Pequeno. Os bandidos não sabem como
reagir à coragem do jovem.
GELSON
Aí... Meu irmão não tá em casa, não. E tu
pode ficar na boa. Meu irmão é de paz. Ele
não quer matar ninguém, não!
Pequeno agarra Gelson pela camiseta.
ZÉ PEQUENO
Escuta aqui, otário? Tu não sabe quem eu
sou, não? Teu irmão pensa que é pintoso
demais pra vir falar comigo? Hem? Chama o
chifrudo aqui!
Pequeno faz uma cara de DOR. Larga Gelson. E cai no chão: seu
braço está sangrando. Os bandidos ficam perplexos.
A faca na mão de Gelson está manchada de sangue.
Pequeno aponta a metralhadora e dá o comando.
pág.88.
119 CONT.: 119
(CONT.)
ZÉ PEQUENO (CONT.)
Senta o dedo no filho da puta!
121 INT. SALA DA CASA DE GALINHA - NOITE 121
A mãe de Galinha está ajoelhada na sala, rezando. Ao lado dela,
está o Avô -- que há pouco apareceu na minibiografia. As balas
das metralhadoras dos bandidos estilhaçam vidros, furam paredes
e zumbem sobre ela, que não é atingida.
122 INT. COZINHA DA CASA DE GALINHA - NOITE 122
Os irmãos continuam segurando Galinha no chão.
Os tiros param. Galinha corre em direção à sala.
NA SALA
Galinha vê o Avô morto. Galinha começa a chorar e corre para a
rua.
123 EXT. DIANTE DA CASA DE GALINHA - NOITE 123
Uma pequena multidão está em volta do cadáver de Gelson.
A Mãe acende velas em volta do corpo do filho. Vizinhos
evangélicos improvisam um culto.
Galinha, ajoelhado aos pés do irmão, URRA desesperadamente.
Ele olha em volta. Sandro Cenoura está perto. Sua camiseta está
levemente desarrumada, deixando entrever o cabo de uma PISTOLA.
Galinha se levanta, arranca a pistola do calção de Cenoura. E
sai atrás de Pequeno.
124 EXT. PRAÇA DA QUADRA - NOITE 124
Pequeno está sentado no chão. TUBA, um bandido mais jovem, está
tentando limpar o ferimento no braço de Pequeno com água
oxigenada.
Pequeno sente dor.
ZÉ PEQUENO Ô, viado! Faz direito essa porra!
TUBA
Não tem outro jeito, Pequeno.
ZÉ PEQUENO
Porra! Como é que eu deixo otário de merda
me dá uma facada no braço?
TIROS assustam os bandidos. Vários saem correndo.
pág.89.
120 CONT.: 120
(CONT.)
Pequeno vê Galinha se aproximando a passos largos, apontando
firme a pistola e disparando.
Tuba, que está bem ao lado de Pequeno, leva um tiro no braço.
Pequeno se levanta. Dispara a esmo. E foge correndo. Tuba o
segue de perto.
Um outro bandido sai disparando na direção de Galinha. Leva um
tiro fulminante no meio da testa.
125 EXT. DIANTE DA BOCA DOS APÊS - NOITE 125
Pequeno está cansado de correr. Pára um pouco para recuperar o
fôlego. Logo em seguida, Tuba o alcança.
Tuba olha para Pequeno, e percebe que os dois estão feridos mais
ou menos no mesmo ponto do mesmo braço.
Tuba começa a rir histericamente.
TUBA
Tu viu essa, Pequeno? A gente tamo fudido
igual? Tu, por um irmão. Eu, pelo outro!
Zé Pequeno dá uma coronhada no ferimento de Tuba.
ZÉ PEQUENO
Cala a boca, mané!
Tuba geme. Mas logo volta a gargalhar histericamente.
TUBA
Tu já pensou se nóis também fosse irmão,
que nem os otário? Ia ser mais engraçado
ainda.
Pequeno dá um tiro fulminante na cabeça de Tuba.
ZÉ PEQUENO
Mandei tu calar a boca, rapá!
126 EXT. PRAÇA DA QUADRA - NOITE 126
De volta ao lugar em que Galinha matou os bandidos.
Galinha anda até o cadáver. Ele olha estarrecido para o que
acaba de fazer. Olha em volta. Sua expressão é de pânico. Está
arrependido.
Pouco a pouco, moradores começam a sair à rua. Outros vêm de
ruas próximas. Uma pequena multidão cerca Galinha.
O silêncio é absoluto.
pág.90.
124 CONT.: 124
(CONT.)
Uma VELHINHA se aproxima lentamente de Galinha e dá um beijo
nele.
VELHINHA
Deus te abençoe, meu filho.
Vemos Sandro Cenoura. Ele esboça um sorriso maldoso.
Vários moradores estão aglomerados em volta de Galinha. Muitos
querem apertar as mãos do “herói” que enfrentou os bandidos de
Zé Pequeno.
BUSCA-PÉ (V.O.)
Parecia que de repente a Cidade de Deus
tinha encontrado um herói...
Um pouco afastados da multidão, estão Busca-Pé e Barbantinho.
Busca-Pé começa a tirar fotos com a Xereta. A expressão no rosto
dele denota empolgação. Barbantinho, ao contrário, tem um ar de
preocupado.
BUSCA-PÉ (V.O.) (cont.)
Eu achava que o Galinha ia fazer a
revolução na Cidade de Deus! Mas Deus tinha
outros planos pra vida dele...
127 INT. CORREDOR DO CAFOFO - NOITE 127
Pequeno está nervoso. Anda de um lado para o outro. Os bandidos
que estão com ele parecem mudos. Ninguém tem coragem de dizer
nada.
Pequeno quebra o silêncio.
ZÉ PEQUENO
Aí... Filé com Fritas. Chega junto!
(CONT.)
FILÉ COM FRITAS, um menino de 9 anos, se levanta.
ZÉ PEQUENO (CONT.)
(cont.)
Tu corre lá na boca do Cenoura, e diz pra
ele que eu mandei tu dizer o seguinte pra
ele...
128 INT. CAFOFO DO CENOURA - NOITE 128
O menino Filé com Fritas dá o recado a Cenoura, que ostenta sua
metralhadora. O local está cheio de bandidos. Todos de pé.
FILÉ COM FRITAS
Se tu matar o Galinha, o Zé Pequeno desiste
de tomá tua.
pág.91.
126 CONT.: 126
(CO
Galinha, que está sentado atrás dos bandidos, se levanta e
caminha até Filé com Fritas, que ameaça correr, mas é detido por
Sandro Cenoura, que o segura pela orelha.
CENOURA
Tá vendo, cumpádi? Tu tem que formar com
nóis! Se não, tu tá morto.
GALINHA
Se tu tiver as armas e a munição eu quero,
mas pode deixar que eu vou sozinho.
RATOEIRA
Meu irmão, eu sei que tu tem disposição,
mas ele não anda sozinho não, tem uma
porrada de teleguiado com ele, rapá...
CENOURA
Se tu quiser, tu forma na boca aqui comigo.
Tu vira meu parceiro. Meu sócio.
GALINHA
Eu não quero saber de boca-de-fumo, não.
Não sou bandido, não. Minha questão é com
ele...
CENOURA
Se tu entrar numa de encarar o Pequeno
sozinho, tu vai se fuder.
JORGE PIRANHA
Um dia ele me pegou, me levou lá pros
Apê... e me fez lavar as cueca da quadrilha
toda... mandava neguinho tirar a cueca pra
eu lavar.
GAIVOTA
Ele esculacha o pessoal do conceito.
RATOEIRA
Ele matou meu irmão.
CENOURA
Aí, na moral, ninguém ali presta, se ele
manda neguinho fazer qualquer coisa, nego
faz só pra pegar consideração. Só tem
teleguiado como esse aqui ó...
Galinha se aproxima de Cenoura. Eles se encaram. Galinha liberta
Filé com Fritas de Cenoura, que olha feio. Galinha se abaixa, e
fala com Filé com Fritas num tom quase paternal.
GALINHA
Sai dessa, rapá. Tu é novinho, fica fazendo
o jogo daquele maníaco. Não sei o que vocês
tem na cabeça!
pág.92.
128 CONT.: 128
(CONT.)
Cenoura dá um tapa na cabeça de Filé com Fritas.
CENOURA
Eu sei! Tem é teleguiação!
Galinha olha feio para Cenoura. Em seguida, se dirige novamente
a Filé com Fritas.
GALINHA
Tu tem que parar com essa onda de bandido e
procurar uma escola... Tu é criança, rapá!
Filé com Fritas fica indignado, e responde a Galinha num tom
desafiador.
FILÉ COM FRITAS
Meu irmão, eu fumo, eu cheiro... Já matei,
já roubei... Não sou criança não. Sou
sujeito homem!
Cenoura engatilha sua arma e aponta para o moleque.
CENOURA
Deixa que eu passo ele.
Galinha desarma Cenoura com uma agilidade que deixa todos no
local espantados.
GALINHA
Deixa ele vivo. O moleque não sabe o que tá
fazendo. Aí, eu formo com vocês! Mas tem
que ser do meu jeito. O primeiro que matar
alguém de bobeira, vai ter que se ver
comigo!
Os bandidos comemoram com gritos de guerra.
Cenoura expulsa Filé com Fritas com um chute na bunda.
CENOURA
Vai lá e avisa teu macho que quem manda
aqui em cima agora é Sandro Cenoura e Mané
Galinha!
Assim que Filé com Fritas sai da boca, Cenoura, muito animado,
abre uma caixa de onde tira 10 armas.
GALINHA
Tu não tem pistola, não?
CENOURA
Não. Eu tenho dez ferro e essa metralhadora
aqui. Mas se tu quer eu arrumo pistola. A
gente pode meter uma loja de arma aí, ó...
pág.93.
128 CONT.: (2) 128
(CONT.)
GALINHA
Que assaltar loja!? Não sou bandido não!
Não vou roubar nada não! Meu negócio é
pessoal. É com o Pequeno.
CENOURA
Mermão! Ele estrupou tua mina, matou teu
irmão e teu avô, metralhou tua casa... E tu
já passou teleguiado dele, morou? Se tu não
é bandido, rapa fora!
Galinha fica em silêncio.
129 ARTE - CARTELA 129
Texto enche a tela: A HISTÓRIA DE MANÉ GALINHA
130 INT. LOJA DE ARMAS - NOITE 130
Galinha, Cenoura e outros bandidos entram numa loja de armas,
rendendo dois SEGURANÇAS.
CENOURA
Mão na cabeça todo mundo!
A cena é narrada visualmente, com o apoio de uma breve narração
de Busca-Pé.
Vemos Galinha impedindo Cenoura de matar um SEGURANÇA.
BUSCA-PÉ (V.O.)
No primeiro assalto, Mané Galinha salvou a
vida de um segurança que o Cenoura ia matar
só de maldade...
Galinha dá uma dura em Cenoura.
GALINHA
Falei que não é pra matar. Regra é regra.
131 INT. MAKRO - DIA 131
Os mesmos bandidos estão assaltando caixas do Makro. No local,
há CLIENTES, um SEGURANÇA, CAIXAS e o GERENTE.
BUSCA-PÉ (V.O.)
No segundo assalto...
O Gerente percebe que ninguém o observa. Pega um revólver
escondido sob o balcão.
Galinha está de costas para ele.
O Gerente aponta a arma para Galinha. Quando vai puxar o
gatilho, recebe uma rajada de metralhadora.
pág.94.
128 CONT.: (3) 128
(CONT.)
Galinha percebe que Cenoura salvou a vida dele.
BUSCA-PÉ (V.O. cont.) (cont.)
Cenoura salvou a vida de Mané Galinha...
Cenoura ironiza Galinha.
CENOURA
Viu como tem que matar?
BUSCA-PÉ (V.O.)
Galinha descobriu que toda regra tem
exceção. E no terceiro assalto...
132 INT. AGÊNCIA BANCÁRIA - DIA 132
A quadrilha de Galinha assalta uma agência bancária, no mesmo
esquema dos outros assaltos. A diferença é que , desta vez,
Galinha entra atirando.
BUSCA-PÉ (V.O. cont.)
A exceção virou a regra.
Galinha mata um SEGURANÇA que se coloca diante de um JOVEM cujo
rosto não podemos ver.
133 INT. CAFOFO DE CENOURA - DIA 133
FAQUIR -- um nordestino de uns 30 anos -- entrega escopetas e
outras armas para Galinha e Cenoura, recebendo de Cenoura um
bolo de dinheiro.
FAQUIR
Com isso aqui vocês acabam com os caras.
Nem a polícia tem essas armas. Esse fuzil
aqui, ninguém tem na favela. Só quem tem é
o exército. Isso aqui é pra guerra, mermo.
Galinha monta um fuzil com extrema rapidez. Cenoura olha com os
olhos arregalados de admiração.
GALINHA
Quem disse que servir o exército não serve
pra nada?
Galinha engatilha o fuzil e o aponta para a câmera. Ouve-se o
BARULHO DO GATILHO sendo apertado.
134 EXT. RUAS DA CIDADE DE DEUS - DIA 134
Montagem com cenas que revelam o clima de guerra no local:
soldados das duas quadrilhas guardando esquinas, controle da
circulação de moradores, que se movimentam com medo, moleques da
Caixa Baixa assaltando moradores.
pág.95.
131 CONT.: 131
(CONT.
BUSCA-PÉ (V.O. cont.)
Com a guerra, a Cidade de Deus ficou
dividida. Quem morava no área do Galinha
não podia atravessar pra área do Pequeno.
Nem que fosse pra visitar parente...
135 INT. TAPADEIRA - DIA 135
Um série de pessoas olhando para a câmera num enquadramento tipo
foto 3X4.
Os rostos vão ficando cada vez mais jovens.
Em BG sons de tiros e bombas.
BUSCA-PÉ  (V.O.)
A vida na Cidade de Deus virou um filme de
bangue-bangue. E por incrível que pareça,
quanto mais se matava, mais maluco aparecia
pra entrar na guerra. Ou pra se divertir.
Ou pra acertar as contas com alguém.
136 INT. BOCA DOS APÊS - DIA 136
Dentro da boca, Pequeno supervisiona a entrega de armas para os
jovens que vão entrando.
JOVEM 1
Um amigo do Cenoura me deu uma tapa na
cara.
EDIÇÃO ENTRECORTADA: alternamos cenas nas bocas de Pequeno e de
Cenoura.
137 INT. BOCA DE CENOURA - DIA 137
Galinha e Cenoura supervisionam a entrega de armas para jovens
que fazem fila dentro da boca.
JOVEM 2
O cara expulsou a minha família. Eu quero
morar na minha favela de novo.
BOCA DE PEQUENO
ROBSON
O filho da puta que “estrupou” minha irmã
tá no bando do Zé Pequeno.
BOCA DE CENOURA
JOVEM 4
Um soldado do Pequeno me deu um chute no
cu.
BOCA DE PEQUENO
pág.96.
134 CONT.: 134
(CONT
EUCLIDES
É pra assaltar, matar e ser respeitado.
BOCA DE CENOURA
YURI
O Zé Pequeno matou meu irmão.
BOCA DE PEQUENO
Chega a vez de Thiago.
THIAGO
Eu quero matar o meu padrasto.
BOCA DE CENOURA
Um jovem negro, que tem uma expressão e uma maneira de se mover
mais parecidas a de um trabalhador do que as de um bandido. Seu
nome é OTHON.
Othon pega uma pistola. Segura-a com firmeza e encara Mané
Galinha.
GALINHA
Tu tem cara de trabalhador, rapá. Dá essa
porra aqui e cai fora.
Othon guarda a pistola no calção. E fala com dignidade.
OTHON
Eu quero me vingar do assassino do meu pai.
Galinha olha o rapaz com admiração.
GALINHA
Como é que tu chama?
OTHON
Me chamo Othon.
PASSAGEM DE TEMPO.
Mané Galinha, bastante transformado, com cara de bandido, está
limpando uma pistola.
Vapores trabalham endolando maconha e fazendo trouxinhas de
cocaína.
Cenoura anda nervoso de um lado para o outro.
CENOURA
Na moral, Manel: o Pequeno tem muito mais
arma e muito mais soldado que nóis. A gente
temos que atacar de surpresa.
pág.97.
137 CONT.: 137
(CONT.)
GALINHA
Tu tá querendo dizer o quê?
CENOURA
Tu sabe... A gente tem que fazer um ataque
de dia. Pega os filho da puta dormindo.
GALINHA
Já falei que não. Tem muito inocente na
rua. Eu não sou bandido pra sair por aí
matando morador.
Galinha cheira uma carreira de cocaína, pega uma garrafa de
cerveja e bebe no gargalo.
Cenoura ri e comenta ironicamente.
CENOURA
É... Tu vive dizendo que não é bandido...
Tu não aprendeu nenhum truque lá no
exército não.
Galinha percebe a ironia, fica nervoso, vai colocar a garrafa
sobre a mesa mas a deixa cair no chão.
A garrafa se estilhaça. Galinha faz cara de quem teve uma idéia.
138 EXT. DIANTE DA BOCA DOS APÊS - NOITE 138
Uma EXPLOSÃO.
Os bandidos do bando de Pequeno saem correndo. Pequeno fica
perplexo.
PERTO DALI
Cenoura acende um coquetel Molotov que está na mão de Galinha.
CENOURA
Porra! Esse coquetel maratovi é de foder!
Galinha arremessa outro coquetel em direção à boca.
A câmera acompanha a trajetória do coquetel, até ele explodir
muito próximo de onde está Zé Pequeno.
Zé Pequeno foge. Os bandidos que estavam com ele correm para
todos os lados.
Galinha dispara em vários bandidos seguidamente. Todos caem
mortos.
Cenoura faz um sinal com o braço chamando os homens.
CENOURA
Vamo acabar com esse alemão.
pág.98.
137 CONT.: (2) 137
(CONT.)
Começa a se ouvir em B.G. o som de uma sirene.
Cenoura foge chamando Galinha.
CENOURA
Corre, Manel!
Os bandidos debandam.
Galinha se aproxima da boca, sempre atirando. Ele olha para os
corpos, vira os que estão de cara para o chão. Ele visivelmente
procura o cadáver de Zé Pequeno.
A sirene de polícia fica mais alta.
Galinha vê o corpo de Filé com Fritas: um cadáver de olhos bem
abertos.
Culpado, Galinha se abaixa e fecha os olhos da vítima.
PERTO DALI.
Thiago mira em Galinha. Dispara. O tiro acerta Galinha no peito.
Galinha cai.
O barulho de sirene aumenta.
139 ARQUIVO - JORNAL NACIONAL 139
Imagem de arquivo do Jornal Nacional da época: o apresentador dá
a notícia da prisão de Mané Galinha.
140 INT. QUARTO DE HOSPITAL - DIA 140
Recriação de entrevista de Galinha para o Jornal Nacional com o
mesmo texto, o mesmo enquadramento e a mesma textura de imagem.
FUSÃO PARA:
141 INT. BOCA DOS APÊS - DIA 141
Câmera abre e revela Zé Pequeno rasgando a primeira página do
jornal. Ele joga a página rasgada para o lado, sobre muitas
outras páginas iguais também rasgadas.
Pega outra primeira página com a foto de Galinha e começa a
rasgá-la.
ZÉ PEQUENO
Filho da puta. Eu que mando nessa merda,
nunca saí foto minha no jornal. Aí! Acharam
meu nome?
Em volta de Zé Pequeno, vários bandidos estão procurando em
jornais.
pág.99.
138 CONT.: 138
(CONT
BANDIDO 1
Até agora, nada.
ZÉ PEQUENO
Continua procurando. Se tem foto do
Galinha, pelo menos o meu nome tem que ter
no jornal.
Um outro bandido carrega uma pilha de cadernos classificados e
joga num canto.
ZÉ PEQUENO (cont.)
Que tu tá fazendo?
BANDIDO 2
Tô jogando fora.
ZÉ PEQUENO
Tu já leu tudo isso?
BANDIDO 2
Aqui só tem classificado. Não tem nada de
notícia.
Zé Pequeno saca uma arma e a pressiona contra a cabeça do
bandido.
ZÉ PEQUENO
Mandei lê tudo, rapá! Ou tu quer levar um
tiro na cabeça.
O bandido engole em seco.
Zé Pequeno, visivelmente descontrolado, fala em tom de discurso
para os bandidos.
ZÉ PEQUENO (cont.)
Aí! Tá na hora da gente mostrar quem manda
na favela. Manda chamar o matuto.
Zé Pequeno bate sobre mesa com a METRALHADORA.
PASSAGEM DE TEMPO.
Sobre a mesma mesa, várias ARMAS modernas e poderosas.
Faquir está diante de Pequeno e alguns bandidos, que examinam
armas recém-trazidas: escopetas, pistolas e armas automáticas.
ZÉ PEQUENO (CONT.)
Aí, Faquir! Tu tá de caô comigo! Não foi
isso aqui que eu te pedi, não. Eu quero
aquela arma dos americano, que com um tiro
só acaba com tanque de guerra.
pág.100.
141 CONT.: 141
(CONT.)
FAQUIR
Tu tá louco Pequeno. Essa arma aí não
existe, não.
ZÉ PEQUENO
Não existe o caralho! Os cara aí leu nos
jornal pra mim! Tu vendeu bomba pros cara.
Agora tu tem que trazer uma arma dessas pra
mim.
FAQUIR
Eu vou tentar...
ZÉ PEQUENO É o seguinte: tu tá querendo me fuder, te
fodo eu primeiro. Tu vai deixar essas armas
aqui, tá ligado? Tu vai deixar as armas,
mas não vai levar o dinheiro!
FAQUIR
Porra, Pequeno! Eu tenho que levar o
dinheiro pros homem!
ZÉ PEQUENO
Tu diz que tu leva o dinheiro quando eles
me mandarem a arma que eu pedi. Sai fora.
Faquir sai.
Um dos bandidos ficam maravilhados com as armas novas.
THIAGO
Porra! Tu fica bem com essas arma.
Precisava tirar umas foto.
Zé Pequeno gosta da idéia.
ZÉ PEQUENO
Tem uma máquina aqui.
Zé Pequeno vai para uma sala ao lado.
142 INT. CAFOFO DE ZÉ PEQUENO- DIA 142
Zé Pequeno abre um baú onde estão guardados discos de Raul
Seixas, algumas correntes de ouro, relógios e uma CÂMERA
FOTOGRÁFICA, a mesma do dia do assassinato de Bené.
Zé Pequeno olha para a câmera com tristeza. Pela primeira vez, o
bandido revela um lado frágil: a saudade do amigo morto.
Zé Pequeno volta para a sala onde estão os bandidos.
143 INT. BOCA DOS APÊS - DIA 143
Zé Pequeno entra com a câmera na mão.
pág.101.
141 CONT.: (2) 141
(CONT.
ZÉ PEQUENO
Aí! Tá aqui a câmera. Tira uma foto minha
aí com as arma.
Zé Pequeno faz pose, cercado de bandidos, diante do seu novo
arsenal.
O bandido que tem a câmera na mão enquadra, aperta o botão, mas
nada acontece.
BANDIDO
Não fez clique.
Outro bandido pega a câmera e verifica que nada acontece quando
o botão é apertado.
ZÉ PEQUENO
E aí?
A câmera passa de mão em mão pelos bandidos que estão com
Pequeno. Nenhum deles sabe o que fazer com a câmera.
ZÉ PEQUENO (cont.)
Porra! Cês são tudo burro.
144 EXT. PONTO DE ÔNIBUS NA CIDADE DE DEUS - NOITE 144
Busca-Pé desce do ônibus voltando da escola: carrega livros.
BUSCA-PÉ  (V.O.)
Você deve estar se perguntando o que eu fiz
nesse tempo todo. É simples: eu tentei
ficar de fora. Mas não adiantou muito. Uma
hora, tinha que sobrar pra mim...
Busca-Pé é surpreendido por dois dos bandidos que estavam na
boca dos Apês com Pequeno.
ROBSON
Aí, tu vem com a gente.
BUSCA-PÉ
Pra onde.
EUCLIDES
O Pequeno quer desenrolar uma idéia com
você.
Busca-Pé engole em seco.
BUSCA-PÉ
Meu pai tá me esperando em casa... Eu tenho
que...
Robson mostra um revólver escondido no calção.
Busca-Pé acompanha os bandidos resignado.
pág.102.
143 CONT.: 14
145 INT. BOCA DOS APÊS - NOITE 145
Busca-Pé está diante de Zé Pequeno, que está fazendo pose diante
das armas. Ele ainda não entendeu o que está acontecendo.
ZÉ PEQUENO
Passa o negócio pra ele.
Thiago entrega a câmera para Busca-Pé, que ainda não percebeu o
que deve fazer. Há uma troca de olhares entre os dois.
ZÉ PEQUENO (cont.)
Como é que é?
BUSCA-PÉ
O quê?
THIAGO
Tu não é fotógrafo? Faz essa merda
funcionar.
Busca-Pé enquadra, aperta o botão e nada acontece.
Os bandidos riem.
ZÉ PEQUENO
Porra! Cês quebraram a máquina.
Busca-Pé examina a câmera e percebe que precisar rodar o filme.
Ele roda o filme, enquadra a cena e aperta o botão.
Os bandidos comemoram.
Em seguida, Busca-Pé faz várias outras fotos, enquadrando Zé
Pequeno em poses engraçadas, até que:
BUSCA-PÉ
Acabou o filme.
ZÉ PEQUENO
Vamos ver as fotos.
BUSCA-PÉ
Precisa mandar revelar.
THIAGO
Eu quero cópia.
BANDIDO 1
Eu, também.
BANDIDO 2
Eu, também.
Zé Pequeno tira um maço de notas do bolso.
pág.103.
(CONT.)
ZÉ PEQUENO
Quanto custa fazer cópia pra todo mundo?
Busca-Pé pega o dinheiro de Pequeno.
Imagem fica em still.
BUSCA-PÉ  (V.O.)
Quando eu lembro do que aconteceu depois
que eu tirei aquelas fotos dos bandidos, eu
tenho a sensação de tudo na minha vida
ficou acelerado. É como se eu não
conseguisse ver os detalhes, sabe?
146 INT. LOJA DE REVELAÇÃO - DIA 146
Busca-Pé, com a câmera a tiracolo, está checando os contatos
para escolher as fotos que serão ampliadas.
As imagens ganham uma velocidade acelerada, com a câmera se
movendo muito.
BUSCA-PÉ  (V.O. cont.)
Na minha memória, fica tudo rapidinho,
igual nesses filmes que os caras aceleram a
câmera. Sabe o que eu tô falando?
Ao lado de Busca-Pé, está MARINA, branca, quase 30 anos,
espiando não muito discretamente as fotos de Busca-Pé.
BUSCA-PÉ (V.O. cont.)
Por exemplo: eu não reparei que tinha uma
mulher espiando as minhas fotos. Por isso
eu não entendi o que aconteceu no dia
seguinte.
147 EXT. BANCA DE JORNAL - DIA 147
Mesmo ritmo de imagens aceleradas e movimentos rápidos de
câmera.
Busca-Pé e Barbantinho estão próximos à banca de jornal.
Barbantinho está lendo as primeiras páginas dos jornais. BuscaPé está distraído com a câmera.
Busca-Pé leva um susto com a exclamação de Barbantinho.
BARBANTINHO
Caralho! Olha o Zé Pequeno no jornal!
Busca-Pé olha e reconhece a foto que ele tirou dos bandidos.
Sobre ela a manchete: TRAFICANTES DA CIDADE DE DEUS USAM ARMAS
DO EXÉRCITO.
BUSCA-PÉ
Puta que pariu! Ele vai me matar!
pág.104.
145 CONT.: 145
(CONT
Busca-Pé coloca o dedo sobre o nome sob a foto: MARINA CINTRA.
148 INT. REDAÇÃO DE JORNAL - DIA 148
Busca-Pé e Barbantinho entram na redação. Os dois carregam sacos
de papel pardo. Busca-Pé está nervoso, suando. Barbantinho,
mais relaxado.
Barbantinho se dirige a um REDATOR, que passa apressado.
Ele aponta na direção da Marina,
BARBANTINHO
Até que ela é gostosa...
Eles param diante da mesa dela.
Busca-Pé enfia a mão no saco pardo. Ele treme. Marina olha para
o saco pardo assustada.
MARINA
Como é que vocês entraram aqui?
BARBANTINHO
É o seguinte dona... Meu amigo aqui...
Busca-Pé tira do saco uma pedra e a coloca com força sobre a
mesa de Marina, interrompendo Barbantinho.
Busca-Pé fala alto, num tom ameaçador e indignado.
BUSCA-PÉ
Eu vou morrer. E a culpa é sua. Como é que
fica, agora? Eu não posso mais voltar pra
casa. Eu vou pra onde? Me devolve minhas
fotos!
Todos param na redação e olham para Busca-Pé. Barbantinho se
surpreende com a coragem do amigo.
Os JORNALISTAS começam a rodear a mesa de Marina, preocupados.
Entre eles, um FOTÓGRAFO, com colete e câmera.
Marina percebe que vai ser descoberta e começa a falar
simpaticamente com Busca-Pé.
MARINA
Pô, eu te procurei, rapaz. Foi você que fez
essa foto, né? Tem um dinheiro aqui pra
você. Eu não consegui te achar...
Marina abre a gaveta e tira de lá um envelope e de dentro do
envelope outras fotos que Busca-Pé fez da quadrilha de Pequeno
com as armas.
MARINA (cont.)
O seu trabalho é muito bom, sabia?
pág.105.
147 CONT.: 147
(CONT.)
O Fotógrafo pega as fotos.
FOTÓGRAFO
Isso aqui é Cidade de Deus, é?
Barbantinho fica orgulhoso.
BARBANTINHO
É, sim. A gente é de lá.
FOTÓGRAFO
Porra, nenhum fotógrafo do jornal ia
conseguir entrar na favela e chegar perto
desses caras... Tu que fotografou?
BARBANTINHO
Não, foi o meu amigo Busca-Pé, aqui...
FOTÓGRAFO
Tu não fez nenhuma foto de gente tomando
tiro, não?
MARINA
Pô, se a gente pudesse ter você lá na
Cidade de Deus trabalhando pra gente, hem?
Tu pode ganhar uma grana.
A câmera começa a rodar em volta de Busca-Pé.
BUSCA-PÉ (V.O.)
Eu não sei o que deu em mim pra entrar no
jornal falando daquele jeito. Eu não podia
imaginar que, depois daquele dia, a minha
vida nunca mais ia ser a mesma.
Silêncio.
Todos olham para Busca-Pé.
MARINA
E aí?
BUSCA-PÉ
O quê?
MARINA
O que você acha de trabalhar pra gente?
BUSCA-PÉ
Tu tá me oferecendo emprego de fotógrafo?
MARINA
Emprego é difícil. Mas você vai trazendo as
fotos. Se elas ficarem boas, a gente
compra.
pág.106.
148 CONT.: 148
(CONT
BUSCA-PÉ
Mas se eu pisar na favela de novo, eu posso
morrer.
FOTÓGRAFO
Que merda. Daria pra você ganhar uma grana.
BUSCA-PÉ
Daria, é?
MARINA
Então, negócio fechado. Juninho, passa uns
filmes pro menino. Alguma dúvida?
BUSCA-PÉ
Uma só.
MARINA
Pode falar.
BUSCA-PÉ
Onde é que eu vou dormir essa noite?
Os dois editores olham para Marina. Ela olha para Busca-Pé com
cara de quem não tem escolha.
149 INT. QUARTO DA CASA DE MARINA - NOITE 149
Busca-Pé e Marina transando.
BUSCA-PÉ  (V.O.)
De repente, parecia que a minha vida tinha
virado de cabeça pra baixo. Quer dizer, pra
cima, né? Porque finalmente as coisas
começaram a acontecer.
A câmera vai se afastando da cena de sexo.
BUSCA-PÉ (V.O. cont.)
Mas eu não vou entrar nos detalhes da minha
primeira experiência sexual, não. Porque...
150 INT. CORREDOR DE HOSPITAL - NOITE 150
ENFERMEIRA trepando com POLICIAL, numa maca, atrás de uma
cortina.
BUSCA-PÉ  (V.O. cont.)
... lá no hospital perto da Cidade de Deus,
tava rolando uma outra cena de sexo, muito
mais importante pra história da favela.
Enquanto um certo policial de plantão se
entendia com uma certa enfermeira também de
plantão...
AO MESMO TEMPO
pág.107.
148 CONT.: (2) 148
(CO
Cenoura, Othon e outros bandidos ajudam Galinha a sair do quarto
a andar pelo corredor numa fuga que ninguém nota.
BUSCA-PÉ (V.O. cont.)
... o Cenoura mais uns outros bandidos não
tiveram a menor dificuldade de tirar o Mané
Galinha dali e levar ele de volta pra
Cidade de Deus.
A câmera volta para MACA.
O policial e a enfermeira atingem o orgasmo. A câmera continua
se movimentando até revelar um maço de dinheiro num bolso do
uniforme da enfermeira.
BUSCA-PÉ (V.O. cont.) (cont.)
Tem gente que diz que o verme levou um por
fora pra facilitar as coisas... Até hoje eu
não sei se é verdade.
151 EXT. MATAGAL - DIA 151
Faquir está se explicando para alguém que não podemos
identificar.
FAQUIR
O cara é maluco. Ele inventou que quer uma
arma que explode tanque de guerra, se não
ele não paga a gente.
Revelamos que o interlocutor misterioso é Cabeção. Ele atira um
jornal na cara de Faquir.
Em volta dos dois, há um grupo de policiais.
CABEÇÃO
Tu viu isso aqui? Pra que ele precisa de
mais armas.
Faquir olha o jornal.
FAQUIR
Filho da puta! Cabeção! Tu acha que eu ia
te enganar. Tu sabe que o tal do Zé Pequeno
é doidão! Ele não vai me pagar enquanto eu
não levar a arma que ele quer. Tu não pode
falar com o cara lá do exército?
CABEÇÃO
Tu quer que descubram o meu esquema? Os
cara vão investigar essa história. Se eles
pegarem os bandido, eles te pegam. E se
eles te pegam, tu me entrega e eu tô
fudido.
pág.108.
150 CONT.: 150
(CONT.)
FAQUIR
Qualé, Cabeção? Tu acha que vou te
entregar?
CABEÇÃO
Acho que não.
FAQUIR
Claro, que não.
Cabeção aponta a arma na cabeça de Faquir.
FAQUIR (cont.)
Porra! Que é isso?
Cabeção em CLOSE.
CABEÇÃO
Isso é pro caso de tu tá mentindo.
Ouve-se um TIRO.
CABEÇÃO (cont.)
Vamo pega o meu dinheiro com aquele crioulo
de merda!
152 EXT. CASA DE ALMEIDINHA - DIA 152
Zé Pequeno distribuindo armas para bandidos todos muito jovens.
Thiago ajuda. Entre os que recebem armas, estão os moleques da
Caixa Baixa.
O clima é de festa. Ao fundo, soa um batuque.
ZÉ PEQUENO
Esses ferro é de presente pra vocês. Mas eu
quero ver todo mundo lá, dando tiro no
Cenoura hoje de noite. Depois vocês usa os
cano pra roubar onde vocês quiser...
Zé Pequeno pega um jornal com a foto dele na primeira página.
Ele discursa como um político.
Otávio é o que mais presta atenção ao que diz Zé Pequeno.
ZÉ PEQUENO (CONT.)
Tá vendo aqui! O Rio de Janeiro inteirinho
sabe que a Cidade de Deus é a favela do Zé
Pequeno. Quando a gente vamo subir lá no
Cenoura, a gente vai matar todo mundo. Não
vai perdoar ninguém, porque quem cria cobra
morre picado. Hoje a gente vamo tomar a
boca dele. Na semana que vem, a gente
começa a tomar todas as favela do Rio de
Janeiro.
pág.109.
151 CONT.: 151
153 INT. CAFOFO DE CENOURA - DIA 153
Galinha, com o peito enfaixado, entrega uma pistola para Othon.
GALINHA
Othon, chama a rapaziada toda que a gente
vai descer.
OTHON
Mas é de dia.
GALINHA
Guerra é guerra.
Cenoura grita de felicidade.
154 ARTE - CARTELA 154
Texto enche a tela: O COMEÇO DO FIM
155 EXT. CASA DE ALMEIDINHA - DIA 155
Retomamos a primeira cena do filme: o galo se desespera. Luta.
E escapa.
Almeidinha, o negro que segura o facão, percebe a fuga do galo e
dá o alarme.
ALMEIDINHA
O galo fugiu!
156 EXT. RUA DA FAVELA - DIA 156
Replay de trecho de cena do começo do filme.
Busca-Pé levanta um pouco a câmera fotográfica em direção ao
olho mas não consegue levar o gesto até o final. Ele fica
paralisado, olhando para Zé Pequeno que aponta a arma para BuscaPé e grita:
ZÉ PEQUENO
Segura o galo.
Busca-Pé assume a pose de goleiro, fica meio abobalhado,
tentando agarrar o galo, que passa no meio das pernas dele.
Uma mulher -- a Madalena da minibiografia -- que empurra um
carrinho de bebê vê a cena e se afasta apressadamente.
Zé Pequeno avança em direção a Busca-Pé.
Busca-Pé está apavorado. Barbantinho, paralisado.
Zé Pequeno pára de repente. Todos os bandidos apontam suas armas
para alguém que está atrás de Busca-Pé.
pág.110.
(CONT.)
Busca-Pé olha para trás e vê uma PATRULHA de 6 policiais.
À frente da patrulha está o detetive Cabeção.
Busca-Pé ainda na pose de goleiro desajeitado.
Cabeção, de um lado, e Zé Pequeno, do outro, trocam olhares
ameaçadores.
Cabeção faz um sinal para seus homens guardarem as armas.
ZÉ PEQUENO (cont.)
Aí, Cabeção! Leva tuas meninas aí de volta
pra delegacia. Na minha favela, não entra
viado.
Zé Pequeno dá sua risada característica.
Cabeção e seus homens se retiram.
Ao fundo, passa um CAMINHÃO DE GÁS.
Busca-Pé continua paralisado. Zé Pequeno caminha na direção
dele. Busca-Pé acha que vai morrer.
ZÉ PEQUENO (cont.)
Aí, Busca-Pé! Tu tá esperando o que pra
tirar a minha foto.
Busca-Pé levanta a câmera. Ao mesmo tempo, Zé Pequeno faz uma
cara de assustado e aponta a arma na direção de Busca-Pé.
SUBJETIVA DA CÂMERA:
Busca-Pé tem Zé Pequeno enquadrado.
Busca-Pé fecha o olho, antes que ele aperte o botão, soa um
TIRO. E depois outro, e muitos outros.
PERTO DALI
O carrinho de bebê é destroçado por uma saraivada de balas.
DE VOLTA A BUSCA-PÉ
Vários bandidos em volta de Zé Pequeno caem mortos e feridos.
Outros disparam a esmo. Zé Pequeno foge.
Busca-Pé percebe que está no meio do fogo cruzado. Ele olha para
trás e descobre que se trata de um ataque do bando de Galinha.
Busca-Pé e Barbantinho se refugiam atrás de um monte de entulho.
PERTO DALI
pág.111.
156 CONT.: 156
(CONT.)
Cabeção impede seus homens de entrarem no conflito. Apenas dá
risada. E parte na mesma direção para onde foi Zé Pequeno.
ATRÁS DO MONTE DE ENTULHO
Barbantinho tapa os ouvidos com as mãos. Busca-Pé segura a
câmera tenso.
BUSCA-PÉ
Puta que pariu! O que eu faço agora?
Pequeno e Thiago passam por Busca-Pé, dando tiros.
Busca-Pé hesita um instante, mas logo toma uma decisão.
BUSCA-PÉ
Eu vou atrás deles.
BARBANTINHO
Tu tá louco.
BUSCA-PÉ
Acho que sim.
Busca-Pé sai correndo atrás de Zé Pequeno.
Zé Pequeno e Thiago passam ao lado de um caminhão de gás.
Pequeno pára e chama Thiago.
De longe, Busca-Pé fotografa tudo o que acontece a seguir:
PEQUENO
Aí, rapá! Tu sabe dirigi?
THIAGO
Sei!
ZÉ PEQUENO
Então, vamô fazê como nos tempo do
Cabeleira...
Thiago corre até o caminhão, abre a porta do motorista com a
arma em punho.
THIAGO
Mão na cabeça aí, otário. Todo mundo sai
fora.
Os FUNCIONÁRIOS do caminhão saem correndo.
DENTRO DO CAMINHÃO
Pequeno e Thiago entram no caminhão. Thiago ao volante.
pág.112.
156 CONT.: (2) 156
(CONT.)
PEQUENO
Vamô acabá com esse Galinha filho duma
puta!
Thiago acelera com tudo. Pequeno põe a cabeça para fora e aponta
sua arma para frente.
NA RUA, LOGO À FRENTE
Galinha e Othon disparam contra os homens de Pequeno.
O caminhão se aproxima velozmente na direção deles.
NO CAMINHÃO
Pequeno faz pontaria em Galinha.
NA RUA
Galinha aponta para o caminhão.
Ambos disparam ao mesmo tempo. Zé Pequeno dispara várias vezes.
O tiro de Galinha acerta Thiago na cabeça.
Os tiros de Pequeno acertam Cenoura na cabeça e Othon na
barriga.
O caminhão, descontrolado, passa muito perto de Galinha e Othon.
Seguimos o caminhão até que ele bate e os butijões saem rolando.
DENTRO DO CAMINHÃO
Pequeno vê o Bandido morto e tenta sair das ferragens.
PEQUENO
Puta que pariu.
Alguém abre a porta do caminhão e oferece o braço para ajudar
Pequeno a sair: é Cabeção, que tem a arma apontada na cabeça do
bandido.
CABEÇÃO
Chegô a hora de tu acerta umas conta
comigo, seu filho da puta. Algema nele!
Pequeno é algemado por vários policiais e colocado dentro do
camburão.
Busca-Pé vê o camburão se afastando. Ele começa a correr atrás
do camburão.
PERTO DALI
Galinha está abaixado junto a Othon que está seriamente ferido.
pág.113.
156 CONT.: (3) 156
(CONT.)
GALINHA
Porra, Othon! Por que tu foi entrar nessa
guerra?
Othon aponta a arma dele na cabeça de Galinha.
OTHON
Pra me vingar do assassino do meu pai.
157 INT. AGÊNCIA BANCÁRIA - DIA / FLASH-BACK 157
Cena do assalto a banco em Galinha entra atirando. Desta vez
vista por um outro ângulo e começando um pouco antes.
Othon está uma marmita para o Segurança.
Neste momento, Galinha, Cenoura e outros bandidos entram
atirando.
O Segurança, que é pai de Othon, coloca o corpo diante do filho
para protegê-lo.
Othon ainda consegue ver Mané Galinha disparando contra o pai
dele, que cai morto.
158 EXT. RUA DA FAVELA - DIA 158
Galinha fecha os olhos com expressão de culpa. Deixa sua arma
cair.
Othon dispara.
159 EXT. RUAS DA FAVELA - DIA 159
Busca-Pé corre pula muros, atrás do camburão da polícia.
160 EXT. BOCA DOS APÊS - DIA 160
O carro de Cabeção estaciona na frente da boca. Cabeção sai do
carro. Abre o porta-malas. Zé Pequeno sai do porta-malas,
visivelmente irritado.
Busca-Pé vê tudo. Ele sussurra, falando com ele mesmo, enquanto
tira fotos usando uma lente zoom.
Vários momentos da cena são vistos pela lente da câmera de BuscaPé.
BUSCA-PÉ
Eu sabia que o filho da puta não ia ser
preso.
Zé Pequeno entra na boca.
Busca-Pé tira fotos de Cabeção, que espera impaciente.
pág.114.
156 CONT.: (4) 156
(CONT.)
Zé Pequeno volta trazendo o seu baú. Atrás dele, vêm Otávio,
Lampião e outros 5 moleques da Caixa Baixa.
Busca-Pé, arriscando, se aproxima mais de Cabeção e Zé Pequeno
para fotografar melhor.
Zé Pequeno tira vários maços de notas de dólar e as entrega para
Cabeção.
Os moleques da Caixa Baixa observam a cena sem se envolver.
CABEÇÃO
Tem dez mil aqui?
Zé Pequeno mostra o baú vazio para Cabeção.
ZÉ PEQUENO
Tem. E não tem mais nada pra te dar.
Cabeção repara no único anel de ouro que resta na mão de
Pequeno.
CABEÇÃO E esse anel aí? É de ouro, né?
Pequeno, contrariado, retira o anel do dedo e o entrega a
Cabeção.
Busca-Pé registra tudo.
Cabeção entra no carro e vai embora.
Zé Pequeno chuta o baú vazio, furioso.
ZÉ PEQUENO
Filho da puta do Galinha! Tá morto mas eu
tô pobre. Guerra filha da puta!
OTÁVIO
Aí, Pequeno. Tu tá fudido, hem?
ZÉ PEQUENO
Aí, vamo vê se vocês rouba alguma coisa,
que a gente tá precisando levanta uma grana
pra botá as boca pra funcionar de novo, tá
ligado?
A molecada ri.
OTÁVIO
Quem falou que as boca é tua?
LAMPIÃO
Ataque soviético nele!
pág.115.
160 CONT.: 160
(CONT.
A molecada rodeia Pequeno, caído no chão. Todos disparam ao
mesmo tempo dando risada.
Nos momentos finais da cena, vemos Pequeno em close. Seu rosto
se contorcendo de dor, ao som dos tiros.
EFEITO: luz de flash fotográfico. A imagem fica em p&b e still.
FUSÃO PARA:
161 INT. CASA DE BUSCA-PÉ - DIA 161
Plano fechado de Busca-Pé junto a uma mesa sobre a qual estão
duas fotos: uma de Cabeção recebendo o dinheiro de Zé Pequeno e
outra do cadáver de Zé Pequeno.
Barbantinho está ao lado dele..
BUSCA-PÉ
Se entregar essa foto pro jornal, eu
consigo o emprego e saio fora daqui pra
sempre. Mas se eu entregar essa outra
aqui... Aí, cara, eu vou conseguir muito
mais. Eu vou conseguir prestígio, vou
ganhar uma puta grana, vou ficar famoso...
BARBANTINHO
Mas se essa foto sai no jornal, o Touro,
mais cedo ou mais tarde, vai te
encontrar...
BUSCA-PÉ
O que que eu faço?
162 TABLE TOP - ARTE 162
PRIMEIRA PÁGINA DE JORNAL
A câmera se afasta do rosto de Pequeno, mostrando que a imagem
do bandido morto numa foto de primeira página de jornal.
No crédito da foto lemos: FOTO: BUSCA-PÉ.
E a manchete: MORRE O DONO DA CIDADE DE DEUS
163 EXT. RUA DO CONJUNTO - DIA 163
Busca-Pé caminha com Barbantinho.
Moradores saúdam os dois.
BARBANTINHO
Aí, Busca-Pé: se eu passar no exame amanhã,
eu finalmente vou virar salva-vidas.
pág.116.
160 CONT.: (2) 160
(CONT.)
BUSCA-PÉ
Legal!
BARBANTINHO
Porra, Busca-Pé! Salva-vidas é que é herói
de verdade. Tu agora acha que é o maior
fodão? Tu acha que virou herói só porque
saiu a tua foto no jornal?
BUSCA-PÉ
Pior é que é.
BARBANTINHO
Mas tu ainda não me contou direito a
história com a jornalista lá. Ela é
gostosa, hem.
BUSCA-PÉ
É... Mais ou menos...
BARBANTINHO
Vai me dizer que tu não gostou?
BUSCA-PÉ
Sabe que é... Acho que jornalista não saber
trepar direito...
Do lado oposto da rua, vindo em sentido contrário, passam
Otávio, Lampião e outros moleques da caixa baixa. A câmera passa
a segui-los.
OTÁVIO
Cacau um dia meteu três cachanga na barra.
LAMPIÃO
Tem que passar ele.
OTÁVIO
Quem foi que passou o Rogério?
LAMPIÃO
Foi o Boi.
OTÁVIO
Tem que passar o Boi também.
LAMPIÃO
Tu já ouviu falar de um tal Comando
Vermelho que tá chegando aí?
OTÁVIO
Não. Mas se chega, mermo, a gente passa o
cara também. Aí quem sabe escrever? Vamo
fazer uma lista negra aí! Vamo passar todo
mundo.
Áudio cai para B.G.
pág.117.
163 CONT.: 163
(CONT.)
EFEITO: a cena vira uma “janela” que ocupa apenas uma parte da
tela.
164 ARQUIVO - CRÉDITOS FINAIS 164
Usando o mesmo efeito de janela do fim da cena anterior, entram
cenas de arquivo de cinejornais, telejornais e páginas de
jornais e revistas com notícias relacionadas à história real da
Cidade de Deus.
Ao mesmo tempo, sobem os créditos finais.
FADE OUT / FIM.
pág.118.
163 CONT.: (2) 163


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
