import React from 'react'
import { act, render } from '@testing-library/react'

import userEvent from '@testing-library/user-event'

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
  describe('開始ボタンを押した後の表示のテスト', () => {
    describe('開始ボタンを押した直後の表示のテスト', () => {
      test('「25:00」が描画されていること', () => {
        const { getByTestId } = render(<Home />)
        userEvent.click(getByTestId('timerButton'))
        expect(getByTestId('timeLeft').textContent).toEqual('25:00')
      })
      test('「停止」が描画されていること', () => {
        const { getByTestId } = render(<Home />)
        userEvent.click(getByTestId('timerButton'))
        expect(getByTestId('timerButton').textContent).toEqual('停止')
      })
      test('「作業」が描画されていること', () => {
        const { getByTestId } = render(<Home />)
        userEvent.click(getByTestId('timerButton'))
        expect(getByTestId('timerMode').textContent).toEqual('作業')
      })
    })
  })

  describe('開始ボタンを押してから999ミリ秒後の表示のテスト', () => {
    test('「25:00」が描画されていること', async () => {
      jest.useFakeTimers()
      const { getByTestId } = render(<Home />)
      userEvent.click(getByTestId('timerButton'))
      act(() => {
        jest.advanceTimersByTime(999)
      })
      expect(getByTestId('timeLeft').textContent).toEqual('25:00')
    })
  })

  describe('開始ボタンを押してから1000ミリ秒後の表示のテスト', () => {
    test('「24:59」が描画されていること', async () => {
      jest.useFakeTimers()
      const { getByTestId } = render(<Home />)
      userEvent.click(getByTestId('timerButton'))
      act(() => {
        jest.advanceTimersByTime(1000)
      })
      expect(getByTestId('timeLeft').textContent).toEqual('24:59')
    })
  })

  describe('開始ボタンを押してから2000ミリ秒後の表示のテスト', () => {
    test('「24:58」が描画されていること', async () => {
      jest.useFakeTimers()
      const { getByTestId } = render(<Home />)
      userEvent.click(getByTestId('timerButton'))
      act(() => {
        jest.advanceTimersByTime(2000)
      })
      expect(getByTestId('timeLeft').textContent).toEqual('24:58')
    })
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
