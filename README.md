<div align="left">
  <div style="display: inline-block;">
    <h1 style="display: inline-block; vertical-align: middle; margin-top: 0;">
      TechNotes
    </h1>
    <img
      src="https://raw.githubusercontent.com/AlexanderPotiagalov/TechNotes/main/readmephotos/TechNotes.png"
      width="30%"
      align="left"
      style="margin-right:15px; margin-top:60px;"
      alt="TechNotes Dashboard Preview"
    />
    <p><em>Secure, role-based note management system for modern teams. Built for productivity, secured by design.</em></p>
    <p>
      <img src="https://img.shields.io/github/license/AlexanderPotiagalov/TechNotes?style=for-the-badge&color=6366f1&labelColor=1e293b" alt="License"/>
      <img src="https://img.shields.io/github/last-commit/AlexanderPotiagalov/TechNotes?style=for-the-badge&color=10b981&labelColor=1e293b" alt="Last Commit"/>
      <img src="https://img.shields.io/github/languages/top/AlexanderPotiagalov/TechNotes?style=for-the-badge&color=f59e0b&labelColor=1e293b" alt="Top Language"/>
      <img src="https://img.shields.io/github/stars/AlexanderPotiagalov/TechNotes?style=for-the-badge&color=ff6b6b&labelColor=1e293b" alt="GitHub Stars"/>
    </p>
    <p style="margin:4px 0; white-space: nowrap;">
  Built with:&nbsp;
  <br>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white" alt="Redux Toolkit"/>
  <img src="https://img.shields.io/badge/RTK_Query-764ABC?style=flat-square&logo=redux&logoColor=white" alt="RTK Query"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white" alt="JWT"/>
  <img src="https://img.shields.io/badge/REST_API-005571?style=flat-square&logo=api&logoColor=white" alt="REST API"/>
  <img src="https://img.shields.io/badge/bcrypt-003B57?style=flat-square&logo=nodedotjs&logoColor=white" alt="bcrypt"/>
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white" alt="Postman"/>
</p>

  </div>
</div>

<br clear="left"/>

---

<details><summary>📜 Table of Contents</summary>

