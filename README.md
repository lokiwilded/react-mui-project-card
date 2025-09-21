# React + TypeScript + Material-UI Project Card

<img width="429" height="390" alt="ProjectCard" src="[https://github.com/user-attachments/assets/15f824a6-94b5-4b68-b885-8d66f6862dc5](https://i.ibb.co/3m0PdTVh/image-2025-09-21-153514211.png)" />

This is a reusable and responsive React component for displaying a project in a portfolio.

Features

-   Responsive Design: Adapts cleanly to different screen sizes.
-   Type-Safe: Written in TypeScript for robust and predictable props.
-   Professionally Styled: Uses Google's Material Design principles 
-   Dynamic Content: Easily displays project details like title, description, image, and links 

Technologies Used

-   React
-   TypeScript
-   Material-UI (MUI)

How to Use

```tsx
import ProjectCard from './ProjectCard';

// Define the project data
const myProject = {
  id: 1,
  title: "My Awesome App",
  description: "A description of the project goes here.",
  image_url: "path/to/image.png",
  github_link: "[https://github.com/](https://github.com/)...",
  live_link: "https://..."
};

// Render the component
<ProjectCard project={myProject} />
```



