import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
           
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
           
A Hospital Management System (HMS) is a comprehensive, integrated information system designed to manage the administrative, financial, and clinical operations of a hospital. Its primary goal is to streamline hospital operations, enhance the quality of patient care, and improve the efficiency of healthcare providers. The evolution of HMS began in the 1960s and 1970s with basic computer systems handling administrative tasks like patient registration and billing. These early systems were often standalone applications with limited functionality. Advancements in the 1980s and 1990s, including the advent of more powerful computers and the development of database management systems, led to the implementation of more sophisticated HMS. These systems began integrating various hospital departments, allowing for comprehensive data management and better coordination of services. Today, modern HMS include features such as electronic health records (EHR), patient management, appointment scheduling, billing and accounting, inventory management, and more. They are essential for ensuring efficient hospital operations, maintaining accurate patient records, and providing high-quality healthcare services.
          </p>
          <p></p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
