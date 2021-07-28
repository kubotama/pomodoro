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

describe('開始ボタンを押した後の表示のテスト', () => {
  describe('開始ボタンを押した直後の表示のテスト', () => {
    test.todo('「25:00」が描画されていること')
    test.todo('「停止」が描画されていること')
    test.todo('「作業」が描画されていること')
  })
  describe('開始ボタンを押してから999ミリ秒後の表示のテスト', () => {
    test.todo('「25:00」が描画されていること')
  })
  describe('開始ボタンを押してから1000ミリ秒後の表示のテスト', () => {
    test.todo('「24:59」が描画されていること')
  })
  describe('開始ボタンを押してから2000ミリ秒後の表示のテスト', () => {
    test.todo('「24:58」が描画されていること')
  })
  describe('開始ボタンを押してから25分後の表示のテスト', () => {
    test.todo('「00:00」が描画されていること')
    test.todo('「作業」が描画されていること')
  })
  describe('開始ボタンを押してから25分+1秒後の表示のテスト', () => {
    test.todo('「04:59」が描画されていること')
    test.todo('「休憩」が描画されていること')
  })
  describe('開始ボタンを押してから25分+5分+1秒後の表示のテスト', () => {
    test.todo('「24:59」が描画されていること')
    test.todo('「作業」が描画されていること')
  })
})
