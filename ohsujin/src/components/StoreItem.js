import React, { useState, useEffect } from 'react';
import { dbService } from 'fbase';

const StoreItem = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        dbService
            .collection("products")
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                const productArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
                }));
                setProducts(productArray);
            });
        }, []);

    return (
        <>
            <div className="container">
                {products.map((product) => 
                    <div key={product.id} className="col-lg-3 col-md-6">
                        <img src={product.attatchmentUrl} className="store-product" />
                        <h4>{product.productTitle}</h4>
                        <p>{product.price} 원</p>
                    </div>
                )}    
            </div>
        </>
    )
}

export default StoreItem;
