import  { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom"; 

export default function LookLocalStorage  (){
        /**
     * return to page acceuill
     */
        const returnNavigate = useNavigate()
        function returnAcc (){
            return  returnNavigate('/')
        }
    
    /**
     * Methode aff save localstorage
     */
    const [saveStorage, setSaveStorage] = useState([]);

useEffect(() => {
  const keys = Object.keys(localStorage) //recuped key to localstored.
  const filteredKeys = keys.filter((key) => key.startsWith('freemo')) //filtre le tableu keys n'ayont pas freemo.
  const allData = [] // Tableau pour stocker les données.

  filteredKeys.forEach((key) => {  // Parcourir les clés filtrées.
    const jsonValue = localStorage.getItem(key)  // Récupérer la valeur du localStorage
    const value = JSON.parse(jsonValue)   // Convertir la string JSON en objet.

    allData.push(value)// Ajouter l'objet au tableau
  });

  setSaveStorage(allData); //pour les mise a jour
}, []);

return (
<>
<div className="bg-info rounded">
    <h3>Post stoke dans le LocalStorage</h3><br/>

    <div className='w-75 container d-flex justify-content-center align-items-center'>
        <table className="table table-bordered ">
        <thead>
            <tr>
            <th  className="table-warning">ID</th>
            <th  className="table-warning">Titre</th>
            <th  className="table-warning">Contenu</th>
            </tr>
        </thead>

        <tbody>
            {saveStorage.map((saveStorages) => (
            <tr key={saveStorages.id}>
                <td>{saveStorages.id}</td>
                <td>{saveStorages.title}</td>
                <td>{saveStorages.body}</td>
            </tr>
            ))}
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