const Projects = () => {

    const portfolioProjects = [
        {
            name: "Counting Sheep",
            stack: "HTML5, CSS3, Vanilla JS",
            image: "",
            description: "As a user, select one of four corgi player avatars, and play as that corgi during the official gameplay loop. The goal is to avoid the wolf enemy that chases you around the screen, and to collect all ten lost sheep as fast as you can!",
            complete: true,
            overview: "The goal of this project was to create a simple game of my choice using only HTML, CSS, and vanilla JavaScript. Since I'm a big fan of Stardew Valley and dogs, my choice was simple: make a dog herding game! Thus, 'Counting Sheep' was born."
        },
        {
            name: "Practice Helper",
            stack: "MongoDB, Express, Liquid",
            image: "",
            description: "To improve as a musician, consistent practice is key! The best thing you can do to assist in that is to keep detailed practice notes: keeping detailed notes about what precisely you have practiced, at what tempo, and for how long, all come in handy when it comes to improving for the hobby musician or the professional player. This app was created to assist musicians of all stripes.",
            complete: true,
            overview: "The goal of this app was to create a full-stack application that features multiple RESTful routes and fully CRUDable models - while still solving for a client need. As an amateur pianist, I knew that automating my practice statistics was a need I had identified in the past - so thus this app was born!"
        },
        {
            name: "Freelancr",
            stack: "MERN Stack",
            image: "",
            description: "This platform will allow Freelancers to create profiles and list their available services and price points. Users will be able to create profiles, log in, and view all available services, and sign up for them. It’s never been easier to get the services you need at the price you want.",
            complete: true,
            overview: "As team manager, I handled twice-daily SCRUM meetings as well as handled all merge requests to our main GitHub repository. Additionally, I created multiple back end routes and implemented a fair amount of the front-end functionality as well. This was a delight to make!"
        },
        {
            name: "MyJunimo",
            stack: "Django, React.js",
            image: "",
            description: "Finally, an app that makes resource and crafting management easy in Stardew Valley! This app allows you to manage the inventory of your character(s) and easily see if your inventory meets the requirements for crafting items (and larger projects!) inside Stardew Valley.",
            complete: false,
            overview: "Collaborating with a front-end developer, I handled the back-end set up inside of Django+Postgres to set up the API and make sure that the client would have all the information they needed to make crafting and resource management easier inside of Stardew Valley."
        }
    ]

    return (
        <section>
            This is the projects component.
        </section>
    )
}

export default Projects