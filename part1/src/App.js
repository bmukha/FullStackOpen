const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
      </p>
      <p>copyright</p>
    </footer>
  )
}

const App = () => {
  const friends = ['Peter', 'Maya']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App