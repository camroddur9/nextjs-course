import React from 'react'
import {useRouter} from "next/router"

const ProductItem = () => {
    
    const {
        query: {id},
    } = useRouter()

    return (
        <div>This is product item: {id}</div>
    )
}

export default ProductItem