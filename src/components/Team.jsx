// import React from "react";

// export const Team = (props) => {
//   return (
//     <div id="team" className="text-center">
//       <div className="container">
//         <div className="section-title" style={{ margin: '0 auto', maxWidth: '800px' }}>
//           <h2>EKİBİMİZ</h2>
//           <p>
//             Biz, her projeye tutkuyla yaklaşıyor, kaliteli işçilik ve müşteri
//             memnuniyetini önceliğimiz olarak benimsiyoruz. Uzmanlığımızla,
//             mekanlarınızı hayalinizdeki gibi dönüştürmek için buradayız!
//           </p>
//         </div>
//         <div
//           id="row"
//           style={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//             gap: '30px', // Ensures spacing between team members
//           }}
//         >
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`}className="team"
//                   style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     textAlign: 'center',
//                     width: '240px', // Consistent width for all team members
//                   }}
//                 >
//                   <div className="thumbnail">
//                   {" "}
//                     <img src={d.img} alt="..." className="team-img" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
//                     <div className="caption">
//                       <h4>{d.name}</h4>
//                       <p>{d.job}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };
