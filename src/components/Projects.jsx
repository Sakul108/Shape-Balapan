import air from "../assets/images/Balloon.jpg"
import story from "../assets/images/Wintercamp.jpg"
import Molecules from "../assets/images/Molecules.jpg"
import Gyan from "../assets/images/Saraswati.png"
import Card from "../components/Card"

const Projects = () => {
  const projects = [
    {
      image: air,
      alt: "Air Pressure",
      title: "Air Pressure Experiment",
      description: "Teaching students the fundamental of Air Pressure and Molecules",
      tags: [
        { name: "Education", color: "bg-blue-100 text-blue-800" },
        { name: "Science", color: "bg-green-100 text-green-800" },
        { name: "Learning for Fun", color: "bg-yellow-100 text-green-800" },
      ],
    },
    {
      image: story,
      alt: "WinterCamp",
      title: "WinterCamp 2025",
      description: "A camp dedicated to learning Science, Maths and English.",
      tags: [
        { name: "STEM", color: "bg-purple-100 text-purple-800" },
        { name: "English", color: "bg-yellow-100 text-yellow-800" },
        { name: "StoryTelling", color: "bg-blue-100 text-yellow-800" },
      ],
    },
    {
      image: Molecules,
      alt: "Molecules Through Stones",
      title: "Molecules Through Stones",
      description: "Dedicated to understanding molecules via Stones",
      tags: [
        { name: "Growth", color: "bg-red-100 text-red-800" },
        { name: "Team Spirit", color: "bg-indigo-100 text-indigo-800" },
        { name: "Science", color: "bg-yellow-100 text-yellow-800" },
      ],
    },
    {
      image: Gyan,
      alt: "Devi Saraswati",
      title: "Festive Stories",
      description: "Teaching small kids regarding culture, values and festival spirit through social media posts",
      tags: [
        { name: "Culture", color: "bg-purple-100 text-purple-800" },
        { name: "Habits", color: "bg-yellow-100 text-yellow-800" },
        { name: "Values", color: "bg-blue-100 text-yellow-800" },
      ],
    },
  ]

  return (
    <section id="projects" className="bg-[#27548A] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#F5EEDC]">Our Projects</h2>
          <p className="mt-4 text-[#F5EEDC]">
            Check out some of our exciting initiatives at Shape Balapan
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <Card
              key={index}
              image={p.image}
              alt={p.alt}
              title={p.title}
              description={p.description}
              tags={p.tags}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
