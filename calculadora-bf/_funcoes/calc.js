
function Calcular() {
	
	var fem = document.getElementById('cFem').checked;
	var masc = document.getElementById('cMasc').checked;
	var altura=document.getElementById('altura').value;
	var cintura=document.getElementById('cintura').value;
	var peso=document.getElementById('peso').value;
	var quadril=document.getElementById('quadril').value;
	var pescoco=document.getElementById('pescoco').value;
	var idade=document.getElementById('idade').value;
	if (idade =='' || altura=='' || pescoco=='' || quadril=='' || cintura=='' || peso==''){
		alert ("Preencha todos os campos")
	} else if(fem == false && masc == false){
		alert ("Marque o sexo!");
	} else if (fem == true){
			BSI();
			GCF();
			GCF2();
			IMC();
			IAC();
			RCQ();
		} else {
			BSI();
			GCM();
			GCM2();
			IMC();
			IAC();
			RCQ();
		}
}

//Calcula o Índice de Massa Corporea
function  IMC() {
			var altura=document.getElementById('altura').value;
			var peso=document.getElementById('peso').value;
			var imc=peso/(altura/100*altura/100);
			var imcr=(imc.toFixed(2));
			document.getElementById("res-imc").innerHTML=imcr;
			if(imc<18.5){
				document.getElementById("res-imc-class").innerHTML="Baixo peso";
			} else if (imc>18.5 && imc<25){
				document.getElementById("res-imc-class").innerHTML="Normal";
			} else if (imc>25 && imc<30){
				document.getElementById("res-imc-class").innerHTML="Sobrepeso";
			} else if (imc>30){
				document.getElementById("res-imc-class").innerHTML="Obesidade";
			}
}

//Calcula o Índice de Adiposidade Corporal
function  	IAC() {
			var fem = document.getElementById('cFem').checked;
			var masc = document.getElementById('cMasc').checked;
			var quadril=document.getElementById('quadril').value;
			var altura=document.getElementById('altura').value;
			var iac=(parseInt(quadril)/((parseInt(altura)/100)**1.5))-18;
			var iacr=(iac.toFixed(2));
			document.getElementById("res-iac").innerHTML=iacr+"%";
				if (fem == true){
					if(iac<21){
						document.getElementById("res-iac-class").innerHTML="Baixo peso";
					} else if (iac>21 && iac<33){
						document.getElementById("res-iac-class").innerHTML="Normal";
					} else if (iac>33 && iac<39){
						document.getElementById("res-iac-class").innerHTML="Sobrepeso";
					} else if (iac>39){
						document.getElementById("res-iac-class").innerHTML="Obesidade";
					}
				
				} else {
					if(iac<8){
						document.getElementById("res-iac-class").innerHTML="Baixo peso";
					} else if (iac>8 && iac<21){
						document.getElementById("res-iac-class").innerHTML="Normal";
					} else if (iac>21 && iac<26){
						document.getElementById("res-iac-class").innerHTML="Sobrepeso";
					} else if (iac>26){
						document.getElementById("res-iac-class").innerHTML="Obesidade";
					}
				}
			
}

