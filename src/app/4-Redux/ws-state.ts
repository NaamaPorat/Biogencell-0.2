// windowSize State:
export class WindowSizeState {
  public windowSize: number;

  public constructor() {}
}

// windowSize Action Types:
export enum WindowSizeActionType {
  setWindowSize = 'setWindowSize',
}

// WindowSize Action:
export interface WindowSizeAction {
  type: WindowSizeActionType;
  payload?: any;
}

// Auth Action Creators:
export function setWindowSizeAction(ws: number): WindowSizeAction {
  return { type: WindowSizeActionType.setWindowSize, payload: ws };
}

// Auth Reducer:
export function windowSizeReducer(
  currentState: WindowSizeState = new WindowSizeState(),
  action: WindowSizeAction
): WindowSizeState {
  const newState = { ...currentState };
  switch (action.type) {
    case WindowSizeActionType.setWindowSize:
      newState.windowSize = action.payload;
      localStorage.setItem('ws', `${newState.windowSize}`);
      break;
  }
  return newState;
}
