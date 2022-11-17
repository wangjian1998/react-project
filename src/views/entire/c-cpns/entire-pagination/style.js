import styled from "styled-components";

export const PagWrapper = styled.div`
  margin: 30px 0;
  .css-wjh20t-MuiPagination-ul{
    justify-content: center;
  }

  .MuiPaginationItem-page.Mui-selected {
    background-color: #222;
  }
  .MuiPaginationItem-page{
    &:hover{
      text-decoration: underline;
    }
  }
  .info {
    text-align: center;
    margin-top: 15px;
    color: #222;
  }
`
