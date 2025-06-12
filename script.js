// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Animate service cards on scroll
  const cards = document.querySelectorAll('.service-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  cards.forEach(card => observer.observe(card));
  
  // Night/Day theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  function setTheme(day) {
    if (day) {
      body.classList.add('day-mode');
      themeToggle.textContent = '🌞';
    } else {
      body.classList.remove('day-mode');
      themeToggle.textContent = '🌙';
    }
    localStorage.setItem('dayMode', day ? '1' : '0');
  }
  
  // Load theme preference
  const saved = localStorage.getItem('dayMode');
  setTheme(saved === '1');
  
  themeToggle.addEventListener('click', () => {
    setTheme(!body.classList.contains('day-mode'));
  });
  
  // Contact form handler (demo only)
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        formMessage.textContent = "Děkujeme za zprávu! Ozveme se vám co nejdříve.";
        form.reset();
        setTimeout(() => { formMessage.textContent = ""; }, 5000);
      });
    }

    // Language toggle
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      let isCzech = document.documentElement.lang === 'cs';
      langBtn.addEventListener('click', function() {
        isCzech = !isCzech;
        if (isCzech) {
          langBtn.textContent = 'EN';
          document.documentElement.lang = 'cs';
          // Swap text content to Czech
          setCzechText();
        } else {
          langBtn.textContent = 'CZ';
          document.documentElement.lang = 'en';
          // Swap text content to English
          setEnglishText();
        }
      });
    }
  });

  function setCzechText() {
    document.querySelector('.btn-primary span').textContent = 'Odeslat';
    document.querySelector('.contact-form h2').textContent = 'Napište mi';
    document.querySelector('.contact-form input[name="name"]').placeholder = 'Vaše jméno';
    document.querySelector('.contact-form input[name="email"]').placeholder = 'Váš e-mail';
    document.querySelector('.contact-form textarea').placeholder = 'Vaše zpráva';
    document.querySelector('.reviews h2').textContent = 'Hodnocení klientů';
    document.querySelector('.about h2').textContent = 'O nás';
    document.querySelector('.about p').textContent = 'Jsme tým zkušených videomakerů s vášní pro vizuální příběhy. Pomáháme klientům prezentovat jejich projekty, akce i vzpomínky v moderním stylu.';
    document.querySelector('.contact h2').textContent = 'Kontakt';
    document.querySelector('.contact p').innerHTML = 'Petr Novák<br>Tel.: <a href="tel:+420603123456">603 123 456</a><br>E-mail: <a href="mailto:info@videofilmkh.cz">info@videofilmkh.cz</a>';
    document.querySelector('.services h2').textContent = 'Co nabízíme';
    const serviceTitles = ['TV pořady & reportáže', 'Natáčení akcí', 'Střih & postprodukce', 'Digitalizace'];
    const serviceDescs = [
      'Profesionální výroba televizních pořadů a reportáží na míru.',
      'Kulturní, společenské i sportovní akce zachytíme v nejvyšší kvalitě.',
      'Kreativní střih, barevné korekce a profesionální postprodukce.',
      'Převod starých záznamů do moderních formátů a archivace.'
    ];
    document.querySelectorAll('.service-card h3').forEach((el, i) => el.textContent = serviceTitles[i]);
    document.querySelectorAll('.service-card p').forEach((el, i) => el.textContent = serviceDescs[i]);
    const reviewTexts = [
      {
        text: 'Skvělá spolupráce a profesionální přístup. Výsledné video předčilo naše očekávání!',
        author: '- Jana K.'
      },
      {
        text: 'Rychlé dodání, kreativní střih a perfektní komunikace. Doporučuji!',
        author: '- Martin S.'
      },
      {
        text: 'Děkujeme za krásné zachycení naší svatby. Vše proběhlo bez problémů.',
        author: '- Petra a Tomáš'
      },
      {
        text: 'Video bylo úžasné, zachytili jste atmosféru naší akce dokonale. Děkujeme!',
        author: '- Lukáš P.'
      },
      {
        text: 'Profesionální přístup, skvělá komunikace a rychlé dodání. Určitě doporučuji!',
        author: '- Eva N.'
      },
      {
        text: 'Výsledné video mělo skvělou atmosféru a střih. Děkujeme za krásnou vzpomínku!',
        author: '- Tomáš D.'
      }
    ];
    document.querySelectorAll('.review-card').forEach((el, i) => {
      el.querySelector('p').textContent = reviewTexts[i].text;
      el.querySelector('span').textContent = reviewTexts[i].author;
    });
    // Leave a Review section
    document.getElementById('leaveReviewTitle').textContent = 'Napište vlastní hodnocení';
    document.getElementById('reviewerName').placeholder = 'Vaše jméno';
    document.getElementById('reviewText').placeholder = 'Vaše zkušenost nebo komentář';
    document.getElementById('leaveReviewBtn').textContent = 'Přidat hodnocení';
    document.getElementById('showreelTitle').textContent = 'Ukázka naší práce';
    document.getElementById('portfolioTitle').textContent = 'Portfolio';
    document.getElementById('processTitle').textContent = 'Jak pracujeme';
    document.getElementById('processStep1').textContent = 'Konzultace';
    document.getElementById('processStep2').textContent = 'Natáčení';
    document.getElementById('processStep3').textContent = 'Střih';
    document.getElementById('processStep4').textContent = 'Předání';
    document.getElementById('processDesc1').textContent = 'Probereme vaše potřeby a vizi.';
    document.getElementById('processDesc2').textContent = 'Zachytíme klíčové momenty s profesionální technikou.';
    document.getElementById('processDesc3').textContent = 'Kreativně sestříháme a upravíme záběry.';
    document.getElementById('processDesc4').textContent = 'Dodáme hotové video v požadovaném formátu.';
    document.getElementById('faqTitle').textContent = 'Často kladené dotazy';
    document.querySelectorAll('.faq-question')[0].textContent = 'Jak dlouho trvá zpracování videa?';
    document.querySelectorAll('.faq-answer')[0].textContent = 'Obvykle 1–3 týdny podle rozsahu projektu.';
    document.querySelectorAll('.faq-question')[1].textContent = 'V jakých formátech dodáváte videa?';
    document.querySelectorAll('.faq-answer')[1].textContent = 'MP4, MOV, nebo dle domluvy.';
    document.querySelectorAll('.faq-question')[2].textContent = 'Můžeme si vybrat hudbu do videa?';
    document.querySelectorAll('.faq-answer')[2].textContent = 'Ano, rádi vám poradíme s výběrem vhodné hudby.';
    document.getElementById('ctaTitle').textContent = 'Chcete nezávaznou konzultaci?';
    document.getElementById('ctaBtn').textContent = 'Kontaktujte nás';
  }

  function setEnglishText() {
    document.querySelector('.btn-primary span').textContent = 'Send';
    document.querySelector('.contact-form h2').textContent = 'Contact Me';
    document.querySelector('.contact-form input[name="name"]').placeholder = 'Your Name';
    document.querySelector('.contact-form input[name="email"]').placeholder = 'Your Email';
    document.querySelector('.contact-form textarea').placeholder = 'Your Message';
    document.querySelector('.reviews h2').textContent = 'Client Reviews';
    document.querySelector('.about h2').textContent = 'About Us';
    document.querySelector('.about p').textContent = 'We are a team of experienced videographers passionate about visual storytelling. We help clients present their projects, events, and memories in a modern style.';
    document.querySelector('.contact h2').textContent = 'Contact';
    document.querySelector('.contact p').innerHTML = 'Petr Novák<br>Phone: <a href="tel:+420603123456">+420 603 123 456</a><br>Email: <a href="mailto:info@videofilmkh.cz">info@videofilmkh.cz</a>';
    document.querySelector('.services h2').textContent = 'Our Services';
    const serviceTitles = ['TV Shows & Reports', 'Event Filming', 'Editing & Postproduction', 'Digitization'];
    const serviceDescs = [
      'Professional production of TV shows and custom reports.',
      'We capture cultural, social, and sports events in the highest quality.',
      'Creative editing, color grading, and professional postproduction.',
      'Transfer of old recordings to modern formats and archiving.'
    ];
    document.querySelectorAll('.service-card h3').forEach((el, i) => el.textContent = serviceTitles[i]);
    document.querySelectorAll('.service-card p').forEach((el, i) => el.textContent = serviceDescs[i]);
    const reviewTexts = [
      {
        text: 'Great cooperation and professional approach. The final video exceeded our expectations!',
        author: '- Jana K.'
      },
      {
        text: 'Fast delivery, creative editing, and perfect communication. I recommend!',
        author: '- Martin S.'
      },
      {
        text: 'Thank you for beautifully capturing our wedding. Everything went smoothly.',
        author: '- Petra & Tomáš'
      },
      {
        text: 'The video was amazing, you captured the atmosphere of our event perfectly. Thank you!',
        author: '- Lukáš P.'
      },
      {
        text: 'Professional approach, great communication, and fast delivery. Highly recommended!',
        author: '- Eva N.'
      },
      {
        text: 'The final video had a great atmosphere and editing. Thank you for a beautiful memory!',
        author: '- Tomáš D.'
      }
    ];
    document.querySelectorAll('.review-card').forEach((el, i) => {
      el.querySelector('p').textContent = reviewTexts[i].text;
      el.querySelector('span').textContent = reviewTexts[i].author;
    });
    // Leave a Review section
    document.getElementById('leaveReviewTitle').textContent = 'Leave a Review';
    document.getElementById('reviewerName').placeholder = 'Your Name';
    document.getElementById('reviewText').placeholder = 'Your experience or comment';
    document.getElementById('leaveReviewBtn').textContent = 'Add Review';
    document.getElementById('showreelTitle').textContent = 'Showreel';
    document.getElementById('portfolioTitle').textContent = 'Portfolio';
    document.getElementById('processTitle').textContent = 'How We Work';
    document.getElementById('processStep1').textContent = 'Consultation';
    document.getElementById('processStep2').textContent = 'Filming';
    document.getElementById('processStep3').textContent = 'Editing';
    document.getElementById('processStep4').textContent = 'Delivery';
    document.getElementById('processDesc1').textContent = 'We discuss your needs and vision.';
    document.getElementById('processDesc2').textContent = 'We capture key moments with professional equipment.';
    document.getElementById('processDesc3').textContent = 'We creatively edit and enhance the footage.';
    document.getElementById('processDesc4').textContent = 'We deliver the finished video in your preferred format.';
    document.getElementById('faqTitle').textContent = 'Frequently Asked Questions';
    document.querySelectorAll('.faq-question')[0].textContent = 'How long does video production take?';
    document.querySelectorAll('.faq-answer')[0].textContent = 'Usually 1–3 weeks depending on project scope.';
    document.querySelectorAll('.faq-question')[1].textContent = 'In which formats do you deliver videos?';
    document.querySelectorAll('.faq-answer')[1].textContent = 'MP4, MOV, or as agreed.';
    document.querySelectorAll('.faq-question')[2].textContent = 'Can we choose the music for the video?';
    document.querySelectorAll('.faq-answer')[2].textContent = 'Yes, we are happy to help you select suitable music.';
    document.getElementById('ctaTitle').textContent = 'Want a free consultation?';
    document.getElementById('ctaBtn').textContent = 'Contact us';
  }
  
  // Custom animated mouse pointer
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const outline = document.createElement('div');
  outline.className = 'cursor-outline';
  document.body.appendChild(dot);
  document.body.appendChild(outline);
  let mouseX = window.innerWidth/2, mouseY = window.innerHeight/2;
  let outlineX = mouseX, outlineY = mouseY;
  let isTouch = false;

  function updatePointerVisibility() {
    if (window.matchMedia('(pointer: coarse)').matches || isTouch) {
      dot.style.display = 'none';
      outline.style.display = 'none';
      document.body.classList.add('touch-mode');
    } else {
      dot.style.display = '';
      outline.style.display = '';
      document.body.classList.remove('touch-mode');
    }
  }

  window.addEventListener('touchstart', () => { isTouch = true; updatePointerVisibility(); }, { once: true });
  window.addEventListener('mousemove', () => { isTouch = false; updatePointerVisibility(); }, { once: true });
  updatePointerVisibility();

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });
  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.18;
    outlineY += (mouseY - outlineY) * 0.18;
    outline.style.left = outlineX + 'px';
    outline.style.top = outlineY + 'px';
    requestAnimationFrame(animateOutline);
  }
  animateOutline();
  // Pointer grows on interactive elements and shows play triangle
  function pointerGrowOnInteractive() {
    document.querySelectorAll('a, button, input, textarea, .project-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        outline.style.width = '56px';
        outline.style.height = '56px';
        outline.style.borderColor = '#fff';
        // Add play triangle
        if (!outline.querySelector('.cursor-play')) {
          const play = document.createElement('div');
          play.className = 'cursor-play';
          play.innerHTML = '<svg width="22" height="22" viewBox="0 0 22 22"><polygon points="6,4 18,11 6,18" fill="#4fc3f7"/></svg>';
          outline.appendChild(play);
        }
      });
      el.addEventListener('mouseleave', () => {
        outline.style.width = '36px';
        outline.style.height = '36px';
        outline.style.borderColor = '';
        // Remove play triangle
        const play = outline.querySelector('.cursor-play');
        if (play) play.remove();
      });
    });
  }
  pointerGrowOnInteractive();
  // Hide default cursor except on touch devices
  const style = document.createElement('style');
  style.innerHTML = 'body:not(.touch-mode), button:not(.touch-mode), a:not(.touch-mode), input:not(.touch-mode), textarea:not(.touch-mode) { cursor: none !important; }';
  document.head.appendChild(style);
  
  // Section and card fade-in on scroll
  function revealOnScroll() {
    document.querySelectorAll('section, .project-card, .review-card').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  document.addEventListener('DOMContentLoaded', revealOnScroll);
  // --- Leave a Review Form Logic & Multilanguage ---
  document.addEventListener('DOMContentLoaded', function() {
    const leaveReviewForm = document.getElementById('leaveReviewForm');
    const reviewFormMessage = document.getElementById('reviewFormMessage');
    if (leaveReviewForm) {
      leaveReviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Show thank you message in correct language
        const isCzech = document.documentElement.lang === 'cs';
        reviewFormMessage.textContent = isCzech ? 'Děkujeme za vaše hodnocení!' : 'Thank you for your review!';
        leaveReviewForm.reset();
        setTimeout(() => { reviewFormMessage.textContent = ''; }, 5000);
      });
    }
  });
  // --- Cinematic Additions: FAQ Accordion, Language Switch, Showreel Autoplay ---
  document.addEventListener('DOMContentLoaded', function() {
    // FAQ accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', function() {
        const item = this.closest('.faq-item');
        item.classList.toggle('open');
      });
    });
    // Showreel video: play on load (if allowed)
    const showreel = document.getElementById('showreelVideo');
    if (showreel) {
      showreel.play().catch(()=>{});
    }
  });
  // --- Back to Top Button Logic ---
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }