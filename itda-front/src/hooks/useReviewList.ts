import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { isReviewOnlyPhoto, productInfo } from "stores/ProductDetailAtoms";
import productAPI from "util/API/productAPI";

export function useReviewList() {
  const [page, setPage] = useState(1);
  const isPhotoReview = useRecoilValue(isReviewOnlyPhoto);
  const reviewsPerPage = 5;
  const productData = useRecoilValue(productInfo);
  const { isLoading, error, isError, data } = useQuery(
    ["reviewList", productData.id],
    () =>
      productAPI.products.get.getProductReview(
        productData.id,
        page,
        isPhotoReview,
        reviewsPerPage
      ),
    {
      retry: 1,
    }
  );

  return {
    data,
    isLoading,
    error,
    isError,
    page,
    setPage,
    reviewsPerPage,
  };
}
