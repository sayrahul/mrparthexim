/**
 * Mr Parth Exim - Core Application Scripts & UI Interactivity
 */

// 1. THEME MANAGEMENT (Light by default, Dark from the header toggle, saved in localStorage)
function initTheme() {
    updateThemeUI(document.documentElement.classList.contains('dark'));
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
        localStorage.setItem('mpe_theme', isDark ? 'dark' : 'light');
    } catch (e) {
        // Storage can be blocked in private browsing; the theme still applies to this page.
    }
    updateThemeUI(isDark);
}

function updateThemeUI(isDark) {
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');

    if (icon) icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    if (label) label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

// 2. SITE MENU (Hamburger on all pages)
function toggleSiteMenu(forceClose = false) {
    const menu = document.getElementById('site-menu');
    const btn = document.getElementById('menu-btn');
    const icon = document.getElementById('menu-icon');
    if (!menu) return;

    menu.hidden = forceClose || !menu.hidden;
    if (btn) btn.setAttribute('aria-expanded', String(!menu.hidden));
    if (icon) icon.className = menu.hidden ? 'fa-solid fa-bars' : 'fa-solid fa-xmark';
}

// 3. GOOGLE TRANSLATE CUSTOM INTEGRATION
function googleTranslateElementInit() {
    if (window.google && window.google.translate) {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,ar,id,tl,de,pt,ms,fr,es,ja,vi,ru,th,zh-CN,ko,tr,iw',
            autoDisplay: false
        }, 'google_translate_element');
    }
}

function changeLanguage(langCode) {
    // RTL support for Arabic (ar) and Hebrew (iw)
    if (langCode === 'ar' || langCode === 'iw') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    document.querySelectorAll('#custom-lang-select').forEach(el => {
        el.value = langCode;
    });

    const selectField = document.querySelector('#google_translate_element select.goog-te-combo');
    if (selectField) {
        selectField.value = langCode;
        selectField.dispatchEvent(new Event('change'));
        showToast(`Language switched to ${langCode.toUpperCase()}`);

        // The widget ignores a choice made before it has finished loading; apply it through a reload instead
        setTimeout(() => {
            const root = document.documentElement.classList;
            if (langCode !== 'en' && !root.contains('translated-ltr') && !root.contains('translated-rtl')) {
                document.cookie = `googtrans=/en/${langCode}; path=/;`;
                window.location.reload();
            }
        }, 3000);
    } else {
        document.cookie = `googtrans=/en/${langCode}; path=/;`;
        showToast(`Language preference set (${langCode.toUpperCase()})`);
        setTimeout(() => {
            window.location.reload();
        }, 350);
    }
}

function initLanguageDir() {
    const match = document.cookie.match(/googtrans=\/[^/]+\/([a-zA-Z-]+)/);
    const lang = match ? match[1] : 'en';
    if (lang === 'ar' || lang === 'iw') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
    document.querySelectorAll('#custom-lang-select').forEach(el => {
        el.value = lang;
        // A language no longer on the list, saved by an earlier visit, shows as English
        if (el.selectedIndex === -1) el.value = 'en';
    });
}

// 4. TOAST NOTIFICATION
function showToast(message) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;

    toast.textContent = message;
    toast.hidden = false;
    setTimeout(() => {
        toast.hidden = true;
    }, 3800);
}

// 5. COMPANY DETAILS FROM js/site-config.js (GST number & social profile links)
function initCompanyDetails() {
    if (typeof COMPANY_INFO === 'undefined') return;

    if (COMPANY_INFO.gstin) {
        document.querySelectorAll('[data-gstin]').forEach(el => {
            el.textContent = COMPANY_INFO.gstin;
            el.parentElement.hidden = false;
        });
    }

    // Icons stay plain until a profile URL is configured, then become real links
    document.querySelectorAll('[data-social]').forEach(el => {
        const url = COMPANY_INFO.social[el.dataset.social];
        if (!url) return;
        const link = document.createElement('a');
        link.className = 'social';
        link.dataset.social = el.dataset.social;
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', el.getAttribute('aria-label'));
        link.title = el.title;
        link.innerHTML = el.innerHTML;
        el.replaceWith(link);
    });
}

// 6. QUOTE MODAL
let quoteModalOpener = null;

