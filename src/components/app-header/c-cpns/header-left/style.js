import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${prop => prop.theme.color.primary};

  .logo {
    cursor: pointer;
  }
`
