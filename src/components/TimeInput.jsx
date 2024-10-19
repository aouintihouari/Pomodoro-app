function TimeInput({ title, time, setTime }) {
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setTime(value);
    }
  };

  return (
    <div className="mt-5 w-full flex flex-row justify-between items-center sm:flex-col">
      <p className="text-p-s text-dark-navy opacity-80 ml-2 mb-2 w-full">
        {title}
      </p>
      <div className="relative w-12/12 sm:w-11/12">
        <div className="absolute bottom-5 right-2 flex flex-col">
          <button
            className="mb-3 group"
            type="button"
            onClick={() =>
              setTime((prev) => String(Math.min(Number(prev) + 1, 99)))
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="7"
              className="opacity-25 group-hover:opacity-100 transition-opacity duration-300"
            >
              <path
                fill="none"
                stroke="#1E213F"
                strokeWidth="2"
                d="M1 6l6-4 6 4"
              />
            </svg>
          </button>
          <button
            className="-mb-3 group"
            type="button"
            onClick={() =>
              setTime((prev) => String(Math.max(Number(prev) - 1, 1)))
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="7"
              className="opacity-25 group-hover:opacity-100 transition-opacity duration-300"
            >
              <path
                fill="none"
                stroke="#1E213F"
                strokeWidth="2"
                d="M1 1l6 4 6-4"
              />
            </svg>
          </button>
        </div>
        <input
          className="text-dark-navy bg-light-gray p-2 w-full rounded-lg"
          type="text"
          value={time}
          onChange={handleInputChange}
          maxLength={2}
        />
      </div>
    </div>
  );
}

export default TimeInput;
