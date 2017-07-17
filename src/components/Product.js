// Code Product Component Here

import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    return (
       <div className="product">
       <p>Name:{this.props.name}</p>
       <p>Producer:{this.props.producer}</p>
       <p>Water Mark:{this.props.hasWatermark}</p>
       <p>Color:{this.props.color}</p>
       </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: (props, propName) => {
     if (props[propName] < 80 && props[propName] < 300) {
       return new Error('Weight should be between 80-300!')
     } else if (props[propName] == undefined) {
       return new Error('Weight is required!')
     } else if (isNaN(props[propName])) {
       return new Error('Weight must be a number!')
     }
}
}
