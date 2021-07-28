import React from 'react'
import { render } from '@testing-library/react'

import Home from '../../pages/index'

describe('初期表示', () => {
  test('「25:00」が描画されていること', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('timeLeft').textContent).toEqual('--:--')
  })
  test('「開始」が描画されていること', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('timerButton').textContent).toEqual('開始')
  })
  test('「休憩」が描画されていること', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('timerMode').textContent).toEqual('休憩')
  })
})
