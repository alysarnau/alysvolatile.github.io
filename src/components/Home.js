import ProjectsIndex from "./projects/ProjectsIndex"

const Home = (props) => {
	console.log('props in home', props)

	return (
		<>	
			<h1>Hello from beautiful Boston! I'm Alys.</h1>
			<h2>This is my portfolio page. It's a work in progress!</h2>
			<ProjectsIndex />
		</>
	)
}

export default Home
