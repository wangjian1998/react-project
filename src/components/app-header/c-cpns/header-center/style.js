import styled from 'styled-components'

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;
  .search-btn{
    position: absolute;
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
  }

  .search-detail{
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }




`
