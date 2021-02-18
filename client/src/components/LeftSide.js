import React from 'react';
import { create } from '../services';

class LeftSide extends React.Component {
  constructor() {
    super();
    this.state = {
      validText: false,
    };
    this.validTextArea = this.validTextArea.bind(this);
    this.createCommentary = this.createCommentary.bind(this);
  }

  validTextArea({ target }) {
    const text = target.value;
    if (text.length > 15) {
      this.setState({ validText: true, text });
    } else {
      this.setState({ validText: false, text });
    }
  }

  createCommentary(text) {
    create(text);
    setTimeout(() => window.location.reload(), 500);
  }

  render() {
    const { validText, text } = this.state
    return (
      <section className="left-side">
        <h4>Commentário</h4>
        <div>
          <textarea
            maxLength="200"
            onChange= { this.validTextArea }
          ></textarea>
          <button
            className="button"
            disabled = { !validText }
            onClick={ () => this.createCommentary(text) }
          >Cadastrar</button>
        </div>
      </section>
    );
  }
}

export default LeftSide;
