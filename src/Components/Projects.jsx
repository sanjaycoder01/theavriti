import { ArrowUpRight } from "lucide-react";
import obys from "../Images/obys.png";
import ToDesktop from "../Images/ToDesktop.png";
import xgym from "../Images/x-gym.png";
export function Projects() {
  const data = [
    {
      image: obys,
      title: "Obys Clone",
      description:
        "A vibrant and animated agency website clone showcasing modern design trends and interactive features.",
      button: "https://obyagency.netlify.app/",
    },
    {
      image: ToDesktop,
      title: "ToDesktop Clone ",
      description:
        "ToDesktop Clone is a powerful and easy-to-use tool that allows you to create a complete copy of any website’s source code",
      button: "https://todesk.netlify.app/",
    },
    {
      image: xgym,
      title: "X-GYM",
      description:
        "The Responsive Gym Website is built using HTML, CSS, and JavaScript. It offers a visually appealing design and includes features like fitness info.",
      button: "https://x-gym89.netlify.app/",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzVXwKi7Sb9VvyGcpBcYTU3LHu53r4vPxysg&s",
      title: "Gym application",
      description:
        "The gym website is built with a responsive layout using HTML, Tailwind CSS, JavaScript, ensuring optimal view on all devices",
      button: "https://sanjaycoder01.github.io/gym/",
    },
  ];
  return (
    <>
      <p className="uppercase text-center text-xl sm:text-2xl py-4 lg:text-4xl">
        Project
      </p>
      <div className="mt-[1vw] flex gap-10 justify-center flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="w-[300px] rounded-md border  ">
            <img
              src={item.image}
              alt="Laptop"
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {item.title} &nbsp; <ArrowUpRight className="h-4 w-4" />
              </h1>
              <p className="mt-3 text-sm text-gray-200">{item.description}</p>

              <a href={item.button}>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  visit
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Projects;
