
$(document).ready(function(){

	$('#bar1').barfiller({ barColor:'#62e258',duration:3000});
	$('#bar2').barfiller({ barColor:'#ee2557',duration:3000});
	$('#bar3').barfiller({ barColor: '#fc6',duration: 3000 });
	$('#bar4').barfiller({ barColor: '#900',duration: 3000 });
	
});


var typed = new Typed('.type', {
	strings: ['Web Designer', 
			'Web Developer',
			'UI/UX Designer'],
	typeSpeed: 60,
	backSpeed:60,
	loop:true
  });
 
  jQuery(document).ready(function( $ ) {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});
var $grid = $('.gride').isotope({
  });
  // filter items on button click
  $('.button-groups').on( 'click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
  });




  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      responsiveClass:true,
      responsiveRefreshRate:true,
      responsive:{
        0:{
          items:1,
        },
        768:{
          items:1,
        }
      }
    });
  });


  $(document).ready(function() {

    $('.view').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
      verticalFit: true,
      }
      })
      
    });
    window.addEventListener("scroll",()=>{
      const header=document.querySelector("header");
      header.classList.toggle("sticky",window.scrollY>0)
    })
    const section=document.querySelectorAll("section");
    const nav=document.querySelectorAll("nav ul li a");
   window.addEventListener("scroll",()=>{
     section.forEach(section=>{
       const sectionTop=section.offsetTop;
       const sectionHeight=section.clientHeight;
       if(pageYOffset>sectionTop-(sectionHeight)/3){
         curent=section.getAttribute("id");
       }
     })
     nav.forEach(a=>{
       a.classList.remove("active");
       if(a.classList.contains(curent)){
         a.classList.add("active")
       }
     })
   })

    


    
   