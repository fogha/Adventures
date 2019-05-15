import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3959.247316636123!2d9.20068624618907!3d4.012483662970798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x10614aa379e25a79%3A0xb7284ecc7150b1aa!2sTotal+Petrol+Station+2%2C+Limbe!3m2!1d4.0094552!2d9.2072045!4m5!1s0x10614aa0901f8c6f%3A0x4bd0fe4492a2c388!2sCIM+d&#39;Equipement+Cameroun%2C+Buea!3m2!1d4.016563!2d9.2085911!5e0!3m2!1sen!2scm!4v1550119528158" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;