import React, { Component } from "react";
import Filter from "Pages/RecentList/Filter";
import Item from "Pages/RecentList/Item/Item";
import {LOCAL_STORAGE} from 'Utils/constants';
import {sortByRcent} from './utils/sortByRcent';
import {sortByPrice} from './utils/sortByPrice';
import {filterByBrand} from './utils/filterByBrand';
import {filterByDislike} from './utils/filterByDislike';

class RecentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brandName: [],
      recentItems: LOCAL_STORAGE.get("recentItems"),
      dislikeItems: LOCAL_STORAGE.get("dislikeItems"),
      recentItemList:{},
      priceItemList:{},
      check: false,
      priceClick: false, // 낮은 가격 정렬 버튼
      recentClick: true, // 최근 조회 정렬 버튼
      history: this.props.history,
      date:new Date(),
    };
  }

  componentDidMount(){
    let recentDataList = sortByRcent(this.state.recentItems);
    this.setState({recentItemList:recentDataList})
    let newProductList = sortByPrice(this.state.recentItems);
    this.setState({priceItemList:newProductList})
    this.setFilterData(recentDataList)
    this.intervalTimer = setTimeout(this.tick, 1000);
  }
  tick = () =>{
    this.setState({date: new Date()})
  }

  componentDidUpdate(prevProps, prevState){
      if(prevState.date !== this.state.date){
        this.intervalTimer = setTimeout(this.tick, 1000)
        const hour = this.state.date.getHours();
        const minute = this.state.date.getMinutes();
        const second = this.state.date.getSeconds();
        console.log(hour, minute, second)
        
        if(hour + minute + second === 0){
          LOCAL_STORAGE.set("recentItems",[])
          this.setState({recentItems: LOCAL_STORAGE.get("recentItems")})
          this.setFilterData(this.state.recentItems)
        } 
    } 
  }

  selectBrand = (res) => {
    if (this.state.brandName.includes(res)) {
      const findIndx = this.state.brandName.indexOf(res);
      this.state.brandName.splice(findIndx, 1); 
      this.setState({ brandName: this.state.brandName }, () => {
        this.filterData();
      });
    }
    else {
      this.setState({ brandName: this.state.brandName.concat(res)}, ()=>{
        this.filterData()
      });
    }
  };
  
  filterData() {
      let filterdItems = ''
      
      if(this.state.recentClick){
        filterdItems = filterByBrand(
          this.state.brandName,
          this.state.recentItemList
        );
        this.state.check &&
          (filterdItems = filterByDislike(
            filterdItems,
            this.state.dislikeItems,
            this.state.brandName
          ));
      }
      else{
        filterdItems = filterByBrand(
          this.state.brandName,
          this.state.priceItemList
        );
        this.state.check &&
          (filterdItems = filterByDislike(
            filterdItems,
            this.state.dislikeItems,
            this.state.brandName
          ));
        filterdItems = sortByPrice(filterdItems)
      }
        this.setFilterData(filterdItems)
  }

  checkClick = (res) => {
    this.setState({ check: res }, () => {
      this.state.check ? this.setDislikeFilter() : this.setRmDislikeFilter();
    });
  };

  setDislikeFilter() {
    let filterdItems = ''

    if(this.state.recentClick){
      filterdItems = filterByDislike(
        this.state.recentItemList,
        this.state.dislikeItems,
        this.state.brandName
      )
    }
    else{
      filterdItems = filterByDislike(
        this.state.priceItemList,
        this.state.dislikeItems,
        this.state.brandName
      ); 
      filterdItems = sortByPrice(filterdItems)
    }
      this.setFilterData(filterdItems);
  }

  setRmDislikeFilter(){
    let filterdItems = '';
    this.state.recentClick
      ? (filterdItems = filterByBrand(
          this.state.brandName,
          this.state.recentItemList
        ))
      : (filterdItems = filterByBrand(
          this.state.brandName,
          this.state.priceItemList
        ));
    this.setFilterData(filterdItems);
  }

  clickPriceAsc = (res) => {
    this.setState({ priceClick: res }, () => {
        this.sortByPriceAsc()
    });
  };

  sortByPriceAsc = () => {
    let filterdItems = '';
    filterdItems = filterByBrand(
      this.state.brandName,
      this.state.priceItemList
    );
    filterdItems = sortByPrice(filterdItems)
    this.setState({recentClick:false})
    this.setFilterData(filterdItems);
  };

  clickRecentAsc = (res) => {
    this.setState({ recentClick: res }, () => {
        this.sortByRecentAsc()
    });
  };

  sortByRecentAsc = () => {
    let filterdItems = '';
    filterdItems = filterByBrand(
      this.state.brandName,
      this.state.recentItemList
    );
    this.setState({priceClick:false})
    this.setFilterData(filterdItems);
  };

  setFilterData(arrayList) {
    this.setState({ recentItems: arrayList });
  }

  render() {
    return (
      <div style={{ width: "650px", flexDirection: "column", margin: "auto" }}>
        <Filter
          brand={this.selectBrand}
          setCheck={this.checkClick}
          check={this.state.check}
          setClick={this.clickPriceAsc}
          setRecentClick={this.clickRecentAsc}
          recentClick={this.state.recentClick}
        />
        <Item
          selectBrand={this.state.brandName}
          productData={this.state.recentItems}
          history={this.state.history}
        />
      </div>
    );
  }
}
export default RecentList;
