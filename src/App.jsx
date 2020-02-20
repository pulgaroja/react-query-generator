import React from 'react'
import Filter from './components/Filter'
import { filterOptions } from './constants'

import './styles.css'

const App = () => {
	/**
	 * Function that handles onClick for the Search button
	 */
	const handleSearch = query => {
		// For now we're only printing the query string generated
		console.log(query)
		console.log(encodeURI(query))
	}

	return (
		<div className="App">
			<h1>Query Generator</h1>
			<Filter filterOptions={filterOptions} handleSearch={handleSearch} />
		</div>
	)
}

export default App
