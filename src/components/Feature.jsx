import ic1 from "../assets/ic1.png";

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
        <div className="bg-silver rounded-lg w-[350px] h-[320px]">
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
        <div className="bg-silver rounded-lg w-[350px] h-[320px]">
          <img src={ic1} width={75} height={66} className="mx-auto mt-9" />
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
        <div className="bg-silver rounded-lg w-[350px] h-[320px]">
          <img src={ic1} width={75} height={66} className="mx-auto mt-9" />
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
    </div>
  );
}

export default Feature;
