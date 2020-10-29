import React, { useState, useEffect } from 'react';
import { dbService } from 'fbase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons";

const Store = () => {
    const [products, setProducts] = useState([]);
    let items = dbService.collection('products');

    useEffect(() => {
        items
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
            let productArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
            setProducts(productArray);
        });
    }, []);
    const onClick = async(event) => {
        const {
            target: { id }
        } = event;
        if (id === "price") {
            await items
            .orderBy("price", "asc")
            .onSnapshot((snapshot) => {
                let productArray = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productArray);
            })
        } else {
            await items
            .where("group", "==", id)
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                let productArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
                }));
                setProducts(productArray);
            });
        }
    }
    const onReloadClick = async() => {
        await window.location.reload();
    }

    return (
        <>
            <div className="store-list container row">
                <h1 onClick={onReloadClick} className="col-lg-12">스토어</h1>
                <nav className="store-nav col-lg-12">
                    <span id="signature" onClick={onClick}>시그니처</span>
                    <span id="tableware" onClick={onClick}>식기</span>
                    <span id="flowerpot" onClick={onClick}>토분</span>
                    <span id="set" onClick={onClick}>세트</span>
                    <span id="price" onClick={onClick}>
                        <FontAwesomeIcon icon={faSortAmountDownAlt} color={"#555555"} size="1x" />가격 낮은 순
                    </span>
                </nav>
                <div className="container row product-item">
                    {products.map((product) => 
                        <div data-aos="fade-up" key={product.id} className="col-lg-3 col-md-6">
                            <img src={product.attachmentUrl} className="store-product" />
                            <h4>{product.productTitle}</h4>
                            <p>₩ {product.price / 1000},000</p>
                        </div>
                    )}    
                </div>
            </div>
        </>
    )
}

export default Store;
