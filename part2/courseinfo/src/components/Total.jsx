const Total = ({ parts }) => {
    console.log(parts)
  const total = parts.reduce((s,p) => s + p.exercises, 0)
 return(
    <>
     <h2>total of {total} exercises</h2>
    </>
 )
}

export default Total