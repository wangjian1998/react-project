import styled from "styled-components";

export const PictureWrapper = styled.div`
  position: relative;
  .pictures {
    display: flex;
    justify-content: center;

    &:hover{
      .cover{
        opacity: 1 !important;
      }
    }

    .left, .right {
      width: 50%;
      .item-picture {
        position: relative;
        width: 100%;
        overflow: hidden;
        &:hover{
          img {
            transform: scale(1.1);
          }
          .cover {
            opacity: 0 !important;
          }
        }
        img {
          width: 100%;
          object-fit: cover;
          transition: transform 0.3s ease-in;
        };

        .cover {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0,0,0,0.3);
          opacity: 0;
        }
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      .item-picture {
        width: 50%;
        border: 1px solid #000;
      }
    }
  }

  .show-btn {
    position: absolute;
    right: 15px;
    bottom: 15px;
    padding: 6px 15px;
    line-height: 22px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }
`
