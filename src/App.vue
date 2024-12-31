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
          <!-- Example: You might link your logo to "/" or have a separate Home button -->
          <router-link to="/" class="logo">
            NorthStar
          </router-link>
          <!-- Hamburger / burger icon (only visible on smaller screens) -->
          <button class="burger" @click="toggleMenu">
            <!-- A simple 3-bar burger icon -->
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
            <router-link to="/tiers">Tiers</router-link>
          </li>
          <li @click="isMenuOpen = false">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <!-- This is where Home.vue (and other views) will appear -->
      <router-view />
    </main>
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
  font-family: Arial, sans-serif;
}

/* Background color for the app (adjust to your needs) */
#app {
  background-color: #172026;
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
}

/* Header & Nav */
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: beige; /* Feel free to change the color */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Main nav container */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
}

/* Brand/Logo + Burger Container */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Example brand link as a 'logo' */
.nav-brand .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f29f05; /* Adjust to your brand color */
  text-decoration: none;
}

.nav-brand .logo:hover {
  color: #0056b3;
  transition: color 0.3s;
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
  background-color: #f29f05; /* match the brand color */
  transition: 0.3s;
}

/* Nav links (desktop) */
.nav-links {
  list-style: none;
  display: flex; /* horizontal layout on desktop */
  gap: 2em;
  margin-right: 1rem;
}

/* Nav link styling */
.nav-links li a {
  text-decoration: none;
  color: #f29f05;
  font-weight: 600;
  transition: color 0.3s;
}
.nav-links li a:hover {
  color: #0056b3;
}

/* On smaller screens, we hide the nav links by default
   and only show them when "open" class is toggled. */
@media (max-width: 768px) {
  .burger {
    display: flex; /* show burger on mobile */
  }
  .nav-links {
    position: absolute;
    top: 70px; /* just below the nav bar */
    right: 0;
    background-color: beige;
    flex-direction: column;
    width: 200px;
    padding: 1rem;
    gap: 1rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }
  .nav-links.open {
    transform: translateX(0);
  }
  .nav-links li a {
    color: #333; /* contrast with the beige background */
  }
}

/* Main area */
main {
  flex: 1; /* Allow main to grow and push footer down, if you add a footer later */
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
