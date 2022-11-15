import styled from "styled-components";

const ItemWrapper = styled.div`
  width: 25%;
  padding: 8px;

  .inner {
    width: 100%;

    .image {
      position: relative;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${prop => prop.verifyColor};
    }

    .name {
      font-size: 16px;
      font-weight: bold;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      font-size: 14px;
      margin: 10px 0 5px;
      font-weight: 700;
    }
  }
`

export default ItemWrapper
