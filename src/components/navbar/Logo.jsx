import { Link } from "react-router-dom";
import schoolLogo from "../../assets/images/navbar/schoolLogo.webp";
import schoolNameLogo from "../../assets/images/navbar/schoolNameLogo.webp";


const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      {/* Logo Image */}
      <img
        src={schoolLogo}
        
        alt="Krishna International School"
        className="h-15 w-15 object-contain"
      />

      <img
        src={schoolNameLogo}
        alt="Krishna International School"
        className="h-30 w-30 object-contain"
      />
      
    </Link>
  );
};

export default Logo;
