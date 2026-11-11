/**
 * Mr Parth Exim - Home Page Interactivity
 * All text stays in the HTML and is only shown or hidden here, so Google Translate covers every slide and step.
 */

// 1. HERO SLIDER
function initHeroSlider() {
    const hero = document.getElementById('hero-slider');
    if (!hero) return;

    const slides = [...hero.querySelectorAll('.h-slide')];
    const dots = [...hero.querySelectorAll('.h-dot')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let current = 0;
    let timer = null;

    // Slides 2-4 fetch their photos after the page has loaded, so the first slide appears sooner
    const loadPhoto = slide => {
        slide.querySelectorAll('source[data-srcset]').forEach(source => {
            source.srcset = source.dataset.srcset;
            source.removeAttribute('data-srcset');
        });
        slide.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    };

    const show = index => {
        current = (index + slides.length) % slides.length;
        loadPhoto(slides[current]);
        slides.forEach((slide, i) => {
            const isActive = i === current;
            slide.classList.toggle('is-active', isActive);
            slide.setAttribute('aria-hidden', String(!isActive));
            slide.inert = !isActive;
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === current);
            if (i === current) dot.setAttribute('aria-current', 'true');
            else dot.removeAttribute('aria-current');
        });
    };

    const stop = () => {
        clearInterval(timer);
        timer = null;
    };

    const start = () => {
        if (reduceMotion || timer) return;
        timer = setInterval(() => show(current + 1), 6500);
    };

    hero.querySelectorAll('[data-slide-go]').forEach(btn => {
        btn.addEventListener('click', () => show(current + Number(btn.dataset.slideGo)));
    });
    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));

    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
    hero.addEventListener('focusin', stop);
    hero.addEventListener('focusout', start);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stop();
        else start();
    });
    window.addEventListener('load', () => {
        setTimeout(() => slides.forEach(loadPhoto), 1500);
    });

    start();
}

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
});
