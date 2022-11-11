import styled from 'styled-components'

export const CenterWrapper = styled.div`
  width: 290px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 5px 5px 12px;
  border: 1px solid #DDDDDD;
  border-radius: 21px;
  cursor: pointer;
  ${prop=>prop.theme.minix.boxShadow}

  .text {
    font-size: 14px;
    font-weight: bold;
    color: ${prop => prop.theme.textColor.primary};

  }

  .icon {
    width: 32px;
    height: 32px;
    background-color: ${prop=>prop.theme.color.primary};
    color: #ffffff;
    border-radius: 50%;
    padding: 10px;
  }

`
