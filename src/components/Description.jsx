import ilus3 from "../assets/ilus3.png";
function Description() {
  return (
    <div className="flex justify-center items-center bg-white p-14">
      <div className="flex mt-14 mx-[350px] gap-16">
        <img src={ilus3} alt="logoilus" width={442} height={443} />
        <div className="flex-col">
          <p className="text-Headline2 font-semibold">
            How to design your site footer like <br /> we did
          </p>
          <p className="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="bg-primary hover:bg-shade1 py-3 px-5 rounded-lg text-white mt-8">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Description;
