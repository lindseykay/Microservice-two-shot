import React from  'react';



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
            <th>Delete</th>
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
              <td><button type="button" className="btn btn-danger" onClick={() => deleteItem(`${shoe.href}`)}>DELETE</button></td>
            </tr>

            )
          })}
        </tbody>
      </table>
    );
}

async function deleteItem(shoeid) {
  const shoeUrl = `http://localhost:8080${shoeid}`;
  const fetchOptions = {
      method: 'delete',
      headers: {
          'Content-Type': 'application/json',
      },
  };
  await fetch(shoeUrl, fetchOptions);
  window.location.reload(true);
}

export default ShoesList;


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
