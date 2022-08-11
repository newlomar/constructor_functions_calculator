// Função Construtora -> retorna objetos
// Função Fabrica -> retorna objetos
// Construtora -> uso do nome da função com Letra maíscula: Pessoa, uso da palavra new ao criar novas instâncias

function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = function () {};

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('Newton', 'Lomar');
const p2 = new Pessoa('Ana', 'Beatriz');

p2.metodo();
