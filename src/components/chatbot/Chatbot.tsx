import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateColorscheme } from "../../actions";
import { alternative } from './dictionary/alternative'
import { reply } from './dictionary/reply'
import { robot } from './dictionary/robot'
import { trigger } from './dictionary/trigger'
import $ from 'jquery'

const Chatbot = (props: { updateColorscheme: Function, page: string }) => {
  const history: any = useHistory();

  const [mstrTerm, setTerm] = useState<string>("")
  const [marrstrMessages, setMessages] = useState<Array<string>>(props.page === "home" ? ["Welcome"] : [])

  useEffect(() => {
    $("input").focus()
  }, [])

  const onFormSubmit = async (event: any) => {
    event.preventDefault()
    
    //await setMessages([...marrstrMessages, `You: ${mstrTerm}`])

    if(mstrTerm.split(" ")[0] === "colorscheme"){
      const termSplit: Array<string> = mstrTerm.split(" ")
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
            await setMessages([...marrstrMessages, `That colorscheme does not exist :(`])
        }
      }else{
        await setMessages([...marrstrMessages, `colorscheme <dark|light|coffee>`])
      }
    }else if(mstrTerm === "exit"){
      window.close()
    }else if(mstrTerm.split(" ")[0] === "goto"){
      const termSplit: Array<string> = mstrTerm.split(" ")
      if(termSplit.length === 2 && /^[a-zA-Z]+$/.test(termSplit[1])){
        if(termSplit[1] === "home"){
          history.push('/');
        }else{
          history.push(`/${termSplit[1]}`);
        }
      }else{
        await setMessages([...marrstrMessages, `goto <home|about|work|contact>`])
      }
    }else{ //conversion
      let product: string
      let text: string = mstrTerm.toLowerCase().replace(/[^\w\s\d]/gi, '')
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

      await setMessages([...marrstrMessages, product])
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
    <div>
      <form onSubmit={onFormSubmit}>
        <h2>&gt; <input
          type="text"
          placeholder={marrstrMessages[marrstrMessages.length - 1]}
          value={mstrTerm}
          onChange={e => setTerm(e.target.value)}
        />
        </h2>
      </form>
    </div>
  )
}

export default connect(null, { 
  updateColorscheme
})(Chatbot);
