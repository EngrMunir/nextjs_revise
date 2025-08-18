"use client"

import { usePathname } from "next/navigation";

const NotFound = () => {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return (
        <div>
            <h1>review {reviewId} not found for {productId}</h1>
        </div>
    );
};

export default NotFound;