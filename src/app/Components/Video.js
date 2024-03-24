import styled from "styled-components";

export default function Video({ src, ...props }) {
  return (
    <Player src={src} controls={false} autoPlay playsInline loop {...props}>
      <source src={src} type="video/mp4" />
    </Player>
  );
}

const Player = styled.video`
  ${(props) => props.style}
`;
