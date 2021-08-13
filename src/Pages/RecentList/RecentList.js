import React, { Component } from "react";
import Filter from "Pages/RecentList/Filter";
import Item from "Pages/RecentList/Item/Item";
import {LOCAL_STORAGE} from 'Utils/constants';
import {sortByRcent} from './utils/sortByRcent';
import {sortByOrigin} from './utils/sortByOrigin';
import {sortByPrice} from './utils/sortByPrice';

class RecentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brandName: [],
      recentItems: LOCAL_STORAGE.get("recentItems"),
      dislikeItems: LOCAL_STORAGE.get("dislikeItems"),
      origin_recentItems: LOCAL_STORAGE.get("recentItems"),
      check: false,
      priceClick: false, // 낮은 가격 정렬 버튼
      recentClick: true, // 최근 조회 정렬 버튼
      history: this.props.history
    };
  }

  // 브랜드 선택 기능
  selectBrand = (res) => {
    // 기존에 선택했던 브랜드 경우 => 선택 제거
    if (this.state.brandName.includes(res)) {
      const findIndx = this.state.brandName.indexOf(res);
      this.state.brandName.splice(findIndx, 1); // 필터링 제거 인덱스 삭제
      this.setState({ brandName: this.state.brandName }, () => {
        this.filterData();
      });
    }
    // 최초 선택 => 필터 기능
    else {
      this.setState({ brandName: this.state.brandName.concat(res) }, () => {
        this.filterData();
      });
    }
  };

  filterData() {
    // 관심없음 X
    if (!this.state.check) {
      // 브랜드 O
      if (this.state.brandName.length > 0) {
        let newItemData = [];
        for (let i = 0; i < this.state.brandName.length; i++) {
          let itemData = "";
          for (itemData of this.state.origin_recentItems) {
            // console.log(itemData.brand)
            if (itemData.brand === this.state.brandName[i]) {
              newItemData.push(itemData);
            }
          }
        }
        this.setFilterData(newItemData);
      }
      // 브랜드 X
      else {
        this.setFilterData(this.state.origin_recentItems);
      }
    }

    // 관심없음 O
    else {
      // 브랜드 O
      if (this.state.brandName.length > 0) {
        let newItemData = [];
        for (let i = 0; i < this.state.brandName.length; i++) {
          let itemData = "";
          for (itemData of this.state.recentItems) {
            // console.log(itemData.brand)
            if (itemData.brand === this.state.brandName[i]) {
              newItemData.push(itemData);
            }
          }
        }
        // this.setFilterData(newItemData);
      }
    }
  }

  // ========================= 관심없음 필터링 기능 ============================ //

  // 관심없음 체크박스
  checkClick = (res) => {
    this.setState({ check: res }, () => {
      this.state.check ? this.setDislikeFilter() : this.setDefaultFilter();
    });
  };

  // 관심없음 O
  setDislikeFilter() {
    let dislikeData = "";
    let recentData = "";
    let resultList = [];
    let findTitle = [];

    // 브랜드 O
    if (this.state.brandName.length > 0) {
      for (recentData of this.state.recentItems) {
        for (dislikeData of this.state.dislikeItems) {
          if (
            dislikeData.title === recentData.title &&
            dislikeData.price === recentData.price &&
            dislikeData.brand === recentData.brand
          ) {
            findTitle.push(dislikeData.title);
          }
        }
      }
    }
    // 브랜드 X
    else {
      for (recentData of this.state.origin_recentItems) {
        for (dislikeData of this.state.dislikeItems) {
          if (
            dislikeData.title === recentData.title &&
            dislikeData.price === recentData.price &&
            dislikeData.brand === recentData.brand
          ) {
            findTitle.push(dislikeData.title);
          }
        }
      }
    }
    // 차집합 : 조회이력 내역 - 관심없음 내역의 제목(findTitle)
    resultList = this.state.recentItems.filter(
      (item) => !findTitle.includes(item.title)
    );
    console.log(resultList);
    this.setFilterData(resultList);
  }

  // 관심없음 X
  setDefaultFilter() {
    // 브랜드 O
    if (this.state.brandName.length > 0) {
      this.filterData();
    }
    // 브랜드 X
    else {
      let originItems = LOCAL_STORAGE.get("recentItems");
      this.setFilterData(originItems);
    }
  }
 // =====================================================
  clickPriceAsc = (res) => {
    this.setState({ priceClick: res }, () => {
      this.state.priceClick ? this.sortByPriceAsc() : this.setOriginData();
    });
  };

  sortByPriceAsc = () => {
    let newProductList = sortByPrice(this.state.origin_recentItems);
    this.setState({recentClick:false})
    this.setFilterData(newProductList);
  };

  clickRecentAsc = (res) => {
    this.setState({ recentClick: res }, () => {
      this.state.recentClick ? this.sortByRecentAsc(): this.setOriginData();
    });
  };

  sortByRecentAsc = () => {
    let recentDataList = sortByRcent(this.state.origin_recentItems);
    this.setState({priceClick:false})
    this.setFilterData(recentDataList);
  };

  setOriginData() {
    let originDataList = sortByOrigin(this.state.origin_recentItems);
    this.setFilterData(originDataList);
  }

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
