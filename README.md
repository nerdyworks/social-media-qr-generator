# Social Media QR Code Generator

A simple, fast, and user-friendly QR code generator for social media profiles. This tool creates QR codes that link directly to Instagram and Facebook profiles, optimized for mobile scanning.

## Features

- 🎯 Direct linking to Instagram and Facebook profiles
- 📱 Mobile-optimized QR codes
- 🎨 Multiple size options (200×200, 300×300, 400×400)
- 🌓 Dark mode support
- 🔒 Rate limiting to prevent abuse
- 💨 Fast generation with no external API dependencies

## Installation

# Clone the repository:
```git clone https://github.com/nerdyworks/social-media-qr-generator.git 
cd social-media-qr-generator
```

# Install dependencies:
```npm install
```

# Start the server:
```node app.js```

The application will be available at `http://localhost:3000`

## Usage

1. Visit the homepage
2. Enter either your Instagram username or Facebook page name
3. Click "Generate QR Code"
4. Choose your preferred size
5. Download the QR code
6. Display the QR code at your location

## Tech Stack

- Node.js
- Express.js
- QRCode.js
- TailwindCSS
- HTML/JavaScript

## Dependencies

- express: Web framework
- qrcode: QR code generation
- express-rate-limit: Rate limiting
- canvas: Required for QR code generation

## Rate Limiting

The application includes rate limiting to prevent abuse:
- 50 requests per IP address per 24 hours
- Rate limits are tied to both IP address and social media username

## Development

To modify the application:

1. Clone the repository
2. Install dependencies with `npm install`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [QRCode.js](https://github.com/soldair/node-qrcode)
- Styled with [TailwindCSS](https://tailwindcss.com)
- Developed by [Nerdy Works](https://nerdyworks.com)

## Support

For support, please open an issue in the GitHub repository.
