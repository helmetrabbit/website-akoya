export const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 text-sm rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black ${className}`}
    {...props}
  />
);
