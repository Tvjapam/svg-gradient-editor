import update from 'immutability-helper';
import { EditorReducer } from './reducer';
import * as helpers from './helpers';
import * as payloads from './_payloads';

export const addGradient = (state: EditorReducer, payload: string): EditorReducer =>
  update(
    state,
    {
      gradients: {
        $push: [helpers.createGradient(payload)],
      },
    },
  );

export const deleteGradient = (state: EditorReducer, payload: string): EditorReducer =>
  update(
    state,
    {
      gradients: {
        $splice: [
          [ helpers.getGradientIndex(state, payload), 1 ]
        ],
      },
    },
  );

export const addColor = (state: EditorReducer, payload: payloads.ColorPayload): EditorReducer => {
  const targetIndex: number =  helpers.getGradientIndex(state, payload.gradientId);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          colors: {
            $push: [ helpers.createColor(payload.colorId) ],
          },
        },
      },
    },
  );
};

export const deleteColor = (state: EditorReducer, payload: payloads.ColorPayload): EditorReducer => {
  const targetIndex: number = helpers.getGradientIndex(state, payload.gradientId);
  const colorIndex: number = helpers.getColorIndex(state, targetIndex, payload.colorId);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          colors: {
            $splice: [
              [colorIndex, 1],
            ],
          },
        },
      },
    },
  );
};

export const editColor = (state: EditorReducer, payload: payloads.ColorEditionPayload): EditorReducer => {
  const targetIndex: number = helpers.getGradientIndex(state, payload.gradientId);
  const colorIndex: number = helpers.getColorIndex(state, targetIndex, payload.colorId);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          colors: {
            [colorIndex]: {
              color: {
                $set: payload.color,
              },
            },
          },
        },
      },
    },
  );
};

export const deleteAllColors = (state: EditorReducer, payload: string): EditorReducer => {
  const targetIndex: number = helpers.getGradientIndex(state, payload);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          colors: {
            $set: [],
          },
        },
      },
    },
  );
};

export const toggleChroma = (state: EditorReducer, payload: string): EditorReducer => {
  const targetIndex: number = helpers.getGradientIndex(state, payload);
  return update(
    state,
    {
      gradients: {
        [targetIndex]: {
          $toggle: [ 'useChroma' ],
        }
      },
    },
  );
};