import { useState, useEffect } from "react";
const useDebounce = (value: number, timeout: number) => {
	const [state, setState] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => setState(value), timeout);
		return () => clearTimeout(handler);
	}, [value, timeout]);

	return state;
};

export default useDebounce;
