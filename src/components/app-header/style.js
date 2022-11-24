import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #eee;
  padding: 0 24px;
  background-color: #fff;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  /* position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999; */
`
