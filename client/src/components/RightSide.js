import React from 'react';
import { getAll, listen, exclude } from '../services';


class RightSide extends React.Component {
  constructor() {
    super();
    this.state = {
      commentaries: '',
    };
  }

  async componentDidMount() {
    const commentaries = await getAll();
    this.setState({ commentaries });
  }

  contertToAudio({ target }) {
    const text = target.parentNode.parentNode.childNodes[0].innerText;
    listen(text);
  }

  excludeComment({ target }) {
    const text = target.parentNode.parentNode.childNodes[0].innerText;
    exclude(text);
    setTimeout(() => window.location.reload(), 300);
  }

  render() {
    const { commentaries } = this.state
    return (
      <section className="right-side">
        <h4>Comentários</h4>
        
        {commentaries ? commentaries
          .map(((comment, key) => (
            <div key={key}>
              <span>{comment.comment}</span>
              <div>
                <button
                  onClick={ (event)=> this.contertToAudio(event) }
                >Ouvir</button>
                <i className="fas fa-trash-alt" onClick={ (event)=> this.excludeComment(event) } />
              </div>
            </div>
          )))
          : null
        }
      </section>
    );
  }
}

export default RightSide;
