import Link from "next/link";

function Links() {
  return (
    <div className="grid grid-rows-3 gap-12 lg:text-left lg:ml-10 textic">
      <div className="row-span-1">
        <Link href="/gallery">
          <span className="inline-block font-bold  text-5xl md:text-7xl transition-transform duration-300 transform hover:scale-110 focus:scale-110">
            GALLERY
          </span>
        </Link>
      </div>
      <div className="row-span-1">
        <Link href="/about">
          <span className="inline-block font-bold  text-5xl md:text-7xl transition-transform duration-300 transform hover:scale-110 focus:scale-110">
            ABOUT
          </span>
        </Link>
      </div>
      <div className="row-span-1">
        <Link href="/contact">
          <span className="inline-block font-bold  text-5xl md:text-7xl transition-transform duration-300 transform hover:scale-110 focus:scale-110">
            CONTACT
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Links;
