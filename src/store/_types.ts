export type LinearGradientAttributes = {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
};

export type RadialGradientAttributes = {
  cx: number,
  cy: number,
  r: number,
  fx: number,
  fy: number,
  spreadMethod?: 'pad' | 'repeat' | 'reflect',
};

export type ColorMode = 'lch'
  | 'hsv'
  | 'lab'
  | 'rgb'
  | 'hsl'
  | 'hsi'
  | 'hcl';

export type ColorInterpolation = 'linear' | 'bezier';

export type ChromaAttributes = {
  interpolation: ColorInterpolation,
  mode: ColorMode,
  lightnessCorrection: boolean,
  samples: number,
};

export type InputColor = {
  id: string,
  color: number[],
};

export type OutputColor = {
  color: number[],
  offset: number,
};

export type Gradient = {
  id: string,
  type: 'linear' | 'radial',
  blendMode: BlendModeObject,
  focalPoints: boolean,
  useChroma: boolean,
  attributes: LinearGradientAttributes | RadialGradientAttributes,
  chroma: ChromaAttributes,
  colors: InputColor[],
  output: OutputColor[],
};

export type Preset = {
  name: string,
  value: Gradient[],
};

export type BlendModeObject = {
  id: string,
  mode: BlendMode,
};

export type BlendMode =
  'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity'