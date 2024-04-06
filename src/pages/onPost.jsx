import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; 

export default function OnPost () {
    
    /**
     * return to page acceuill
     */
    const returnNavigate = useNavigate()
    function returnAcc (){
        return  returnNavigate('/')
    }


    /**
     * Methode to display one Id
     */
  const { id } = useParams()  //recover id url.
  const [onPost , setOnPost] = useState([])

  useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) //Route of One Api.
        .then((reponce) =>{
            setOnPost(reponce.data)
            console.log(Response.data)
            console.log(onPost)
        })
        .catch(err => console.log(err));
  },[]);

    return (
    <>
    <div className="bg-info rounded"> <br/>
        <div className="w-75 container d-flex justify-content-center align-items-center">
            <table className="table table-bordered ">
                <thead>
                <tr>
                    <th  className="table-warning">USERId</th>
                    <th  className="table-warning">ID</th>
                    <th  className="table-warning">TITLE</th>
                    <th  className="table-warning">CONTENU</th>
                </tr>

                </thead>
                <tbody>
                <tr>
                    <th>{onPost.userId}</th>
                    <th>{onPost.id}</th>
                    <td>{onPost.title}</td>
                    <td>{onPost.body}</td>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
        <div><br/>
            <button onClick={returnAcc}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                <path  d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
                </svg>
            </button>
        </div>
    </>
    );
}

