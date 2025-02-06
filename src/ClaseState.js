import React from "react";
import { Loading } from "./loading";
const code = 'cosa';
class ClaseState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      error: false,
      loading: false,
    };
  }
  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount()');
  // }
  // componentDidMount() {
  //   console.log('componentDidMount()');
  // }
  componentDidUpdate() {
    if (this.state.loading) {
      setTimeout(() => {
        if (this.state.value === code) {
          this.setState({ loading: false });
          // setError(false);
        } else {
          this.setState({ loading: false, error: true });
        }

      }, 300)
    }

  }



  render() {
    return (
      <div>
        <h2>
          Eliminar {this.props.name}
        </h2>
        <p>
          Escribe el código de seguridad
        </p>
        {this.state.error && (
          <p>Error: Código incorrecto</p>
        )}
        {this.state.loading &&
          <Loading />
        }

        <input
          placeholder="Código de seguridad"
          value={this.state.value}
          onChange={(event) => {
            this.setState({ error: false, value: event.target.value })
          }} />
        <button onClick={() =>
          this.setState({ loading: true })}>
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClaseState };