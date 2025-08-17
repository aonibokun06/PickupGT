# PickupGT 

PickupGT is a modern web application that connects Georgia Tech students and community members to schedule and find local pickup games. Whether you're looking to join a game or organize one, PickupGT makes it easy to connect with fellow sports enthusiasts.

## Tech Stack

### Frontend
- **React** 
- **React Router DOM** 
- **Tailwind CSS** 

### Backend
- **Node.js** 
- **Express.js**
- **MongoDB** 
- **Mongoose** 


## Getting Started

### Prerequisites
- Node.js
- MongoDB (local installation or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Project
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run devStart
   ```
   The backend will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Open your browser**
   Navigate to `http://localhost:5173` to access the application