//Calcula o percentual de gordura em homens
function  	GCM() {
			var idade=document.getElementById('idade').value;
			var cintura=document.getElementById('cintura').value;
			var altura=document.getElementById('altura').value;
			var pescoco=document.getElementById('pescoco').value;
			var gcm=495/(1.0324 - 0.19077*(Math.log10(cintura-pescoco)) + 0.15456*(Math.log10(altura)))-450;
			var gcmr=(gcm.toFixed(2));
			document.getElementById("res-gc").innerHTML= gcmr+"%";
			if(idade<=29){
				if(gcm<=11){
				document.getElementById("res-gc-class").innerHTML="Atleta";
				} else if (gcm>11 && gcm<=13){
				document.getElementById("res-gc-class").innerHTML="Bom";
				} else if (gcm>13 && gcm<=20){
				document.getElementById("res-gc-class").innerHTML="Normal";
				} else if (gcm>20 && gcm<=23){
				document.getElementById("res-gc-class").innerHTML="Elevado";
				} else if (gcm>23){
				document.getElementById("res-gc-class").innerHTML="Muito Elevado";
				}
			}
			else if(idade>29 && idade<=39){
				if(gcm<=12){
				document.getElementById("res-gc-class").innerHTML="Atleta";
				} else if (gcm>12 && gcm<=14){
				document.getElementById("res-gc-class").innerHTML="Bom";
				} else if (gcm>15 && gcm<=21){
				document.getElementById("res-gc-class").innerHTML="Normal";
				} else if (gcm>22 && gcm<=24){
				document.getElementById("res-gc-class").innerHTML="Elevado";
				} else if (gcm>24){
				document.getElementById("res-gc-class").innerHTML="Muito Elevado";
				}
			}
			else if(idade>39 && idade<=49){
				if(gcm<=14){
				document.getElementById("res-gc-class").innerHTML="Atleta";
				} else if (gcm>14 && gcm<=16){
				document.getElementById("res-gc-class").innerHTML="Bom";
				} else if (gcm>17 && gcm<=23){
				document.getElementById("res-gc-class").innerHTML="Normal";
				} else if (gcm>24 && gcm<=26){
				document.getElementById("res-gc-class").innerHTML="Elevado";
				} else if (gcm>26){
				document.getElementById("res-gc-class").innerHTML="Muito Elevado";
				}
			}
			else if(idade>49){
				if(gcm<=15){
				document.getElementById("res-gc-class").innerHTML="Atleta";
				} else if (gcm>15 && gcm<=17){
				document.getElementById("res-gc-class").innerHTML="Bom";
				} else if (gcm>18 && gcm<=24){
				document.getElementById("res-gc-class").innerHTML="Normal";
				} else if (gcm>25 && gcm<=27){
				document.getElementById("res-gc-class").innerHTML="Elevado";
				} else if (gcm>27){
				document.getElementById("res-gc-class").innerHTML="Muito Elevado";
				}
			}
		}
function 	GCM2(){
			// Calcula percentual de gorduras em homens com base no IMC
			//BFP = 1.20 × BMI + 0.23 × Age - 16.2 - Adultos
			//BFP = 1.51 × BMI - 0.70 × Age - 2.2 - Adolescentes
			var idade=document.getElementById('idade').value;
			var altura=document.getElementById('altura').value;
			var peso=document.getElementById('peso').value;
			var imc=peso/(altura/100*altura/100);
			if (idade>19){
			var gcm2=1.2*imc+0.23*idade-16.2
			} else {
			var gcm2=1.51*imc-0.70*idade-2.2
			}
			var gcm2r=(gcm2.toFixed(2));
			document.getElementById("res-gc2").innerHTML=gcm2r+"%";
			if(idade<=29){
				if(gcm2<=11){
				document.getElementById("res-gc2-class").innerHTML="Atleta";
				} else if (gcm2>11 && gcm2<=13){
				document.getElementById("res-gc2-class").innerHTML="Bom";
				} else if (gcm2>13 && gcm2<=20){
				document.getElementById("res-gc2-class").innerHTML="Normal";
				} else if (gcm2>20 && gcm2<=23){
				document.getElementById("res-gc2-class").innerHTML="Elevado";
				} else if (gcm2>23){
				document.getElementById("res-gc2-class").innerHTML="Muito Elevado";
				}
			}
			else if(idade>29 && idade<=39){
				if(gcm2<=12){
				document.getElementById("res-gc2-class").innerHTML="Atleta";
				} else if (gcm2>12 && gcm2<=14){
				document.getElementById("res-gc2-class").innerHTML="Bom";
				} else if (gcm2>15 && gcm2<=21){
				document.getElementById("res-gc2-class").innerHTML="Normal";
				} else if (gcm2>22 && gcm2<=24){
				document.getElementById("res-gc2-class").innerHTML="Elevado";
				} else if (gcm2>24){
				document.getElementById("res-gc2-class").innerHTML="Muito Elevado";
				}
			}
			else if(idade>39 && idade<=49){
				if(gcm2<=14){
				document.getElementById("res-gc2-class").innerHTML="Atleta";
				} else if (gcm2>14 && gcm2<=16){
				document.getElementById("res-gc2-class").innerHTML="Bom";
				} else if (gcm2>17 && gcm2<=23){
				document.getElementById("res-gc2-class").innerHTML="Normal";
				} else if (gcm2>24 && gcm2<=26){
				document.getElementById("res-gc2-class").innerHTML="Elevado";
				} else if (gcm2>26){
				document.getElementById("res-gc2-class").innerHTML="Muito Elevado";
				}
			}
			else if(idade>49){
				if(gcm2<=15){
				document.getElementById("res-gc2-class").innerHTML="Atleta";
				} else if (gcm2>15 && gcm2<=17){
				document.getElementById("res-gc2-class").innerHTML="Bom";
				} else if (gcm2>18 && gcm2<=24){
				document.getElementById("res-gc2-class").innerHTML="Normal";
				} else if (gcm2>25 && gcm2<=27){
				document.getElementById("res-gc2-class").innerHTML="Elevado";
				} else if (gcm2>27){
				document.getElementById("res-gc2-class").innerHTML="Muito Elevado";
				}
			}
}

