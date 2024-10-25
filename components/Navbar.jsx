import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white px-8 py-4 flex justify-between items-center">
      <Link href={"/"} className="font-bold text-2xl cursor-pointer">
        NextTopic
      </Link>
      <Link
        href={"/addTopic"}
        className="bg-white px-4 py-2 text-black rounded-sm font-semibold cursor-pointer"
      >
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
