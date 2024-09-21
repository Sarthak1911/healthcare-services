import React, { useState, useEffect } from 'react';
import "../css/AddServiceForm.css"

const AddServiceForm = ({ addService, updateService, serviceToEdit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Populate the form when editing a service
  useEffect(() => {
    if (serviceToEdit) {
      setName(serviceToEdit.name);
      setDescription(serviceToEdit.description);
      setPrice(serviceToEdit.price);
      setIsEditing(true);
    }
  }, [serviceToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields (optional)
    if (!name || !description || !price) {
      alert('Please fill in all fields.');
      return;
    }

    const serviceData = { name, description, price };

    if (isEditing) {
      // Update the existing service
      updateService(serviceData, serviceToEdit.index);
    } else {
      // Add a new service
      addService(serviceData);
    }

    // Clear form fields
    setName('');
    setDescription('');
    setPrice('');
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Edit Service' : 'Add New Service'}</h2>
      <div className="form-group my-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter service name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group my-2">
        <label htmlFor="description">Description:</label>
        <textarea
          className="form-control"
          id="description"
          placeholder="Enter service description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group my-2">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          className="form-control"
          id="price"
          placeholder="Enter service price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary my-2">
        {isEditing ? 'Update Service' : 'Add Service'}
      </button>
    </form>
  );
};

export default AddServiceForm;
