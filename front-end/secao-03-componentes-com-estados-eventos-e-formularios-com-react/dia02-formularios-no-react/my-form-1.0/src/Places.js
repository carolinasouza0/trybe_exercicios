import { Component } from "react";

class Places extends Component {
  render() {
    const { value, handleChange } = this.props;
    const error = "Você precisa clicar em uma opção";
    return (
      <label> Dentre as opções, para qual lugar você gostaria de viajar?
        <select 
          value={value} 
          name="places" 
          onChange={handleChange}
        >
          <option value="frança">França</option>
          <option value="inglaterra">Inglaterra</option>
          <option selected value="africa">África</option>
          <option value="holanda">Holanda</option>
          <option value="vietna">Vietnã</option>
        </select>
        <span>{value.length === 0 ? error : ''}</span>
      </label>
    )
  }
} 

export default Places;