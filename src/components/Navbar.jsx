import { navbar } from "../constants";
const Navbar = () => {
  return (
    <nav className="flex justify-between px-20 py-5  fixed top-0 w-[100vw]  bg-blue">
      <div className=" font-Orbitron font-semibold text-darkBlue">{`${navbar.logo}`}</div>
      <ul className="flex ">
        {navbar.navbarItems.map((navItem, index) => (
          <li
            key={navItem.id}
            className={index < navbar.navbarItems.length - 1 ? "mr-4" : ""}
          >
            <a href={`#${navItem.name}`}>{navItem.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
