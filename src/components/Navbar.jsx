import { AccountCircle, KeyboardArrowDown, NotificationsOutlined} from "@mui/icons-material"
import { navLinks } from "../utils/constants";

const Navbar = () => {
 
  return (
    <nav className="fixed top-0 w-screen flex justify-between items-center px-10 py-5 bg-blue-950 text-white z-50">
      <h1 className="text-2xl tracking-widest">
        {" "}
        <span className="text-green-300">H</span>OURS
      </h1>
      <div className="flex gap-4 items-center">
        {navLinks.map((item) => (
          <p
            key={item}
            className={`${
              item == "Dashboard" ? "underline decoration-green-300" : ""
            } hover:underline hover:decoration-green-300 cursor-pointer`}
          >
            {item}
          </p>
        ))}
      </div>

      <div className="flex gap-2 items-center">
        <NotificationsOutlined />
        <div className="flex gap-1 items-center">
            <AccountCircle sx={{fontSize: "30px"}} />
            <p className="text-sm">Mario</p>
            <KeyboardArrowDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
