import { render } from '@testing-library/react'
import React from 'react'
import App from '../App'

it('renders correctly', async () => {
  const tree = render(<App />)
  expect(tree).toMatchSnapshot()
})
