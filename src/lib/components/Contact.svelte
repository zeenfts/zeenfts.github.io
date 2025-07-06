<script>
  import { _ } from 'svelte-i18n';
  
  let formData = {
    name: '',
    email: '',
    message: ''
  };
  
  let isSubmitting = false;
  let submitMessage = '';
  let lastSubmit = 0;
  const RATE_LIMIT = 60000; // 1 minute
  
  async function handleSubmit(e) {
    e.preventDefault();
    const now = Date.now();
    isSubmitting = true;

    if (now - lastSubmit < RATE_LIMIT) {
      alert('Please wait before submitting again');
      return;
    }
    lastSubmit = now;
    
    // Simulate form submission
    setTimeout(() => {
      submitMessage = 'Thank you for your message! I\'ll get back to you soon.';
      formData = { name: '', email: '', message: '' };
      isSubmitting = false;
      
      setTimeout(() => {
        submitMessage = '';
      }, 5000);
    }, 1000);
  }
</script>

<section id="contact" class="section-padding py-7 px-7">
  <div class="max-width-container">
    <h2 class="text-3xl font-bold text-center mb-12">{$_('contact.title') || 'Get In Touch'}</h2>
    
    <div class="max-w-2xl mx-auto">
      <form on:submit={handleSubmit} class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium mb-2">
            {$_('contact.name') || 'Name'}
          </label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            required
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-spring-accent focus:border-transparent dark:bg-gray-800"
          />
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium mb-2">
            {$_('contact.email') || 'Email'}
          </label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            required
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-spring-accent focus:border-transparent dark:bg-gray-800"
          />
        </div>
        
        <div>
          <label for="message" class="block text-sm font-medium mb-2">
            {$_('contact.message') || 'Message'}
          </label>
          <textarea
            id="message"
            bind:value={formData.message}
            required
            rows="5"
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-spring-accent focus:border-transparent dark:bg-gray-800"
          ></textarea>
        </div>
        
        <div class="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            class="px-8 py-3
            winter:bg-winter-accent hover:winter:bg-winter-dark dark:winter:hover:bg-winter-primary
            spring:bg-spring-accent hover:spring:bg-spring-dark dark:spring:hover:bg-spring-primary
            summer:bg-summer-accent hover:summer:bg-summer-dark dark:summer:hover:bg-summer-primary
            autumn:bg-autumn-accent hover:autumn:bg-autumn-dark dark:autumn:hover:bg-autumn-primary
            text-white dark:hover:text-gray-800 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        
        {#if submitMessage}
          <p class="text-center
          winter:text-winter-accent dark:winter:text-winter-secondary
          spring:text-spring-accent dark:spring:text-spring-secondary
          summer:text-summer-accent dark:summer:text-summer-secondary
          autumn:text-autumn-accent dark:autumn:text-autumn-secondary
          mt-4 text-sm">
            {submitMessage}
          </p>
        {/if}
      </form>
    </div>
  </div>
</section>