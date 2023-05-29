import React from 'react'
import PropTypes from 'prop-types'

function Card({children, className, isFeatured}) {
	return (
		<div className={`card ${isFeatured ? 'card--featured' : ''}${className ? ' '+ className : ''}`}>
			{children}
		</div>
	)
}

Card.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	isFeatured: PropTypes.bool
}

export default Card
