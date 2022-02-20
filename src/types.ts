export interface BaseNode {
  id: string;
  title: string;
}

export interface TypeNode extends BaseNode {
  description: string;
  image: string;
}

export interface FlowNode extends BaseNode {
  children: TypeNode[];
}
