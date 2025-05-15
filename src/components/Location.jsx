import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Location = () => {
  return (
    <footer style={styles.footer}>
      <h3 className='text-dark'>Our Location</h3>
      <iframe
        title="Google Map"
        src="https://maps.google.com/maps?q=105%20Allen%20Ave&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width={600}
        height={500}
        style={styles.map}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f1f1f1', // fixed missing #
    padding: '20px',
    textAlign: 'center',
  },
  map: {
    border: 0,
    borderRadius: '8px',
    maxWidth: '100%', // fixed typo
  },
};

export default Location;