import './App.css';
import { useState, useRef } from 'react';
import AddServiceForm from './components/AddServiceForm';
import ServiceList from './components/ServiceList';
import initialList from './components/list.json';

function App() {
  const [services, setServices] = useState(initialList);
  const [serviceToEdit, setServiceToEdit] = useState(null);
  const formRef = useRef(null);  // Create a reference to the form section

  // Function to add a new service to the list
  const addService = (newService) => {
    setServices([...services, newService]);
  };

  // Function to update an existing service
  const updateService = (updatedService, index) => {
    const updatedServices = [...services];
    updatedServices[index] = updatedService;
    setServices(updatedServices);
    setServiceToEdit(null);
  };

  // Function to initiate editing a service
  const editService = (service, index) => {
    setServiceToEdit({ ...service, index });
    formRef.current.scrollIntoView({ behavior: 'smooth' });  // Scroll to the form section
  };

  // Function to delete a service from the list
  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <>
      <ServiceList 
        list={services} 
        editService={editService} 
        deleteService={deleteService}  // Passing deleteService prop to ServiceList
      />
      <div ref={formRef}>  {/* Add a reference to the form section */}
        <AddServiceForm 
          addService={addService} 
          updateService={updateService} 
          serviceToEdit={serviceToEdit} 
        />
      </div>
    </>
  );
}

export default App;
