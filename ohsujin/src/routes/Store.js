import React from 'react';
import pot1 from '../images/product1.png';

const Store = () => {
    return (
        <>
            <div className="store-list container row">
                <h1 className="col-lg-12">스토어</h1>
                <nav className="store-nav col-lg-12">
                    <a href="">시그니처</a>
                    <a href="">식기</a>
                    <a href="">세트</a>
                    <a href="">다기</a>
                </nav>
                <div className="col-lg-3 col-md-6">
                    <img src={pot1} className="store-product" />
                    <h4>시그니처 막걸리잔</h4>
                    <p>20,000원</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src={pot1} className="store-product" />
                    <h4>시그니처 막걸리잔</h4>
                    <p>20,000원</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src={pot1} className="store-product" />
                    <h4>시그니처 막걸리잔</h4>
                    <p>20,000원</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src={pot1} className="store-product" />
                    <h4>시그니처 막걸리잔</h4>
                    <p>20,000원</p>
                </div>
            </div>
        </>
    )
}

export default Store;
