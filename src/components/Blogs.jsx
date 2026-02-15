import React from 'react'
import cat from "../assets/images/Cats.png"
function Blogs() {
    return (
        <div>
            <section className="blogs bg-[#F5EEDC] ">

                <section className="journey bg-[#F5EEDC] ">
                    <div className="mx-auto max-w-7xl px-4 py-8 lg:py-16">


                        <div className="text-left text-[#183B4E]">
                            <h2 className="mb-6 text-4xl font-extrabold tracking-tight">
                                The Cat's Fate Under The Rain
                            </h2>

                            <p className="mb-4 text-base sm:text-lg leading-relaxed">
                                As it rains, the lonely cat says:
                            </p>

                            <p className="mb-4 text-base sm:text-lg leading-relaxed">
                                Crying in the droplets of rain.
                                Purring slowly as people walk away.
                                Hey won't you notice me ?
                                Hey won't you pick me ?
                                I know I am all dirty.
                                All hungry and lonely .

                                Rain seems joyous to you .
                                It would have been for me too .
                                If I were with you.

                                What have I done

                                To suffer this pain ?
                                I ask myself each time.
                                No traces of happiness.
                                A lonely cat as me.
                                Will keep on suffering till days .
                                All I want is love.

                                All I want is hope.




                            </p>

                            <p className="text-base sm:text-lg">
                                

                                That I could live another day .
                                All lonely but still hopeful.
                                That you will be with me .

                                My fate will shine.
                                When you hold me.
                                The bond so strong.
                                That would be talked through stories .
                                My eyes don't lie .
                                Neither does my soul .
                                Hey won't you notice me ?
                                So please , Take me with you .
                                So I could live another day.
                            </p>

                            
                                

                                <p className="text-base sm:text-lg">
                                    When you take me home.
                                    I will smile like a million stars.

                                    I will be at your side till I breathe .
                                    So my angel , won't you take me with you ?
                                    So I could finally understand what life means .
                                </p>
                            
                             <p className="text-base sm:text-lg mt-5">
                                    Written by Sakul
                                </p>
                        </div>


                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <img
                                src={cat}
                                alt="Story activity"
                                className="w-full rounded-xl object-cover"
                            />


                        </div>

                    </div>
                </section>
            </section>
        </div>
    )
}

export default Blogs


