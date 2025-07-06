<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Portfolio from '$lib/components/Portfolio.svelte';
  import Articles from '$lib/components/Articles.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import GameWidget from '$lib/components/GameWidget.svelte';
  import ChatWidget from '$lib/components/ChatWidget.svelte';
  // import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<svelte:head>
  <title>Difagama</title>
  <meta name="description" content="A Human. Love to Nurture Data behind so called AI." />
</svelte:head>

<div class="min-h-screen
winter:bg-winter-primary dark:winter:bg-winter-dark
spring:bg-spring-primary dark:spring:bg-spring-dark
summer:bg-summer-primary dark:summer:bg-summer-dark
autumn:bg-autumn-primary dark:autumn:bg-autumn-dark
text-gray-900 dark:text-gray-100">
  <Navbar />
  <main>
    <Hero />
    <About />
    <Portfolio />
    <Articles />
    <Contact />
    <Footer />
  </main>
  
  <!-- <ThemeToggle /> -->
  <GameWidget />
  <ChatWidget />
</div>