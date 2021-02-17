import React from 'react';

class LeftSide extends React.Component {
  constructor() {
    super();
    this.state = {
      validText: false,
    };
    this.validTextArea = this.validTextArea.bind(this);
  }

  validTextArea({ target }) {
    const text = target.value;
    if (text.length > 15) {
      this.setState({ validText: true });
    } else {
      this.setState({ validText: false });
    }
  }

  render() {
    const { validText } = this.state
    return (
      <section className="left-side">
        <h4>Commentário</h4>
        <div>
          <textarea
            maxlength="1000"
            onChange= { this.validTextArea }
          ></textarea>
          <button
            className="submit"
            disabled = { !validText }
          >Cadastrar</button>
        </div>
      </section>
    );
  }
}

export default LeftSide;
