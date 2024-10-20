export const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-4 py-2 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black `}
    {...props}
  />
);
