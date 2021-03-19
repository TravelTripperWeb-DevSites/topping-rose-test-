//Built using webpack, so you may write script components in multiple files and include them here.

//fallback ready document
function readyDoc(fn) {
  var d = document;
  (d.readyState == 'loading') ? d.addEventListener('DOMContentLoaded', fn): fn();
}

readyDoc(function() {

  // Mobile subnav collapsable
    // var accItem = document.querySelectorAll('.nav__item.has-subnav');
    // var accHD = document.getElementsByClassName('menu-expand');
    // for (i = 0; i < accHD.length; i++) {
    //     accHD[i].addEventListener('click', toggleItem, false);
    // }
    // function toggleItem() {
    //     var itemClass = this.parentNode;
    //     if (itemClass.classList.contains("open")) {
    //         itemClass.classList.remove("open");
    //         this.classList.remove("opened");
    //     } else {
    //       itemClass.classList.add("open");
    //       this.classList.add("opened");
    //     }
    // }

  // Leaflet map
  setTimeout(function(){
    document.querySelector("img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive").setAttribute("src", "//res.cloudinary.com/traveltripperweb/image/upload/c_limit,f_auto,h_2500,q_auto,w_2500/v1615477722/buatbmj13yfhbi0z2nen.png");
    if(document.querySelector("img.leaflet-marker-icon")) {
      document.querySelector("img.leaflet-marker-icon").click();
    }
  }, 1000);

  // cendyn newsletter post data
  // document.getElementById('newsletterForm').onsubmit = function(e) {
  //   e.preventDefault();
  //   let formId = document.getElementById('formID').value;
  //   let url = 'https://web2.cendynhub.com/FormsRest/submit/' + formId + '?format=json';
  //   let data = JSON.stringify({
  //     "lead": {
  //       "first_name": document.getElementsByName('firstName').value,
	// 			"last_name": document.getElementsByName('lastName').value,
  //       "email_address": document.getElementById('emailAddress').value,
  //       "phone_number": document.getElementById('phone_number').value
  //     }
  //   });
  //
  //   makeRESTCall(url, data, function() {
  //     window.location = '/thankyou/';
  //   });
  //   return false;
  // }
  //
  // function makeRESTCall(url, data, callback) {
  //   var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  //
  //   request.onreadystatechange = function() {
  //     if (request.readyState == 4 && request.status == 200) {
  //       console.log(request.responseText);
  //       if (callback) {
  //         callback(request.responseText);
  //       }
  //     }
  //   }
  //   request.open('post', url, true);
  //   request.setRequestHeader('Content-Type', 'application/json');
  //   request.send(data);
  // }
  // cendyn newsletter post data ends here

  // Tripleseat RFP
  // fetch('http://api.tripleseat.com/', {
  // 	method: 'POST',
  // 	body: 'grant_type=client_credentials&client_id=N06krkxGjw8fBKkgHDZBiLFYD2SPADv84IWtJiRH&client_secret=7R9zxGPoxACNlRdHWDOT74KU2kld0hoVh8oVXMpz',
  // 	headers: {
  // 		'Content-Type': 'application/x-www-form-urlencoded'
  // 	}
  // });

  // document.getElementById('rfpForm').onsubmit = function(e) {
  //   e.preventDefault();
  //   let formId = document.getElementById('formID').value;
  //   let url = 'http://api.tripleseat.com/v1/leads/create.js?public_key=' + formId +'';
  //   let data = {
  //     "lead": {
  //       "first_name": document.getElementsByName('first_name').value,
	// 			"last_name": document.getElementsByName('last_name').value,
  //       "email_address": document.getElementsByName('email_address').value,
  //       "phone_number": document.getElementsByName('phone_number').value
  //     }
  //   }
  //
  //   makeRESTCall(url, data, function() {
  //     window.location = '/thankyou/';
  //   });
  //   return false;
  // }

  function makeRESTCall(url, data, callback) {
    var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        console.log(request.responseText);
        if (callback) {
          callback(request.responseText);
        }
      }
    }
    request.open('post', url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(data);
  }

  let moreInfoBtns = document.querySelectorAll(".experience-wrap__block__img");
  for(let i = 0; i < moreInfoBtns.length; i++) {
    moreInfoBtns[i].addEventListener("click", function(e){
      let currentBtn = e.currentTarget;
      let exp_wrap_content = document.querySelectorAll(".experience-wrap__block__morecontent");
      let other_blocks = document.querySelectorAll(".experience-wrap__block__img");
      for (var i = 0; i < exp_wrap_content.length; i++) {
        exp_wrap_content[i].classList.remove("show");
      }
      for (var i = 0; i < other_blocks.length; i++) {
        other_blocks[i].classList.add("grayout");
      }
      currentBtn.closest(".experience-wrap__block").querySelector(".experience-wrap__block__morecontent").classList.add("show");
      currentBtn.closest(".experience-wrap__block").querySelector(".experience-wrap__block__img").classList.remove("grayout");
      currentBtn.closest(".experience-wrap__block").querySelector(".experience-wrap__block__morecontent .h3").focus();
    });
  }

  let hideInfoBtns = document.querySelectorAll(".experience-wrap__block .primary-cta");
  for(let i = 0; i < hideInfoBtns.length; i++) {
    hideInfoBtns[i].addEventListener("click", function(e){
      let currentBtn = e.currentTarget;
      let other_blocks = document.querySelectorAll(".experience-wrap__block__img");
      for (var i = 0; i < other_blocks.length; i++) {
        other_blocks[i].classList.remove("grayout");
      }
      currentBtn.closest(".experience-wrap__block").querySelector(".experience-wrap__block__morecontent").classList.remove("show");
      currentBtn.closest(".experience-wrap__block").querySelector(".experience-wrap__block__img .p").focus();
    });
  }

  let moreLessBtns = document.querySelectorAll(".experience-wrap__block__mobile-title .less-more i");

  for(let i = 0; i < moreLessBtns.length; i++) {
    moreLessBtns[i].addEventListener("click", function(e){
      let currentBtn = e.currentTarget;
      if(currentBtn.classList.contains("fa-plus")) {
        currentBtn.classList.remove("fa-plus");
        currentBtn.classList.add("fa-minus");
        currentBtn.closest(".experience-wrap__block").querySelector(".experience-wrap__block__morecontent").classList.add("show");
        currentBtn.closest(".experience-wrap__block").querySelector(".experience-wrap__block__morecontent .h3").focus();
      } else {
        currentBtn.classList.add("fa-plus");
        currentBtn.classList.remove("fa-minus");
        currentBtn.closest(".experience-wrap__block").querySelector(".experience-wrap__block__morecontent").classList.remove("show");
        currentBtn.closest(".experience-wrap__block").querySelector(".experience-wrap__block__img .p").focus();
      }
    });
  }

  var rButton = document.getElementsByClassName("reserve-btn");
  var rPopup = document.getElementById("reserve-modal");
  var rPopupClose = document.getElementsByClassName("reserve-close")[0];
  if(rButton) {
    for(let i=0; i < rButton.length; i++) {
      rButton[i].addEventListener("click", function(e) {
        rPopup.style.display = "block";
      });
    }

    rButton.onclick = function() {
      rPopup.style.display = "block";
    };

    rPopupClose.onclick = function() {
      rPopup.style.display = "none";
    };
  }

  // Accordion
  var accord = document.getElementsByClassName('accordion-head');
  for (var a = 0; a < accord.length; a++) {
    accord[a].addEventListener('click', function() {
      this.parentNode.classList.toggle('opened');
    });
  }

  // Amenities slider
  if (document.getElementsByClassName('accolades__slider').length > 0) {

    let brandSliders = document.getElementsByClassName('accolades__slider');
    let prevBtns = document.querySelectorAll('.accolades__controls .iconbtn--left');
    let nextBtns = document.querySelectorAll('.accolades__controls .iconbtn--right');

    [].forEach.call(brandSliders, function (el, index) {
      tns({
        container: el,
        mouseDrag: true,
        nav: false,
        loop: false,
        controls: true,
        swipeAngle: false,
        items: 2,
        gutter: 12,
        prevButton: prevBtns[index], // previous button
        nextButton: nextBtns[index], // next button
        responsive: {
          600: {
            items: 3
          },
          768: {
            items: 4
          },
          992: {
            items: 6
          }
        }
      });
    });

  }

  // Room details hero slider
  if (document.getElementsByClassName('inner-banner__slider').length > 0) {
    var introSlider = tns({
      container: '.inner-banner__slider',
      items: 1,
      mouseDrag: true,
      nav: true,
      loop: false,
      gutter: 24,
      controls: false,
      swipeAngle: false
    });
  }

  // Room details hero slider
  if (document.getElementsByClassName('common-slider').length > 0) {
    var dineSlider = tns({
      container: '.common-slider',
      items: 1,
      mouseDrag: true,
      nav: true,
      loop: false,
      gutter: 24,
      controls: false,
      swipeAngle: false
    });
  }
  // modal popup
  var modalPopupBtn = document.getElementById("modalPopupBtn");
  var modalPopup = document.querySelector(".modal-popup");
  var modalPopupCloseBtn = document.getElementById("modalPopupCloseBtn");

  modalPopupBtn.addEventListener('click', function(){
    modalPopup.style.display = "block";
  });

  modalPopupCloseBtn.addEventListener('click', function(){
    modalPopup.style.display = "none";
  });

});
