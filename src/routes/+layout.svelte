<script>
  import '../app.css';
  import '../lib/i18n';
  import { waitLocale } from 'svelte-i18n';
</script>

{#await waitLocale()}
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  </div>
{:then}
  <slot />
{/await}