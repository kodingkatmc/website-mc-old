
let carousels = document.getElementsByClassName("carousel");

for(let i=0; i<carousels.length; i++){
  //console.log(carousels[i]);
  showSlides(carousels[i], 0);
}


function showSlides(carousel, index) {
  let slides = carousel.children;
  for(let c=0; c<slides.length; c++){
    $(slides[c]).css('z-index', -1);
  }

  //console.log(window.innerHeight < window.innerWidth);
  if(window.innerHeight < window.innerWidth){
    //console.log("small");
    if(index==0){
      $(slides[slides.length-1]).css('z-index', 0);
      $(slides[slides.length-1]).animate({left: '39vw'});
    }else{
      $(slides[index-1]).css('z-index', 0);
      $(slides[index-1]).animate({left: '39vw'});
    }

    $(slides[index]).css('z-index', 1);
    $(slides[index]).css('left', '-39vw');
    $(slides[index]).animate({left: '0'});
  }else{
    if(index==0){
      $(slides[slides.length-1]).css('z-index', 0);
      $(slides[slides.length-1]).animate({left: '70vw'});
    }else{
      $(slides[index-1]).css('z-index', 0);
      $(slides[index-1]).animate({left: '70vw'});
    }

    $(slides[index]).css('z-index', 1);
    $(slides[index]).css('left', '-70vw');
    $(slides[index]).animate({left: '0'});
  }


  //console.log(index);
  index++;
  if (index > slides.length-1) {
    index = 0;
  }

  setTimeout(showSlides.bind(null, carousel, index), 2000);
}
