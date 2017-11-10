import React from 'react'

const Toolbar = () => {
  return(
    <div>
      <div className="row">
        <div className="col-lg-6">
          <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Go!</button>
          </span>
            <input type="text" className="form-control" placeholder="Search for..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolbar
