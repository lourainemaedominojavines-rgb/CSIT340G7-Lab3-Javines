const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p> {props.part.name} {props.part.exercises} </p>
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
    <p> Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises} </p>
  )
}

const Footer = props => {
  return (
    <footer>
      <hr />
      <p> {props.name} - {props.code} - {props.section} </p>
    </footer>
  )
}


const App = () => {
  const course = 'Human Computer Interactions'

  const part1 = {
    name: 'User Experience (UX) Design and Usability',
    exercises: 3
  }
  const part2 = {
    name: 'User-Centered Design (UCD)',
    exercises: 4
  }
  
  const part3 = {
    name: 'Accessibility and Inclusive Design',
    exercises: 3
  }

  const name = 'Louraine Mae D. Javines'
  const code = 'CSIT238'
  const section = 'G7'

  return (
    <div>
      <Header course = {course}></Header>
      <Content part1 = {part1} part2 = {part2} part3 = {part3} ></Content>
      <Total part1 = {part1} part2 = {part2} part3 = {part3} ></Total>
      <Footer name = {name} code = {code} section = {section} ></Footer>
    </div>
  )
}

export default App