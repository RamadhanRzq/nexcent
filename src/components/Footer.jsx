export const Footer = () => {
  return (
    <div className="flex justify-center items-center m-12">
      <div className="flex-col">
        <h1 className="text-Headline1 font-bold w-[887px] text-center">
          Pellentesque suscipit <br />
          fringilla libero eu.
        </h1>
        <div className="flex justify-center gap-[144px] mt-8">
          <button className="bg-primary hover:bg-shade1 rounded-lg w-[172px] h-[52px] shadow-xl text-center text-white ">
            <p>Get a demo →</p>
          </button>
        </div>
      </div>
    </div>
  );
};