function openQuoteModal(product = '', specification = '') {
    const modal = document.getElementById('quote-modal');
    if (!modal) return;

    const form = modal.querySelector('form');
    if (product) form.elements.product.value = product;
    form.elements.specification.value = specification;

    quoteModalOpener = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    form.elements.name.focus();
}

function closeQuoteModal() {
    const modal = document.getElementById('quote-modal');
    if (!modal || modal.hidden) return;

    modal.hidden = true;
    document.body.style.overflow = '';
    if (quoteModalOpener) quoteModalOpener.focus();
}

// 7. QUOTE FORM SUBMISSION (Same form on every page; goes to WhatsApp and Email, in capital letters)
const QUOTE_FIELDS = [
    ['name', 'NAME'],
    ['company', 'COMPANY NAME'],
    ['email', 'EMAIL'],
    ['phone', 'PHONE/WHATSAPP'],
    ['product', 'PRODUCT'],
    ['specification', 'PRODUCT SPECIFICATION'],
    ['quantity', 'QUANTITY'],
    ['country', 'COUNTRY'],
    ['message', 'YOUR MESSAGE']
];

function buildQuoteLines(data, wrapLabel) {
    return QUOTE_FIELDS
        .filter(([key]) => data[key] && data[key].trim())
        .map(([key, label]) => {
            const value = data[key].trim();
            // Email addresses keep their original case so replies reach the buyer unchanged.
            return `${wrapLabel(label)} ${key === 'email' ? value : value.toUpperCase()}`;
        });
}

