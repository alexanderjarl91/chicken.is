import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen bg-[url("/bg.png")] bg-cover flex-col items-center justify-between p-24'>
      <Image src='/logo.png' alt='logo' width={300} height={300} />
      <p className='text-2xl font-semibold md:text-4xl text-primary text-center'>
        Vinsamlegast hafið samband fyrir frekari upplýsingar <br />
        <br />
        Please contact us for further information
      </p>
      <div className='text-primary font-bold flex flex-col gap-0 lg:gap-4 text-4xl items-center justify-center'>
        <a href='tel:+3546951013' className='hover:text-red-500'>
          +354 695-1013
        </a>
        <a href='mailto:anna@chicken.is' className='hover:text-red-500'>
          anna@chicken.is
        </a>
      </div>
    </main>
  )
}
