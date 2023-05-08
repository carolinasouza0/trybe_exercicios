import { Component } from "react";

class Form extends Component {
  state = {
    name: '',
    places: '',
    travelAlone: false,
    dreamTravel: '',
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(() => ({
        [name]: value,
    }))
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
          <label> Dentre as opções, para qual lugar você gostaria de viajar?
            <select 
              value={this.state.places} 
              name="places" 
              onChange={this.handleChange}
            >
              <option value="frança">França</option>
              <option value="inglaterra">Inglaterra</option>
              <option selected value="africa">África</option>
              <option value="holanda">Holanda</option>
              <option value="vietna">Vietnã</option>
            </select>
          </label>
          <hr />
          <p>
            Você faria uma viagem à um desses países sozinha? 
            <label>
              Checkbox: 
            <input 
              value={this.state.travelAlone}
              type="checkbox" 
              name="travelAlone" 
              onChange={this.handleChange} 
            />
            </label>
          </p>
          <hr />
          <label>
            Nos conte, em poucas linhas, qual sua viagem dos sonhos?
          <textarea value={this.state.dreamTravel} name="dreamTravel" onChange={this.handleChange} />
        </label>
        </form>
      </div>
  );
  }
}

export default Form;