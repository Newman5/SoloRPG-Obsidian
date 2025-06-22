// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';



import tailwindcss from '@tailwindcss/vite';



// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'solo rpg with Obsidian',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/newman5/solorpg-obsidian' }],
          customCss: [
            // Path to your Tailwind base styles:
            './src/styles/global.css',
          ],
          sidebar: [
              {
                  label: 'Guides',
                  // items: [
                  //     // Each item here is one entry in the navigation menu.
                  //     { label: 'Example Guide', slug: 'guides/example' },
                  // ],
                 autogenerate: { directory: 'guides' },
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
      }),
    ],

  vite: {
    plugins: [tailwindcss()],
  },
});