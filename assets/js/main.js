function myFunction(x) {
  x.classList.toggle("change");
}
// progress bar animation
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("progress-bar1").style.width = "70%";
    document.getElementById("progress-bar2").style.width = "90%";
    document.getElementById("progress-bar3").style.width = "65%";
  } else {
    // document.getElementById("progress-bar1").style.width = "0%";
    // document.getElementById("progress-bar2").style.width = "0%";
    // document.getElementById("progress-bar3").style.width = "0%";
  }
}

// work feature number counter
// window.onscroll = function () {
//   numberscrollFunction();
// };

// function numberscrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     // Selector
//     const counters = document.querySelectorAll(".counter");
//     // Main function
//     for (let n of counters) {
//       const updateCount = () => {
//         const target = +n.getAttribute("data-target");
//         const count = +n.innerText;
//         const speed = 4000; // change animation speed here
//         const inc = target / speed;
//         if (count < target) {
//           n.innerText = Math.ceil(count + inc);
//           setTimeout(updateCount, 1);
//         } else {
//           n.innerText = target;
//         }
//       };
//       updateCount();
//     }
//   } else {
//     document.getElementById("counter").innerHTML = 0;
//   }
// }
