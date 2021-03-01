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

  // cendyn newsletter post data
  document.getElementById('newsletterForm').onsubmit = function(e) {
    e.preventDefault();
    let formId = document.getElementById('formID').value;
    let url = 'https://web2.cendynhub.com/FormsRest/submit/' + formId + '?format=json';
    let data = JSON.stringify({
      "PostData": {
        "firstName": document.getElementsByName('firstName').value,
				"lastName": document.getElementsByName('lastName').value,
        "emailAddress": document.getElementById('emailAddress').value,
        "PPASAgree": document.getElementById('PPASAgree').value
      }
    });

    makeRESTCall(url, data, function() {
      window.location = '/thankyou/';
    });
    return false;
  }

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
  // cendyn newsletter post data ends here

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

});
