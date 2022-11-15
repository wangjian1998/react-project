import styled from 'styled-components'

export const FooterWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  .info {
    display: flex;
    align-items: center;
    font-size: 17px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }

    .textColor {
      color: #00848A;
    }
  }
`
