<template>
  <div class="tiers-section">
    <h1 class="section-title">Our Service Tiers</h1>
    <div class="tiers-container">
      <!-- Tier 1 -->
      <div class="tier-card tier-1" ref="tier1">
        <h2>Companion Care</h2>
        <p>Perfect for light assistance and companionship.</p>
        <p class="price">$25/hour</p>
      </div>

      <!-- Tier 2 -->
      <div class="tier-card tier-2" ref="tier2">
        <h2>Guiding Star</h2>
        <p>Offering personalized care with enhanced services.</p>
        <p class="price">$40/hour</p>
      </div>

      <!-- Tier 3 -->
      <div class="tier-card tier-3" ref="tier3">
        <h2>North Star Premium</h2>
        <p>Our best and most comprehensive care package.</p>
        <p class="price">$60/hour</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Tiers',
  setup() {
    const tier1 = ref(null);
    const tier2 = ref(null);
    const tier3 = ref(null);

    onMounted(() => {
      gsap.from([tier1.value, tier2.value, tier3.value], {
        scrollTrigger: {
          trigger: '.tiers-container',
          start: 'top 75%',
          toggleActions: 'play none none reset',
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
      });
    });

    return { tier1, tier2, tier3 };
  },
};
</script>

<style scoped>
/* General Layout */
.tiers-section {
  text-align: center;
  padding: 50px;
  background-color: #f8f9fa;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

/* Tier Cards */
.tiers-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.tier-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.tier-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

/* Tier Card Content */
.tier-card h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #007bff;
}

.tier-card p {
  font-size: 1rem;
  margin: 5px 0;
  color: #555;
}

.tier-card .price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

/* Responsive Design */
@media (max-width: 768px) {
  .tiers-container {
    flex-direction: column;
    align-items: center;
  }

  .tier-card {
    width: 90%;
  }
}
</style>
