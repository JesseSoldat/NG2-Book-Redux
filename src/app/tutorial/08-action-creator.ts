interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

interface ListenerCallback {
  (): void;
}

interface UnsubscribeCallback {
  (): void;
}

interface AppState {
	messages: string[];
}

interface AddMessageAction extends Action {
	message: string;
}

interface DeleteMessageAction extends Action {
	index: number;
}

class Store<T> {
	private _state: T;
	private _listeners: ListenerCallback[] = [];

	constructor(private reducer: Reducer<T>, initialState: T){
		this._state = initialState;
	}

	getState(): T {
		return this._state;
	}

	dispatch(action: Action): void {
		this._state = this.reducer(this._state, action);
		this._listeners.forEach((listener: ListenerCallback) => listener());
	}

	subscribe(listener: ListenerCallback): UnsubscribeCallback {
		this._listeners.push(listener);
		return () => {
			this._listeners = this._listeners.filter(l => l !== listener);
		};
	}

}

class MessageActions {
	static addMessage(message: string): AddMessageAction {
		return {
			type: 'ADD_MESSAGE',
			message: message
		};
	}

	static deleteMessage(index: number):  DeleteMessageAction {
		return {
			type: 'DELETE_MESSAGE',
			index: index
		}
	}
}

let reducer: Reducer<AppState> = (state: AppState, action: Action) => {
	switch (action.type) {
  case 'ADD_MESSAGE':
    return {
      messages: state.messages.concat((<AddMessageAction>action).message),
    };
  case 'DELETE_MESSAGE':
    let idx = (<DeleteMessageAction>action).index;
    return {
      messages: [
        ...state.messages.slice(0, idx),
        ...state.messages.slice(idx + 1, state.messages.length)
      ]
    };
  default:
    return state;
  }
};

// create a new store
let store = new Store<AppState>(reducer, { messages: [] });
console.log(store.getState());

store.dispatch(
  MessageActions.addMessage('Do you know about JLab?'));

console.log(store.getState());

store.dispatch( MessageActions.deleteMessage(0) );

console.log(store.getState());