//Calcula o percentual de gordura em mulheres
function  	GCF() {
			var idade=document.getElementById('idade').value;
			var cintura=document.getElementById('cintura').value;
			var altura=document.getElementById('altura').value;
			var quadril=document.getElementById('quadril').value;
			var pescoco=document.getElementById('pescoco').value;
			var gcf=495/(1.29579 - 0.35004*Math.log10(parseFloat(cintura)+parseFloat(quadril)-pescoco) + 0.22100*Math.log10(altura))-450;
			var gcfr=(gcf.toFixed(2));
			document.getElementById("res-gc").innerHTML=gcfr+"%";
			if(idade<29){
				if(gcf<16){
				document.getElementById("res-gc-class").innerHTML="Atleta";
				} else if (gcf>16 && gcf<19){
				document.getElementById("res-gc-class").innerHTML="Bom";
				} else if (gcf>19 && gcf<29){
				document.getElementById("res-gc-class").innerHTML="Normal";
				} else if (gcf>29 && gcf<31){
				document.getElementById("res-gc-class").innerHTML="Elevado";
				} else if (gcf>31){
				document.getElementById("res-gc-class").innerHTML="Muito Elevado";
				}
			}
			else if(idade>29 && idade<39){
				if(gcf<17){
				document.getElementById("res-gc-class").innerHTML="Atleta";
				} else if (gcf>17 && gcf<21){
				document.getElementById("res-gc-class").innerHTML="Bom";
				} else if (gcf>21 && gcf<30){
				document.getElementById("res-gc-class").innerHTML="Normal";
				} else if (gcf>30 && gcf<32){
				document.getElementById("res-gc-class").innerHTML="Elevado";
				} else if (gcf>32){
				document.getElementById("res-gc-class").innerHTML="Muito Elevado";
				}
			}
			else if(idade>39 && idade<49){
				if(gcf<18){
				document.getElementById("res-gc-class").innerHTML="Atleta";
				} else if (gcf>18 && gcf<22){
				document.getElementById("res-gc-class").innerHTML="Bom";
				} else if (gcf>22 && gcf<31){
				document.getElementById("res-gc-class").innerHTML="Normal";
				} else if (gcf>31 && gcf<33){
				document.getElementById("res-gc-class").innerHTML="Elevado";
				} else if (gcf>33){
				document.getElementById("res-gc-class").innerHTML="Muito Elevado";
				}
			}
			else if(idade>49){
				if(gcf<19){
				document.getElementById("res-gc-class").innerHTML="Atleta";
				} else if (gcf>19 && gcf<22){
				document.getElementById("res-gc-class").innerHTML="Bom";
				} else if (gcf>22 && gcf<31){
				document.getElementById("res-gc-class").innerHTML="Normal";
				} else if (gcf>31 && gcf<34){
				document.getElementById("res-gc-class").innerHTML="Elevado";
				} else if (gcf>34){
				document.getElementById("res-gc-class").innerHTML="Muito Elevado";
				}
			}
}
function 	GCF2(){
			//BFP = 1.20 × BMI + 0.23 × Age - 5.4 Adultos
			//BFP = 1.51 × BMI - 0.70 × Age + 1.4 Adolescentes
			var idade=document.getElementById('idade').value;
			var altura=document.getElementById('altura').value;
			var peso=document.getElementById('peso').value;
			var imc=peso/(altura/100*altura/100);
			if(idade<19){
				var gcf2=1.20*imc+0.23*idade-5.4;
			} else {
				var gcf2=1.51*imc-0.70*idade+ 1.4;
			}
			var gcf2r=(gcf2.toFixed(2));
			document.getElementById("res-gc2").innerHTML=gcf2r+"%";
			if(idade<=29){
				if(gcf2<=16){
				document.getElementById("res-gc2-class").innerHTML="Atleta";
				} else if (gcf2>16 && gcf2<=19){
				document.getElementById("res-gc2-class").innerHTML="Bom";
				} else if (gcf2>19 && gcf2<=28){
				document.getElementById("res-gc2-class").innerHTML="Normal";
				} else if (gcf2>29 && gcf2<=31){
				document.getElementById("res-gc2-class").innerHTML="Elevado";
				} else if (gcf2>31){
				document.getElementById("res-gc2-class").innerHTML="Muito Elevado";
				}
			}
			else if(idade>29 && idade<=39){
				if(gcf2<=17){
				document.getElementById("res-gc2-class").innerHTML="Atleta";
				} else if (gcf2>17 && gcf2<=20){
				document.getElementById("res-gc2-class").innerHTML="Bom";
				} else if (gcf2>20 && gcf2<=29){
				document.getElementById("res-gc2-class").innerHTML="Normal";
				} else if (gcf2>30 && gcf2<=32){
				document.getElementById("res-gc2-class").innerHTML="Elevado";
				} else if (gcf2>32){
				document.getElementById("res-gc2-class").innerHTML="Muito Elevado";
				}
			}
			else if(idade>39 && idade<=49){
				if(gcf2<=18){
				document.getElementById("res-gc2-class").innerHTML="Atleta";
				} else if (gcf2>18 && gcf2<=21){
				document.getElementById("res-gc2-class").innerHTML="Bom";
				} else if (gcf2>21 && gcf2<=30){
				document.getElementById("res-gc2-class").innerHTML="Normal";
				} else if (gcf2>31 && gcf2<=33){
				document.getElementById("res-gc2-class").innerHTML="Elevado";
				} else if (gcf2>33){
				document.getElementById("res-gc2-class").innerHTML="Muito Elevado";
				}
			}
			else if(idade>49){
				if(gcf2<=19){
				document.getElementById("res-gc2-class").innerHTML="Atleta";
				} else if (gcf2>19 && gcf2<=22){
				document.getElementById("res-gc2-class").innerHTML="Bom";
				} else if (gcf2>22 && gcf2<=31){
				document.getElementById("res-gc2-class").innerHTML="Normal";
				} else if (gcf2>31 && gcf2<=34){
				document.getElementById("res-gc2-class").innerHTML="Elevado";
				} else if (gcf2>34){
				document.getElementById("res-gc2-class").innerHTML="Muito Elevado";
				}
			}
}
function 	RCQ(){
			//Relaçao Cintura-quadril
			var fem = document.getElementById('cFem').checked;
			var masc = document.getElementById('cMasc').checked;
			var cintura=document.getElementById('cintura').value;
			var quadril=document.getElementById('quadril').value;
			var rcq = cintura/quadril;
			var rcqr=(rcq.toFixed(2));
			document.getElementById("res-rcq").innerHTML=rcqr;
			if (fem == true){
					if(rcq<0.80){
						document.getElementById("res-rcq-class").innerHTML="Baixo";
					} else if (rcq>0.81 && rcq<0.85){
						document.getElementById("res-rcq-class").innerHTML="Moderado";
					} else if (rcq>0.85){
						document.getElementById("res-rcq-class").innerHTML="Alto";
					} 
				
			} else {
					if(rcq<0.95){
						document.getElementById("res-rcq-class").innerHTML="Baixo";
					} else if (rcq>0.95 && rcq<1){
						document.getElementById("res-rcq-class").innerHTML="Moderado";
					} else if (rcq>1){
						document.getElementById("res-rcq-class").innerHTML="Alto";
					} 
			}
}
function 	BSI() {
			//Calcular Body Shape Index
			var altura=document.getElementById('altura').value;
			var peso=document.getElementById('peso').value;
			var cintura=document.getElementById('cintura').value;
			var imc=peso/(altura/100*altura/100);
			var bsi= (cintura/100)/(((imc**(2/3))*((altura/100)**(1/2))));
			var bsir=(bsi.toFixed(3));
			document.getElementById("res-bsi").innerHTML=bsir;
			
}

