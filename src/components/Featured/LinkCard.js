import React,{useRef,useState} from 'react';
import {ShortedCard} from './Featured.style'

function LinkCard({link}) {
    const copiedText = useRef(null);
    const [copied,setCopied]=useState(false)
    const copyTextHandler = ()=>{
        copiedText.current.select();
        document.execCommand('copy');
        setCopied(true);
    };
    return (
        <ShortedCard copied={copied}>
            <p >{link.originalLink}</p>
            <div></div>
            <input ref={copiedText} readOnly value={link.shortedLink}/>
            <button onClick={copyTextHandler}>{copied ? 'Copied' : 'Copy'}</button>

        </ShortedCard>
    )
}

export default LinkCard
