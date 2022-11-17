import styled from "styled-components";

export const LongForWrapper = styled.div`
  .longfor-list {
    display: flex;
    flex-wrap: nowrap;
    margin: 0 -8px;
    .list-item {
      width: 20%;
      padding: 8px;
      position: relative;
      cursor: pointer;

      img {
        width: 100%;
      }

      .info{
        position: absolute;
        top: 70%;
        width: 92%;
        text-align: center;

        .city{
          font-size: 18px;
          color: #fff;
        }

        .price{
          font-size: 14px;
          color: #fff;
        }
      }
    }
  }
`
