import { Component } from "react";
import { connect } from "react-redux";

class ShowCharacter extends Component {
    render() {
        const { data, isFetching } = this.props;

        if(!isFetching && data) {
        return (
            <div>
                <h2>Mostrar personagem</h2>
                <p>Nome: {data.name}</p>
                <p>Gênero: {data.gender}</p>
                <p>Cultura: {data.culture}</p>
                <p>Data de nascimento: {data.born}</p>
                <ul>
                    <p>Títulos:</p>
                    {data.titles.map((title, index) => <li key={index}>{title}</li>)}

                </ul>
                <ul>
                    <p>Conhecido como:</p>
                   {data.aliases.map((alias, index) => <li key={index}>{alias}</li>)}
                </ul>
                <p>Interpretado por: {data.playedBy}</p>
            </div>
        );
    }
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.isFetching,
    data: state.data,
});
export default connect(mapStateToProps)(ShowCharacter);