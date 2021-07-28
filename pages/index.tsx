import { useState } from 'react'

import Head from 'next/head'

interface TimerState {
  isTimerOn: boolean
}

export const Home = (): JSX.Element => {
  const [state, setState] = useState<TimerState>({
    isTimerOn: false,
  })
  return (
    <div className="container">
      <Head>
        <title>Pomodoro Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">ポモドーロ・タイマー</h1>
        <div className="time" data-testid="timeLeft">
          --:--
        </div>
        <button data-testid="timerButton">
          {state.isTimerOn ? '停止' : '開始'}
        </button>
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
