import styled from "styled-components";

export const BrowserWrapper =  styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(33,33,33);
  opacity: 1;

  .top {
    position: relative;
    height: 86px;
    text-align: right;
    font-size: 32px;
    color: #fff;
    .btn {
      position: absolute;
      top: 15px;
      right: 25px;
      width: 50px;
      text-align: center;
      cursor: pointer;
      z-index: 99;
    }
  }

  .list {
    flex:1;
    display: flex;
    justify-content: center;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .container {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100% !important;
      max-width: 105vh !important;

      img {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
    }
  }

  .indicator{
    height: 100px;
    margin-top: 10px;
  }


`
