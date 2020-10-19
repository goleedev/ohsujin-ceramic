import React from 'react';
import pot1 from '../images/product1.png';
import StoreItem from 'components/StoreItem';

const Store = () => {
    return (
        <>
            <div className="store-list container row">
                <h1 className="col-lg-12">스토어</h1>
                <nav className="store-nav col-lg-12">
                    <span>시그니처</span>
                    <span>식기</span>
                    <span>토분</span>
                    <span>세트</span>
                </nav>
                <StoreItem />
            </div>
        </>
    )
}

export default Store;
