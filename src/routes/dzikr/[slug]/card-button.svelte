<script lang="ts">
  import { Button } from '$lib/components/ui/button';

  type CardButtonProps = {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onBack: () => void;
  };

  let { currentPage, totalPages, onNext, onBack }: CardButtonProps = $props();

  const actualPage = $derived(currentPage + 1);
  const isFirstPage = $derived(currentPage === 0);
  const isLastPage = $derived(actualPage === totalPages);
</script>

<div class="mt-6 flex justify-center gap-2">
  <Button
    onclick={onBack}
    disabled={isFirstPage}
    class="w-28 md:w-44 px-4 py-2 disabled:opacity-30"
  >
    Back
  </Button>

  {#if actualPage <= totalPages}
    <span class="px-4 py-2 w-max text-base text-white rounded-lg">
      {actualPage} / {totalPages}
    </span>

    <Button onclick={onNext} class="w-28 md:w-44 px-4 py-2 disabled:opacity-50">
      {#if !isLastPage}
        Next
      {:else}
        Done
      {/if}
    </Button>
  {/if}
</div>
