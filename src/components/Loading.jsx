
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <svg
        className="animate-spin-slow feather feather-hourglass"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="150"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"

      >
        <path
          d="M6 2h12v6l-6 6-6-6z"
          className="fill-current text-gray-400 animate-pour-up"
        />
        <path
          d="M6 22h12v-6l-6-6-6 6z"
          className="fill-current text-gray-700 animate-pour-down"
        />
      </svg>
    </div>
  );
};

export default Loading;
