import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Grid = ({ desktop, mobile, padded, className, children, ...props }) => {
  const gridClass = classNames(
    {
      desktop,
      mobile,
      padded,
    },
    className?.split(' '),
  )
  return (
    <r-grid class={gridClass} {...props}>
      {children}
    </r-grid>
  )
}

Grid.propTypes = {
  desktop: PropTypes.bool,
  mobile: PropTypes.bool,
  padded: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.shape({
    columns: PropTypes.number,
    'columns-s': PropTypes.number,
  }),
}

export default Grid
