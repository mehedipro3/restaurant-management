# Restaurant Management System 🍽️

Live Demo: [restaurant-management-c9712.web.app/dashboard/userHome](https://restaurant-management-c9712.web.app/dashboard/userHome)

---

## Description

A full‑stack restaurant management dashboard built with React, Tailwind, and React Query on the frontend, and a secure backend with role‑based routing. Users can browse menu items, place orders, and view personalized dashboards. Admins can monitor revenue, user and order statistics via charts.

---

## Features

- **User Dashboard**: Browse menu, place orders, and track order status.
- **Admin Dashboard**: View metrics like revenue, total orders, new users, menu items.
- **Real‑time Statistics**: Revenue and orders shown with analytics charts.
- **Secure API**: Role-based authentication using `axiosSecure` and protected routes.
- Fully responsive UI with modern styling components.

---

## Tech Stack

| Layer         | Technology              |
|---------------|-------------------------|
| Frontend      | React, React Query, Recharts, Tailwind CSS, React Icons |
| Backend       | Axios Secure, Protected APIs |
| Hosting       | Deployed on Firebase Hosting |

---

## 📦 Installation & Local Setup

1. Fork or clone this repo:
    ```bash
    git clone https://github.com/mehedipro3/restaurant-management.git
    ```
2. Navigate to the project directory:
    ```bash
    cd restaurant-management
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Copy your environment variables:
    ```bash
    cp .env.example .env
    # Then add your Firebase/Firebase config or backend endpoint details
    ```
5. Start the development server:
    ```bash
    npm run dev
    ```
6. Visit `http://localhost:5173` to explore the application.

---

## 🛠️ Usage Examples

- **User Dashboard**: Navigate to `/dashboard/userHome` to view menu and place orders.
- **Admin Dashboard**: Visit `/dashboard/adminHome` to access statistics and charts:
  
  ✅ Ensure `stats` and `chartData` are fetched before rendering to prevent errors.  
  Example syntax:
  ```js
  <div className="stat-value">${stats?.revenue || 0}</div>
  {Array.isArray(chartData) &&
    chartData.map((entry, index) => {/* render */})
  }
