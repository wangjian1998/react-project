import styled from "styled-components";

export const LItemWrapper = styled.div`
    width: 20%;
    flex-shrink: 0;
    padding: 8px;
    position: relative;
    cursor: pointer;


    img {
      width: 100%;
      border-radius: 5px;
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
`
