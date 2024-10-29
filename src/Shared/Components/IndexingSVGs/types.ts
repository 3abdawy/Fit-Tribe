import {FunctionComponent, SVGAttributes} from 'react';

interface ExtendedSVGAttributes extends SVGAttributes<SVGElement> {
  testID?: string;
}
export type SVGType = FunctionComponent<ExtendedSVGAttributes>;

export interface SVGsType {
  [key: string]: SVGType;
}
