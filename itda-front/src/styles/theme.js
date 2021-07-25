const calcRem = size => `${size / 16}rem`;

const fontSizes = {
	base: calcRem(16),
};
const theme = { fontSizes };

export default theme;
