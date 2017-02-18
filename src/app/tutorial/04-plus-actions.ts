interface Action {
	type: string;
	payload?: any;
}

interface Reducer<T> {
	(state: T, action: Action): T;
}

let reducer: Reducer<number> = (state: number, action: Action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'PLUS':
			return state + action.payload;
		default:
			return state;
	}
};

console.log( reducer(10, { type: 'PLUS', payload: 10}));
console.log( reducer(10, { type: 'PLUS', payload: 101}));
console.log( reducer(10, { type: 'PLUS', payload: -5}));

