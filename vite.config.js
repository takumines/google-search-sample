import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import viteReact from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/ts/app.tsx',
            refresh: true,
        }),
        viteReact(),
    ],
});
