import Header from "components/common/Header/Header";
import MainPage from "./HomePage";
import TopButton from "components/common/TopButton";
import S from "./HomeStyles";

import BrandStory from "components/BrandStory/BrandStory";

const Home = () => {
  return (
    <S.Home.HomeLayout>
      <S.Home.HomeLayer>
        <Header />
        <MainPage />
      </S.Home.HomeLayer>
      <BrandStory />
      <TopButton />
    </S.Home.HomeLayout>
  );
};

export default Home;
