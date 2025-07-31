import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

// Security configurations
app.disable('x-powered-by'); // Remove X-Powered-By header
app.set('etag', false); // Disable ETag generation

// Additional security headers
app.use((req, res, next) => {
  // Remove ETag header if it exists
  res.removeHeader('ETag');

  // Set security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains'
  );

  // Disable caching to prevent ETag generation
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  // Remove Last-Modified header
  res.removeHeader('Last-Modified');

  next();
});

// Middleware to remove ETag from all responses (including static files)
app.use((req, res, next) => {
  const originalSend = res.send;
  const originalSendFile = res.sendFile;

  res.send = function (data) {
    res.removeHeader('ETag');
    res.removeHeader('Last-Modified');
    return originalSend.call(this, data);
  };

  res.sendFile = function (path, options, callback) {
    res.removeHeader('ETag');
    res.removeHeader('Last-Modified');
    return originalSendFile.call(this, path, options, callback);
  };

  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
  });
});

// Serve static files from the React app build directory with ETag disabled
app.use(
  express.static(path.join(__dirname, '..', 'dist'), {
    etag: false,
    lastModified: false,
  })
);

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
