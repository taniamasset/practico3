import React from 'react';

function SeleccionJugada({ opcionJugador, opcionComputadora }) {
  return (
    <>
      {/* Título de la sección */}
      <p>Opciones de la partida</p>
      {/* Mostrar la opción seleccionada por el jugador */}
      <p>Opcion Jugador: {opcionJugador}</p>
      {/* Mostrar la opción seleccionada por la computadora */}
      <p>Opcion computadora: {opcionComputadora}</p>
    </>
  );
}

export default SeleccionJugada;
