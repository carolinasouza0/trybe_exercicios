import { Component } from "react";

class Form extends Component {
  state = {
    name: '',
  }

  handleName = (event) => {
    this.setState(() => ({
        name: event.target.value,
    }))
  }
  
  render () {
    return (
      <div>
        <h1>Meu primeiro formulário React</h1>
        <form>
          <label>
            Nome: <input value={this.state.name} name="nome" onChange={ this.handleName } />
          </label>
          <hr />
          <label> Dentre as opções, para qual lugar você gostaria de viajar?
            <select>
              <option value="frança">França</option>
              <option value="inglaterra">Inglaterra</option>
              <option selected value="africa">África</option>
              <option value="holanda">Holanda</option>
              <option value="vietna">Vietnã</option>
            </select>
          </label>
          <hr />
          <p>
            Das opções abaixo, qual o meio de transporte que você optaria para viajar dentro do país?
            <label> 
            <input type="radio" name="myRadio" value="carro" />
              Carro
            </label>
            <label>
              <input type="radio" name="myRadio" value="metro" />
              Metrô
            </label>
            <label>
              <input type="radio" name="myRadio" value="onibus" />
              Ônibus
            </label>
          </p>
          <hr />
          <label>
            Nos conte, em poucas linhas, qual sua viagem dos sonhos?
          <textarea value='' />
        </label>
        </form>
      </div>
  );
  }
}

export default Form;