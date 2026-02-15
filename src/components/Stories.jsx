
import Card from "../components/Card"

import chess from "../assets/images/arts/Chess.jpg"
import drawing from "../assets/images/arts/Pictures.jpg"
import School from "../assets/images/arts/School.jpg"
import pain from "../assets/images/arts/Pain.JPG"
import Saraswati from "../assets/images/arts/SHREE.jpg"
import Krishna from "../assets/images/arts/Krishna.JPG"
import Art1 from "../assets/images/arts/Art1.JPG"
import Art2 from "../assets/images/arts/Art2.JPG"
import Art3 from "../assets/images/arts/Art3.JPG"
import Art4 from "../assets/images/arts/Art4.JPG"


const Stories = () => {
 

  const stories = [
    {
      image: Krishna,
      alt: "Krishna's feather",
      title: "Shree Krishna's flute and peacock feather",
      description:
        "Inner peace is crucial",
      tags: [
        { name: "Creativity", color: "bg-purple-100 text-purple-800" },
        { name: "Art", color: "bg-yellow-100 text-yellow-800" },
        { name: "Culture", color: "bg-blue-100 text-yellow-800" },
      ],
    },
    {
      image: drawing,
      alt: "Festivals",
      title: "Artistry",
      description: "Drawing the  moments around you!",
      tags: [
        { name: "Culture and Art", color: "bg-blue-100 text-blue-800" },
        { name: "Story", color: "bg-green-100 text-green-800" },
        { name: "Creativity", color: "bg-yellow-100 text-green-800" },
      ],
    },
     
       {
      image: Saraswati,
      alt: "The divinity of Devi Saraswati",
      title: "Devi Saraswati singing ",
      description: "The goddess of wisdom singing",
      tags: [
        { name: "Culture", color: "bg-red-100 text-red-800" },
        { name: "Melody", color: "bg-indigo-100 text-blue-800" },
        { name: "Art", color: "bg-blue-100 text-yellow-800" },
      ],
    },
    {
      image: chess,
      alt: "Chess",
      title: "Making a solid using Chess",
      description:
        "Molecule spacing in solid",
      tags: [
        { name: "Creativity", color: "bg-purple-100 text-purple-800" },
        { name: "Imagination", color: "bg-yellow-100 text-yellow-800" },
        { name: "Science", color: "bg-blue-100 text-yellow-800" },
      ],
    },
     {
      image: Art4,
      alt: "Gardening",
      title: "A memorable Moment of gardening",
      description:
        "Save Trees, Save The Planet",
      tags: [
        { name: "Creativity", color: "bg-purple-100 text-purple-800" },
        { name: "Climate", color: "bg-yellow-100 text-yellow-800" },
        { name: "Responsibility", color: "bg-blue-100 text-yellow-800" },
      ],
    },
    {
      image: School,
      alt: "A school picture",
      title: "My school Picture",
      description: "Drawing what my school feels like",
      tags: [
        { name: "Growth", color: "bg-red-100 text-red-800" },
        { name: "Team Spirit", color: "bg-indigo-100 text-indigo-800" },
        { name: "Art", color: "bg-blue-100 text-yellow-800" },
      ],
    }, 
    {
      image: pain,
      alt: "The Cry of Motherland",
      title: "The Pain",
      description: "A portrait of pain",
      tags: [
        { name: "Culture", color: "bg-red-100 text-red-800" },
        { name: "Realism", color: "bg-indigo-100 text-indigo-800" },
        { name: "Art", color: "bg-blue-100 text-yellow-800" },
      ],
    },
     {
      image: Art1,
      alt: "Shree Saraswati",
      title: "Goddess of wisdom",
      description:
        "Devi Saraswati",
      tags: [
        { name: "Creativity", color: "bg-purple-100 text-purple-800" },
        { name: "Imagination", color: "bg-yellow-100 text-yellow-800" },
        { name: "Art", color: "bg-blue-100 text-yellow-800" },
      ],
    }, 
    {
      image: Art2,
      alt: "Room",
      title: "Play room",
      description:
        "Play Room",
      tags: [
        { name: "Creativity", color: "bg-purple-100 text-purple-800" },
        { name: "Imagination", color: "bg-yellow-100 text-yellow-800" },
        { name: "Art", color: "bg-blue-100 text-yellow-800" },
      ],
    },
    {
      image: Art3,
      alt: "Children's Day",
      title: "The children's day",
      description:
        "Children Day Special",
      tags: [
        { name: "Creativity", color: "bg-purple-100 text-purple-800" },
        { name: "Imagination", color: "bg-yellow-100 text-yellow-800" },
        { name: "Art", color: "bg-blue-100 text-yellow-800" },
      ],
    },
  
    
    
  ]

  return (
    <section
      id="stories"
      className="bg-[#27548A] px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#F0F4F8]">
           Stories Illustrated By Dreamers
          </h2>
          <p className="mt-4 text-[#F0F4F8] ">
            Dive deeper into the crafts, passion and comfort! 
            
          </p>
        </div>

        

        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <Card
              key={index}
              image={story.image}
              alt={story.alt}
              title={story.title}
              description={story.description}
              tags={story.tags}
           
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stories;
