<template>
  <div>
    <!-- Tiers Section -->
    <div class="tiers-section" id="tiers">
      <h1 class="section-title">Our Service Tiers</h1>
      <div class="tiers-container">
        <!-- Tier 1: Companion Care -->
        <div class="tier-card tier-1" ref="tier1">
          <h2>Companion Care</h2>
          <p>Perfect for light assistance and companionship.</p>
          <ul class="feature-list">
            <li>Light Housekeeping</li>
            <li>Meal Preparation Assistance</li>
            <li>Medication Reminders</li>
            <li>Friendly Social Interaction</li>
          </ul>
          <p class="price">$25/hour</p>
          <button class="choose-button">Choose Companion Care</button>
        </div>

        <!-- Tier 2: Guiding Star -->
        <div class="tier-card tier-2" ref="tier2">
          <h2>Guiding Star</h2>
          <p>Offering personalized care with enhanced services.</p>
          <ul class="feature-list">
            <li>Everything in Companion Care</li>
            <li>Transportation to Appointments</li>
            <li>Errand Assistance & Grocery Shopping</li>
            <li>Medication Management</li>
          </ul>
          <p class="price">$40/hour</p>
          <button class="choose-button">Choose Guiding Star</button>
        </div>

        <!-- Tier 3: North Star Premium -->
        <div class="tier-card tier-3" ref="tier3">
          <h2>North Star Premium</h2>
          <p>Our best and most comprehensive care package.</p>
          <ul class="feature-list">
            <li>Everything in Guiding Star</li>
            <li>24/7 On-Call Support</li>
            <li>Advanced Personal Care Assistance</li>
            <li>Regular Care Coordination with Family</li>
          </ul>
          <p class="price">$60/hour</p>
          <button class="choose-button">Choose Premium</button>
        </div>
      </div>
    </div>

    <!-- Comparison Table Section -->
    <div class="comparison-section">
      <h2>Compare Our Packages</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Features</th>
            <th>Companion Care</th>
            <th>Guiding Star</th>
            <th>North Star Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Light Housekeeping</td>
            <td>Included</td>
            <td>Included</td>
            <td>Included</td>
          </tr>
          <tr>
            <td>Meal Prep Assistance</td>
            <td>Included</td>
            <td>Included</td>
            <td>Included</td>
          </tr>
          <tr>
            <td>Errands & Transportation</td>
            <td>—</td>
            <td>Included</td>
            <td>Included</td>
          </tr>
          <tr>
            <td>Medication Management</td>
            <td>Reminders Only</td>
            <td>Full Management</td>
            <td>Full Management</td>
          </tr>
          <tr>
            <td>24/7 On-Call Support</td>
            <td>—</td>
            <td>—</td>
            <td>Included</td>
          </tr>
        </tbody>
      </table>
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
      // Fade/scale in the tier cards
      gsap.from([tier1.value, tier2.value, tier3.value], {
        scrollTrigger: {
          trigger: '.tiers-container',
          start: 'top 75%',
          toggleActions: 'play none none reset',
        },
        duration: 1,
        scale: 0.9,
        opacity: 0,
        stagger: 0.3,
      });

      // Slight scale effect on scroll
      gsap.to('.tier-card', {
        scale: 1.1,
        duration: 0.3,
        paused: true,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.tiers-container',
          scrub: true,
        },
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
  padding: 100px 20px 50px;
  background-color: #f8f9fa;
  margin-top: 60px; /* to keep space under a fixed navbar if you have one globally */
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
}

/* Tiers Container & Cards */
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
  padding: 30px;
  width: 320px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative; /* for any absolutely positioned elements */
}

.tier-card:hover {
  transform: scale(1.06);
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

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 15px 0;
}

.choose-button {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.choose-button:hover {
  background-color: #0056b3;
}

/* Feature list styling */
.feature-list {
  text-align: left;
  margin: 10px 0;
  padding: 0;
  list-style: none;
}

.feature-list li {
  margin: 5px 0;
  display: flex;
  align-items: center;
}

/* Comparison Table Section */
.comparison-section {
  max-width: 1000px;
  margin: 50px auto 80px;
  padding: 0 20px;
  text-align: center;
}

.comparison-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  text-align: left;
}

.comparison-table th,
.comparison-table td {
  padding: 15px;
  border: 1px solid #ddd;
}

.comparison-table thead {
  background-color: #007bff;
  color: white;
}

.comparison-table td {
  text-align: center;
}

@media (max-width: 1024px) {
  .tiers-container {
    flex-direction: column;
    align-items: center;
  }
  .tier-card {
    width: 90%;
  }

  .comparison-table {
    font-size: 0.9rem;
  }
}
</style>
