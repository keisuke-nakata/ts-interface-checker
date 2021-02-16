/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "../../lib/types";
// tslint:disable:object-literal-key-quotes

/*
interface SquareConfig {
  color: string;
  width?: number;
  [propName: string]: any;
}

interface IndexSignatures {
  data: {[index: number]: number[]};
}
*/

export const SquareConfig = t.iface([], {
  "color": "string",
  "width": t.opt("number"),
  [t.indexKey]: "any",
});

export const IndexSignatures = t.iface([], {
  "data": t.iface([], {
    [t.indexKey]: t.array("number"),
  }),
});

const exportedTypeSuite: t.ITypeSuite = {
  SquareConfig,
  IndexSignatures,
};
export default exportedTypeSuite;
