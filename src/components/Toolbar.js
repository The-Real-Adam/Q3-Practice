import React from 'react'

const Toolbar = ({messages, seeker, showAll, toggleCompose}) => {

  const totalCount = messages.length

  const searchFor = (e) => {
    e.preventDefault()
    seeker(e.target.value)
  }

  const clear = (e) => {
    e.target.search.value = ''
  }

  return(
    <div className="row justify-content-center ">
      <div className="col align-self-center">
        <span> Message Count: {totalCount}</span>
        <br />
        <input onChange={ searchFor }  id="search" name="search" type="text" placeholder="SEARCH HERE"></input>
        <button className="btn btn-default" onClick={toggleCompose} type="button" id="compose">Compose</button>
        <br />
      </div>
      <br />
    </div>

  )
}

export default Toolbar
