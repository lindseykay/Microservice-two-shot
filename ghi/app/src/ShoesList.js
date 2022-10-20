import React from  'react';
import { NavLink, Outlet } from "react-router-dom";

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

  // export default ShoesList;

  function ShoesList(props) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Type</th>
            <th>Color</th>
            <th>Picture</th>
            <th>Bin</th>
          </tr>
        </thead>
        <tbody>
          {props.shoes.map(shoe => {
            return (
              <tr key={shoe.href}>
              <td>{ shoe.manufacturer }</td>
              <td>{ shoe.model_name }</td>
              <td>{ shoe.color} </td>
              <td><img style={{ width: 50 }} src={shoe.picture_url} alt=""/></td>
              <td>{ shoe.bin.closet_name} </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    );
}

export default ShoesList;
