// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {isSearchResult: ''}

  onChangeSearch = event => {
    this.setState({isSearchResult: event.target.value})
  }

  render() {
    const {isSearchResult} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachPerson =>
      eachPerson.name.toLowerCase().includes(isSearchResult.toLowerCase()),
    )

    return (
      <div className="first-container">
        <h1 className="heading"> Destination Search</h1>
        <div className="second-container">
          <input
            type="search"
            value={isSearchResult}
            placeholder="Search"
            onChange={this.onChangeSearch}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="image"
            alt="search icon"
          />
        </div>
        <ul className="destinations-list">
          {searchResult.map(eachPerson => (
            <DestinationItem
              key={eachPerson.id}
              destinationDetails={eachPerson}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
