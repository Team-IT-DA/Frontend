import S from "../CommonStyles";
import SideDrawer from "./SideDrawer";

const Header = () => {
	return (
		<S.Header.HeaderContainer>
			<S.Header.HeaderLayout>
				<S.Header.LeftBlock>
						<S.Header.Navigation>홈</S.Header.Navigation>
						<S.Header.Navigation>제품 소개</S.Header.Navigation>
						<S.Header.Navigation>브랜드 이야기</S.Header.Navigation>
				</S.Header.LeftBlock>
				<S.Header.LogoBlock>
					<S.Header.ItdaLogo/>
				</S.Header.LogoBlock>
				<S.Header.RightBlock>
					<S.Header.CartButton/>
					<S.Header.LoginButton/>
				</S.Header.RightBlock>
			</S.Header.HeaderLayout>
		</S.Header.HeaderContainer>
	);
};

export default Header;
