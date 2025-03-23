<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { quintOut } from 'svelte/easing';
  import { draw, fade } from 'svelte/transition';
  import { getRandomMotivation } from '../../random-motivation';
  import { expand } from './custom-transitions.svelte';

  const motivation = getRandomMotivation();
</script>

<div class="h-full flex flex-col gap-4 items-center justify-center">
  <svg viewBox="0 0 50 50" class="w-1/2 h-1/2">
    <g class="inline-block" id="background">
      <circle
        in:expand={{ duration: 1000, delay: 800, easing: quintOut }}
        r="12.111837"
        cy="272"
        cx="25"
        class="fill-primary stroke-primary stroke-[25]"
        transform="translate(0,-247)"
      />
    </g>

    <g class="inline-block" transform="translate(0,-247)" id="draw-line">
      <path
        in:draw={{ duration: 800 }}
        d="m 18.963249,271.54142 5.11928,5.88254 16.621216,-13.3733 c -4.624996,-7.33644 -9.696966,-10.5123 -18.398843,-9.418 -9.407725,1.18306 -15.8732057,10.07183 -14.7734199,19.63013 1.0997857,9.55831 9.3987219,16.23758 19.2969299,15.20827 11.395441,-1.18501 19.680898,-12.82477 13.875333,-25.4204"
        class="fill-none stroke-primary stroke-[4.84] stroke-round"
      />
    </g>

    <g class="inline-block" id="white-fill">
      <path
        in:fade={{ delay: 800 }}
        d="m 18.963248,24.541422 5.11928,5.88254 16.621217,-13.3733 C 36.078748,9.7142223 31.006779,6.5383623 22.304901,7.6326623 12.897176,8.8157223 6.4316962,17.704492 7.5314812,27.262792 c 1.099786,9.55831 9.3987218,16.23758 19.2969298,15.20827 11.395442,-1.18501 19.6809,-12.82477 13.875334,-25.4204"
        class="fill-none stroke-white stroke-[4.84] stroke-round"
      />
    </g>
  </svg>

  <p class="italic text-center text-primary text-sm sm:text-md md:text-lg">
    <span class="font-medium">
      {motivation.dalil}
    </span>
    <span class="">
      ({motivation.reference})
    </span>
  </p>

  <Button href="/" variant="outline" class="mt-4 h-14 w-full">Kembali ke Halaman Utama</Button>
</div>
