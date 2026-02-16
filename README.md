# Orange Project

This project was developed as part of a technical challenge with the goal of demonstrating skills in **modern frontend development**, including user authentication, session management, API consumption, and component organization using **React**.

The application allows users to log in and view different collections (Foods, People, and Places) consumed from a CMS API (Strapi), with authentication control and protected routes.

---

##  Project Context

The main objective of this project is to demonstrate the complete implementation of:

* User authentication system
* Frontend session management
* Route protection
* REST API consumption
* Component organization
* Fidelity to the proposed layout

The application uses **Strapi as the backend** for authentication and data management.

##  Features

*  User login via API
*  Session storage using JWT
*  Protected private routes
*  Consumption of multiple API collections
*  Visual feedback for loading and errors
*  Responsive interface based on the proposed layout

##  Project Architecture

Organization based on separation of responsibilities:

```
src/
  assets/
  
  components/
    Header.css
    Header.jsx
    Card.css
    Card.jsx
    CollectionList.css
    CollectionList.jsx
  
  pages/
    Login.jsx
    Login.css
    Home.jsx
  
  routes/
    ProtectedRoute.jsx
  
  services/
    auth.js
    session.js
  
  styles/
    globals.css
  
  App.jsx
  main.jsx

```

##  Technologies Used

### Frontend

* React 18
* React Router DOM
* JavaScript (ES6+)
* CSS3

### Backend

* Strapi CMS
* JWT Authentication
* SQLite

### Tools

* Vite
* NVM (Node Version Manager)
* Node.js
* Git
* GitHub

### Node Version Requirements (IMPORTANT)

This project uses different Node versions for backend and frontend.

* Strapi Backend → Node 14

* React Frontend → Node 20
  
```
nvm install 14
nvm install 20
```

It is strongly recommended to use NVM to manage Node versions.

##  Authentication and Session

The system uses:

* JWT Token
* LocalStorage

Stored data:

```
token
user
```

Access control:

* Non-authenticated users cannot access `/home`
* Authenticated users are automatically redirected


##  API Integration

API used:

```
http://localhost:1337
```

Endpoints:

```
POST /auth/local
GET /foods
GET /people
GET /places
```
---

# How to run the project locally

### 1. Clone the repository

```bash
git clone https: https://github.com/pedroozanatta/orange-project
```

### 2. Navigate into the folder

```bash
cd orange-project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the project

```bash
npm run dev
```

### 5. Open in your browser

```
http://localhost:5173
```

## Important: Run Strapi Backend

The backend must be running:

```bash
cd backend

npm run develop
```

Default API:

```
http://localhost:1337
```

## Test User

Created directly in the Strapi panel:

```
email: axioner@axion.company
password: Axioner123
```

*(or use your own user created in Strapi)*


##  Route Protection

Protected routes:

```
/home
```

Public routes:

```
/
```

##  Layout

The interface was developed based on the proposed design: [MarvelApp](https://marvelapp.com/prototype/35gh79g/screen/48059680)

Color Tokens:
* #4A4A4A
* #AE23A9
* #DC4E1B
* #9B9B9B
* #FFFFFF
* #F9F9F9

Font Family: [Open Sans](https://fonts.google.com/specimen/Open+Sans)
