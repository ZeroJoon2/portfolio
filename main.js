/*
document.addEventListener('DOMContentLoaded', function() {
    // Fetch daily visitors
    fetch('/api/daily-visitors')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dailyVisitors').textContent = data.dailyVisitors;
        });

    // Fetch total connections
    fetch('/api/total-connections')
        .then(response => response.json())
        .then(data => {
            document.getElementById('totalConnections').textContent = data.totalConnections;
        });
});
*/

document.addEventListener("DOMContentLoaded", function() {
    const yearsContainer = document.getElementById("yearsContainer");
    const startYear = 2015;
    const endYear = new Date().getFullYear();

    for (let year = startYear; year <= endYear; year++) {
        let yearElement = document.createElement("div");
        yearElement.classList.add("p-4", "md:w-1/2", "w-full", "hover-reveal");
        yearElement.innerHTML = `
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">${year}</h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Highlights of ${year}</h1>
                <p class="leading-relaxed mb-3">Key events and achievements from ${year}.</p>
                <img src="images/past/${year}.jpg" alt="Highlights of ${year}" class="mt-3">
            </div>
        `;
        yearsContainer.appendChild(yearElement);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const futureContainer = document.getElementById("futureContainer");
    const currentYear = 2024;
    const milestones = [5, 10, 20, 30];

    milestones.forEach(milestone => {
        let futureYear = currentYear + milestone;
        let futureElement = document.createElement("div");
        futureElement.classList.add("p-4", "lg:w-1/2", "md:w-full", "hover-reveal");
        futureElement.innerHTML = `
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">${milestone} Years (${futureYear})</h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Vision for ${futureYear}</h1>
                <p class="leading-relaxed mb-3">Where I see myself in ${milestone} years.</p>
                <img src="images/future/${milestone}-years.jpg" alt="Vision for ${futureYear}" class="mt-3">
            </div>
        `;
        futureContainer.appendChild(futureElement);
    });
});

// AOS initialization
AOS.init();

let scale = 1; // Initial scale factor
const MAX_SCALE = 4; // Maximum scale factor
const SCALE_STEP = 0.3; // Increment scale by this step
let isMaxSize = false; // State to track if logo.png is at max size

const logoContainer = document.getElementById('logoContainer');
const logoImage = document.getElementById('logoImage');

logoContainer.addEventListener('click', function() {
    if (!isMaxSize) {
        scale += SCALE_STEP;
        if (scale >= MAX_SCALE) {
            scale = MAX_SCALE;
            isMaxSize = true; // Mark that logo.png has reached max size
            logoImage.src = 'images/logo/logo2.png'; // Switch to the other image
        }
    } else {
        scale = 1; // Reset scale
        isMaxSize = false; // Reset max size flag
        logoImage.src = 'images/logo/logo.png'; // Switch back to the original logo
    }
    logoContainer.style.transform = `scale(${scale})`; // Apply scale
});


document.querySelectorAll('.floating-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

