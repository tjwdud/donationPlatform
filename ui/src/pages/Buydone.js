//22
import React, { Component ,useState, useEffect} from 'react'
import {

  Header,

  Segment,

} from 'semantic-ui-react'
import SideContent from './SideContent';
import { gettotalpay, getnowpay} from './pageFunction'; 
import axios from 'axios';


const HomepageLayout = ({ match}) => {
  const [ paylist, getPay ] = useState("");
  const  proNum  = match.params.proNum;
  useEffect(() => {
    axios.get(`/api/pay/getpayinfo/${proNum}`).then(results => {
      getPay(results.data);
    })
  },[])
 
  return (

    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
    <SideContent part="groupmypage4" info={false}/>
    
   {paylist === "" ? "" : paylist.filter(pay=>pay.proNum==match.params.proNum).map(pay => { 
    return (
     <div style= {{marginTop : "50px"}}>
       <Header as='h2' style={{ fontSize: '3em',color:'#27AE60' }}>장바구니</Header>
       <div style={{margin:"50px 0px 2px 200px"}}>
      <p style={{fontSize:'2.3em',color:"27AE60",marginLeft:"150px"}}><strong>구매가 완료되었습니다!</strong></p>
      <table>
          <tr>
              


      <td><div class="ui medium image">
         <div style={{width:"168px",height:"168px",color: '#FFFFFF', background:'#219451'}} class="ui circular inverted segment">
          <div  sytle={{marginTop:'20px'}}>
           <h1 class="ui inverted header">
         {pay.totalpay}
          <div class="sub header">남은코인</div>
          </h1>
         </div>
         </div>
     </div></td>

     <td><p style={{fontSize:'1.3em'}}><strong>{pay.nowpay}코인 구매되었습니다.</strong></p></td>
</tr>
</table>



   </div>


</div>
  )
})}
    </Segment>

    )
}
export default HomepageLayout