const featuredTestimonial = {
    body: "I've always wanted to learn Arabic, and ArabictutorAI made it possible for me! Their lessons are engaging, and the AI's personalized feedback has helped me progress rapidly. Highly recommend for anyone looking to master Arabic!",
    author: {
        name: 'Sarah K.',
        imageUrl:
            '/images/testimonials/7.png',
    },
}
const testimonials = [
    [
        [
            {
                body: 'ArabictutorAI is a game-changer! The interactive lessons and continuous practice with the AI have taken my Arabic skills to a new level. I feel more confident in my understanding of the language.',
                author: {
                    name: 'Ahmed M. ',
                    imageUrl:
                        '/images/testimonials/1.png',
                },
            },
            {
                body: "I've tried various Arabic learning apps, but ArabictutorAI stands out with its well-structured guidance. My confidence in reading and writing Arabic has grown, and I can't thank this platform enough.",
                author: {
                    name: 'Maria S.',
                    imageUrl:
                        '/images/testimonials/5.png'
                },
            },
        ],
        [
            {
                body: "As a busy professional, I struggled to find time for language classes. ArabictutorAI's flexibility and 24/7 access allowed me to learn Arabic at my own pace. I can now communicate with my Arabic-speaking colleagues more effectively.",
                author: {
                    name: 'Kareem A.',
                    imageUrl:
                        '/images/testimonials/2.png',
                },
            }
        ],
    ],
    [
        [
            {
                body: "ArabictutorAI's cultural insights and conversational exercises make the learning process enjoyable and meaningful. I can now read and write confidently Arabic, and I'm excited to keep learning.",
                author: {
                    name: 'Layla R.',
                    imageUrl:
                        '/images/testimonials/4.png',
                }
            }
        ],
        [
            {
                body: "I was skeptical about using AI for language learning, but ArabictutorAI pleasantly surprised me. It adapts to my skill level and provides challenging exercises to keep me engaged. My Arabic has improved significantly, and I'm grateful for this resource.",
                author: {
                    name: 'Ali H.',
                    imageUrl:
                        '/images/testimonials/3.png',
                }

            },
            {
                body: "ArabictutorAI has not only helped me learn Arabic but also build a deeper understanding of the culture. The lessons are not just about language but also about connecting with people. This platform is a fantastic resource for language learners.",
                author: {
                    name: 'Fatima B.',
                    imageUrl:
                        '/images/testimonials/6.png',
                },
            },
        ],
    ],
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
    return (
        <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
            <div
                className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#0B4033] to-[#0B4033]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
                aria-hidden="true"
            >
                <div
                    className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#0B4033] to-[#0B4033] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">Reviews</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        ArabictutorAI is already teaching <span className="text-primary">1.293</span> happy students!
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                    <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                        <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                            <p>{`“${featuredTestimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                            <img
                                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                                src={featuredTestimonial.author.imageUrl}
                                alt=""
                            />
                            <div className="flex-auto">
                                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                            </div>
                        </figcaption>
                    </figure>
                    {testimonials.map((columnGroup, columnGroupIdx) => (
                        <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                            {columnGroup.map((column, columnIdx) => (
                                <div
                                    key={columnIdx}
                                    className={classNames(
                                        (columnGroupIdx === 0 && columnIdx === 0) ||
                                            (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                                            ? 'xl:row-span-2'
                                            : 'xl:row-start-1',
                                        'space-y-8'
                                    )}
                                >
                                    {column.map((testimonial, index) => (
                                        <figure
                                            key={index}
                                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                                        >
                                            <blockquote className="text-gray-900">
                                                <p>{`“${testimonial.body}”`}</p>
                                            </blockquote>
                                            <figcaption className="mt-6 flex items-center gap-x-4">
                                                <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                                                <div>
                                                    <div className="font-semibold">{testimonial.author.name}</div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
