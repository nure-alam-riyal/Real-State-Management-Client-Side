
# 🏡 **Dream Nest Real Estate**  

A **modern real estate e-commerce platform** built with **React.js, Firebase, TailwindCSS, and DaisyUI**. This platform allows users to **buy, sell, and rent properties** with three distinct user roles:  

1. **Admin** – Manages users, property listings, and transactions.  
2. **Agent** – Adds and manages property listings.  
3. **Customer** – Browses, searches, and purchases/rents properties.  

This project is the **front-end** implementation of the real estate platform, with a focus on **UI/UX, authentication, payments, and interactivity**.

---
# Amin   Email:dreamnest@gmail.com  pass:Aa123!

# agent  Email:banui34@gmail.com    pass:Aa123!
## 🎮 **Usage**  

- **Admin**: Manages users, property listings, and payments.  
- **Agent**: Lists new properties and manages their listings.  
- **Customer**: Browses, searches, saves favorites, and purchases/rents properties.  

---


## 🌍 **Live Demo**  

🔗 **[Live Project](https://real-state-asset.web.app/)**  



## 📜 **Table of Contents**  

- [🚀 Features](#-features)  
- [🌍 Live Demo](#-live-demo)  
- [🔧 Installation](#-installation)  
- [🎮 Usage](#-usage)  
- [⚙️ Configuration](#-configuration)  
- [📦 Dependencies](#-dependencies)  
- [📂 Project Structure](#-project-structure)  
- [🐞 Troubleshooting](#-troubleshooting)  
- [👥 Contributors](#-contributors)  
- [📜 License](#-license)  

---

## 🚀 **Features**  

✔ **Role-Based Access** (Admin, Agent, Customer)  
✔ **Secure Authentication** (Firebase Authentication)  
✔ **Payment Gateway** (Stripe Integration)  
✔ **Advanced Search & Filtering**  
✔ **Responsive UI with TailwindCSS & DaisyUI**  
✔ **Property Listing Management** (for Agents & Admin)  
✔ **Favorites & Wishlist** (for Customers)  
✔ **Notifications & Alerts** (React Hot Toast & SweetAlert2)  

---

## 🔧 **Installation**  

### **1️⃣ Prerequisites**  

Ensure you have the following installed before running the project:  
- **[Git](https://git-scm.com/)**  
- A **Firebase account** (for authentication & Firestore)  
- A **Stripe account** (for payment processing)  

### **2️⃣ Clone the Repository**  

```sh
git clone https://github.com/nure-alam-riyal/Real-State-Management-Client-Side.git
cd Real-State-Management-Client-Side
```

### **3️⃣ Install Dependencies**  

```sh
npm install
```

### **4️⃣ Set Up Environment Variables**  

Create a **`.env.local`** file in the root directory and add the following:  

```ini
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### **5️⃣ Run the Development Server**  

```sh
npm run dev
```

The project should now be running at **http://localhost:5173/** 🚀.  

---



## ⚙️ **Configuration**  

- **Styling**: Modify `tailwind.config.js` for design changes.  
- **Database**: Set up Firebase Firestore and authentication rules.  
- **Payments**: Update Stripe settings in the `.env.local` file.  

---

## 📦 **Dependencies**  

This project uses the following **npm packages**:  

### **Core Dependencies**  

| Package | Version | Description |
|---------|---------|-------------|
| **React** | `^18.3.1` | Front-end library |
| **React DOM** | `^18.3.1` | React virtual DOM |
| **React Router DOM** | `^7.1.1` | Client-side routing |
| **Axios** | `^1.7.9` | HTTP requests |
| **Firebase** | `^11.1.0` | Authentication & Firestore |
| **TailwindCSS** | `^3.4.17` | Utility-first CSS framework |
| **DaisyUI** | `^4.12.23` | TailwindCSS component library |
| **Ant Design** | `^5.23.0` | UI framework |

### **Payment & Security**  

| Package | Version | Description |
|---------|---------|-------------|
| **@stripe/react-stripe-js** | `^3.1.1` | Stripe integration for React |
| **@stripe/stripe-js** | `^5.5.0` | Stripe JavaScript library |

### **Development Tools**  

| Package | Version | Description |
|---------|---------|-------------|
| **Vite** | `^6.0.5` | Build tool |
| **ESLint** | `^9.17.0` | Code linting |
| **PostCSS** | `^8.4.49` | CSS processing |
| **Autoprefixer** | `^10.4.20` | Auto-prefix CSS |

---

## 📂 **Project Structure**  

```
📂 real-estate-management
│── 📂 src
│   ├── 📂 assets          # Images, icons, and styles
│   ├── 📂 components      # Reusable UI components
│   ├── 📂 pages           # Pages (Home, Listings, Dashboard, etc.)
│   ├── 📂 hooks           # Custom React hooks
│   ├── 📂 context         # Global state management
│   ├── 📂 utils           # Utility functions
│   ├── 📜 App.js          # Main app file
│   ├── 📜 main.jsx        # React entry point
│── 📜 .env.local          # Environment variables
│── 📜 .gitignore          # Ignored files
│── 📜 package.json        # Dependencies & scripts
│── 📜 README.md           # Documentation
```

---

## 🐞 **Troubleshooting**  

| Issue | Solution |
|--------|---------|
| 🔥 Firebase auth error | Check `.env.local` for correct Firebase API keys |
| 💳 Payment issues | Ensure correct Stripe API keys in `.env.local` |
| 🎨 Styling issues | Restart the dev server after modifying TailwindCSS |
| 🔍 Search not working | Check if property data is correctly fetched |

---

## 👥 **Contributors**  

- **Your Name** - [GitHub Profile](https://github.com/your-username)  
- **Contributor Name** - [GitHub Profile](https://github.com/contributor-username)  

---

## 📜 **License**  

This project is licensed under the **MIT License**.  

---

✨ **Happy Coding!** 🚀  

---


