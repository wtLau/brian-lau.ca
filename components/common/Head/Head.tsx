import { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import seoConfig from '@config/seo.json'

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
      </NextHead>
    </>
  )
}

export default Head
