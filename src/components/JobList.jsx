import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { selectVisiblePositions } from '../store/positions/position-selectors'
import JobPosition from './JobPosition'
import { selectFilters } from '../store/filters/filter-selectors'
import { addFilter } from '../store/filters/filter-actions'

function JobList() {
	const currentFitlers = useSelector(selectFilters)
	const positions = useSelector(state => selectVisiblePositions(state, currentFitlers))

	const dispatch = useDispatch()

	const handleAddFilter = (filter) => {
		dispatch(addFilter(filter))
	}


	return (
		<div className='job-list'>
			{positions.map(item => (
				<JobPosition
					key={item.id}
					handleAddFilter={handleAddFilter}
					{...item}
				/>
			))}
		</div>
	)
}

export default JobList
