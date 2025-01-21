import Link from "next/link";
export default function Navbar() {
    return (
        <><div className="w-full sticky top-0 flex justify-between bg-red-800">

        </div><div>
                Logo
            </div><div>
                <ul className="flex gap-x-6">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="\page1">Page1</Link></li>
                    <li><Link href="\page2">Page2</Link></li>
                    <li><Link href="\page3">Page3</Link></li>
                    <li><Link href="\#">About Us</Link></li>
                </ul>


            </div></>
    );
}