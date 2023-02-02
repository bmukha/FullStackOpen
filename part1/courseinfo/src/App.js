const Header = (props) => (
  <h1>{props.course}</h1>
)


const Part = (props) => {
  const { name, exercises } = props.part
  return <p>{name} {exercises}</p>
}

const Content = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  )
}

const Total = (props) => {
  const { parts } = props
  return <p>Number of exercises {parts.reduce((acc, curr) => acc + curr.exercises, 0)}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App