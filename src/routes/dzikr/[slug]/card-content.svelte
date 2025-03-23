<script lang="ts">
  import { Separator } from '$lib/components/ui/separator';
  import type { DzikrItem } from '$lib/types/dzikr-item';
  import { cn, toArabicNumbers } from '$lib/utils';
  import { Info } from '@lucide/svelte';

  type CardContentProps = {
    item: DzikrItem;
  };

  let { item }: CardContentProps = $props();

  const isRepetitionValid = item.repetition > 1;
  const repetition = `(dibaca ${item.repetition}x)`;
  const repetitionArabic = `(×${toArabicNumbers(item.repetition)})`;
</script>

<div class="flex flex-col h-full gap-2 mt-4 sm:mt-8 md:mt-10 mb-20">
  <div class="flex flex-col gap-4">
    <p
      class="text-2xl/loose md:text-4xl/loose text-right mb-2 text-primary whitespace-pre-wrap font-arabic"
      dir="rtl"
    >
      {item.arabic}
      <span
        class={cn('text-sm sm:text-md md:text-xl bg-emerald-100', !isRepetitionValid && 'hidden')}
      >
        {repetitionArabic}
      </span>
    </p>

    <Separator class="bg-gray-200" />
  </div>

  <p class="text-md md:text-lg italic text-gray-800">
    {item.latin}
    <span class={cn('text-sm bg-gray-200', !isRepetitionValid && 'hidden')}>
      {repetition}
    </span>
  </p>

  <p class="text-gray-600 text-base md:text-lg mt-4">{item.translation}</p>

  <div
    class={cn(
      'flex gap-0.5 md:gap-1 w-full mt-4 p-2 rounded-md bg-gray-100 text-primary',
      !item.dalil && 'hidden'
    )}
  >
    <span>
      <Info class="h-4 mt-0.5" />
    </span>
    <p class="text-sm md:text-base italic">
      {item.dalil}
    </p>
  </div>
</div>
