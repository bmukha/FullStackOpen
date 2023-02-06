const Header = ({ name }) => <h2>{name}</h2>

const Total = ({ parts }) => {
    const sum = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p>
            <strong>total of exercises {sum}</strong>
        </p>
    )
}

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
)

const Content = ({ parts }) => (
    <>
        {parts.map(part => <Part key={part.id} part={part} />)}
    </>
)

export const Course = ({ course }) => (
    <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </>
)