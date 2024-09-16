let images=document.querySelector('.small'); 
let bottom=0;

 	
	document.querySelector('.arrowdown').addEventListener('click',arrowdown);
	document.querySelector('.arrowup').addEventListener('click',arrowup);


 function arrowdown(){
bottom+=173;
 document.querySelector('.small').style.marginTop=bottom+'px';
	 document.querySelector('.small').style.transition='all 1s ease';
}


function arrowup(){
 // if(bottom==-75){
 bottom-=172;
	 // }
	 document.querySelector('.small').style.marginTop=bottom+'px';
	 document.querySelector('.small').style.transition='all 1s ease';
 }
