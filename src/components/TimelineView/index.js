import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

class TimelineView extends Component {
  state = {
    courseTimeLineItems: [],
    projectTimeLineItems: [],
  }

  componentDidMount() {
    this.renderTimelineItems()
  }

  renderTimelineItems = () => {
    const {timelineItemsList} = this.props
    const {courseTimeLineItems, projectTimeLineItems} = this.state

    const courseItems = timelineItemsList.filter(
      item => item.categoryId === 'COURSE',
    )
    const projectItems = timelineItemsList.filter(
      item => item.categoryId === 'PROJECT',
    )

    this.setState({
      courseTimeLineItems: courseItems.map(item => (
        <CourseTimelineCard
          key={item.id}
          title={item.title}
          courseTitle={item.courseTitle}
          description={item.description}
          duration={item.duration}
          tagsList={item.tagsList}
        />
      )),
      projectTimeLineItems: projectItems.map(item => (
        <ProjectTimelineCard
          key={item.id}
          title={item.title}
          projectTitle={item.projectTitle}
          description={item.description}
          imageUrl={item.imageUrl}
          duration={item.duration}
          projectUrl={item.projectUrl}
        />
      )),
    })
  }

  render() {
    const {courseTimeLineItems, projectTimeLineItems} = this.state
    const timelineItems = [...courseTimeLineItems, ...projectTimeLineItems]
    return (
      <div>
        <h1>My JOURENY OF</h1>
        <h1>CCBP 4.0</h1>
        <Chrono items={timelineItems} mode="VERTICAL_ALTERNATING" />
      </div>
    )
  }
}

export default TimelineView
