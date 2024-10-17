/*EXPLICAÇÕES*

*Quis mesclar e usar o máximo de conteúdos que assisti, além de experimentar algumas coisas novas para solucionar alguns problemas
*A cada iteração/poção aumenta-se 1000XP, o que faz a mudança de nível do herói acontecer, ficando mais dinâmico
*Foi muito enriquecedor escrever e me desafiar a solucionar este desafio!
 ^_^ 
 */

let nomeDoHeroi = 'Homem de Ferro' //inicializando variável com nome do herói
let nivelDoHeroi = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'] //Armazenando os niveis possiveis do heroi em um vetor
let nivelAtual = 0 //iniciei uma variável que será usada para mostrar o índice que o vetor deve mostrar na mensagem final
let quantidadeDeExperiencia = 500 //inicializando variável com quantidade de experiência

console.log('RECUPERAÇÃO DE XP DOS HERÓIS!') //apresentando o local de recuperação fictício
console.log('Quantidade Atual de XP do Herói ' + nomeDoHeroi + ': ' + quantidadeDeExperiencia) //imprimindo as informações iniciais
console.log('...');
console.log('Iniciando recuperação do Herói: ' + nomeDoHeroi) //dando inicio a recuperação
console.log('...');

//inicio laço for
for (i = 1; i <= 10; i++) {

    //inicio if-elses
    if (quantidadeDeExperiencia < 1000) { //Nível Ferro

        console.log('Nível Atual: ' + nivelDoHeroi[nivelAtual])
        console.log('Herói bebeu poção de número: ' + i) //o contador i também representa o número de poções que o herói está tomando
        console.log('');

    } else if (quantidadeDeExperiencia > 1001 && quantidadeDeExperiencia <= 2000) { //Nível Bronze
        nivelAtual = 1
        console.log('Nível Atual: ' + nivelDoHeroi[nivelAtual])
        console.log('Herói bebeu poção de número: ' + i)
        console.log('');

    } else if (quantidadeDeExperiencia > 2001 && quantidadeDeExperiencia <= 5000) {//Nível Prata
        nivelAtual = 2
        console.log('Nível Atual: ' + nivelDoHeroi[nivelAtual])
        console.log('Herói bebeu poção de número: ' + i)
        console.log('');

    } else if (quantidadeDeExperiencia > 5001 && quantidadeDeExperiencia <= 7000) {//Nível Ouro
        nivelAtual = 3
        console.log('Nível Atual: ' + nivelDoHeroi[nivelAtual])
        console.log('Herói bebeu poção de número: ' + i)
        console.log('');

    } else if (quantidadeDeExperiencia > 7001 && quantidadeDeExperiencia <= 8000) {//Nível Platina
        nivelAtual = 4
        console.log('Nível Atual: ' + nivelDoHeroi[nivelAtual])
        console.log('Herói bebeu poção de número: ' + i)
        console.log('');

    } else if (quantidadeDeExperiencia > 8001 && quantidadeDeExperiencia <= 9000) {//Nível Ascendente
        nivelAtual = 5
        console.log('Nível Atual: ' + nivelDoHeroi[nivelAtual])
        console.log('Herói bebeu poção de número: ' + i)
        console.log('');

    } else if (quantidadeDeExperiencia > 9001 && quantidadeDeExperiencia <= 10000) {//Nível Imortal
        nivelAtual = 6
        console.log('Nível Atual: ' + nivelDoHeroi[nivelAtual])
        console.log('Herói bebeu poção de número: ' + i)
        console.log('');

    } else if (quantidadeDeExperiencia > 100001) {//Nível Radiante
        nivelAtual = 7
        console.log('Nível Atual: ' + nivelDoHeroi[nivelAtual])
        console.log('Herói bebeu poção de número: ' + i)
        console.log('');
    } //fim dos if-elses

    quantidadeDeExperiencia += 1000 //aumento de XP a cada iteração/poção
    console.log('Quantidade Atual de XP:' + quantidadeDeExperiencia) //imprime a quantidade de XP após iteração
    //fim do laço for

} console.log('O nível final do herói ' + nomeDoHeroi + ' após tomar 10 poções é: ' + nivelDoHeroi[nivelAtual]) //mensagem final fora do laço for para mostrar o resultado

