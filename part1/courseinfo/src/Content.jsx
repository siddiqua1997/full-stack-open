import Parts from "./Parts"

const Content = (props) => {
    console.log(props)
  return(
    <>
        <Parts parts={props.parts[0].name} exercises={props.parts[0].exercises}/>
        <Parts parts={props.parts[1].name} exercises={props.parts[1].exercises}/>
        <Parts parts={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </>
  )
}

export default Content