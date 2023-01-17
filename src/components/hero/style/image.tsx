import styled from "styled-components";
import ThemedImage from '@theme/ThemedImage'

const HeroImage = styled(ThemedImage)`
  height: 450px;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: .5;
`

export default HeroImage
