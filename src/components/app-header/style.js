import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;
  border-bottom-color: ${props => props.theme.isAlpha ? 'rgba(255,255,255,0)' : '#eee'};

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .content {
    position: relative;
    /* transition: all 250ms ease; */
    background-color: ${props => props.theme.isAlpha ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)'};
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

    
`
export const SearchAreaWrapper = styled.div`
  transition: height 300ms ease;
  height: ${props=> props.isSearch ? '100px' : '0'}
`
