import styled from "styled-components";
import Container from './Container'
import Peak from './Peak'
import Eyes from './Eyes'
import Pedal from './Pedal'
import {pedalBounceIn} from './Keyframes'
const RE20 = styled.figure`
  position: relative;
  width: 80%;
  max-width: 72rem;
  margin: auto;
  animation: ${pedalBounceIn} 1s 0s;
`;
RE20.Container = Container
RE20.Peak = Peak
RE20.Eyes = Eyes
RE20.Pedal = Pedal
export default RE20;
