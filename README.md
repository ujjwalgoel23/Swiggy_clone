# 🍔 Swiggy Clone — React.js

A fully responsive **Swiggy Clone** created using **React.js** and **Tailwind CSS**. This project is built to replicate the core functionality of the Swiggy platform, offering users the ability to browse restaurants, explore menus, manage their cart, and search for food — all within a fast and smooth web app.

---

## ✨ Key Highlights

- 🔍 Search for restaurants and food items  
- 📂 Filter restaurants by categories  
- 📋 View detailed menus for individual restaurants  
- 🛒 Easily add or remove items from your cart  
- 📱 Optimized for both desktop and mobile devices  
- ⚡ Lightning-fast and seamless user experience  

---

## 🔧 Tools & Technologies Used

- **React.js** for building the UI  
- **React Router** for navigation and routing  
- **Redux** for global state management  
- **Tailwind CSS** for modern, responsive styling  
- **React Icons** for icons  
- **Public API** from Swiggy (via a CORS Proxy)  

---

## ⚠️ Important Setup Before Running

Swiggy’s APIs come with **CORS restrictions**, which prevent direct API calls from your browser. To access real-time data, this project makes use of a **CORS proxy service**.

👉 **How to Enable API Access:**  
Visit: [https://cors-anywhere.herokuapp.com/](https://cors-anywhere.herokuapp.com/)  
Click on **"Request temporary access to the demo server."**

If you skip this step, data may fail to load due to blocked API requests.

---

## 🚀 How to Run Locally

You can follow the steps below to set up this project on your machine:

```bash
# Download the repository
git clone https://github.com/ujjwalgoel23/Swiggy_clone.git

# Go to the project directory
cd Swiggy

# Install required dependencies
npm install

# Start the application
npm start
