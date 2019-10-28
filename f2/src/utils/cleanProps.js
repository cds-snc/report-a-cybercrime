export const cleanProps = prop => {
  if (!styledSystemProps.includes(prop) && prop !== 'as') return true
  return false
}

export const styledSystemProps = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'color',
  'bg',
  'backgroundColor',
  'width',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'textAlign',
  'fontStyle',
  'letterSpacing',
  'display',
  'maxWidth',
  'minWidth',
  'height',
  'minHeight',
  'maxHeight',
  'size',
  'verticalAlign',
  'alignItems',
  'alignContent',
  'justifyItems',
  'justifyContent',
  'flexWrap',
  'flexBasis',
  'flexDirection',
  'flex',
  'justifySelf',
  'alignSelf',
  'order',
  'gridGap',
  'gridColumnGap',
  'gridRowGap',
  'gridColumn',
  'gridRow',
  'gridAutoFlow',
  'gridAutoColumns',
  'gridAutoRows',
  'gridTemplateColumns',
  'gridTemplateRows',
  'gridTemplateAreas',
  'gridArea',
  'border',
  'borderWidth',
  'borderStyle',
  'borderColor',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'borderRadius',
  'borders',
  'boxShadow',
  'opacity',
  'overflow',
  'background',
  'backgroundImage',
  'backgroundSize',
  'backgroundPosition',
  'backgroundRepeat',
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
  'buttons',
  'textStyles',
  'colorStyles',
  'colors',
]
