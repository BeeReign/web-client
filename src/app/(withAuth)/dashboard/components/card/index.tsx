import {
  FaCartFlatbed,
  FaBoxesStacked,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa6";

export default function DashboardCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* card  */}
      <div className="p-6 rounded bg-white border border-gray-300 hover:border-0 hover:shadow-lg flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <FaCartFlatbed className="w-6 h-6" />
          <span className="px-2 py-1 flex items-center rounded-full text-white bg-teal-600 text-xs">
            12%
            <FaChevronUp className="ml-1 w-3 h-3" />
          </span>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-extrabold">358</h2>
          <p className="capitalize text-sm text-gray-400">product sales</p>
        </div>
      </div>
      {/* end card  */}

      {/* card  */}
      <div className="p-6 rounded bg-white border border-gray-300 hover:border-0 hover:shadow-lg flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <FaBoxesStacked className="w-6 h-6" />
          <span className="px-2 py-1 flex items-center rounded-full text-white bg-red-500 text-xs">
            -7%
            <FaChevronDown className="ml-1 w-3 h-3" />
          </span>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-extrabold">1278</h2>
          <p className="capitalize text-sm text-gray-400">packings</p>
        </div>
      </div>
      {/* end card  */}

      {/* card  */}
      <div className="p-6 rounded bg-white border border-gray-300 hover:border-0 hover:shadow-lg flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <FaBoxesStacked className="w-6 h-6" />
          <span className="px-2 py-1 flex items-center rounded-full text-white bg-red-500 text-xs">
            -7%
            <FaChevronDown className="ml-1 w-3 h-3" />
          </span>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-extrabold">1278</h2>
          <p className="capitalize text-sm text-gray-400">packings</p>
        </div>
      </div>
      {/* end card  */}

      {/* card  */}
      <div className="p-6 rounded bg-white border border-gray-300 hover:border-0 hover:shadow-lg flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <FaBoxesStacked className="w-6 h-6" />
          <span className="px-2 py-1 flex items-center rounded-full text-white bg-red-500 text-xs">
            -7%
            <FaChevronDown className="ml-1 w-3 h-3" />
          </span>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-extrabold">1278</h2>
          <p className="capitalize text-sm text-gray-400">packings</p>
        </div>
      </div>
      {/* end card  */}
    </div>
  );
}
