import React from 'react'
import Filter, { FilterTypes } from './components/Filter'

import './styles.css'

/**
 * The list of filters offerred to generate the query
 * these are passed as props as they may vary depending
 * on the parent component
 */
const filterOptions = [
	{
		name: 'name',
		value: 'Product Name',
		type: FilterTypes.INPUT,
		isMultiple: false,
	},
	{
		name: 'manufacturer',
		value: 'Manufacturer',
		type: FilterTypes.INPUT,
		isMultiple: false,
	},
	{
		name: 'sourceURLs',
		value: 'Source URLs',
		type: FilterTypes.INPUT,
		isMultiple: true,
	},
	{
		name: 'primaryCategories',
		value: 'Primary Categories',
		type: FilterTypes.MENU,
		options: [
			'Animals & Pet Supplies',
			'Apparel & Accessories',
			'Arts & Entertainment',
			'Baby & Toddler',
			'Business & Industrial',
			'Electronics',
			'Food Beverages & Tobacco',
			'Furniture',
			'Hardware',
			'Health & Beauty',
			'Home & Garden',
			'Luggage & Bags',
			'Media',
			'Office Supplies',
			'Shoes',
			'Software',
			'Sporting Goods',
			'Toys & Games',
			'Vehicles & Parts',
		],
		isMultiple: false,
	},
	{
		name: 'dateAdded',
		value: 'Date Added',
		type: FilterTypes.DATE,
		isMultiple: false,
	},
	{
		name: 'dateUpdated',
		value: 'Date Updated',
		type: FilterTypes.DATE,
		isMultiple: false,
	},
	{
		name: 'requiredFields',
		value: 'Required Fields',
		type: FilterTypes.MENU,
		options: [
			'asins',
			'brand',
			'primaryCategories',
			'colors',
			'count',
			'dateAdded',
			'descriptions',
			'dimension',
			'features',
			'ean',
			'flavors',
			'imageURLs',
			'isbn',
			'manufacturer',
			'manufacturerNumber',
			'merchants',
			'name',
			'prices',
			'quantities',
			'reviews',
			'sizes',
			'skus',
			'sourceURLs',
			'upc',
			'vin',
			'websiteIDs',
			'weight',
		],
		isMultiple: true,
	},
]

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
