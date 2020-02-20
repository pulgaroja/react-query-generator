import { FilterTypes } from './components/Filter'

const requiredFieldOptions = {
	ASINS: 'asins',
	Brand: 'brand',
	'Primary Categories': 'primaryCategories',
	Colors: 'colors',
	Count: 'count',
	'Date Added': 'dateAdded',
	Descriptions: 'descriptions',
	Dimensions: 'dimension',
	Features: 'features',
	EAN: 'ean',
	Flavors: 'flavors',
	'Image URLs': 'imageURLs',
	ISBN: 'isbn',
	Manufacturer: 'manufacturer',
	'Manufacturer Number': 'manufacturerNumber',
	Merchants: 'merchants',
	Name: 'name',
	Prices: 'prices',
	Quantities: 'quantities',
	Reviews: 'reviews',
	Sizes: 'sizes',
	SKUs: 'skus',
	'Source URLs': 'sourceURLs',
	UPC: 'upc',
	VIN: 'vin',
	'Website IDs': 'websiteIDs',
	Weight: 'weight',
}

/**
 * The list of filters offerred to generate the query
 * these are passed as props as they may vary depending
 * on the parent component
 */
export const filterOptions = [
	{
		value: 'name',
		name: 'Product Name',
		type: FilterTypes.INPUT,
		isMultiple: false,
	},
	{
		value: 'manufacturer',
		name: 'Manufacturer',
		type: FilterTypes.INPUT,
		isMultiple: false,
	},
	{
		value: 'sourceURLs',
		name: 'Source URLs',
		type: FilterTypes.INPUT,
		isMultiple: true,
	},
	{
		value: 'primaryCategories',
		name: 'Primary Categories',
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
		value: 'dateAdded',
		name: 'Date Added',
		type: FilterTypes.DATE,
		isMultiple: false,
	},
	{
		value: 'dateUpdated',
		name: 'Date Updated',
		type: FilterTypes.DATE,
		isMultiple: false,
	},
	{
		value: 'requiredFields',
		name: 'Required Fields',
		type: FilterTypes.MENU,
		options: Object.keys(requiredFieldOptions).map(key => {
			return [key, requiredFieldOptions[key]]
		}),
		isMultiple: true,
	},
]
