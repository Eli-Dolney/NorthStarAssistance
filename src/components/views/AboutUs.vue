<template>
  <div class="about-page">
    <!-- Hero/Banner Section -->
    <section class="hero-section" ref="heroSection">
      <div class="hero-content">
        <h1>Welcome to <span class="highlight">NorthStar</span> Assistance</h1>
        <p>Guiding you with compassionate care, just like the North Star guides travelers home.</p>
        <router-link to="/contact" class="cta-button">
          Start Your Care Journey
        </router-link>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="story-section" ref="storySection">
      <div class="container">
        <h2>Our Minnesota <span class="highlight">Roots</span></h2>
        <div class="story-content">
          <div class="story-image">
            <img src="/src/assets/north.jpg" alt="Minnesota landscape" class="rounded-image" />
          </div>
          <div class="story-text">
            <p>
              Founded by a group of friends with deep Minnesota roots, NorthStar Assistance 
              was born from our collective passion for elder care and community service.
            </p>
            <p>
              Just as Minnesota's natural beauty provides comfort and inspiration, 
              we aim to bring that same warmth and reliability into the homes of those 
              we serve. Our name reflects both our Minnesota heritage and our commitment 
              to being a guiding light for families navigating the care journey.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="content-block" ref="block1">
      <div class="container">
        <div class="block-content">
          <div class="block-text">
            <h2>Our <span class="highlight">Mission</span></h2>
            <p>
              At NorthStar Assistance, our mission is to deliver compassionate,
              reliable, and personalized PCA services that empower individuals
              to live safely and independently at home.
            </p>
            <p>
              We believe that quality care should feel like coming home to a warm 
              hearth after a Minnesota winter day — comfortable, reassuring, and 
              full of genuine human connection.
            </p>
          </div>
          <div class="block-image">
            <img src="/src/assets/NSA.jpg" alt="Caring hands" class="rounded-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="content-block reverse" ref="block2">
      <div class="container">
        <div class="block-content">
          <div class="block-image">
            <img src="/src/assets/minnesota.jpg" alt="Minnesota lake scene" class="rounded-image" />
          </div>
          <div class="block-text">
            <h2>Our <span class="highlight">Values</span></h2>
            <p>
              We believe in a client-first approach, rooted in empathy, respect,
              and professionalism. Like the steadfast pines of northern Minnesota,
              we stand strong in our commitment to:
            </p>
            <ul class="values-list">
              <li><span class="value-icon">★</span> Dignity and respect for every individual</li>
              <li><span class="value-icon">★</span> Independence through supportive care</li>
              <li><span class="value-icon">★</span> Community connection and belonging</li>
              <li><span class="value-icon">★</span> Transparent and honest communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-section" ref="whyUsSection">
      <div class="container">
        <h2>Why Choose <span class="highlight">NorthStar</span></h2>
        <div class="cards-container">
          <div class="choice-card">
            <div class="card-icon">
              <span class="material-icon">★</span>
            </div>
            <h3>Personalized Care</h3>
            <p>
              Customized care plans that adapt to your unique needs, preferences, and lifestyle.
            </p>
          </div>
          <div class="choice-card">
            <div class="card-icon">
              <span class="material-icon">★</span>
            </div>
            <h3>Minnesota Nice</h3>
            <p>
              Our team embodies the warmth, friendliness, and reliability that Minnesota is known for.
            </p>
          </div>
          <div class="choice-card">
            <div class="card-icon">
              <span class="material-icon">★</span>
            </div>
            <h3>24/7 Support</h3>
            <p>
              Around-the-clock availability for peace of mind, just like the North Star that's always there.
            </p>
          </div>
          <div class="choice-card">
            <div class="card-icon">
              <span class="material-icon">★</span>
            </div>
            <h3>Licensed & Insured</h3>
            <p>
              Fully certified caregivers with comprehensive insurance coverage for your protection.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Team Section -->
    <section class="team-section" ref="teamSection">
      <div class="container">
        <h2>Meet Our <span class="highlight">Care Team</span></h2>
        <p class="team-intro">
          Our dedicated caregivers are at the heart of NorthStar Assistance.
          Each team member brings experience, compassion, and a genuine
          commitment to improving lives.
        </p>
        <div class="team-cards">
          <div class="team-card" v-for="member in team" :key="member.name">
            <div class="team-image">
              <img :src="member.image" alt="Team Member" />
            </div>
            <div class="team-info">
              <h3>{{ member.name }}</h3>
              <p class="role">{{ member.role }}</p>
              <p class="bio">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section" ref="testimonialSection">
      <div class="container">
        <h2>Client <span class="highlight">Stories</span></h2>
        <div class="testimonial-slider">
          <div class="testimonial-card">
            <div class="quote-mark">"</div>
            <p class="testimonial-text">
              The team at NorthStar has become like family to my mother. Their care goes beyond just assistance - they bring joy and companionship to her everyday life.
            </p>
            <p class="testimonial-author">— Sarah J., daughter of client</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section" ref="faqSection">
      <div class="container">
        <h2>Frequently Asked <span class="highlight">Questions</span></h2>
        <div class="faq-wrapper">
          <div class="faq-item" v-for="(item, idx) in faqItems" :key="idx">
            <button class="faq-question" @click="toggleFAQ(idx)" :class="{ 'active': activeFAQ === idx }">
              {{ item.question }}
              <span class="faq-icon">{{ activeFAQ === idx ? '−' : '+' }}</span>
            </button>
            <transition name="accordion">
              <div v-if="activeFAQ === idx" class="faq-answer">
                <p>{{ item.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" ref="ctaSection">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Experience the <span class="highlight">NorthStar</span> Difference?</h2>
          <p>
            Let's start a conversation about how we can support you or your loved one with compassionate, 
            Minnesota-hearted care.
          </p>
          <router-link to="/contact" class="cta-button">Contact Us Today</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heroSection = ref(null);
const storySection = ref(null);
const block1 = ref(null);
const block2 = ref(null);
const teamSection = ref(null);
const whyUsSection = ref(null);
const testimonialSection = ref(null);
const faqSection = ref(null);
const ctaSection = ref(null);

// Placeholder data for team members (replace with real data later)
const team = [
  {
    name: 'John Doe',
    role: 'Lead Caregiver',
    bio: 'John has over a decade of experience in home health, specialized in elderly care and creating meaningful connections.',
    image: '/src/assets/lights.jpg', // Use your actual image path
  },
  {
    name: 'Jane Smith',
    role: 'PCA Specialist',
    bio: 'Jane is passionate about helping clients stay active and engaged in their daily lives through personalized care plans.',
    image: '/src/assets/lights.jpg', // Use your actual image path
  },
  {
    name: 'Carlos Reyes',
    role: 'Care Coordinator',
    bio: 'Carlos ensures smooth communication between families and caregivers, bringing positive energy to every interaction.',
    image: '/src/assets/lights.jpg', // Use your actual image path
  },
];

// FAQ items
const faqItems = ref([
  {
    question: 'What areas of Minnesota do you serve?',
    answer: 'We currently serve the Twin Cities metro area and surrounding counties. Contact us to check if we operate in your specific location.',
  },
  {
    question: 'What types of PCA services do you offer?',
    answer: 'We offer personal care assistance, mobility support, medication reminders, light housekeeping, meal preparation, companionship, transportation to appointments, and specialized dementia care.',
  },
  {
    question: 'How are your caregivers trained and vetted?',
    answer: 'All NorthStar caregivers undergo comprehensive background checks, reference verification, and specialized training in elderly care, fall prevention, and emergency response.',
  },
  {
    question: 'How do I get started with your services?',
    answer: 'Getting started is easy! Contact us via phone or our website form. We will schedule an initial consultation to understand your needs, then design a personalized care plan.',
  },
]);

// Track which FAQ item is open
const activeFAQ = ref(null);
const toggleFAQ = (idx) => {
  activeFAQ.value = activeFAQ.value === idx ? null : idx;
};

onMounted(() => {
  // Animation setup for each section
  const sections = [
    heroSection.value,
    storySection.value,
    block1.value,
    block2.value,
    whyUsSection.value,
    teamSection.value,
    testimonialSection.value,
    faqSection.value,
    ctaSection.value
  ];

  sections.forEach((section) => {
    if (section) {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
        duration: 1,
        opacity: 0,
        y: 50,
      });
    }
  });
});
</script>

