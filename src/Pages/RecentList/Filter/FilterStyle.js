import styled from 'styled-components';

export const FilterBoxLayout = styled.div`
  width: 100%;
  height: 90px;
  border: 1px solid #cdcdcd;
`;

export const InnerLayout = styled.div`
  width: 100%;
  height: 50%;
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemLayout = styled.div`
  width: ${(props) => props.wd}%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.jc};
`;

export const TextLayout = styled.div`
  font-size: ${(props) => props.fnt}px;
  color: ${(props) => props.col};
  cursor: ${(props) => props.cus};

  &:hover {
    cursor: pointer;
  }
`;
export const Divider = styled.div`
  border-top: 0.5px solid #cdcdcd;
  margin: 0;
`;

export const Divider2 = styled.div`
  border-left: 0.5px solid #cdcdcd;
  margin: 0;
  height: 10px;
`;

export const style = {
    FilterBoxLayout,
    InnerLayout,
    ItemLayout,
    TextLayout,
    Divider,
    Divider2,
}