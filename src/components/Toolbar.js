import React from 'react'

const Toolbar = ({messages, seeker, showAll, toggleCompose}) => {

  const searchFor = (e) => {
    e.preventDefault()
    seeker(e.target.value)
  }

  const clear = (e) => {
    e.target.search.value = ''
  }

  // const totalCount = messages.filter(message => message).length

  return(
    <div className="row justify-content-center ">
      <div className="col align-self-center">
        <input onChange={ searchFor }  id="search" name="search" type="text" placeholder="SEARCH HERE"></input>
        <button className="btn btn-default" onClick={toggleCompose} type="button" id="compose">Compose</button>
        <span></span>
      </div>
    </div>
  )
}

export default Toolbar
