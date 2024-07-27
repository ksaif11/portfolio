import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import dailyBlog from '../../assets/dailyBlog.png'
import youtube2 from '../../assets/youtube2.png'
import foodzone from '../../assets/foodzone.png'
import shopsy from '../../assets/shopsy.png'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={youtube2}
          link="https://github.com/ksaif11/youtube2.0"
          h3="YouTube 2.0"
          p="Video Streaming App"
        />
        <ProjectCard
          src={dailyBlog}
          link="https://github.com/ksaif11/DailyBlog"
          h3="Daily Blogs"
          p="Write & update blogs"
        />
        <ProjectCard
          src={foodzone}
          link="https://github.com/ksaif11/FoodZone"
          h3="FoodZone"
          p="Find receipe of food items"
        />
        <ProjectCard
          src={shopsy}
          link="https://github.com/ksaif11/shoppe"
          h3="Shopsy"
          p="An online clothing platform"
        />
      </div>
    </section>
  );
}

export default Projects;
