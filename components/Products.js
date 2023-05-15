import React, { useEffect, useState } from "react";
import { UseFetch } from "./UseFetch";
import Model from "./Model";
import axios from "axios";
import Loading from "./Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getProducts();
    getSingleProduct();
  }, []);

  const getProducts = () => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json);
    //     setProducts(json);
    //   });

    const { data, error, loading } = UseFetch(
      "https://fakestoreapi.com/products"
    );
    console.log(data);
    setProducts(data);
    if (loading) {
      return <Loading />;
    }
  };

  const getSingleProduct = async (id) => {
    const { data, loading, error } = UseFetch(
      `https://fakestoreapi.com/products/${id + 1}`
    );
    setProductData(data);
    if (Object.keys(json).length === 0) {
      console.log("Product data is empty");

      setShowModal(true);
    }

    // try {
    //   await fetch(`https://fakestoreapi.com/products/${id + 1}`).then((res) =>
    //     res.json().then((json) => {
    //       console.log(json);
    //       setProductData(json);
    //     })
    //   );

    //   if (Object.keys(json).length === 0) {
    //     console.log("Product data is empty");

    //     setShowModal(true);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <div className="artboard artboard-horizontal phone-6 content-around mx-auto w-fit">
        <p className="text-center text-3xl my-2 font-bold font-sans">
          Why should you choose us?
        </p>
        <div className="grid grid-cols-4 gap-4">
          <div className="mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              className="w-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
            <p className="text-xl">Free Shipping</p>
            <p className="">
              All purchases over $199 are eligible for free shipping via USPS
              First Class Mail.
            </p>
          </div>
          <div className="mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              className="w-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
            <p className="text-xl">Easy Payments</p>
            <p className="">
              All payments are processed instantly over a secure payment
              protocol.
            </p>
          </div>
          <div className="mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              className="w-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className="text-xl">Money-Back Guarantee</p>
            <p className="">
              If an item arrived damaged or you ve changed your mind, you can
              send it back for a full refund.
            </p>
          </div>
          <div className="mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              className="w-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>

            <p className="text-xl">Finest Quality</p>
            <p className="">
              Designed to last, each of our products has been crafted with the
              finest materials.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-around">
        {products.map((e, id) => {
          return (
            <div className="card w-80 bg-base-100 shadow-xl my-1" key={id}>
              <figure>
                <img src={e.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{e.title}</h2>

                <div className="card-actions justify-end">
                  <p className="font-sans text-xl font-medium">$ {e.price}</p>
                  <button
                    htmlFor="my-modal-4"
                    className="btn btn-primary"
                    onClick={() => {
                      console.log(id);
                      getSingleProduct(id);
                      // setProductId(id);
                      // useGetSinProduct(id);
                      openModal();
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Model
        showModal={showModal}
        closeModal={closeModal}
        singleProduct={productData}
      />
    </>
  );
};

export default Products;
