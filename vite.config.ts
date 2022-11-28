import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const config = {
        plugins: [react()]
    }

    if (command === 'serve') {
        return {
            // dev specific config
            ...config,
            base: '/'
        }
    } else {
        return {
            // build specific config
            // GitHub pages is deployed in a sub-directory, /pokemon-app
            ...config,
            base: '/pokemon-app'
        }
    }
})
