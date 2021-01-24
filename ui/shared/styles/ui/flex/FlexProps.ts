interface JustifyContent {
  justifyContent?: string;
  justifyCenter?: boolean;
  justifyBetween?: boolean;
  justifyEnd?: boolean;
}

interface AlignItems {
  alignItems?: string;
  alignCenter?: boolean;
  alignEnd?: boolean;
}

interface Wrap {
  noWrap?: boolean;
}

export interface FlexProps extends JustifyContent, AlignItems, Wrap {
}
