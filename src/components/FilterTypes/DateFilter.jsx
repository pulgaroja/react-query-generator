import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

const DateFilter = ({ filter, updateQuery }) => {
	const handleChange = newDate => {
		const date = moment(newDate).format('MMM Do, YYYY')
		const queryDate = moment(newDate).format('YYYY-MM-DD')
		updateQuery(date, `${filter.name}:[${queryDate} TO *]`)
	}

	return (
		<div>
			{filter.name}: <DatePicker onChange={handleChange} />
		</div>
	)
}

DateFilter.propTypes = {
	filter: PropTypes.shape({
		name: PropTypes.string,
		value: PropTypes.string,
		type: PropTypes.string,
		isMultiple: PropTypes.bool,
	}).isRequired,
	updateQuery: PropTypes.func.isRequired,
}

export default DateFilter