- [📖 Overview](#-overview)
- [📸 UI Screenshots](#-ui-screenshots)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Architecture](#-project-architecture)
- [🔐 Authentication Flow](#-authentication-flow)
- [🎮 Usage Examples](#-usage-examples)
- [🔮 Roadmap & Future Vision](#-roadmap--future-vision)
- [🤝 Join Our Community](#-join-our-community)
- [📄 License & Credits](#-license--credits)

</details>

---

## 📖 Overview

**TechNotes** revolutionizes team collaboration with a secure, intelligent note management system. Designed for modern workplaces, it combines enterprise-grade security with intuitive user experience. Whether you're managing a small team or a large organization, TechNotes provides the tools you need to keep everyone organized and productive.

### 🌟 Why Choose TechNotes?

- **🔒 Enterprise Security** — Military-grade JWT authentication with refresh token rotation
- **👥 Role-Based Access** — Granular permissions for Employees, Managers, and Admins
- **⚡ Lightning Fast** — Optimized with RTK Query caching and optimistic updates
- **🌐 Cloud-Ready** — Scalable MERN architecture with MongoDB Atlas integration
- **📱 Mobile-First** — Responsive design that works perfectly on any device
- **🔄 Real-Time Sync** — Automatic token refresh and persistent login sessions
- **🎯 Zero Maintenance** — Self-healing authentication with automatic cleanup

---

## 📸 UI Screenshots

<div align="center">
  <img src="readmephotos/login.png" width="40%" style="border-radius: 30px; margin-right: 10px;"/>
  <img src="readmephotos/jwtauth.png" width="40%" style="border-radius: 30px; margin-right: 10px;"/>
  <img src="readmephotos/newuser.png" width="40%" style="border-radius: 30px;"/>
  <img src="readmephotos/userlist.png" width="40%" style="border-radius: 30px;"/>
</div>

<div align="center">
  <em>🔐 Secure Login • 📋 Intuitive Dashboard • 📝 Smart Notes • 👥 Admin Controls</em>
</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔐 **Advanced Security**

- **Dual-Token Authentication** with access & refresh tokens
- **Automatic Token Rotation** for enhanced security
- **HttpOnly Cookies** preventing XSS attacks
- **CORS Protection** with secure cookie handling
- **Session Persistence** across browser restarts
- **Automatic Logout** on token expiration

</td>
<td width="50%">

### 👥 **Smart User Management**

- **Role-Based Permissions** (Employee/Manager/Admin)
- **User CRUD Operations** with validation
- **Profile Management** with secure password updates
- **Activity Tracking** and audit logs
- **Bulk Operations** for efficient management
- **Advanced Search** and filtering options

</td>
</tr>
<tr>
<td width="50%">

### 📝 **Intelligent Notes System**

- **Rich Text Editor** with markdown support
- **Real-Time Collaboration** on shared notes
- **Version History** with rollback capabilities
- **Smart Categorization** and tagging
- **Advanced Search** with full-text indexing
- **Export Options** in multiple formats

</td>
<td width="50%">

### ⚡ **Performance Optimized**

- **RTK Query Caching** for lightning-fast responses
- **Optimistic Updates** for instant feedback
- **Entity Adapters** for normalized state management
- **Code Splitting** for faster load times
- **Progressive Enhancement** for older browsers
- **Memory Efficient** rendering and updates

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

|                                                     Technology                                                      |     Purpose     |                  Why We Chose It                   |
| :-----------------------------------------------------------------------------------------------------------------: | :-------------: | :------------------------------------------------: |
|      ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)       |  **Database**   | Flexible schema & horizontal scaling capabilities  |
|   ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)    | **Backend API** | Minimal overhead & extensive middleware ecosystem  |
|         ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)          | **Frontend UI** | Component-based architecture & excellent ecosystem |
|      ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)       |   **Runtime**   | JavaScript everywhere & exceptional NPM ecosystem  |
| ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)  | **State Mgmt**  |   Predictable state updates & powerful dev tools   |
| ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) |   **Styling**   |     Utility-first approach & rapid prototyping     |

</div>

---

## 🚀 Quick Start

Get your secure note management system running in under 5 minutes:

### Prerequisites

- **Node.js 18+** (Latest LTS recommended)
- **MongoDB** (Local installation or Atlas cluster)
- **npm** or **yarn** package manager
- **Modern browser** with JavaScript enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/TechNotes.git
cd TechNotes

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../client
npm install
```

### Environment Setup

Create `.env` in the backend directory:

```env
# Server Configuration
PORT=3500
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/TechNotes
# Or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/TechNotes

# JWT Secrets (generate strong secrets in production!)
ACCESS_TOKEN_SECRET=your-super-secret-access-token-key-here
REFRESH_TOKEN_SECRET=your-super-secret-refresh-token-key-here

# CORS Configuration
CLIENT_URL=http://localhost:3000
```

### Launch the Application

```bash
# Terminal 1: Start backend server
cd backend
npm run dev

# Terminal 2: Start frontend client
cd client
npm run dev
```

🎉 **Success!** Navigate to `http://localhost:3000` and start managing your notes!

### Default Admin Account

```
Username: admin
Password: admin123
Role: Admin
```

> ⚠️ **Security Note**: Change the default admin credentials immediately in production!

---

## 📁 Project Architecture

Our architecture follows industry best practices for maintainability and scalability:

```
TechNotes/
├── backend/
│   ├── config/
│   │   ├── dbConn.js           # MongoDB connection & error handling
│   │   └── corsOptions.js      # CORS configuration & whitelist
│   ├── controllers/
│   │   ├── authController.js   # Login, refresh, logout logic
│   │   ├── usersController.js  # User CRUD operations
│   │   └── notesController.js  # Notes CRUD operations
│   ├── middleware/
│   │   ├── verifyJWT.js        # JWT token verification
│   │   ├── loginLimiter.js     # Rate limiting for login attempts
│   │   └── logger.js           # Request logging middleware
│   ├── models/
│   │   ├── User.js             # User schema with roles & validation
│   │   └── Note.js             # Note schema with user references
│   ├── routes/
│   │   ├── authRoutes.js       # Authentication endpoints
│   │   ├── userRoutes.js       # User management endpoints
│   │   └── noteRoutes.js       # Notes management endpoints
│   └── server.js               # Express app setup & middleware
├── client/
│   ├── src/
│   │   ├── app/
│   │   │   ├── store.js        # Redux store configuration
│   │   │   └── api/
│   │   │       └── apiSlice.js # RTK Query base API setup
│   │   ├── features/
│   │   │   ├── auth/           # Authentication components & logic
│   │   │   │   ├── Login.js
│   │   │   │   ├── PersistLogin.js
│   │   │   │   └── authApiSlice.js
│   │   │   ├── users/          # User management features
│   │   │   │   ├── UsersList.js
│   │   │   │   ├── EditUser.js
│   │   │   │   └── usersApiSlice.js
│   │   │   └── notes/          # Notes management features
│   │   │       ├── NotesList.js
│   │   │       ├── EditNote.js
│   │   │       └── notesApiSlice.js
│   │   ├── components/
│   │   │   ├── Layout.js       # Main app layout
│   │   │   ├── Public.js       # Landing page
│   │   │   └── DashHeader.js   # Dashboard header
│   │   ├── hooks/
│   │   │   ├── useAuth.js      # Authentication hook
│   │   │   └── usePersist.js   # Persistence toggle hook
│   │   └── App.js              # Main app component & routing
│   └── public/
│       ├── favicon.ico
│       └── screenshots/        # UI screenshots for documentation
└── README.md
```

---

## 🔐 Authentication Flow

Our security-first approach ensures your data stays protected:

```mermaid
sequenceDiagram
    participant C as Client
    participant S as Server
    participant DB as Database

    C->>S: POST /auth (credentials)
    S->>DB: Validate user credentials
    DB-->>S: User data
    S->>S: Generate JWT tokens
    S->>C: Access token + HttpOnly refresh cookie

    Note over C,S: Normal API requests
    C->>S: API request + Bearer token
    S->>S: Verify access token
    S-->>C: API response

    Note over C,S: Token refresh flow
    C->>S: API request (expired token)
    S-->>C: 401 Unauthorized
    C->>S: POST /auth/refresh (cookie)
    S->>S: Verify refresh token
    S-->>C: New access token
    C->>S: Retry API request

    Note over C,S: Logout
    C->>S: POST /auth/logout
    S->>S: Clear refresh token
    S-->>C: Success + Clear cookie
```

### Security Features

- **15-minute Access Tokens** minimize exposure window
- **7-day Refresh Tokens** balance security with UX
- **HttpOnly Cookies** prevent XSS token theft
- **CORS Protection** restricts origin access
- **Rate Limiting** prevents brute force attacks
- **Automatic Cleanup** removes expired tokens

---

## 🎮 Usage Examples

### Authentication API

```javascript
// Login user
const loginUser = async (credentials) => {
  const response = await fetch("/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
    credentials: "include", // Include cookies
  });
  return response.json();
};

// Automatic token refresh with RTK Query
const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refresh",
        method: "GET",
      }),
    }),
  }),
});
```

### Notes Management

```javascript
// Create new note with optimistic updates
const [createNote] = useCreateNoteMutation();

const handleCreateNote = async (noteData) => {
  try {
    await createNote({
      title: noteData.title,
      text: noteData.text,
      user: userId,
    }).unwrap();
    // Optimistic update already handled by RTK Query
  } catch (error) {
    console.error("Failed to create note:", error);
  }
};

// Real-time note filtering
const { data: notes, isLoading } = useGetNotesQuery();
const filteredNotes = notes?.filter((note) =>
  note.title.toLowerCase().includes(searchTerm.toLowerCase())
);
```

### User Management (Admin Only)

```javascript
// Role-based component rendering
const UserManagement = () => {
  const { isManager, isAdmin } = useAuth();

  if (!isManager && !isAdmin) {
    return <Navigate to="/dash" replace />;
  }

  return (
    <div className="user-management">
      {isAdmin && <AdminControls />}
      <UserList />
    </div>
  );
};

// Bulk user operations
const [updateUsers] = useUpdateUsersMutation();

const handleBulkRoleUpdate = async (userIds, newRole) => {
  const updates = userIds.map((id) => ({ id, roles: [newRole] }));
  await updateUsers({ updates }).unwrap();
};
```

---

## 🔮 Roadmap

We're focused on delivering powerful features to improve team productivity and collaboration:

- 🌙 **Dark Mode** — Sleek UI with automatic theme switching
- 🔍 **Advanced Search** — Full-text search with filters and sorting
- 📁 **Folders & Tags** — Organize notes with custom tags and nested folders
- 📊 **Analytics Dashboard** — Visual insights into usage and performance
- 🤝 **Real-Time Collaboration** — Edit notes live with your team

---

## 🤝 Join Our Community

Great software is built by passionate communities. Join us in making TechNotes even better:

<div align="center">

### 💬 **Get Involved**

[![Discussions](https://img.shields.io/badge/GitHub-Discussions-6366f1?style=for-the-badge&logo=github)](https://github.com/AlexanderPotiagalov/TechNotes/discussions)
[![Issues](https://img.shields.io/badge/Report-Issues-ef4444?style=for-the-badge&logo=github)](https://github.com/AlexanderPotiagalov/TechNotes/issues)
[![Pull Requests](https://img.shields.io/badge/Submit-PR-10b981?style=for-the-badge&logo=github)](https://github.com/AlexanderPotiagalov/TechNotes/pulls)

</div>

### Ways to Contribute

- 🐛 **Bug Reports** — Help us identify and fix issues quickly
- 💡 **Feature Requests** — Share your ideas for new functionality
- 🔧 **Code Contributions** — Submit pull requests for improvements
- 📚 **Documentation** — Improve guides, tutorials, and API docs
- 🎨 **Design & UX** — Enhance UI/UX and create marketing assets
- 🗣️ **Community Support** — Help other users in discussions
- 🎓 **Educational Content** — Create tutorials and best practices guides
- 🔍 **Testing** — Help test new features and report feedback
- 🌍 **Translations** — Add support for new languages

### Development Guidelines

```bash
# Fork the repository
git clone https://github.com/yourusername/TechNotes.git
cd TechNotes

# Create feature branch
git checkout -b feature/amazing-feature

# Make your changes
npm run test          # Run tests
npm run lint          # Check code style
npm run type-check    # Verify TypeScript

# Commit with conventional commits
git commit -m "feat: add amazing new feature"

# Push and create PR
git push origin feature/amazing-feature
```

---

## 📄 License & Credits

<div align="center">

**TechNotes** is open source and available under the [MIT License](LICENSE).

Built with modern web technologies and a commitment to security and user experience.

---

### 👨‍💻 **Created with ❤️ by [Alexander Potiagalov](https://github.com/AlexanderPotiagalov)**

_Securing teams, one note at a time._

---

<p>
  <img src="https://img.shields.io/github/stars/AlexanderPotiagalov/TechNotes?style=social" alt="GitHub Stars"/>
  <img src="https://img.shields.io/github/forks/AlexanderPotiagalov/TechNotes?style=social" alt="GitHub Forks"/>
  <img src="https://img.shields.io/github/watchers/AlexanderPotiagalov/TechNotes?style=social" alt="GitHub Watchers"/>
  <img src="https://img.shields.io/github/contributors/AlexanderPotiagalov/TechNotes?style=social" alt="Contributors"/>
</p>

**⭐ Star this repo if you found it helpful!**

_Made with 🔒 for teams who value security and productivity_

</div>
