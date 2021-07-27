import React from 'react'
import { render } from '@testing-library/react'

import Home from '../../pages/index'

describe('初期表示', () => {
  test('「25:00」が描画されていること', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('timeLeft').textContent).toEqual('25:00')
  })
  test.todo('「開始」が描画されていること')
  test.todo('「作業」が描画されていること')
})
