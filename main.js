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
const yearMessages = {
    2015: '새로운 <span class="text-color">출발</span>',
    2016: '사람 쉽게 <span class="text-color">안 죽는다.</span>',
    2017: '<span class="text-color">열심히</span> 살아야겠다.',
    2018: '나는 다 잘 마무리 <span class="text-color">할 수 있다.</span>',
    2019: '나는 <span class="text-color">인복</span>이 많다.',
    2020: '사람들과 <span class="text-color">정</span>을 많이 가지자.',
    2021: '하는 일을 <span class="text-color">즐기자',
    2022: '<span class="text-color">불가능</span>은 없다.',
    2023: '장애물을 <span class="text-color">극복</span>하는 방법 찾기',
    2024: '<span class="text-color">도전</span>과 피드백을 얻자'
    // 각 연도에 대한 문구를 추가...
};

const futureMessages = {
    2029: '34살 : <span class="text-color">사업 운영</span>과 <span class="text-color">가족 형성</span>',
    2034: '39살 : <span class="text-color">가족</span>과 <span class="text-color">자유로운 삶</span>',
    2044: '49살 : <span class="text-color">승승장구</span>하는 <span class="text-color">사업</span>과 <span class="text-color">건강한 가족</span>',
    2054: '59살 : <span class="text-color">박수</span> 받는 <span class="text-color"> 은퇴 </span>'
    // Add more years and messages as needed...
};


document.addEventListener("DOMContentLoaded", function() {
    const yearsContainer = document.getElementById("yearsContainer");
    const startYear = 2015;
    const endYear = new Date().getFullYear();

    for (let year = startYear; year <= endYear; year++) {
        let yearElement = document.createElement("div");
        yearElement.classList.add("p-4", "md:w-1/2", "w-full", "hover-reveal");
        yearElement.innerHTML = `
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover-target">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">(●'◡'●)</h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">${year}년의 나</h1>
                <p class="leading-relaxed mb-3">마우스를 올려 확인해보세요 !</p>
                <img src="images/past/${year}.jpg" alt="Highlights of ${year}" class="mt-3 hover-image">
                <div class="hover-message">${yearMessages[year]}</div>
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
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover-target">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">ヽ（≧□≦）ノ</h2>
            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">${futureYear}년 후, 나의 모습</h1>
            <p class="leading-relaxed mb-3">마우스를 올려 확인해보세요 !</p>
            <img src="images/future/${milestone}-years.jpg" alt="Vision for ${futureYear}" class="mt-3 hover-image">
            <div class="hover-message">${futureMessages[futureYear]}</div>
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

