import S from "../CommonStyles";
import { ReactComponent as Logo } from "components/common/icons/logo.svg";
import { ReactComponent as Login } from "components/common/icons/hamburger.svg";
import { ReactComponent as Cart } from "components/common/icons/cart.svg";

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
					<Logo/>
				</S.Header.LogoBlock>
				<S.Header.RightBlock>
					<Cart/>
					<Login/>
				</S.Header.RightBlock>
			</S.Header.HeaderLayout>
		</S.Header.HeaderContainer>
	);
};

export default Header;
