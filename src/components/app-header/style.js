import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .content {
    position: relative;
    background-color: #fff;
    z-index: 19;
    padding: 0 24px;
    .top{
      display: flex;
      align-items: center;
      height: 80px;
    }
    .search-area{
      height: 100px;
    }

    
  }
  .cover{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.4);
      z-index: 9;
    }
  /* position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999; */
`
