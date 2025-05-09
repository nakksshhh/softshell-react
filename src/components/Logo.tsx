import React from 'react';
import { TagIcon } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <TagIcon className="h-8 w-8 text-blue-600" />
      <span className="text-xl font-bold text-gray-900 dark:text-white">SoftSell</span>
    </div>
  );
};

export default Logo;