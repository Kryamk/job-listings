import React from 'react'
import PropTypes from 'prop-types'

function Stack({ children, pos }) {
	return (
		<div className='stack' style={{ justifyContent: pos === 'center' ? 'center' : `flex-${pos}` }}>
			{children}
		</div>
	)
}

Stack.propTypes = {
	children: PropTypes.node.isRequired,
	pos: PropTypes.string
}

export default Stack
