const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import Database Pool & Routes
const db = require('./config/database');
// const paymentRoutes = require('./routes/paymentRoutes');

// Initialize Express App
const app = express();

// ==========================================
// Middlewares
// ==========================================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logger (Development Mode)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });
}

// ==========================================
// API Routes
// ==========================================
// app.use('/api/v1', paymentRoutes);

// // Health Check Endpoint (Includes DB Connection Check)
// app.get('/health', async (req, res) => {
//   try {
//     const connection = await db.getConnection();
//     connection.release();
    
//     res.status(200).json({
//       status: 'UP',
//       database: 'CONNECTED',
//       service: 'VMS Payment Subsystem',
//       timestamp: new Date().toISOString()
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: 'DOWN',
//       database: 'DISCONNECTED',
//       error: error.message
//     });
//   }
// });

// // 404 Handler for undefined routes
// app.use((req, res, next) => {
//   res.status(404).json({ error: `Cannot ${req.method} ${req.originalUrl}` });
// });

// // ==========================================
// // Global Error Handler
// // ==========================================
// app.use((err, req, res, next) => {
//   console.error('Unhandled Server Error:', err.stack);
//   res.status(err.status || 500).json({
//     error: err.message || 'Internal Server Error',
//     ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
//   });
// });

// ==========================================
// Database Verification & Server Startup
// ==========================================
const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // 1. Test Database Connectivity
    const connection = await db.getConnection();
    console.log('✅ Successfully connected to MySQL database!');
    
    // Test a basic query
    await connection.query('SELECT 1');
    connection.release();

    // 2. Start Express Server
    app.listen(PORT, () => {
      console.log(`🚀 Vet PIMS Payment Backend running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('❌ Database connection test failed during startup!');
    console.error('Error Details:', error.message);
    process.exit(1); // Stop process if DB connection fails
  }
}

startServer();