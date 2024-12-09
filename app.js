import express from 'express';
import QRCode from 'qrcode';
import rateLimit from 'express-rate-limit';
import { createCanvas, loadImage } from 'canvas';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files for UI (optional)
app.use(express.static('public'));

// Add rate limiting middleware
const limiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hours
    max: 50, // limit each IP to 50 requests per windowMs
    message: 'Too many requests from this IP, please try again after 24 hours',
    keyGenerator: (req) => {
        const username = (req.body.instagram || req.body.facebook || '').replace('@', '');
        return `${req.ip}-${username}`;
    }
});

// Add this after your other middleware setup
app.use((req, res, next) => {
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
    next();
});

// API Endpoint to generate QR codes
app.post('/generate', limiter, async (req, res) => {
    const { instagram, facebook, size = 300 } = req.body;
    const ipAddress = (req.ip || req.socket.remoteAddress || '')
        .replace(/^::ffff:/, '');
    
    try {
        let targetUrl = '';
        let socialAccount = '';
        let username = '';

        if (instagram) {
            username = instagram.replace('@', '');
            targetUrl = `instagram://user?username=${username}`;
            socialAccount = `Instagram: @${username}`;
        } else if (facebook) {
            username = facebook;
            targetUrl = `https://facebook.com/${username}`;
            socialAccount = `Facebook: ${username}`;
        } else {
            return res.status(400).send({ error: 'Invalid input' });
        }

        // Generate QR code
        const pngBuffer = await QRCode.toBuffer(targetUrl, { 
            type: 'png',
            width: parseInt(size),
            margin: 1,
            scale: 1,
            errorCorrectionLevel: 'H'
        });

        res.setHeader('Content-Type', 'image/png');
        res.send(pngBuffer);
    } catch (err) {
        console.error('Main error:', err);
        res.status(500).send({ error: 'Failed to generate QR code' });
    }
});

// Add a route for the root path
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './public' });
});

// Add a route for the download page
app.get('/download', (req, res) => {
    res.sendFile('download.html', { root: './public' });
});

// Listen on a port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`QR Generator running at http://localhost:${PORT}`);
});
