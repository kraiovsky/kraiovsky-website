import React from 'react'
import PropTypes from 'prop-types'

const Healthcheck = ({ status }) => {
  return (
    <div className="healthcheck">
      <code>
        API is{' '}
        <span className="healthcheck">
          {typeof status === 'undefined' ? (
            <span className="pinging">[pinging...]</span>
          ) : status ? (
            <span className="up">up</span>
          ) : (
            <span className="down">down</span>
          )}
        </span>
      </code>
    </div>
  )
}

Healthcheck.propTypes = {
  status: PropTypes.bool,
}

export default Healthcheck
