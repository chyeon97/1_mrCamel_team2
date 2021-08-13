import styled from 'styled-components';

export const ProductContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 500px;
`;

export const ProductWrap = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 90%;
  height: 85%;
`;

export const LeftSide = styled.div`
  width: 100%;
  img {
    position: relative;
    width: 90%;
    height: 90%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const RightSide = styled.div`
  width: 100%;
`;

export const ProductContentWrap = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 50%;
  margin: 20px;
`;

export const ProductTitle = styled.div`
  height: 10%;
  margin: 20px;
  h1 {
    font-size: larger;
    font-weight: 600;
  }
`;

export const ProductBrand = styled.div`
  height: 10%;
  margin: 10px 10px 10px 20px;
  h2 {
    font-size: small;
    color: gray;
  }
`;

export const ProductPrice = styled.div`
  height: 10%;
  margin: 20px;
  h1 {
    font-size: larger;
    font-weight: 600;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
`;

export const RandomBtn = styled.div`
  width: 100%;

  button {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 50%;
    background-color: #1cbdcf;
    color: white;
    font-weight: 500;
    font-size: medium;
  }
`;

export const NoInterestBtn = styled.div`
  width: 100%;

  button {
    position: relative;
    left: 50%;
    top: 50%;
    width: 80%;
    height: 50%;
    transform: translate(-50%, -50%);
    color: #1cbdcf;
    font-weight: 500;
    font-size: medium;
    border: 1px solid;
  }
`;

export const RecentListBtnWrap = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 10%;
  margin: 10px 10px 20px 0px;

  button {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 86%;
    height: 100%;
    background-color: #1cbdcf;
    color: white;
    font-weight: 500;
    font-size: medium;
  }
`;

export const style = {
    ProductContainer,
    ProductWrap,
    LeftSide,
    RightSide,
    ProductContentWrap,
    ContentWrap,
    ProductTitle,
    ProductBrand,
    ProductPrice,
    BtnWrap,
    RandomBtn,
    NoInterestBtn,
    RecentListBtnWrap,
}