import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Circle } from 'lucide-react'
import Image from 'next/image'

export const CoursePoint = ({ title }: { title: string }) => {
  return (
    <div className="rounded flex justify-start items-center  hover:shadow-lg px-6 transition hover:scale-105 py-2 space-x-4 font-normal">
      <div className="min-w-fit">
        <Circle
          size={12}
          className="text-accent rounded-full border-2"
          strokeWidth={8}
        />
      </div>
      <h5 className="text-lg  min-w-0">{title}</h5>
    </div>
  )
}

export const OfferingCard = ({
  title,
  Icon,
  info,
}: {
  title: string
  Icon: string
  info: string
}) => {
  return (
    <Card
      className={` w-full h-full  bg-gradient-to-tl from-[#ed3237] to-[#fb666b]  text-white rounded transition `}
    >
      <CardHeader>
        <Image src={Icon} width={60} height={60} alt={title} />
      </CardHeader>
      <CardContent className="">
        <h5 className="text-2xl font-bold min-w-0">{title}</h5>
      </CardContent>
      <CardFooter>
        <p className="min-w-0 font-light text-zinc-200 text-lg text-justify">
          {info}
        </p>
      </CardFooter>
    </Card>
  )
}
