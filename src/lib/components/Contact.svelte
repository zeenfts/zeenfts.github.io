<script>
  import { _ } from 'svelte-i18n';
  
  let formData = {
    name: '',
    email: '',
    message: ''
  };
  
  let isSubmitting = false;
  let submitMessage = '';
  
  async function handleSubmit(e) {
    e.preventDefault();
    isSubmitting = true;
    
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
            class="px-8 py-3 bg-spring-accent text-white rounded-lg hover:bg-spring-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        
        {#if submitMessage}
          <p class="text-center text-green-600 dark:text-green-400">
            {submitMessage}
          </p>
        {/if}
      </form>
    </div>
  </div>
</section>