import styled from "styled-components";

export const RoomWrapper = styled.div`
  position: relative;
  padding: 20px 16px;
  box-sizing: content-box;

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .title {
    font-size: 18px;
    color: #222;
    font-weight: bold;
    padding-left: 8px;
  }

  > .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255,255,255,.4);
  }
`
