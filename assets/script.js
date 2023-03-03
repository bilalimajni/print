const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>" 
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	},
	
];

// importer les claases

const suivant = document.querySelector(".arrow_right");
const precedent = document.querySelector(".arrow_left");


// Mettre un event listener sur chacune des flèches
 suivant.addEventListener("click", function () { });

precedent.addEventListener("click", function () { });

// creation des points
const contaner =  document.querySelector(".dots" ) ;



function creatpoint () {

	const newP = document.createElement("p");
	newP.classList.add("dot");
	contaner.appendChild(newP);
};


function creatDot_selected () {

	const newP = document.createElement("p");
	newP.classList.add("dot","dot_selected");
	contaner.appendChild(newP);
};


 




  
// creation de point selon le nombre d’éléments présents dans le tableau “


for (var i = 0; i < slides.length; i++) {
	
	creatpoint ();
  };



  // changment dimage 


  // changment dimage 




  let currentImageIndex = 0;


//boucle suivant

suivant.addEventListener("click", function () {
if(currentImageIndex > slides.length ){
	currentImageIndex = 0 ;}
	
  currentImageIndex = (currentImageIndex + 1); 
  const images = document.querySelector(".banner-img").src = slides[currentImageIndex].image ;
  
	
});

//boucle precedent
	


	precedent.addEventListener("click", function () {
		currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length;
	const images = document.querySelector(".banner-img").src = slides[currentImageIndex].image ;
  });