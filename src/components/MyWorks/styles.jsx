import styled from "styled-components";

export const MyWorksContainer = styled('div')({
  padding: '550px 28px 0px 28px'
});

export const MyWorksDescription = styled.div`
  padding: 20px;
  color: #A9A9A9;
  position: absolute;
  display: none;
`
export const MyWorksImgCard = styled.div`
  display: none;
  position: absolute;
  width:100%;
  height:100%;
  position:absolute;
  background-color:#000;
  opacity:0.4;
`;

export const MyWorksImgContainer = styled('div').withConfig({
  shouldForwardProp: (prop) => prop !== 'imgSrc',
})`
  position: relative;
  background-image: ${props => `url(${props.imgSrc})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  border: 1px solid #A9A9A9;
  margin: 30px 0px 10px 0px;
  transition: .5s ease;
  width: 30vw;
  height: 18vw;
  backface-visibility: hidden;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:hover ${MyWorksDescription} {
    display: block;
  }

  &:hover ${MyWorksImgCard} {
    display: block;
  }
`;

export const MyWorksHeader = styled('h2')({
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontSize: '26px',
  lineHeight: '32px',
  textAlign: 'center',
})