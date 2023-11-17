import lg1 from '../assets/lg1.png'
import lg2 from '../assets/lg2.png'
import lg3 from '../assets/lg3.png'
import lg4 from '../assets/lg4.png'
import lg5 from '../assets/lg5.png'
import lg6 from '../assets/lg6.png'

function OurTeam() {
  return (
    <div className="flex m-14 mx-[350px] gap-16">
      <div className="flex-col ml-[400px]">
        <p className="mb-5">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <a
          href="/"
          className="text-primary hover:text-secondary font-semibold text-[20px]"
        >
          Tim Smith
        </a>
        <p className="my-3 ">British Dragon Boat Racing Association</p>
        <div className="flex gap-12 my-5 items-center">
        <img src={lg1} width={58} height={58}/>
        <img src={lg2} width={58} height={58}/>
        <img src={lg3} width={58} height={58}/>
        <img src={lg4} width={58} height={58}/>
        <img src={lg5} width={58} height={58}/>
        <img src={lg6} width={58} height={58}/>
        <p className='text-primary hover:text-secondary font-semibold'>Meet all customers → </p>
        </div>
      </div>
        
    </div>
  );
}

export default OurTeam;
