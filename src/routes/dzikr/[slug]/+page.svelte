<script lang="ts">
  import dzikrItems from '$data';
  import { ScrollArea } from '$lib/components/ui/scroll-area';
  import CardButton from './card-button.svelte';
  import CardContent from './card-content.svelte';
  import CardDone from './card-done.svelte';

  const { data } = $props();

  let currentPage = $state(0);
  let scrollRef: HTMLDivElement | null = $state(null);

  const items = $derived(dzikrItems[data.slug]);
  const totalPages = $derived(items.length);
  const isValidPage = $derived(currentPage < totalPages);
  const validItemIndex = $derived(isValidPage ? currentPage : totalPages - 1);
  const item = $derived(items[validItemIndex]);

  function onNext() {
    /* Include the finish page */
    if (currentPage < totalPages) {
      currentPage++;
    }
  }

  function onBack() {
    currentPage > 0 && currentPage--;
  }

  $effect(() => {
    if (currentPage !== 0) {
      scrollRef?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  $effect(() => {
    if (data) {
      currentPage = 0;
    }
  });
</script>

<div class="relative h-[70dvh] rounded-lg overflow-hidden bg-white shadow-xl transition">
  {#if isValidPage}
    <div class="mt-6 mb-4 mx-6 md:mx-8 text-left text-gray-600">
      <span class="text-xl md:text-3xl font-normal">
        {item.title}
      </span>
    </div>
  {/if}

  <ScrollArea
    bind:ref={scrollRef}
    class="h-full w-[30rem] max-w-[90vw] pt-2 px-6 md:px-8 shadow-lg [&>div]:mask-overflow"
  >
    {#if isValidPage}
      <CardContent {item} />
    {:else}
      <CardDone />
    {/if}
  </ScrollArea>
</div>

<CardButton {onNext} {onBack} {currentPage} {totalPages} />
