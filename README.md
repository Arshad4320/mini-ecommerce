🛒 Mini Mobile E-commerce

Live Demo: mini-mobile-ecommerce.netlify.app

📌 Project Overview

Mini Mobile E-commerce is a small but fully functional e-commerce web application where users can browse mobile phone products by category, add them to the cart, and manage orders.

This project is built using React + Vite, Tailwind CSS, Firebase Authentication, and LocalStorage to create a fast and modern frontend application.

🚀 Features
🛍️ Product Management

All products are displayed category-wise (Samsung, Xiaomi, iPhone, etc.).

Separate sections for Latest Products and Best Sell Products.

Each product card includes:

Image

Title

Price

Details button

Add to Cart button

🛒 Cart Functionality

Add to Cart: Users can add products to the cart.

Remove from Cart: Users can remove products from the cart.

Cart data is stored in LocalStorage, so it persists even after page refresh.

🔐 Authentication (Private Route)

Firebase Authentication is used for Login/Register System.

Only logged-in users can access the Cart Page (Private Route).

🌐 UI/UX

Responsive and clean design using Tailwind CSS and DaisyUI.

Includes Header, Footer, and Responsive Navbar for a user-friendly interface.

Smooth animations using Framer Motion for category and product sections.

Marquee section shows brand names scrolling for enhanced visual appeal.

⚙️ Tech Stack
Category	Technology
Frontend	React 19 + Vite
Styling	Tailwind CSS + DaisyUI
Animation	Framer Motion
Icons	React Icons + Lucide React
Authentication	Firebase
Routing	React Router v7
Notifications	React Toastify
State & Storage	useState + LocalStorage
📁 Project Structure
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── OrderCart.jsx
│   └── PrivateRoute.jsx
├── pages/
│   ├── Home.jsx
│   ├── Category.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── firebase/
│   └── firebase.config.js
├── utils/
│   └── localStorageUtils.js
├── App.jsx
└── main.jsx

🔧 How to Run Locally
# Clone this repository
git clone https://github.com/yourusername/mini-ecommerce.git

# Go inside project folder
cd mini-ecommerce

# Install dependencies
npm install

# Start the development server
npm run dev

📚 Learning Outcome

By building this project, I learned:

React Routing and Private Route Implementation

Firebase Authentication (Sign In, Sign Up, Logout)

LocalStorage for persistent data storage

Rendering products category-wise

React Component Reusability and Props Handling

Responsive design using Tailwind CSS and DaisyUI

⏱️ Development Time

The project took 2 days to complete.

👨‍💻 Developer

Name: Arshad Ullah
Role: Frontend Developer (React.js)
Email: mdarshadullah835@email.com

Live Link: mini-mobile-ecommerce.netlify.app