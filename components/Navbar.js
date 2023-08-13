import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { IDKitWidget } from "@worldcoin/idkit";
import  { ISuccessResult } from "@worldcoin/idkit";

export default function Navbar() {

    const handleProof = function(result) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, 3000);
            // NOTE: Example of how to decline the verification request and show an error message to the user
        });
    };
    
    const onSuccess = function(result) {
        console.log(result);
    };
    
    return (
        
            <>
            <nav className=' flex justify-between h-12 text-green-400 bg-black   font-bold' >
                <span className='mx-20 my-2 flex text-green-400 text-2xl  '><Link href={"/"}>SwiftFeed</Link></span>
                <ul className= 'px-2 py-3 flex space-x-10 mx-12 '>

        <div className='hover:text-white delay-50  text-md font-semibold font-mono'>
        
            <Link href="/explore">Explore</Link></div>
        <div className='hover:text-white delay-50  text-md font-semibold font-mono'>
        
            <Link href="/search">Search</Link></div>

            <div className='hover:text-white delay-50  text-md font-semibold font-mono'>
        
            <Link href="/post">Post</Link></div>

        

        <div className='hover:text-white delay-50 text-md font-semibold font-mono '>
        
            <Link href="/profile">Profile</Link></div>
              {/* <div className=' mx-2 my-2 '> */}   

              <div className='hover:text-white delay-50 text-lg font-semibold font-mono '>
        <IDKitWidget
					action="my_action"
					signal="my_signal"
					onSuccess={onSuccess}
					handleVerify={handleProof}
					app_id="app_staging_030f6ab3958204bfc99ed18786d1d625"
					// walletConnectProjectId="get_this_from_walletconnect_portal"
				>
					{({ open }) => <button onClick={open}>Verification</button>}
				</IDKitWidget>
</div>         
        <ConnectButton/>
            </ul>
        </nav>
        {/* <hr/> */}
        </>
        
        );
        }