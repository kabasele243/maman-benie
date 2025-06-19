# Chez Maman Benie - E-commerce Platform

A modern e-commerce website built with Next.js for selling baby and children's products including perfumes, cosmetics, and accessories.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Product Categories**: 
  - Parfums (Perfumes)
  - Cosmétiques (Cosmetics) 
  - Accessoires (Accessories)
- **Search Functionality**: Product search capabilities
- **Mobile Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Next.js 15 and React 19

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **React**: v19.0.0
- **Development**: Turbopack for faster builds

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd client
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── Footer.tsx        # Footer component
│   ├── globals.css       # Global styles
│   ├── parfums/          # Perfumes category
│   ├── cosmetiques/      # Cosmetics category
│   └── accessoires/      # Accessories category
public/
└── images/               # Product images
```

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

The application uses Tailwind CSS for styling. You can customize the design by modifying:
- `src/app/globals.css` - Global styles
- Component-specific Tailwind classes
- `tailwind.config.js` - Tailwind configuration

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop computers

## 🔍 Search & Navigation

- Product search functionality
- Category-based navigation
- Mobile-friendly hamburger menu

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js and Tailwind CSS
