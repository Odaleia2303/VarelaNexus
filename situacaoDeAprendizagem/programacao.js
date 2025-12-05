// 5 - Ordenação simples
function ordenarCrescente() {
  let nums = Array.from({ length: 20 }, (_, i) => i + 1);
  document.getElementById("resultadoOrdem").innerText = nums.join(", ");
}

function ordenarDecrescente() {
  let nums = Array.from({ length: 20 }, (_, i) => 20 - i);
  document.getElementById("resultadoOrdem").innerText = nums.join(", ");
}

// 6 - Bubble Sort
function bubbleSort() {
  let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 20) + 1);
  let original = [...arr];

  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }

  document.getElementById("resultadoBubble").innerHTML =
    "Original: " + original.join(", ") +
    "<br>Ordenado: " + arr.join(", ");
}

// 7 - Soma
function somarArray() {
  let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 220) + 1);
  let soma = arr.reduce((a, b) => a + b, 0);

  document.getElementById("resultadoSoma").innerHTML =
    "Números: " + arr.join(", ") +
    "<br>Soma: " + soma;
}

// 8 - Matriz 3x3
function gerarMatriz() {
  let matriz = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => Math.floor(Math.random() * 20) + 1)
  );

  let texto = matriz.map(linha => linha.join(" | ")).join("\n");
  document.getElementById("resultadoMatriz").innerText = texto;
}

// 9 - IMC
function calcularIMC() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  if (!peso || !altura) {
    document.getElementById("resultadoIMC").innerText = "Preencha os campos!";
    return;
  }

  let imc = (peso / (altura * altura)).toFixed(2);
  document.getElementById("resultadoIMC").innerText = "IMC: " + imc;
}

// 10 - Conversor de temperatura
function converterTemp() {
  let temp = parseFloat(document.getElementById("temp").value);
  let tipo = document.getElementById("tipoTemp").value;

  if (isNaN(temp)) {
    document.getElementById("resultadoTemp").innerText = "Digite um número!";
    return;
  }

  if (tipo === "c") {
    let f = (temp * 9 / 5) + 32;
    document.getElementById("resultadoTemp").innerText = `${temp}°C = ${f.toFixed(2)}°F`;
  } else {
    let c = (temp - 32) * 5 / 9;
    document.getElementById("resultadoTemp").innerText = `${temp}°F = ${c.toFixed(2)}°C`;
  }
}

// 11 - Busca Linear
function buscaLinear() {
  let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 20) + 1);
  let alvo = arr[Math.floor(Math.random() * arr.length)];

  let pos = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === alvo) {
      pos = i;
      break;
    }
  }

  document.getElementById("resultadoBusca").innerHTML =
    "Vetor: " + arr.join(", ") +
    "<br>Procurando: " + alvo +
    "<br>Encontrado na posição: " + pos;
}
