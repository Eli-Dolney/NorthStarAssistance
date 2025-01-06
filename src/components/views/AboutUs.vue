<template>
  <div class="about-page">
    <!-- Hero/Banner Section -->
    <section class="hero-section" ref="heroSection">
      <div class="hero-content">
        <h1>Welcome to NorthStar Assistance!</h1>
        <p>We provide quality PCA services tailored to your needs.</p>
        <button class="cta-button">Contact Us</button>
      </div>
    </section>

    <!-- Alternate Content Block #1 -->
    <section class="content-block" ref="block1">
      <div class="block-text">
        <h2>Our Mission</h2>
        <p>
          At NorthStar Assistance, our mission is to deliver compassionate,
          reliable, and personalized PCA services that empower individuals
          to live safely and independently at home.
        </p>
      </div>
      <div class="block-image">
        <img
          src="https://via.placeholder.com/600x400.png?text=Mission+Image"
          alt="Mission"
        />
      </div>
    </section>

    <!-- Alternate Content Block #2 (image on left, text on right) -->
    <section class="content-block reverse" ref="block2">
      <div class="block-image">
        <img
          src="https://via.placeholder.com/600x400.png?text=Values+Image"
          alt="Values"
        />
      </div>
      <div class="block-text">
        <h2>Our Values</h2>
        <p>
          We believe in a client-first approach, rooted in empathy, respect,
          and professionalism. Our caregivers are trained to provide both
          physical and emotional support, ensuring peace of mind for our
          clients and their loved ones.
        </p>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="content-block" ref="whyUsSection">
      <div class="block-text">
        <h2>Why Choose NorthStar Assistance</h2>
        <ul class="why-us-list">
          <li>Flexible, personalized care plans tailored to each individual</li>
          <li>Highly trained, compassionate staff with years of experience</li>
          <li>24/7 on-call support for peace of mind</li>
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

    <!-- Meet the Team Section -->
    <section class="team-section" ref="teamSection">
      <h2>Meet the Team</h2>
      <p class="team-intro">
        Our dedicated caregivers are at the heart of NorthStar Assistance.
        Each team member brings experience, compassion, and a genuine
        commitment to improving lives.
      </p>
      <div class="team-cards">
        <div class="team-card" v-for="member in team" :key="member.name">
          <img :src="member.image" alt="Team Member" />
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
          <p class="bio">{{ member.bio }}</p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section" ref="faqSection">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-item" v-for="(item, idx) in faqItems" :key="idx">
        <button class="faq-question" @click="toggleFAQ(idx)">
          {{ item.question }}
        </button>
        <transition name="accordion">
          <p v-if="activeFAQ === idx" class="faq-answer">{{ item.answer }}</p>
        </transition>
      </div>
    </section>
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
    const heroSection = ref(null);
    const block1 = ref(null);
    const block2 = ref(null);
    const teamSection = ref(null);
    const whyUsSection = ref(null);
    const faqSection = ref(null);

    // Placeholder data for team members (replace with real data later)
    const team = [
      {
        name: 'John Doe',
        role: 'Lead Caregiver',
        bio: 'John has over a decade of experience in home health, specialized in elderly care.',
        image: 'https://via.placeholder.com/150.png?text=John',
      },
      {
        name: 'Jane Smith',
        role: 'PCA Specialist',
        bio: 'Jane is passionate about helping clients stay active and engaged in their daily lives.',
        image: 'https://via.placeholder.com/150.png?text=Jane',
      },
      {
        name: 'Carlos Reyes',
        role: 'PCA Trainee',
        bio: 'Carlos is committed to continuing education and brings positive energy to every visit.',
        image: 'https://via.placeholder.com/150.png?text=Carlos',
      },
    ];

    // FAQ items
    const faqItems = ref([
      {
        question: 'Do you serve my area?',
        answer: 'We serve most of the surrounding counties. Contact us to see if we operate in your region.',
      },
      {
        question: 'What types of PCA services are offered?',
        answer: 'We offer daily living assistance, companionship, specialized medical support, and more.',
      },
      {
        question: 'How do I get started?',
        answer: 'Get in touch via our contact form or phone. We’ll schedule an assessment to design a care plan.',
      },
    ]);

    // Track which FAQ item is open
    const activeFAQ = ref(null);
    const toggleFAQ = (idx) => {
      activeFAQ.value = activeFAQ.value === idx ? null : idx;
    };

    onMounted(() => {
      // Hero Section
      gsap.from(heroSection.value, {
        scrollTrigger: {
          trigger: heroSection.value,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
        duration: 1.2,
        opacity: 0,
        y: 50,
      });

      // Content blocks
      [block1.value, block2.value, whyUsSection.value].forEach((block) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
          duration: 1,
          opacity: 0,
          y: 50,
        });
      });

      // Team section
      gsap.from(teamSection.value, {
        scrollTrigger: {
          trigger: teamSection.value,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
        duration: 1,
        opacity: 0,
        y: 50,
      });

      // FAQ section
      gsap.from(faqSection.value, {
        scrollTrigger: {
          trigger: faqSection.value,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
        duration: 1,
        opacity: 0,
        y: 50,
      });
    });

    return {
      heroSection,
      block1,
      block2,
      whyUsSection,
      teamSection,
      faqSection,
      team,
      faqItems,
      activeFAQ,
      toggleFAQ,
    };
  },
};
</script>

