<template>
  <div class="contact-page">
    <!-- Hero / Banner Section -->
    <section class="contact-hero" ref="heroSection">
      <div class="hero-content">
        <h1>Contact NorthStar Assistance</h1>
        <p>Your first step toward better care is just a click away.</p>
      </div>
    </section>

    <!-- Main Contact Form & Info Section -->
    <section class="contact-section" ref="contactSection">
      <div class="contact-info">
        <h2>Get In Touch</h2>
        <p>
          Have questions about our services, pricing, or anything else?
          Fill out the form or reach us directly via phone or email.
        </p>
        <ul class="info-list">
          <li>
            <strong>Phone:</strong> <span>(123) 456-7890</span>
          </li>
          <li>
            <strong>Email:</strong> <span>info@northstarassistance.com</span>
          </li>
          <li>
            <strong>Address:</strong> <span>1234 Care Lane, Minneapolis, MN</span>
          </li>
        </ul>
      </div>
      <div class="contact-form">
        <h2>Send a Message</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="form.name" type="text" id="name" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="form.email" type="email" id="email" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea v-model="form.message" id="message" rows="5" required></textarea>
          </div>

          <button class="submit-btn" type="submit">Send</button>
        </form>
      </div>
    </section>

    <!-- Social / External Links Section -->
    <section class="social-section" ref="socialSection">
      <h2>Connect With Us</h2>
      <p>Stay connected through our social platforms.</p>
      <div class="social-links">
        <!-- Example placeholders below; replace with your actual icons/links -->
        <div
          class="social-card"
          v-for="(contact, index) in contacts"
          :key="index"
        >
          <h3>{{ contact.name }}</h3>
          <a :href="contact.link" target="_blank">
            <font-awesome-icon :icon="contact.icon" size="3x" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Contact',
  setup() {
    // Refs for sections
    const heroSection = ref(null);
    const contactSection = ref(null);
    const socialSection = ref(null);

    // Simple reactive form model
    const form = reactive({
      name: '',
      email: '',
      message: '',
    });

    // Placeholder social links (similar to your existing data)
    const contacts = [
      {
        name: 'Email',
        link: 'mailto:elid3dev@gmail.com',
        icon: ['fas', 'envelope'],
      },
      {
        name: 'GitHub',
        link: 'https://bit.ly/Github-Eli',
        icon: ['fab', 'github-square'],
      },
      {
        name: 'LinkedIn',
        link: 'https://bit.ly/Linkedin-Eli',
        icon: ['fab', 'linkedin'],
      },
      {
        name: 'Instagram',
        link: 'https://bit.ly/Insta-Eli',
        icon: ['fab', 'instagram-square'],
      },
    ];

    // GSAP animations on mount
    onMounted(() => {
      // Hero fade-in
      gsap.from(heroSection.value, {
        scrollTrigger: {
          trigger: heroSection.value,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
        duration: 1,
        opacity: 0,
        y: 50,
      });

      // Contact section fade/slide in
      gsap.from(contactSection.value, {
        scrollTrigger: {
          trigger: contactSection.value,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
        duration: 1,
        opacity: 0,
        y: 50,
      });

      // Social section fade in
      gsap.from(socialSection.value, {
        scrollTrigger: {
          trigger: socialSection.value,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
        duration: 1,
        opacity: 0,
        y: 50,
      });
    });

    // A fake form handler
    const submitForm = () => {
      // You can integrate your form submission logic (e.g. a fetch or axios post)
      console.log('Form submitted:', form);
      alert(`Thanks for reaching out, ${form.name}!`);
      // Reset form
      form.name = '';
      form.email = '';
      form.message = '';
    };

    return {
      heroSection,
      contactSection,
      socialSection,
      form,
      submitForm,
      contacts,
    };
  },
};
</script>

<style scoped>
/* Page Wrapper */
.contact-page {
  font-family: Arial, sans-serif;
  color: #444;
}

/* Hero Section */
.contact-hero {
  background: url('/src/assets/north.jpg') no-repeat center center fixed;
  text-align: center;
  padding: 80px 20px;
  color: #fff;
  margin-bottom: 50px;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 40px;
}

/* Contact Section */
.contact-section {
  display: flex;
  justify-content: center;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto 60px;
  flex-wrap: wrap;
  padding: 0 20px;
}

.contact-info,
.contact-form {
  flex: 1 1 400px;
  min-width: 300px;
}

.contact-info h2,
.contact-form h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #007bff;
}

.contact-info p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.info-list {
  list-style-type: none;
  padding: 0;
}

.info-list li {
  margin: 8px 0;
}

/* Contact Form */
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  font-size: 1rem;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.submit-btn {
  background-color: #007bff;
  color: #fff;
  padding: 14px 20px;
  border: none;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  max-width: 200px;
  transition: background 0.3s;
}
.submit-btn:hover {
  background-color: #0056b3;
}

/* Social Section */
.social-section {
  text-align: center;
  margin-bottom: 80px;
  padding: 0 20px;
}

.social-section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #007bff;
}

.social-section p {
  margin-bottom: 40px;
  font-size: 1.1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.social-card {
  width: 150px;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;
}

.social-card:hover {
  transform: translateY(-5px);
  background-color: #007bff;
}

.social-card h3 {
  margin-bottom: 10px;
  color: #333;
}

.social-card a {
  color: #000;
  transition: color 0.3s;
}
.social-card:hover a {
  color: #fff;
}

/* Media Queries */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }
  .contact-section {
    margin-bottom: 30px;
    gap: 30px;
  }
  .info-list li {
    margin: 5px 0;
  }
  .social-links {
    gap: 1rem;
  }
}
</style>
