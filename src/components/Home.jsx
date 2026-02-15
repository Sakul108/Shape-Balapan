import Member from "../components/Member"
import img from "../assets/images/WinterCamp.jpg"
import Sakul from "../assets/images/members/MrSakul.png"
import Aasthadi from "../assets/images/members/Aasthadi.png"
import Rojina from "../assets/images/members/Rojina.png"
import Rahul from "../assets/images/members/Rahul.png"
import TR from "../assets/images/members/TR.png"
import Tol from "../assets/images/members/Tol.png"
import Aayusha from "../assets/images/members/Aayusha.png"
import LaxmanDai from "../assets/images/members/LaxmanDai.png"
import BipinDai from "../assets/images/members/BipinDai.png"
import Prakiti from "../assets/images/members/Prakriti.png"
import cardimg from "../assets/images/Happiness.png"
import smile from "../assets/images/Stoness.jpg"
import Rabina from "../assets/images/Rabina.png"
import { Link } from "react-router-dom"
import Advisor from "../components/Advisor"

const Home = () => {
  const boardMembers = [
    {
      image: Aasthadi,
      alt: "Ms. Aastha",
      name: "Aastha Ghimire",
      role: "Founder and Team Lead",
    },
    {
      image: Sakul,
      alt: "Sakul Khatri",
      name: "Sakul Khatri",
      role: "Web and Graphics",
    },
    {
      image: Rahul,
      alt: "Rahul Khadkathoki",
      name: "Rahul Khadkathoki",
      role: "Organizer and Researcher",
    },
    {
      image: Rojina,
      alt: "Rojina Paudel",
      name: "Rojina Paudel",
      role: "Emotional Intelligence Researcher",
    },
    {
      image: Aayusha,
      alt: "Aayusha Acharya",
      name: "Aayusha Acharya",
      role: "Math Content Designer",
    },
    {
      image: TR,
      alt: "TR Pandit",
      name: "TR Pandit",
      role: "Organizer and Researcher",
    },
    {
      image: Tol,
      alt: "Tol Prasad Kafle",
      name: "Tol Prasad Kafle",
      role: "Science Content Designer",
    },
    {
      image: Prakiti,
      alt: "Prakiti Bhetwal",
      name: "Prakiti Bhetwal",
      role: "English Content Designer",
    },
    {
      image: Rabina,
      alt: "Rabina Poudel",
      name: "Rabina Poudel",
      role: "English Content Designer",
    },
  ]

  const Advisors = [
    {
      image: LaxmanDai,
      alt: "Mr. Laxman",
      name: "Laxman Bista",
      role: "Advisor and Outreach",
    },
    {

      image: BipinDai,
      alt: "Mr.Bipin",
      name: "Bipin Pandey",
      role: "Advisor and Outreach",
    }

  ]

  return (



    <section id="home" className="hero bg-[#27548A]">

      <section className="bg-[#27548A]">
        <div className="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-[#DDA853] text-3xl tracking-tight leading-tight md:text-5xl xl:text-6xl text-left">
              Learning Through Play
            </h1>

            <p className="max-w-2xl mb-4 text-[#F5EEDC] text-xl tracking-tight leading-tight md:text-2xl xl:text-3xl text-left">
              From Science To Maths, To StoryTelling, we are here to transform the primary level education.
            </p>





            <div className="grid lg:hidden sm:grid-cols-1 gap-6 mb-7">
              <div className="overflow-hidden rounded-lg transition duration-300 ease-in-out hover:scale-105 active:scale-95">
                <img
                  className="w-full rounded-xl object-cover"
                  src={img}
                  alt="herosection image"
                />

              </div>
            </div>
            <div className="text-left mt-6">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-left
             text-[#183B4E]   rounded-lg
             bg-[#DDA853] hover:bg-[#e4b467] active:bg-[#e4b467]
              hover:ring-[#DDA853]/40 "
              >
                Check out our projects
              </Link>
            </div>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={img}
              alt="mockup"
            />


          </div>


        </div>
      </section>



      <section className="team bg-[#F5EEDC] mt-11">

        <section className="journey bg-[#F5EEDC] mt-11">
          <div className="mx-auto max-w-7xl px-4 py-8 lg:py-16">


            <div className="text-left text-[#183B4E]">
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight">
                Our Growth
              </h2>

              <p className="mb-4 text-base sm:text-lg leading-relaxed">
                Shape Balapan was established in 2025. With Ms. Aastha majoring in
                Educational Studies and Psychology, she noticed how different the
                pedagogy style varies in the USA compared to Nepal. While Nepal still
                relies on a traditional approach, Shape Balapan aims to implement
                game-based learning.
              </p>

              <p className="mb-4 text-base sm:text-lg leading-relaxed">
                Shape Balapan’s journey would never be complete without the support of
                passionate individuals who believe in transforming how education works.
                Our journey has evolved from a simple session to building and crafting
                educational materials, with our major project being Winter Camp 2025.
              </p>

              <p className="text-base sm:text-lg">
                We are educators and passionate students who are trying to make a change.
                See the smile of little young minds trying to challenge the traditional approach.
              </p>
            </div>

            {/* IMAGES  */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img
                src={smile}
                alt="Story activity"
                className="w-full rounded-xl object-cover"
              />

              <img
                src={cardimg}
                alt="Craft activity"
                className="w-full rounded-xl object-cover"
              />
            </div>

          </div>
        </section>




        <div className=" mt-12 mb-15 text-center bg-[#F5EEDC]">
          <h2 className="text-3xl font-bold pt-8  text-[#183B4E]">Board Members</h2>
          <p className="mt-4 text-[#183B4E]">
            Check out our awesome team members at Shape Balapan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto bg-[#F5EEDC]">
          {boardMembers.map((member) => (
            <Member
              key={member.name}
              image={member.image}
              alt={member.alt}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>

        <div className=" mt-18 mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#183B4E]">Outreach and Advisors</h2>
          <p className="mt-4 text-[#183B4E]">
            Check out our awesome advisors at Shape Balapan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 max-w-6xl mx-auto bg-[#F5EEDC]">
          {Advisors.map((member) => (
            <Advisor
              key={member.name}
              image={member.image}
              alt={member.alt}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </section>
    </section>

  )
}

export default Home;