<style scoped>
/* Page Wrapper */
.about-page {
  width: 100%;
  margin: 0 auto;
  padding-top: 60px; /* If you have a fixed global nav, add top padding */
  font-family: sans-serif;
}

/* Hero/Banner Section */
.hero-section {
  background: url('/src/assets/north.jpg') no-repeat center center fixed;
  color: #fff;
  text-align: center;
  padding: 100px 20px;
  margin-bottom: 50px;
  position: relative;
}
.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}
.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}
.cta-button {
  background-color: #007bff;
  border: none;
  border-radius: 30px;
  color: #fff;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}
.cta-button:hover {
  background-color: #0056b3;
}

/* Content Blocks */
.content-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 50px auto;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 20px;
}
.content-block .block-text {
  flex: 1;
  min-width: 300px;
}
.content-block .block-text h2 {
  font-size: 2rem;
  color: beige;
  margin-bottom: 15px;
}
.content-block .block-text p {
  font-size: 1.1rem;
  color: beige;
  line-height: 1.6;
}
.content-block .block-image {
  flex: 1;
  min-width: 300px;
  text-align: center;
}
.content-block .block-image img {
  max-width: 100%;
  border-radius: 8px;
}
.content-block.reverse {
  flex-direction: row-reverse;
}

/* Why Choose Us */
.why-us-list {
  list-style: none;
  padding: 0;
  margin: 1em 0;
}
.why-us-list li {
  margin-bottom: 0.5em;
  color: beige;
}

/* Team Section */
.team-section {
  max-width: 1200px;
  margin: 80px auto;
  text-align: center;
  padding: 0 20px;
}
.team-section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: beige;
}
.team-intro {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 40px;
}
.team-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
.team-card {
  background: beige;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 270px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.team-card img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}
.team-card h3 {
  font-size: 1.3rem;
  color: #007bff;
  margin-bottom: 5px;
}
.team-card .role {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 10px;
}
.team-card .bio {
  font-size: 0.9rem;
  color: #777;
}

/* FAQ Section */
.faq-section {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
}
.faq-section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: beige;
  text-align: center;
}
.faq-item {
  margin-bottom: 1rem;
}
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
}
.faq-answer {
  background-color: #404040;
  margin: 0.5em 0 0;
  padding: 1em;
  border-radius: 5px;
  color: #eee;
  font-size: 0.95rem;
}
.accordion-enter-active, .accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

/* Responsive Layout Tweaks */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }
  .content-block {
    margin: 30px auto;
  }
  .team-section {
    margin: 50px auto;
  }
}
</style>
