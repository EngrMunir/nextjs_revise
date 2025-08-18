import React from 'react';

const ProductDetails = async({params}:{params:Promise<{productId:string}>}) => {
    const {productId } = await params;
    return (
        <div>
            <h1>product details: {productId}</h1>
        </div>
    );
};

export default ProductDetails;