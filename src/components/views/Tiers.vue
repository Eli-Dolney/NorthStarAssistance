<template>
  <div>
    <!-- Tiers Section -->
    <div class="tiers-section" id="tiers">
      <h1 class="section-title">Our Care Plans</h1>

      <!-- Tiers Container -->
      <div class="tiers-container">
        <!-- Use v-for to render tier cards from tiersData array -->
        <div
          v-for="(tier, index) in tiersData"
          :key="tier.name"
          class="tier-card"
          :ref="'tier' + (index + 1)"
          :class="{ 'featured': tier.name === 'Guiding Star' }"
        >
          <div class="tier-header">
            <h2>{{ tier.name }}</h2>
            <div v-if="tier.name === 'Guiding Star'" class="star-icon">★</div>
          </div>
          <p class="tier-description">{{ tier.shortDescription }}</p>
          <ul class="feature-list">
            <li v-for="(feature, idx) in tier.features" :key="idx">
              {{ feature }}
            </li>
          </ul>
          <p class="price">{{ tier.price }}</p>
          
          <div class="button-group">
            <button class="choose-button">Choose Plan</button>
            <button
              class="info-button"
              @click="openTierModal(index)"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Comparison Table Section -->
    <div class="comparison-section">
      <h2>Compare Our Care Plans</h2>
      <div class="table-container">
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
              <td>Errands &amp; Transportation</td>
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
            <tr>
              <td>Memory Care Trained Staff</td>
              <td>Basic Training</td>
              <td>Advanced Training</td>
              <td>Specialized Training</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Ready to get started CTA -->
    <div class="cta-section">
      <div class="cta-content">
        <h2>Ready to get started?</h2>
        <p>Contact us today to learn more about how we can support your needs.</p>
        <button class="contact-button">Contact Us</button>
      </div>
    </div>

    <!-- Tier Modal -->
    <transition name="fade">
      <div
        class="modal-overlay"
        v-if="selectedTierIndex !== null"
        @click="closeTierModal"
      >
        <div class="modal-content" @click.stop>
          <button class="close-button" @click="closeTierModal">×</button>
          <h2>{{ currentTier?.name }}</h2>
          <p class="price-modal">{{ currentTier?.price }}</p>
          <p class="more-info">{{ currentTier?.longDescription }}</p>

          <!-- Additional advanced features or details -->
          <h3>Plan Benefits:</h3>
          <ul class="advanced-features">
            <li v-for="(advFeature, idx) in currentTier?.advancedFeatures" :key="idx">
              {{ advFeature }}
            </li>
          </ul>
          
          <div class="modal-cta">
            <button class="choose-button-modal">Choose {{ currentTier?.name }}</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'CarePlans',
  setup() {
    // Tier Refs
    const tier1 = ref(null);
    const tier2 = ref(null);
    const tier3 = ref(null);

    // Care Plan Data Array
    const tiersData = ref([
      {
        name: 'Companion Care',
        shortDescription: 'Perfect for seniors who need light assistance and companionship.',
        price: '$25/hour',
        features: [
          'Light Housekeeping',
          'Meal Preparation Assistance',
          'Medication Reminders',
          'Friendly Social Interaction',
        ],
        longDescription:
          'Our Companion Care plan focuses on maintaining a safe, comfortable, and socially engaging environment. This plan is ideal for seniors who need assistance with day-to-day tasks but still value their independence.',
        advancedFeatures: [
          'Flexible scheduling options',
          'Routine wellness checks',
          'Caregiver notes & progress updates',
          'Personalized companion matching',
        ],
      },
      {
        name: 'Guiding Star',
        shortDescription: 'Offering personalized care with enhanced services for daily living.',
        price: '$40/hour',
        features: [
          'Everything in Companion Care',
          'Transportation to Appointments',
          'Errand Assistance & Grocery Shopping',
          'Medication Management',
        ],
        longDescription:
          'Our Guiding Star plan expands on Companion Care to include transportation, errands, and full medication management. This plan is designed for seniors needing more comprehensive assistance throughout their day.',
        advancedFeatures: [
          'Regular care plan reviews',
          'Coordination with medical professionals',
          'Enhanced safety monitoring',
          'Digital family portal access',
        ],
      },
      {
        name: 'North Star Premium',
        shortDescription: 'Our most comprehensive care package for those requiring advanced assistance.',
        price: '$60/hour',
        features: [
          'Everything in Guiding Star',
          '24/7 On-Call Support',
          'Advanced Personal Care Assistance',
          'Regular Care Coordination with Family',
        ],
        longDescription:
          'North Star Premium provides a highly personalized plan with round-the-clock support. This tier is perfect for seniors needing constant care or higher-level medical and personal assistance, including those with memory care needs.',
        advancedFeatures: [
          'Personalized meal plans & dietary tracking',
          'Weekly progress reports & family updates',
          'In-home safety & accessibility evaluations',
          'Specialized memory care services',
        ],
      },
    ]);

    // Track which tier is selected for the modal
    const selectedTierIndex = ref(null);

    // Computed property for the current tier object
    const currentTier = computed(() => {
      if (selectedTierIndex.value === null) return null;
      return tiersData.value[selectedTierIndex.value];
    });

    // Modal Methods
    const openTierModal = (index) => {
      selectedTierIndex.value = index;
    };
    const closeTierModal = () => {
      selectedTierIndex.value = null;
    };

    onMounted(() => {
      // Animate the tier cards
      gsap.from([tier1.value, tier2.value, tier3.value], {
        scrollTrigger: {
          trigger: '.tiers-container',
          start: 'top 75%',
          toggleActions: 'play none none reset',
        },
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.3,
      });

      // Slight scale effect on hover (controlled by CSS)
    });

    return {
      tier1,
      tier2,
      tier3,
      tiersData,
      selectedTierIndex,
      openTierModal,
      closeTierModal,
      currentTier,
    };
  },
};
</script>

