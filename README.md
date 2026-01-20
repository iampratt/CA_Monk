# CA Monk Blog

A modern, responsive blog application built for CA Monk to share insights on finance, accounting, and career growth. Features a clean, professional design with a focus on readability and user experience.

<img width="1470" height="923" alt="Screenshot 2026-01-20 at 18 06 16" src="https://github.com/user-attachments/assets/2ea6b815-1f41-42b5-b817-47355d6ea12b" />


## Features

- **Modern UI Design**: Clean, professional interface with a light theme optimized for reading
- **Blog Management**: Create, view, and manage blog posts with rich metadata
- **Author Attribution**: Each blog post includes author information
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Real-time Updates**: Powered by TanStack Query for efficient data fetching and caching
- **Category System**: Organize posts by multiple categories
- **Cover Images**: Support for featured images on blog posts
- **Reading Experience**: Optimized typography and layout for long-form content

## Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **shadcn/ui** - UI component library
- **Lucide React** - Icon library

### Backend
- **JSON Server** - Mock REST API for development

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iampratt/CA_Monk.git
cd CA_Monk
```

2. Install dependencies:
```bash
npm install
```

3. Start the development servers:

In one terminal, start the JSON server (backend):
```bash
npm run server
```

In another terminal, start the Vite dev server (frontend):
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run server` - Start the JSON Server backend
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
ca_monk/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── Header.tsx    # App header
│   │   ├── Footer.tsx    # App footer
│   │   ├── BlogList.tsx  # Blog listing sidebar
│   │   ├── BlogDetail.tsx # Blog reading view
│   │   └── CreateBlogForm.tsx # Blog creation form
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and API
│   ├── types.ts          # TypeScript type definitions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # App entry point
├── db.json               # JSON Server database
└── package.json
```

## Usage

### Creating a Blog Post

1. Click the "New" button in the sidebar
2. Fill in the form with:
   - Title
   - Categories (comma-separated)
   - Description
   - Cover Image URL
   - Author Name
   - Content
3. Click "Create Blog" to publish

### Viewing Blog Posts

- Browse posts in the "Latest Articles" sidebar
- Click on any post to view the full content
- Each post displays the author, category, date, and reading time

## API Endpoints

The JSON Server provides the following endpoints:

- `GET /blogs` - Fetch all blog posts
- `GET /blogs/:id` - Fetch a specific blog post
- `POST /blogs` - Create a new blog post

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please reach out through the CA Monk platform.
