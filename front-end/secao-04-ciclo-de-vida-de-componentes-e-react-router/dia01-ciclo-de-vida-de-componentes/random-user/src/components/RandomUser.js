import { Component } from "react";
import User from "./User";

class RandomUser extends Component {
  state = {
    user: [],
    loading: true,
  }

  fetchRandomUser = async () => {
    this.setState(
      { loading: true },
      async () => {
        const response = await fetch('https://api.randomuser.me/');
        const data = await response.json();
        console.log (data.results[0].dob.age);
        this.setState({
          loading: false,
          user: data.results,
        })
    })
  }

  componentDidMount = () => {
    this.fetchRandomUser();
  }

  getUserElements = (user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  // ISSO AQUI NÃO FUNCIONA. DEPOIS RESOLVER!!
  // shouldComponentUpdate(_nextProps, nextState) {
  //   // console.log(nextState.user[0].dob.age);
  //   const AGE = 50;
  //   if (nextState.user[0].dob.age < AGE) return true;
  // }


  render() {
    const { loading, user } = this.state;
    const loadingElement = <span>Carregando...</span>;

    return (
      <div>
       <span>{loading ? loadingElement : <User user={ this.getUserElements(user[0])} />}</span>
      </div>
    )
  }
}

export default RandomUser;