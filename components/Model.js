import React from "react";

const Model = ({ showModal, closeModal, singleProduct }) => {
  return (
    <>
      {singleProduct && (
        <>
          <input
            type="checkbox"
            id="my-modal"
            className="modal-toggle"
            checked={showModal}
          />
          <div className="modal">
            <div className="modal-box flex">
              <div className="flex-1 m-auto mx-auto">
                <img src={singleProduct.image} alt="Product-Image" />
              </div>
              <div className="flex-1 m-auto mx-auto">
                <h3 className="font-bold text-lg">{singleProduct.title}</h3>
                <p className="py-4">{singleProduct.description}</p>
                <p className="text-base">Price : $ {singleProduct.price}</p>

                <div className="modal-action">
                  <button className="btn btn-primary">Buy Now</button>
                  <label
                    htmlFor="my-modal"
                    className="btn"
                    onClick={closeModal}
                  >
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Model;
