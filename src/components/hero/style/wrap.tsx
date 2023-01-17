import styled from "styled-components";



const HeroWrap = styled.section`
  height: 450px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(rgba(0,0,0,0), var(--ifm-background-color));
  
  .title {
    font-size: 52px;
    margin-top: -12px;
    margin-bottom: 6px;
    text-align: center;
  }
  
  p {
    margin-bottom: 24px;
  }
  
  a{
    display: inline-flex;
    height: 50px;
    width: 250px;
    justify-content: center;
    align-items: center;
    background-color: var(--ifm-color-btn-bg);
    color: var(--ifm-color-btn-color);
    border-radius: 12px;
    border: 1px solid var(--ifm-color-btn-border);
  }
`

export default HeroWrap
