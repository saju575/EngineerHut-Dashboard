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

This will be in form of form data.

2.DELETE request endpoint for Product

- /api/v1/products/product/:id

## Request Format

The API expects a valid mongoodb id as a parametar that is present in the database.