<style scoped>
/* General Layout */
.tiers-section {
  text-align: center;
  padding: 80px 20px 50px;
  background-color: #fff;
  margin-top: 40px;
}
.section-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #156064;
  position: relative;
  display: inline-block;
}
.section-title:after {
  content: '';
  position: absolute;
  width: 60%;
  height: 3px;
  background-color: #FFC13B;
  bottom: -10px;
  left: 20%;
}

/* Tiers Container & Cards */
.tiers-container {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}
.tier-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 320px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  margin-bottom: 20px;
}
.tier-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
.tier-card.featured {
  border: 2px solid #FFC13B;
  transform: scale(1.05);
}
.tier-card.featured:hover {
  transform: scale(1.05) translateY(-8px);
}

/* Tier Card Content */
.tier-header {
  position: relative;
  margin-bottom: 15px;
}
.tier-card h2 {
  font-size: 1.8rem;
  color: #156064;
  margin-bottom: 5px;
}
.star-icon {
  color: #FFC13B;
  font-size: 24px;
  position: absolute;
  top: -15px;
  right: -15px;
}
.tier-description {
  font-size: 1rem;
  margin: 10px 0 20px;
  color: #555;
  min-height: 50px;
}
.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 20px 0;
}
.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
.choose-button {
  background-color: #FFC13B;
  border: none;
  border-radius: 5px;
  color: #333;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
}
.info-button {
  background-color: transparent;
  border: 1px solid #156064;
  border-radius: 5px;
  color: #156064;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
}
.choose-button:hover {
  background-color: #e0a826;
  transform: translateY(-2px);
}
.info-button:hover {
  background-color: rgba(21, 96, 100, 0.1);
}

/* Feature list styling */
.feature-list {
  text-align: left;
  margin: 20px 0;
  padding: 0;
  list-style: none;
  min-height: 150px;
}
.feature-list li {
  margin: 10px 0;
  padding-left: 25px;
  position: relative;
  line-height: 1.4;
}
.feature-list li:before {
  content: "✓";
  color: #156064;
  position: absolute;
  left: 0;
}

/* Comparison Table Section */
.comparison-section {
  max-width: 1200px;
  margin: 60px auto 80px;
  padding: 0 20px;
  text-align: center;
}
.comparison-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #156064;
  position: relative;
  display: inline-block;
}
.comparison-section h2:after {
  content: '';
  position: absolute;
  width: 60%;
  height: 3px;
  background-color: #FFC13B;
  bottom: -10px;
  left: 20%;
}
.table-container {
  overflow-x: auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  text-align: left;
  background-color: white;
  overflow: hidden;
}
.comparison-table th,
.comparison-table td {
  padding: 15px;
  border: 1px solid #ddd;
}
.comparison-table thead {
  background-color: #156064;
  color: white;
}
.comparison-table td {
  text-align: center;
}
.comparison-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* CTA Section */
.cta-section {
  background-color: #156064;
  padding: 60px 20px;
  text-align: center;
  color: white;
}
.cta-content {
  max-width: 800px;
  margin: 0 auto;
}
.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}
.cta-section p {
  font-size: 1.1rem;
  margin-bottom: 30px;
}
.contact-button {
  background-color: #FFC13B;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}
.contact-button:hover {
  background-color: #e0a826;
  transform: translateY(-2px);
}

/* MODAL STYLES */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.modal-content {
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 10px;
  position: relative;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
}
.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  color: #333;
  font-size: 1.8rem;
  border: none;
  cursor: pointer;
}
.price-modal {
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0.5rem 0 1.5rem;
  color: #156064;
}
.more-info {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #444;
}
.modal-content h3 {
  color: #156064;
  font-size: 1.3rem;
  margin: 1.5rem 0 1rem;
}
.advanced-features {
  list-style: none;
  padding: 0;
  margin: 1rem 0 2rem;
}
.advanced-features li {
  margin: 0.8rem 0;
  color: #555;
  padding-left: 25px;
  position: relative;
}
.advanced-features li:before {
  content: "✓";
  color: #156064;
  position: absolute;
  left: 0;
}
.modal-cta {
  text-align: center;
  margin-top: 30px;
}
.choose-button-modal {
  background-color: #FFC13B;
  border: none;
  border-radius: 5px;
  color: #333;
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
.choose-button-modal:hover {
  background-color: #e0a826;
}

/* Responsive Layout */
@media (max-width: 1024px) {
  .tier-card {
    width: 100%;
    max-width: 400px;
  }
  .tier-card.featured {
    transform: scale(1);
  }
  .tier-card.featured:hover {
    transform: translateY(-8px);
  }
  .feature-list {
    min-height: auto;
  }
  .comparison-table {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .section-title, .comparison-section h2 {
    font-size: 2rem;
  }
  .comparison-table th,
  .comparison-table td {
    padding: 10px;
    font-size: 0.85rem;
  }
  .modal-content {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title, .comparison-section h2 {
    font-size: 1.8rem;
  }
  .tier-card {
    padding: 20px;
  }
  .tier-card h2 {
    font-size: 1.5rem;
  }
  .cta-section h2 {
    font-size: 1.8rem;
  }
}
</style>