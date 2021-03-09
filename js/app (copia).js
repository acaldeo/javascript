var op1;
var op2;
var oper;
var resultado;
var verificaSigno = false;
var val;
var coma=0;
var result=0;
var dig = 0;
function init(){
	resultado = document.getElementById("display");
	
}
function reduceTamaño(){
	var valor = this.id;
	document.getElementById(valor).style="width:20%";
	document.getElementById(valor).style="height:62px";
	document.getElementById(valor).style="filter:sepia(100%);-webkit-filter:(sepia(100%);";
	setTimeout(function(){document.getElementById(valor).style="default";
	document.getElementById(valor).style="height:default";
	}, 1000);
	
}	

function limpiar(){
	document.getElementById("display").innerHTML = " ";
}
function resetear(){
	resultado.textContent = "0";
	op1 = 0;
	op2 = 0;
	oper = 0;
	coma = 0;
	dig=0;
}
function resolver(){
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
	resultado.textContent = res;
}
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
function ponerComa(){
	if (resultado.textContent == "0"){
		resultado.textContent = "0."
		coma = 1 }
		else if (coma == 0 && result == 0) {
			resultado.textContent = resultado.textContent + ".";
			coma = 1;
		}
}
var botones =document.getElementsByClassName('tecla');
		for (var i = 0; i < botones.length; i++) {
			botones[i].addEventListener('click', agregar);
			botones[i].addEventListener('click', reduceTamaño);
			
		}
function resetVariable(){
	coma = 0;
	result=0;
	dig = 0;
}		

function agregar(){
	var val = this.id.charAt().charCodeAt();
		
	if (val >= 48 && val <=57  && dig < 7 && result == 0) {
		if (resultado.textContent != "0" ){
				
			resultado.textContent = resultado.textContent + this.id;
		}
		else {
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
			resolver();
			break;
		case "sign":
			ponerSigno();
			break;
		case "on":
			resetear();
			break;	
		case "punto":
			ponerComa();
			break			
	}
		
	}
}


init();
