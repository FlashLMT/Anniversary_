// A. ဘာသာပြန် အချက်အလက်များ (Dictionary)
const translations = {
    'en': {
        'page_title': 'Happy Anniversary! ❤️',
        'nav_brand': 'Our Love Milestone 💖',
        'card_title': 'Happy Anniversary! 🥂',
        'card_text': 'Our 4 Love Milestones (Where Our Hearts Began to Race):', 
        'date_prefix': 'The time our love journey began: <br>',
        'date_suffix': '. 💍',
        
        // Time Difference Text Keys
        'diff_intro': 'We have been together for:',
        'unit_year': 'years',
        'unit_month': 'months',
        'unit_week': 'weeks', 
        'unit_day': 'days',
        'unit_hour': 'hours',
        'unit_minute': 'minutes',
        'unit_second': 'seconds', 
        
        // --- Updated Milestones (Exciting/Emotional) ---
        'm1_title': '🗓️ The Beginning (Destiny’s Intersection)', 
        'm1_text': 'The magical day the world stood still and I first saw you. The beautiful start of our love story.',
        'm2_title': '☕️ First Date (The Scent of Love)', 
        'm2_text': 'The day our hearts raced! We got to know each other deeply and realized, this is what love feels like.',
        'm3_title': '💍 The Promise (Heart\'s Union)', 
        'm3_text': 'The moment you accepted me—the most crucial step to walk life\'s journey together. There is nothing happier than this.',
        'm4_title': '✈️ Favorite Trip (Overflowing Love)', 
        'm4_text': 'Our unforgettable trip away! A time filled with laughter and joy, creating countless memories together.',
        'back_btn': 'Go to Love Page 🏠'
    },
    // Myanmar Translations
    'my': {
        'page_title': 'ပျော်ရွှင်ဖွယ် နှစ်ပတ်လည်နေ့! ❤️',
        'nav_brand': 'မောင်နဲ့မရဲ့ အချစ်မှတ်တိုင် 💖',
        'card_title': 'ပျော်ရွှင်ဖွယ် နှစ်ပတ်လည်နေ့! 🥂',
        'card_text': 'ကျွန်တော်တို့ရဲ့ အချစ်မှတ်တိုင် ၄ ခု (ရင်ခုန်သံများ စတင်သော နေ့ရက်):', 
        'date_prefix': 'ကျွန်တော်တို့ အချစ်ခရီး စတင်ခဲ့တဲ့ အချိန်: <br>',
        'date_suffix': ' ပါ။ 💍',
        
        // Time Difference Text Keys
        'diff_intro': 'ကျွန်တော်တို့ အတူတူရှိခဲ့သည့် အချိန်က:',
        'unit_year': 'နှစ်',
        'unit_month': 'လ',
        'unit_week': 'ပတ်', 
        'unit_day': 'ရက်',
        'unit_hour': 'နာရီ',
        'unit_minute': 'မိနစ်',
        'unit_second': 'စက္ကန့်', 
        
        // --- Updated Milestones (Exciting/Emotional) ---
        'm1_title': '🗓️ တွေ့ဆုံခြင်း အစ (ကံကြမ္မာ၏ ဆုံမှတ်)', 
        'm1_text': 'ကမ္ဘာကြီး တိတ်ဆိတ်သွားပြီး မ ကို ပထမဆုံး မြင်တွေ့ခဲ့ရတဲ့ မှော်ဆန်တဲ့ နေ့ရက်ပါ။ အချစ်ဇာတ်လမ်းရဲ့ အစပဲလေ။',
        'm2_title': '☕️ ပထမဆုံး ချိန်းတွေ့မှု (အချစ်ရဲ့ ရနံ့)', 
        'm2_text': 'ရင်ခုန်သံတွေ ဗလောင်ဆူခဲ့တဲ့ နေ့လေး... တစ်ယောက်အကြောင်း တစ်ယောက် နက်နက်ရှိုင်းရှိုင်း သိခွင့်ရခဲ့ပြီး အချစ်ဆိုတာ ဒီလိုပါလားလို့ နားလည်ခဲ့ရတဲ့ နေ့ရက်။',
        'm3_title': '💍 ထာဝရ ကတိကဝတ် (နှလုံးသား ပေါင်းစည်းခြင်း)', 
        'm3_text': 'မ လက်ခံခဲ့တဲ့နေ့က ဘဝခရီးမှာ အတူတူ လမ်းလျှောက်ဖို့ အရေးကြီးဆုံး ဆုံးဖြတ်ချက်ကို ချခဲ့တဲ့ အခိုက်အတန့်ပါ။ ဒီ့ထက် ပိုပျော်စရာ မရှိတော့ပါဘူး။',
        'm4_title': '✈️ အပျော်ဆုံး ခရီးစဉ် (အချစ်တွေ ပြည့်လျှံခြင်း)', 
        'm4_text': 'အတူတူ ရယ်မောပျော်ရွှင်ခဲ့ရတဲ့ အဝေးရောက် ခရီးစဉ်လေး... ကျွန်တော်တို့ရဲ့ အမှတ်တရပုံရိပ်ပေါင်းများစွာကို ဖန်တီးခဲ့တဲ့ အချိန်ကာလလေးပါ။',
        'back_btn': 'ချစ်ခြင်းစာအိတ်သို့ သွားမည် 🏠'
    }
};

