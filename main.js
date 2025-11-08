const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    faqItems.forEach((i) => {
      i.classList.remove('open');
      i.querySelector('.toggle').textContent = '+';
    });
    if (!isOpen) {
      item.classList.add('open');
      item.querySelector('.toggle').textContent = '−';
    }
  });
});

const animatedElements = document.querySelectorAll(
  '.feature-card, .timeline-card, .pricing-card, .install-card, .card, .stat, .variation-card, .logo-evolution, .moodboard, .atelier-card'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

animatedElements.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  observer.observe(el);
});

document.documentElement.addEventListener('scroll', () => {
  animatedElements.forEach((el) => {
    if (el.classList.contains('visible')) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
  });
});

const navLinks = document.querySelectorAll('nav a');
const observerSections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach((navLink) => navLink.classList.remove('active'));
        link?.classList.add('active');
      }
    });
  },
  { threshold: 0.4 }
);

observerSections.forEach((section) => sectionObserver.observe(section));
