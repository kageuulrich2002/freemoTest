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

/**
 * Methode for delete localStorage
 */
const deleteLocalStorage = (key) => {
    // Supprimer l'élément du localStorage
    localStorage.removeItem(key);
    alert(key)
  };
  

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
            <th className='table-danger'></th>
            </tr>
        </thead>

        <tbody>
            {saveStorage.map((saveStorages) => (
            <tr key={saveStorages.id}>
                <td>{saveStorages.id}</td>
                <td>{saveStorages.title}</td>
                <td>{saveStorages.body}</td>
                <td>
                    <button onClick={() => deleteLocalStorage(`freemo${saveStorages.id}`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                    </button>
                </td>
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