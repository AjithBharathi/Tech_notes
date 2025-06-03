const html = [
  {
    topic: 'why should use rem, em rather than px',
    points: ['use rem, em instead of px'],
  },
  {
    topic: 'css properties',
    points: ['object-fit'],
  },
  {
    topic: 'html semantic elements',
    points: [
      'dialog, main, header, strong, form, details, summary, meter',
      "in form element - we can add 'method' attribute",
      `code::
      <dialog open> (we can use open attribute to visible the invisible dialog)
        <form method="dialog"></form>
      </dialog> - (we can close the dialog box without using any extra js code with help of this attribute)
      `,
    ],
  },
  {
    topic: 'modern browsers new elements',
    points: [
      'dialog, meter, etc',
      "can achieve plugin designs now with 'standard browser feature' with help of new tags",
    ],
  },
  {
    topic: 'selectors',
    points: [],
  },
  {
    topic: 'combinators',
    points: [
      'descendent combinator (space)',
      'child combinator (>)',
      'adjustent/next sibiling combinator (+)',
      'general/subsequent sibiling combinator (~)',
    ],
  },
  {
    topic: 'specificity',
    points: [],
  },
  {
    topic: 'units',
    points: [],
  },
  {
    topic: 'Rule Order',
    points: [],
  },
  {
    topic: 'override',
    points: [],
  },
  {
    topic: 'pesudo class',
    points: [],
  },
  {
    topic: 'pesudo element',
    points: [],
  },
  {
    topic: 'variables',
    points: [],
  },
  {
    topic: 'media query',
    points: [],
  },
  {
    topic: 'position',
    points: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
  },
  {
    topic: 'z-index',
    points: [],
  },
  {
    topic: 'box model',
    points: [],
  },
  {
    topic: 'gradient',
    points: [],
  },
  {
    topic: 'transition',
    points: [],
  },
  {
    topic: 'animation',
    points: [],
  },
  {
    topic: 'box sizing',
    points: [
      'box-sizing controls how the total size of an element (width and height) is calculated, including padding and borders.',
      'content-box (default) - Total size = width + padding + border (padding and border add to the size)',
      'border-box - Total size = width (padding and border are inside the box)',
      'inherit - Inherits from the parent element',
      `code::
      ✅ content-box

      box-sizing: content-box;
      width: 200px; 
      padding: 20px; 
      border: 10px solid;

      🔸 The actual size = 200 + 20×2 + 10×2 = 260px.

      ✅ border-box

      box-sizing: border-box;
      width: 200px; 
      padding: 20px; 
      border: 10px solid;

      🔸 The actual size = 200px (includes padding and border).
      `
    ],
  },
  {
    topic: 'functions',
    points: [],
  },
  {
    topic: 'inheritance',
    points: [],
  },
  {
    topic: 'diff b/w @container and @media',
    points: [],
  },
  {
    topic: 'queries',
    points: [],
  },
  {
    topic: 'counter',
    points: [],
  },
];
export default html;
