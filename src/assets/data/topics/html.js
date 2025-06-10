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
      'h:: descendent combinator (space)',
      'Selects all matching descendants of an element',
      `code::
      div p {
        /* Selects ALL <p> elements inside <div> at any nesting level */
        color: blue;
      }
      `,
      'h:: child combinator (>)',
      'Selects only direct children (one level down)',
      `code::
      ul > li {
        /* Selects only <li> elements that are DIRECT children of <ul> */
        border-bottom: 1px solid #ccc;
      }
      `,
      'h:: adjustent/next sibiling combinator (+)',
      'Selects the immediately following sibling',
      `code::
      h2 + p {
        /* Selects only the FIRST <p> that comes right after an <h2> */
        margin-top: 0;
      }
      `,
      'h:: general/subsequent sibiling combinator (~)',
      'Selects all following siblings',
      `code::
      h2 ~ p {
        /* Selects ALL <p> elements that come after an <h2> (same parent) */
        color: #666;
      }
      `
    ],
  },
  {
    topic: 'specificity',
    points: [
      'Specificity determines which CSS rules are applied when multiple selectors target the same element.',
      'h:: Specificity Hierarchy (From Highest to Lowest)',
      'Inline styles (1000 points) - Example: <div style="color: red;">',
      'ID selectors (100 points each) - Example: #header',
      'Class/attribute/pseudo-class selectors (10 points each) - Examples: .nav, [type="text"], :hover',
      'Element/pseudo-element selectors (1 point each) - Examples: div, ::before',
      'Universal selector and combinators (0 points) - Examples: *, >, +, ~',
      'h:: Calculating Specificity',
      'Specificity is represented as a 4-part value: (a, b, c, d)',
      'a: Inline styles (1 or 0)',
      'b: Number of ID selectors',
      'c: Number of class/attribute/pseudo-class selectors',
      'd: Number of element/pseudo-element selectors',
      'Examples:',
      `code::
      #nav .item:hover {}    /* 0, 1, 2, 0 → specificity (0,1,2,0) */
      div#header ul li a {}   /* 0, 1, 0, 4 → specificity (0,1,0,4) */
      body .content p {}      /* 0, 0, 1, 2 → specificity (0,0,1,2) */
      `,
      'h:: Important Rules',
      '!important overrides all other declarations (avoid when possible)',
      `code::
      .warning { color: red !important; }
      `,
      'Source order matters when specificity is equal - last rule wins',
      `code::
      p { color: blue; }
      p { color: green; } /* This one wins */
      `,
      'More specific selectors override less specific ones regardless of order',
      `code::
      .intro { color: black; } /* 0,0,1,0 */
      p { color: blue; }       /* 0,0,0,1 → .intro wins */
      `,
      'h:: examples',
      `code::
      Example 1: Basic Specificity

      header#main .nav-item.active { /* 0,1,2,1 */ }
      #main-nav .nav-item {         /* 0,1,1,0 → First rule wins */ }

      Example 2: Equal Specificity

      .sidebar .widget { /* 0,0,2,0 */ }
      .content .panel {  /* 0,0,2,0 → Last one wins if both apply */ }

      Example 3: Specificity Battle

      div#sidebar ul li a { /* 0,1,0,4 */ }
      #sidebar .menu-link { /* 0,1,1,0 → This wins (higher in column b) */ }

      COMPARING: (0,0,1,0) vs (0,0,0,1)

      Let's break it down:

      Compare a values: 0 vs 0 → equal
      Compare b values: 0 vs 0 → equal
      Compare c values: 1 vs 0 → 1 is greater than 0
      At this point, the comparison stops because we've found a difference. The selector with (0,0,1,0) wins over (0,0,0,1).
      `
    ],
  },
  {
    topic: 'units',
    points: [
      'CSS offers various units for specifying lengths, sizes, and distances.',
      'h:: Absolute Units (Fixed Size)',
      'Pixels (px):',
      'Most commonly used absolute unit',
      '1px = 1/96th of 1 inch',
      'Not ideal for responsive design but precise for borders/shadows',
      'h:: Relative Units (Scalable)',
      'Font-Relative Units:',
      'em - Relative to parent element\'s font size',
      'rem - Relative to root (<html>) font size (usually 16px)',
      `code::
      html { font-size: 16px; }
      .container { font-size: 1.25rem; } /* 20px */
      .text { margin: 2em; } /* 40px (2 x 20px) */
      `,
      'Viewport-Relative Units:',
      'vw - 1% of viewport width',
      'vh - 1% of viewport height',
      'vmin - 1% of viewport\'s smaller dimension',
      'vmax - 1% of viewport\'s larger dimension',
      `code::
      .header {
        height: 10vh; /* 10% of viewport height */
        width: 80vw;  /* 80% of viewport width */
      }
      `,
      'Percentage (%):',
      'Relative to parent element\'s same property',
      'Common for widths and heights',
      `code::
      .parent { width: 500px; }
      .child { width: 50%; } /* 250px */
      `,
      'other than this we have Resolution Units, Time Units, Angle Units, Flexible Units...',
      'h:: Best Practices',
      'Use rem for font sizes - Ensures accessibility and consistency',
      'Use viewport units sparingly - Can cause accessibility issues',
      'Combine units for responsive layouts:',
      `code::
      .container {
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
      }
      `,
      'Prefer em for media queries - More consistent across browsers',
      'Use fr units for grid layouts - Creates flexible, responsive grids'
    ],
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
    points: [
      'Pseudo-classes select elements based on their state or position in the document tree.',
      'Purpose:  Selects state/position',
      'Syntax: Single colon',
      'Can create content:	No',
      'Multiple per selector:	Yes',
      'hr::',
      'State-based:',
      `code::
      a:hover { color: red; }        /* Mouse over */
      input:focus { border-color: blue; } /* Focused */
      button:active { transform: scale(0.98); } /* Being clicked */
      `,
      'Structural:',
      `code::
      li:first-child { font-weight: bold; }  /* First child */
      tr:nth-child(odd) { background: #f5f5f5; } /* Alternating rows */
      p:last-of-type { margin-bottom: 0; }
      `,
      'Form-related:',
      `code::
      input:checked { background: green; }
      input:disabled { opacity: 0.5; }
      input:required { border-left: 3px solid red; }
      `,
      'Negation:',
      `code::
      div:not(.special) { opacity: 0.8; }
      `
    ],
  },
  {
    topic: 'pesudo element',
    points: [
      'Pseudo-elements target specific parts of an element or create virtual elements.',
      'Purpose:  Styles specific parts',
      'Syntax: Double colon (modern)',
      'Can create content:	Yes (with content)',
      'Multiple per selector:	Only one per selector',
      'hr::',
      'Content generation:',
      `code::
      p::before { 
        content: "→ ";
        color: green;
      }
      blockquote::after {
        content: '"';
        font-size: 2em;
      }
      `,
      'Text/fragment selection:',
      `code::
      ::selection {
        background: yellow;
        color: black;
      }
      p::first-letter { font-size: 200%; }
      p::first-line { font-weight: bold; }
      `,
      'Input placeholder styling:',
      `code::
      input::placeholder { color: #999; }
      `,
      'List markers:',
      `code::
      li::marker { color: red; }
      `
    ],
  },
  {
    topic: 'variables',
    points: [
      'CSS variables, officially called "CSS Custom Properties," ',
      'it allows you to store and reuse values throughout your stylesheets. ',
      'its powerful for maintaining consistent designs and enabling theme switching.',
      `code::
      Defining Variables:
      :root {
        --primary-color: #3498db;
        --spacing-unit: 16px;
        --max-width: 1200px;
      }

      Using Variables: 
      .button {
        background-color: var(--primary-color);
        padding: var(--spacing-unit);
        max-width: var(--max-width);
      }


      `,
      'h:: Key Features',
      'Scoping: Variables can be defined at different levels',
      `code::
      .dark-theme {
        --bg-color: #222;
        --text-color: #fff;
      }
      `,
      'Fallback Values: Provide defaults if variable is undefined',
      `code::
      .element {
        color: var(--text-color, black); /* Falls back to black */
      }
      `,
      'Dynamic Updates: Can be changed with JavaScript',
      `code::
      document.documentElement.style.setProperty('--primary-color', 'red');
      `,
      'Math Operations: Use with calc()',
      `code::
      .container {
        padding: calc(var(--spacing-unit) * 2);
      }
      `
    ],
  },
  {
    topic: 'media query',
    points: [
      'Media queries are a fundamental CSS feature that enable responsive web design by applying different styles based on device characteristics. ',
      `code::
      Viewport/Window Size

      /* Mobile-first approach */
      @media (min-width: 576px) { /* Small devices (landscape phones) */ }
      @media (min-width: 768px) { /* Medium devices (tablets) */ }
      @media (min-width: 992px) { /* Large devices (desktops) */ }
      @media (min-width: 1200px) { /* Extra large devices */ }

      /* Alternative max-width approach */
      @media (max-width: 575.98px) { /* Extra small devices */ }

      ----

      Device Characteristics

      /* Device orientation */
      @media (orientation: portrait) { /* Taller than wide */ }
      @media (orientation: landscape) { /* Wider than tall */ }

      /* Pixel density (retina displays) */
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { }

      /* Reduced motion preference */
      @media (prefers-reduced-motion: reduce) {
        * { animation: none !important; transition: none !important; }
      }

      /* Dark/light mode */
      @media (prefers-color-scheme: dark) {
        :root { --bg-color: #222; --text-color: #fff; }
      }
      `,
      'h:: Logical Operators',
      'Combine multiple conditions:',
      'and - All conditions must be true',
      ', (comma) - Any condition can be true (like OR)',
      'not - Negates the query',
      'only - Hides stylesheets from older browsers',
      'h:: Mobile-First vs Desktop-First',
      'Mobile-First (Recommended)',
      `code::
      /* Base styles (mobile) */
      body { font-size: 14px; }

      /* Larger screens */
      @media (min-width: 768px) {
        body { font-size: 16px; }
      }
      `,
      'Desktop-First',
      `code::
      /* Base styles (desktop) */
      body { font-size: 16px; }

      /* Smaller screens */
      @media (max-width: 767.98px) {
        body { font-size: 14px; }
      }
      `
    ],
  },
  {
    topic: 'position',
    points: [
      'CSS positioning allows you to control the layout and placement of elements on a web page',
      'h:: static (Default)', 
      'Elements follow the normal document flow',
      'Ignores top, right, bottom, left, and z-index properties',
      'Default positioning for all elements',

      'h::relative',
      'Element remains in normal(Original position) flow',
      'Can be offset from its normal position using top, right, bottom, left',
      'Creates a new stacking context',
      'Serves as positioning context for absolutely positioned children',
      
      'h:: absolute',
      'Removed from normal document flow',
      'Positioned relative to nearest positioned ancestor (non-static)',
      'If no positioned ancestor, uses document body',
      'Can overlap other elements',
     
      'Respects z-index',
      'h:: fixed',
      'Removed from normal flow',
      'Positioned relative to viewport (browser window)',
      'Stays in same place during scrolling',
      'Useful for headers, footers, modals',
    
      'h:: sticky',
      'Hybrid of relative and fixed positioning',
      'Initially behaves like relative',
      'Becomes fixed when scrolled to threshold',
      'Requires at least one positioning value (top, bottom, etc.)'
    ],
  },
  {
    topic: 'z-index',
    points: [
      'Only works on positioned elements (relative, absolute, fixed, sticky)',
      'Higher values appear in front of lower values',
      'Default z-index: auto (same as 0 but doesn\'t create new stacking context)',
      'hr::',
      'The z-index property in CSS controls the stacking order of elements along the z-axis — basically, it determines which elements appear on top of others when they overlap.'
    ],
  },
  {
    topic: 'box model',
    points: [
      'The CSS box model describes how every HTML element is structured as a rectangular box with several layers that determine its size and spacing.',
      'h:: The Box Model Components',
      'Every element consists of these layers (from inside out):',
      'Content Box - The actual content (text, images, etc.)',
      'Padding - Space between content and border',
      'Border - Line surrounding the padding',
      'Margin - Space between border and other elements'
    ],
  },
  {
    topic: 'box sizing',
    points: [
      'The box-sizing property fundamentally changes how browsers calculate the total size of HTML elements.',
      'It\'s one of the most important CSS properties for consistent layout control.',
      'The box-sizing property is essential for creating maintainable, predictable layouts in modern CSS.',
      'h:: Values and Behavior',
      '1. content-box (Default):',
      'Traditional box model',
      'width and height only include the content area',
      'Padding and border are added to the specified dimensions',
      `code::
      .box {
        box-sizing: content-box;
        width: 300px;
        padding: 20px;
        border: 5px solid black;
        /* Total width = 300 + 20 + 20 + 5 + 5 = 350px */
      }
      `,
      '2. border-box (Recommended):',
      'Modern, intuitive box model',
      'width and height include content, padding, and border',
      'The most commonly used value in modern web development',
      `code::
      .box {
        box-sizing: border-box;
        width: 300px;
        padding: 20px;
        border: 5px solid black;
        /* Total width remains 300px (content shrinks to 250px) */
      }
      `,
      'h:: advantages',
      'Predictable sizing: Specified width is the actual rendered width',
      'Easier math: No need to calculate padding/border adjustments',
      'Responsive design: Simplifies percentage-based layouts',
      'Consistency: Behaves like most design tools (Figma, Sketch, etc.)',
      'h:: Responsive Grid Columns',
      `code::
      .column {
        box-sizing: border-box;
        width: 33.33%;
        padding: 15px;
        /* Columns will maintain exact 1/3 width regardless of padding */
      }
      `,
      'h:: Form Elements',
      `code::
      input, textarea, select {
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        /* Inputs won't overflow their containers */
      }
      `,
      'h:: Nested Box Models',
      `code::
      .component {
        box-sizing: content-box; /* Outer component */
        width: 400px;
        padding: 20px;
      }
      
      .component-inner {
        box-sizing: border-box; /* Inner elements */
        width: 100%;
        padding: 10px;
      }
      `
    ],
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
