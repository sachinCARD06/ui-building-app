import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Home, FolderKanban, CheckSquare, Settings } from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`fixed left-0 top-12 ${isExpanded ? 'w-[250px]' : 'w-[45px]'} h-screen py-5 px-1.5 bg-gray-50 border-r border-gray-200 text-sm transition-all duration-100 shadow-sm`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <ul className="p-0 m-0 space-y-2 list-none">
        <li>
          <Link
            to="/"
            className="flex items-center gap-2 p-2 text-base text-gray-600 no-underline transition-colors rounded hover:bg-gray-100 hover:text-gray-900 "
          >
            <div className="flex items-center gap-2">
              <Home size={18} />
              {isExpanded && <span className="text-sm">Home</span>}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="flex items-center gap-2 p-2 text-base text-gray-600 no-underline transition-colors rounded hover:bg-gray-100 hover:text-gray-900"
          >
            <div className="flex items-center gap-2">
              <FolderKanban size={20} />
              {isExpanded && <span className="text-sm">Projects</span>}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/tasks"
            className="flex items-center gap-2 p-2 text-base text-gray-600 no-underline transition-colors rounded hover:bg-gray-100 hover:text-gray-900"
          >
            <div className="flex items-center gap-2">
              <CheckSquare size={20} />
              {isExpanded && <span className="text-sm">Tasks</span>}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className="flex items-center gap-2 p-2 text-base text-gray-600 no-underline transition-colors rounded hover:bg-gray-100 hover:text-gray-900"
          >
            <div className="flex items-center gap-2">
              <Settings size={20} />
              {isExpanded && <span className="text-sm">Settings</span>}
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
