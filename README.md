# LinkHub - Modern Bio Link Platform

A modern, attractive, and fully responsive bio link platform built with React, Tailwind CSS, and Framer Motion. Connect with your audience through a single, beautifully designed link.

## ✨ Features

- **Modern UI/UX**: Sleek design with glass morphism effects and smooth animations
- **Fully Responsive**: Optimized for all devices - mobile, tablet, and desktop
- **Drag & Drop**: Easily reorder your links with intuitive drag-and-drop functionality
- **Real-time Analytics**: Track clicks, views, and engagement metrics
- **Customizable Themes**: Multiple color schemes and button styles
- **Server Integration**: API-ready for backend connectivity
- **Authentication**: User login/register with JWT tokens
- **Profile Management**: Upload avatars, customize bio and social links

## 🚀 Tech Stack

### Frontend
- **React 19** - Latest React with modern hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Recharts** - Beautiful charts for analytics

### Backend Integration
- **RESTful API** - Ready for Node.js/Express backend
- **JWT Authentication** - Secure token-based auth
- **File Upload** - Avatar upload support
- **Real-time Data** - Sync with server for persistence

## 🛠 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd linkhub-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Backend Setup (Recommended)

For full functionality, set up the backend server:

1. **Node.js Backend** (Example structure):
   ```
   backend/
   ├── controllers/
   │   ├── authController.js
   │   ├── profileController.js
   │   ├── linksController.js
   │   └── analyticsController.js
   ├── models/
   │   ├── User.js
   │   ├── Profile.js
   │   └── Link.js
   ├── routes/
   │   ├── auth.js
   │   ├── profiles.js
   │   ├── links.js
   │   └── analytics.js
   ├── middleware/
   │   └── auth.js
   ├── config/
   │   └── database.js
   └── server.js
   ```

2. **API Endpoints**:
   - `POST /api/auth/login` - User login
   - `POST /api/auth/register` - User registration
   - `GET /api/profiles/:userId` - Get user profile
   - `PUT /api/profiles/:userId` - Update profile
   - `GET /api/users/:userId/links` - Get user links
   - `POST /api/users/:userId/links` - Create new link
   - `PUT /api/users/:userId/links/:linkId` - Update link
   - `DELETE /api/users/:userId/links/:linkId` - Delete link
   - `GET /api/users/:userId/analytics` - Get analytics data

## 📱 Usage

### Dashboard Features
- **My Links**: Add, edit, delete, and reorder links
- **Profile**: Customize your bio, avatar, theme, and social links
- **Analytics**: View detailed engagement metrics
- **Settings**: Configure account preferences

### Public Profile
- Visit `/{username}` to see the public bio link page
- Fully responsive mobile design
- SEO optimized with meta tags

## 🎨 Customization

### Themes
Choose from multiple color themes:
- Indigo (default)
- Purple
- Blue
- Emerald
- Rose
- Orange

### Button Styles
- Solid: Filled buttons
- Soft: Subtle background
- Outline: Border-only buttons

## 📊 Analytics

Track:
- Profile views
- Link clicks
- Click-through rates
- Top performing links
- Daily/weekly/monthly trends

## 🔒 Security

- JWT token authentication
- Secure API endpoints
- Input validation
- XSS protection
- CORS configuration

## 🚀 Deployment

1. **Build the app**:
   ```bash
   npm run build
   ```

2. **Deploy to hosting service** (Vercel, Netlify, etc.)

3. **Set environment variables** on your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please open an issue on GitHub.

---

**Made with ❤️ using React & Tailwind CSS**
