const typingElement = document.getElementById('typing-animation');
const text = typingElement.innerText;
typingElement.innerText = '';

async function typeWriter() {
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === ' ') {
      typingElement.innerHTML += '&nbsp;'; // Menggunakan karakter spasi non-breaking
    } else {
      typingElement.innerText += text.charAt(i);
    }
    await sleep(200); // Waktu delay antar karakter (ms)
  }
  await sleep(2000); // Waktu sebelum menghapus teks (ms)
  await eraseText();
}

async function eraseText() {
  const originalText = typingElement.innerText;
  for (let i = originalText.length; i >= 0; i--) {
    typingElement.innerText = originalText.substring(0, i);
    await sleep(30); // Waktu delay antar penghapusan karakter (ms)
  }
  await sleep(500); // Waktu sebelum mulai mengetik lagi (ms)
  await typeWriter();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

typeWriter();






//js ats
window.addEventListener('scroll', function() {
  let atsElement = document.querySelector('.ats');
  if (window.scrollY > 300) {
    atsElement.style.display = 'flex';
  } else {
    atsElement.style.display = 'none';
  }
});

// Ketika tombol ats ditekan
let atsButton = document.querySelector('.ats');
atsButton.addEventListener('click', function() {
  let homeSection = document.getElementById('nav');
  homeSection.scrollIntoView({ behavior: 'smooth' });
});






//card
document.addEventListener("DOMContentLoaded", function () {
    const hiddenCards = document.getElementById("hidden-cards");
    const hiddenCards2 = document.getElementById("hidden-cards2");
    const hiddenCards3 = document.getElementById("hidden-cards3");
    const toggleCardsBtn = document.getElementById("toggle-cards-btn");

    toggleCardsBtn.addEventListener("click", function () {
      if (hiddenCards.style.display === "none") {
        hiddenCards.style.display = "block";
        hiddenCards2.style.display = "block";
        hiddenCards3.style.display = "block";
        toggleCardsBtn.textContent = `hidden project`;
      } else {
        hiddenCards.style.display = "none";
        hiddenCards2.style.display = "none";
        hiddenCards3.style.display = "none";
        toggleCardsBtn.textContent = `view all project`;
      }
    });

    // Additional script to hide the button when the screen width is above 500
    const screenSize = window.matchMedia("(min-width: 500px)");
    const updateButtonVisibility = () => {
      toggleCardsBtn.style.display = screenSize.matches ? "none" : "block";
    };

    screenSize.addListener(updateButtonVisibility);
    updateButtonVisibility();
  });
  
 
 
 
 
  
  
//navbar
document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua elemen <li> di navigasi
  const navItems = document.querySelectorAll(".list ul li a");

  // Tambahkan event click pada setiap elemen <li>
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Hapus kelas 'active' dari semua elemen <li>
      navItems.forEach((navItem) => {
        navItem.classList.remove("active");
      });

      // Tambahkan kelas 'active' pada elemen yang diklik
      item.classList.add("active");
    });
  });
});