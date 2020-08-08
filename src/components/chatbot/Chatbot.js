import React, { Component } from 'react';

import $ from 'jquery';

import { trigger } from './dictionary/trigger';
import { reply } from './dictionary/reply';
import { alternative } from './dictionary/alternative';
import { robot } from './dictionary/robot';

class Chatbot extends Component {
  state = { term: 'Timothy Kinsman', messages: [] };

  componentDidMount() {
    $('input').focus();
  }

  onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(`Me: ${this.state.term}`)

    await this.setState(state => {
      const messages = state.messages.push(`Guest: ${this.state.term}`)
      return messages
    })

    let product;
    let text = this.state.term.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "");

    if (this.compare(trigger, reply, text)) {
      product = this.compare(trigger, reply, text);
    } else if (text.match(/robot/gi)) {
      product = robot[Math.floor(Math.random() * robot.length)];
    } else {
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }

    console.log(`Bot: ${product}`)

    await this.setState(state => {
      const messages = state.messages.push(`Robin: ${product}`)
      return messages
    })

    console.log(this.state.messages)

    this.setState({term: ''})
  }

  compare = (triggerArray, replyArray, text) => {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] === text) {
          let items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }

  //<div>&gt; Robin: Chat with me</div>

  render() {
    return(
      <div>
        <div>
          {this.state.messages.map(message => <div>&gt; {message}</div>)}
        </div>
        <form onSubmit={this.onFormSubmit}>
          <div>&gt; <input 
              type="text" 
              value={this.state.term}
              onChange={e => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default Chatbot;
