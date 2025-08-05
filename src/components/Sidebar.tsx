import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Home, FolderKanban, CheckSquare, Settings } from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`fixed left-0 top-16 ${isExpanded ? 'w-[250px]' : 'w-[55px]'} h-screen py-5 px-2 bg-gray-50 border-r border-gray-200 transition-all duration-500`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <ul className="p-0 m-0 list-none transition-all duration-500">
        <li className="mb-2.5">
          <Link
            to="/"
            className="flex items-center gap-2 p-2 text-base text-gray-600 no-underline transition-colors rounded hover:bg-gray-100 hover:text-gray-900 "
          >
            <div className="flex items-center gap-2">
              <Home size={20} />
              {isExpanded && (
                <span className="transition-all duration-500">Home</span>
              )}
            </div>
          </Link>
        </li>
        <li className="mb-2.5">
          <Link
            to="/projects"
            className="flex items-center gap-2 p-2 text-base text-gray-600 no-underline transition-colors rounded hover:bg-gray-100 hover:text-gray-900"
          >
            <div className="flex items-center gap-2">
              <FolderKanban size={20} />
              {isExpanded && (
                <span className="transition-all duration-500">Projects</span>
              )}
            </div>
          </Link>
        </li>
        <li className="mb-2.5">
          <Link
            to="/tasks"
            className="flex items-center gap-2 p-2 text-base text-gray-600 no-underline transition-colors rounded hover:bg-gray-100 hover:text-gray-900"
          >
            <div className="flex items-center gap-2">
              <CheckSquare size={20} />
              {isExpanded && (
                <span className="transition-all duration-500">Tasks</span>
              )}
            </div>
          </Link>
        </li>
        <li className="mb-2.5">
          <Link
            to="/settings"
            className="flex items-center gap-2 p-2 text-base text-gray-600 no-underline transition-colors rounded hover:bg-gray-100 hover:text-gray-900"
          >
            <div className="flex items-center gap-2">
              <Settings size={20} />
              {isExpanded && (
                <span className="transition-all duration-500">Settings</span>
              )}
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
