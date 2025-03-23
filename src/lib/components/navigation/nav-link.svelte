<script lang="ts">
  import { cn } from '$lib/utils';
  import type { Icon as IconType } from '@lucide/svelte';
  import type { ClassValue } from 'clsx';

  const {
    to,
    label,
    icon,
    class: className
  } = $props<{ to: string; label: string; icon: typeof IconType; class?: ClassValue }>();
</script>

<a
  href={to}
  class={cn(
    'min-h-20 md:min-h-36 flex items-center justify-center bg-gray-100 hover:brightness-105 hover:outline text-emerald-600 rounded-lg',
    className
  )}
>
  <div class="flex items-center justify-center gap-4 md:gap-8">
    {#if icon}
      {@const Icon = icon}
      <span class="w-auto h-6 md:h-10">
        <Icon class="h-full w-full" />
      </span>
    {/if}
    <h2 class="text-md md:text-xl font-semibold">{label}</h2>
  </div>
</a>
