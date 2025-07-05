<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Portfolio from '$lib/components/Portfolio.svelte';
  import Articles from '$lib/components/Articles.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import GameWidget from '$lib/components/GameWidget.svelte';
  import ChatWidget from '$lib/components/ChatWidget.svelte';
  // import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<svelte:head>
  <title>Difagama</title>
  <meta name="description" content="A Human. Love to Nurture Data behind so called AI." />
</svelte:head>

<div class="min-h-screen bg-winter-primary dark:bg-winter-dark text-gray-900 dark:text-gray-100">
  <Navbar />
  <main>
    <Hero />
    <About />
    <Portfolio />
    <Articles />
    <Contact />
  </main>
  
  <!-- <ThemeToggle /> -->
  <GameWidget />
  <ChatWidget />
</div>