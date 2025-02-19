

# Wedding Matrimony

A responsive online matrimony platform designed to connect users with potential life partners. This project leverages modern web technologies to deliver a seamless and user-friendly experience.

## 🌐 Live Site
[Wedding Matrimony](https://quiet-dolphin-039180.netlify.app/)

## 📝 Project Features
1. **Responsive Design**:
   - Fully responsive for mobile, tablet, and desktop devices.
   - Dashboard layout adapts across all screen sizes.

2. **Authentication**:
   - Email/password login and registration.
   - Google Sign-In integration.
   - JWT-based authentication to manage secure routes.

3. **Premium Membership**:
   - Showcases premium biodata profiles on the homepage.
   - Users can request and upgrade to premium membership.

4. **Dynamic Dashboard**:
   - Personalized user dashboard for editing/viewing biodata, managing contact requests, and viewing favorites.
   - Admin dashboard for managing users, approving premium requests, and tracking revenue.

5. **Biodata Management**:
   - Create, edit, and view biodata with detailed information like age, occupation, division, and contact info.
   - Filter biodata by age, gender, and division.
   - Pagination for biodata listing.

6. **Success Stories**:
   - Displays success stories with couple images, marriage dates, and reviews.
   - Users can submit their own success stories.

7. **Admin Features**:
   - Manage users with the ability to make users admins or premium members.
   - Approve contact information and premium membership requests.
   - Visualize biodata statistics using charts.

8. **Payment Integration**:
   - Stripe payment integration for requesting contact information.

9. **Notifications**:
   - SweetAlert2 and Toastify used for notifications and feedback for CRUD operations.

10. **Third-Party Libraries**:
    - Utilized powerful libraries like Tanstack Query, Material Tailwind, React Slick, and more.

## 🚀 Tech Stack
- **Frontend**: React, Material Tailwind, Framer Motion, React Router, Tanstack Query
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: Firebase Auth, JWT
- **Payment**: Stripe
- **Hosting**: Firebase Hosting

## 📦 Dependencies
```json
"dependencies": {
    "@fortawesome/fontawesome-free": "^6.7.2",
    "@material-tailwind/react": "^2.1.10",
    "@tanstack/react-query": "^5.64.2",
    "animate.css": "^4.1.1",
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "framer-motion": "^11.18.1",
    "jsonwebtoken": "^9.0.2",
    "localforage": "^1.10.0",
    "lucide-react": "^0.474.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-awesome-reveal": "^4.3.1",
    "react-countup": "^6.5.3",
    "react-dom": "^18.3.1",
    "react-google-button": "^0.8.0",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.1",
    "react-select": "^5.10.0",
    "react-slick": "^0.30.3",
    "react-toastify": "^11.0.3",
    "react-vertical-timeline-component": "^3.5.3",
    "slick-carousel": "^1.8.1",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.15.10"
}
```

## 📂 Folder Structure
- **Frontend**: Handles the user interface and interactions using React and Material Tailwind.
- **Backend**: Provides APIs for authentication, biodata management, and admin features using Express and MongoDB.

## 🔑 Admin Credentials
- **Email**: admin@matrimonial.com
- **Password**: Admin123

