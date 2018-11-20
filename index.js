var elems = document.querySelectorAll('.carousel')
var instances = M.Carousel.init(elems, ({fullWidth: true, indicators: true}))

var elems = document.querySelectorAll('.dropdown-trigger');
var instances = M.Dropdown.init(elems)

var slideIndex = 1
showSlides(slideIndex)

function plusSlides (n) {
  showSlides(slideIndex += n)
}

function currentSlide (n) {
  showSlides(slideIndex = n)
}

function showSlides (n) {
//   var i
//   var slides = document.getElementsByClassName('mySlides')
//   var dots = document.getElementsByClassName('dot')
//   if (n > slides.length) { slideIndex = 1 }    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none'
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace('active', '')
//   }
//   slides[slideIndex - 1].style.display = 'block'
//   dots[slideIndex - 1].className += 'active'
}


var products = document.getElementsByClassName('container-product')

// [
//   <div class="container-product">
//     <div class="container-top">
//       <a href="#"><img class="product" src="imagenes-josu/product3.jpg" alt=""></a>
//     </div>
//     <div class="container-bot">
//       <h5 class="precio"> $1650</h5>
//       <p>Ardidas Reacidosas A69</p>
//     </div>
//   </div>,
//   <div class="container-product">
//     <div class="container-top">
//       <a href="#"><img class="product" src="imagenes-josu/product4.jpg" alt=""></a>
//     </div>
//     <div class="container-bot">
//         <h5 class="precio"> $1200</h5>
//         <p>Adidas Mancmodel M7x4</p>
//     </div>
//   </div>,
//   <div class="container-product">
//     <div class="container-top">
//       <a href="#"><img class="product" src="imagenes-josu/product5.jpg" alt=""></a>
//     </div>
//     <div class="container-bot">
//         <h5 class="precio"> $1499</h5>
//         <p>Adidas Bronce V Plus </p>
//     </div>
//   </div>
// ]

for (var i = 0; i < products.length; i++) {
  var product = products[i]
  product.addEventListener('click', function () {
    var bottom = this.lastElementChild
    var price = bottom.firstElementChild.innerHTML
    var description = bottom.lastElementChild.innerHTML

    console.log(price, description)
  })
}
