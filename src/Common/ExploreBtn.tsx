import { Link } from "react-router-dom";

export interface ExploreBtnProps {
  route: string;
  text: string;
}

const ExploreBtn = ({ route, text }: ExploreBtnProps) => {
  return (
    <Link to={route} className="btn smoothy mx-auto mt-6 text-lg w-fit">
      {text}
    </Link>
  );
};

export default ExploreBtn;
