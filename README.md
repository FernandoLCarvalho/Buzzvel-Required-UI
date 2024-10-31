# Buzzvel UI Reproduction

This repository contains the implementation of a Figma prototype provided by Buzzvel, reproduced using Next.js. The project is a part of a technical evaluation and showcases my front-end skills, particularly in responsive design and component architecture.

## Overview

The project consists of a web-based homepage designed as a single-page application, broken down into multiple components. The main requirements include two versions of the homepage:

1. **Web Version**: A desktop homepage that includes a header, five sections, a container, and a footer.
2. **Mobile Version**: A mobile-responsive version of the same homepage, containing the same components in a different layout to improve user experience on smaller screens.

## Structure

### Components

- The **Home Page** is built in `page.tsx` inside `/src/app`. The page is divided into several reusable components.
- All components can be found in `/src/app/components` and are imported into `page.tsx` for use.
- The application includes a root layout component (`layout.tsx`) in `/src/app`, which wraps all rendered pages to control the common layout across the entire project.

### Technologies and Libraries

- **Next.js**: The primary framework used for building the application.
- **PrimeFlex**: A CSS utility library to assist with responsive and consistent layout structure that was used for the grid mode.
- **React Icons**: Used for adding iconography to the user interface.

### CSS

- A significant portion of the CSS was adapted directly from the provided Figma prototype to ensure visual consistency.
- Styling is organized using CSS Modules, enabling scoped styles for individual components.

## Features

- **Responsive Design**: The homepage is fully responsive, with layout adjustments for desktop and mobile views.
- **Component-Based Architecture**: The project is divided into modular components, making it easy to manage and extend.
- **SEO Optimization**: Meta tags have been included to enhance search engine visibility and improve SEO.
- **Lazy Loading for Images**: Next.js lazy loading was applied to images that do not need to appear immediately upon page load, improving performance.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/FernandoLCarvalho/Buzzvel-Required-UI.git
   ```
2. Navigate to the project directory:
   ```sh
   cd buzzvel-project
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── sectionPowerful-components
│   │   │   │   ├── mobileApp.tsx
│   │   │   ├── sectionServices-components
│   │   │   │   ├── mobileApp.tsx
│   │   │   ├── sectionTestimonials-components
│   │   │   │   ├── cards.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── SectionHero.tsx
│   │   │   ├── SectionPickSun.tsx
│   │   │   ├── SectionPowerful.tsx
│   │   │   ├── SectionServices.tsx
│   │   │   ├── SectionsTestimonials.tsx
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── styles
│       ├── cards.module.css
│       ├── container.module.css
│       ├── footer.module.css
│       ├── header.module.css
│       ├── homepage.module.css
│       ├── mobileApp.module.css
│       ├── mobileApp2.module.css
│       ├── sectionHero.module.css
│       ├── sectionPickSun.module.css
│       ├── sectionPowerful.module.css
│       ├── sectionServices.module.css
│       ├── sectionTestimonials.module.css
│
├── public
│   
│
├── next.config.js
├── README.md
```

## Deployment

Deployment is made with Vercel.
- **Deploy**: [Buzzvel UI](https://buzzvel-ui-reproduction.vercel.app/)

## Video Walkthrough

A video showcasing the project, including its design and functionality, is not yet available.

## Acknowledgements

- **Buzzvel** for providing the prototype and design specifications and for allowing me the opportunity.

## Contact

If you have any questions or would like to know more about the project:

- **Email**: [nando_carvalhoo@gotmail.com](mailto:nando_carvalhoo@hotmail.com)
- **LinkedIn**: [Fernando Carvalho](https://www.linkedin.com/in/fernando-carvalho-4097a7144/)

---

I hope this README provides enough clarity for others to understand and navigate the project effectively. Feel free to leave feedback or suggestions.

