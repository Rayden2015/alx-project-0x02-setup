import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, content, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full ml-2 flex-shrink-0">
          #{id}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
        {content}
      </p>
      
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>User ID: {userId}</span>
        <div className="flex space-x-2">
          <button className="text-blue-600 hover:text-blue-800 transition-colors">
            View
          </button>
          <button className="text-green-600 hover:text-green-800 transition-colors">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
