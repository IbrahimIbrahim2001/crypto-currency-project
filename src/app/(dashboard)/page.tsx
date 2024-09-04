import Link from "next/link";

export default function Dashboard() {

  return (
    <>
      <div className="flex-1 mb-5">
        <div className="bg-white rounded-xl p-2 h-96 mb-5 " >
          Hello crypto currency - Ibrahim
        </div>
        <div className="bg-white rounded-xl p-2 h-56" >
          Hello crypto currency - Ibrahim
        </div>
      </div>
      <div>

        <div className="w-full sm:w-80 p-4 h-72 bg-white font-semibold overflow-y-auto  rounded-xl mb-5">
          <div className="flex justify-between items-center mb-4">
            <p>News</p>
            <Link href="news">See All</Link>
          </div>
          <div className="h-1/4 mb-4">
            <p className="break-words mb-1">
              newsnewsnewsnewsnewsnewsnewsnewsnewsnewsnews255
            </p>
            <p className="text-sm flex space-x-0.5">
              <span>BBC</span>
              <span>|</span>
              <span>1h</span>
            </p>
          </div>
          <div className="h-1/4 mb-4">
            <p className="break-words mb-1">
              newsnewsnewsnewsnewsnewsnewsnewsnewsnewsnews255
            </p>
            <p className="text-sm flex space-x-0.5">
              <span>BBC</span>
              <span>|</span>
              <span>1h</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
