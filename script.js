$(document).ready(function() {
    var slideIndex = 0;
    showSlides();
  
    function showSlides() {
      var i;
      var slides = $(".slide");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000); // Waktu tampilan slide (dalam milidetik)
    }
  });

  document.getElementById("myElement").innerHTML = "Teks baru";
  var inputValue = document.getElementById("myInput").value;
  document.getElementById("myElement").addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
  });
  document.getElementById("myElement").classList.remove("myClass");
  var newElement = document.createElement("div");
  document.getElementById("myContainer").appendChild(newElement);
  var elementToRemove = document.getElementById("myElement");
elementToRemove.parentNode.removeChild(elementToRemove);
var xhr = new XMLHttpRequest();
xhr.open("GET", "content.html", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById("myElement").innerHTML = xhr.responseText;
  }
};
xhr.send();
window.addEventListener("load", function() {
    alert("Halaman telah dimuat sepenuhnya.");
  });
  setTimeout(function() {
    // Kode yang akan dijalankan setelah 5 detik
  }, 5000);
  