<style scoped>
/* Page Wrapper */
.about-page {
  width: 100%;
  margin: 0 auto;
  color: #333;
  font-family: 'Open Sans', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #193e1f;
  text-align: center;
  font-weight: 700;
}

.highlight {
  color: #f8c630;
}

/* Hero/Banner Section */
.hero-section {
  background: linear-gradient(rgba(25, 62, 31, 0.8), rgba(25, 62, 31, 0.8)), url('/src/assets/north.jpg') no-repeat center center;
  background-size: cover;
  color: #fff;
  text-align: center;
  padding: 120px 20px;
  margin-bottom: 60px;
  position: relative;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3.2rem;
  margin-bottom: 20px;
  font-weight: 800;
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 30px;
  line-height: 1.6;
  font-weight: 300;
}

.cta-button {
  background-color: #f8c630;
  border: none;
  border-radius: 50px;
  color: #193e1f;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-block;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  background-color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Story Section */
.story-section {
  padding: 60px 0;
}

.story-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
}

.story-image {
  flex: 1;
  min-width: 300px;
}

.story-text {
  flex: 1;
  min-width: 300px;
}

.story-text p {
  margin-bottom: 1.2rem;
  line-height: 1.7;
  font-size: 1.1rem;
}

.rounded-image {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.rounded-image:hover {
  transform: scale(1.02);
}

/* Content Blocks */
.content-block {
  padding: 80px 0;
  background-color: #f9f7f2; /* Warm, light background */
}

.content-block:nth-child(odd) {
  background-color: #ffffff;
}

.block-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
}

