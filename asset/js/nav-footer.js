/**
 * Eedhal Technology - Navigation & Footer Injector
 * Injects consistent nav and footer into SEO pages that use placeholder divs
 */

(function () {
  'use strict';

  var NAV_HTML = `
<nav class="navbar navbar-expand-lg navbar-light fixed-top">
  <div class="container-xl">
    <a class="navbar-brand" href="index.html">
      <img src="asset/img/logo-eedhal-new.png" alt="Eedhal Technology Logo" height="40" class="d-inline-block">
      <span class="ms-2 fw-bold">Eedhal Technology</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavMain" aria-controls="navbarNavMain" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavMain">
      <ul class="navbar-nav ms-auto align-items-lg-center">
        <li class="nav-item">
          <a class="nav-link" href="index.html"><i class="fas fa-home me-1"></i>Home</a>
        </li>
        <li class="nav-item ms-lg-2">
          <a class="btn btn-primary btn-sm px-3" href="contact.html">Get In Touch</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div style="height:76px"></div>`;

  var FOOTER_HTML = `
<footer class="footer bg-dark-primary py-5">
  <div class="container-xl">
    <div class="row g-4">
      <div class="col-lg-4 col-md-6">
        <div class="footer-brand mb-3">
          <img src="asset/img/logo-eedhal-new.png" alt="Eedhal Technology" height="40" class="mb-3">
          <h5 class="mb-1">Eedhal Technology</h5>
          <p class="mb-3" style="color:var(--text-gray);font-size:.9rem">Transforming Ideas Into Digital Reality.<br>Web Development &amp; Digital Marketing<br>for Indian Businesses.</p>
        </div>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/muthu-selvan-s-0117ab188/" class="social-link" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/muthu_ms21/" class="social-link" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://wa.me/919344089762" class="social-link" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
        <div class="mt-3" style="font-size:.85rem;color:var(--text-gray)">
          <div class="mb-1"><i class="fas fa-phone me-2" style="color:var(--primary-color)"></i><a href="tel:+919344089762" style="color:inherit;text-decoration:none">+91 93440 89762</a></div>
          <div><i class="fas fa-envelope me-2" style="color:var(--primary-color)"></i><a href="mailto:muthu9677641018@gmail.com" style="color:inherit;text-decoration:none">muthu9677641018@gmail.com</a></div>
        </div>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <h6 class="footer-title">Services</h6>
        <ul class="footer-links">
          <li><span>Web Development</span></li>
          <li><span>Ecommerce Dev</span></li>
          <li><span>Custom Software</span></li>
          <li><span>Mobile Apps</span></li>
          <li><span>SEO Services</span></li>
          <li><span>Google Ads</span></li>
          <li><span>Meta Ads</span></li>
          <li><span>Social Media</span></li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <h6 class="footer-title">Company</h6>
        <ul class="footer-links">
          <li><span>About Us</span></li>
          <li><span>Portfolio</span></li>
          <li><span>Our Team</span></li>
          <li><span>Testimonials</span></li>
          <li><span>Blog</span></li>
          <li><span>Careers</span></li>
          <li><span>Contact</span></li>
        </ul>
      </div>
      <div class="col-lg-4 col-md-6">
        <h6 class="footer-title">Top Locations</h6>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:1rem">
          <span style="font-size:.78rem;color:var(--text-gray);background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:4px;padding:2px 8px">Coimbatore</span>
          <span style="font-size:.78rem;color:var(--text-gray);background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:4px;padding:2px 8px">Chennai</span>
          <span style="font-size:.78rem;color:var(--text-gray);background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:4px;padding:2px 8px">Madurai</span>
          <span style="font-size:.78rem;color:var(--text-gray);background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:4px;padding:2px 8px">Trichy</span>
          <span style="font-size:.78rem;color:var(--text-gray);background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:4px;padding:2px 8px">Salem</span>
          <span style="font-size:.78rem;color:var(--text-gray);background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:4px;padding:2px 8px">Erode</span>
          <span style="font-size:.78rem;color:var(--text-gray);background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:4px;padding:2px 8px">Tiruppur</span>
          <span style="font-size:.78rem;color:var(--text-gray);background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:4px;padding:2px 8px">Vellore</span>
          <span style="font-size:.78rem;color:var(--text-gray);background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:4px;padding:2px 8px">Bangalore</span>
          <span style="font-size:.78rem;color:var(--text-gray);background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:4px;padding:2px 8px">Hyderabad</span>
          <span style="font-size:.78rem;color:var(--text-gray);background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:4px;padding:2px 8px">Mumbai</span>
          <span style="font-size:.78rem;color:var(--text-gray);background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:4px;padding:2px 8px">Delhi</span>
        </div>
        <h6 class="footer-title">Newsletter</h6>
        <form class="newsletter-form" id="footerNewsletterForm">
          <div class="input-group">
            <input type="email" class="form-control" placeholder="Your email address" required aria-label="Email for newsletter">
            <button class="btn btn-primary" type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <hr class="footer-divider">
    <div class="row align-items-center">
      <div class="col-md-6 mb-2 mb-md-0">
        <p class="footer-copyright mb-0">&copy; 2026 Eedhal Technology. All rights reserved. | Web Development &amp; Digital Marketing Company in Coimbatore, Tamil Nadu, India.</p>
      </div>
      <div class="col-md-6 text-md-end">
        <span class="footer-link me-3">Privacy Policy</span>
        <span class="footer-link me-3">Terms of Service</span>
      </div>
    </div>
  </div>
</footer>`;

  function inject() {
    var navEl = document.getElementById('nav-placeholder');
    if (navEl) {
      navEl.outerHTML = NAV_HTML;
    }
    var footerEl = document.getElementById('footer-placeholder');
    if (footerEl) {
      footerEl.outerHTML = FOOTER_HTML;
    }

    // Re-init EmailJS for newsletter in footer
    document.addEventListener('DOMContentLoaded', function () {
      var nf = document.getElementById('footerNewsletterForm');
      if (nf) {
        nf.addEventListener('submit', function (e) {
          e.preventDefault();
          var emailVal = nf.querySelector('input[type=email]').value;
          if (typeof emailjs !== 'undefined') {
            emailjs.send('service_k4hczja', 'template_newsletter', {
              subscriber_email: emailVal,
              from_name: 'Newsletter Subscriber',
              message: 'New newsletter subscription'
            }).then(function () {
              alert('Subscribed successfully!');
              nf.reset();
            }, function () {
              alert('Thank you for subscribing!');
              nf.reset();
            });
          } else {
            alert('Thank you for subscribing!');
            nf.reset();
          }
        });
      }
    });

    // Mark active nav link
    var path = window.location.pathname.replace(/\/$/, '') || '/index.html';
    document.querySelectorAll('.navbar .nav-link, .navbar .dropdown-item').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (href && path.endsWith(href.replace(/^\//, ''))) {
        a.classList.add('active');
      }
    });
  }

  // Run as soon as script loads (document.write alternative for injected HTML)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
