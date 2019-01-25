import { createAction } from 'typesafe-actions';
import * as payloads from './_payloads';
import { Gradient, BlendMode } from '../_types';

export const addGradient = createAction(
  '@editor/ADD_GRADIENT', (resolve) =>
    (id: string) => resolve(id)
  );

export const addPredefinedGradient = createAction(
  '@editor/ADD_PREDEFINED_GRADIENT', (resolve) =>
    (payload: Gradient) => resolve(payload)
);

export const deleteGradient = createAction(
  '@editor/DELETE_GRADIENT', (resolve) =>
    (id: string) => resolve(id)
);

export const addColor = createAction(
  '@editor/ADD_COLOR', (resolve) =>
    (payload: payloads.ColorPayload) => resolve(payload)
);

export const deleteColor = createAction(
  '@editor/DELETE_COLOR', (resolve) =>
    (payload: payloads.ColorPayload) => resolve(payload)
);

export const editColor = createAction(
  '@editor/EDIT_COLOR', (resolve) =>
    (payload: payloads.ColorEditionPayload) => resolve(payload)
);

export const deleteAllColors = createAction(
  '@editor/DELETE_ALL_COLORS', (resolve) =>
    (id: string) => resolve(id),
);

export const toggleChroma = createAction(
  '@editor/TOGGLE_CHROMA', (resolve) =>
    (id: string) => resolve(id)
);

export const setGradientType = createAction(
  '@editor/SET_GRADIENT_TYPE', (resolve) =>
    (payload: payloads.GradientTypePayload) => resolve(payload),
);

export const setAttribute = createAction(
  '@editor/SET_ATTRIBUTE', (resolve) =>
    (payload: payloads.AttributeEditionPayload) => resolve(payload)
);

export const toggleFocalPoints = createAction(
  '@editor/TOGGLE_FOCAL_POINTS', (resolve) =>
    (id: string) => resolve(id)
);

export const replaceGradientAttributes = createAction(
  '@editor/REPLACE_GRADIENT_ATTRIBUTES', (resolve) =>
    (payload: payloads.AttributesReplacementPayload) => resolve(payload)
);

export const setChromaAttribute = createAction(
  '@editor/SET_CHROMA_ATTRIBUTE', (resolve) =>
    (payload: payloads.ChromaEditionPayload) => resolve(payload)
);

export const computeChromaColors = createAction(
  '@editor/COMPUTE_CHROMA_COLORS',
  (resolve) => (gradientId: string) => resolve(gradientId),
);

export const deleteAllGradients = createAction(
  '@editor/DELETE_ALL_GRADIENTS', (resolve) =>
    () => resolve(), 
);
export const setGlobalBlendMode = createAction(
  '@editor/SET_GLOBAL_BLEND_MODE', (resolve) =>
    (payload: BlendMode) => resolve(payload)
);

export const setLocalBlendMode = createAction(
  '@editor/SET_LOCAL_BLEND_MODE', (resolve) =>
    (payload: payloads.LocalBlendModePayload) => resolve(payload)
);
