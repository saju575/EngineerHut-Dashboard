## Ecomarce API (Working in Progress...)

note: this readme fill will be changed after completion of project.

### End point

Main end point for Product
/api/v1/products (route end point)

1.POST request endpoint for Product

- /api/v1/products/product

## Request Format

The API expects a JSON request body with the following required fields:

- `name` (String): The name of the product.
- `description` (String): A description of the product.
- `price` (Number): The price of the product.
- `mainPrice` (Number): The main price of the product.
- `shippingFee` (Number): The shipping fee for the product.
- `taxRate` (Number): The tax rate for the product.
- `category` (String): The category of the product.
- `stock` (Number): The stock quantity of the product.
- `image` (imagefile): Only accept 'jpg','jpeg','png','gif'. 1 to 10.
- `sku` (String): The SKU (Stock Keeping Unit) of the product.

Optional fields:

- `size` (String): The size of the product.
- `color` (String): The color of the product.
- `weight` (Number): The weight of the product.
- `brand` (String): The brand of the product.
- `discountPrice` (String): The discount price of the product.

This will be in form of form data.

2.DELETE request endpoint for Product

- /api/v1/products/product/:id

## Request Format

The API expects a valid mongoodb id as a parametar that is present in the database.

3.GET request endpoint for Products

- /api/v1/products/all

### Description

This endpoint allows you to retrieve a list of all products.

### Query Parameters

- `search` (optional, string): Perform a global search by name, description, or SKU.
- `page` (optional, integer, default: 1): Specify the page number for pagination.
- `perPage` (optional, integer, default: 10): Specify the number of items per page.
- `minPrice` (optional, number): Filter products by a minimum price.
- `maxPrice` (optional, number): Filter products by a maximum price.
- `category` (optional, string): Filter products by category.
- `brand` (optional, string): Filter products by brand.
- `size` (optional, string): Filter products by size.

### Example

```http
GET http://localhost:5000/api/v1/products/all?search=example&minPrice=10&maxPrice=50&page=2&perPage=20
```
