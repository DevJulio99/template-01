import React from 'react';
import Image from 'next/image';

const ConsultaButton = () => {

  return (
    <a href="https://wa.me/+51987205587" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
      <Image
        src="/whatsapp.png"
        alt="Consulta WhatsApp"
        width={200}
        height={200}
        layout="fixed"
        className="cursor-pointer rounded-[35px] transition-all duration-[.25s] ease-linear hover:opacity-80 pt-3"
        style={{ maxWidth: '50px', height: 'auto' }}
      />
    </a>
  );
};

export default ConsultaButton;
