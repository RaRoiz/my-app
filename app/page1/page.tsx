import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <h1 className = "text-3xl text-center" > Page1 </h1>

      <Image src="/250144965.jpg"width={300} height={300} alt={"player"}/>
      <h1 className="text-3xl text-red-600"> 66162110128-7 </h1>


    

      <Link href="\page1">Go to Page1</Link>
      <Link href="\page2">Go to Page2</Link>
      <Link href="\page3">Go to Page3</Link>
    </div>
  );
}
