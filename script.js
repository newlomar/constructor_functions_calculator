function Calculadora() {
  this.display = document.querySelector('.display');

  this.pressionaEnter = function () {
    this.display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };
}
