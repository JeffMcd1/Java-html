const form = document.getElementById("myForm");

form.addEventListener("submit", function(event){
  const numA = parseInt(document.getElementById("a").value);
  const numB = parseInt(document.getElementById("b").value);

  if (numB <= numA) {
    event.preventDefault(); 
    alert("Valor B deve ser maior que o valor A"); 
  }
});
