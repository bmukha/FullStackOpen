import { useState } from 'react'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <p>{`good ${good}`}</p>
      <p>{`neutral ${neutral}`}</p>
      <p>{`bad ${bad}`}</p>
      <p>{`all ${good + neutral + bad}`}</p>
      <p>{`average ${((good - bad) / ((good + neutral + bad) === 0 ? 1 : (good + neutral + bad)))}`}</p>
      <p>{`positive ${((good * 100) / ((good + neutral + bad) === 0 ? 1 : (good + neutral + bad)))}%`}</p>
    </>
  )
}

export default App