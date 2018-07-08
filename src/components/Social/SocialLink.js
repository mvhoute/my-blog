import styled from 'styled-components';

const SocialLink = styled.a`
  border: 1px solid #bfc8d2;
  border-radius: 15px;
  color: #3e465b;
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  transition: all 0.4s;
  text-decoration: none;

  svg {
    display: inline-block;
    height: 20px;
    margin-right: 5px;
    stroke: #6e849c;
    vertical-align: middle;
    width: 20px;
    transition: stroke 0.4s;
  }

  &:hover {
    border-color: #3e465b;
    background-color: #ffffff;
    
    svg {
    stroke: #3e465b;
    }
  }
`;

export default SocialLink;
