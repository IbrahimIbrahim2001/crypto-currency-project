import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Crypto Currencies',
        short_name: 'Crypto',
        description: 'Crypto currencies dashboard, charts, data, search, bookmark, exchange',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/src/app/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/src/app/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}