const row = {
  flexDirection: 'row',
};

const col = {
  flexDirection: 'column',
};

const rowAlignItems = {
  ...row,
  alignItems: 'center',
};

const justifyContentCenter = {
  justifyContent: 'center',
};

const rowJustifyContentCenter = {
  ...row,
  justifyContent: 'center',
};

const colJustifyContentSpaceBetween = {
  ...col,
  justifyContent: 'space-between',
};

const rowSpaceBetween = {
  ...row,
  justifyContent: 'space-between',
};

const rowSpaceBetweenAlignItems = {
  ...rowAlignItems,
  ...rowSpaceBetween,
};

const rowAlignItemsFlexStart = {
  ...row,
  alignItems: 'flex-start',
};

const rowCenterContent = {
  ...rowJustifyContentCenter,
  alignItems: 'center',
};

const colAlignItems = {
  ...col,
  alignItems: 'center',
};

const colCenterContent = {
  justifyContent: 'center',
  alignItems: 'center',
};


const styles = {
  row,
  rowAlignItems,
  rowJustifyContentCenter,
  rowAlignItemsFlexStart,
  rowSpaceBetween,
  rowSpaceBetweenAlignItems,
  rowCenterContent,
  colJustifyContentSpaceBetween,
  colAlignItems,
  colCenterContent,
  justifyContentCenter,
};

const Common = {
  styles,
};

export default Common;
