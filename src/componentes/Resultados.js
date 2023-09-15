import React from 'react';

function Resultados({ ganadasCompu, ganadasUsuario, reiniciarJuego, nombreJugador }) {
  return (
    <div>
      <h2>Resultados:</h2>
      <p>Ganadas por el jugador: {ganadasUsuario}</p>
      <p>Ganadas por la computadora: {ganadasCompu}</p>
      {ganadasCompu === 3 || ganadasUsuario === 3 ? (
        <div>
          {/* Verificar si el juego ha terminado */}
          {ganadasCompu === 3 ? (
            // Mostrar mensaje de juego finalizado si la computadora ganó
            <p>Juego finalizado, ganó la computadora</p>
          ) : (
            // Mostrar mensaje de juego finalizado con el nombre del jugador si el jugador ganó
            <p>Juego finalizado, ganó {nombreJugador}</p>
          )}
          {/* Botón para reiniciar el juego */}
          <button onClick={reiniciarJuego}>Reiniciar Juego</button>
        </div>
      ) : null}
    </div>
  );
}

export default Resultados;
