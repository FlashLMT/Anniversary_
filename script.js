// Function to convert DD/MM/YYYY string to YYYY-MM-DD string
function convertDateToISO(dateString) {
    // Expected format: DD/MM/YYYY
    if (!dateString) return null;
    const parts = dateString.split('/');
    
    // Check for correct number of parts
    if (parts.length === 3) {
        const day = parts[0].padStart(2, '0');
        const month = parts[1].padStart(2, '0');
        const year = parts[2];

        // Ensure parts are valid numbers and year is 4 digits
        if (year.length === 4 && !isNaN(day) && !isNaN(month) && !isNaN(year)) {
             // Rearrange to YYYY-MM-DD format for internal processing
             return `${year}-${month}-${day}`; 
        }
    }
    return null; // Invalid format
}

// A. ဘာသာပြန် အချက်အလက်များ (Dictionary)
const translations = {
    // English Translations
    'en': {
        'page_title': 'Our Anniversary Day',
        'nav_brand': 'Our Love Milestone 💖',
        'card_title': '🔐 Love Test 🔑',
        'card_text': 'Dearest, choose the correct answers to unlock the secret of our love story.',
        'q_date_label': '1. Select the date our love story began. (Precisely - DD/MM/YYYY)',
        'q1_label': '2. What is your favorite color? (The color worn at our first meeting)',
        'q1_opt_red': '❤️ Red', 'q1_opt_blue': '💙 Blue', 'q1_opt_black': '🖤 Black',
        'q2_label': '3. Where did we first share a secret?',
        'q2_opt_cafe': '☕️ Cafe', 'q2_opt_park': '🌳 Under Tree', 'q2_opt_lib': '🏠 Library', 
        'q3_label': '4. What was the most memorable month (Month)?',
        'q3_opt_jul': 'July', 'q3_opt_may': 'May', 'q3_opt_dec': 'December',
        'select_default': 'Select...',
        'check_btn': 'Check ✨',
        
        'date_diff_prefix': 'We have been together for:',
        'date_diff_suffix': 'of pure love! 💘',
        'unit_year': 'years', 'unit_month': 'months', 'unit_week': 'weeks', 'unit_day': 'days',
        
        'err_incomplete': '😥 Please fill out all questions.',
        'err_date_wrong': 'The date is incorrect or format is wrong. Use DD/MM/YYYY (e.g., 07/08/2023). 💔', 
        'err_q_wrong_hint': 'The date is correct, but one of the other answers is wrong. ',
        'err_q1_hint': 'Reconsider the color question. ',
        'err_q2_hint': 'Where did we first share a secret? ',
        'err_q3_hint': 'What was the most memorable month (Month)?',
        'success': '✅ All correct! You truly remember our milestones. Wait a moment... 💌'
    },
    // Myanmar Translations
    'my': {
        'page_title': 'ကျွန်ုပ်တို့၏ အမှတ်တရနေ့',
        'nav_brand': 'မောင်နဲ့မရဲ့ အချစ်မှတ်တိုင် 💖',
        'card_title': '🔐 အချစ်စမ်းသပ်မှု 🔑',
        'card_text': 'အချစ်ဆုံး မ ရေ၊ မ ရဲ့အဖြေမှန်တွေကို ရွေးချယ်ပြီး အချစ်ဇာတ်လမ်းရဲ့ လျှို့ဝှက်ချက်ကို ဖော်ထုတ်လိုက်ပါ။',
        'q_date_label': '1. မောင်တို့ အချစ်ဇာတ်လမ်း စတင်ခဲ့တဲ့ နေ့စွဲကို ရွေးချယ်ပါ။ (တိကျစွာ - DD/MM/YYYY)',
        'q1_label': '2. မောင် အကြိုက်ဆုံးအရောင်က ဘာလဲ? (ပထမဆုံး တွေ့ဆုံချိန်က ဝတ်ဆင်ခဲ့သည့် အရောင်)',
        'q1_opt_red': '❤️ အနီရောင်', 'q1_opt_blue': '💙 အပြာရောင်', 'q1_opt_black': '🖤 အနက်ရောင်',
        'q2_label': '3. မောင် မကို ပထမဆုံး လျှို့ဝှက်ချက် ဖွင့်ဟခဲ့တဲ့ နေရာက ဘာလဲ?',
        'q2_opt_cafe': '☕️ ကော်ဖီဆိုင်', 'q2_opt_park': '🌳 သစ်ပင်ကြီးအောက်', 'q2_opt_lib': '🏠 စာကြည့်တိုက်', 
        'q3_label': '4. အမှတ်တရ အကြီးဆုံး ဖြစ်ခဲ့တဲ့ လ (Month) က ဘာလဲ?',
        'q3_opt_jul': 'ဇူလိုင်လ', 'q3_opt_may': 'မေလ', 'q3_opt_dec': 'ဒီဇင်ဘာလ', 
        'select_default': 'ရွေးချယ်ပါ...',
        'check_btn': 'စစ်ဆေးမည် ✨',

        'date_diff_prefix': 'ကျွန်တော်တို့ အတူတူရှိခဲ့သည့် အချိန်က:',
        'date_diff_suffix': 'စစ်မှန်သော အချစ်ပါ! 💘',
        'unit_year': 'နှစ်', 'unit_month': 'လ', 'unit_week': 'ပတ်', 'unit_day': 'ရက်',
        
        'err_incomplete': '😥 ကျေးဇူးပြု၍ မေးခွန်းအားလုံးကို အဖြေရွေးချယ်ပေးပါ။',
        'err_date_wrong': 'ရက်စွဲ မှားယွင်းနေပါတယ် (သို့) ပုံစံ မှားယွင်းနေပါတယ်။ DD/MM/YYYY (ဥပမာ: 07/08/2023) ကို သုံးပါ။ 💔', 
        'err_q_wrong_hint': 'ရက်စွဲကတော့ မှန်တယ်၊ ဒါပေမဲ့ အခြား အဖြေတစ်ခုခု မှားနေပါတယ်။ ',
        'err_q1_hint': 'အရောင်မေးခွန်းကို ပြန်စဉ်းစားပါ။ ',
        'err_q2_hint': 'ပထမဆုံး လျှို့ဝှက်ချက် ဖွင့်ဟခဲ့တဲ့နေရာက ဘယ်မှာလဲ? ',
        'err_q3_hint': 'အမှတ်တရအကြီးဆုံး လ (Month) က ဘာလဲ?',
        'success': '✅ အားလုံး မှန်ကန်ပါတယ်။ သင်ဟာ အမှတ်တရတွေကို မမေ့သူပါ။ ခဏစောင့်ပါ... 💌'
    }
};

