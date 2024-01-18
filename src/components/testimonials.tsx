import Image from 'next/image'

export default function Testimonials() {
  return (
    <div className="px-2 md:px-20 lg:px-56 py-8 space-y-4">
      <h5 className="text-accent font-semibold text-xl">Testimonials</h5>
      <div>
        <h5 className="text-6xl font-bold">What Clients Are Saying</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {testimonialsArray.map((test, i) => {
            return (
              <TestimonialsCard
                key={i}
                name={test.name}
                image={test.image}
                profession={test.profession}
                text={test.text}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

const TestimonialsCard = ({
  name,
  image,
  profession,
  text,
}: {
  name: string
  text: string
  profession: string
  image: string
}) => {
  return (
    <div className="grid grid-cols-5 p-4 hover:shadow-xl duration-200 space-x-4 w-full  text-xl font-semibold text-zinc-600 ">
      <div className="w-56 col-span-1">
        <Image
          src={image}
          alt="testimonials"
          width={100}
          height={100}
          className="   "
        />
      </div>
      <div className="col-span-4 space-y-4 ">
        <p>&ldquo;{text}&rdquo;</p>
        <div className="flex justify-start items-center font-sans text-zinc-800">
          <p>{name}</p>
          {/* <p>{profession && '-' + profession}</p> */}
        </div>
      </div>
    </div>
  )
}

const testimonialsArray = [
  {
    name: 'Manish Verma',
    text: 'I strongly recommend her service as a communication coach - not only for our staff but also to refer her within the network we are connected to.',
    profession: 'digiDZN',
    image: '/manish_varma.png',
  },
  {
    name: 'Shalini',
    text: "You taught me how failure can be my best milestone to success.Earlier I was afraid to speak, whereas now, I'm unstoppable. I love my new self.",
    profession: 'Home maker',
    image: '/user.png',
  },
  {
    name: 'Vidushi',
    text: 'I consider myself fortunate to be able to learn from you and your experience. Your trainings have helped me to make it beyond myabilities. I am thankful for your gift of time!',
    profession: 'Post graduate studen in Jaipur',
    image: '/vidushi.png',
  },
  {
    name: 'Shilky Khanna',
    text: 'Every kid needs a coach like you in their life. Thank you, Hinna',
    profession: '',
    image: '/user.png',
  },
  {
    name: 'Kriti Chabra',
    text: 'You pushed me beyond my limits and I had no choice but to step out of my comfort zone.',
    profession: 'Makeup Artist',
    image: '/kriti_chabra.png',
  },
  {
    name: 'Rita Chabra',
    text: 'I am so lucky to have you as a coach who inspires me every day to be better than the day before.',
    profession: '',
    image: '/user.png',
  },
]
