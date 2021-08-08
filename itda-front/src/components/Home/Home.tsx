import S from "./HomeStyles";
import Header from "components/common/Header/Header";
import Hero from "./Hero";
import BrandStory from "./BrandStory";

const Home = () => {
  return (
    <>
      <S.Home.HomeContainer>
        <Header color={"#ffffff"}></Header>
        <Hero />
      </S.Home.HomeContainer>
      <BrandStory />
    </>
  );
};

export default Home;
