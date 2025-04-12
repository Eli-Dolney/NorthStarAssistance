<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Track whether the mobile menu is open
const isMenuOpen = ref(false);

// GSAP animation after component mounts
onMounted(() => {
  const tl = gsap.timeline({ defaults: { duration: 0.7, opacity: 0 } });
  // Fade/slide the header/nav from the top
  tl.from('header', { y: -60, opacity: 0 });
});

// Close menu on route change if you'd like (optional)
watch(isMenuOpen, (val) => {
  if (!val) {
    // If the menu is closed, you could run a small GSAP animation, if you wish
  }
});

/** 
 * Toggles the mobile menu open/closed.
 * On mobile, this will show/hide the nav links.
 */
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <!-- Brand / Logo (or a home button) -->
        <div class="nav-brand">
          <!-- Logo linking to home -->
          <router-link to="/" class="logo">
            <span class="logo-icon">★</span> NorthStar Assistance
          </router-link>
          <!-- Hamburger icon (only visible on smaller screens) -->
          <button class="burger" @click="toggleMenu" aria-label="Toggle menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>

        <!-- Navigation Links -->
        <ul class="nav-links" :class="{ 'open': isMenuOpen }">
          <li @click="isMenuOpen = false">
            <router-link to="/">Home</router-link>
          </li>
          <li @click="isMenuOpen = false">
            <router-link to="/about-us">About Us</router-link>
          </li>
          <li @click="isMenuOpen = false">
            <router-link to="/services">Services</router-link>
          </li>
          <li @click="isMenuOpen = false">
            <router-link to="/tiers">Care Plans</router-link>
          </li>
          <li @click="isMenuOpen = false" class="contact-button">
            <router-link to="/contact">Contact Us</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <!-- This is where Home.vue (and other views) will appear -->
      <router-view />
    </main>

    <footer>
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-icon">★</span> NorthStar Assistance
          </div>
          <p>Guiding you with compassionate care</p>
        </div>
        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about-us">About Us</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/tiers">Care Plans</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h3>Contact Us</h3>
          <p>123 Pine Street</p>
          <p>Minneapolis, MN 55401</p>
          <p>Phone: (612) 555-0123</p>
          <p>Email: care@northstarassistance.com</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} NorthStar Assistance. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Resetting some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* The container #app spans full height/width if desired */
html, body, #app {
  width: 100%;
  min-height: 100vh;
  font-family: 'Open Sans', Arial, sans-serif;
}

/* Background color for the app (adjust to your needs) */
#app {
  background-color: #f5f5f5;
  color: #333;
  display: flex;
  flex-direction: column;
}

/* Header & Nav */
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #193e1f; /* Dark forest green - Minnesota nature theme */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

/* Main nav container */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Brand/Logo + Burger Container */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Logo styling */
.nav-brand .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s;
}

.logo-icon {
  color: #f8c630; /* Gold star color */
  font-size: 1.7rem;
}

.nav-brand .logo:hover {
  color: #f8c630;
}

/* Burger menu button (hidden on larger screens) */
.burger {
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  flex-direction: column;
  gap: 5px;
}

/* The 3 bars of the burger */
.burger .bar {
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  transition: 0.3s;
}

/* Nav links (desktop) */
.nav-links {
  list-style: none;
  display: flex; /* horizontal layout on desktop */
  gap: 2.5em;
  margin-right: 1rem;
  align-items: center;
}

/* Nav link styling */
.nav-links li a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem 0;
  position: relative;
}

.nav-links li a:hover {
  color: #f8c630;
}

/* Animated underline effect for nav links */
.nav-links li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #f8c630;
  transition: width 0.3s;
}

.nav-links li a:hover::after,
.nav-links li a.router-link-active::after {
  width: 100%;
}

/* Contact button styling */
.contact-button a {
  background-color: #f8c630;
  color: #193e1f !important;
  padding: 0.5rem 1.2rem !important;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s;
}

.contact-button a:hover {
  background-color: #ffffff;
  color: #193e1f !important;
  transform: translateY(-2px);
}

.contact-button a::after {
  display: none;
}

/* On smaller screens, we hide the nav links by default
   and only show them when "open" class is toggled. */
@media (max-width: 768px) {
  nav {
    padding: 0.8rem 1rem;
  }
  
  .burger {
    display: flex; /* show burger on mobile */
  }
  
  .nav-links {
    position: absolute;
    top: 70px; /* just below the nav bar */
    right: 0;
    background-color: #193e1f;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    padding: 1.5rem;
    gap: 1.2rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 0 10px;
  }
  
  .nav-links.open {
    transform: translateX(0);
  }
  
  .nav-links li a {
    color: #ffffff;
    display: block;
    padding: 0.5rem;
  }
  
  .contact-button a {
    display: inline-block;
    margin-top: 0.5rem;
  }
}

/* Main area */
main {
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Footer styling */
footer {
  background-color: #193e1f;
  color: #ffffff;
  padding: 3rem 2rem 1rem;
  margin-top: 3rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
}

.footer-brand {
  flex: 1;
  min-width: 250px;
}

.footer-logo {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-brand p {
  color: #d4d4d4;
  font-size: 0.95rem;
}

.footer-links, .footer-contact {
  flex: 1;
  min-width: 200px;
}

footer h3 {
  color: #f8c630;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.7rem;
}

.footer-links a {
  color: #d4d4d4;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #f8c630;
}

.footer-contact p {
  margin-bottom: 0.5rem;
  color: #d4d4d4;
  font-size: 0.95rem;
}

.footer-bottom {
  margin-top: 3rem;
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #a9a9a9;
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .footer-brand, .footer-links, .footer-contact {
    width: 100%;
  }
}
</style>