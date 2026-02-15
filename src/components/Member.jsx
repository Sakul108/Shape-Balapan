import { useState } from "react"

const Member = ({ image, alt, name, role }) => {
  const [pressed, setPressed] = useState(false)

  return (
    <div
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className={`
        text-center text-[#183B4E]
        overflow-hidden rounded-lg
        transition-transform duration-200 ease-out
        ${pressed ? "scale-95" : "scale-100"}
        md:hover:scale-105
        cursor-pointer
      `}
    >
      <img
        className="mx-auto mb-4 w-36 h-36 rounded-full pointer-events-none"
        src={image}
        alt={alt}
      />

      <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#183B4E]">
        {name}
      </h3>

      <p className="text-[#27548A]">{role}</p>
    </div>
  )
}

export default Member;
