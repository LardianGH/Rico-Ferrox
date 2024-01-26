import React from "react";
import Navbar from "../elements/Navbar";
import Wrapper from "../elements/Wrapper";
import BannerLeft from "../elements/BannerLeft";
import BannerRight from "../elements/BannerRight";
import Container from "../elements/Container";
import Image from "../elements/Image"
 const Main = () => {
    return (
      <>
      <Navbar>
      </Navbar>
      <Wrapper>
      <BannerLeft>
      </BannerLeft>
      <Container>
          <h1>Rico the Ferrox says "Hello!"</h1>
          <br></br>
          <Image>
          </Image>
          <h1>Enjoy yourself and explore around for a bit.</h1>
      </Container>
      <BannerRight>
      </BannerRight>
      </Wrapper>
      </>
    );
  };


export default Main;