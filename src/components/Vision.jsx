import cardimg from "../assets/images/Craft.png"
import smile from "../assets/images/Story.png"




const Vision = () => {
  return (

    <section id="vision" className="bg-[#F0F4F8] dark:bg-[#F0F4F8] ">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-7-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 ml-2 text-4xl tracking-tight font-extrabold text-[#183B4E]">
            Our Journey
          </h2>

           <div className="text-left text-[#183B4E]">
          <p className="mb-4 ml-2 text-base sm:text-lg leading-relaxed">
                Shape Balapan was established in 2025. With Ms. Aastha majoring in
                Educational Studies and Psychology, she noticed how different the
                pedagogy style varies in the USA compared to Nepal. While Nepal still
                relies on a traditional approach, Shape Balapan aims to implement
                game-based learning.
              </p>

          <p className="mb-4 ml-2 text-base sm:text-lg leading-relaxed">
            We are educators, passionate students who are trying to make a change.
          </p>

          
            <h2 className="mb-4  ml-2 text-base sm:text-lg leading-relaxed"> Why did Shape Balapan start?</h2>
            <p className="mb-4 ml-2 text-base sm:text-lg leading-relaxed"> We addressed basic problems such as: 
           <li>Students struggle to understand Mathematics and Science concepts due to language barrier.</li>
           <li>Children are following foreign media at an early age. </li>
           <li>Students are more driven by competition than love for learning and collaborating. </li>
            <li>Children do not have a creative outlet to process their emotions, especially at this time of socio-political turmoil around them.
            </li>
            We are so driven by a competitive world that students all around have to live upto surreal expectations.
            Expectations enforced by parents, people and the society.

          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8  hover:scale-100">
          <img
            className="w-full rounded-lg hover:scale-105"
            src={smile}
            alt="Team Content"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg hover:scale-105"
            src={cardimg}
            alt="Team content 2"
          />



        </div>
      </div>
      </div>
    </section>
  )
}

export default Vision;