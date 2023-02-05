import { useState } from 'react'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const totalVotes = good + neutral + bad
  if (!totalVotes) {
    return <h3>No feedback given</h3>
  }
  const average = (good - bad) / totalVotes
  const positive = (good * 100) / totalVotes
  return (
    <>
      <h2>statistics</h2>
      <p>{`good ${good}`}</p>
      <p>{`neutral ${neutral}`}</p>
      <p>{`bad ${bad}`}</p>
      <p>{`all ${good + neutral + bad}`}</p>
      <p>{`average ${average}`}</p>
      <p>{`positive ${positive} %`}</p>
    </>
  )

}

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App