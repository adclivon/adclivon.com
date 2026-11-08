import React from "react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-400"
    >
      <ol className="flex items-center space-x-2 flex-wrap">
        <li>
          <button
            onClick={() => onNavigate("/")}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Home
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-slate-600" aria-hidden="true">
                /
              </span>
              {isLast || !item.path ? (
                <span className="text-slate-200 font-medium truncate max-w-xs" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => onNavigate(item.path!)}
                  className="hover:text-cyan-400 transition-colors cursor-pointer truncate max-w-xs"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
