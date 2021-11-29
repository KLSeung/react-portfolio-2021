import styled from "styled-components";

export const MyWorksContainer = styled('div')({
  padding: '550px 28px 100px 28px'
});

export const MyWorksDescription = styled.div`
  padding: 20px;
  color: white;
  position: absolute;
  visibility: none;
  opacity:0;
  transition: opacity 1s ease-out;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`
export const MyWorksImgOverlay = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  visibility: hidden;
  position: absolute;
  width:100%;
  height:100%;
  position:absolute;
  background-color:#000;
  opacity:0;
  transition: opacity 0.5s ease-out;
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
  backface-visibility: hidden;
  overflow: hidden;
  width: 80vw;
  height: 60vw;

  @media (min-width: 1024px) {
    width: 25vw;
    height: 15vw;
  }

  @media (min-width: 425px) and (max-width: 768px) {
    padding-left: 60px;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover ${MyWorksDescription} {
    visibility: visible;
    opacity: 1;
  }

  &:hover ${MyWorksImgOverlay} {
    visibility: visible;
    opacity: 0.8;
  }
`;

export const MyWorksHeader = styled('h2')({
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontSize: '30px',
  lineHeight: '32px',
  textAlign: 'center',
  paddingBottom: '30px'
})