/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    const placeholderImage = "https://cdn-icons-png.flaticon.com/512/2202/2202112.png";

    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading */}
                    <h1 className='text-center text-3xl font-bold text-black'>Testimonial</h1>
                    {/* para */}
                    <h2 className='text-center text-2xl font-semibold mb-10'>What our <span className='text-pink-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={placeholderImage} />
                                <p className="leading-relaxed">"Phenomenal! The user experience is smooth and seamless, making it a joy to use. I've never encountered any issues and highly recommend it to everyone."</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">George Colen</h2>
                                <p className="text-gray-500">Senior Product Designer, Microsoft</p>
                            </div>
                        </div>
        
                                {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={placeholderImage} />
                                <p className="leading-relaxed">"An excellent platform that offers both reliability and efficiency. The team behind it is always supportive and quick to respond. A fantastic experience overall!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">S Mishra</h2>
                                <p className="text-gray-500">UI Developer, Google</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={placeholderImage} />
                                <p className="leading-relaxed">"Simply outstanding! The level of detail and attention put into this product is evident in every interaction. It's become an essential tool for our Shopping."</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kushal K</h2>
                                <p className="text-gray-500">Associate UI Developer, Atlassian</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial;
