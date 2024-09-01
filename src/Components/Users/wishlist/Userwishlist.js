import Nav from "../../nav/Nav"

import { useState , useEffect } from "react"

import { useSelector ,  } from "react-redux"

import { Navigate } from "react-router-dom"


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
            fetch('http://localhost:3000/wishlist',
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

    useEffect(() => {

        let data = {
            "carid": carid
        }

        try {
            fetch('http://localhost:3000/carsdata',
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
        <div>

            Userwishlist
        </div>
    </div>
  )
}

export default Userwishlist