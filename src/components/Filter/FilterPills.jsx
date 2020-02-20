import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

/**
 * Using Material UI makeStyles to create custom classes
 */
const useStyles = makeStyles({
	pill: {
		backgroundColor: '#D1F6F6',
		color: '#43425D',
		margin: 5,
		padding: 10,
		borderRadius: 4,
		alignSelf: 'center',
	},
})

/**
 * Functional React Component which allows for custom creation
 * of the added filters
 */
const FilterPills = ({ filters }) => {
	// Custom Classes generated by Material UI
	const classes = useStyles()
	return (
		<Fragment>
			{filters.map(({ filter, value }, index) => (
				<div key={index} className={classes.pill}>
					{filter.isMultiple && (
						<span>
							{filter.name}: {value.join(', ')}
						</span>
					)}
					{!filter.isMultiple && (
						<span>
							{filter.name}: {value}
						</span>
					)}
				</div>
			))}
		</Fragment>
	)
}

FilterPills.propTypes = {
	filter: PropTypes.arrayOf(
		PropTypes.shape({
			filter: PropTypes.shape({
				name: PropTypes.string,
				value: PropTypes.string,
				isMultiple: PropTypes.bool,
			}),
			value: PropTypes.string,
		}),
	),
}

export default FilterPills
