import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className="flex justify-center py-3 gap-6">
      <Link to="/">
        <a>Home</a>
      </Link>
      <Link to="/projects">
        <a>Projects</a>
      </Link>
    </div>
  );
};
