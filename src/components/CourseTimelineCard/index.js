import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {title, courseTitle, description, duration, tagsList} = props

  return (
    <div className="courseTimeline-container">
      <div className="courseTimeline-header">
        <h1 className="course-title">{courseTitle}</h1>
        <p className="duration">
          <AiFillClockCircle className="timer-icon" /> {duration}
        </p>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tagList">
        {tagsList.map(eachTag => (
          <li key={eachTag.id}>
            <button className="tagitem">{eachTag.name}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
