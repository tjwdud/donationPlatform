//14.개인 후원내역 자세히
import React, { Component,useState, useEffect } from 'react'
import cam from '../image/cam.PNG';
import History from '../components/History';
import SideContent from './SideContent';
import { getEmail } from '../pages/pageFunction';
import axios from 'axios';

import {
  Button,
  Header,
  Image,
   Segment,
} from 'semantic-ui-react'

const HomepageLayout = ({match}) => {
  const [ donalist, setDonalist ] = useState("");
  const email = getEmail();
  useEffect(() => {
    axios.get(`/api/user/mydonalist/${email}`).then(results => {
      setDonalist(results.data);
    })
  },[])
 
  return (
    
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
     <SideContent part ="mypage" info = {true}/>


   {donalist === "" ? "" : donalist.filter(dona=>dona.proNum==match.params.proNum).map(dona => { 
     return (
     <div> 

      <div style= {{marginTop : "25px", display: 'flex'}}>
      <Header as='h2' style={{ fontSize: '3em',color:'#27AE60' }}>{dona.proName}</Header>      </div>
      <div style= {{marginTop : "20px", display: 'flex'}}>
       <div style= {{margin : "40px"}}><Image size='massive' src={cam}/> </div> 
       
        <div style= {{marginLeft : "50px"}}>  
        <div style={{margin:"40px 0px 50px 0px"}}>
        <Button size='large' style={{color: '#FFFFFF', background:'#1E8157'}}>후원완료</Button></div>
         <label style={{ fontSize: '1.3em' }}>모인금액</label>
          <div style={{display:'flex', marginBottom:'-55px' }}>
           <p style={{ fontSize: '4em'}}>{dona.nowCoin*1000}</p>  
           <p style={{ fontSize: '1.3em',marginTop:'27px'}}>원</p>
          </div><br></br><br></br>
          <label style={{ fontSize: '1.3em' }}>목표금액</label>
          <div style={{display:'flex', marginBottom:'-55px' }}>
           <p style={{ fontSize: '4em'}}>{dona.targetCoin*1000}</p>  
           <p style={{ fontSize: '1.3em',marginTop:'27px'}}>원</p>
           
          </div>
          <br></br><br></br><br></br><br></br>
          <div style={{ marginTop:'20px' }}>
           <p style={{ fontSize: '1.5em'}}><span style={{ fontFamily:'1.0em'}}><strong>{dona.donacoin}</strong></span>코인을 후원하셨습니다</p>  
           <div style={{ fontSize: '1.5em'}}>({dona.donacoin*1000}원 후원하셨습니다.)</div>  
           
          </div>
          
        </div>
       </div>
     <History proNum={match.params.proNum}/>
     </div>
      )
    })}
    </Segment>
  )
}

export default HomepageLayout