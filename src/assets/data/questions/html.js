const html = [
  {
    topic: 'Difference b/w HTML 4 and HTML5',
    points: [
      'Introduced new semantic elements like <header>, <footer>, <section>, and <article> for improved structure.',
      'Enhances multimedia capabilities with native support for audio and video elements.',
      'Provides the localStorage API, allowing web applications to store data locally on the user’s device.',
      'Enables websites to access a user’s geographical location.',
      'Uses SQL database to store data offline.',
    ],
  },
  {
    topic: 'diff b/w div and span',
    points: [
      '<div> — Block-level element | <span> — Inline-level element',
      'div starts on a new line and takes up the full width available. | span appears inline with other content and only occupies the necessary space.',
      'div For larger sections of content or layout blocks. | span For styling parts of text or small inline elements.',
    ],
  },
  {
    topic: 'purpose of using alt in image tag in html',
    points: [
      'Shows text when the image can’t be displayed (e.g., broken link or slow connection).',
    ],
  },
  {
    topic: 'how to embed a video in html',
    points: ['To embed a video in HTML, you use the <video> tag. '],
  },
  {
    topic: 'what else we use iframe for?',
    points: [
      'Embed Another Web Page - You can display another website directly inside your page.',
      'Embed YouTube or Other Videos - A common use case! YouTube provides iframe embed code.',
      'Embed Google Maps - Useful for showing locations on your website.',
      'Embed PDFs or Documents - ',
      'Load Widgets or Tools - For example: calendars, forms, live chats, or stock tickers from third-party services.',
      'Be cautious with iframes — they can pose security risks (like clickjacking) if you’re loading unknown content. Use attributes like: sandbox, allow, referrerpolicy',
    ],
  },
  {
    topic: 'what are the semantic element we have in html',
    points: [
      'Semantic elements in HTML are tags that clearly describe their meaning — both to the browser and to developers. They make your code more readable, accessible, and SEO-friendly.',
      '<header> - Intro or navigation section of a page or section',
      '<nav> - Contains navigation links',
      '<main> - Main content of the document (only one per page)',
      '<section> - Thematic grouping of content',
    ],
  },
  {
    topic: 'Semantic tags multiple usage, nested?',
    points: [
      'Yes, semantic tags can be used multiple times and nested inside each other — in fact, that’s often how they’re meant to be used to reflect the structure of your content.',
      'You can have multiple <article>, <section>, or <header> tags on a single page — each representing different logical parts of your content.',
    ],
  },
  {
    topic: 'purpose of z-index',
    points: [
      'The z-index property in CSS controls the stacking order of elements along the z-axis — basically, it determines which elements appear on top of others when they overlap.',
    ],
  },
  {
    topic: 'how to achieve responsiveness',
    points: [
      'Achieving responsiveness in web design means making your layout look good and function well on all screen sizes — from phones to desktops.',
      'hr::',
      'Use a Responsive Meta Tag - Add this to your <head> so the page scales correctly on mobile: <meta name="viewport" content="width=device-width, initial-scale=1.0">',
      'Use Relative Units Instead of Fixed Units. - fixed unit (px), better alternative (em, rem, %, vw, vh)',
      'Use CSS Media Queries - Change styles based on screen size:',
      `code:: 
      @media (min-width: 768px) {
        body {
          font-size: 18px;
        }
      }

            /* Mobile phones */
      @media (max-width: 480px) {
        body {
          background: lightblue;
        }
      }

      /* Tablets */
      @media (min-width: 768px) and (max-width: 991px) {
        body {
          background: peachpuff;
        }
      }

      /* Desktops */
      @media (min-width: 1280px) {
        body {
          background: lightgreen;
        }
      }

      Use mobile-first design: start styling for small screens, then layer in styles for bigger ones.
      
      `,
      'Use Flexbox and Grid Layouts - They adapt better than floats or fixed positioning.',
    ],
  },
  {
    topic: 'pixels for devices in responsive',
    points: [
      'Mobile (portrait) - max-width: 480px',
      'Mobile (landscape)  - max-width: 767px',
      'Tablet (portrait) - min-width: 768px',
      'Tablet (landscape) - min-width: 992px',
      'Small laptop - min-width: 1024px',
      'Desktop - min-width: 1280px',
    ],
  },
  {
    topic: 'diff b/w position relative and absolute',
    points: [
      'relative : keeps the element in the document flow, but lets you shift it from its original position using top, left, right, or bottom.',
      'absolute : removes the element from the normal flow, and positions it relative to the nearest ancestor with a position other than static — often a relative parent or the body.',
      'hr::',
      'relative is useful when you want to nudge something slightly without affecting other elements, while absolute is useful for layering elements like tooltips, dropdowns, or modals where exact placement is needed',
      'relative is useful when you want to nudge something slightly without affecting other elements, while absolute is useful for layering elements like tooltips, dropdowns, or modals where exact placement is needed',
      'hr::',
      '“For example, a dropdown menu might be absolutely positioned inside a relatively positioned nav bar — so it appears exactly below a button.”',
    ],
  },
  {
    topic: 'what about fixed position',
    points: [
      'position: fixed removes the element from the normal flow (like absolute), but it positions the element relative to the browser window, not the parent.',
      'That means the element stays in place even when you scroll the page.',
      'hr::',
      'Use-case Examples: Sticky headers or navigation bars',
      'Back-to-top buttons',
      'Floating chat buttons',
      'Notification popups',
    ],
  },
  {
    topic: 'New HTML APIs',
    points: [
      'Canvas, Drag&Drop, WebStorage, Geo Location, File, media',
      'Web Workers',
      'h:: Fetch API',
      'Purpose: Provides a modern and flexible way to make HTTP requests (replacing the older XMLHttpRequest).',
      'Usage: Fetch data from a server asynchronously (for example, API calls, loading dynamic content).',
      'hr::',
      'h:: Web Storage API',
      'Purpose: This includes both LocalStorage and SessionStorage and allows data storage directly in the browser (no need for cookies).',
    ],
  },
  {
    topic: 'List Inline and block level elements',
    points: [
      'B: <div><main><hr><footer><form>',
      'I: <a><i><label><input><textarea><span>',
    ],
  },
  {
    topic: 'Can we use DIV element inside span tags?',
    points: [''],
  },
  {
    topic: 'Local storage vs Session storage',
    points: [''],
  },
  {
    topic: 'Meta tags',
    points: [
      'Typically used to specify character set, page description, keywords, author of the document, and viewport settings.',
    ],
  },
  {
    topic: 'View Port',
    points: ["user's visible area of a web page"],
  },
  {
    topic: 'SVG vs Canvas',
    points: [
      'SVG has better scalability.SVG is vector based and composed of shapes/Canvas has poor scalability.Canvas is raster based and composed of pixel',
    ],
  },
  {
    topic:
      'Can we display a web page inside a web page or Is nesting of webpages possible',
    points: ['Yes, using iframe we can achieve it'],
  },
  {
    topic: 'Cell Padding different from Cell Spacing',
    points: [
      'padding- between the text/ content of the cell; spacing- between two consecutive cells',
    ],
  },
  {
    topic: 'Table',
    points: [
      'club two or more rows or columns into a single row or column',
      'attributes “rowspan” and “colspan” to make a cell span to multiple rows and columns',
    ],
  },
  {
    topic: 'position an HTML element',
    points: [
      'static: element is positioned according to the normal flow of the document.',
      'absolute: element is positioned relative to its parent element and final position is determined by the values of left, right, top, bottom.',
      'fixed: similar to absolute except here the elements are positioned relative to the <html> element.',
      'relative: element is positioned according to the normal flow of the document and positioned relative to its original/ normal position.',
      'sticky: ',
    ],
  },
  {
    topic: 'Box model & explain',
    points: ['margins, borders, padding, and the actual content'],
  },
  {
    topic: 'Visibility: hidden vs Display: none',
    points: [''],
  },
  {
    topic: 'CSS3 feature',
    points: ['Media Queries, Text Effects, Animations'],
  },
  {
    topic: 'Which selector is faster ID or Class',
    points: ['ID is faster than class'],
  },
  {
    topic: 'Difficulties faced in CSS',
    points: ['cross-browser compatibility'],
  },
  {
    topic: 'CSS browser specific prefixes',
    points: [
      '-moz-(Firefox), -webkit(Android, safari, chrome, ios), -o-(Opera), -ms-(IE)',
    ],
  },
  {
    topic: 'Shorthand property',
    points: [
      'border-width, border-style, border-color (border: 5px solid red)',
    ],
  },
  {
    topic: 'z-index',
    points: ['stack order of an element'],
  },
  {
    topic: 'CSS apply precedence',
    points: ['1st Inline, 2nd ID, 3rd class'],
  },
  {
    topic: 'Three Ways to Insert CSS',
    points: [
      'External CSS, Internal CSS, Inline CSS',
      '<link href="myCSSfile.css" rel="stylesheet" type="text/css">',
      '<style type="text/css" media="all">@import "myCSSfile.css";</style>',
    ],
  },
  {
    topic: 'CSS Layout - Block vs Inline vs Inline-block',
    points: [''],
  },
  {
    topic: 'Flexbox',
    points: [''],
  },
  {
    topic: 'ellipsis usage',
    points: [''],
  },
  {
    topic: 'Box-sizing: border-box',
    points: ['Includes padding and border with in specified height and width'],
  },
  {
    topic: 'Media queries',
    points: [
      '< than 600 -> @media only screen and (max-width: 600px)',
      '600 > than -> @media only screen and (min-width: 600px)',
      'Between -> @media (max-width:900px) and (min-width:800px)',
    ],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
];

export default html;
