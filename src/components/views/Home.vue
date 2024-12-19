<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });
  tl.from(".centerpiece", { y: 50 })
    .from(".info-section", { y: 50, opacity: 0 }, "+=0.3")
    .from(".testimonials", { y: 50, opacity: 0 }, "+=0.3")
    .from(".services", { y: 50, opacity: 0 }, "+=0.3")
    .from(".contact-section", { y: 50, opacity: 0 }, "+=0.3");
});
</script>

<template>
  <div id="app">
    <section id="home" class="parallax">
      <div class="centerpiece">
        <img src="/src/assets/NSA.jpg" alt="Minnesota Landscape" class="logo" />
        <h1>Welcome to NorthStar Assistance</h1>
        <p>Providing quality PCA services tailored to your needs.</p>
      </div>
    </section>

    <section class="info-section">
      <h2>Who We Are</h2>
      <p>
        NorthStar Assistance specializes in providing compassionate and personalized home care for individuals
        in need. Our team is dedicated to ensuring comfort, safety, and a high quality of life for our clients.
      </p>
    </section>

    <section class="testimonials">
      <h2>Testimonials</h2>
      <blockquote>"NorthStar Assistance has been a lifesaver for our family. Their care and dedication are unmatched."</blockquote>
      <cite>- Happy Client</cite>
    </section>

    <section class="services">
      <h2>Our Services</h2>
      <p>
        We provide a wide range of home care services, including personal care, companionship, and
        specialized medical support tailored to each client.
      </p>
    </section>

    <section class="contact-section">
      <h2>Get in Touch</h2>
      <p>
        Ready to get started? Contact us today to learn more about how we can support your needs.
      </p>
    </section>
  </div>
</template>

<style scoped>
/********** General Styling **********/
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

/********** Navigation Bar **********/
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 1em 0;
  margin: 0;
}

.navbar nav ul li {
  margin: 0 1.5em;
}

.navbar nav ul li a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s;
}

.navbar nav ul li a:hover {
  color: #0056b3;
}

/********** Parallax Section **********/
.parallax {
  background: url('/src/assets/minnesota.jpg') no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin: 0;
  padding: 0;
}

.parallax .centerpiece {
  background: rgba(0, 0, 0, 0.6);
  padding: 1.5em;
  border-radius: 10px;
  max-width: 80%;
  text-align: center;
}

.parallax .logo {
  max-width: 80px; /* Decreased size */
  margin-bottom: 1em;
  display: block;
}

/********** Section Styling **********/
section {
  width: 100%;
  max-width: 1200px;
  padding: 5em 2em;
  margin: 0 auto;
}

.info-section, .testimonials, .services, .contact-section {
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1em;
  color: #007bff;
}

p, blockquote, cite {
  font-size: 1.2rem;
  line-height: 1.5;
}

blockquote {
  font-style: italic;
  margin: 2em 0;
}

cite {
  display: block;
  margin-top: 1em;
  color: #555;
}

/********** Responsive Design **********/
@media (max-width: 768px) {
  .navbar nav ul {
    flex-direction: column;
    gap: 0.5em;
  }

  .parallax {
    background-attachment: scroll;
  }

  .parallax .centerpiece {
    padding: 1.5em;
    font-size: 1.2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  p, blockquote, cite {
    font-size: 1rem;
  }
  .parallax .logo {
    max-width: 60px; /* Adjust logo size for mobile */
  }
}
</style>
