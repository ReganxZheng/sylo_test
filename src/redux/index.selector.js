import * as R from 'ramda';
import { createSelector } from 'reselect';

export const moduleSelector = R.prop('gistState');

export const gistListSelector = createSelector(
  moduleSelector,
  R.prop('gistList')
);
