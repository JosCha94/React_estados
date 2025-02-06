import React from "react";
const code = 'cosa';
function UseState({ name }) {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        if (value === code) {
          setLoading(false);
          // setError(false);
        } else {
          setLoading(false);
          setError(true);
        }

      }, 300)
    }
  }, [loading])
  return (
    <div>
      <h2>
        Eliminar {name}
      </h2>
      <p>
        Escribe el código de seguridad
      </p>
      {error && (
        <p>Error: Código incorrecto</p>
      )}
      {loading && (
        <p>Cargando ...</p>
      )}
      <input
        placeholder="Código de seguridad"
        value={value}
        onChange={(event) => {
          setError(false)
          setValue(event.target.value)
        }} />
      <button
        onClick={() => {
          // setError(false)
          setLoading(true)
        }}>
        Comprobar
      </button>
    </div>
  );
}

export { UseState };