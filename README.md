# NorthEastFleet

A modern web application for fleet service management.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Git](https://git-scm.com/)
- A code editor (like [VS Code](https://code.visualstudio.com/))

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/FeigJoseph/NorthEastFleet
   cd NorthEastFleet
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173)

## Development

- The development server supports hot reloading - any changes you make will be reflected immediately in the browser
- To stop the development server, press `Ctrl + C` in the terminal

## Building for Production

To create a production build:

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

## Deploying to Netlify

1. Create a [Netlify](https://www.netlify.com/) account if you don't have one

2. Install the Netlify CLI (optional, but recommended):

   ```bash
   npm install -g netlify-cli
   ```

3. Deploy using one of these methods:

   **Method 1: Using Netlify UI (Easiest)**

   - Go to [app.netlify.com](https://app.netlify.com/)
   - Click "Add new site" > "Import an existing project"
   - Connect your GitHub repository
   - Configure the build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

   **Method 2: Using Netlify CLI**

   ```bash
   netlify deploy
   ```

   Follow the prompts to deploy your site.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Need Help?

If you encounter any issues:

1. Make sure all dependencies are installed correctly
2. Check that you're using the correct Node.js version
3. Try deleting the `node_modules` folder and running `npm install` again

## License

This project is private and confidential.
