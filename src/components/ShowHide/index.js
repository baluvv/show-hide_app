import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstClicked: false, isLastClicked: false}

  isFirstNameClicked = () => {
    this.setState(prevState => {
      if (prevState.isFirstClicked === false) {
        return {isFirstClicked: true}
      }
      return {isFirstClicked: false}
    })
  }

  isLastNameClicked = () => {
    this.setState(prevState => {
      if (prevState.isLastClicked === false) {
        return {isLastClicked: true}
      }
      return {isLastClicked: false}
    })
  }

  render() {
    const {isFirstClicked, isLastClicked} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container1">
          <div className="container2">
            <button className="button" onClick={this.isFirstNameClicked}>
              Show/Hide Firstname
            </button>
            {isFirstClicked && <p className="name">Joe</p>}
          </div>
          <div className="container2">
            <button className="button" onClick={this.isLastNameClicked}>
              Show/Hide Lastname
            </button>
            {isLastClicked && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
