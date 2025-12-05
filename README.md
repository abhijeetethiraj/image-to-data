Product Data Capture App

This Angular project allows users to upload or capture an image that contains tabular data.
The app extracts the data (mock OCR for now) and displays it in a sortable, filterable, and paginated table using Angular Material.

Features

Upload or capture an image (camera support)

Mock OCR (extracts sample data)

Data stored in a service and displayed in a table

Search filter to find products quickly

Sorting by name, category, quantity, or price

Pagination with adjustable page size

Navigation between pages using Angular Router

Project Structure
src/
 ├── app/
 │   ├── pages/
 │   │   ├── image-to-data/
 │   │   │   ├── image-to-data.html
 │   │   │   ├── image-to-data.ts
 │   │   ├── product-list/
 │   │   │   ├── product-list.html
 │   │   │   ├── product-list.ts
 │   ├── services/
 │   │   ├── data.ts
 │   ├── models/
 │   │   ├── product.model.ts
 │   ├── app.routes.ts
 │   ├── main.ts
 │   ├── app.css
