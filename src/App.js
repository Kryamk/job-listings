import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import data from './mock/data.json';
import FilterPanel from './components/FilterPanel';
import Header from './components/Header';
import JobList from './components/JobList';
import { addPositions } from './store/positions/positon-actions';

function App() {
	const dispatch = useDispatch()

	useEffect(()=> {
		dispatch(addPositions(data))
	}, [])

	return (
		<>
			<Header />
			<div className='container'>
				<FilterPanel />
				<JobList />
			</div>
		</>
	);
}

export default App;


function useTest(state) {
	
}
