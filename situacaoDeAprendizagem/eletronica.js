function calcularOhm() {
  let V = parseFloat(document.getElementById("tensao").value);
  let I = parseFloat(document.getElementById("corrente").value);
  let R = parseFloat(document.getElementById("resistencia").value);

  // Verificar quais valores foram preenchidos
  if (!isNaN(V) && !isNaN(I)) {
    // calcular resistência
    let resultado = V / I;
    document.getElementById("resultadoOhm").innerText = "Resistência = " + resultado.toFixed(2) + " Ω";
  } 
  else if (!isNaN(V) && !isNaN(R)) {
    // calcular corrente
    let resultado = V / R;
    document.getElementById("resultadoOhm").innerText = "Corrente = " + resultado.toFixed(2) + " A";
  } 
  else if (!isNaN(I) && !isNaN(R)) {
    // calcular tensão
    let resultado = I * R;
    document.getElementById("resultadoOhm").innerText = "Tensão = " + resultado.toFixed(2) + " V";
  } 
  else {
    document.getElementById("resultadoOhm").innerText = "Preencha qualquer dois valores!";
  }
}