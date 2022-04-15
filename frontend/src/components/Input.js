import React from 'react'

function Input(props) {
    const submitSearch = props.submitSearch
  return (
    <div className="input">
        <input
          type="text"
          className="form-control"
          onChange={(e) => submitSearch(e.target.value)}
          placeholder='Search'
        />
      </div>
  )
}

export default Input