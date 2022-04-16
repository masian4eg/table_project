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
          style={{
              width:"200px",
              height:"30px",
              borderRadius:"6px",
              border:"1px solid #3F3D56"
          }}
        />
      </div>
  )
}

export default Input