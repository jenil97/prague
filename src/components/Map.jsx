import React from "react";

const Map = () => {
  return (
    <div className="mb-20 mt-5">
      <iframe
        className="lg:w-[1350px] lg:h-[500px] md:w-[770px] md:h-[500px] w-[400px] h-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163930.50325593224!2d14.325538875369324!3d50.059805780676825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPrague%2C%20Czechia!5e0!3m2!1sen!2sin!4v1678694695696!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps of Prague, Czechia"
      ></iframe>
    </div>
  );
};

export default Map;
