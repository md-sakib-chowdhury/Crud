"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

// import {HiOutlineTrash}from "react-icons/hi";    whitout refresh in output
// export default function RemoveBtn({ id }) {
//   const removeTopic = async () => {
//     const confirmed = confirm("Are you sure?");

//     if (confirmed) {
//       await fetch(`http://localhost:3000/api/topics?id=${id}`, {
//         method: "DELETE",
//       });
//     }
//   };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}

// export default function Removebtn ( { id } )
// { 
//     return (
// <button className="text-red-400">
//     <HiOutlineTrash size={24} />
// </button>



//     );
        
// }