import LoadingScreen from '../shared/LoadingScreen'
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.min.css';
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
    const [error, setError] = useState(false)

    const projects = [
        // this will be an array of objects
    ]

    if (error) {
        return <p>Error!</p>
    }

    // If characters haven't been loaded yet, show a loading message
    if (!projects) {
        return <LoadingScreen />
    } else if (projects.length === 0) {
        return <div class="box">
                Error! There aren't any projects here.
            </div>
    }

    return (
        <div>
            Projects will go here
        </div>
    )
}

export default ProjectsIndex