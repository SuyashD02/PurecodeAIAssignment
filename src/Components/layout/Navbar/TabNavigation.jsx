import { LuHeart, LuHome, LuUtensils } from "react-icons/lu";

const TabNavigation = () => {
  return (
    <div className="flex lg:hidden">
      <div className="fixed inset-x-0 bottom-0 z-40 grid h-16 w-full grid-cols-3 items-center justify-items-center border-t  bg-white dark:bg-default-50 border-[1px] border-solid border-red-500">
        <div
          className="flex flex-col items-center justify-center gap-1 text-default-600"
          type="button"
        >
          <LuHome size={18} />
          <span className="text-xs font-medium">Home</span>
        </div>
        <div
         
          className="flex flex-col items-center justify-center gap-1 text-default-600"
          type="button"
        >
          <LuUtensils size={18} />
          <span className="text-xs font-medium">Food</span>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-1 text-default-600"
          type="button"
        >
          <LuHeart size={18} />
          <span className="text-xs font-medium">Wishlist</span>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;