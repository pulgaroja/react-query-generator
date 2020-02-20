import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Select, MenuItem, Input } from '@material-ui/core'

const MenuFilter = ({ filter, updateQuery }) => {
	const [param, setParam] = useState(filter.isMultiple ? [] : '')
	const [query, setQuery] = useState(filter.isMultiple ? [] : '')

	const handleChange = (e, child) => {
		const name = child.props.name
		const value = child.props.value

		if (!filter.isMultiple) {
			const queryString = `${filter.value}:("${value}")`
			updateQuery(value, queryString)
		}

		setParam([...param, name])
		setQuery([...query, value])
	}

	const handleClose = () => {
		// Validate and generate query string
		if (filter.isMultiple) {
			const queryString = query.join(':* AND ') + ':*'
			updateQuery(param, queryString)
		}
	}

	return (
		<div>
			{filter.name}:{' '}
			<Select
				multiple={filter.isMultiple}
				displayEmpty
				value={query}
				onChange={handleChange}
				onClose={handleClose}
				input={<Input style={{ width: 200, maxWidth: 200 }} />}
				renderValue={selected => {
					if (selected.length === 0) {
						return <em>Select Option{filter.isMultiple && 's'}</em>
					}
					return selected.join(', ')
				}}>
				<MenuItem disabled value="">
					<em>Select Option{filter.isMultiple && 's'}</em>
				</MenuItem>
				{filter.options.map(option => {
					if (typeof option === 'string') {
						return (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						)
					} else {
						const [name, value] = option
						return (
							<MenuItem key={value} name={name} value={value}>
								{name}
							</MenuItem>
						)
					}
				})}
			</Select>
		</div>
	)
}

MenuFilter.propTypes = {
	filter: PropTypes.shape({
		name: PropTypes.string,
		value: PropTypes.string,
		type: PropTypes.string,
		options: PropTypes.array,
		isMultiple: PropTypes.bool,
	}).isRequired,
	updateQuery: PropTypes.func.isRequired,
}

export default MenuFilter
