
import { LuChevronRight, LuHome } from "react-icons/lu";
import PageTitle from "../pages/PageTitle";

const Breadcrumb = ({ title, subtitle }) => {
  return (
    <>
      <PageTitle title={title} />
      <section className="hidden h-14 items-center bg-default-400/10 lg:flex">
        <div className="container">
          <div className="flex items-center">
            <ol
              aria-label="Breadcrumb"
              className="flex min-w-0 items-center gap-2 whitespace-nowrap"
            >
              <li className="text-sm">
                <div
                  className="flex items-center gap-2 align-middle leading-none text-default-800 transition-all hover:text-primary-500"
                  
                >
                  <LuHome size={16} />
                  Home
                  <LuChevronRight size={16} />
                </div>
              </li>
              {subtitle && (
                <li className="text-sm">
                  <div
                    className="flex items-center gap-2 align-middle leading-none text-default-800 transition-all hover:text-primary-500"
                    
                  >
                    {subtitle}
                    <LuChevronRight size={16} />
                  </div>
                </li>
              )}
              <li
                aria-current="page"
                className="cursor-pointer truncate text-sm font-medium text-primary hover:text-primary-500"
              >
                {title}
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