// --- Language Switching Function (no change) ---
function setLanguage(lang) {
    const translation = translations[lang];
    if (!translation) return;
    document.documentElement.setAttribute('data-lang', lang);
    document.title = translation.page_title;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
    const navBrand = document.getElementById('navBrandDate');
    if (navBrand && translation['nav_brand']) {
        navBrand.textContent = translation['nav_brand'];
    }
}


// --- Dynamic Time Difference Logic ---
function calculateTimeDifference(startDateString, lang) {
    const start = new Date(startDateString + 'T00:00:00+06:30'); 
    const now = new Date();
    const translation = translations[lang];
    const timeDifferenceElement = document.getElementById('timeDifferenceDisplay');
    
    let diffMs = now.getTime() - start.getTime();
    
    if (diffMs < 0) {
        timeDifferenceElement.innerHTML = `<span class="diff-intro">${translation.diff_intro}</span> Starting soon! ❤️`;
        return; 
    }
    
    const msInSecond = 1000;
    let totalSeconds = Math.floor(diffMs / msInSecond);
    
    const seconds = totalSeconds % 60;
    totalSeconds = Math.floor(totalSeconds / 60);
    
    const minutes = totalSeconds % 60;
    totalSeconds = Math.floor(totalSeconds / 60);
    
    const hours = totalSeconds % 24;
    let days = Math.floor(totalSeconds / 24); 
    
    const years = Math.floor(days / 365.25);
    days = Math.floor(days % 365.25); 

    const months = Math.floor(days / 30.44); 
    days = Math.floor(days % 30.44); 

    const weeks = Math.floor(days / 7);
    days = days % 7; 
    
    
    let parts = [];
    
    if (years > 0) parts.push(`<strong>${years}</strong> ${translation.unit_year}`);
    if (months > 0) parts.push(`<strong>${months}</strong> ${translation.unit_month}`);
    if (weeks > 0) parts.push(`<strong>${weeks}</strong> ${translation.unit_week}`);
    if (days > 0) parts.push(`<strong>${days}</strong> ${translation.unit_day}`);
    
    parts.push(`<strong>${hours}</strong> ${translation.unit_hour}`);
    parts.push(`<strong>${minutes}</strong> ${translation.unit_minute}`);
    parts.push(`<strong>${seconds}</strong> ${translation.unit_second}`);
    

    if (parts.length === 0) {
        timeDifferenceElement.innerHTML = `<span class="diff-intro">${translation.diff_intro}</span> less than a minute! ❤️`;
    } else {
        const dateParts = parts.slice(0, parts.length - 3).join(', ');
        const timeParts = parts.slice(parts.length - 3).join(', ');
        
        // Using span classes for better styling
        timeDifferenceElement.innerHTML = `
            <span class="diff-intro">${translation.diff_intro}</span> <br> 
            <span class="date-diff-major">${dateParts}</span> <br>
            <span class="date-diff-minor">${timeParts}.</span>
        `;
    }
}


