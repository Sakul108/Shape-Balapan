import { useState } from "react"

const Card = ({ image, alt, title, description, tags = false }) => {
  const [pressed, setPressed] = useState(false)

  return (
    <div
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className={`
        relative rounded-xl bg-[#F5EEDC]
        cursor-pointer
        overflow-hidden

        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:scale-[1.04]

        ${pressed ? "scale-95" : ""}
       
      `}
    >
      {/* Image */}
      <div className="h-56 md:h-60 overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover pointer-events-none
                     transition-transform duration-300 ease-out
                     group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-7 md:p-8">
        <h3 className="text-xl font-semibold text-[#183B4E]">{title}</h3>
        <p className="mt-2 text-gray-600 leading-relaxed">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`rounded-full px-3 py-1 text-xs font-medium ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

     
    </div>
  )
}

export default Card
