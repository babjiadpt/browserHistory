import './index.css'

import {Component} from 'react'

import HistoryItem from '../HistoryItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {searchInput: '', historyListItems: initialHistoryList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    const {searchInput, historyListItems} = this.state
    const filteredSearchResults = historyListItems.filter(eachListItem =>
      eachListItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filteredSearchResults
  }

  onDeleteItem = id => {
    const {historyListItems} = this.state
    const filteredHistoryList = historyListItems.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({historyListItems: filteredHistoryList})
  }

  render() {
    const {searchInput} = this.state
    const searchResults = this.getSearchResults()

    return (
      <>
        <div className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-logo"
            alt="app logo"
          />
          <div className="input-search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-image"
            />
            <input
              type="search"
              placeholder="Search history"
              className="input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="bg-container">
          {searchResults.length === 0 ? (
            <div className="empty-history">
              <p className="empty-result">There is no history to show</p>
            </div>
          ) : (
            <ul className="search-results">
              {searchResults.map(each => (
                <HistoryItem
                  historyItem={each}
                  key={each.id}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default BrowserHistory
