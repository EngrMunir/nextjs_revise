import { notFound } from "next/navigation";

function getRandomInt(count:number){
    return Math.floor(Math.random()*count);
}

const ProductDetails = async({params

}:{
    params: Promise<{ productId:string ,reviewId: string}>
}) => {
    const random = getRandomInt(2);
    if(random === 1){
        throw new Error("Error loading review");
    }
    const { productId, reviewId } = await params;

    if(parseInt(reviewId)> 1000){
        notFound();
    }
    return (
        <div>
            <h1>Review {reviewId} for product {productId}</h1>
        </div>
    );
};

export default ProductDetails;