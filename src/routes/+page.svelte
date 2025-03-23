<script lang="ts">
  import { NavLink } from '$lib/components/navigation';
  import { navItems } from '$lib/components/navigation/nav-items';
  import { getRandomMotivation } from './random-motivation';

  const motivation = getRandomMotivation();
</script>

<h1 class="text-4xl md:text-6xl font-bold text-white mb-4">YukDzikir</h1>

<p class="text-xs sm:text-sm md:text-xl text-center text-gray-200 mb-8 whitespace-pre-line">
  {motivation.dalil} <br /> ({motivation.reference})
</p>

<div class="space-y-4 w-full">
  {#each navItems as item}
    <NavLink {...item} />
  {/each}
</div>
