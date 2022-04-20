import { DefaultSeo } from 'next-seo'
import NextHead from 'next/head'
import { FC } from 'react'

import seoConfig from '@data/seo.json'
import { GA_TRACKING_ID } from '@lib/gtag'

const Head: FC = () => {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <NextHead>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link href='/static/favicons/favicon.ico' rel='shortcut icon' />
        <link href='/static/favicons/site.webmanifest' rel='manifest' />
        <link
          href='/static/favicons/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/static/favicons/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/static/favicons/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <link
          color='#4a9885'
          href='/static/favicons/safari-pinned-tab.svg'
          rel='mask-icon'
        />
        <meta content='#ffffff' name='theme-color' />
        <meta content='#ffffff' name='msapplication-TileColor' />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </NextHead>
    </>
  )
}

export default Head
