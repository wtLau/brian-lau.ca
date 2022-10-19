import { render, screen } from '@testing-library/react'
import * as React from 'react'

import MacroCalculatorPage from '@pages/mini-apps/nutrition-macro-calculator'

describe('<MacroCalculatorPage />', () => {
  it('should render default', () => {
    render(<MacroCalculatorPage />)

    expect(
      screen.getByRole('heading', { name: 'Nutrition Marco Calculator' })
    ).toBeInTheDocument()
  })
})
