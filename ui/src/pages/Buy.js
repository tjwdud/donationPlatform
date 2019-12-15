//20.기부물품구매 22
import React, { Component } from "react";
import vacc2 from '../image/vacc2.png';
import water from '../image/water.png';
import led from '../image/led.png';


import { Link } from 'react-router-dom';
import {
  Header,
  Segment,
} from 'semantic-ui-react'
import SideContent from './SideContent';

import { BuyProduct, getPayment} from './pageFunction';
import { runInThisContext } from "vm";


class HomepageLayout extends Component{
  
  state = {
 program : {},

    options : [
      { key: 0, text: '0개', value: 0 },
      { key: 1, text: '1개', value: 1 },
      { key: 2, text: '2개', value: 2 },
      { key: 3, text: '3개', value: 3 },
      { key: 3, text: '4개', value: 4 },
      { key: 3, text: '5개', value: 5 },
      ]
    ,
    price1: 0,
    price2: 0,
    price3: 0,
    nowpay: 0,
    proNum: '',
    total: 0
  }
 
  componentDidMount() {
    const { proNum } = this.props.match.params;
    getPayment(proNum).then(res => {
      this.setState({
        program : res
      })
    })
  }
  

  onSubmit = (e) => {
    const { proNum } = this.props.match.params;
    const { price1, price2,price3 } = this.state;
    let nowpay=eval( price1*20+price2*30+price3*10);
    BuyProduct(proNum, price1,price2, price3,nowpay)
   }


  render(){
    const { program} = this.state;
   return (
 
  <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
  <SideContent part ="groupmypage3"/>
  

  <div style={{margin:"25px 0px 2px 0px"}}> 
   <Header as='h2' style={{fontSize: '3em' }}>기부물품 구매</Header>
  

  <div style={{fontSize: '25px',margin:'35px' }}>총 코인 :{program.totalpay} 코인</div>
  <tr>
      <td>


    <div>
      <div class="ui card">
       <div class="image"><img src={water}/></div>
       <div class="content">
      <div class="header">제주 삼다수 2Lx6입/1BOX</div>
       <div class="meta"> </div>
       <div class="description">
      가격: 20코인
     </div>
      </div>
       <div class="extra content">
           <a>

           <select
            placeholder={'주문개수'}
            value={this.state.price1}
            onChange={e => this.setState({ price1: e.target.value})}
            
            style={{width:"100%",height:"40px"}}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

        <div style={{marginTop:'5px'}}>
      </div>
        </a>
       </div>
        </div>
  </div>   </td>
    <td>
   <div style={{marginLeft:"40px"}}>
      <div class="ui card">
      
       <div class="image"><img src={vacc2}/></div>
       <div class="content">
      <div class="header">독감백신</div>
       <div class="meta"> </div>
       <div class="description">
      가격: 30코인
     </div>
      </div>
       <div class="extra content">
           <a>  
           <select
            placeholder={'주문개수'}
            value={this.state.price2}
            onChange={e => this.setState({ price2: e.target.value })}
            style={{width:"100%",height:"40px"}}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

        <div style={{marginTop:'5px'}}>
      </div>
        </a>
      

       </div>
        </div>
   </div>
   </td>
   <td>
   <div style={{marginLeft:"40px"}}>
      <div class="ui card">
      
       <div class="image"><img src={led}/></div>
       <div class="content">
      <div class="header">태양열 랜턴</div>
       <div class="meta"> </div>
       <div class="description">
      가격: 10코인
     </div>
      </div>
       <div class="extra content">
           <a>
           <select
            placeholder={'주문개수'}
            value={this.state.price3}
            onChange={e => this.setState({ price3: e.target.value })}
            style={{width:"100%",height:"40px"}}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>        <div style={{marginTop:'5px'}}>
      </div>
        </a>
       </div>
        </div>
   </div>
   </td>
   </tr>
  
   <Link to={`/buydone/${program.proNum}`}><button class="ui fluid button" style={{color: '#FFFFFF', background:'#27AE60',width:'200px',marginLeft:'750px',marginTop:'50px'}} type= "submit" onClick = {this.onSubmit}>구매</button></Link>
   <div style={{marginTop:'-50px'}}>
   <p style={{fontWeight:'blod',fontSize: 20}}>제주 삼다수 <span style={{color:'#27AE60'}}>{eval(this.state.price1*20)}</span>코인</p> 
   <p style={{fontWeight:'blod',fontSize: 20}}>독감백신<span style={{color:'#27AE60'}}>{eval(this.state.price2*30)}</span>코인</p>
   <p style={{fontWeight:'blod',fontSize: 20}}>태양열 랜턴 <span style={{color:'#27AE60'}}>{eval(this.state.price3*10)}</span>코인</p>
   <p>총 상품코인:<span>{eval(this.state.price1*20+this.state.price2*30+this.state.price3*10)}</span></p>
   
</div>
</div>
</Segment> 
    )
  }
}
export default HomepageLayout