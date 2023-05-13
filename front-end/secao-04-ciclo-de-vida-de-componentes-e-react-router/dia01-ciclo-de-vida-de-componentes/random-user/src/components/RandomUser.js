import { Component } from "react";
import User from "./User";

class RandomUser extends Component {
  state = {
    results: [],
    loading: true
  }

  fetchRandomUser = async () => {
    this.setState(
      { loading: true },
      async () => {
        const response = await fetch('https://api.randomuser.me/');
        const data = await response.json();
        const results = data.results;
        this.setState({
          loading: false,
          results
        });
    });
  }

  componentDidMount() {
    this.fetchRandomUser();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextState.results.length) {
      return false;
    }

    const age = nextState.results[0].dob.age;
    return age <= 50;
  }

  render() {
    const { results, loading } = this.state;

    if (loading) {
      return <div>Carregando...</div>;
    }

    if (!this.shouldComponentUpdate()) {
      return <div>A idade do usuário é maior que 50.</div>;
    }

    const { name, email, dob, picture } = results[0];
    const age = dob.age;

    return <User name={name} email={email} age={age} picture={picture} />;
  }
}

export default RandomUser;