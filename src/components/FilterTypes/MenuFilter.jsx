import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Select, MenuItem, Input } from '@material-ui/core'

const MenuFilter = ({ filter, updateQuery }) => {
	const [param, setParam] = useState(filter.isMultiple ? [] : '')

	const handleChange = event => {
		const value = event.target.value

		if (!filter.isMultiple) {
			const queryString = `${filter.name}:("${value}")`
			updateQuery(value, queryString)
		}

		setParam(value)
	}

	const handleClose = () => {
		// Validate and generate query string
		if (filter.isMultiple) {
			const queryString = param.join(':* AND ') + ':*'
			updateQuery(param, queryString)
		}
	}

	return (
		<div>
			{filter.name}:{' '}
			<Select
				multiple={filter.isMultiple}
				displayEmpty
				value={param}
				onChange={handleChange}
				onClose={handleClose}
				input={<Input />}
				renderValue={selected => {
					if (selected.length === 0) {
						return <em>Select Option{filter.isMultiple && 's'}</em>
					}
					return selected.join(', ')
				}}
			>
				<MenuItem disabled value="">
					<em>Select Option{filter.isMultiple && 's'}</em>
				</MenuItem>
				{filter.options.map(option => (
					<MenuItem key={option} value={option}>
						{option}
					</MenuItem>
				))}
			</Select>
		</div>
	)
}

MenuFilter.propTypes = {
	filter: PropTypes.shape({
		name: PropTypes.string,
		value: PropTypes.string,
		type: PropTypes.string,
		options: PropTypes.arrayOf(PropTypes.string),
		isMultiple: PropTypes.bool,
	}).isRequired,
	updateQuery: PropTypes.func.isRequired,
}

export default MenuFilter
