var op1; //para guardar el primer operando 
var op2; //para guardar el segundo operando
var oper; //para guardar la operacion a realizar
var resultado; //guarda el valor de en el visor
var verificaSigno = false; //verifica si esta puesto el signo
var val; //guarda el valor del visor para el procesamiento del signo
var coma=0; // para verificar si esta puesta la coma 0 = no / 1 = si
var result=0; //para verificar si se presiono el igual 0 = no / 1 = si
var dig = 0; //controla la cantidad de digitos en pantalla hasta 8 digitos
function init(){
	resultado = document.getElementById("display"); //guarda valor en visor
	//captura
var botones =document.getElementsByClassName('tecla');
		for (var i = 0; i < botones.length; i++) {
			botones[i].addEventListener('click', agregar);
			botones[i].addEventListener('click', reduceTamaño);
			
		}	
}
//funcion para dar el efecto de presionar boton
function reduceTamaño(){
	var valor = this.id;
	document.getElementById(valor).style="width:20%";
	document.getElementById(valor).style="height:62px";
	document.getElementById(valor).style="filter:sepia(100%);-webkit-filter:(sepia(100%);";
	setTimeout(function(){document.getElementById(valor).style="default";
	document.getElementById(valor).style="height:default";
	}, 1000);
	
}	
//limpia el visor
function limpiar(){
	document.getElementById("display").innerHTML = " ";
}
//resetea variables
function resetear(){
	resultado.textContent = "0";
	op1 = 0;
	op2 = 0;
	oper = 0;
	coma = 0;
	dig=0;
}
var Calculadora ={
//funcion para las operaciones matematicas	
resolver:function(){
	var res = 0;
	switch(oper){
		case "+":
			res = parseFloat(op1) + parseFloat(op2);
			break;
		case "-":
			res = parseFloat(op1) - parseFloat(op2);
			break; 	
		case "*":
			res = parseFloat(op1) * parseFloat(op2);
			break;	
		case "/":
			res = parseFloat(op1) / parseFloat(op2);
			break;	
	}
	resetear();
	res= res.toString();
	resultado.textContent = res.substr(0,8);
}
}
// controla el signo
function ponerSigno(){
	if (resultado.textContent == "0") {
		verificaSigno = true;
	}else{	
		if (verificaSigno == false){
			val = resultado.textContent;
			resultado.textContent = "-" + resultado.textContent;
			verificaSigno = true;
		}else{
			resultado.textContent = val;
			verificaSigno = false;
		}
	}	
}
//controla la coma
function ponerComa(){
	if (resultado.textContent == "0"){
		resultado.textContent = "0."
		coma = 1 }
		else if (coma == 0 && result == 0) {
			resultado.textContent = resultado.textContent + ".";
			coma = 1;
			dig+=1;
		}
}

function resetVariable(){
	coma = 0;
	dig = 0;
}		

function agregar(){
	var val = this.id.charAt().charCodeAt();	
	if (val >= 48 && val <=57  && dig < 8 ) {
		if (result == 1 ) {
			resultado.innerHTML = " ";
			resultado.textContent = resultado.textContent + this.id;
			result = 0;
		}else if (resultado.textContent != "0" ){
				
			resultado.textContent = resultado.textContent + this.id;
		}else {
			resultado.innerHTML = " ";
			resultado.textContent = resultado.textContent + this.id;
		}
		dig += 1;

	}else{
		switch(this.id){
		case "mas":
			op1 = resultado.textContent;
			oper = "+";
			resetVariable();
			limpiar();
			break;
		case "menos":
			op1 = resultado.textContent;
			oper = "-";
			resetVariable();
			limpiar();
			break; 	
		case "por":
			op1 = resultado.textContent;
			oper = "*";
			resetVariable();
			limpiar();
			break;	
		case "dividido":
			op1 = resultado.textContent;
			oper = "/";
			resetVariable();
			limpiar();
			break;	
		case "igual":
			op2 = resultado.textContent;
			result = 1;
			dig=0;			
			Calculadora.resolver();
			break;
		case "sign":
			ponerSigno();
			break;
		case "on":
			result=0;
			resetear();
			break;	
		case "punto":
			if (dig < 8) {
			ponerComa();
		}
			break			
	}
		
	}
}


init();
