import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Cell = ({
  left,
  center,
  right,
  top,
  desktop,
  mobile,
  padded,
  className,
  children,
  ...props
}) => {
  const cellClass = classNames(
    {
      left,
      center,
      right,
      top,
      desktop,
      mobile,
      padded,
    },
    className?.split(' '),
  )
  return (
    <r-cell class={cellClass} {...props}>
      {children}
    </r-cell>
  )
}

Cell.propTypes = {
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  desktop: PropTypes.bool,
  mobile: PropTypes.bool,
  padded: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
  position: PropTypes.string,
  props: PropTypes.shape({
    span: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    'span-s': PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
}

export default Cell
