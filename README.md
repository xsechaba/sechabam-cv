# Sechaba Mohlabeng - CV Site

A modern, responsive CV/resume website built with Next.js and Tailwind CSS.

## Features

- Clean, professional design inspired by modern CV layouts
- Fully responsive design that works on all devices
- Built with Next.js 14 and TypeScript
- Styled with Tailwind CSS
- Modern typography with Google Fonts
- Interactive elements with hover effects

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cv-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the CV.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Google Fonts** - Typography

## Project Structure

```
cv-site/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Customization

The CV content is located in `app/page.tsx`. You can easily modify:
- Personal information
- Work experience
- Education
- Skills
- Projects

The styling can be customized through:
- `tailwind.config.js` - Color scheme and fonts
- `app/globals.css` - Global styles and custom CSS

## License

This project is open source and available under the [MIT License](LICENSE).
