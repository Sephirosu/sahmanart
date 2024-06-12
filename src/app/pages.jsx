import Links from "./homepage/Links";
import Images from "./homepage/Images";
import Copyright from "./homepage/Copyright";
import Socials from "./homepage/Socials";
import Quotes from "./homepage/Quotes";

function Page() {
  return (
    <div
      style={{
        backgroundImage: "url('art29.jpg')",
      }}
      className="relative    flex flex-col justify-center items-center area    "
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900  "></div>
      <ul className="circles ">
        <Images />
        <div className="md:flex md:justify-evenly brightness-75">
          <Quotes />
        </div>
        <div className="text-white text-center ">
          <div className="mb-20 lg:m-28 md:mt-20">
            <Links />

            <Socials />

            <Copyright />
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Page;
