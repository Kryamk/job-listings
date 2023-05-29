import React from 'react'
import PropTypes from 'prop-types'
import Remove from '../assets/images/icon-remove.svg'

function Badge({ children, variant = 'basic', colorScheme='light', onClear, onClick }) {
	return (
		<div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick}>
			<span>{children}</span>
			{variant === 'clearable' && (
				<div className="badge-remover" onClick={onClear}>
					<Remove/>
				</div>
			)}
		</div>
	)
}

Badge.propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf(['basic', 'clearable', 'rounded']),
	colorScheme: PropTypes.oneOf(['light', 'primary', 'dark']),
	onClear: PropTypes.func,
	onClick: PropTypes.func
}

export default Badge
