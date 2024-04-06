import axios from "axios"; // Module to call Api.
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ListPost () {

/**
 * Methode to recover all list the Post.
 */
    const [listPost , setListPost] = useState([]) ;

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/') //Route of Api.
            .then((Response) =>{
                setListPost(Response.data); //recover data from API.
                console.log(Response.data)
            })
            .catch(err =>console.log(err));
    },[]);


      /**
   * Methode to sauve OnePost to localStore
   */
      const saveStorage = (data) => {
        // Générer une clé unique basée sur la date
        const key = `freemo${Date.now()}`;
      
        // Sauvegarder les données du post dans le localStorage
        localStorage.setItem(key, JSON.stringify(data));
        alert('Id : '+data.id +' a été ajouté dans le localStorage')
      };
      
      

    return (
        <><br/><br/>
        <div className="bg-info rounded">
            <div>
                <h4 className="">Liste des posts </h4>
            </div>
            <div className="w-50 container d-flex justify-content-center align-items-center ">
                <table className="table table-hover table-bordered">

                    <thead>
                        <tr>
                            <th className="table-warning">Id</th>
                            <th className="table-warning">Title</th>
                            <th className=""></th>
                            <th className="table-success">
                            <Link to={`/save`} title="Liste des localStorage">
                            <button className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                                </svg>
                                </button>
                            </Link>
                            </th>


                        </tr>
                    </thead>

                    <tbody>
                        {
                            listPost.map( listPosts =>(
                                
                              
                                <tr key={listPosts.id}>
                                    <td><b>{listPosts.id}</b></td>
                                    <td>{listPosts.title}</td>
                                    <th className="">
                                        <Link to ={`/${listPosts.id}`} title="en savoir plus" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                                            </svg>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={()=>{
                                            saveStorage(listPosts) //recuver data onePost
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                            </svg>
                                        </button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

