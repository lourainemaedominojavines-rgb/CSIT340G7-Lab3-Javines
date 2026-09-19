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
      <Part part = {props.parts[0]} ></Part>
      <Part part = {props.parts[1]} ></Part>
      <Part part = {props.parts[2]} ></Part>
    </div>
  )
}

const Total = (props) => {
  return (
    <p> Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
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

  const parts = [
    {
      name: 'User Experience (UX) Design and Usability',
      exercises: 3
    },

    {
      name: 'User-Centered Design (UCD)',
      exercises: 4
    },
    
    {
      name: 'Accessibility and Inclusive Design',
      exercises: 3
    }
  ]

  const name = 'Louraine Mae D. Javines'
  const code = 'CSIT238'
  const section = 'G7'

  return (
    <div>
      <Header course = {course}></Header>
      <Content parts = {parts}></Content>
      <Total parts = {parts}></Total>
      <Footer name = {name} code = {code} section = {section}></Footer>
      </div>
  )
}

export default App