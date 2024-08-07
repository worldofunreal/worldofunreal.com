<template>
      <div class="privacy-container">
        
        <div class="privacy-container">
            <h1>Privacy Policy</h1>
      <section>
        <h2>Introduction</h2>
        <p>
          At World of Unreal, we respect the privacy of our users and are committed 
          to protecting it. This Privacy Policy explains how we collect, use, and 
          safeguard your information when you visit our website.
        </p>
      </section>
  
      <section>
        <h2>Information Collection and Use</h2>
        <p>
          We collect information such as email addresses for marketing purposes 
          when you use certain features of our applications. This information is 
          used to keep you informed about our products and services.
        </p>
      </section>
  
      <section>
        <h2>Data Protection</h2>
        <p>
          We take the protection of your data seriously. Appropriate measures are 
          in place to prevent unauthorized access, disclosure, modification, or 
          unauthorized destruction of the data.
        </p>
      </section>
  
      <section>
        <h2>Sharing of Information</h2>
        <p>
          We do not share your personal information with third parties, except as 
          necessary to provide our services or as required by law.
        </p>
      </section>
  
      <section>
        <h2>Your Rights</h2>
        <p>
          You have the right to access, update, or delete the information we have 
          on you. You can do this by contacting us directly.
        </p>
      </section>
  
      <section>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you 
          of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>
  
      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at 
          <a href="mailto:contact@worldofunreal.com">contact@worldofunreal.com</a>.
        </p>
      </section>
    </div>
      </div>
    </template>
    
    <script>
    export default {
      // Your script here (if needed)
    };
    </script>
    
    <style scoped>
    .privacy-container {
      max-width: 800px;
      margin: auto;
      padding: 20px;
      @apply pt-4 space-y-4 text-gray-600 dark:text-white lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl;
    
      p {
        @apply lg:text-lg leading-7;
      }
    }
    
    .privacy-container h1 {
      text-align: center;
      margin-bottom: 20px;
      @apply pt-4 space-y-4 text-gray-600 dark:text-white lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl;
    }
    
    .privacy-container h2 {
      text-align: left;
      margin-top: 20px;
    }
    
    .privacy-container p {
      text-align: justify;
      line-height: 1.6;
    }
    </style>
    