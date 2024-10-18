export const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-4 py-2 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 ${className}`}
    {...props}
  />
);
