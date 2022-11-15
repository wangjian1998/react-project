import styled from 'styled-components'

export const TabsWrapper = styled.div`
  .tabWrapper {
    width: 100%;
    display: flex;

    .tablist {
      flex-basis: 120px;
      flex-shrink: 0;
      padding: 14px 16px;
      margin-right: 10px;
      border: solid 0.5px #D8D8D8;
      border-radius: 3px;
      font-size: 17px;
      font-weight: bold;
      white-space: nowrap;
      cursor: pointer;
      text-align: center;
      ${props=>props.theme.minix.boxShadow}

      &:nth-last-child(1) {
        margin-right: 0;
      }
    }

    .active {
      border: solid 0.5px #00848A;
      background: #00848A;
      color: #ffffff
    }
  }
`
