const product = { name: 'Milk', packaging: 'Plastic', price: '5$' }
const manufacturer = { name: 'Company Name', address: 'The Company Address' }  
const productManufacturer = { ...manufacturer, ...product };
console.log(productManufacturer); 