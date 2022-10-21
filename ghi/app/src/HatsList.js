import React from  'react';


function HatsList(props) {
  console.log(props)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {props.hats?.map(hat => {
            return (
              <tr key={hat.stylename}>
                <td>{hat.fabric}</td>
                <td>{hat.location.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  

  export default HatsList;







// function HatsList(props) {
//     return (
//       <div style={{ display: 'flex' }}>
//         <nav
//           style={{
//             borderRight: 'solid 1px',
//             padding: '1rem',
//           }}
//         >
//           {props.shoes.map((hat) => (
//             <NavLink
//               style={({isActive}) => {
//                 return {
//                   display: "block",
//                   margin: "1rem 0",
//                   color: isActive ? "red" : "",
//                 };
//               }}
//               to={`${hat.href}`}
//               key={hat.href}
//             >
//               {hat.stylename}
//             </NavLink>
//           ))}
//         </nav>
//         <Outlet />
//       </div>
//     );
//   }

//   export default HatsList;





// // export default HatsList;

// import React from  'react';
// import { NavLink, Outlet } from "react-router-dom";

// function ShoesList(props) {
//     return (
//       <div style={{ display: 'flex' }}>
//         <nav
//           style={{
//             borderRight: 'solid 1px',
//             padding: '1rem',
//           }}
//         >
//           {props.shoes.map((shoe) => (
//             <NavLink
//               style={({isActive}) => { // gets called on every re-render - it's an object with 'isActive' property that returns true if it's the one that was clicked and false if it's one of the links not clicked
//                 return {
//                   display: "block",
//                   margin: "1rem 0",
//                   color: isActive ? "red" : "",
//                 };
//               }}
//               to={`${shoe.href}`}
//               key={shoe.href}
//             >
//               {shoe.manufacturer}
//             </NavLink>
//           ))}
//         </nav>
//         <Outlet />
//       </div>
//     );
//   }

//   export default ShoesList;