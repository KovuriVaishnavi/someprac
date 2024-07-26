import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddressForm = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!source || !destination) {
      setError('Source and destination are required.');
      return;
    }

    try {
      const sourceResponse = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(source)}&format=json`);
      const destinationResponse = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(destination)}&format=json`);

      const sourceData = sourceResponse.data[0];
      const destinationData = destinationResponse.data[0];

      if (!sourceData || !destinationData) {
        setError('Unable to fetch coordinates. Please try again.');
        return;
      }

      navigate('/map', {
        state: {
          sourceLocation: {
            lat: parseFloat(sourceData.lat),
            long: parseFloat(sourceData.lon),
          },
          destinationLocation: {
            lat: parseFloat(destinationData.lat),
            long: parseFloat(destinationData.lon),
          },
        },
      });
    } catch (err) {
      setError('Error fetching coordinates. Please try again.');
    }
  };

  return (
    <div>
      <h1>Address Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Source Address:
            <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Destination Address:
            <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddressForm;
