import React from 'react'
import PropTypes from 'prop-types'
import { FilterTypes } from '.'
import InputFilter from '../FilterTypes/InputFilter'
import MenuFilter from '../FilterTypes/MenuFilter'
import DateFilter from '../FilterTypes/DateFilter'

/**
 * Functional React Component which allows for custom creation
 * of the actual filter Inputs
 */
const FilterInput = ({ filter, updateQuery }) => {
	const showInput = () => {
		switch (filter.type) {
			case FilterTypes.INPUT:
				return <InputFilter filter={filter} updateQuery={updateQuery} />
			case FilterTypes.MENU:
				return <MenuFilter filter={filter} updateQuery={updateQuery} />
			case FilterTypes.DATE:
				return <DateFilter filter={filter} updateQuery={updateQuery} />
			default:
				return <div />
		}
	}
	return showInput()
}

FilterInput.propTypes = {
	filter: PropTypes.shape({
		name: PropTypes.string,
		value: PropTypes.string,
		type: PropTypes.string,
		options: PropTypes.array,
		isMultiple: PropTypes.bool,
	}).isRequired,
	updateQuery: PropTypes.func.isRequired,
}

export default FilterInput
