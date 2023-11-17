import ic1 from "../assets/ic1.png";
import ic2 from "../assets/ic2.png";
import ic3 from "../assets/ic3.png";
import ilus2 from "../assets/ilus2.png";

function Feature() {
  return (
    <div className="flex-col justify-center items-center bg-white p-12">
      <div className="text-center">
        <h2 className="text-Headline2 my-4 font-medium">
          Manage your entire community <br /> in a single system
        </h2>
        <p className="mb-12">Who is Nextcent suitable for?</p>
      </div>
      <div className="flex justify-center gap-[144px]">
        <div className="bg-silver rounded-lg w-[350px] h-[320px] shadow-xl">
          <img src={ic1} width={75} height={66} className="mx-auto mt-9" />
          <p className="text-center text-Headline3 font-medium mt-4">
            Membership <br />
            Organisations
          </p>
          <p className="text-center mt-5">
            Our membership management
            <br /> software provides full automation of
            <br />
            membership renewals and payments
          </p>
        </div>
        <div className="bg-silver rounded-lg w-[350px] h-[320px] shadow-xl">
          <img src={ic2} width={75} height={66} className="mx-auto mt-9" />
          <p className="text-center text-Headline3 font-medium mt-4">
            National <br />
            Associations
          </p>
          <p className="text-center mt-5">
            Our membership management
            <br /> software provides full automation of
            <br />
            membership renewals and payments
          </p>
        </div>
        <div className="bg-silver rounded-lg w-[350px] h-[320px] shadow-xl">
          <img src={ic3} width={75} height={66} className="mx-auto mt-9" />
          <p className="text-center text-Headline3 font-medium mt-4">
            Clubs And <br />
            Groups
          </p>
          <p className="text-center mt-5">
            Our membership management
            <br /> software provides full automation of
            <br />
            membership renewals and payments
          </p>
        </div>
      </div>
      <div className="flex mt-32 mx-72 gap-12">
        <img src={ilus2} alt="logoilus" />
        <div className="flex-col">
          <p className="text-Headline2 font-semibold">
            The unseen of spending three <br /> years at Pixelgrade
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

export default Feature;
