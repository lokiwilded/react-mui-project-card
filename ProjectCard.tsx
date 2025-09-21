import { Card, CardContent, CardMedia, Typography, Button, CardActions, Link} from '@mui/material';
import { type Project } from '../services/apiService.ts';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
      height: '100%' 
    }}>
      <CardMedia
        component="img"
        height="140"
        image={project.image_url || 'https://via.placeholder.com/400x300'}
        alt={`Screenshot of ${project.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        {project.github_link && (
          <Button size="small" component={Link} href={project.github_link} target="_blank">
            GitHub
          </Button>
        )}
        {project.live_link && (
          <Button size="small" component={Link} href={project.live_link} target="_blank">
            Live Site
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
