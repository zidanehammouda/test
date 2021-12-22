import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import React,{useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ('./NewTask.css')


const NewTask = () => {
    const [data,setData] = useState({})
    
    const handleChange = ({target}) =>{
        const {name,value} = target
        setData( (prevData)=> ({
            ...prevData,
            [name] : value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(JSON.stringify(data, '', 2));
        axios.post('http://localhost:8000/api/products',data)
            .then(response => console.log(response))
            .catch(error => console.log(error))

    }


    return (
        <div className="AddProduct">
            <h3>Add Product</h3>
            <Link to='/'><BsFillArrowLeftCircleFill id="GoBackButton"/></Link>
            
            <form onSubmit={handleSubmit}>
                

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name ="name" value = { data.name || '' } onChange={handleChange}/>

                <label htmlFor="category">Category</label>
                <input type="text" id="category" name ="category" value = { data.category || '' } onChange={handleChange}/>

                <label htmlFor="quantity">Quantity</label>
                <input type="text" id="quantity" name ="quantity" value = { data.quantity || '' } onChange={handleChange}/>

                <label htmlFor="brand">Brand</label>
                <input type="text" id="brand" name ="brand" value = { data.brand || '' } onChange={handleChange} />

                <label htmlFor="image">Image</label>
                <input type="text" id="image" name ="image" value = { data.image || '' } onChange={handleChange} /> 

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewTask
