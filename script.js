//función que cuente la cantidad de caracteres, palabras y lineas en un texto
function countText() {
    let text = document.form_main.text.value;
    document.getElementById('characters').innerText = text.length;
    document.getElementById('words').innerText = text.length == 0 ? 0 : text.split(/\s+/).length;
    document.getElementById('rows').innerText = text.length == 0 ? 0 : text.split(/\n/).length;
  }

//funcion que indique si un texto es un palindromo
function esPalindromo(cadena) {
    let array = cadena.split('');
    let reverse = array.reverse();

    return cadena == reverse.join('') ? 'Si es palindromo' : 'No es palindromo'
}

console.log(esPalindromo('Amor a roma'));