// Function to calculate difference in Years, Months, Weeks, Days 
function calculateDifference(startDate) {
    const start = new Date(startDate + 'T12:00:00'); 
    const now = new Date();
    
    // Calculate total days difference
    const diffTime = Math.abs(now.getTime() - start.getTime());
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const years = Math.floor(totalDays / 365.25);
    const remainderAfterYears = totalDays % 365.25;
    
    const months = Math.floor(remainderAfterYears / 30.44);
    const remainderAfterMonths = remainderAfterYears % 30.44;
    
    const weeks = Math.floor(remainderAfterMonths / 7);
    const days = Math.round(remainderAfterMonths % 7);
    
    return {
        years: years,
        months: months,
        weeks: weeks,
        days: days,
        totalDays: totalDays
    };
}


// --- Language Switching Function ---
function setLanguage(lang) {
    const translation = translations[lang];
    if (!translation) return;

    // 1. Update HTML language attribute
    document.documentElement.setAttribute('data-lang', lang);
    document.title = translation.page_title;

    // 2. Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
    
    // 3. Update button active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang-code') === lang) {
            btn.classList.add('active');
        }
    });

    // 4. Save preference
    localStorage.setItem('userLang', lang);
}


document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Language Initialization ---
    const savedLang = localStorage.getItem('userLang') || 'my'; 
    setLanguage(savedLang); 
    
    // --- 2. Language Switcher Event Listeners ---
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const langCode = btn.getAttribute('data-lang-code');
            setLanguage(langCode);
        });
    });

    // --- 3. Question Checking Logic ---
    const correctAnniversaryDate = '2023-08-07'; 
    
    const correctAnswers = {
        q1: 'black',   
        q2: 'park',  
        q3: 'jul'    
    };

    const datePicker = document.getElementById('datePicker');
    const checkButton = document.getElementById('checkButton');
    const messageElement = document.getElementById('message');
    const q1Element = document.getElementById('q1');
    const q2Element = document.getElementById('q2');
    const q3Element = document.getElementById('q3');
    
    const displayMessage = (key, isError = true, customMessage = null) => {
        const currentLang = document.documentElement.getAttribute('data-lang');
        const message = customMessage || translations[currentLang][key] || 'Error message missing.';
        
        messageElement.textContent = isError ? `❌ ${message}` : `✅ ${message}`;
        messageElement.style.color = isError ? '#8B0000' : '#387038';
    };

    checkButton.addEventListener('click', () => {
        
        const selectedDate = datePicker.value.trim(); 
        const answer1 = q1Element.value;
        const answer2 = q2Element.value;
        const answer3 = q3Element.value;
        
        const isoDate = convertDateToISO(selectedDate); 
        
        // --- 1. Check Incomplete ---
        if (!selectedDate || !answer1 || !answer2 || !answer3) {
            displayMessage('err_incomplete');
            return;
        }
        
        // --- 2. Check Date Format and Correctness ---
        if (!isoDate || isoDate !== correctAnniversaryDate) {
            displayMessage('err_date_wrong');
            return;
        }
        
        // --- 3. Check Questions ---
        const isQ1Correct = (answer1 === correctAnswers.q1); 
        const isQ2Correct = (answer2 === correctAnswers.q2);
        const isQ3Correct = (answer3 === correctAnswers.q3);
        
        if (!isQ1Correct || !isQ2Correct || !isQ3Correct) {
            
            let currentLang = document.documentElement.getAttribute('data-lang');
            let fullErrorMessage = translations[currentLang]['err_q_wrong_hint'];
            
            if (!isQ1Correct) fullErrorMessage += translations[currentLang]['err_q1_hint'];
            if (!isQ2Correct) fullErrorMessage += translations[currentLang]['err_q2_hint'];
            if (!isQ3Correct) fullErrorMessage += translations[currentLang]['err_q3_hint'];

            displayMessage('err_q_wrong_hint', true, fullErrorMessage); 
            return;
        }
        
        // --- 4. Success ---
        displayMessage('success', false); 
        
        const dateDifference = calculateDifference(isoDate); 
        sessionStorage.setItem('dateDifference', JSON.stringify(dateDifference));
        sessionStorage.setItem('displayDate', isoDate); 
        sessionStorage.setItem('displayLang', document.documentElement.getAttribute('data-lang')); 

        setTimeout(() => {
             window.location.href = 'third_page.html';
        }, 1000); 
       
    });
});