// --- Date Format Logic (DD/MM/YYYY) ---
function formatAnniversaryDate(dateToDisplay, lang) {
    const displayElement = document.getElementById('anniversaryDateDisplay');
    const translation = translations[lang];

    try {
        const dateTimeString = `${dateToDisplay}T12:00:00`; 
        const dateObj = new Date(dateTimeString);
        
        let locale;
        let options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            timeZone: 'Asia/Yangon' 
        };
        
        if (lang === 'my') {
             locale = 'my-MM'; 
        } else {
             locale = 'en-GB'; 
        }
        
        const formattedDateTime = dateObj.toLocaleDateString(locale, options);
        
        displayElement.innerHTML = translation.date_prefix + formattedDateTime + translation.date_suffix;
        
    } catch (e) {
        displayElement.textContent = `${translation.date_prefix} ${dateToDisplay} ${translation.date_suffix}`;
    }
}

// --- Dynamic Background Image List (used for both full page and cards) ---
const backgroundImages = [
    'img/a.jpg', 
    'img/b.jpg', 
    'img/c.jpg', 
    'img/d.jpg'  
];

// --- Full Page Background Animation Logic ---
let currentBgIndex = 0;
let activeLayer = 1;

function cycleBackground() {
    const layer1 = document.getElementById('bg-layer-1');
    const layer2 = document.getElementById('bg-layer-2');
    
    let nextIndex;
    do {
        nextIndex = Math.floor(Math.random() * backgroundImages.length);
    } while (nextIndex === currentBgIndex); 
    
    currentBgIndex = nextIndex;
    const nextImage = backgroundImages[currentBgIndex];

    let currentLayer = (activeLayer === 1) ? layer1 : layer2;
    currentLayer.style.opacity = 0;

    activeLayer = (activeLayer === 1) ? 2 : 1;
    let nextLayer = (activeLayer === 1) ? layer1 : layer2;
    
    nextLayer.style.backgroundImage = `url('${nextImage}')`;
    nextLayer.style.opacity = 1;
}


// --- Page Initialization Logic ---

document.addEventListener('DOMContentLoaded', () => {
    
    const currentLang = sessionStorage.getItem('displayLang') || 'my'; 
    setLanguage(currentLang);
    const dateToDisplay = sessionStorage.getItem('displayDate'); 
    
    if (dateToDisplay) {
        
        formatAnniversaryDate(dateToDisplay, currentLang);
        
        calculateTimeDifference(dateToDisplay, currentLang);
        setInterval(() => {
            calculateTimeDifference(dateToDisplay, currentLang);
        }, 1000); 

        // 🌟 Milestone Card Backgrounds LOGIC (UPDATED: Random + Fade In) 🌟
        const usedIndexes = [];

        document.querySelectorAll('.milestone-card').forEach((card, index) => {
            const bgElement = card.querySelector('.milestone-bg');
            if (bgElement) {
                
                // 1. Random Image ကို ရွေးချယ်ခြင်း (ပုံများ ထပ်မနေစေရန် ကြိုးစားသည်)
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * backgroundImages.length);
                } while (usedIndexes.includes(randomIndex) && usedIndexes.length < backgroundImages.length);
                
                // 2. ရွေးချယ်ပြီးသော Index ကို မှတ်သားခြင်း
                if (usedIndexes.length < backgroundImages.length) {
                    usedIndexes.push(randomIndex);
                }
                
                // 3. ပုံကို Background အဖြစ် သတ်မှတ်ပေးခြင်း
                const randomImagePath = backgroundImages[randomIndex];
                bgElement.style.backgroundImage = `url('${randomImagePath}')`;
                
                // 4. Card Background အတွက် Fade In Animation စတင်ခြင်း
                // Card တစ်ခုပြီးတစ်ခု ဖြည်းဖြည်းပေါ်လာစေရန် index ကို အသုံးပြုသည်။
                setTimeout(() => {
                   bgElement.style.opacity = 1; 
                }, 100 + (index * 300)); 
            }
         });
         
        // ** Full Page Background Animation စတင်ခြင်း **
        cycleBackground(); 
        setInterval(cycleBackground, 5000); 

    } else {
        document.getElementById('anniversaryDateDisplay').textContent = "Error: Anniversary date not found. Please go back to the quiz page.";
    }
});
