<script lang="ts">
  import { cn } from '$lib/utils';
  import { Coffee, Heart, Plus } from '@lucide/svelte';
  import type { ClassValue } from 'clsx';
  import SvelteIcon from './svelte-icon.svelte';

  let { class: className } = $props<{ class?: ClassValue }>();
</script>

<div
  class={cn(
    'text-white text-xs md:text-md sm:text-sm flex flex-col md:flex-row items-center gap-1 [&_svg]:h-4 md:[&_svg]:h-5 mx-1 md:mx-2',
    className
  )}
>
  <span class="flex items-center gap-1">
    <span class="w-max">Crafted with</span>

    <span class="flex items-center space-x-[-8px] md:space-x-[-5px]">
      <span class="flex items-center">
        <SvelteIcon /> <span class="mr-1">velte</span>
      </span>
      <Plus class="scale-[60%]" />
      <Heart />
      <Plus class="scale-[60%]" />
      <Coffee />
    </span>
  </span>

  <span class="flex gap-1 w-max">
    <span>by</span>
    <a
      href="https://github.com/septiandch"
      target="_blank"
      rel="noopener noreferrer"
      class="italic hover:underline"
    >
      septiandch
    </a>
  </span>
</div>
