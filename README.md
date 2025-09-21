# React + TypeScript + Material-UI Project Card

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
