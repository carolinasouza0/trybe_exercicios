import { Component } from "react";
import Places from "./Places";
import DreamTravel from "./DreamTravel";

class Form extends Component {
  state = {
    name: '',
    places: '',
    travelAlone: false,
    dreamTravel: '',
    formularioComErros: true,
  }

  handleErrors = () => {
    const { name, places, travelAlone, dreamTravel } = this.state;
    const condition = [
      !name.length,
      !places.length, 
      !travelAlone,
      (dreamTravel.length > 500)
    ]
    const errosNoFormulario = condition.some((error) => error === true);

    this.setState(() => ({
      formularioComErros: errosNoFormulario,
    }))
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(() => ({
        [name]: value,
    }), this.handleErrors)
  }

  render () {
    return (
      <div>
        <h1>Meu primeiro formulário React</h1>
        <form>
          <label>
            Nome: <input value={this.state.name} name="name" onChange={this.handleChange} />
          </label>
          <hr />
          <fieldset>
              <Places value={this.state.places} handleChange={this.handleChange} />
            <hr />
            <p>
              Você faria uma viagem à um desses países sozinha? 
              <label> 
                <input 
                  value={this.state.travelAlone}
                  type="checkbox" 
                  name="travelAlone" 
                  onChange={this.handleChange} 
                />
              </label>
            </p>
            <hr />
            <DreamTravel value={this.state.dreamTravel} handleChange={this.handleChange} />
          </fieldset>
        <label>
          <input type="file" />
        </label>
        </form>
      </div>
  );
  }
}

export default Form;