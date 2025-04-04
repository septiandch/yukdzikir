<script lang="ts" module>
  import type { WithElementRef } from 'bits-ui';
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
  import { type VariantProps, tv } from 'tailwind-variants';

  export const buttonVariants = tv({
    base: 'ring-offset-background hover:brightness-105 active:brightness-95 focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        outline:
          'border border-primary text-primary bg-transparent hover:bg-primary/10 active:bg-primary/20',
        secondary: 'bg-secondary text-secondary-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  });

  export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
  export type ButtonSize = VariantProps<typeof buttonVariants>['size'];

  export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
    WithElementRef<HTMLAnchorAttributes> & {
      variant?: ButtonVariant;
      size?: ButtonSize;
    };

  type Props = Omit<HTMLButtonAttributes, keyof ButtonProps> & ButtonProps;
  type AnchorProps = Omit<HTMLAnchorAttributes, keyof ButtonProps> & ButtonProps;
</script>

<script lang="ts">
  import { cn } from '$lib/utils.js';

  type $$Props = Props | AnchorProps;

  let {
    class: _className = '',
    variant = 'default',
    size = 'default',
    ref,
    href,
    type = 'button',
    children,
    ...restProps
  }: $$Props = $props();

  // Ensure className is always defined for SSR consistency
  let className = cn(buttonVariants({ variant, size }), _className);
</script>

{#if href}
  <a bind:this={ref} class={className} {href} {...restProps}>
    {@render children?.()}
  </a>
{:else}
  <button bind:this={ref} class={className} {type} {...restProps}>
    {@render children?.()}
  </button>
{/if}
