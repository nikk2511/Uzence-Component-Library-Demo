import{c as M,a as l,j as e,L as da}from"./cn-CNI4G7ly.js";import{r as u}from"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=M("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=M("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=M("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),p=u.forwardRef(({value:s,onChange:c,label:m,placeholder:T,helperText:z,errorMessage:o,disabled:d=!1,invalid:Le=!1,variant:Me="outlined",size:n="md",type:O="text",clearable:k=!1,showPasswordToggle:Oe=!1,className:W,id:ke,name:We,required:B=!1,autoComplete:Be,autoFocus:De=!1,maxLength:Ge,readOnly:_e=!1,...Ae},Re)=>{const[E,He]=u.useState(!1),[Ue,D]=u.useState(!1),[P]=u.useState(!1),Xe=u.useId(),h=ke||Xe,G=`${h}-helper`,_=`${h}-error`,L=O==="password"||Oe,$e=L&&E?"text":O,b=Le||!!o,A=s&&s.length>0,t={sm:{input:"h-8 px-2 text-sm",label:"text-sm",icon:"h-4 w-4",iconContainer:"h-8"},md:{input:"h-10 px-3 text-sm",label:"text-sm",icon:"h-4 w-4",iconContainer:"h-10"},lg:{input:"h-12 px-4 text-base",label:"text-base",icon:"h-5 w-5",iconContainer:"h-12"}},Ze={filled:{base:"bg-gray-50 border-0 border-b-2 rounded-t-md",normal:"border-gray-300 focus:border-primary-500",error:"border-red-500 bg-red-50",disabled:"bg-gray-100 border-gray-200"},outlined:{base:"bg-white border-2 rounded-md",normal:"border-gray-300 focus:border-primary-500",error:"border-red-500",disabled:"bg-gray-50 border-gray-200"},ghost:{base:"bg-transparent border-0 border-b-2",normal:"border-gray-300 focus:border-primary-500",error:"border-red-500",disabled:"border-gray-200"}},Je=()=>{const r=Ze[Me];let i=r.normal;return d?i=r.disabled:b&&(i=r.error),l(r.base,i)},Ke=l("w-full transition-all duration-200 ease-in-out outline-none","placeholder:text-gray-400 text-gray-900","disabled:cursor-not-allowed disabled:text-gray-500",t[n].input,Je(),Ue&&!d&&"ring-2 ring-primary-100",Qe(),W);function Qe(){const r=k&&A,i=L;return r&&i?"pr-16":r||i?"pr-10":""}const Ye=l("block font-medium mb-1.5",t[n].label,b?"text-red-700":"text-gray-700",d&&"text-gray-500",B&&"after:content-['*'] after:ml-0.5 after:text-red-500"),ea=l("mt-1.5 text-xs",b?"text-red-600":"text-gray-500"),aa=l("absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded","text-gray-400 hover:text-gray-600 transition-colors","disabled:cursor-not-allowed disabled:text-gray-300","focus:outline-none focus:ring-2 focus:ring-primary-100",t[n].iconContainer),ra=()=>{if(!c)return;c({target:{value:""}})},la=()=>{He(r=>!r)},sa=()=>D(!0),na=()=>D(!1),ta=l(z&&G,o&&_),R=k&&A&&!d,H=L,oa=!P&&(R||H);return e.jsxs("div",{className:l("relative",W),children:[m&&e.jsx("label",{htmlFor:h,className:Ye,children:m}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:Re,id:h,name:We,type:$e,value:s||"",onChange:c,placeholder:T,disabled:d||P,required:B,autoComplete:Be,autoFocus:De,maxLength:Ge,readOnly:_e,"aria-invalid":b,"aria-describedby":ta||void 0,className:Ke,onFocus:sa,onBlur:na,...Ae}),P&&e.jsx("div",{className:aa,children:e.jsx(da,{className:l(t[n].icon,"animate-spin")})}),oa&&e.jsxs("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1",children:[R&&e.jsx("button",{type:"button",onClick:ra,className:l("p-1 rounded text-gray-400 hover:text-gray-600","disabled:cursor-not-allowed disabled:text-gray-300","focus:outline-none focus:ring-2 focus:ring-primary-100"),"aria-label":"Clear input",children:e.jsx(ca,{className:t[n].icon})}),H&&e.jsx("button",{type:"button",onClick:la,disabled:d,className:l("p-1 rounded text-gray-400 hover:text-gray-600","disabled:cursor-not-allowed disabled:text-gray-300","focus:outline-none focus:ring-2 focus:ring-primary-100"),"aria-label":E?"Hide password":"Show password",children:E?e.jsx(ia,{className:t[n].icon}):e.jsx(ua,{className:t[n].icon})})]})]}),(z||o)&&e.jsx("div",{id:o?_:G,className:ea,role:o?"alert":void 0,children:o||z})]})});p.displayName="InputField";try{p.displayName="InputField",p.__docgenInfo={description:`A flexible input field component with support for various states and features
Built to handle common form input patterns with good UX`,displayName:"InputField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void) | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string | undefined"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean | undefined"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | undefined"}},autoFocus:{defaultValue:{value:"false"},description:"",name:"autoFocus",required:!1,type:{name:"boolean | undefined"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number | undefined"}},variant:{defaultValue:{value:"outlined"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"filled"'},{value:'"outlined"'},{value:'"ghost"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"text"'},{value:'"password"'},{value:'"email"'}]}},clearable:{defaultValue:{value:"false"},description:"",name:"clearable",required:!1,type:{name:"boolean | undefined"}},showPasswordToggle:{defaultValue:{value:"false"},description:"",name:"showPasswordToggle",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string | undefined"}}}}}catch{}const ba={title:"Components/InputField",component:p,parameters:{layout:"centered",docs:{description:{component:"A flexible input component with validation states, multiple variants, and optional features like clear button and password toggle."}}},argTypes:{variant:{control:"select",options:["filled","outlined","ghost"],description:"Visual style variant of the input"},size:{control:"select",options:["sm","md","lg"],description:"Size of the input field"},type:{control:"select",options:["text","password","email","number"],description:"HTML input type"},disabled:{control:"boolean",description:"Whether the input is disabled"},invalid:{control:"boolean",description:"Whether the input is in an invalid state"},clearable:{control:"boolean",description:"Whether to show a clear button when input has value"},showPasswordToggle:{control:"boolean",description:"Whether to show password visibility toggle"},required:{control:"boolean",description:"Whether the input is required"}}},a=s=>{const[c,m]=u.useState(s.value||"");return e.jsx("div",{className:"w-80",children:e.jsx(p,{...s,value:c,onChange:T=>m(T.target.value)})})},g={render:a,args:{label:"Email Address",placeholder:"Enter your email",type:"email"}},f={render:a,args:{label:"Username",placeholder:"Enter username",helperText:"This will be your unique identifier"}},v={render:a,args:{label:"Password",placeholder:"Enter password",type:"password",invalid:!0,errorMessage:"Password must be at least 8 characters"}},y={render:a,args:{label:"Full Name",placeholder:"Enter your full name",required:!0,helperText:"This field is required"}},x={render:a,args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0,value:"Cannot edit this"}},w={render:a,args:{label:"Search",placeholder:"Type to search...",clearable:!0,value:"Sample text"}},I={render:a,args:{label:"Password",placeholder:"Enter your password",type:"password",showPasswordToggle:!0,value:"mypassword123"}},C={render:a,args:{label:"Filled Input",placeholder:"Filled variant",variant:"filled"}},F={render:a,args:{label:"Outlined Input",placeholder:"Outlined variant",variant:"outlined"}},S={render:a,args:{label:"Ghost Input",placeholder:"Ghost variant",variant:"ghost"}},j={render:a,args:{label:"Small Input",placeholder:"Small size",size:"sm",clearable:!0}},N={render:a,args:{label:"Medium Input",placeholder:"Medium size",size:"md",clearable:!0}},q={render:a,args:{label:"Large Input",placeholder:"Large size",size:"lg",clearable:!0}},V={render:()=>e.jsxs("div",{className:"space-y-8 w-96",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Variants"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Outlined",placeholder:"Outlined variant",variant:"outlined"}),e.jsx(a,{label:"Filled",placeholder:"Filled variant",variant:"filled"}),e.jsx(a,{label:"Ghost",placeholder:"Ghost variant",variant:"ghost"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Sizes"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Small",placeholder:"Small size",size:"sm"}),e.jsx(a,{label:"Medium",placeholder:"Medium size",size:"md"}),e.jsx(a,{label:"Large",placeholder:"Large size",size:"lg"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"States"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Normal",placeholder:"Normal state"}),e.jsx(a,{label:"Error",placeholder:"Error state",invalid:!0,errorMessage:"Something went wrong"}),e.jsx(a,{label:"Disabled",placeholder:"Disabled state",disabled:!0,value:"Cannot edit"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Features"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"With Clear Button",placeholder:"Type something",clearable:!0,value:"Clear me"}),e.jsx(a,{label:"Password Toggle",type:"password",showPasswordToggle:!0,value:"secret123"}),e.jsx(a,{label:"Required Field",placeholder:"This is required",required:!0,helperText:"Required field"})]})]})]})};var U,X,$;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: ControlledInputField,
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email'
  }
}`,...($=(X=g.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var Z,J,K;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: ControlledInputField,
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'This will be your unique identifier'
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,ee;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: ControlledInputField,
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    invalid: true,
    errorMessage: 'Password must be at least 8 characters'
  }
}`,...(ee=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,re,le;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: ControlledInputField,
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
    helperText: 'This field is required'
  }
}`,...(le=(re=y.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ne,te;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: ControlledInputField,
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    value: 'Cannot edit this'
  }
}`,...(te=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,de,ie;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: ControlledInputField,
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    clearable: true,
    value: 'Sample text'
  }
}`,...(ie=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var ue,ce,pe;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: ControlledInputField,
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    showPasswordToggle: true,
    value: 'mypassword123'
  }
}`,...(pe=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,he,be;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: ControlledInputField,
  args: {
    label: 'Filled Input',
    placeholder: 'Filled variant',
    variant: 'filled'
  }
}`,...(be=(he=C.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ge,fe,ve;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: ControlledInputField,
  args: {
    label: 'Outlined Input',
    placeholder: 'Outlined variant',
    variant: 'outlined'
  }
}`,...(ve=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var ye,xe,we;S.parameters={...S.parameters,docs:{...(ye=S.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: ControlledInputField,
  args: {
    label: 'Ghost Input',
    placeholder: 'Ghost variant',
    variant: 'ghost'
  }
}`,...(we=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Ie,Ce,Fe;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: ControlledInputField,
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'sm',
    clearable: true
  }
}`,...(Fe=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:Fe.source}}};var Se,je,Ne;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: ControlledInputField,
  args: {
    label: 'Medium Input',
    placeholder: 'Medium size',
    size: 'md',
    clearable: true
  }
}`,...(Ne=(je=N.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};var qe,Ve,Te;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: ControlledInputField,
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'lg',
    clearable: true
  }
}`,...(Te=(Ve=q.parameters)==null?void 0:Ve.docs)==null?void 0:Te.source}}};var ze,Ee,Pe;V.parameters={...V.parameters,docs:{...(ze=V.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 w-96">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Variants</h3>\r
        <div className="space-y-4">\r
          <ControlledInputField label="Outlined" placeholder="Outlined variant" variant="outlined" />\r
          <ControlledInputField label="Filled" placeholder="Filled variant" variant="filled" />\r
          <ControlledInputField label="Ghost" placeholder="Ghost variant" variant="ghost" />\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Sizes</h3>\r
        <div className="space-y-4">\r
          <ControlledInputField label="Small" placeholder="Small size" size="sm" />\r
          <ControlledInputField label="Medium" placeholder="Medium size" size="md" />\r
          <ControlledInputField label="Large" placeholder="Large size" size="lg" />\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">States</h3>\r
        <div className="space-y-4">\r
          <ControlledInputField label="Normal" placeholder="Normal state" />\r
          <ControlledInputField label="Error" placeholder="Error state" invalid errorMessage="Something went wrong" />\r
          <ControlledInputField label="Disabled" placeholder="Disabled state" disabled value="Cannot edit" />\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Features</h3>\r
        <div className="space-y-4">\r
          <ControlledInputField label="With Clear Button" placeholder="Type something" clearable value="Clear me" />\r
          <ControlledInputField label="Password Toggle" type="password" showPasswordToggle value="secret123" />\r
          <ControlledInputField label="Required Field" placeholder="This is required" required helperText="Required field" />\r
        </div>\r
      </div>\r
    </div>
}`,...(Pe=(Ee=V.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source}}};const ga=["Default","WithHelperText","WithError","Required","Disabled","Clearable","PasswordWithToggle","FilledVariant","OutlinedVariant","GhostVariant","SmallSize","MediumSize","LargeSize","Showcase"];export{w as Clearable,g as Default,x as Disabled,C as FilledVariant,S as GhostVariant,q as LargeSize,N as MediumSize,F as OutlinedVariant,I as PasswordWithToggle,y as Required,V as Showcase,j as SmallSize,v as WithError,f as WithHelperText,ga as __namedExportsOrder,ba as default};
