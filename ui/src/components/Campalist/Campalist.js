import React, { Component } from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";
import { getEmail, getAllProgramsID } from "../../pages/pageFunction";
import { Link } from 'react-router-dom';


class ItemExampleDivided extends Component {
  state = {
    program : []
  }
  componentDidMount() {
    this.setState({
      program : this.props.program
    })
  }
  render() {
    const { program } = this.state;
    return (
      <>
      <Item.Group divided>
         <Item>
            {program.proImg ? <Item.Image src={require(`./../../../public/uploads/${program.proImg}`)} /> : null}
            <Item.Content>
              <Item.Header as="a">{program.proName}</Item.Header>
              <Item.Meta>
                <span className="cinema">마감기한 : {program.targetDate}</span>
              </Item.Meta>
              <Item.Description>
                <p>단체명</p>
  
                <p>
                  <br />
                  {program.proDesc}
                </p>
                <p>목표금액 : {program.targetCoin}코인</p>
                <p>모인금액 : {program.nowCoin}코인</p>
              </Item.Description>
              <Item.Extra>

              <Link to={`/Buy/${program.proNum}`}>

                  <Button
                  style={{ color: "#FFFFFF", background: "#27AE60" }}
                  primary
                  floated="right" 
                >    
                  구매하기
                  <Icon name="right chevron" />
                </Button >
                
                </Link>
                <Label>진행중</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        
      </Item.Group>
      </>
    );
  }
}

export default ItemExampleDivided;
