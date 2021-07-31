import { useState } from 'react'

import dayjs, { Dayjs } from 'dayjs'

import Head from 'next/head'

interface TimerState {
  targetTime: Dayjs | null
  timeLeft: string
  isTimerOn: boolean
}

export const Home = (): JSX.Element => {
  const [state, setState] = useState<TimerState>({
    targetTime: null,
    timeLeft: '--:--',
    isTimerOn: false,
  })

  const onButtonClick = () => {
    setInterval(() => {
      timerCount()
    }, 1000)
    setState((state) => {
      return {
        ...state,
        isTimerOn: !state.isTimerOn,
        timeLeft: '25:00',
        targetTime: dayjs().add(25, 'minute'),
      }
    })
  }

  const numberTo2letter = (digit: number) => {
    let letter = digit.toString()
    if (digit < 10) {
      letter = '0' + letter
    }
    return letter
  }

  const millisecondToMMSS = (millisecond: number) => {
    const second = Math.floor(millisecond / 1000)
    const minute = Math.floor(second / 60)
    return numberTo2letter(minute) + ':' + numberTo2letter(second % 60)
  }

  const getTimeLeft = (state: TimerState) => {
    return millisecondToMMSS(state.targetTime.diff(dayjs()))
  }

  const timerCount = () => {
    setState((state) => {
      return { ...state, timeLeft: getTimeLeft(state) }
    })
  }

  return (
    <div className="container">
      <Head>
        <title>Pomodoro Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">ポモドーロ・タイマー</h1>
        <div className="time" data-testid="timeLeft">
          {state.timeLeft}
        </div>
        <button data-testid="timerButton" onClick={onButtonClick}>
          {state.isTimerOn ? '停止' : '開始'}
        </button>
        <div data-testid="timerMode">{state.isTimerOn ? '作業' : '休憩'}</div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .time {
          font-size: 2rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
