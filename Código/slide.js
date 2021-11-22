var i = 0; 			// Ponto de início
var images = [];	// Vetor de imagens
var time = 3000;	// Delay
	 
// Lista de imagens
images[0] = "img/banner.png";
images[1] = "img/banner-ecom.png";
images[2] = "img/banner-site.png";
images[3] = "img/banner-lp.png";

// Função apra mudar imagem
function changeImg(){
	document.slide.src = images[i];

	// Verificar se está dentro do parametro
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}

	// Executar a funcção a cada x segundos
	setTimeout("changeImg()", time);
}

// Executar a função quando a página carregar
window.onload=changeImg;