import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {title, projectTitle, description, imageUrl, duration, projectUrl} =
    props

  return (
    <div className="project-container">
      <img src={imageUrl} alt={projectTitle} className="project-image" />
      <div className="project-header">
        <h1 className="project-title">{projectTitle}</h1>
        <p className="duration">
          <AiFillCalendar className="calender-icon" /> {duration}
        </p>
      </div>
      <p className="project-description">{description}</p>
      <a
        target="_blank"
        rel="noreferrer"
        href={projectUrl}
        className="anchor-element"
      >
        Vist
      </a>
    </div>
  )
}
export default ProjectTimelineCard
