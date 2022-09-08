import LoadingScreen from '../shared/LoadingScreen'
import { Link } from 'react-router-dom'
import { 
    useState, 
    useEffect 
} from 'react'

const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const ProjectsIndex = () => {
    // this will let us set up the projects
    const [projects, setProjects] = useState(null)
    const [error, setError] = useState(false)

    const portfolioProjects = [
        // this will be an array of objects
    ]

    if (error) {
        return <p>Error!</p>
    }

    // If characters haven't been loaded yet, show a loading message
    if (!projects) {
        return <LoadingScreen />
    } else if (projects.length === 0) {
        return <p>Error!</p>
    }

    return (
        <div>
            Projects will go here
        </div>
    )
}

export default ProjectsIndex