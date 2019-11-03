import { createAction } from 'redux-actions';

const initState = {
  gistList: []
};

export const ADD_NEW_GIST = 'ADD_NEW_GIST';
export const DELETE_GIST = 'DELETE_GIST';
export const ALLOW_EDIT = 'ALLOW_EDIT';
export const EDIT_GIST = 'EDIT_GIST';
export const ADD_HASH_TO_LIST = 'ADD_HASH_TO_LIST';

export const addNewGist = createAction(ADD_NEW_GIST);
export const deleteGist = createAction(DELETE_GIST);
export const allowEdit = createAction(ALLOW_EDIT);
export const editGist = createAction(EDIT_GIST);

export default (state = initState, action) => {
  const { type, payload } = action;

  const reducer = {
    [ADD_NEW_GIST]: state => ({ ...state, gistList: [...state.gistList, ...payload] }),
    [DELETE_GIST]: state => ({
      ...state,
      gistList: state.gistList.filter(i => (i.id !== payload ? i : ''))
    }),
    [ALLOW_EDIT]: state => ({
      ...state,
      gistList: state.gistList.map(i => (i.id === payload ? { ...i, isEditDisable: !i.isEditDisable } : i))
    }),
    [EDIT_GIST]: state => ({
      ...state,
      gistList: state.gistList.map(i => (i.id === payload.id ? { ...i, value: payload.input } : i))
    }),
    [ADD_HASH_TO_LIST]: state => ({
      ...state,
      gistList: state.gistList.map(i => (i.id === payload.id ? { ...i, hash: payload.hash } : i))
    })
  }[type];

  return reducer ? reducer(state, payload) : state;
};