.block-text {
  flex: 1;
  min-width: 300px;
}

.block-text h2 {
  text-align: left;
  margin-bottom: 1.2rem;
}

.block-text p {
  margin-bottom: 1.2rem;
  line-height: 1.7;
  font-size: 1.1rem;
  color: #444;
}

.block-image {
  flex: 1;
  min-width: 300px;
}

.block-content.reverse {
  flex-direction: row-reverse;
}

/* Values list */
.values-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.values-list li {
  margin-bottom: 0.8rem;
  padding-left: 2rem;
  position: relative;
  line-height: 1.5;
  font-size: 1.05rem;
  color: #444;
}

.value-icon {
  position: absolute;
  left: 0;
  top: 0;
  color: #f8c630;
  font-size: 1.2rem;
}

/* Why Choose Us */
.why-choose-section {
  padding: 80px 0;
  background-color: #193e1f;
  color: #fff;
}

.why-choose-section h2 {
  color: #fff;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  margin-top: 3rem;
}

.choice-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 30px 25px;
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s, background 0.3s;
}

.choice-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.2);
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f8c630;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.material-icon {
  font-size: 1.8rem;
  color: #193e1f;
}

.choice-card h3 {
  margin-bottom: 15px;
  font-size: 1.3rem;
  color: #f8c630;
}

.choice-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: #eaeaea;
}

/* Team Section */
.team-section {
  padding: 80px 0;
  background-color: #ffffff;
}

.team-intro {
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
}

.team-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
}

.team-card {
  background: #f9f7f2;
  border-radius: 12px;
  overflow: hidden;
  width: 330px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.team-image {
  height: 200px;
  overflow: hidden;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.team-card:hover .team-image img {
  transform: scale(1.05);
}

.team-info {
  padding: 25px;
}

.team-info h3 {
  font-size: 1.4rem;
  color: #193e1f;
  margin-bottom: 8px;
}

.team-info .role {
  color: #f8c630;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 1rem;
}

.team-info .bio {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials-section {
  padding: 80px 0;
  background-color: #f9f7f2;
}

.testimonial-slider {
  max-width: 850px;
  margin: 30px auto 0;
}

.testimonial-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 40px 35px;
  position: relative;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.quote-mark {
  position: absolute;
  top: 20px;
  left: 25px;
  font-size: 4rem;
  line-height: 1;
  color: #f8c630;
  opacity: 0.3;
  font-family: Georgia, serif;
}

.testimonial-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 20px;
  font-style: italic;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  font-weight: 600;
  color: #193e1f;
  text-align: right;
}

/* FAQ Section */
.faq-section {
  padding: 80px 0;
  background-color: #ffffff;
}

.faq-wrapper {
  max-width: 900px;
  margin: 40px auto 0;
}

.faq-item {
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.faq-question {
  width: 100%;
  background-color: #f9f7f2;
  color: #193e1f;
  padding: 20px 25px;
  text-align: left;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

.faq-question:hover, .faq-question.active {
  background-color: #f3eee0;
}

.faq-icon {
  font-size: 1.5rem;
  color: #f8c630;
  font-weight: 300;
}

.faq-answer {
  background-color: #ffffff;
  padding: 20px 25px;
  color: #555;
  font-size: 1rem;
  line-height: 1.7;
  border-top: 1px solid #f0e9d9;
}

.accordion-enter-active, .accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
  max-height: 300px;
  overflow: hidden;
}

.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: linear-gradient(rgba(25, 62, 31, 0.9), rgba(25, 62, 31, 0.9)), url('/src/assets/lights.jpg') no-repeat center center;
  background-size: cover;
  text-align: center;
  color: #ffffff;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 35px;
  line-height: 1.6;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1.1rem;
  }
  
  .content-block {
    padding: 50px 0;
  }
  
  h2 {
    font-size: 1.8rem;
  }
  
  .block-content {
    gap: 30px;
  }
  
  .block-text p, .story-text p {
    font-size: 1rem;
  }
  
  .team-intro {
    font-size: 1rem;
  }
  
  .team-card {
    width: 100%;
    max-width: 350px;
  }
  
  .testimonial-text {
    font-size: 1rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .cta-content p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 80px 20px;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .choice-card {
    min-width: 100%;
  }
  
  .cta-button {
    padding: 12px 25px;
    font-size: 1rem;
  }
}
</style>