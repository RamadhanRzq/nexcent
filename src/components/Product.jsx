import ic4 from "../assets/ic4.png";
import ic5 from "../assets/ic5.png";
import ic6 from "../assets/ic6.png";
import ic7 from "../assets/ic7.png";

function Product() {
  return (
    <div className="flex m-28 mx-72">
      <div className="flex-col">
        <p className="text-Headline2 font-semibold">Helping a local</p>
        <p className="text-primary text-Headline2 font-semibold mt-2">
          from 8 years
        </p>
        <p className="mt-2">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-col ml-96">
          <div className="flex gap-5">
            <img src={ic4} alt="ic4" width={58} height={58} />
            <div className="flex-col">
              <p className="text-Headline3 font-bold">2,245,341</p>
              <p>Members</p>
            </div>
          </div>
          <div className="flex gap-5 mt-8">
            <img src={ic5} alt="ic4" width={58} height={58} />
            <div className="flex-col">
              <p className="text-Headline3 font-bold">828,867</p>
              <p>Event Bookings</p>
            </div>
          </div>
        </div>
        <div className="flex-col ml-32">
          <div className="flex gap-5">
            <img src={ic6} alt="ic4" width={58} height={58} />
            <div className="flex-col">
              <p className="text-Headline3 font-bold">46,328</p>
              <p>Clubs</p>
            </div>
          </div>
          <div className="flex gap-5 mt-8">
            <img src={ic7} alt="ic4" width={58} height={58} />
            <div className="flex-col">
              <p className="text-Headline3 font-bold">1,926,436</p>
              <p>Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
