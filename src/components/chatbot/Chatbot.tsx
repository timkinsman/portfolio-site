import React, { Component, useState, useEffect } from 'react'
import { alternative } from './dictionary/alternative'
import { reply } from './dictionary/reply'
import { robot } from './dictionary/robot'
import { trigger } from './dictionary/trigger'
import $ from 'jquery'

const Chatbot = () => {
  const [term, setTerm] = useState<string>("Welcome")
  const [messages, setMessages] = useState<Array<string>>([])

  useEffect(() => {
    $('input').focus()
  }, [])

  const onFormSubmit = async (event: any) => {
    event.preventDefault()
    
    await setMessages([...messages, `You: ${term}`])

    let product: string
    let text: string = term.toLowerCase().replace(/[^\w\s\d]/gi, '')
    text = text
      .replace(/ a /g, ' ')
      .replace(/i feel /g, '')
      .replace(/whats/g, 'what is')
      .replace(/please /g, '')
      .replace(/ please/g, '')

    if (compare(trigger, reply, text)) {
      product = compare(trigger, reply, text)
    } else if (text.match(/robot/gi)) {
      product = robot[Math.floor(Math.random() * robot.length)]
    } else {
      product = alternative[Math.floor(Math.random() * alternative.length)]
    }

    await setMessages([...messages, `Ke: ${product}`])
    console.log(messages)
    setTerm("")
  }

  const compare = (triggerArray: Array<Array<string>>, replyArray: Array<Array<string>>, text: string) => {
    let item: string = ""
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] === text) {
          const items = replyArray[x]
          item = items[Math.floor(Math.random() * items.length)]
        }
      }
    }
    return item
  }


  return (
    <div>
      <div style={{ position: 'relative' }}>
        <div>
          <div style={{ position: 'absolute', bottom: '0', width: '30vw' }}>
            <h1 style={{fontSize: "xxx-large"}}>{messages.map(message => <div>&gt; {message}</div>)}</h1>
          </div>
        </div>
      </div>
      <form onSubmit={onFormSubmit}>
        <h1 style={{fontSize: "xxx-large"}}>&gt; <input
          type='text'
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        </h1>
      </form>
    </div>
  )
}

export default Chatbot
