import { useState } from "react"
import axios from 'axios'

const AdminEditPage = () => {

    const [name, setName] = useState('') 
    const [description, setDescription] = useState('') 
    const [category, setCategory] = useState('') 
    const [weight, setWeight] = useState('') 
    const [price, setPrice] = useState('') 

    const [selectedFile, setSelectedFile] = useState(null) 

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', name)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('weight', weight)
        formData.append('price', price)
        
        formData.append('image', selectedFile)
//https://catalog-backend-l9qt.onrender.com
        try { 
            const response = await axios.post('https://catalog-backend-l9qt.onrender.com/api/admin/upload' , formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log('Image uploaded to the backend' , response)
        } catch (error) {
            console.error('Error: ', error)
        }
    }

    return (
        <div>
            <section></section>
            <section style={{margin:"0",marginLeft:"auto"}}>
                <form onSubmit={handleSubmit}  style={{display:"flex",flexDirection:"column"}}>
                    <label>Name</label>
                    <input type="text"
                    onChange={(e) => setName(e.target.value)} 
                    valute={name}
                    required
                    />
                    <label>Description</label>
                    <input type="text"
                    onChange={(e) => setDescription(e.target.value)} 
                    valute={description}
                    required
                    />
                    <label>Category</label>
                    <input type="text"
                    onChange={(e) => setCategory(e.target.value)} 
                    valute={category}
                    required
                    />
                    <label>Weight</label>
                    <input type="text" 
                    onChange={(e) => setWeight(e.target.value)} 
                    valute={weight}
                    required
                    />
                    <label>Price (mdl)</label>
                    <input type="number"
                    onChange={(e) => setPrice(e.target.value)} 
                    valute={price}
                    required
                    />
                    <label>Image</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} required/>
                    <button type="submit">Add Item</button>
                </form>
            </section>
        </div>
    )

}

export default AdminEditPage