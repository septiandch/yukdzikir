<script lang="ts">
  import Trademark from '$lib/components/trademark';
  import { Github, Instagram } from '@lucide/svelte';
</script>

<footer
  class="hidden md:block fixed bottom-0 w-full py-4 bg-background brightness-95 backdrop-blur-sm"
>
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between">
      <Trademark />

      <div class="flex items-center gap-4 mt-2 md:mt-0">
        <a
          href="https://github.com/septiandch/yukdzikir"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:text-gray-200"
        >
          <Github class="w-5 h-5" />
        </a>
        <a
          href="https://instagram.com/septian.d.chandra"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:text-gray-200"
        >
          <Instagram class="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</footer>
