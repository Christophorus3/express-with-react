import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state.firstName + " " + this.state.lastName))
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div>
        <h1>Hello World from React/Express</h1>
        <p>Here we create some exciting things!</p>
        <div id="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
            <br/>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
          </form>
        </div>
      </div>
    )
  }
}

export default App