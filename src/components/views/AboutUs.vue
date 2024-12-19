<template>
  <div class="about-section">
    <h1 ref="header">Welcome to NorthStar Assistance!</h1>
    <p ref="paragraph">
      We provide quality PCA services tailored to your needs.
    </p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AboutUs',
  setup() {
    const header = ref(null);
    const paragraph = ref(null);

    onMounted(() => {
      gsap.from(header.value, {
        scrollTrigger: {
          trigger: header.value,
          start: 'top 75%', // Trigger animation when header enters 75% of viewport
          end: 'bottom 25%', // End animation when header exits 25% of viewport
          toggleActions: 'play pause resume reset', // Animation actions
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
.about-section {
  text-align: center;
  margin: 50px auto;
  max-width: 800px;
}

.about-section h1 {
  font-size: 2.5rem;
  color: #333;
}

.about-section p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.5;
}
</style>
