import { HandHelping, Moon, Sun } from '@lucide/svelte';

export const navItems = [
  { label: 'Dzikir Setelah Shalat Fardhu', to: '/dzikr/afterpray', icon: HandHelping },
  { label: 'Dzikir Pagi', to: '/dzikr/morning', icon: Sun },
  { label: 'Dzikir Petang', to: '/dzikr/evening', icon: Moon }
];
