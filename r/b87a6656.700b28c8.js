(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{185:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(47),a=t(207),i=(t(0),t(208)),o=t(210),d={id:"node",title:"Node",sidebar_label:"Node"},c={id:"api/node",title:"Node",description:"Reference",source:"@site/docs/api/Node.md",permalink:"/r/docs/next/api/node",version:"next",sidebar_label:"Node",sidebar:"docs",previous:{title:"EditorState",permalink:"/r/docs/next/api/editor-state"},next:{title:"UserComponent",permalink:"/r/docs/next/api/user-component"}},l=[{value:"Reference",id:"reference",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Basics",id:"basics",children:[]},{value:"Child Nodes",id:"child-nodes",children:[]},{value:"Linked nodes",id:"linked-nodes",children:[]},{value:"Nodes with Custom properties",id:"nodes-with-custom-properties",children:[]}]}],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(o.b,{type:"type",mdxType:"Badge"}),Object(i.b)("h2",{id:"reference"},"Reference"),Object(i.b)("h3",{id:"properties"},"Properties"),Object(i.b)(o.a,{items:[["id","NodeId","A randomly generated unique id"],["data","Object",[["props","Record<String, any>","The current props for the user element"],["type","React.ElementType","The type of User Element"],["name","String","Name of the User Element"],["displayName","String","By default, it will be set to the same value as 'name'. But User Components have the ability to opt for a more user-friendly name by setting the craft.name property"],["isCanvas","boolean","True if the current Node is a Canvas Node"],["parent","NodeId","The parent Node's id"],["index","number","Position of current Node in its parent"],["nodes","NodeId[]","The id of the child Nodes"],["hidden","boolean"],["custom","Record<String, any>","Custom properties stored in the Node"],["linkedNodes","Record<String, NodeId>","A map of Nodes defined inside the User Component. Only applicable if the current Node's User Element is a Component which contains &lt;Element /&gt; inside its render"]]],["events","Object",[["selected","boolean","Is true if the user element is clicked"],["hovered","boolean","Is true if the user element is being hovered"],["dragged","boolean","Is true if the user element is being dragged"]]],["dom","HTMLElement","The DOM of the current Node's User Element. For User Components, this is defined by the `connect` connector"],["related","Record<String, React.ElementType>","A map of React Components that shares the current Node context"],["rules","Object",[["canDrag","(currentNode: Node) => boolean","Specifies if the current Node can be dragged. Applicable only if the current Node is a direct child of a Canvas Node"],["canMoveIn","(incomingNode: Node, currentNode: Node) => boolean","Specifies if an incoming Node can be dropped in the current Node. Applicable only if the current Node is a Canvas Node"],["canMoveOut","(outgoingNode: Node, currentNode: Node) => boolean","Specifies if a child Node can be dragged out of the current Node. Applicable only if the current Node is a Canvas Node"]]]],mdxType:"API"}),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basics"},"Basics"),Object(i.b)("h4",{id:"simple-elements"},"Simple elements"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'// Example\n<div style={{background: "#eee"}}>Hello</h2>\n\n"node-a": {\n  id: "node-a",\n  data: {\n    type: "div",\n    props: {\n      style: {{\n        background: "#eee",\n      }}\n      children: "Hello"\n    },\n    name: "div",\n    displayName: "div",\n    isCanvas: false\n  }\n}\n')),Object(i.b)("h4",{id:"user-component"},"User Component"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'// Definition\nconst Container = () => {}\nContainer.craft = {\n  name: "SimpleContainer"\n};\n\n\n// Example\n<Container bg="#fff" />\n\n"node-b": {\n  id: "node-b",\n  data: {\n    type: Container,\n    props: {\n      bg: "#fff"\n    },\n    name: "Container",\n    displayName: "SimpleContainer",\n    isCanvas: false\n  }\n}\n')),Object(i.b)("h3",{id:"child-nodes"},"Child Nodes"),Object(i.b)("p",null,"Nodes that are referenced in the parent Node's ",Object(i.b)("inlineCode",{parentName:"p"},"data.nodes")," property. These nodes are rendered in the parent User Component's ",Object(i.b)("inlineCode",{parentName:"p"},"children")," prop"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'// Example\n<Container bg="#fff">\n  // highlight-next-line\n  <h2>Hello</h2>\n</Container>\n\n"node-a": {\n  id: "node-a",\n  data: {\n    ...\n    type: Container,\n    props: {...},\n    // highlight-next-line\n    nodes: ["node-b"]\n  }\n}\n\n"node-b": {\n  id: "node-b",\n  data: {\n    type: "h2,\n    props: {...},\n    // highlight-next-line\n    parent: "node-a"\n  }\n}\n')),Object(i.b)("h3",{id:"linked-nodes"},"Linked nodes"),Object(i.b)("p",null,"Nodes that are linked to a parent Node via an arbitary ",Object(i.b)("inlineCode",{parentName:"p"},"id")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'// Definition\nconst TextEditable = () => {};\n\nconst Container = () => {\n  return (\n    <div>\n      // highlight-next-line\n      <Element id="header" is={TextEditable} text="Header" />\n    </div>\n  )\n}\n\n// Example\n<Container bg="#fff" />\n\n"node-a": {\n  id: "node-a",\n  data: {\n    type: Container,\n    props: {...},\n    // highlight-next-line\n    linkedNodes: {\n      // highlight-next-line\n      "header": "node-b"\n      // highlight-next-line\n    }\n  }\n}\n\n"node-b": {\n  id: "node-b",\n  data: {\n    type: TextEditable,\n    props: {...},\n    // highlight-next-line\n    parent: "node-a"\n  }\n}\n')),Object(i.b)("h3",{id:"nodes-with-custom-properties"},"Nodes with Custom properties"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'// Definition\nconst Container = () => {...}\nContainer.craft = {\n  custom: { // default custom values\n    toSaveInDatabase: false\n  }\n};\n\n// Example\n<Element is={Container} bg="#fff" custom={{ toSaveInDatabase: true}} />\n\n"node-b": {\n  id: "node-b",\n  data: {\n    ...\n    custom: {\n      toSaveInDatabase: true,\n      style: {{\n        display: "flex"\n      }}\n    }\n  }\n}\n')))}p.isMDXComponent=!0},207:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},208:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return t?a.a.createElement(m,d(d({ref:n},l),{},{components:t})):a.a.createElement(m,d({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},209:function(e,n,t){"use strict";var r=t(0),a=t(48);n.a=function(){return Object(r.useContext)(a.a)}},210:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=function(e){var n=e.item,t=n[0],r=n.length>1&&"string"==typeof n[1]&&n[1],i=3==n.length?"string"==typeof n[2]&&n[2]:4==n.length&&"string"==typeof n[3]&&n[3],d=n.length>1&&Array.isArray(n[n.length-1])&&n[n.length-1];return a.a.createElement("li",{className:"api-item"},a.a.createElement("div",null,t&&a.a.createElement("code",{className:"api-title"},t),r&&a.a.createElement("strong",{className:"api-type"},r)),i&&a.a.createElement("div",{className:"api-description",dangerouslySetInnerHTML:{__html:i}}),d&&a.a.createElement(o,{items:d}))},o=function(e){var n=e.items;return a.a.createElement("ul",null,n&&n.map((function(e,n){return a.a.createElement(i,{item:e,key:n})})))},d=function(e){var n,t=e.type,r=e.title,i=void 0===r||r,o=e.noMargin,d=void 0===o||o;switch(t){case"hoc":n="Higher-Order Component";break;default:n=t[0].toUpperCase()+t.substring(1)}return a.a.createElement("div",{className:"badge-wrapper"},a.a.createElement("span",{className:"badge badge-"+t+" "+(i?"badge-title":"")+" "+(d?"badge-no-margin":"")},n))},c=t(209),l=function(e){var n=e.img,t=Object(c.a)().siteConfig.baseUrl;return a.a.createElement("div",{className:"img-wrapper"},a.a.createElement("div",null,a.a.createElement("header",null,a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement("img",{src:t+"img/"+n})))};t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return d})),t.d(n,"b",(function(){})),t.d(n,"c",(function(){return l}))}}]);