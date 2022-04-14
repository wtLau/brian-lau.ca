import { render, screen } from '@testing-library/react'
import Condition from '.'

describe('<Condition>', () => {
  it('should render children', () => {
    render(
      <Condition condition={true}>
        <h1>Apple</h1>
      </Condition>
    )

    expect(screen.getByText('Apple')).toBeInTheDocument()
  })
  it('should render fallback', () => {
    render(
      <Condition condition={false} fallback={<h1>grape</h1>}>
        <h1>Apple</h1>
      </Condition>
    )

    expect(screen.queryByText('Apple')).not.toBeInTheDocument()
    expect(screen.getByText('grape')).toBeInTheDocument()
  })
  it('should return null', () => {
    render(
      <Condition condition={false}>
        <h1>Apple</h1>
      </Condition>
    )

    expect(screen.queryByText('Apple')).not.toBeInTheDocument()
  })
})
