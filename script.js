


// //For Loading the web Page
document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector('.progress');
    const progressText = document.querySelector('.progress-text');
  
    let progress = 0;
    const interval = setInterval(function() {
      progress += 1; // Incrementing progress
  
      if (progress > 100) {
        clearInterval(interval);
        progress = 100;
      }
  
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `${progress}%`;
  
      if (progress === 100) {
        // Hide the loader and show the main content after loading completes
        document.querySelector('.loader-wrapper').style.display = 'none';
        document.querySelector('.container').classList.remove('hidden');
      }
    }, 30); // Adjust the interval time (in milliseconds) for smoother animation
});
  

function updateProgressBar(progress, progressBarId, progressLabelId) {
  const progressBar = document.getElementById(progressBarId);
  const progressLabel = document.getElementById(progressLabelId);
  
  progressBar.style.width = progress + '%';
  progressLabel.textContent = progress + '%';

  }
  function increaseProgress(progressBarId, progressLabelId, targetProgress) {
    let progress = 0;
    const interval = setInterval(function() {
      if (progress >= targetProgress) {
        clearInterval(interval);
      } else {
        progress++;
        updateProgressBar(progress, progressBarId, progressLabelId);
      }
    }, 20);// Adjust the interval duration (in milliseconds) for the speed of progression
  }
// Delay the start of progress animations by 5 seconds
  setTimeout(function() {
// Call the function to set different progress for each progress bar
  increaseProgress('progressBar1', 'progressLabel1', 90); // Progress bar 1 to 30%
  increaseProgress('progressBar2', 'progressLabel2', 75); // Progress bar 2 to 50%
  increaseProgress('progressBar3', 'progressLabel3', 55); // Progress bar 3 to 75%
  increaseProgress('progressBar4', 'progressLabel4', 50); // Progress bar 4 to 20%
  }, 3500);





//Circular  Progress Bar 1

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(startProgressBar, 3500); // Start the progress bar after 10 seconds (10,000 milliseconds)
  });

function startProgressBar() {
let circularProgress1 = document.querySelector(".first-progress"),
    progressValue1 = document.querySelector(".first-progress .progress-value");

let progressStartValue1 = 0,
    progressEndValue1 = 75,
    speed1 = 10;

let progress1 = setInterval(() => {
    progressStartValue1++;

    progressValue1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background = `conic-gradient(#ebb30a ${progressStartValue1 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }    
}, speed1);
}

//Circular  Progress Bar 2
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(startProgressBar1, 3500); // Start the progress bar after 10 seconds (10,000 milliseconds)
  });
function startProgressBar1() {
let circularProgress2 = document.querySelector(".second-progress"),
    progressValue2 = document.querySelector(".second-progress .progress-value");

let progressStartValue2 = 0,
    progressEndValue2 = 100,
    speed2 = 10;

let progress2 = setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}%`
    circularProgress2.style.background = `conic-gradient(#ebb30a ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);
    }    
}, speed2);
}

//Download CV
const cvLink = document.getElementById('cvLink');
cvLink.addEventListener('click', function() {
  window.open('Prashant-Resume1.pdf', '_blank');
});

//Download CV
const cvLink1 = document.getElementById('cvLink1');
cvLink1.addEventListener('click', function() {
  window.open('Prashant-Resume1.pdf', '_blank');
});



//MAIN CONTENT

//FOR AUTO_TYPE
const typed= new Typed(".auto-type",{
  strings:["Web Developer","Web Responsiveness","Android Application","React Developer"],
  typeSpeed:130,
  backSpeed:130,
  loop:true

})


// FOR PROJECT SLIDER BOX

const slider = document.querySelector('.project-slider');
const bulletsContainer = document.querySelector('.bullets');
const slides = document.querySelectorAll('.project-slider .slide-box');
const visibleSlides = 3; // Number of visible slides
let isDown = false;
let startX;
let scrollLeft;

for (let i = 0; i < slides.length - visibleSlides + 1; i++) {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.addEventListener('click', () => {
        const slideWidth = slides[0].offsetWidth;
        const scrollValue = i * slideWidth - (slider.offsetWidth - slideWidth * visibleSlides) / 2;
        slider.scrollLeft = scrollValue;
    });
    bulletsContainer.appendChild(bullet);
}

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('scroll', () => {
    const currentSlide = Math.floor(slider.scrollLeft / slides[0].offsetWidth);
    const bullets = document.querySelectorAll('.bullet');
    bullets.forEach((bullet, index) => {
        if (index === currentSlide) {
            bullet.style.backgroundColor = '#333';
        } else {
            bullet.style.backgroundColor = '#999';
        }
    });
});

function ProjectScrollSlider(direction) {
  const slider = document.querySelector('.project-slider');
  const scrollDistance = 400; // Adjust the scroll distance as needed

  if (direction === 'left') {
      slider.scrollBy(-scrollDistance, 0);
  } else if (direction === 'right') {
      slider.scrollBy(scrollDistance, 0);
  }
}

// FOR CERTIFICATE PART

function showFullScreen(element) {
  const fullScreenOverlay = document.querySelector('.full-screen-overlay');
  const fullScreenImage = document.querySelector('.full-screen-image');
  const clickedImage = element.querySelector('img');

  fullScreenImage.src = clickedImage.src;
  fullScreenOverlay.classList.add('active');
  fullScreenImage.parentElement.classList.add('show');

  document.body.style.overflow = 'hidden';
}

function hideFullScreen() {
  const fullScreenOverlay = document.querySelector('.full-screen-overlay');
  const fullScreenBox = document.querySelector('.full-screen-box');

  fullScreenBox.classList.remove('show');
  setTimeout(() => {
    fullScreenOverlay.classList.remove('active');
  }, 300);

  document.body.style.overflow = 'auto';
}

function CertificateScrollSlider(direction) {
  const slider = document.querySelector('.certificate-slider');
  const scrollDistance = 400; // Adjust the scroll distance as needed

  if (direction === 'left') {
      slider.scrollBy(-scrollDistance, 0);
  } else if (direction === 'right') {
      slider.scrollBy(scrollDistance, 0);
  }
}





