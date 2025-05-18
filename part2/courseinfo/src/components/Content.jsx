import Parts from "./Parts"

const Content = ({ parts }) => {
  return(
    <>
        {parts.map(part => (
            <Parts key={part.id} name={part.name} exercises={part.exercises} />
        ))}
    </>
  )
}

export default Content