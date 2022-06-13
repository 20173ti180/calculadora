var valorVisor = 0;
var numeroA;
var numeroB;
var operacao;
var agora = new Date;


function botao(dado) {
  var auxiliar = document.getElementById("visor").value; // auxiliar recebe o valor pressionado no visor
  document.getElementById("visor").value = auxiliar + dado; // visor recebe o valor de auxiliar e concatena com dado


  valorVisor = document.getElementById("visor").value = auxiliar + dado;
  //document.getElementById("historico").innerHTML = agora.getHours();
  
  // mostrar a saudação acima do visor
  var hora = agora.getHours();
  
  if(hora >= 0 && hora <= 12){
    document.getElementById("historico").textContent = "Buen dia";
  }
  if(hora >= 13 && hora <= 17){
    document.getElementById("historico").textContent = "Buenas tardes";
  }
  if(hora >= 18 && hora <= 23){
    document.getElementById("historico").textContent = "Buenas noches";
  }
}


function btn_suma(caracter){
    numeroA = valorVisor;
    operacao = "+";
    
    limpar();
    //document.getElementById("historico").innerHTML += operacao;
}

function btn_resta(caracter){
  numeroA = valorVisor;
  operacao = "-";
  
  limpar();
}

function btn_multiplicacion(caracter){
  numeroA = valorVisor;
  operacao = "*";
  
  limpar();
}

function btn_division(caracter){
  numeroA = valorVisor;
  operacao = "/";
  
  limpar();
}

function reset() {
    // limpar visor
    document.getElementById('visor').value = '';
    valorVisor = 0;
    operacao = "";
}
function limpar(){
    document.getElementById('visor').value = '';
    
}

function btn_igual(){
    numeroB = valorVisor;
    calcular();
}

function calcular() {
    // faz o calculo, pega o resultado e colocar no visor
    //document.getElementById('visor').value = eval(resultado);

    //document.getElementById('visor').value = resultado;
    //document.getElementById('visor').value = eval(valorVisor);

    var total = 0;
    var ultimoTotal = 0;
      switch(operacao){
        case "+":
          total = parseFloat(numeroA) + parseFloat(numeroB);
          break;
        case "-":
            total = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
          total = parseFloat(numeroA) * parseFloat(numeroB);
          break;
        case "/":
          total = parseFloat(numeroA) / parseFloat(numeroB);
          break;
      }
      ultimoTotal = total;
      reset();
      document.getElementById('visor').value = total;
      valorVisor = ultimoTotal;

}