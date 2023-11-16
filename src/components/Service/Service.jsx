import lg1 from 'D:/Javascript/nexcent/src/assets/lg1.png'
import lg2 from 'D:/Javascript/nexcent/src/assets/lg2.png'
import lg3 from 'D:/Javascript/nexcent/src/assets/lg3.png'
import lg4 from 'D:/Javascript/nexcent/src/assets/lg4.png'
import lg5 from 'D:/Javascript/nexcent/src/assets/lg5.png'
import lg6 from 'D:/Javascript/nexcent/src/assets/lg6.png'
import lg7 from 'D:/Javascript/nexcent/src/assets/lg7.png'

function Service() {
  return (
    <div className="flex justify-center items-center bg-white p-12">
      <div className="text-center">
        <h2 className="text-Headline2 my-4 font-medium">Our Clients</h2>
        <p className='mb-12'>We have been working with some Fortune 500+ clients</p>
        <div className="flex gap-36">
        <img src={lg1} width={58} height={58}/>
        <img src={lg2} width={58} height={58}/>
        <img src={lg3} width={58} height={58}/>
        <img src={lg4} width={58} height={58}/>
        <img src={lg5} width={58} height={58}/>
        <img src={lg6} width={58} height={58}/>
        <img src={lg7} width={58} height={58}/>
        </div>
      </div>
    </div>
  );
}

export default Service;
