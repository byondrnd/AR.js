// TODO: continue and replace 'any'-s to exact types.
import { Matrix4 } from "three";

export class ARClickability {
  constructor(sourceElement: any);

  computeIntersects: (DOMEvent: any, objects: any) => any;
  onResize: () => any;
  update: () => any;
}

export class ArBaseControls {
  constructor(object3d: any);

  addEventListener: (type: any, listener: any) => {};
  hasEventListener: (type: any, listener: any) => {};
  removeEventListener: (type: any, listener: any) => {};
  dispatchEvent: (event: any) => {};
  name: () => {};
  update: () => {};
}

export class ArMarkerCloak {
  constructor(videoTexture: any);

  fragmentShader: any;
  markerSpaceShaderFunction: any;
  vertexShader: any;
}

export class ArMarkerControls {
  constructor(context: any, object3d: any, parameters: any);
}

export class ArMarkerHelper {
  constructor(markerControls: any);
}

export class ArMultiMakersLearning {
  constructor(arToolkitContext: any, subMarkersControls: any);
}

export class ArMultiMarkerControls {
  constructor(arToolkitContext: any, object3d: any, parameters: any);
}

export const ArMultiMarkerUtils: any;

export class ArSmoothedControls {
  constructor(object3d: any, parameters: any);
}

export class ArToolkitContext {
  constructor(parameters: any);
  init: (parameters: any) => {};
  update: (parameters: any) => {};
  getProjectionMatrix: () => Matrix4;
  arController: any;
  static baseURL: string;
}

export class ArToolkitProfile {
  constructor();
}

export class ArToolkitSource {
  constructor(parameters: any);
  init: (parameters: any) => {};
  onResize: () => {};
  copySizeTo: (parameters: any) => {};
  ready: boolean;
  domElement: any;
}

export class ArVideoInWebgl {
  constructor(videoTexture: any);
}



export as namespace THREEx;