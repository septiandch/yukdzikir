import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    alias: {
      $assets: 'src/assets',
      $data: 'src/data'
    },
    paths: {
      base: '/yukdzikir' // Change this to match your repo name
    },
    prerender: {
      entries: [
        '*', // Automatically crawl known pages
        '/dzikr/morning', // Manually define your slugs
        '/dzikr/evening',
        '/dzikr/after-prayer'
      ]
    }
  }
};

export default config;
