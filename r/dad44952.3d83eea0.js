(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(47),a=n(207),o=(n(0),n(208)),i=n(210),c={id:"node",title:"Node",sidebar_label:"Node"},d={id:"version-0.1.0-beta.6/api/node",title:"Node",description:"Reference",source:"@site/versioned_docs/version-0.1.0-beta.6/api/Node.md",permalink:"/r/docs/0.1.0-beta.6/api/node",version:"0.1.0-beta.6",sidebar_label:"Node",sidebar:"version-0.1.0-beta.6/docs",previous:{title:"EditorState",permalink:"/r/docs/0.1.0-beta.6/api/editor-state"},next:{title:"UserComponent",permalink:"/r/docs/0.1.0-beta.6/api/user-component"}},l=[{value:"Reference",id:"reference",children:[{value:"Properties",id:"properties",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.b,{type:"type",mdxType:"Badge"}),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)(i.a,{items:[["id","NodeId","A randomly generated unique id"],["data","Object",[["props","Record<String, any>","The current props for the user element"],["type","React.ElementType","The type of User Element"],["name","String","Name of the User Element"],["displayName","String","By default, it will be set to the same value as 'name'. But User Components have the ability to opt for a more user-friendly name"],["isCanvas","boolean","True if the current Node is a Canvas Node"],["parent","NodeId","The parent Node's id"],["index","number","Position of current Node in its parent"],["nodes","NodeId[]","The id of the child Nodes; only applicable if the current Node is a Canvas"],["hidden","boolean"],["custom","Record<String, any>","Custom properties stored in the Node"],["childCanvas","Record<String, NodeId>","A map of Canvas Nodes defined inside the User Component. Only applicable if the current Node's User Element is a Component which contains &lt;Canvas /&gt; inside its render"]]],["events","Object",[["selected","boolean","Is true if the user element is clicked"],["hovered","boolean","Is true if the user element is being hovered"],["dragged","boolean","Is true if the user element is being dragged"]]],["dom","HTMLElement","The DOM of the current Node's User Element. For User Components, this is defined by the `connect` connector"],["related","Record<String, React.ElementType>","A map of React Components that shares the current Node context"],["rules","Object",[["canDrag","(currentNode: Node) => boolean","Specifies if the current Node can be dragged. Applicable only if the current Node is a direct child of a Canvas Node"],["canMoveIn","(incomingNode: Node, currentNode: Node) => boolean","Specifies if an incoming Node can be dropped in the current Node. Applicable only if the current Node is a Canvas Node"],["canMoveOut","(outgoingNode: Node, currentNode: Node) => boolean","Specifies if a child Node can be dragged out of the current Node. Applicable only if the current Node is a Canvas Node"]]]],mdxType:"API"}))}u.isMDXComponent=!0},207:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},209:function(e,t,n){"use strict";var r=n(0),a=n(48);t.a=function(){return Object(r.useContext)(a.a)}},210:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=function(e){var t=e.item,n=t[0],r=t.length>1&&"string"==typeof t[1]&&t[1],o=3==t.length?"string"==typeof t[2]&&t[2]:4==t.length&&"string"==typeof t[3]&&t[3],c=t.length>1&&Array.isArray(t[t.length-1])&&t[t.length-1];return a.a.createElement("li",{className:"api-item"},a.a.createElement("div",null,n&&a.a.createElement("code",{className:"api-title"},n),r&&a.a.createElement("strong",{className:"api-type"},r)),o&&a.a.createElement("div",{className:"api-description",dangerouslySetInnerHTML:{__html:o}}),c&&a.a.createElement(i,{items:c}))},i=function(e){var t=e.items;return a.a.createElement("ul",null,t&&t.map((function(e,t){return a.a.createElement(o,{item:e,key:t})})))},c=function(e){var t,n=e.type,r=e.title,o=void 0===r||r,i=e.noMargin,c=void 0===i||i;switch(n){case"hoc":t="Higher-Order Component";break;default:t=n[0].toUpperCase()+n.substring(1)}return a.a.createElement("div",{className:"badge-wrapper"},a.a.createElement("span",{className:"badge badge-"+n+" "+(o?"badge-title":"")+" "+(c?"badge-no-margin":"")},t))},d=n(209),l=function(e){var t=e.img,n=Object(d.a)().siteConfig.baseUrl;return a.a.createElement("div",{className:"img-wrapper"},a.a.createElement("div",null,a.a.createElement("header",null,a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement("img",{src:n+"img/"+t})))};n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"b",(function(){})),n.d(t,"c",(function(){return l}))}}]);