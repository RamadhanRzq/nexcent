import Logo from '../assets/Logo.png'

function Navbar() {
  return (
    <div className='flex m-9 items-center justify-between'>
      <img src={Logo} alt='logo' width={155} height={24}/>
        <div className='flex gap-14'>
            <a href='/' className='hover:text-primary'>Home</a>
            <a href='/' className='hover:text-primary'>Service</a>
            <a href='/' className='hover:text-primary'>Feature</a>
            <a href='/' className='hover:text-primary'>Product</a>
            <a href='/' className='hover:text-primary'>Testimonial</a>
            <a href='/' className='hover:text-primary'>FAQ</a>
        </div>
        <div className='flex gap-2 items-center'>
        <a className='text-primary hover:text-secondary mr-4' href='/'>Login</a> 
        <button className='bg-primary hover:bg-shade1 px-5 py-2 rounded-lg text-white'>Sign Up</button>
        </div>
    </div>
  );
}

export default Navbar;
