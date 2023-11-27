function helloFunc() {
  alert("Alô mundo!!");
}

function formValidation() {
  return true;
}

function testFunc() {
  let a = document.getElementById("name");
  a.value = a.value.toUpperCase();
}

function computerSquare() {
  let n = document.getElementById("integer").value;
  return alert(n * n);
}

function displayForm() {
  let data = "Username: <br> <input type='text' name='name'><br>Comment:";
  data += "<br><textarea rows='6' cols='45'></textarea><br>";
  data += "<input type='submit' value='Contact us'>";
  document.getElementById("area").innerHTML = data;
}

//Início de aula sobre objetos no JS ******************************
const emptyArray = [];
const valueArray = [1, 2, 3, 4, 5];

console.log(valueArray);

const emptyObject = {};
const valueObject = { nome: "Djan Gomes Tavares" };

console.log(valueObject.nome);

const valueObjectAux = {
  nome: "Djan",
  endereco: "Rua Magdeburgo",
  objectAux: { Idade: 43, Sexo: "Masculino" },
  fruta: ["melon", "papaya", "banana"],
  addNumbers: function (a, b) {
    return a + b;
  },
};

console.log(valueObjectAux.nome);
console.log(valueObjectAux.endereco);
console.log(valueObjectAux.objectAux);
console.log(valueObjectAux.fruta);
console.log(valueObjectAux.addNumbers(3, 7));

//Final de aula sobre objetos no JS ******************************
