const Header = (props) => {
  return <h1>{props.course}</h1>
}

  const Part = (props) => {
  return (
    <p> {props.part} {props.exercises} </p>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} exercises = {props.exercises1} />
      <Part part = {props.part2} exercises = {props.exercises2} />
      <Part part = {props.part3} exercises = {props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p> Number of exercises {props.exercises1 + props.exercises2 + props.exercises3} </p>
  )
}

const Footer = props => {
  return (
    <footer>
      <p> {props.name} - {props.code} - {props.section} </p>
    </footer>
  )
}

const App = () => {
  const course = 'Human Computer Interaction'
  const part1 = 'User Experience (UX) Design and Usability'
  const exercises1 = 3
  const part2 = 'User-Centered Design (UCD)'
  const exercises2 = 4
  const part3 = 'Accessibility and Inclusive Design'
  const exercises3 = 3

  const name = 'Louraine Mae D. Javines'
  const code = 'CSIT238'
  const section = 'G7'

  return (
    <div>
      <Header course={course}></Header>

      <Content
        part1 = {part1} exercises1 = {exercises1}
        part2 = {part2} exercises2 = {exercises2}
        part3 = {part3} exercises3 = {exercises3}
      ></Content>

      <Total
        exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}
      ></Total>

      <Footer name = {name} code = {code} section = {section} ></Footer>

    </div>
  )
}

export default App