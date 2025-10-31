// import React, { useEffect, useState } from "react";

// const SCRIPT_URL =
//   "https://script.google.com/macros/s/AKfycbyYWVfxKEosVQyIGfiGKR-v3IkRq8fY6vMPmNw9ZxeytBUW6Tl9ABOAofSpPxBSjCg6/exec";

// export default function Gallery() {
//   const [gallery, setGallery] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchGallery = async () => {
//     try {
//       const res = await fetch(SCRIPT_URL);
//       const data = await res.json();

//       // ✅ Convert all Google Drive links into viewable URLs
//       const fixedData = data.map((item) => {
//         let fileIdMatch = item.url.match(/[-\w]{25,}/); // extract file ID
//         const fileId = fileIdMatch ? fileIdMatch[0] : null;

//         return {
//           ...item,
//           url: fileId
//             ? `https://drive.google.com/uc?export=view&id=${fileId}`
//             : item.url,
//         };
//       });

//       setGallery(fixedData);
//     } catch (error) {
//       console.error("Error fetching gallery:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchGallery();
//   }, []);

//   return (
//     <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-center text-white">
//       <h2 className="text-4xl md:text-5xl font-bold mb-4">
//         Our <span className="text-yellow-500">Gallery</span>
//       </h2>
//       <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
//         Memorable moments from{" "}
//         <span className="text-yellow-500 font-semibold">Tathastu Realtor</span>.
//       </p>

//       {loading ? (
//         <p className="text-gray-400">Loading gallery...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
//           {gallery.map((item, index) => (
//             <div
//               key={index}
//               className="overflow-hidden rounded-2xl shadow-lg border-2 border-transparent hover:border-yellow-500 transition-all duration-500"
//             >
//               {item.type?.startsWith("video") ? (
//                 <video
//                   src={item.url}
//                   controls
//                   className="w-full h-72 object-cover"
//                 />
//               ) : (
//                 <img
//                   src={item.url}
//                   alt={item.name}
//                   className="w-full h-72 object-cover transform hover:scale-110 transition-transform duration-700"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
import React, { useEffect, useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyuOF0Ntcf2xydRMnVA6eHpBHLmCJMbbRwP1kH6NDgRx2T8eWrAuTCNwx76f0f_eoZq/exec";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGallery = async () => {
    try {
      const res = await fetch(SCRIPT_URL + "?t=" + Date.now()); // prevent caching
      const data = await res.json();

      // ✅ Fix Drive preview link
      const updated = data.map((item) => ({
        ...item,
        url: item.url.replace(
          "https://drive.google.com/uc?export=view&id=",
          "https://lh3.googleusercontent.com/d/"
        ),
      }));

      setGallery(updated);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our <span className="text-yellow-500">Gallery</span>
      </h2>
      <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
        Moments captured at{" "}
        <span className="text-yellow-500 font-semibold">Tathastu Realtor.</span>
      </p>

      {loading ? (
        <p className="text-gray-400 text-lg animate-pulse">Loading gallery...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {gallery.length > 0 ? (
            gallery.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-lg border-2 border-transparent hover:border-yellow-500 transition-all duration-500"
              >
                {item.mimeType?.startsWith("video") ? (
                  <video
                    src={item.url}
                    controls
                    className="w-full h-72 object-cover"
                  />
                ) : (
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-72 object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-400">No images found in Drive folder.</p>
          )}
        </div>
      )}
    </section>
  );
}
