import { useNavigate } from "react-router-dom";
import chevronLeft from "../../assets/svg/chevron-left.svg";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <nav className="fixed w-screen px-8 sm:px-20 lg:px-32 flex justify-end gap-10">
      <div className="py-10">
        <button
          type="button"
          className="flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          <img src={chevronLeft} />
          <h1 className="text-xl font-montserrat text-white">Back</h1>
        </button>
      </div>
    </nav>
  );
}
