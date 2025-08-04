import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://polkadotbrasil.com/'),
    title: 'Polkadot Brasil - Blockchain Rio 2024',
    description: 'Polkadot Brasil te leva para a Blockchain Rio 2024',
    openGraph: {
        title: 'Polkadot Brasil - Blockchain Rio 2024',
        description: 'Polkadot Brasil te leva para a Blockchain Rio 2024',
        url: 'https://polkadotbrasil.com',
        siteName: 'Polkadot Brasil',
        images: [
            {
                url: 'https://polkadotbrasil.com/twitter-image.png',
                width: 800,
                height: 600,
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Polkadot Brasil - Blockchain Rio 2024',
        description: 'Polkadot Brasil te leva para a Blockchain Rio 2024',
        images: ['https://polkadotbrasil.com/twitter-image.png'],
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" className="dark">
        <head>
            {/* Metadados para SEO */}
            <meta property="og:title" content="Polkadot Brasil - Blockchain Rio 2024" />
            <meta property="og:description" content="Polkadot Brasil te leva para a Blockchain Rio 2024" />
            <meta property="og:url" content="https://polkadotbrasil.com" />
            <meta property="og:site_name" content="Polkadot Brasil" />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://polkadotbrasil.com/twitter-image.png" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />

            {/* Metadados para Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Polkadot Brasil - Blockchain Rio 2024" />
            <meta name="twitter:description" content="Polkadot Brasil te leva para a Blockchain Rio 2024" />
            <meta name="twitter:image" content="https://polkadotbrasil.com/twitter-image.png" />
        </head>
        <body className={`${inter.className} bg-gradient-to-r from-black via-zinc-800 to-black`}>
        {children}
        </body>
        </html>
    );
}
