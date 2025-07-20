# 🍽️ Swiggy Clone — React.js

A frontend clone of the popular food delivery platform **Swiggy**, built using **React.js** and **Tailwind CSS**.  
This project simulates core features like restaurant listings, menu browsing, cart management, and search functionality — all wrapped in a modern, responsive UI.

---

## 🚀 Features

- 🔍 Search restaurants and dishes  
- 🍽️ Browse restaurants by categories  
- 📜 View menus for individual restaurants  
- 🛒 Add / remove items from cart  
- 📱 Fully responsive (mobile-friendly)  
- ⚡ Smooth, fast user experience powered by React  

---

## 🛠️ Tech Stack

- **React.js**  
- **React Router**  
- **Redux**  
- **Tailwind CSS**  
- **React Icons**  
- **Swiggy Public API (via CORS Proxy)**  

---

## ⚠️ Important Note Before Running the App

Swiggy’s public APIs are protected by **CORS (Cross-Origin Resource Sharing)** restrictions, which block direct browser access.  
To fetch real-time data successfully, this project uses a **CORS proxy**.

👉 **Step:**  
Visit: [https://cors-anywhere.herokuapp.com/](https://cors-anywhere.herokuapp.com/)  
Click **"Request temporary access to the demo server."**

Without this step, API requests will fail, and the app may not load restaurant data.

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

```bash
# Clone this repository
git clone https://github.com/Anshikagoel11/Swiggy.git

# Navigate into the project directory
cd Swiggy

# Install dependencies
npm install

# Start the development server
npm start
