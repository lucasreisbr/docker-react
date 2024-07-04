import logo from '../logo-ibresp.svg';
import './Footer.css';


export default function Footer() {

    return(
    
    <div>
        <section className="flex flex-row justify-center footer-bg h-screen ">
        
            <div className="w-full">

                <div className='container mx-auto px-3 xl:px-0'>

                    <div className='mt-14 w-full'>
                        <img alt="" src={logo} className="lg:h-14 md:h-7 h-8" />
                    </div>

                    <div className=' grid grid-cols-3 gap-5 justify-items-center mt-16'>

                        <div className=' bg-pink-300 h-64 w-full text-center place-content-center' >
                           <p className=' text-slate-800' > 1 </p>
                        </div>

                        <div className=' bg-pink-600 h-64 w-full text-center place-content-center' >
                           <p className=' text-slate-800' > 2 </p>
                        </div>

                        <div className=' bg-pink-800 h-64 w-full text-center place-content-center' >
                           <p className=' text-slate-800' > 3 </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    </div>
);
}