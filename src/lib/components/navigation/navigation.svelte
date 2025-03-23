<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { navItems } from '$lib/components/navigation/nav-items';
  import Trademark from '$lib/components/trademark';
  import { Separator } from '$lib/components/ui/separator';
  import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
  import { cn } from '$lib/utils';
  import { Menu } from '@lucide/svelte';

  let sheetOpen = $state(false);
  let path = $state('');

  function onSheetOpenChange(state: boolean) {
    sheetOpen = state;
  }

  function isActive(href: string) {
    return path.includes(href);
  }

  function handleLink(event: MouseEvent & { currentTarget: HTMLAnchorElement }) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');

    if (href) {
      goto(href);
    }

    onSheetOpenChange(false);
  }

  $effect(() => {
    path = page.url.pathname;
  });
</script>

<nav
  class="fixed top-0 w-full h-12 md:h-16 bg-background brightness-95 backdrop-blur-sm z-50 px-4 flex items-center justify-between"
>
  <!-- Logo -->
  <a href="/" class="text-lg md:text-xl font-bold text-white cursor-pointer">YukDzikir</a>

  {#if false}
    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center space-x-4">
      {#each navItems as { to, label }}
        <a
          href={to}
          onclick={handleLink}
          class="text-white hover:text-emerald-200 transition-colors cursor-pointer"
        >
          {label}
        </a>
      {/each}
    </div>
  {/if}

  <!-- Mobile Menu -->
  <!-- <div class="md:hidden"> -->

  <Sheet open={sheetOpen} onOpenChange={onSheetOpenChange}>
    <SheetTrigger class="flex justify-center items-center">
      <Menu class="h-6 text-white" />
    </SheetTrigger>

    <SheetContent class="flex flex-col justify-between bg-gray-100">
      <div class="flex flex-col space-y-4 mt-8">
        {#each navItems as { to, label, icon }}
          {@const Icon = icon}
          <a
            href={to}
            onclick={handleLink}
            class={cn(
              'flex gap-3 items-center text-gray-600 rounded-md p-2 sm:p-4 border border-transparent hover:border-gray-300',
              isActive(to) && 'bg-gray-200'
            )}
            class:active={isActive(to)}
          >
            <Icon />
            <span class="text-xs sm:text-sm">
              {label}
            </span>
          </a>
        {/each}
      </div>

      <div class="md:hidden mx-auto space-y-4 w-full">
        <Separator class="bg-gray-300" />
        <Trademark class="text-gray-500" />
      </div>
    </SheetContent>
  </Sheet>
  <!-- </div> -->
</nav>
