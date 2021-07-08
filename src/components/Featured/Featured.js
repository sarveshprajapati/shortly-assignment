import axios from 'axios';
import React, { useState } from 'react';
import IconBrandRecognition from '../../assets/svgs/icon-brand-recognition.svg';
import IconDetailedRecord from '../../assets/svgs/icon-detailed-records.svg';
import IconFullyCustomize from '../../assets/svgs/icon-fully-customizable.svg';
import {
    FeaturedSection,
    InputForm,
    ShortenedLinks,
    Statistics,
    StatHeading,
    StatDesc,
    CardContainer,
    Card
} from './Featured.style';
import LinkCard from './LinkCard';

function Featured() {
    const [links,setLinks] = useState([]);
    const [inputText,setInputText]=useState('');
    const [err,setErr] = useState('');
    const [fetching,setFetching]=useState(false);
   
    const formHandler = async (e)=>{
        
        e.preventDefault();
        if(!inputText){
            return setErr('Please enter a valid link');
        }
        else{
            setFetching(true);
            await axios.get(`https://api.shrtco.de/v2/shorten?url=${inputText}`)
            .then(res=>{
                console.log(res);
                setFetching(false);
                setInputText('');
                setLinks([
                    ...links,{
                        id:res.data.result.code,
                        originalLink:res.data.result.original_link,
                        shortedLink:res.data.result.full_short_link2    
                    }
                ])
                console.log(links);
            }).catch(err=>{
                setErr('Something error! Try other link');
                setFetching(false)
            })
        }

    };
    return (
        <FeaturedSection>
            <InputForm onSubmit={formHandler} err={err}>
                {
                    fetching ?<button>Shorting...</button>
                    : 
                    <>
                    <div>
                        <input 
                                type="text" 
                                placeholder="Shorten a link here..." 
                                value={inputText} 
                                onChange={(e)=>setInputText(e.target.value)}
                            />
                            {err && <p className="err_text">{err}</p> }
                        
                    </div>
                    <button type="submit">Shorten It!</button>
                    </>
                      
                }
                
            </InputForm>
            
            {
                links.length!==0 && 
                <ShortenedLinks>
                {
                    links.map((link)=>(
                        <LinkCard link={link} key={link.id}/>
                    ))
                }
            </ShortenedLinks>
            
            }
            <Statistics>
                <StatHeading>Advanced Statistics</StatHeading>
                <StatDesc>
                    Track how your links are performing across the web
                    with our advanced statistics dashboard
                </StatDesc>
            </Statistics>
            <CardContainer>
                <Card>
                    <img src={IconBrandRecognition} alt="recognition"/>
                    <h3>Brand Recognition</h3>
                    <p>
                        Boost your brand recognition with each click. 
                        Generic links don't mean a thing. Branded links help instil 
                        confidence in your content
                    </p>
                </Card>
                <Card>
                    <img src={IconDetailedRecord} alt="details"/>
                    <h3>Detailed Records</h3>
                    <p>
                        Gain insights into who is clicking your links. 
                        Knowing when and where people engage with your content 
                        help inform better decision
                    </p>
                </Card>
                <Card>
                    <img src={IconFullyCustomize} alt="customizable"/>
                    <h3>Fully Customizable</h3>
                    <p>
                        Improve brand awareness and content discoverability 
                        through customizable links supercharging audience engagement
                    </p>
                </Card>
            </CardContainer>

        </FeaturedSection>
    )
}

export default Featured
