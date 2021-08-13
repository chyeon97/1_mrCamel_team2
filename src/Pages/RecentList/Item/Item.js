import React, { Component } from 'react';
import nike from 'assets/dummyImage.jpeg';
import {style} from './ItemStyle';
import {LOCAL_STORAGE} from 'Utils/constants';
class Item extends Component {
  constructor(props){
    super(props);
    this.state=({
      dislikeData:LOCAL_STORAGE.get("dislikeItems"),
      ContentList:[]
    })
  }
  
  // componentDidMount() {
  //   fetch('http://localhost:3000/data/mock.json')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({
  //         ContentList: data,
  //       });
  //     });
     
  // }

  makeDislikeList=(item, idx)=>{
    for(let itemData of this.state.dislikeData){
      if(item.title === itemData.title){
        alert('24시간 후 조회 가능')
      }
      else{
        this.props.history.push(`/product/${idx}`)
      }
    }
  }

  render() {
    
    return (
      <>
        {this.props.productData?.map((item, idx) => (
          <ItemBoxLayout key={idx} onClick={()=>{this.makeDislikeList(item,idx)}}>
            <InnerLayout>
              
              <ItemLayout wd={45} style={{ flex: 'none' }}>
                <img
                  src={nike}
                  alt="nike_product"
                  style={{ width: '250px', height: '150px' }}
                />
              </ItemLayout>

              <ItemLayout
                wd={50}
                style={{
                  marginLeft: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <TextLayout fnt={20} col={'black'}>
                  {' '}
                  {item.title}
                </TextLayout>
                <TextLayout fnt={15} col={'gray'} style={{ margin: 'auto 0' }}>
                  {item.brand}
                </TextLayout>
                <TextLayout
                  fnt={20}
                  col={'black'}
                  style={{ marginTop: 'auto' }}
                >
                  {`${item.price.toLocaleString()} 원`}
                </TextLayout>
              </ItemLayout>
            </InnerLayout>
          </ItemBoxLayout>
        ))}
      </>
    );
  }
}

export default Item;

const {
  ItemBoxLayout,
  InnerLayout,
  ItemLayout,
  TextLayout,
} = style