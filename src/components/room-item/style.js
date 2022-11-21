import styled from "styled-components";

const ItemWrapper = styled.div`
  width: ${props=> props.itemWidth};
  padding: 8px;
  flex-shrink: 0;

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
        object-fit: cover;
      }
    }

    .swiper {
      position: relative;
      cursor: pointer;
      &:hover{
        .control {
          display: flex;
        }
      }
      .control {
        display: none;
        color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        justify-content: space-between;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 83px;
          height: 100%;
          background: linear-gradient(to left, transparent 0%, rgba(0,0,0,0.25) 100%);
          z-index: 999;
          &.right {
            background: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 100%);
          }
        }
      }

      .indicator {
        width: 26%;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 10px;
        z-index: 9;
      }

      .dot-item {
        width: 20%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
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

    .ratng {
      .css-34he1w-MuiRating-decimal{
        margin-right: -2px;
      }

      .reviews_count {
        display: inline-block;
        margin: 0 0 0 4px;
      }

      .extra {
        font-weight: bold; 
      }
    }
  }
`

export default ItemWrapper
