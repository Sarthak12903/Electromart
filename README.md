# Electromart E-Commerce Website

Electromart is a sleek and dynamic e-commerce platform for electronic products, built entirely using **ReactJS**, **Redux**, and **Tailwind CSS**. It provides an intuitive and responsive user interface that allows users to browse, sort, and purchase products effortlessly. 

## Features

### User-Friendly Navigation
- **Product Browsing**: Navigate through a variety of electronic products with ease.
- **Sorting Options**: Sort products based on price to find the best deals quickly.

### Advanced Product Interaction
- **Magnify Products**: Zoom in on product images to view details closely.

### Shopping Cart Functionality
- **Add to Cart**: Add products to the cart for purchase.
- **Order Summary**: View a detailed order summary in the cart, including product details and total cost.

## Tech Stack
- **Frontend Framework**: ReactJS
- **State Management**: Redux
- **Styling**: Tailwind CSS

## Getting Started
Follow these steps to run the project locally on your machine.

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/electromart.git
   ```

2. Navigate to the project directory:
   ```bash
   cd electromart
   ```

3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Project Structure

```
Electromart/
├── public/
├── src/
│   ├── components/         # Reusable UI components
│   ├── features/           # Redux slices and logic
│   ├── pages/              # Main pages like Home, Product Details, Cart
│   ├── assets/             # Images and static assets
│   ├── App.js              # Main App component
│   ├── index.js            # Entry point
│   └── styles/             # Global Tailwind styles
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

## Key Features Implementation

### Sorting Products by Price
- Sorting functionality is integrated to help users sort products in ascending or descending order of price.

### Magnifying Product Images
- Implemented using React state to handle hover or click events that display a magnified version of the product image.

### Shopping Cart
- Built using Redux to manage state for:
  - Adding items to the cart
  - Removing items from the cart
  - Displaying the total number of items and cost in the cart

## Available Scripts

- `npm start`: Runs the app in the development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.

## Screenshots

### Home Page
![Home](https://github.com/user-attachments/assets/f8206b97-b9f1-45f7-a6d4-20c816de0c12)

### Product Page
![Product](https://github.com/user-attachments/assets/49d3613a-055d-47d3-8ea9-3a3db2d70f57)

### Product Details
![Product Detail](https://github.com/user-attachments/assets/22db0c57-00ef-4878-afb2-2099f3cfe745)

### Cart
![Cart](https://github.com/user-attachments/assets/e44e3924-01a3-4cab-b2bb-527582463170)


## Future Enhancements
- Add user authentication for personalized experience.
- Integrate a payment gateway for seamless checkout.
- Introduce additional sorting and filtering options.

## Contributing
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.


---

Thank you for checking out Electromart! Feel free to contribute or share your feedback to make it even better.
