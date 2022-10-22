import { act, fireEvent, render, screen } from '@testing-library/react'
import ScrollTop from './ScrollTop'
Element.prototype.scrollIntoView = jest.fn()

it('ScrollTop', async () => {
  render(
    <div style={{ height: '2000px' }}>
      <p id='back-to-top-anchor'>hi</p>
      <ScrollTop />
    </div>
  )

  const scrollBtn = screen.queryByRole('button', { name: 'scroll back to top' })
  expect(scrollBtn).not.toBeInTheDocument()

  // Set scroll height
  act(() => {
    window.pageYOffset = 2000
    window.dispatchEvent(new window.Event('scroll', {}))
  })

  const btn = screen.getByRole('button', { name: 'scroll back to top' })
  expect(btn).toBeInTheDocument()
  fireEvent.click(btn)
  expect(screen.getByText('hi')).toBeInTheDocument()
})
