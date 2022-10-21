import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


async function loadData() {
  const hatResponse = await fetch('http://localhost:8090/api/hats/');
  console.log(hatResponse);
  const shoeResponse = await fetch('http://localhost:8080/api/shoes/');

  if (hatResponse.ok && shoeResponse.ok) {
    const hatData = await hatResponse.json();
    const shoeData = await shoeResponse.json();

    root.render(
      <React.StrictMode>
        <App hats={hatData.hats} shoes={shoeData.shoes} />
      </React.StrictMode>
    );
  } else {
    console.error(hatResponse);
    console.error(shoeResponse);
  }
}

loadData();


// async function loadShoes() {

//   console.log(response);

//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//     root.render(
//       <React.StrictMode>
//         <App shoes={data.shoes} />
//       </React.StrictMode>
//     );
//   } else {
//     console.error(response);
//   }
// }

// loadShoes();







// async function loadHats() {
//   const response = await fetch("http://localhost:8090/api/hats/");
//   const responseJson = await response.json();
//   return responseJson.hats;
// }

// const main = async () => {
//   const hats = await loadHats();


//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(
//     <React.StrictMode>
//       <App hats={data.hats} />
//     </React.StrictMode>
//   );
// };

// main().catch((err) => {
//   console.error(err);
// });
