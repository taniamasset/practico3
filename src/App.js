import React, { useState } from 'react';
import InterfazUsuario from './componentes/InterfazUsuario';
import Opciones from './componentes/Opciones';
import Resultados from './componentes/Resultados';
import SeleccionJugada from './componentes/SeleccionJugada';
import './App.css';

function App() {
  // Estado para el marcador y otros datos del juego
  const [ganadasCompu, setGanadasCompu] = useState(0);
  const [ganadasUsuario, setGanadasUsuario] = useState(0);
  const [nombreJugador, setNombreJugador] = useState('');
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [opcionJugador, setOpcionJugador] = useState('');
  const [opcionComputadora, setOpcionComputadora] = useState('');

  // Función para comenzar el juego
  const comenzarJuego = () => {
    setMostrarResultado(true);
  };

  // Función para calcular el resultado de una jugada
  const calcularResultado = (opcionJugador, opcionComputadora) => {
    setOpcionJugador(opcionJugador);
    setOpcionComputadora(opcionComputadora);
    if (
      (opcionJugador === "piedra" && opcionComputadora === "tijera") ||
      (opcionJugador === "papel" && opcionComputadora === "piedra") ||
      (opcionJugador === "tijera" && opcionComputadora === "papel")
    ) {
      setGanadasUsuario((prev) => prev + 1);
    } else if (opcionJugador !== opcionComputadora) {
      setGanadasCompu((prev) => prev + 1);
    }
  };

  // Función para reiniciar el juego
  const reiniciarJuego = () => {
    // Lógica para reiniciar el juego, restablecer marcadores y estado
    setGanadasCompu(0);
    setGanadasUsuario(0);
    setNombreJugador('');
    setMostrarResultado(false);
    setOpcionJugador('');
    setOpcionComputadora('');
  };

  return (
    <div className="App">
      <h1>Juego de Piedra, Papel o Tijera</h1>
      {!mostrarResultado && (
        <InterfazUsuario
          nombreJugador={nombreJugador}
          manejarCambioNombre={setNombreJugador}
          comenzarJuego={comenzarJuego}
        />
      )}
      {mostrarResultado && (
        <>
          <h2>Hola {nombreJugador}, ya puedes elegir tu opción</h2>
          {ganadasCompu !== 3 && ganadasUsuario !== 3 && (
            <Opciones calcularResultado={calcularResultado} />
          )}
          {opcionJugador && (
            <SeleccionJugada
              opcionJugador={opcionJugador}
              opcionComputadora={opcionComputadora}
            />
          )}
          <Resultados
            ganadasCompu={ganadasCompu}
            ganadasUsuario={ganadasUsuario}
            reiniciarJuego={reiniciarJuego}
            nombreJugador={nombreJugador}
          />
        </>
      )}
    </div>
  );
}

export default App;
