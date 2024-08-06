import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactPersonPage = () => {
  const [contactPersons, setContactPersons] = useState([]);
  const [formData, setFormData] = useState({
    agreement_name: '',
    mobile_number: '',
    address: ''
  });

  useEffect(() => {
    fetchContactPersons();
  }, []);

  const fetchContactPersons = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/contact-persons');
      setContactPersons(response.data);
    } catch (error) {
      console.error('Error fetching contact persons:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/contact-persons', formData);
      fetchContactPersons();
      setFormData({
        agreement_name: '',
        mobile_number: '',
        address: ''
      });
    } catch (error) {
      console.error('Error creating contact person:', error);
    }
  };

  return (
    <div>
      <h1>Contact Person Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="agreement_name"
          placeholder="Agreement Name"
          value={formData.agreement_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="mobile_number"
          placeholder="Mobile Number"
          value={formData.mobile_number}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Contact Person</button>
      </form>
      <h2>Contact Person List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Agreement Name</th>
            <th>Mobile Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {contactPersons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.agreement_name}</td>
              <td>{person.mobile_number}</td>
              <td>{person.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactPersonPage;
