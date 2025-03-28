## 🌍 Live Hosted App

[![Horizon Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-brightgreen?style=for-the-badge)](https://praveensharrma.netlify.app)  
*(If you want it in a new tab right-click the button and select "Open link in new tab")*

---

## 📚 Introduction
• This interactive and visually engaging website highlights a diverse range of projects I have built, including e-commerce platforms, AI-powered SaaS applications, real estate management systems, and more.

• Built with modern technologies like React, Tailwind CSS, GSAP, and Lenis, this portfolio is not just a collection of past work but a reflection of my passion for creating seamless, user-friendly web applications. 

• Smooth animations, responsive layouts, and a smooth scroll experience come together to demonstrate both my technical skills and my ability to craft intuitive, visually appealing user experiences.

---

## ⚙️ Tech Used

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)  
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)  
![Lenis](https://img.shields.io/badge/Lenis-000000?style=for-the-badge&logo=github&logoColor=white)  
![GSAP](https://img.shields.io/badge/GSAP-88C0D0?style=for-the-badge&logo=gsap&logoColor=black)  
![React Lenis](https://img.shields.io/badge/React%20Lenis-000000?style=for-the-badge&logo=react&logoColor=white)  
![PropTypes](https://img.shields.io/badge/PropTypes-61DAFB?style=for-the-badge&logo=react&logoColor=black)  
![Material Icons](https://img.shields.io/badge/Material%20Icons-000000?style=for-the-badge&logo=material-design&logoColor=white)  
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)



---

## 🔋 Features
• Responsive Design:
The website adapts to various screen sizes using Tailwind CSS for a mobile-first, responsive design.

• Smooth Scrolling:
Implemented using Lenis, providing a seamless, fluid scroll experience.

• Animated Elements:
Interactive animations triggered by scrolling using GSAP and ScrollTrigger, enhancing user engagement.

• Portfolio Showcase:
Displays a variety of web applications, including e-commerce platforms, real estate platforms, AI image SaaS platforms, and more.

• Project Cards:
Each project is presented in a card with images, titles, and links to the respective GitHub repositories.

• Header & Navigation:
A sticky header with a hamburger menu for mobile users, ensuring easy navigation.

• Contact Section:
A section to get in touch with the developer, encouraging user interaction.

---

## ⚙️ Planned Optimizations
• Lazy Loading for Images and Components:
In the future, I plan to implement lazy loading for images and components to enhance the initial load time and reduce the page’s overall load size. This will help the website load faster, especially on slower connections.

• Code Splitting:
As the project grows, I plan to implement code splitting for React components to ensure that only the necessary code is loaded when a user navigates to a page. This will reduce the initial load time and improve performance by loading resources on demand.

• SEO Optimization:
Although the project is well-designed, future updates will include better SEO optimization practices, such as adding meta tags, structured data, and improving alt text for images. This will help with search engine rankings and accessibility.

• Progressive Web App (PWA):
I am planning to turn the project into a Progressive Web App (PWA), allowing users to install the site as a web app on their devices for offline functionality and improved performance.

•Service Workers:
Implementing service workers will help cache assets and enable offline capabilities, improving performance and ensuring the website remains usable even in low or no connectivity scenarios.

• Advanced State Management:
While React’s built-in state management is sufficient for now, as the project scales, I may adopt a more robust state management solution (like Redux or Zustand) to handle complex application states across various components.

• Analytics & Monitoring:
I plan to integrate more advanced analytics and monitoring tools (such as Google Analytics and Sentry) to track user behavior, identify performance bottlenecks, and quickly address errors that might affect user experience.

---

## 📚 Lessons Learned
• Smooth Scrolling Integration:
Integrating Lenis for smooth scrolling in React can be tricky, especially when handling scroll-triggered animations. Properly configuring the scroll container and integrating with GSAP required careful attention to performance.

• Animation Performance:
GSAP is an incredibly powerful tool, but managing animations on scroll (especially with complex animations) can be performance-heavy. Using the scrub feature of ScrollTrigger helped reduce any potential jankiness, making the animations feel more fluid.

• Component Reusability:
By building components like SkillCard, ProjectCard, and Button, the code is more modular, making it easier to maintain and expand the project as more features are added.

• Tailwind CSS Efficiency:
Tailwind’s utility-first approach significantly speeds up development, but one must be mindful of not overloading the HTML with too many utility classes. It’s also important to configure purging correctly to reduce unused CSS.

• React State Management:
While this project doesn't heavily rely on complex state management libraries (like Redux), managing state for things like toggling the menu or scroll-based animations was a good exercise in React’s built-in state handling using hooks.
