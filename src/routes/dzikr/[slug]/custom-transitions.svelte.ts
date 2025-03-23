import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

interface ExpandParams {
  delay?: number;
  duration?: number;
  easing?: (t: number) => number;
}

export function expand(node: Element, params: ExpandParams): TransitionConfig {
  const { delay = 0, duration = 400, easing = cubicOut } = params;

  const w = parseFloat(getComputedStyle(node).strokeWidth);

  return {
    delay,
    duration,
    easing,
    css: (t: number) => `opacity: ${t}; stroke-width: ${t * w}`
  };
}
