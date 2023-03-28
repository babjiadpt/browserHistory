import './index.css'

const HistoryItem = props => {
  const {historyItem, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onClickButton = () => {
    onDeleteItem(id)
  }

  return (
    <li className="history-items-container">
      <p className="time">{timeAccessed}</p>
      <div className="items-container">
        <div className="logo-name-container">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="title-container">
            <p className="title">{title}</p>
            <p className="domain-name">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="delete-button"
          onClick={onClickButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
