# Jeanius Power Washing Website

## Overview

This is a modern full-stack web application for Jeanius Power Washing, a professional pressure washing service company. The application features a responsive landing page with service information, gallery, testimonials, and a contact form system. Built with React on the frontend.

## System Architecture

### Frontend Architecture

- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Custom component library built on Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for development and production builds
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture

- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: Basic in-memory storage with interface for future database integration
- **API Design**: RESTful endpoints with JSON communication

### Development Architecture

- **Monorepo Structure**: Shared schema and types between client and server
- **Hot Reload**: Vite development server with HMR
- **Type Safety**: Full TypeScript coverage across the stack
- **Code Organization**: Feature-based component structure with shared utilities

## Key Components

### Frontend Components

1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Landing area with call-to-action buttons
3. **Services Section**: Grid layout showcasing different pressure washing services
4. **Gallery Section**: Before/after image comparisons
5. **Testimonials Section**: Customer reviews and ratings
6. **Contact Section**: Comprehensive contact form with validation
7. **Footer**: Site links and company information

### Backend Components

1. **Route Handlers**: RESTful API endpoints for contact form submission
2. **Storage Layer**: Abstracted storage interface supporting both memory and database implementations
3. **Schema Validation**: Zod schemas for request/response validation
4. **Error Handling**: Centralized error handling middleware

### Shared Components

1. **Database Schema**: Drizzle schema definitions for users and contact submissions
2. **Type Definitions**: Shared TypeScript types between frontend and backend
3. **Validation Schemas**: Zod schemas for form validation and API contracts

## Data Flow

### Contact Form Submission Flow

1. User fills out contact form with personal information and service requirements
2. Frontend validates form data using react-hook-form with Zod resolver
3. Form data is submitted to `/api/contact` endpoint via POST request
4. Backend validates request using shared Zod schema
5. Data is stored in PostgreSQL database via Drizzle ORM
6. Success/error response is returned to frontend
7. User receives feedback via toast notifications

### Data Retrieval Flow

1. Admin endpoint (`/api/contact-submissions`) retrieves all form submissions
2. Backend queries database using Drizzle ORM
3. Results are serialized and returned as JSON
4. Frontend can display submissions for administrative purposes

## External Dependencies

### Core Dependencies

- **@neondatabase/serverless**: PostgreSQL database connection for serverless environments
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management with validation
- **@hookform/resolvers**: Zod integration for form validation
- **zod**: Runtime type validation and schema definition

### UI Dependencies

- **@radix-ui/\***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library for React
- **lucide-react**: Icon library
- **class-variance-authority**: Utility for creating variant-based component APIs

### Development Dependencies

- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Replit Configuration

- **Environment**: Node.js 20 with PostgreSQL 16 module
- **Build Process**: Two-stage build (Vite for frontend, esbuild for backend)
- **Development**: `npm run dev` starts both frontend and backend with hot reload
- **Production**: `npm run build` creates optimized builds, `npm run start` serves production version
- **Port Configuration**: Development on port 5000, production on port 80

### Database Strategy

- **Development**: Configured for Neon serverless PostgreSQL
- **Migrations**: Drizzle Kit for schema migrations with `npm run db:push`
- **Connection**: Environment variable based connection string
- **Fallback**: In-memory storage implementation for development without database

### Asset Management

- **Static Assets**: Served from `attached_assets` directory
- **Image Optimization**: Placeholder URLs using Unsplash for gallery content
- **Logo**: Company logo stored in attached assets

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
