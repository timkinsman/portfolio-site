import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateColorscheme } from "../../actions";
import { alternative } from './dictionary/alternative'
import { reply } from './dictionary/reply'
import { robot } from './dictionary/robot'
import { trigger } from './dictionary/trigger'
import { colors } from "../../colors"
import $ from 'jquery'

const Chatbot = (props: { updateColorscheme: Function, page: string }) => {
  const history: any = useHistory();
  const [mstrTerm, setTerm] = useState<string>("")

  useEffect(() => {
    $("input").focus()

    setTimeout(() => {
      placeholder(props.page === "home" ? "Welcome" : "Enter a command")
    }, 500);
  }, [])

  const onFormSubmit = async (event: any) => {
    event.preventDefault()

    if(mstrTerm === ""){
      return null
    }

    let product: string = ""
    if(mstrTerm.split(" ")[0] === "colorscheme"){
      const termSplit: Array<string> = mstrTerm.split(" ")
      if(termSplit.length === 2){
        if(Object.keys(colors).includes(termSplit[1])){
          props.updateColorscheme(termSplit[1])
          product = "( ♥ ͜ʖ ♥)"
        }else{
          product = "That colorscheme does not exist!"
        }
      }else{
        product = "colorscheme <celadon|coffee|light|mauve|msu|rifle>"
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
        product = `goto <home|about|work|contact>`
      }
    }else{ //conversion
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
    }

    await setTerm("")
    placeholder(product);
  }

  const compare: Function = (triggerArray: Array<Array<string>>, replyArray: Array<Array<string>>, text: string): string => {
    let item: string = ""
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] === text) {
          const items: Array<string> = replyArray[x]
          item = items[Math.floor(Math.random() * items.length)]
        }
      }
    }
    return item
  }

  const printLetter: Function = (pstrProduct: any, pintIndex: number = 0): void => {
    const arr: Array<string> = pstrProduct.split('')
    const placeholder: string = $('#' + props.page + 'chatbot').attr("placeholder") + arr[pintIndex];

    if($('#' + props.page + 'chatbot').attr("value") === ""){
      setTimeout(() => {
        $('#' + props.page + 'chatbot').attr("placeholder", placeholder);

        if (pintIndex + 1 < arr.length) {
          printLetter(pstrProduct, pintIndex + 1);
        }
      }, Math.floor(Math.random() * (90 - 50 + 1) + 50));
    }
  }  

  const placeholder: Function = (pstrProduct: string): void => {
    $('#' + props.page + 'chatbot').attr("placeholder", "");
    printLetter(pstrProduct);
  }

  return (
    <div style={{width: "-webkit-fill-available"}}>
      <form onSubmit={onFormSubmit}>
        <h4 style={{display: "flex", columnGap: "10px"}}>&gt; <input
          id={props.page + "chatbot"}
          type="text"
          style={{width: props.page === "home" ? "-webkit-fill-available" : ""}}
          value={mstrTerm}
          onChange={e => setTerm(e.target.value)}
          placeholder=""
        />
        </h4>
      </form>
    </div>
  )
}

export default connect(null, { 
  updateColorscheme
})(Chatbot);
