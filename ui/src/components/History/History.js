//14. 밑에 컴포넌트 
import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import ssstory from "../../image/ssstory.PNG";
import { getCategory } from '../../pages/pageFunction';

export default class MenuExampleSecondaryPointing extends Component {
  state = { 
    activeItem: 'home' 
   ,
    program : {}
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  componentDidMount() {
 const { proNum } = this.props;
    getCategory(proNum).then(res => {
      this.setState({
        program : res
      })
    })
  }
  render() { 
   
    const { activeItem } = this.state
    const { program } = this.state;


    return (
      <>
      {program ? 
      <div>
        <Menu pointing secondary>
          <Menu.Item name='스토리' active={activeItem === '스토리'} onClick={this.handleItemClick} />
          <Menu.Item
            name='후원금 사용내역'
            active={activeItem === '후원금 사용내역'}
            onClick={this.handleItemClick}
          />
         
      
        </Menu>
        {activeItem === '스토리' ?  <div>
        <img src={ssstory} />

          </div>: ""}

          {activeItem === '후원금 사용내역' ?  <div>
          <table class="ui celled table"style={{width:'800px',marginLeft:"100px",marginTop:'40px'}}>
  <thead>
    <tr><th>상품명</th>
    <th>판매가</th>
    <th>수량</th>
    <th>합계</th>

  </tr></thead>
  <tbody>
    <tr>
      <td data-label="Name">제주 삼다수</td>
      <td data-label="Age">20코인</td>
      <td data-label="Job">{program.product1}</td>
      <td data-label="Job">{eval(program.product1*20)}코인</td>

    </tr>
    <tr>
    <td data-label="Name">독감백신</td>
      <td data-label="Age">30코인</td>
      <td data-label="Job">{program.product2}</td>
      <td data-label="Job">{eval(program.product2*30)}코인</td>
    </tr>
    <tr>
    <td data-label="Name">태양열 랜턴</td>
      <td data-label="Age">8코인</td>
      <td data-label="Job">{program.product3}</td>
      <td data-label="Job">{eval(program.product3*10)}코인</td>
    </tr>
  
  </tbody>
</table>

          </div>: ""}
        
      </div>: null}
      </>
    );
  }
}