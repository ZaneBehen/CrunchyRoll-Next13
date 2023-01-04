import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserAuth } from '../../context/AuthContext'

export default function Navigation() {
  const { user, logout } = UserAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
      console.log('logout')
    } catch (error) {
      console.log(error);
    }
  };
    return (
    <div className='w-full flex items-center justify-between py-4 px-2 lg:px-40 absolute z-[100]'>
        <figure>
            <img className="scale-[1.1] ml-2 cursor-pointer" src="https://static.crunchyroll.com/cr-spa-registration/assets/img/logo/cr_logo.png"/>
        </figure>
        <div className="flex items-center">
        {user?.email ? ( 
            <Link href='/'>
            <button onClick={handleLogout} className='py-1 px-10 cursor-pointer text-sm text-white invisible sm:visible'>LOG OUT</button>
            </Link>
           ) : (
      <Link href='/login' className="py-1 px-10 cursor-pointer text-sm text-white invisible sm:visible">
        LOG IN
        </Link>
        )}
         {user?.email ? (
        <a href="#explore" className="scroll-smooth">
        <button className="border-2 scroll-smooth border-white py-2 mr-2 lg:mr-8 px-8 cursor-pointer text-sm text-white sm:items-center">EXPLORE</button>
        </a>
         ) : (
          <Link href='/signup'>
        <button className="border-2 scroll-smooth border-white py-2 mr-2 lg:mr-8 px-8 cursor-pointer text-sm text-white sm:items-center">EXPLORE</button>
        </Link>
        )}
      </div>
      </div>
    )
  }