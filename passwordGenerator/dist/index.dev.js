"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var letras = [].concat(_toConsumableArray("abcdefghijklmnopqrstuvwxyz"), _toConsumableArray("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));

var arrayNums = _toConsumableArray("0123456789");

var arraySymbols = _toConsumableArray("!@#$%^&*()_+[]{}|;:,.<>?/~-=");

var caracteres = [];
var btnPass = document.getElementById("btnPassword");
var p1 = document.getElementById("num1");
var p2 = document.getElementById("num2");
var passwordLength = document.getElementById("passwordLength");
var num = document.getElementById("numbers");
var symbols = document.getElementById("symbols");
btnPass.addEventListener("click", function () {
  var _caracteres;

  var size = parseInt(passwordLength.value);
  caracteres = [];
  caracteres = (_caracteres = caracteres).concat.apply(_caracteres, _toConsumableArray(letras));

  if (size === 0 || isNaN(size)) {
    size = 15;
  }

  p1.textContent = randomPassword(size);
  p2.textContent = randomPassword(size);
});

function randomPassword(value) {
  if (num.checked) {
    var _caracteres2;

    caracteres = (_caracteres2 = caracteres).concat.apply(_caracteres2, _toConsumableArray(arrayNums));
  }

  if (symbols.checked) {
    var _caracteres3;

    caracteres = (_caracteres3 = caracteres).concat.apply(_caracteres3, _toConsumableArray(arraySymbols));
  }

  var password = "";

  for (var i = 0; i < value; i++) {
    var random = Math.floor(Math.random() * caracteres.length);
    password += caracteres[random];
  }

  return password;
}

p1.addEventListener("click", function () {
  var text = p1.textContent;
  navigator.clipboard.writeText(text).then(function () {
    var msg = document.createElement("span");
    msg.textContent = "✔ Copiado";
    msg.style.marginLeft = "10px";
    msg.style.color = "green";
    p1.appendChild(msg);
    setTimeout(function () {
      return msg.remove();
    }, 1000); // desaparece después de 1s
  });
});
p2.addEventListener("click", function () {
  var text = p2.textContent;
  navigator.clipboard.writeText(text).then(function () {
    var msg = document.createElement("span");
    msg.textContent = "✔ Copiado";
    msg.style.marginLeft = "10px";
    msg.style.color = "green";
    p2.appendChild(msg);
    setTimeout(function () {
      return msg.remove();
    }, 1000); // desaparece después de 1s
  });
});