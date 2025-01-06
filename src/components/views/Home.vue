<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Testimonials array
const testimonials = ref([
  { name: 'John Smith', text: '“NorthStar Assistance has been a lifesaver for our family. Their care is unmatched.”' },
  { name: 'Sarah Johnson', text: '“They made a real difference in my mother’s daily routine. Highly recommend!”' },
  { name: 'Mike Thompson', text: '“Professional and compassionate from day one. We couldn’t ask for more.”' },
]);

// Current testimonial index
const currentTestimonialIndex = ref(0);

// FAQ items
const faqItems = ref([
  {
    question: 'What services do you provide?',
    answer: 'We offer a wide range of personal care, companionship, and specialized medical support options tailored to individual needs.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major insurances including Medicaid. Please contact us to discuss your specific coverage.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out via our contact page or phone. We’ll schedule an in-home assessment to discuss a care plan that suits you.',
  },
  {
    question: 'Can I change my caregiver if I’m not satisfied?',
    answer: 'Absolutely. We strive to match you with a caregiver that suits your needs. If you ever want to switch, we’ll accommodate as quickly as possible.',
  },
  {
    question: 'Are your caregivers trained in memory care or special conditions?',
    answer: 'Yes, we have caregivers specifically trained in dementia, Parkinson’s, and other specialized care areas. We’ll match you with the best fit.',
  },
]);

// Track which FAQ item is open
const activeFAQ = ref<null | number>(null);
const toggleFAQ = (idx: number) => {
  activeFAQ.value = activeFAQ.value === idx ? null : idx;
};

// On mount animations
onMounted(() => {
  // Basic timeline for the sections
  const tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });
  tl.from('.centerpiece', { y: 50 })
    .from('.who-we-are', { y: 50, opacity: 0 }, '+=0.3')
    .from('.services-section', { y: 50, opacity: 0 }, '+=0.3')
    .from('.why-us-section', { y: 50, opacity: 0 }, '+=0.3')
    .from('.testimonials-section', { y: 50, opacity: 0 }, '+=0.3')
    .from('.faq-section', { y: 50, opacity: 0 }, '+=0.3')
    .from('.contact-section', { y: 50, opacity: 0 }, '+=0.3');

  // Rotate testimonials every 10 seconds
  setInterval(() => {
    currentTestimonialIndex.value =
      (currentTestimonialIndex.value + 1) % testimonials.value.length;
  }, 10000); 
});
</script>

<template>
  <!-- Parallax Hero Section -->
  <section id="home" class="parallax">
    <div class="centerpiece">
      <img src="/src/assets/NSA.jpg" alt="Minnesota Landscape" class="logo" />
      <h1>Welcome to NorthStar Assistance</h1>
      <p>Providing quality PCA services tailored to your needs.</p>
    </div>
  </section>

  <!-- Who We Are -->
  <section class="content-block who-we-are">
    <div class="block-text">
      <h2>Who We Are</h2>
      <p>
        NorthStar Assistance specializes in providing compassionate and
        personalized home care for individuals in need. Our team is dedicated
        to ensuring comfort, safety, and a high quality of life for our clients.
      </p>
    </div>
    <div class="block-image">
      <img
        src="https://via.placeholder.com/600x400.png?text=Who+We+Are"
        alt="Who We Are"
      />
    </div>
  </section>

  <!-- Our Services -->
  <section class="content-block services-section reverse">
    <div class="block-image">
      <img
        src="https://via.placeholder.com/600x400.png?text=Our+Services"
        alt="Our Services"
      />
    </div>
    <div class="block-text">
      <h2>Our Services</h2>
      <p>
        We provide a wide range of home care services, including personal care,
        companionship, and specialized medical support tailored to each client.
        Whether you need a few hours a day or 24/7 assistance, our flexible
        programs can be customized to fit your lifestyle.
      </p>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="content-block why-us-section">
    <div class="block-text">
      <h2>Why Choose Us</h2>
      <ul class="why-us-list">
        <li>Compassionate, highly trained caregivers</li>
        <li>Flexible scheduling and customizable care plans</li>
        <li>24/7 support for peace of mind</li>
        <li>Licensed and insured for your protection</li>
      </ul>
    </div>
    <div class="block-image">
      <img
        src="https://via.placeholder.com/600x400.png?text=Why+Choose+Us"
        alt="Why Choose Us"
      />
    </div>
  </section>

  <!-- Testimonials Slider -->
  <section class="content-block testimonials-section">
    <h2>Testimonials</h2>
    <transition name="fade">
      <div
        key="testimonial-{{ currentTestimonialIndex }}"
        class="testimonial-slide"
      >
        <blockquote>
          {{ testimonials[currentTestimonialIndex].text }}
        </blockquote>
        <cite>- {{ testimonials[currentTestimonialIndex].name }}</cite>
      </div>
    </transition>
  </section>

  <!-- FAQ Section -->
  <section class="content-block faq-section">
    <h2>Frequently Asked Questions</h2>
    <div 
      v-for="(item, idx) in faqItems" 
      :key="idx" 
      class="faq-item"
    >
      <!-- 
        Toggle the active class on the button to style the plus/minus icon 
        depending on whether this FAQ is open.
      -->
      <button 
        class="faq-question" 
        :class="{ active: activeFAQ === idx }" 
        @click="toggleFAQ(idx)"
      >
        {{ item.question }}
      </button>
      <transition name="accordion">
        <div v-if="activeFAQ === idx" class="faq-answer">
          <p>{{ item.answer }}</p>
        </div>
      </transition>
    </div>
  </section>

  <!-- Contact / CTA -->
  <section class="content-block contact-section">
    <h2>Get in Touch</h2>
    <p>
      Ready to get started? Contact us today to learn more about how we can
      support your needs.
    </p>
    <router-link to="/contact" class="contact-btn">Contact Us</router-link>
  </section>
