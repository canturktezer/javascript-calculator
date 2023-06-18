let result = document.getElementById('result');

function insert(num) {
  result.value += num;
}

function calculate() {
  result.value = eval(result.value);
}

function backspace() {
  result.value = result.value.slice(0, -1);
}