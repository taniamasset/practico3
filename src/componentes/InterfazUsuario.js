import React, { useEffect, useState } from 'react';

function InterfazUsuario(props) {
  // Estado local para mostrar un mensaje de error si es necesario
  const [mensaje, setMensaje] = useState('');

  // useEffect para restablecer el mensaje cuando se cambia el nombre del jugador
  useEffect(() => {
    if (props.nombreJugador === '') {
      setMensaje('');
    }
  }, [props.nombreJugador]);

  // Manejar cambios en el campo de nombre del jugador
  const manejarCambioNombre = (event) => {
    props.manejarCambioNombre(event.target.value);
  };

  // Manejar clic en el botón "Comenzar"
  const manejarCambioClick = () => {
    if (props.nombreJugador.trim() === '') {
      setMensaje('Ingresa un nombre válido por favor');
    } else {
      props.comenzarJuego();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={props.nombreJugador}
        onChange={manejarCambioNombre}
      />
      <button onClick={manejarCambioClick}>Comenzar</button>
      <p>{mensaje}</p>
    </>
  );
}

export default InterfazUsuario;
