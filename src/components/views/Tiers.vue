<template>
  <div>
    <!-- Tiers Section -->
    <div class="tiers-section" id="tiers">
      <h1 class="section-title">Our Service Tiers</h1>

      <!-- Tiers Container -->
      <div class="tiers-container">
        <!-- Use v-for to render tier cards from tiersData array -->
        <div
          v-for="(tier, index) in tiersData"
          :key="tier.name"
          class="tier-card"
          :ref="'tier' + (index + 1)"
        >
          <h2>{{ tier.name }}</h2>
          <p>{{ tier.shortDescription }}</p>
          <ul class="feature-list">
            <li v-for="(feature, idx) in tier.features" :key="idx">
              {{ feature }}
            </li>
          </ul>
          <p class="price">{{ tier.price }}</p>
          <!-- Two buttons: "Choose" and "More Info" (optional) -->
          <button class="choose-button">Choose {{ tier.name }}</button>
          <button
            class="info-button"
            @click="openTierModal(index)"
          >
            More Info
          </button>
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
        </tbody>
      </table>
    </div>

    <!-- Tier Modal (only displayed if selectedTierIndex is not null) -->
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
          <ul class="advanced-features">
            <li v-for="(advFeature, idx) in currentTier?.advancedFeatures" :key="idx">
              {{ advFeature }}
            </li>
          </ul>
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
  name: 'Tiers',
  setup() {
    // Tier Refs
    const tier1 = ref(null);
    const tier2 = ref(null);
    const tier3 = ref(null);

    // NEW: Tier Data Array (basic & advanced info)
    const tiersData = ref([
      {
        name: 'Companion Care',
        shortDescription: 'Perfect for light assistance and companionship.',
        price: '$25/hour',
        features: [
          'Light Housekeeping',
          'Meal Preparation Assistance',
          'Medication Reminders',
          'Friendly Social Interaction',
        ],
        // Additional details to show in modal
        longDescription:
          'Our Companion Care tier focuses on maintaining a safe, comfortable, and socially engaging environment. This plan is great for individuals who need assistance with day-to-day tasks but still value their independence.',
        advancedFeatures: [
          'Flexible scheduling options',
          'Routine wellness checks',
          'Access to caregiver notes & progress updates',
        ],
      },
      {
        name: 'Guiding Star',
        shortDescription: 'Offering personalized care with enhanced services.',
        price: '$40/hour',
        features: [
          'Everything in Companion Care',
          'Transportation to Appointments',
          'Errand Assistance & Grocery Shopping',
          'Medication Management',
        ],
        longDescription:
          'Guiding Star expands on Companion Care to include transportation, errands, and full medication management. This tier is designed for clients needing more comprehensive assistance throughout the day.',
        advancedFeatures: [
          'Regular care plan reviews',
          'Coordination with medical professionals',
          'Enhanced safety monitoring',
        ],
      },
      {
        name: 'North Star Premium',
        shortDescription: 'Our best and most comprehensive care package.',
        price: '$60/hour',
        features: [
          'Everything in Guiding Star',
          '24/7 On-Call Support',
          'Advanced Personal Care Assistance',
          'Regular Care Coordination with Family',
        ],
        longDescription:
          'North Star Premium provides a highly personalized plan and round-the-clock support. This tier is perfect for those needing constant care or higher-level medical and personal assistance.',
        advancedFeatures: [
          'Personalized meal plans & dietary tracking',
          'Frequent progress reports & family updates',
          'In-home safety & accessibility evaluations',
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
  padding: 100px 20px 50px;
  background-color: #f8f9fa;
  margin-top: 60px; /* space under a fixed navbar if you have one */
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
  position: relative;
  /* Use :ref="'tier' + index" in the template so GSAP can target them individually if needed */
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
.choose-button,
.info-button {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 5px;
  transition: background-color 0.3s;
}
.choose-button:hover,
.info-button:hover {
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
  padding: 2rem;
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
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0.5rem 0 1rem;
}
.more-info {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #444;
}
.advanced-features {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
}
.advanced-features li {
  margin: 0.3rem 0;
  color: #666;
}

/* Responsive Layout */
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
