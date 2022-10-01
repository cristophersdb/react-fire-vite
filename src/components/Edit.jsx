import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

export const Edit = () => {

  //configurar hooks
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault(); //evitar comportamiento de recarga del formulario
    const product = doc(db, "products", id); //conexión a la BD, la coleccion y el id
    const data = { description: description, stock: stock, price: price} //data que se saca de los input
    await updateDoc(product, data); //updateDoc de firestore, le pasamos el producto y los datos a actualizar
    navigate('/'); //ir a la ruta raiz
  }

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, "products", id)) //obtener los productos
    //validar si existe
    if (product.exists()) {
      /* console.log(product.data()) */
      setDescription(product.data().description);
      setStock(product.data().stock);
      setPrice(product.data().price);

    } else {
      console.log('el producto no existe')
    }
  }

  useEffect(() => {
    getProductById(id)
  }, [])


  return (
    <div className='container'>
      <div className='row'>
        <h1>Editar Producto</h1>
        <form onSubmit={update}>
          <div className='mb-3'>
            <label className='form-label'>Descripción</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Stock</label>
            <input
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              type="number"
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Precio</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              className='form-control'
            />
          </div>
          <button type='submit' className='btn btn-primary'>Actualizar</button>
        </form>
      </div>
    </div>
  )
}
