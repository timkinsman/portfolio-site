import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateColorscheme } from "../../actions";
import { alternative } from './dictionary/alternative'
import { reply } from './dictionary/reply'
import { robot } from './dictionary/robot'
import { trigger } from './dictionary/trigger'
import $ from 'jquery'

const Chatbot = (props: { updateColorscheme: Function }) => {
  const history: any = useHistory();

  const [term, setTerm] = useState<string>("Welcome")
  const [messages, setMessages] = useState<Array<string>>([])

  useEffect(() => {
    $("input").focus()
  }, [])

  const onFormSubmit = async (event: any) => {
    event.preventDefault()
    
    await setMessages([...messages, `You: ${term}`])

    if(term.split(" ")[0] === "colorscheme"){
      const termSplit: Array<string> = term.split(" ")
      if(termSplit.length === 2){
        switch(termSplit[1]){
          case "dark":
            props.updateColorscheme("dark")
            break;
          case "light":
            props.updateColorscheme("light")
            break;
          case "coffee":
            props.updateColorscheme("coffee")
            break;
          default:
            await setMessages([...messages, `Wes: That colorscheme does not exist :(`])
        }
      }else{
        await setMessages([...messages, `Wes: colorscheme <dark|light|coffee>`])
      }
    }else if(term === "exit"){
      window.close()
    }else if(term.split(" ")[0] === "goto"){
      const termSplit: Array<string> = term.split(" ")
      if(termSplit.length === 2 && /^[a-zA-Z]+$/.test(termSplit[1])){
        history.push(`/${termSplit[1]}`);
      }else{
        await setMessages([...messages, `Wes: goto <about|work|contact>`])
      }
    }else{ //conversion
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

      await setMessages([...messages, `Wes: ${product}`])
    }

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
    <div style={{ width: "100%" }}>
      <div style={{ position: "relative" }}>
        <div>
          <div style={{ position: "absolute", bottom: 0 }}>
            <h1 style={{fontSize: "xxx-large"}}>{messages.map(message => <div>&gt; {message}</div>)}</h1>
          </div>
        </div>
      </div>
      <form onSubmit={onFormSubmit}>
        <h1 style={{fontSize: "xxx-large"}}>&gt; <input
          type="text"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        </h1>
      </form>
    </div>
  )
}

export default connect(null, { 
  updateColorscheme
})(Chatbot);
