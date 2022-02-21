document.querySelector('#confirmar_presenca').addEventListener('click',function(){
 let nome = document.querySelector('#nome').value;
 let fone = document.querySelector('#fone').value;
 
let url = ("https://api.whatsapp.com/send?phone=5543991856191&text="+
			"Olá, meu nome é "+nome+"%0AMeu telefone de contato é "+fone+"%0AGostaria de algumas informações.");
window.open(url);

});

document.querySelector('#whats').addEventListener('click',function(){
   let url = ("https://api.whatsapp.com/send?phone=5543991856191&text="+
			   "Olá, gostaria de algumas informações.");
   window.open(url);
   
   });
