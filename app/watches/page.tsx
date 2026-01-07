import WatchGrid from '../component/WatchGrid'
import { getWatches } from '../lib/getWatches'

const page = async () => {
  const watches = await getWatches()

  return (
    <div id="watches" className="mt-25">
      <div className="m-4 lg:m-6">
        <h1 className="text-center text-[#ad803c] font-bold text-2xl md:text-3xl">
          Our Watches
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Explore our exclusive collection of premium watches, blending timeless
          design with modern craftsmanship.
        </p>

        {/* Client component */}
        <WatchGrid watches={watches} />
      </div>
    </div>
  )
}

export default page
