function escopoGlobal (){
const form = document.querySelector('.formImc');

form.addEventListener('submit', function (e){
  e.preventDefault();
  const peso = e.target.querySelector('.pesoForm');
  const altura = e.target.querySelector('.alturaForm');
  const pesoValue = Number(peso.value);
  const alturaValue = Number(altura.value);
  if (!pesoValue){
    setResultado('Peso invalido', false);
    return;
  }
  if (!alturaValue){
    setResultado('Altura invalida', false);
    return;
  }


 const imc = calculaImc(pesoValue, alturaValue);
 const getNivelImc = nivelImc(imc); 
 const msg = `Seu IMC e ${imc} (${getNivelImc})`

 setResultado(msg, true)
});


function calculaImc(pesoValue, alturaValue){
  const imc= pesoValue/ alturaValue **2;
  return imc.toFixed(1);
};

  function criaP(){
  const p = document.createElement('p');
p.classList.add('good');
  return p;
};

function setResultado (msg, isValid) {
  const resultado = document.querySelector('.resultadoImc');
  resultado.innerHTML = '';
  const p = criaP();
  if (isValid){
    p.classList.add('good');
  } else {
    p.classList.add('unhealth');
  }
  
  p.innerHTML=msg;
  resultado.appendChild(p);
};

function nivelImc (imc){
  const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1'
  ,'Obesidade grau 2','Obesidade grau 3']

if (imc>=39.9) return nivel[5];
if (imc>=34.9) return nivel[4];
if (imc>=29.9) return nivel[3];
if (imc>=24.9) return nivel[2];
if (imc>=18.5) return nivel[1];
if (imc<18.5) return nivel[0];

}


}
escopoGlobal();
