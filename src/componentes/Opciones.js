import React from 'react';
import piedra from './images/piedra.png';
import papel from './images/papel.png';
import tijera from './images/tijera.png';

// Diccionario de imágenes correspondientes a cada opción
const images = {
  'piedra': piedra,
  'papel': papel,
  'tijera': tijera
};

function Opciones(props) {
  // Lista de opciones disponibles
  const opciones = ['piedra', 'papel', 'tijera'];

  // Manejar el clic en una opción
  const manejarOpcionClick = (opcion) => {
    // Generar una opción aleatoria para la computadora
    const opcionComputadora = opciones[Math.floor(Math.random() * 3)];
    // Llamar a la función calcularResultado pasando la opción del jugador y de la computadora
    props.calcularResultado(opcion, opcionComputadora);
  };

  return (
    <div className="opciones-container">
      {opciones.map((opcion) => (
        <div key={opcion} onClick={() => manejarOpcionClick(opcion)}>
          <img src={images[opcion]} alt={opcion} />
        </div>
      ))}
    </div>
  );
}

export default Opciones;
