import styled from 'styled-components';

const ItemBoxLayout = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  padding: 30px 60px;
  border-left: 1px solid #cdcdcd;
  border-right: 1px solid #cdcdcd;
  border-bottom: 1px solid #cdcdcd;
`;

export const InnerLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const ItemLayout = styled.div`
  width: ${(props) => props.wd}%;
`;
export const TextLayout = styled.div`
  width: auto;
  height: auto;
  min-height: 10px;
  font-size: ${(props) => props.fnt}px;
  color: ${(props) => props.col};
`;

export const style ={
    ItemBoxLayout,
    InnerLayout,
    ItemLayout,
    TextLayout,
}