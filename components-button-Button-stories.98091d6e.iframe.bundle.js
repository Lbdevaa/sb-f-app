/*! For license information please see components-button-Button-stories.98091d6e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmylib=self.webpackChunkmylib||[]).push([[389],{"./src/components/button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),style_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/button/style.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(style_module.Z,options);const button_style_module=style_module.Z&&style_module.Z.locals?style_module.Z.locals:void 0;var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultValues={size:"sm",variant:"dark",animation:"border"},Spinner=options=>{const{loading,size,variant,animation,label}={...defaultValues,...options};return loading?(0,jsx_runtime.jsxs)("div",{className:"d-flex align-items-center "+(label?"mx-2":""),children:[(0,jsx_runtime.jsx)("div",{className:`spinner-${animation} text-${variant} spinner-${animation}-${size}`,role:"status"}),label&&(0,jsx_runtime.jsx)("span",{className:"ms-2",children:label})]}):(0,jsx_runtime.jsx)(react.Fragment,{})},components_spinner=Spinner;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"Spinner with label",displayName:"Spinner",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode | Element"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"light"'},{value:'"dark"'}]}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"border"'},{value:'"grow"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}try{spinner.displayName="spinner",spinner.__docgenInfo={description:"Spinner with label",displayName:"spinner",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode | Element"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"light"'},{value:'"dark"'}]}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"border"'},{value:'"grow"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/index.tsx#spinner"]={docgenInfo:spinner.__docgenInfo,name:"spinner",path:"src/components/spinner/index.tsx#spinner"})}catch(__react_docgen_typescript_loader_error){}const Button=props=>{const bodyClassNames=[button_style_module.main],btnProps={...props};switch(delete btnProps.withSpinner,delete btnProps.variant,props.variant){case void 0:case"primary":bodyClassNames.push(button_style_module.mainPrimary);break;case"danger":bodyClassNames.push(button_style_module.mainDanger);break;case"secondary":bodyClassNames.push(button_style_module.mainSecondary);break;case"link":bodyClassNames.length=0,bodyClassNames.push(button_style_module.link);break;case"placeholder-btn":bodyClassNames.length=0,bodyClassNames.push(button_style_module.placeholderBtn);break;case"text-btn":bodyClassNames.length=0,bodyClassNames.push(button_style_module.textBtn);break;case"small":bodyClassNames.length=0,bodyClassNames.push(button_style_module.small);break;case"redSmall":bodyClassNames.length=0,bodyClassNames.push(button_style_module.redSmall);break;case"graySmall":bodyClassNames.length=0,bodyClassNames.push(button_style_module.graySmall);break;default:bodyClassNames.push(props.variant)}return props.className&&bodyClassNames.push(props.className),(0,jsx_runtime.jsx)("button",{type:"button",...btnProps,disabled:props.disabled||props.withSpinner,className:bodyClassNames.join(" "),children:props.withSpinner?(0,jsx_runtime.jsx)(components_spinner,{label:props.children,loading:!0,animation:"border",size:"sm"}):props.children})};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'},{value:'"link"'},{value:'"placeholder-btn"'},{value:'"small"'},{value:'"redSmall"'},{value:'"graySmall"'},{value:'"text-btn"'}]}},withSpinner:{defaultValue:null,description:"",name:"withSpinner",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}const Button_stories={title:"UI/Button",component:Button,args:{children:"Click me",variant:"primary"}},Template=args=>(0,jsx_runtime.jsx)(Button,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={variant:"primary"};const Danger=Template.bind({});Danger.args={variant:"danger"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Default.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Danger.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Danger"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/button/style.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".p1QMTX4ZR4bFYmxlQUvF{padding:11px 16px;border-radius:5px;border:none;outline:1px solid inherit;transition:all var(--trs)}.G_ST1Bh2lY8ZvdR6G0FJ{background-color:var(--dy-control-turquoise)}.G_ST1Bh2lY8ZvdR6G0FJ:hover{background-color:var(--dy-control-dark-turquoise)}.mepMImadNfbzpLFK_Ntk{color:var(--body-bg-color);background-color:var(--dy-control-error)}.mepMImadNfbzpLFK_Ntk:hover{background-color:var(--dy-control-red-200)}.kxAUZOxqwIFjJaXLI_zJ{background-color:var(--dy-control-grey-200)}.kxAUZOxqwIFjJaXLI_zJ:hover{background-color:var(--dy-control-grey-300)}.p1QMTX4ZR4bFYmxlQUvF:disabled{background-color:var(--dy-control-grey-200);color:var(--text-secondary)}.ep8dCJNyuumEwJc2tsgg,.qbz8y8AFnivLDX9po_b8,.WpD3y1zfLC8M9420YeEd{color:var(--text-link);display:flex;column-gap:6px;padding:0;align-items:center;border:none;background:none;outline:none;transition:all var(--trs)}.ep8dCJNyuumEwJc2tsgg svg,.qbz8y8AFnivLDX9po_b8 svg,.WpD3y1zfLC8M9420YeEd svg{color:var(--dy-icon-blue);transition:all var(--trs)}.ep8dCJNyuumEwJc2tsgg:hover,.qbz8y8AFnivLDX9po_b8:hover,.WpD3y1zfLC8M9420YeEd:hover{color:var(--text-link--hover)}.qbz8y8AFnivLDX9po_b8,.WpD3y1zfLC8M9420YeEd{color:var(--text-secondary)}.qbz8y8AFnivLDX9po_b8 svg,.WpD3y1zfLC8M9420YeEd svg{color:var(--dy-icon-gray)}.qbz8y8AFnivLDX9po_b8:hover,.WpD3y1zfLC8M9420YeEd:hover{color:var(--dy-icon-blue);text-decoration:none}.qbz8y8AFnivLDX9po_b8:hover svg,.WpD3y1zfLC8M9420YeEd:hover svg{color:var(--dy-icon-blue)}.WpD3y1zfLC8M9420YeEd{color:var(--text-placeholder)}.RwqwvYipnsycgV4PgoAL{padding:4px 12px;border:2px solid var(--dy-control-dark-turquoise);background:var(--body-bg-color);border-radius:5px;color:var(--text-primary-color);transition:all var(--trs);display:flex;align-items:center}.RwqwvYipnsycgV4PgoAL:hover{background:var(--dy-control-dark-turquoise);color:var(--text-inverse)}.OxtjSbsBz_JC3w2yrqDD{padding:4px 12px;border:2px solid rgba(0,0,0,0);background-color:rgba(0,0,0,0);border-radius:5px;color:var(--dy-icon-red);transition:all var(--trs);align-items:center}.OxtjSbsBz_JC3w2yrqDD:hover{border:2px solid var(--dy-icon-red)}.FDcIaOih6UmsYZBbtlaM{padding:4px 12px;border:2px solid var(--dy-control-grey-300);background:var(--body-bg-color);border-radius:5px;color:var(--text-primary-color);transition:all var(--trs);display:flex;align-items:center}.FDcIaOih6UmsYZBbtlaM:hover{background:var(--dy-control-grey-300);color:var(--text-primary-color)}","",{version:3,sources:["webpack://./src/components/button/style.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,iBAAA,CACA,WAAA,CACA,yBAAA,CACA,yBAAA,CAEA,sBACE,4CAAA,CAEA,4BACE,iDAAA,CAIJ,sBACE,0BAAA,CACA,wCAAA,CAEA,4BACE,0CAAA,CAUJ,sBACE,2CAAA,CAEA,4BACE,2CAAA,CAgBJ,+BACE,2CAAA,CACA,2BAAA,CAIJ,kEACE,sBAAA,CACA,YAAA,CACA,cAAA,CACA,SAAA,CACA,kBAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CACA,yBAAA,CAEA,8EACE,yBAAA,CACA,yBAAA,CAGF,oFACE,6BAAA,CAIJ,4CAEE,2BAAA,CAEA,oDACE,yBAAA,CAGF,wDAKE,yBAAA,CACA,oBAAA,CALA,gEACE,yBAAA,CAQN,sBAEE,6BAAA,CAGF,sBACE,gBAAA,CACA,iDAAA,CACA,+BAAA,CACA,iBAAA,CACA,+BAAA,CACA,yBAAA,CACA,YAAA,CACA,kBAAA,CAEA,4BACE,2CAAA,CACA,yBAAA,CAIJ,sBACE,gBAAA,CACA,8BAAA,CACA,8BAAA,CACA,iBAAA,CACA,wBAAA,CACA,yBAAA,CAEA,kBAAA,CAEA,4BACE,mCAAA,CAIJ,sBACE,gBAAA,CACA,2CAAA,CACA,+BAAA,CACA,iBAAA,CACA,+BAAA,CACA,yBAAA,CACA,YAAA,CACA,kBAAA,CAEA,4BACE,qCAAA,CACA,+BAAA",sourcesContent:[".main {\n  padding: 11px 16px;\n  border-radius: 5px;\n  border: none;\n  outline: 1px solid inherit;\n  transition: all var(--trs);\n\n  &Primary {\n    background-color: var(--dy-control-turquoise);\n\n    &:hover {\n      background-color: var(--dy-control-dark-turquoise);\n    }\n  }\n\n  &Danger {\n    color: var(--body-bg-color);\n    background-color: var(--dy-control-error);\n\n    &:hover {\n      background-color: var(--dy-control-red-200);\n    }\n  }\n\n  &Info {\n  }\n\n  &Success {\n  }\n\n  &Secondary {\n    background-color: var(--dy-control-grey-200);\n\n    &:hover {\n      background-color: var(--dy-control-grey-300);\n    }\n  }\n\n  &Warning {\n  }\n\n  &Info {\n  }\n\n  &Light {\n  }\n\n  &Dark {\n  }\n\n  &:disabled {\n    background-color: var(--dy-control-grey-200);\n    color: var(--text-secondary);\n  }\n}\n\n.link {\n  color: var(--text-link);\n  display: flex;\n  column-gap: 6px;\n  padding: 0;\n  align-items: center;\n  border: none;\n  background: none;\n  outline: none;\n  transition: all var(--trs);\n\n  & svg {\n    color: var(--dy-icon-blue);\n    transition: all var(--trs);\n  }\n\n  &:hover {\n    color: var(--text-link--hover);\n  }\n}\n\n.textBtn {\n  @extend .link;\n  color: var(--text-secondary);\n\n  & svg {\n    color: var(--dy-icon-gray);\n  }\n\n  &:hover {\n    & svg {\n      color: var(--dy-icon-blue);\n    }\n\n    color: var(--dy-icon-blue);\n    text-decoration: none;\n  }\n}\n\n.placeholderBtn {\n  @extend .textBtn;\n  color: var(--text-placeholder);\n}\n\n.small {\n  padding: 4px 12px;\n  border: 2px solid var(--dy-control-dark-turquoise);\n  background: var(--body-bg-color);\n  border-radius: 5px;\n  color: var(--text-primary-color);\n  transition: all var(--trs);\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background: var(--dy-control-dark-turquoise);\n    color: var(--text-inverse);\n  }\n}\n\n.redSmall {\n  padding: 4px 12px;\n  border: 2px solid transparent;\n  background-color: transparent;\n  border-radius: 5px;\n  color: var(--dy-icon-red);\n  transition: all var(--trs);\n  //display: flex;\n  align-items: center;\n\n  &:hover {\n    border: 2px solid var(--dy-icon-red);\n  }\n}\n\n.graySmall {\n  padding: 4px 12px;\n  border: 2px solid var(--dy-control-grey-300);\n  background: var(--body-bg-color);\n  border-radius: 5px;\n  color: var(--text-primary-color);\n  transition: all var(--trs);\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background: var(--dy-control-grey-300);\n    color: var(--text-primary-color);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={main:"p1QMTX4ZR4bFYmxlQUvF",mainPrimary:"G_ST1Bh2lY8ZvdR6G0FJ",mainDanger:"mepMImadNfbzpLFK_Ntk",mainSecondary:"kxAUZOxqwIFjJaXLI_zJ",link:"ep8dCJNyuumEwJc2tsgg",textBtn:"qbz8y8AFnivLDX9po_b8",placeholderBtn:"WpD3y1zfLC8M9420YeEd",small:"RwqwvYipnsycgV4PgoAL",redSmall:"OxtjSbsBz_JC3w2yrqDD",graySmall:"FDcIaOih6UmsYZBbtlaM"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);