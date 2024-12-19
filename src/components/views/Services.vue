<template>
    <div class="services-section">
      <h1 ref="header">Our Services</h1>
      <p ref="paragraph">
        At NorthStar Assistance, we offer a wide range of PCA services to meet your needs.
      </p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  export default {
    name: 'Services',
    setup() {
      const header = ref(null);
      const paragraph = ref(null);
  
      onMounted(() => {
        gsap.from(header.value, {
          scrollTrigger: {
            trigger: header.value,
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play pause resume reset',
          },
          duration: 1,
          y: -50,
          opacity: 0,
        });
  
        gsap.from(paragraph.value, {
          scrollTrigger: {
            trigger: paragraph.value,
            start: 'top 75%',
            toggleActions: 'play none none reset',
          },
          duration: 1.5,
          y: 50,
          opacity: 0,
          delay: 0.5,
        });
      });
  
      return { header, paragraph };
    },
  };
  </script>
  
  <style scoped>
  .services-section {
    text-align: center;
    margin: 50px auto;
    max-width: 800px;
  }
  
  .services-section h1 {
    font-size: 2.5rem;
    color: #333;
  }
  
  .services-section p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.5;
  }
  </style>
  