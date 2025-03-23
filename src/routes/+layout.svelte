<script lang="ts">
  import Footer from '$lib/components/footer.svelte';
  import Navigation from '$lib/components/navigation';
  import '../app.css';

  let { children } = $props();
</script>

<div class="h-screen w-screen overflow-hidden">
  <Navigation />

  <div class="flex flex-col items-center justify-center px-8 w-full h-full md:max-w-4xl mx-auto">
    {@render children()}
  </div>

  <Footer />
</div>
