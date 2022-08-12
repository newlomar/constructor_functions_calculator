function Calculadora() {
  this.display = document.querySelector('.display');

  this.pressionaEnter = function () {
    this.display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.realizaConta = function () {
    let conta = this.display.value;

    try {
      conta = eval(conta); // perigoso

      if (!conta) {
        alert('Conta inválida!');
        return;
      }

      this.display.value = String(conta);
    } catch (e) {
      alert('Conta inválida!');
      return;
    }
  };

  this.clearDisplay = function () {
    this.display.value = '';
  };

  this.apagaUm = function () {
    this.display.value = this.display.value.split('').slice(0, -1).join('');
  };

  this.inicia = function () {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.cliqueBotoes = function () {
    document.addEventListener(
      'click',
      function (e) {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      }.bind(this)
    );
  };

  this.btnParaDisplay = function (valor) {
    this.display.value += valor;
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
