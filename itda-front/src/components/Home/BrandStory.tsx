import S from "./HomeStyles";

const BrandStory = () => {
	const introText = `'잇다'는 비영리 브랜드로,
		판매-구매 플랫폼을 마련해 판매자와 소비자를 이어주고, 상생할 수 있는 사회를 만들기 위해 만들어졌습니다.
		소비자에게 양질의 물품을 제공하는 동시에 판매자에게는 일정기간 판매루트를 제공해 자생할 수 있는 기반을 마련하는 데에 목적이 있습니다.
		따라서 잇다의 판매 수익금은 일괄적으로 판매자에게 전달됩니다.`;

	return (
		<>
		<S.BrandStory.BrandStoryLayout>
			<S.BrandStory.Banner>
				<h3>/ 브랜드 스토리</h3>
			</S.BrandStory.Banner>
			<S.BrandStory.Layer>
				<S.BrandStory.Title>
					<h4>/ "잇-다"</h4>
				</S.BrandStory.Title>
				<S.BrandStory.Introduction>
					 <p>{introText}</p>
				</S.BrandStory.Introduction>
			</S.BrandStory.Layer>
		</S.BrandStory.BrandStoryLayout>
		</>
	);
};

export default BrandStory;
