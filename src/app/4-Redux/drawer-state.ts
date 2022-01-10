// drawer State:
export class DrawerState {
  public isDrawerOpen: boolean;

  public constructor() {}
}

// Drawer Action Types:
export enum DrawerActionType {
  setIsDrawerOpen = 'setIsDrawerOpen',
}

// Drawer Action:
export interface DrawerAction {
  type: DrawerActionType;
  payload?: boolean;
}

// Drawer Action Creators:
export function setIsDrawerOpenAction(isDrawerOpen: boolean): DrawerAction {
  return { type: DrawerActionType.setIsDrawerOpen, payload: isDrawerOpen };
}

// Drawer Reducer:
export function drawerReducer(
  currentState: DrawerState = new DrawerState(),
  action: DrawerAction
): DrawerState {
  const newState = { ...currentState };
  switch (action.type) {
    case DrawerActionType.setIsDrawerOpen:
      newState.isDrawerOpen = action.payload;
      localStorage.setItem('drawer', `${newState.isDrawerOpen}`);
      break;
  }
  return newState;
}
