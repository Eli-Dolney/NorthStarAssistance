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
      <!-- Contact Info (phone, email, coverage area) -->
      <div class="contact-info">
        <h2>Get In Touch</h2>
        <p>
          Have questions about our services, pricing, or anything else?
          Fill out the form below or reach us directly via phone or email.
        </p>
        <ul class="info-list">
          <li>
            <strong>Phone:</strong>
            <span>(xxx) xxx-xxxx</span> 
            <!-- Placeholder; update when you have your phone plan -->
          </li>
          <li>
            <strong>Email:</strong>
            <span>info@northstarassistance.com</span>
          </li>
        </ul>

        <!-- Coverage Section -->
        <div class="coverage-section">
          <h3>Coverage Area</h3>
          <p>
            Based in Eagan, we proudly serve the Twin Cities and surrounding areas within
            an hour's drive. Whether you’re in Minnetonka, Stillwater, or anywhere
            north/south of Eagan, we’re here to help.
          </p>
          <p>
            Not sure if we can come to your location? Feel free to contact us, and
            we’ll do our best to accommodate your needs.
          </p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form">
        <h2>Send a Message</h2>
        <form @submit.prevent="submitForm" ref="contactForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="form.name" type="text" id="name" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="form.email" type="email" id="email" required />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input v-model="form.subject" type="text" id="subject" required />
          </div>

          <div class="form-group">
            <label for="phone">Phone (Optional)</label>
            <input v-model="form.phone" type="tel" id="phone" />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea v-model="form.message" id="message" rows="5" required></textarea>
          </div>

          <!-- Basic reCAPTCHA Placeholder -->
          <div class="captcha-placeholder">
            <p>[ reCAPTCHA Placeholder ]</p>
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
        <div class="social-card" v-for="(contact, index) in contacts" :key="index">
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
    // Refs for sections and form
    const heroSection = ref(null);
    const contactSection = ref(null);
    const socialSection = ref(null);
    const contactForm = ref(null);

    // Reactive form model
    const form = reactive({
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: '',
    });

    // Social links (placeholders; replace with your own)
    const contacts = [
      {
        name: 'Email',
        link: 'mailto:someone@example.com',
        icon: ['fas', 'envelope'],
      },
      {
        name: 'GitHub',
        link: 'https://github.com/YourGithub',
        icon: ['fab', 'github-square'],
      },
      {
        name: 'LinkedIn',
        link: 'https://linkedin.com/in/YourLinkedIn',
        icon: ['fab', 'linkedin'],
      },
      {
        name: 'Instagram',
        link: 'https://instagram.com/YourInstagram',
        icon: ['fab', 'instagram-square'],
      },
    ];

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

      // Contact section fade in
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

      // Animate form groups
      gsap.from(contactForm.value.querySelectorAll('.form-group'), {
        scrollTrigger: {
          trigger: contactForm.value,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        stagger: 0.2,
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

    // Basic form handler
    const submitForm = () => {
      console.log('Form submitted:', form);
      alert(
        `Thanks for reaching out, ${form.name}! We received your message on "${form.subject}".`
      );
      // Reset
      form.name = '';
      form.email = '';
      form.subject = '';
      form.phone = '';
      form.message = '';
    };

    return {
      heroSection,
      contactSection,
      socialSection,
      contactForm,
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
/* Coverage Section */
.coverage-section {
  margin-top: 30px;
}
.coverage-section h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #007bff;
}
.coverage-section p {
  margin: 5px 0;
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
.captcha-placeholder {
  background-color: #f5f5f5;
  padding: 1em;
  text-align: center;
  font-style: italic;
  border-radius: 5px;
  margin-top: -5px;
  margin-bottom: -5px;
  color: #666;
  font-size: 0.9rem;
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
