import Header from "components/common/Header/Header";
import Hero from "./Hero";
import S from "./HomeStyles";

const Home = () => {
  return (
    <>
      <S.Home.HomeContainer>
        <Header />
        <Hero />
      </S.Home.HomeContainer>
      {/* <BrandStory /> */}
    </>
  );
};

export default Home;