async function handleQuoteSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form).entries());
    // The country code is its own dropdown; it goes in front of the number unless the buyer typed a + code already.
    if ('phone_code' in data) {
        const number = (data.phone || '').trim();
        if (number && data.phone_code && !number.startsWith('+')) data.phone = `${data.phone_code} ${number}`;
        delete data.phone_code;
    }
    const heading = 'QUOTE ENQUIRY - MR PARTH EXIM';

    const whatsappText = [`*${heading}*`, ...buildQuoteLines(data, label => `*${label}:*`)].join('\n');
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(whatsappText)}`;

    const emailBody = [heading, '', ...buildQuoteLines(data, label => `${label}:`)].join('\n');
    const emailSubject = `QUOTE ENQUIRY: ${data.product} - ${data.company}`.toUpperCase();
    const emailUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.open(whatsappUrl, '_blank');

    let emailSent = false;
    if (COMPANY_INFO.enquiryEndpoint) {
        emailSent = await sendEnquiryToEndpoint(data, emailSubject);
    }
    if (!emailSent) {
        window.location.href = emailUrl;
    }

    showQuoteStatus(form, whatsappUrl, emailUrl, emailSent);
}

async function sendEnquiryToEndpoint(data, subject) {
    try {
        const response = await fetch(COMPANY_INFO.enquiryEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ ...data, _subject: subject })
        });
        return response.ok;
    } catch (e) {
        return false;
    }
}

function showQuoteStatus(form, whatsappUrl, emailUrl, emailSent) {
    const status = form.querySelector('.form-status');
    if (!status) return;

    const message = status.querySelector('.form-status__text');
    const links = status.querySelector('.form-status__links');
    const whatsappLink = links.querySelector('[data-link="whatsapp"]');
    const emailLink = links.querySelector('[data-link="email"]');

    message.textContent = emailSent
        ? 'Your enquiry has been emailed to us. Please press send in WhatsApp as well.'
        : 'Your enquiry is ready. Please press send in WhatsApp and in your email app. If either did not open, use the buttons below.';
    whatsappLink.href = whatsappUrl;
    emailLink.href = emailUrl;
    emailLink.hidden = emailSent;
    status.hidden = false;
    status.scrollIntoView({ block: 'nearest' });
}

// 7b. COUNTRY CODE PICKER (Phone / WhatsApp field on every quote form)
// The page ships with India (+91) only; the full list is added here. Sorted by country name, India stays selected.
const DIAL_CODES = [
    ['Afghanistan', '+93'], ['Albania', '+355'], ['Algeria', '+213'], ['American Samoa', '+1 684'], ['Andorra', '+376'],
    ['Angola', '+244'], ['Anguilla', '+1 264'], ['Antigua and Barbuda', '+1 268'], ['Argentina', '+54'], ['Armenia', '+374'],
    ['Aruba', '+297'], ['Australia', '+61'], ['Austria', '+43'], ['Azerbaijan', '+994'], ['Bahamas', '+1 242'],
    ['Bahrain', '+973'], ['Bangladesh', '+880'], ['Barbados', '+1 246'], ['Belarus', '+375'], ['Belgium', '+32'],
    ['Belize', '+501'], ['Benin', '+229'], ['Bermuda', '+1 441'], ['Bhutan', '+975'], ['Bolivia', '+591'],
    ['Bosnia and Herzegovina', '+387'], ['Botswana', '+267'], ['Brazil', '+55'], ['British Virgin Islands', '+1 284'], ['Brunei', '+673'],
    ['Bulgaria', '+359'], ['Burkina Faso', '+226'], ['Burundi', '+257'], ['Cambodia', '+855'], ['Cameroon', '+237'],
    ['Canada', '+1'], ['Cape Verde', '+238'], ['Cayman Islands', '+1 345'], ['Central African Republic', '+236'], ['Chad', '+235'],
    ['Chile', '+56'], ['China', '+86'], ['Colombia', '+57'], ['Comoros', '+269'], ['Congo', '+242'],
    ['Congo (DR)', '+243'], ['Cook Islands', '+682'], ['Costa Rica', '+506'], ["Côte d'Ivoire", '+225'], ['Croatia', '+385'],
    ['Cuba', '+53'], ['Curaçao', '+599'], ['Cyprus', '+357'], ['Czech Republic', '+420'], ['Denmark', '+45'],
    ['Djibouti', '+253'], ['Dominica', '+1 767'], ['Dominican Republic', '+1 809'], ['Ecuador', '+593'], ['Egypt', '+20'],
    ['El Salvador', '+503'], ['Equatorial Guinea', '+240'], ['Eritrea', '+291'], ['Estonia', '+372'], ['Eswatini', '+268'],
    ['Ethiopia', '+251'], ['Falkland Islands', '+500'], ['Faroe Islands', '+298'], ['Fiji', '+679'], ['Finland', '+358'],
    ['France', '+33'], ['French Guiana', '+594'], ['French Polynesia', '+689'], ['Gabon', '+241'], ['Gambia', '+220'],
    ['Georgia', '+995'], ['Germany', '+49'], ['Ghana', '+233'], ['Gibraltar', '+350'], ['Greece', '+30'],
    ['Greenland', '+299'], ['Grenada', '+1 473'], ['Guadeloupe', '+590'], ['Guam', '+1 671'], ['Guatemala', '+502'],
    ['Guinea', '+224'], ['Guinea-Bissau', '+245'], ['Guyana', '+592'], ['Haiti', '+509'], ['Honduras', '+504'],
    ['Hong Kong', '+852'], ['Hungary', '+36'], ['Iceland', '+354'], ['India', '+91'], ['Indonesia', '+62'],
    ['Iran', '+98'], ['Iraq', '+964'], ['Ireland', '+353'], ['Israel', '+972'], ['Italy', '+39'],
    ['Jamaica', '+1 876'], ['Japan', '+81'], ['Jordan', '+962'], ['Kazakhstan', '+7'], ['Kenya', '+254'],
    ['Kiribati', '+686'], ['Kosovo', '+383'], ['Kuwait', '+965'], ['Kyrgyzstan', '+996'], ['Laos', '+856'],
    ['Latvia', '+371'], ['Lebanon', '+961'], ['Lesotho', '+266'], ['Liberia', '+231'], ['Libya', '+218'],
    ['Liechtenstein', '+423'], ['Lithuania', '+370'], ['Luxembourg', '+352'], ['Macau', '+853'], ['Madagascar', '+261'],
    ['Malawi', '+265'], ['Malaysia', '+60'], ['Maldives', '+960'], ['Mali', '+223'], ['Malta', '+356'],
    ['Marshall Islands', '+692'], ['Martinique', '+596'], ['Mauritania', '+222'], ['Mauritius', '+230'], ['Mayotte', '+262'],
    ['Mexico', '+52'], ['Micronesia', '+691'], ['Moldova', '+373'], ['Monaco', '+377'], ['Mongolia', '+976'],
    ['Montenegro', '+382'], ['Montserrat', '+1 664'], ['Morocco', '+212'], ['Mozambique', '+258'], ['Myanmar', '+95'],
    ['Namibia', '+264'], ['Nauru', '+674'], ['Nepal', '+977'], ['Netherlands', '+31'], ['New Caledonia', '+687'],
    ['New Zealand', '+64'], ['Nicaragua', '+505'], ['Niger', '+227'], ['Nigeria', '+234'], ['North Korea', '+850'],
    ['North Macedonia', '+389'], ['Northern Mariana Islands', '+1 670'], ['Norway', '+47'], ['Oman', '+968'], ['Pakistan', '+92'],
    ['Palau', '+680'], ['Palestine', '+970'], ['Panama', '+507'], ['Papua New Guinea', '+675'], ['Paraguay', '+595'],
    ['Peru', '+51'], ['Philippines', '+63'], ['Poland', '+48'], ['Portugal', '+351'], ['Puerto Rico', '+1 787'],
    ['Qatar', '+974'], ['Réunion', '+262'], ['Romania', '+40'], ['Russia', '+7'], ['Rwanda', '+250'],
    ['Saint Kitts and Nevis', '+1 869'], ['Saint Lucia', '+1 758'], ['Saint Vincent and the Grenadines', '+1 784'], ['Samoa', '+685'], ['San Marino', '+378'],
    ['São Tomé and Príncipe', '+239'], ['Saudi Arabia', '+966'], ['Senegal', '+221'], ['Serbia', '+381'], ['Seychelles', '+248'],
    ['Sierra Leone', '+232'], ['Singapore', '+65'], ['Sint Maarten', '+1 721'], ['Slovakia', '+421'], ['Slovenia', '+386'],
    ['Solomon Islands', '+677'], ['Somalia', '+252'], ['South Africa', '+27'], ['South Korea', '+82'], ['South Sudan', '+211'],
    ['Spain', '+34'], ['Sri Lanka', '+94'], ['Sudan', '+249'], ['Suriname', '+597'], ['Sweden', '+46'],
    ['Switzerland', '+41'], ['Syria', '+963'], ['Taiwan', '+886'], ['Tajikistan', '+992'], ['Tanzania', '+255'],
    ['Thailand', '+66'], ['Timor-Leste', '+670'], ['Togo', '+228'], ['Tonga', '+676'], ['Trinidad and Tobago', '+1 868'],
    ['Tunisia', '+216'], ['Turkey', '+90'], ['Turkmenistan', '+993'], ['Turks and Caicos Islands', '+1 649'], ['Tuvalu', '+688'],
    ['Uganda', '+256'], ['Ukraine', '+380'], ['United Arab Emirates', '+971'], ['United Kingdom', '+44'], ['United States', '+1'],
    ['Uruguay', '+598'], ['US Virgin Islands', '+1 340'], ['Uzbekistan', '+998'], ['Vanuatu', '+678'], ['Vatican City', '+39'],
    ['Venezuela', '+58'], ['Vietnam', '+84'], ['Yemen', '+967'], ['Zambia', '+260'], ['Zimbabwe', '+263']
];
const DEFAULT_DIAL_COUNTRY = 'India';

function initDialCodes() {
    document.querySelectorAll('select[data-dial-codes]').forEach(select => {
        const fragment = document.createDocumentFragment();
        DIAL_CODES.forEach(([country, code]) => {
            const option = new Option(`${country} (${code})`, code, false, country === DEFAULT_DIAL_COUNTRY);
            option.dataset.country = country;
            fragment.appendChild(option);
        });
        select.replaceChildren(fragment);

        const shown = select.parentElement.querySelector('.phone-input__shown');
        const countryInput = select.form && select.form.elements.country;
        select.addEventListener('change', () => {
            const option = select.selectedOptions[0];
            if (shown) shown.textContent = select.value;
            // Fill an empty Country field from the chosen code; never overwrite what the buyer typed.
            if (countryInput && option && (!countryInput.value.trim() || countryInput.value === countryInput.dataset.autoCountry)) {
                countryInput.value = option.dataset.country;
                countryInput.dataset.autoCountry = option.dataset.country;
            }
        });
    });
}

// 8. SCROLL PROGRESS BAR & BACK TO TOP BUTTON
function initScrollUI() {
    const bar = document.getElementById('scroll-progress');
    const topBtn = document.getElementById('back-to-top');
    let ticking = false;

    const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const y = window.scrollY;
        if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
        if (topBtn) topBtn.hidden = y < 400;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(update);
        }
    }, { passive: true });
    update();
}

// 9. CURRENCY CONVERTER (top bar)
// Daily reference rates from ExchangeRate-API's free endpoint (no key; its terms ask for the credit link shown in the panel).
const FX_URL = 'https://open.er-api.com/v6/latest/USD';
const FX_CACHE_KEY = 'mpe_fx_rates';
const FX_PAIR_KEY = 'mpe_fx_pair';
const FX_CACHE_MS = 6 * 60 * 60 * 1000;
const FX_CURRENCIES = [
    ['USD', 'US Dollar'], ['EUR', 'Euro'], ['GBP', 'British Pound'], ['INR', 'Indian Rupee'],
    ['AED', 'UAE Dirham'], ['SAR', 'Saudi Riyal'], ['QAR', 'Qatari Riyal'], ['KWD', 'Kuwaiti Dinar'],
    ['OMR', 'Omani Rial'], ['BHD', 'Bahraini Dinar'], ['JPY', 'Japanese Yen'], ['CNY', 'Chinese Yuan'],
    ['KRW', 'South Korean Won'], ['SGD', 'Singapore Dollar'], ['MYR', 'Malaysian Ringgit'], ['IDR', 'Indonesian Rupiah'],
    ['THB', 'Thai Baht'], ['VND', 'Vietnamese Dong'], ['PHP', 'Philippine Peso'], ['AUD', 'Australian Dollar'],
    ['NZD', 'New Zealand Dollar'], ['CAD', 'Canadian Dollar'], ['CHF', 'Swiss Franc'], ['RUB', 'Russian Ruble'],
    ['TRY', 'Turkish Lira'], ['ILS', 'Israeli Shekel'], ['BRL', 'Brazilian Real'], ['MXN', 'Mexican Peso'],
    ['ZAR', 'South African Rand'], ['EGP', 'Egyptian Pound'], ['BDT', 'Bangladeshi Taka'], ['LKR', 'Sri Lankan Rupee'],
    ['NPR', 'Nepalese Rupee']
];
let fxRates = null;
let fxRequest = null;
let fxFailed = false;

function initCurrencyConverter() {
    const from = document.getElementById('fx-from');
    const to = document.getElementById('fx-to');
    const amount = document.getElementById('fx-amount');
    if (!from || !to || !amount) return;

    const options = FX_CURRENCIES.map(([code, name]) => `<option value="${code}">${code} – ${name}</option>`).join('');
    from.innerHTML = options;
    to.innerHTML = options;

    let pair = ['USD', 'INR'];
    try {
        const saved = JSON.parse(localStorage.getItem(FX_PAIR_KEY));
        if (Array.isArray(saved) && saved.length === 2) pair = saved;
    } catch (e) {
        // Storage can be blocked; the default pair is used.
    }
    from.value = pair[0];
    to.value = pair[1];
    if (from.selectedIndex === -1) from.value = 'USD';
    if (to.selectedIndex === -1) to.value = 'INR';

    amount.addEventListener('input', updateCurrencyResult);
    from.addEventListener('change', updateCurrencyResult);
    to.addEventListener('change', updateCurrencyResult);
}

function toggleCurrencyConverter(forceClose = false) {
    const panel = document.getElementById('fx-panel');
    const btn = document.getElementById('fx-btn');
    if (!panel) return;

    const wasOpen = !panel.hidden;
    panel.hidden = forceClose || wasOpen;
    if (btn) btn.setAttribute('aria-expanded', String(!panel.hidden));

    if (!panel.hidden) {
        updateCurrencyResult();
        loadCurrencyRates().then(updateCurrencyResult);
        document.getElementById('fx-amount').focus();
    } else if (wasOpen && btn && panel.contains(document.activeElement)) {
        btn.focus();
    }
}

function swapCurrencies() {
    const from = document.getElementById('fx-from');
    const to = document.getElementById('fx-to');
    [from.value, to.value] = [to.value, from.value];
    updateCurrencyResult();
}

function readCachedRates() {
    try {
        const cached = JSON.parse(localStorage.getItem(FX_CACHE_KEY));
        if (cached && cached.rates && cached.updated) return cached;
    } catch (e) {
        // Ignore unreadable or blocked storage.
    }
    return null;
}

function loadCurrencyRates() {
    if (fxRates && Date.now() - fxRates.fetched < FX_CACHE_MS) return Promise.resolve(fxRates);

    const cached = readCachedRates();
    if (cached && Date.now() - cached.fetched < FX_CACHE_MS) {
        fxRates = cached;
        return Promise.resolve(fxRates);
    }

    if (!fxRequest) {
        fxFailed = false;
        fxRequest = fetch(FX_URL)
            .then(response => (response.ok ? response.json() : Promise.reject(new Error(response.status))))
            .then(data => {
                if (data.result !== 'success') throw new Error('rates unavailable');
                const rates = {};
                FX_CURRENCIES.forEach(([code]) => {
                    if (data.rates[code]) rates[code] = data.rates[code];
                });
                fxRates = { rates, updated: data.time_last_update_unix * 1000, fetched: Date.now() };
                try {
                    localStorage.setItem(FX_CACHE_KEY, JSON.stringify(fxRates));
                } catch (e) {
                    // Rates still work for this page view.
                }
                return fxRates;
            })
            .catch(() => {
                // Offline or the service is down: fall back to older saved rates, if any.
                fxRates = cached || null;
                fxFailed = !fxRates;
                return fxRates;
            })
            .finally(() => {
                fxRequest = null;
            });
    }
    return fxRequest;
}

function formatCurrencyAmount(value) {
    const options = value !== 0 && Math.abs(value) < 1
        ? { maximumSignificantDigits: 4 }
        : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    return new Intl.NumberFormat('en', options).format(value);
}

function updateCurrencyResult() {
    const amountEl = document.getElementById('fx-amount');
    const from = document.getElementById('fx-from').value;
    const to = document.getElementById('fx-to').value;
    const fromLine = document.getElementById('fx-from-line');
    const result = document.getElementById('fx-result');
    const rateLine = document.getElementById('fx-rate');
    const updated = document.getElementById('fx-updated');

    try {
        localStorage.setItem(FX_PAIR_KEY, JSON.stringify([from, to]));
    } catch (e) {
        // Not saved; the converter still works.
    }

    if (!fxRates || !fxRates.rates[from] || !fxRates.rates[to]) {
        fromLine.textContent = '';
        rateLine.textContent = '';
        updated.textContent = '';
        result.textContent = fxFailed || (fxRates && !fxRequest) ? 'Rates are unavailable right now. Please try again later.' : 'Loading rates…';
        return;
    }

    const amount = parseFloat(amountEl.value);
    const rate = fxRates.rates[to] / fxRates.rates[from];
    if (!(amount >= 0)) {
        fromLine.textContent = '';
        result.textContent = 'Enter an amount';
    } else {
        fromLine.textContent = `${formatCurrencyAmount(amount)} ${from} =`;
        result.textContent = `${formatCurrencyAmount(amount * rate)} ${to}`;
    }
    rateLine.textContent = `1 ${from} = ${formatCurrencyAmount(rate)} ${to}`;
    updated.textContent = `Updated ${new Date(fxRates.updated).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}.`;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguageDir();
    initCompanyDetails();
    initScrollUI();
    initCurrencyConverter();
    initDialCodes();

    // Close the menu and modal on outside click or Escape
    document.addEventListener('click', event => {
        const menu = document.getElementById('site-menu');
        const btn = document.getElementById('menu-btn');
        if (menu && !menu.hidden && !menu.contains(event.target) && !btn.contains(event.target)) {
            toggleSiteMenu(true);
        }
        if (event.target.id === 'quote-modal') closeQuoteModal();
        const fxPanel = document.getElementById('fx-panel');
        const fxBtn = document.getElementById('fx-btn');
        if (fxPanel && !fxPanel.hidden && !fxPanel.contains(event.target) && !fxBtn.contains(event.target)) {
            toggleCurrencyConverter(true);
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            toggleSiteMenu(true);
            closeQuoteModal();
            toggleCurrencyConverter(true);
        }
    });
});
