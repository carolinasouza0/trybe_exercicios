import { Component } from "react";

class DreamTravel extends Component {
  render() {
    const { value, handleChange } = this.props;
    const error = "Texto com mais de 500 caracteres, por favor, resuma!";
    return (
      <div>
        <label>
          Nos conte, em poucas linhas, qual sua viagem dos sonhos?
          <textarea value={value} name="dreamTravel" onChange={handleChange} />
        </label>
        <span>{value.length > 500 ? error : ''}</span>
      </div>
    )
  }
}

export default DreamTravel;