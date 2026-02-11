// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
//       <Link className="text-white font-bold" href={"/"}>
//         GTCoding.
//       </Link>

//       <Link className="bg-white p-2" href={"/addTopic"}>
//         Add Topic
//       </Link>
//     </nav>
//   );
// }
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{backgroundColor: 'white', border: '5px solid #166534'}}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">
        
        {/* Brand */}
        <Link
          style={{color: '#166534'}}
          className="text-2xl font-bold"
          href="/"
        >
          GTCoding.
        </Link>
        
        {/* Button */}
        <Link
          style={{backgroundColor: '#166534', color: 'white'}}
          className="px-6 py-2.5 rounded-md font-semibold"
          href="/addTopic"
        >
          Add Topic
        </Link>
      </div>
    </nav>
  );
}