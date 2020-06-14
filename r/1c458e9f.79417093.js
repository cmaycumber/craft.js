(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(47),o=n(207),a=(n(0),n(208)),i={id:"editor-components",title:"Interacting with the Editor"},c={id:"concepts/editor-components",title:"Interacting with the Editor",description:"Previously, we have looked at User Components and how to write them, but what about all the other components that are integral to our page editor like a Toolbar for users to edit components, or maybe a layers panel?",source:"@site/docs/concepts/editor-components.md",permalink:"/r/docs/next/concepts/editor-components",version:"next",sidebar:"docs",previous:{title:"User Components",permalink:"/r/docs/next/concepts/user-components"},next:{title:"Basic Tutorial",permalink:"/r/docs/next/guides/basic-tutorial"}},s=[{value:"Getting state information",id:"getting-state-information",children:[]},{value:"Connectors",id:"connectors",children:[]},{value:"Manipulating state",id:"manipulating-state",children:[]},{value:"Querying",id:"querying",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Previously, we have looked at User Components and how to write them, but what about all the other components that are integral to our page editor like a Toolbar for users to edit components, or maybe a layers panel?"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useEditor")," hook allows us to read and manipulate the entire editor's internal state. Essentially, this is similar to the ",Object(a.b)("inlineCode",{parentName:"p"},"useNode")," hook we have seen previously, except this deals with the entire editor rather than with a particular ",Object(a.b)("inlineCode",{parentName:"p"},"Node"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const { actions, connectors, ...collected } = useEditor((state) => {});\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: Unlike ",Object(a.b)("inlineCode",{parentName:"p"},"useNode")," which can be only used inside User Components, ",Object(a.b)("inlineCode",{parentName:"p"},"useEditor")," can be used anywhere within the Craft context, including User Components.")),Object(a.b)("h2",{id:"getting-state-information"},"Getting state information"),Object(a.b)("p",null,"Similar with the ",Object(a.b)("inlineCode",{parentName:"p"},"useNode"),", we can specify a collector function to the ",Object(a.b)("inlineCode",{parentName:"p"},"useEditor")," hook to retrieve information from the internal state. "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"const App = () => {\n  const { hoveredNodeName } = useEditor((state: Node) => {\n    const currentlyHoveredId = state.events.hovered;\n    return {\n      hoveredNodeName: state.nodes[currentlyHoveredId].displayName\n    }\n  })\n  return (\n    <h2>The component being hovered is: {hoveredNodeName}</h2>\n  )\n}\n")),Object(a.b)("h2",{id:"connectors"},"Connectors"),Object(a.b)("p",null,"With",Object(a.b)("inlineCode",{parentName:"p"},"useEditor"),", you can add connectors to DOM elements anywhere in the editor to make use of the editor's internal events. "),Object(a.b)("p",null,"Let's say, maybe you are creating a layers panel to display all nodes as Photoshop-like layers (wink wink, ",Object(a.b)("inlineCode",{parentName:"p"},"craftjs-layers"),") and would like to change the particular Node's event state when the user clicks/hovers/drags your layers."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const LayerItem = (nodeId) => {\n  const { connectors: { select }} = useEditor();\n\n  return (\n   <div>\n      <a ref={ref => select(ref, nodeId)}>Click me to select node {nodeId}</a>\n   </div>\n  );\n}\n")),Object(a.b)("p",null,"Or, maybe drag a button to create a new instance of a User Component"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const DragToCreate = (nodeId) => {\n  const { connectors: { drag }} = useEditor();\n\n  return (\n   <div>\n      <a ref={ref => create(ref, <Text />)}>Drag me to create a new Text</a>\n   </div>\n  );\n}\n")),Object(a.b)("h2",{id:"manipulating-state"},"Manipulating state"),Object(a.b)("p",null,"We can use the ",Object(a.b)("inlineCode",{parentName:"p"},"actions")," provided to manipulate the editor's internal state"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const DeleteButtonThingy = () => {\n  const { actions, selectedNodeId } = useEditor((state) => ({\n    selectedNodeId: state.events.selected\n  }));\n\n  return (\n    <div>\n      <button onClick={() => actions.delete(selectedNodeId) }>\n        Click me to delete the selected node\n      </button>\n    </div>\n  )\n}\n")),Object(a.b)("h2",{id:"querying"},"Querying"),Object(a.b)("p",null,"What if you need to know if two nodes are compatible, how to get all parents of a Node or simply deserialize all Nodes? Queries are methods that provide helpful information based on the editor's state."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const Sidebar = () => {\n  const {query} = useEditor();\n  return (\n    <div>\n      <a onClick={() => {\n        console.log(query.deserialize());\n      }}>Click me</a>\n    </div>\n  )\n}\n\n")),Object(a.b)("p",null,"Queries are also accesible via the ",Object(a.b)("inlineCode",{parentName:"p"},"useEditor")," collector function. Let's look at an example where we build a component that returns all the descendants of the current selected Node:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const ShowMeMyDescendants = () => {\n  const { allDescendants } = useEditor((state, query) => {\n    const selectedNodeId = state.events.selected;\n    let allDescendants = false;\n\n    if (selectedNodeId)  allDescendants = query.node(selectedNodeId).decendants();  \n\n    return { allDescendants }\n  }); \n\n  return allDescendants ? (\n    <div>\n      {\n        allDescendants.map(node => \n          <li>{node.id}</li>\n        )\n      }\n    </div>\n  ) : null\n}\n\n")))}d.isMDXComponent=!0},207:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);