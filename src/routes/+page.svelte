<script>
  // import { page } from '$app/stores';
  import { locale } from 'svelte-i18n';
  import { metaTags } from '$lib/stores/meta';
  // import { getAllContexts } from 'svelte';

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
  
  $: metaDescription = $locale === 'id' 
    ? 'Difagama - Ahli AI & Data. Suka mengaduk data dengan AI.'
    : 'Difagama - AI & Data Specialist. Love to nurture data behind AI.';
    
  $: metaKeywords = $locale === 'id'
    ? `
    ahli data, spesialis data, ilmuwan data, insinyur data, analis data, kecerdasan buatan,
    pembelajaran mesin, pengembang web, portfolio, Indonesia
    `
    : `
    data expert, data specialist, data scientist, data engineer, data analyst , AI, artificial intelligence,
    machine learning, web developer, portfolio
    `;
</script>

<svelte:head>
  <title>{$locale === 'id' ? 'Difagama - Spesialis AI & Data' : 'Difagama - AI & Data Specialist'}</title>
  <meta name="description" content={metaDescription} />
  <meta name="keywords" content={metaKeywords} />
  <meta name="author" content="Difagama" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={$metaTags.url} />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={$locale === 'id' ? "Difagama - Spesialis AI & Data" : "Difagama - AI & Data Specialist"} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:image" content={$metaTags.image} />
  <meta property="og:url" content={$metaTags.url} />
  
  <!-- X (Twitter) -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={$locale === 'id' ? "Difagama - Spesialis AI & Data" : "Difagama - AI & Data Specialist"} />
  <meta property="twitter:description" content={metaDescription} />
  <meta property="twitter:image" content={$metaTags.image} />
  <meta property="twitter:url" content={$metaTags.url} />

  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Difagama",
      "url": ${metaTags.url},
      "jobTitle": ${metaTags.title},
      "description": ${metaDescription},
      "sameAs": [
        "https://github.com/zeenfts",
        "https://linkedin.com/in/difagama",
        "https://kaggle.com/zeeniye",
      ]
    }
    </script>
  `}
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