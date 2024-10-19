function FontOption({ onSelectedFont, oneHandleFont, name }) {
  const fontClasses = {
    kumbh: "font-kumbh",
    roboto: "font-roboto",
    space: "font-space",
  };

  return (
    <button
      onClick={() => oneHandleFont(name)}
      className={`ml-5 flex justify-center items-center w-10 h-10 rounded-full ${
        onSelectedFont === name
          ? "bg-black text-white"
          : "bg-light-gray text-dark-navy"
      } cursor-pointer transition-transform duration-300 ease-in-out hover:ring-4 hover:ring-light-gray hover:scale-110`}
    >
      <span className={`${fontClasses[name]}`}>Aa</span>
    </button>
  );
}

export default FontOption;
