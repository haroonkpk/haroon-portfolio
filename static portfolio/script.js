
// Shery.textAnimate(".contailner h1" /* Element to target.*/, {
//   //Parameters are optional.
//   style: 2,
//   y: 10,
//   delay: 0.1,
//   duration: 2,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   multiplier: 0.1,
// });




window.addEventListener("load", function () {
  // Hide the loading screen
  document.getElementById("loading-screen").style.display = "none";

  // Show the main content
  document.querySelector(".main").style.display = "flex";
}); 


  AOS.init({
    duration: 1000,
    once: false,
  });


const list = document.querySelectorAll(".list");

function activelink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activelink));




var pupils = document.querySelectorAll(".pupil");

for (var i = 0; i < pupils.length; i++) {
  var offset = pupils[i].getBoundingClientRect();
  (pupils[i]["centerX"] = offset.left + offset.width / 2),
    (pupils[i]["centerY"] = offset.bottom);
}

function goGoogly(e) {
  var pointerEvent = e;
  if (e.targetTouches && e.targetTouches[0]) {
    e.preventDefault();
    pointerEvent = e.targetTouches[0];
    mouseX = pointerEvent.pageX;
    mouseY = pointerEvent.pageY;
  } else {
    (mouseX = e.clientX + window.pageXOffset),
      (mouseY = e.clientY + window.pageYOffset);
  }
  for (var i = 0; i < pupils.length; i++) {
    (pupils[i]["radians"] = Math.atan2(
      mouseX - pupils[i]["centerX"],
      mouseY - pupils[i]["centerY"]
    )),
      (pupils[i]["degree"] = pupils[i]["radians"] * (180 / Math.PI) * -1);
    pupils[i].style.transform =
      "rotate(" + (pupils[i]["degree"] + 180) + "deg)";
  }
}

window.addEventListener("mousemove", goGoogly);
window.addEventListener("touchstart", goGoogly);
window.addEventListener("touchmove", goGoogly);

var btn = document.querySelector(".mouse-cursor-gradient-tracking");
btn.onmousemove = function (e) {
  var x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft;
  var y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop;
  btn.style.setProperty("--x", x + "px");
  btn.style.setProperty("--y", y + "px");
};





 



var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});










// globel about
   VANTA.GLOBE({
     el: "#background-effect",
     mouseControls: true,
     touchControls: true,
     gyroControls: true,
     minHeight: 800.0,
     minWidth: 800.0,
     scale: 1.0,
     scaleMobile: 1.0,
     color: 0x00ffff,
     backgroundColor: 0x0,
   });











// contener
const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Dream big, work hard, stay focused, and surround yourself with good people.",
  "The only way to do great work is to love what you do.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "Do something today that your future self will thank you for.",
];

let currentIndex = 0;
const textElement = document.getElementById("text");

function typeWriterEffect(
  text,
  element,
  speed = 200,
  eraseSpeed = 30,
  delay = 1500
) {
  let i = 0;

  function type() {
    if (i < text.length) {
      element.innerHTML = text.substring(0, i + 1);
      i++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, delay); // Wait before erasing
    }
  }

  function erase() {
    if (i >= 0) {
      element.innerHTML = text.substring(0, i);
      i--;
      setTimeout(erase, eraseSpeed);
    } else {
      currentIndex = (currentIndex + 1) % quotes.length; // Next quote
      setTimeout(
        () =>
          typeWriterEffect(
            quotes[currentIndex],
            element,
            speed,
            eraseSpeed,
            delay
          ),
        500
      );
    }
  }

  type();
}

// Start the effect on page load
document.addEventListener("DOMContentLoaded", () => {
  typeWriterEffect(quotes[currentIndex], textElement);
});









// contect


 // Enable submit button only if terms checkbox is checked
        const termsCheckbox = document.getElementById("terms");
        const submitBtn = document.getElementById("submitBtn");
        const resetBtn = document.getElementById("resetBtn");

        termsCheckbox.addEventListener("change", function () {
            submitBtn.disabled = !this.checked;
            resetBtn.disabled = !this.checked;
        });

        // Intercept form submission
        const form = document.getElementById("contactForm");
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Form ki default submission ko rokta hai

            // Field values retrieve karain
            const name = document.getElementById("name").value;
            const surname = document.getElementById("surname").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;

            // WhatsApp number set karein (country code ke sath, e.g. "923XXXXXXXXX")
            const whatsappNumber = "923428151375";

            // Message ko URL encode karke WhatsApp ke liye format karein
            const text = `Name: ${name} ${surname}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

            // WhatsApp URL generate karein
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

            // Redirect kar dein user ko WhatsApp par
            window.location.href = whatsappURL;
        });


        // foter
        // Add a smooth scroll back to the top when clicking on the footer.
document.querySelector('.footer-bottom p').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// email
document.getElementById("emailButton").addEventListener("click", function () {
  // Replace 'your_email@gmail.com' with your actual email address.
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=your_email@gmail.com",
    "_blank"
  );
});


