import React from 'react'

const Toolbar = ({messages, seeker, showAll, toggleCompose}) => {
  const searchFor = (e) => {
    e.preventDefault()
    seeker(e.target.value)
  }

  const clear = (e) => {
    e.target.search.value = ''
  }

  return(
    <div className="row">
          <div className="col-lg-6">
            <div className="input-group">
              <input onChange={ searchFor }  id="search" name="search" type="text" placeholder="SEARCH HERE"></input>
              <span className="input-group-btn">
                <button className="btn btn-default" onClick={toggleCompose} type="button" id="compose">Compose</button>
              </span>
                {/* <span>{this.state.messages.length}</span> */}
            </div>
          </div>
        </div>
  )
}

export default Toolbar
