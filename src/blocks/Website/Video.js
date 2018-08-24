import styled from "styled-components";
const Video = styled.video.attrs({
  loop: "true",
  autoPlay: "true"
})`
  width: 100%;
  border-radius: .5rem .5rem 0 0
`;
export default Video;
