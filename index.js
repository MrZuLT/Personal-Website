$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else{
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show")
    } else{
      $('.scroll-up-btn').removeClass("show")
    }

  });

  //slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
  });

  //toggle menu/navbar script
  $('.links-btn').click(function () {
    $('.navbar .links').toggleClass("active");
    $('.links-btn i').toggleClass("active");
  });

  //owl-carousel script
  $('.gallery').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });

});

//get all required
/*const form = document.querySelector("form"),
statusTxt = form.querySelector(".button");

form.onsubmit = ()=>{
  e.preventDefault(); //preventing form from submitting
  statusTxt.getElementsByClassName.display = "block";
  
  let xhr = new XMLHttpRequest(); //creating new xml object
  xhr.open("POST", "contact.php", true); //sending post request to cantact.php file
  xhr.onload = ()=>{ //once ajax loaded
    if(xhr.readyState == 4 && xhr.status ==200){
      let response = xhr.response; //
      console.log(response);
    }
  }
  xhr.send();
}*/
