import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.isAlpha ? '#fff' : props.theme.textColor.primary};

  .btns {
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    font-weight: bold;

    span {
      padding: 12px;
      cursor: pointer;
      display: inline-block;
    }
  }

  .perInfo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 16px;
    border: 1px solid #DDDDDD;
    border-radius: 21px;
    ${prop => prop.theme.minix.boxShadow}

    span {
      padding: 5px 5px 5px 12px;
      display: inline-block;
      cursor: pointer;
    }

    .panel {
      position: absolute;
      top: 60px;
      right: 0;
      width: 300px;
      padding: 10px 0px;
      box-shadow: 0 0 4px rgb(0 0 0 / 18%);
      border-radius: 10px;
      background-color: #fff;
      z-index: 999;
      .item {
        padding: 15px 20px;
        &:hover {
          background-color: #ddd;
        }
      }

      .top {
        padding-bottom: 15px;
        border-bottom: 1px solid #ddd;
        .gister {
          font-weight: bold;
        }
      }

      .bottom {
        padding-top:10px
      }
    }
  }
`