</template>

<style scoped>
/* Parallax (Hero) Section */
.parallax {
  height: 100vh;
  background: url('/src/assets/lights.jpg') no-repeat center center fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.centerpiece {
  background: rgba(0, 0, 0, 0.5);
  padding: 2em;
  border-radius: 10px;
  text-align: center;
  max-width: 800px;
  width: 90%;
  color: #fff;
}
.logo {
  max-width: 500px;
  margin-bottom: 1em;
}

/* Content Blocks */
.content-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 3em auto;
  padding: 2em;
  background-color: #545555;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  flex-wrap: wrap; 
  gap: 2rem;
}
.content-block.reverse {
  flex-direction: row-reverse;
}

/* Block Text/Image */
.block-text {
  flex: 1;
  min-width: 300px;
}
.block-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1em;
  color: #f29f05;
}
.block-text p {
  font-size: 1.2rem;
  color: #eee;
  line-height: 1.5;
}
.block-image {
  flex: 1;
  min-width: 300px;
  text-align: center;
}
.block-image img {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Why Choose Us */
.why-us-list {
  margin: 1em 0;
  padding: 0;
  list-style: none;
}
.why-us-list li {
  margin-bottom: 0.5em;
  color: #eee;
}

/* Testimonials */
.testimonials-section {
  text-align: center;
}
.testimonial-slide {
  margin-top: 1em;
}
blockquote {
  font-style: italic;
  font-size: 1.3rem;
  line-height: 1.5;
  color: #f1f1f1;
}
cite {
  display: block;
  margin-top: 1em;
  color: #ddd;
  font-size: 1.1rem;
}
/* Fade transition for testimonial slides */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* FAQ Section */
.faq-section {
  width: 100%;
}
.faq-item {
  margin-bottom: 1rem;
}
/* The question button has a plus sign by default */
.faq-question {
  width: 100%;
  background-color: #333;
  color: #eee;
  padding: 1em;
  text-align: left;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  position: relative;
  transition: background-color 0.3s;
}
.faq-question:hover {
  background-color: #444;
}
.faq-question::after {
  content: '+';
  position: absolute;
  right: 1em;
  font-size: 1.2rem;
}
.faq-question.active::after {
  content: '-';
}
/* The expanded answer section */
.faq-answer {
  background-color: #404040;
  margin-top: 0.5em;
  padding: 1em;
  border-radius: 5px;
  color: #eee;
  font-size: 0.95rem;
}
/* Accordion transition */
.accordion-enter-active, .accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

/* Contact Button */
.contact-btn {
  display: inline-block;
  margin-top: 1em;
  padding: 0.75em 1.5em;
  background-color: #f29f05;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background 0.3s;
}
.contact-btn:hover {
  background-color: #ffb53f;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .parallax {
    background-attachment: scroll; /* disable fixed parallax on mobile */
  }

  .content-block {
    margin: 1em auto;
    padding: 1em;
  }

  .block-text h2 {
    font-size: 2rem;
  }
  .block-text p {
    font-size: 1rem;
  }
  blockquote {
    font-size: 1rem;
  }
}
</style>
