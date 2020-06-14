(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{187:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t(47),r=t(207),o=(t(0),t(208)),i={id:"nodes",title:"Nodes"},l={id:"concepts/nodes",title:"Nodes",description:"User Elements",source:"@site/docs/concepts/nodes.md",permalink:"/r/docs/next/concepts/nodes",version:"next",sidebar:"docs",previous:{title:"Acknowledgements",permalink:"/r/docs/next/acknowledgements"},next:{title:"User Components",permalink:"/r/docs/next/concepts/user-components"}},s=[{value:"User Elements",id:"user-elements",children:[]},{value:"Node",id:"node",children:[]},{value:"Canvas Node",id:"canvas-node",children:[]},{value:"Representing User Elements as Nodes",id:"representing-user-elements-as-nodes",children:[]}],c={rightToc:s};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"user-elements"},"User Elements"),Object(o.b)("p",null,"User Elements are React Elements which the end user will have the ability to manipulate. In other words, these are the elements which you will want your users to edit, drag and/or drop in your editor.  "),Object(o.b)("p",null,"Just like React Elements, these can be either simple HTML tags or React Components. We'll refer to User Elements which are React Components simply as ",Object(o.b)("em",{parentName:"p"},"User Components"),"."),Object(o.b)("h2",{id:"node"},"Node"),Object(o.b)("p",null,"Craft.js maintains an internal state comprised of objects called Nodes which represent and manage User Elements that are rendered in the editor. These Nodes contain information such as the element type, current props, DOM element, parent Node and so on. Hence, every User Element is rendered and managed by their corresponding Node."),Object(o.b)("h2",{id:"canvas-node"},"Canvas Node"),Object(o.b)("p",null,"A Canvas is a special type of Node which enables it's corresponding user element to be a droppable region, where its child Node's user element will be made draggable."),Object(o.b)("p",null,"In a nutshell:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A Canvas node defines a droppable region"),Object(o.b)("li",{parentName:"ul"},"A Node that is a child of a Canvas is draggable"),Object(o.b)("li",{parentName:"ul"},"A Canvas node itself is not draggable unless it is a child Node of another Canvas. ")),Object(o.b)("h2",{id:"representing-user-elements-as-nodes"},"Representing User Elements as Nodes"),Object(o.b)("p",null,"Let's take a look at how User Elements are actually represented as Nodes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<div style={{ background: "#333" }}> // A Node with the type div;\n  <h1>Hi</h1> // Node of the type h1; not draggable\n  <MyComp>Hey</MyComp> //  Node of the type MyComp; not draggable\n  <MyContainerComponent> // A Node with the type MyContainerComponent; not draggable\n    <h2>Second level</h2> // A Node with the type h2; not draggable! \n  </MyContainerComponent>\n</div>\n')),Object(o.b)("p",null,"In the above example, a Node is created for each React element. The top-level ",Object(o.b)("inlineCode",{parentName:"p"},"div")," has 3 child nodes and the ",Object(o.b)("inlineCode",{parentName:"p"},"MyContainerComponent")," Node has a ",Object(o.b)("inlineCode",{parentName:"p"},"h2")," child Node."),Object(o.b)("p",null,"By default, a non-Canvas Node is created. So, how do we actually create a Canvas node? For example, how do we make the top-level ",Object(o.b)("inlineCode",{parentName:"p"},"div")," into a Canvas Node so we could drag/drop it's children around? This is where the ",Object(o.b)("inlineCode",{parentName:"p"},"<Element />")," component becomes handy in manually defining Nodes."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{1}","{1}":!0}),'<Element is="div" style={{ background: "#333" }} canvas> // A Canvas Node with the type div;\n  <h1>Hi</h1> // Node of the type h1; draggable\n  <MyComp>Hey</MyComp> //  Node of the type MyComp; draggable\n  <MyContainerComponent> // A Node with the type MyContainerComponent; draggable\n    <h2>Second level</h2> // A Node with the type h2; not draggable! \n  </MyContainerComponent>\n</Element>\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"is")," prop specifies the type of User Element to create; it can be either a HTML tag or a User Component")),Object(o.b)("p",null,"In the above example, using the ",Object(o.b)("inlineCode",{parentName:"p"},"<Element />")," component with the ",Object(o.b)("inlineCode",{parentName:"p"},"canvas")," prop, we've created a Canvas node of the type ",Object(o.b)("inlineCode",{parentName:"p"},"div"),". Since our ",Object(o.b)("inlineCode",{parentName:"p"},"div")," element is now handled by a Canvas node, therefore it is now a droppable region. On the other hand, since ",Object(o.b)("inlineCode",{parentName:"p"},"h1"),", ",Object(o.b)("inlineCode",{parentName:"p"},"MyComp")," and ",Object(o.b)("inlineCode",{parentName:"p"},"MyContainerComp")," are child Nodes of a Canvas, they are now draggable. "),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<Element />")," component can also be used to configure other values of a Node, which is further detailed ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../api/Element"}),"here")))}d.isMDXComponent=!0},207:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return a}))},208:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),d=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,u=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return t?r.a.createElement(u,l(l({ref:n},c),{},{components:t})):r.a.createElement(u,l({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);