/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
export const Marketing = () => {
  return (
    <div className="flex-col justify-center items-center bg-white p-12">
      <div className="flex-col justify-center items-center">
        <h2 className="text-center text-Headline2 my-4 font-medium">
          Caring is the new marketing
        </h2>
        <div className="container w-[630px] text-center mx-auto">
          <p>
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-[144px] mt-80">
        <div className="bg-silver rounded-lg w-[317px] h-[176px] shadow-xl text-center">
          <p className="text-center text-Headline4 font-medium m-4">
          Creating Streamlined Safeguarding Processes with OneRen 
          </p>
          <a href="/" className="text-primary hover:text-secondary font-bold">Readmore → </a>
        </div>
        <div className="bg-silver rounded-lg w-[317px] h-[176px] shadow-xl text-center">
          <p className="text-center text-Headline4 font-medium m-4">
          What are your safeguarding responsibilities and how can you manage them? 
          </p>
          <a href="/" className="text-primary hover:text-secondary font-bold">Readmore → </a>
        </div>
        <div className="bg-silver rounded-lg w-[317px] h-[176px] shadow-xl text-center">
          <p className="text-center text-Headline4 font-medium m-4">
          Revamping the Membership Model with Triathlon <br/> Australia
          </p>
          <a href="/" className="text-primary hover:text-secondary font-bold">Readmore → </a>
        </div>
      </div>
    </div>
  );
};
