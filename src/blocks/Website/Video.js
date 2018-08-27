import styled from "styled-components";
const Video = styled.video.attrs({
  muted: true,
  playsInline: true,
  autoPlay: true,
  loop: true,
})`
  width: 100%;
  border-radius: .5rem .5rem 0 0
`;
export default Video;
