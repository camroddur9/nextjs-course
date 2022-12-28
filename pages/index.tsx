import React, {useEffect, useState} from 'react'

import Navbar from '../components/Navbar/Navbar'

interface Product {
    name: string
}

const Home = () => {

    const [products, setProducts]: any = useState([])

    useEffect(() => {
        window.fetch('/api/avo')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    return(
        <div>
            <Navbar />
            <h1>Hola</h1>
            {products && products.data ?
                products.data.map((product: Product, index: number) => 
                    <div>{product.name}</div>
                ):null
            }
        </div>
    )
}

export default Home