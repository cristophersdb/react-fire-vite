import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';



export const Create = () => {

  //configurar hooks
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  //referencia a la colección
  const productsCollection = collection(db, 'products');

  const store = async (event) => {
    event.preventDefault()
    //addDoc es un metodo de firestore, le pasamos la colleccion y los datos capturados
    await addDoc(productsCollection, { description: description, stock: stock, price: price})
    navigate('/')

  }

  return (
    <div className='container'>
      <div className='row'>
        <h1>Crear Producto</h1>
        <form onSubmit={store}>
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
          <button type='submit' className='btn btn-primary'>CREAR</button>
        </form>
      </div>
    </div>
  )
}
