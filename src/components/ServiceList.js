import React from 'react';
import "../css/ServiceList.css";

const ServiceList = ({ list, editService, deleteService }) => {  // Accept deleteService as a prop
    return (
        <div className="bcontainer">
            <h3>HealthCare Services:</h3>
            <div className="lcontainer">
                {list.map((service, index) => (
                    <div className="card" key={index}>
                        <h5 className="card-title">Service: {service.name}</h5>
                        <p className="card-description">{service.description}</p>
                        <p className="card-price">Price: {service.price}</p>
                        <div className="button-container">  {/* Flex container for buttons */}
                            <button className="btn btn-primary" onClick={() => editService(service, index)}>
                                Edit
                            </button>
                            <button className="btn btn-danger" onClick={() => deleteService(index)}>  {/* Use deleteService here */}
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceList;
