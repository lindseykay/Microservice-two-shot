import { useParams } from "react-router-dom";
import ShoesList from "./ShoesList";


function getShoe(shoeID) {
    return ShoesList.find(
        (shoe) => shoe.id == shoeID
    );
}



function Shoe() {
    const params = useParams();
    const shoe = getShoe(params.shoeID)
    console.log (shoe)

    return (
        <main style={{ padding: "1rem" }}>
        <h2>Total Due: {shoe.manufacturer}</h2>
        {/* <p>
          <span style={{fontWeight: 'bold'}}>Invoice name</span>: {invoice.name}
        </p>
        <p>
          <span style={{fontWeight: 'bold'}}>Invoice number: </span> {invoice.number}
        </p>
        <p style={{fontWeight: 'bold'}}>Due Date: {invoice.due}</p> */}
      </main>
    );


}

export default Shoe
