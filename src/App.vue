<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });
  tl.from("nav", { y: -50, opacity: 0 });
});
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about-us">About Me</router-link></li>
          <li><router-link to="/tiers">Tiers</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view /> <!-- This renders the content of the active route -->
    </main>
  </div>
</template>

<style scoped>
/********** General Styles **********/
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* Prevent horizontal scrolling if any elements overflow */
}


/********** Header and Navigation **********/
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #f8f9fa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
nav ul {
  display: flex;
  justify-content: center;
  gap: 1em;
  list-style: none;
  margin: 0;
  padding: 1em;
}
nav ul li a {
  text-decoration: none;
  color: #007bff;
  transition: color 0.3s;
}
nav ul li a:hover {
  color: #0056b3;
}
</style>
