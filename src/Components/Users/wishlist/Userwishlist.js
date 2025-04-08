import Nav from "../../nav/Nav"

import { useState , useEffect } from "react"
import { Navigate } from "react-router-dom"

import { useSelector   } from "react-redux"

import Card from "../../Carcard/Card"

import './wishlist.css'


function Userwishlist() {
    let [carid , setcarid] = useState([])
    let [cars , setcars] = useState([])

    const userid = useSelector((state) => state.user.customer_id)
    const loggedin = useSelector((state) => state.user.loggedin)

    useEffect(() => {

        let data = {
            "customer_id": userid
        }

        try {
            fetch(`${process.env.REACT_APP_API_URL}/wishlist`,
                {   method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
            )
            .then((res) => res.json())
            .then((data) => {
                console.log('Fetched data:', data);
                setcarid(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }, [userid]);

    const carsid = carid.map((i) => i.carid)

    useEffect(() => {

        let data = {
            "carid": carsid
        }

        try {
                fetch(`${process.env.REACT_APP_API_URL}/wishlistcars`,
                {   method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
            )
            .then((res) => res.json())
            .then((data) => {
                console.log('Fetched data:', data);
                setcars(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }, [userid , carid]);


  return (
    <div>
        { loggedin ? (<></>) : <Navigate to="/"></Navigate>}

        <Nav></Nav>
        <div className="wishlist-container">
            {
                cars.map((car) => {
                    return <div key={car.id} >
                        <Card car={car}></Card>
                    </div>
                })
            }

        </div>
    </div>
  )
}

export default Userwishlist