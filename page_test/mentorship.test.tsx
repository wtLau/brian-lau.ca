import { render, screen } from '@testing-library/react'
import * as React from 'react'

import Mentorship from '@pages/mentorship'

const frontMatterData = {
  title: 'Mentorship',
  publishedAt: '2022-07-19',
  summary: 'hello',
  slug: 'code-review',
  wordCount: 2000,
  readingTime: {
    text: '6 min read',
    minutes: 5.615,
    time: 336900,
    words: 1123,
  },
}
const mdxSourceMockData = {
  compiledSource: 'hello',
  renderedOutput: '<p>hello</p>',
  scope: {},
}
describe('<Mentorship />', () => {
  it('should render default', () => {
    render(
      <Mentorship mdxSource={mdxSourceMockData} frontMatter={frontMatterData} />
    )

    expect(screen.getByText('Mentorship')).toBeInTheDocument()
  })
})
