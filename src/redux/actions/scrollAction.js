import { types } from "../types";

export const _scroll = (options) => ({
	type: types.scroll,
	payload: options
});