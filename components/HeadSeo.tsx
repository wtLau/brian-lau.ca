import { NextSeo } from 'next-seo'
import React from 'react'

export const HeadSeo = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return <NextSeo title={`${title}- Brian Lau`} description={description} />
}
