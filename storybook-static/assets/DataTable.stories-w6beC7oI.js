import{c as _,a as y,j as e,L as ze}from"./cn-CNI4G7ly.js";import{r as S}from"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=_("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=_("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=_("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);function Me(t,o,m){return m?[...t].sort((g,v)=>{const i=g[o],c=v[o];if(i==null&&c==null)return 0;if(i==null)return m==="asc"?-1:1;if(c==null)return m==="asc"?1:-1;if(typeof i=="string"&&typeof c=="string"){const l=i.localeCompare(c);return m==="asc"?l:-l}if(typeof i=="number"&&typeof c=="number"){const l=i-c;return m==="asc"?l:-l}if(typeof i=="boolean"&&typeof c=="boolean"){const l=Number(i)-Number(c);return m==="asc"?l:-l}if(i instanceof Date&&c instanceof Date){const l=i.getTime()-c.getTime();return m==="asc"?l:-l}const h=String(i).localeCompare(String(c));return m==="asc"?h:-h}):t}function Ue(t){switch(t){case"asc":return"desc";case"desc":return null;default:return"asc"}}function b({data:t,columns:o,loading:m=!1,selectable:g=!1,onRowSelect:v,className:i,emptyStateMessage:c="No data available",rowKey:h,striped:l=!1,bordered:ke=!1,size:j="md"}){const[u,we]=S.useState({key:"",direction:null}),[N,U]=S.useState(new Set),k={sm:{table:"text-xs",cell:"px-3 py-2",header:"px-3 py-2"},md:{table:"text-sm",cell:"px-4 py-3",header:"px-4 py-3"},lg:{table:"text-base",cell:"px-6 py-4",header:"px-6 py-4"}},w=(a,s)=>typeof h=="function"?h(a):h?a[h]:s,f=S.useMemo(()=>{if(!u.direction||!u.key)return t;const a=o.find(s=>s.key===u.key);return a?Me(t,a.dataIndex,u.direction):t},[t,u,o]),Ce=a=>{if(!a.sortable)return;const r=u.key===a.key?Ue(u.direction):"asc";we({key:a.key,direction:r})},De=(a,s)=>{if(!g)return;const r=w(a,s),n=new Set(N);if(n.has(r)?n.delete(r):n.add(r),U(n),v){const p=f.filter((C,E)=>n.has(w(C,E)));v(p)}},Re=()=>{if(!g)return;const a=f.map((n,p)=>w(n,p)),s=a.every(n=>N.has(n)),r=s?new Set:new Set(a);U(r),v&&v(s?[]:f)},W=S.useMemo(()=>{if(f.length===0)return{checked:!1,indeterminate:!1};const a=f.map((r,n)=>w(r,n)),s=a.filter(r=>N.has(r)).length;return{checked:s===a.length,indeterminate:s>0&&s<a.length}},[f,N]);S.useEffect(()=>{U(new Set)},[t]);const Te=a=>{if(!a.sortable)return null;const r=u.key===a.key?u.direction:null;return e.jsxs("span",{className:"ml-2 inline-flex flex-col",children:[e.jsx(qe,{className:y("h-3 w-3 -mb-1",r==="asc"?"text-primary-600":"text-gray-400")}),e.jsx(Ve,{className:y("h-3 w-3",r==="desc"?"text-primary-600":"text-gray-400")})]})},Ae=y("min-w-full divide-y divide-gray-200",ke&&"border border-gray-200",k[j].table,i),Ie=y("bg-gray-50 border-b border-gray-200"),Pe=(a,s)=>y("transition-colors duration-150",l&&a%2===1&&"bg-gray-50",s&&"bg-primary-50 border-primary-200",g&&"hover:bg-gray-50 cursor-pointer",!l&&!s&&"hover:bg-gray-50");return m?e.jsx("div",{className:"flex items-center justify-center py-12",children:e.jsxs("div",{className:"flex items-center space-x-3 text-gray-500",children:[e.jsx(ze,{className:"h-6 w-6 animate-spin"}),e.jsx("span",{children:"Loading..."})]})}):t.length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-gray-500",children:[e.jsx(Le,{className:"h-12 w-12 mb-4 text-gray-300"}),e.jsx("p",{className:"text-lg font-medium mb-2",children:"No Data"}),e.jsx("p",{className:"text-sm",children:c})]}):e.jsx("div",{className:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:Ae,children:[e.jsx("thead",{className:Ie,children:e.jsxs("tr",{children:[g&&e.jsx("th",{className:y("w-8",k[j].header),children:e.jsx("input",{type:"checkbox",checked:W.checked,ref:a=>{a&&(a.indeterminate=W.indeterminate)},onChange:Re,className:"h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500","aria-label":"Select all rows"})}),o.map(a=>e.jsx("th",{className:y("text-left font-medium text-gray-900 tracking-wider",k[j].header,a.sortable&&"cursor-pointer hover:bg-gray-100",a.align==="center"&&"text-center",a.align==="right"&&"text-right"),style:{width:a.width},onClick:()=>Ce(a),role:a.sortable?"button":void 0,tabIndex:a.sortable?0:void 0,"aria-sort":u.key===a.key&&u.direction?u.direction==="asc"?"ascending":"descending":"none",children:e.jsxs("div",{className:"flex items-center",children:[a.title,Te(a)]})},a.key))]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:f.map((a,s)=>{const r=w(a,s),n=N.has(r);return e.jsxs("tr",{className:Pe(s,n),onClick:()=>De(a,s),children:[g&&e.jsx("td",{className:k[j].cell,children:e.jsx("input",{type:"checkbox",checked:n,onChange:()=>{},onClick:p=>p.stopPropagation(),className:"h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500","aria-label":`Select row ${s+1}`})}),o.map(p=>{const C=a[p.dataIndex],E=p.render?p.render(C,a,s):C;return e.jsx("td",{className:y("text-gray-900 whitespace-nowrap",k[j].cell,p.align==="center"&&"text-center",p.align==="right"&&"text-right"),children:E},p.key)})]},r)})})]})})})}try{b.displayName="DataTable",b.__docgenInfo={description:`A flexible data table component with sorting, selection, and customization options
Handles common table patterns like loading states, empty states, and row actions`,displayName:"DataTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"Column<T>[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean | undefined"}},onRowSelect:{defaultValue:null,description:"",name:"onRowSelect",required:!1,type:{name:"((selectedRows: T[]) => void) | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},striped:{defaultValue:{value:"false"},description:"",name:"striped",required:!1,type:{name:"boolean | undefined"}},bordered:{defaultValue:{value:"false"},description:"",name:"bordered",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},emptyStateMessage:{defaultValue:{value:"No data available"},description:"",name:"emptyStateMessage",required:!1,type:{name:"string | undefined"}},rowKey:{defaultValue:null,description:"",name:"rowKey",required:!1,type:{name:"string | number | symbol | ((record: T) => string | number) | undefined"}}}}}catch{}const x=[{id:1,name:"Ram",email:"ram@example.com",role:"Developer",status:"active",joinDate:"2023-01-15",salary:75e3},{id:2,name:"Shyam",email:"shyam@example.com",role:"Designer",status:"active",joinDate:"2023-02-20",salary:68e3},{id:3,name:"Radha",email:"radha@example.com",role:"Manager",status:"inactive",joinDate:"2022-11-10",salary:85e3},{id:4,name:"Priya",email:"priya@example.com",role:"Developer",status:"active",joinDate:"2023-03-05",salary:72e3},{id:5,name:"Arjun",email:"arjun@example.com",role:"QA Engineer",status:"active",joinDate:"2023-01-30",salary:65e3},{id:6,name:"Kavya",email:"kavya@example.com",role:"Product Manager",status:"active",joinDate:"2023-04-12",salary:9e4}],Se=[{id:"P001",name:"Wireless Headphones",category:"Electronics",price:99.99,stock:150,available:!0},{id:"P002",name:"Coffee Mug",category:"Kitchen",price:12.99,stock:75,available:!0},{id:"P003",name:"Laptop Stand",category:"Office",price:45.99,stock:0,available:!1},{id:"P004",name:"Bluetooth Speaker",category:"Electronics",price:79.99,stock:32,available:!0}],d=[{key:"name",title:"Name",dataIndex:"name",sortable:!0},{key:"email",title:"Email",dataIndex:"email",sortable:!0},{key:"role",title:"Role",dataIndex:"role",sortable:!0},{key:"status",title:"Status",dataIndex:"status",sortable:!0,render:t=>e.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${t==="active"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:t})},{key:"joinDate",title:"Join Date",dataIndex:"joinDate",sortable:!0,render:t=>new Date(t).toLocaleDateString()},{key:"salary",title:"Salary",dataIndex:"salary",sortable:!0,align:"right",render:t=>`$${t.toLocaleString()}`}],je=[{key:"id",title:"ID",dataIndex:"id",sortable:!0,width:80},{key:"name",title:"Product Name",dataIndex:"name",sortable:!0},{key:"category",title:"Category",dataIndex:"category",sortable:!0},{key:"price",title:"Price",dataIndex:"price",sortable:!0,align:"right",render:t=>`$${t.toFixed(2)}`},{key:"stock",title:"Stock",dataIndex:"stock",sortable:!0,align:"center",render:t=>e.jsx("span",{className:t===0?"text-red-600 font-semibold":"",children:t})},{key:"available",title:"Available",dataIndex:"available",sortable:!0,align:"center",render:t=>e.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${t?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:t?"Yes":"No"})}],Ke={title:"Components/DataTable",component:b,parameters:{layout:"padded",docs:{description:{component:"A data table component with sorting, selection, and customizable rendering capabilities."}}},argTypes:{loading:{control:"boolean",description:"Whether the table is in a loading state"},selectable:{control:"boolean",description:"Whether rows can be selected"},striped:{control:"boolean",description:"Whether to show alternating row colors"},bordered:{control:"boolean",description:"Whether to show table borders"},size:{control:"select",options:["sm","md","lg"],description:"Size of the table"}}},Ne=t=>{const[o,m]=S.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(b,{...t,onRowSelect:m}),o.length>0&&e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsxs("p",{className:"text-sm font-medium text-blue-900",children:["Selected ",o.length," row(s):"]}),e.jsx("ul",{className:"mt-2 text-xs text-blue-700",children:o.map(g=>e.jsxs("li",{children:[g.name," (",g.email,")"]},g.id))})]})]})},D={args:{data:x,columns:d}},R={render:t=>e.jsx(Ne,{...t}),args:{data:x,columns:d,selectable:!0}},T={args:{data:[],columns:d,loading:!0}},A={args:{data:[],columns:d,emptyStateMessage:"No users found. Create a new user to get started."}},I={args:{data:x,columns:d,striped:!0}},P={args:{data:x,columns:d,bordered:!0}},z={args:{data:x,columns:d,size:"sm"}},V={args:{data:x,columns:d,size:"lg"}},q={render:()=>e.jsx(b,{data:Se,columns:je,selectable:!0,striped:!0})},L={args:{data:x,columns:[{key:"avatar",title:"Avatar",dataIndex:"name",render:t=>e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-semibold",children:t.split(" ").map(o=>o[0]).join("")}),e.jsx("span",{children:t})]})},...d.slice(1)],selectable:!0}},M={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Basic Table"}),e.jsx(b,{data:x.slice(0,3),columns:d})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"With Selection & Striped"}),e.jsx(Ne,{data:x.slice(0,3),columns:d,selectable:!0,striped:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Product Table (Custom Rendering)"}),e.jsx(b,{data:Se,columns:je,bordered:!0,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Loading State"}),e.jsx(b,{data:[],columns:d,loading:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Empty State"}),e.jsx(b,{data:[],columns:d,emptyStateMessage:"No data available to display"})]})]})};var K,$,B;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns
  }
}`,...(B=($=D.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var H,O,F;R.parameters={...R.parameters,docs:{...(H=R.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <SelectableTable {...args} />,
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true
  }
}`,...(F=(O=R.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var J,Q,Y;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: userColumns,
    loading: true
  }
}`,...(Y=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var G,X,Z;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: userColumns,
    emptyStateMessage: 'No users found. Create a new user to get started.'
  }
}`,...(Z=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,te;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns,
    striped: true
  }
}`,...(te=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,re,ne;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns,
    bordered: true
  }
}`,...(ne=(re=P.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,oe,ie;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns,
    size: 'sm'
  }
}`,...(ie=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,de,me;V.parameters={...V.parameters,docs:{...(ce=V.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns,
    size: 'lg'
  }
}`,...(me=(de=V.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,pe,ge;q.parameters={...q.parameters,docs:{...(ue=q.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <DataTable<Product> data={sampleProducts} columns={productColumns} selectable={true} striped={true} />
}`,...(ge=(pe=q.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var be,xe,ye;L.parameters={...L.parameters,docs:{...(be=L.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: [{
      key: 'avatar',
      title: 'Avatar',
      dataIndex: 'name',
      render: (value: string) => <div className="flex items-center space-x-3">\r
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">\r
              {value.split(' ').map(n => n[0]).join('')}\r
            </div>\r
            <span>{value}</span>\r
          </div>
    }, ...userColumns.slice(1)],
    selectable: true
  }
}`,...(ye=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var he,fe,ve;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Basic Table</h3>\r
        <DataTable data={sampleUsers.slice(0, 3)} columns={userColumns} />\r
      </div>\r
      \r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">With Selection & Striped</h3>\r
        <SelectableTable data={sampleUsers.slice(0, 3)} columns={userColumns} selectable={true} striped={true} />\r
      </div>\r
      \r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Product Table (Custom Rendering)</h3>\r
        <DataTable data={sampleProducts} columns={productColumns} bordered={true} size="sm" />\r
      </div>\r
      \r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Loading State</h3>\r
        <DataTable data={[]} columns={userColumns} loading={true} />\r
      </div>\r
      \r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Empty State</h3>\r
        <DataTable data={[]} columns={userColumns} emptyStateMessage="No data available to display" />\r
      </div>\r
    </div>
}`,...(ve=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};const $e=["Default","WithSelection","Loading","Empty","Striped","Bordered","SmallSize","LargeSize","ProductTable","CustomRendering","Showcase"];export{P as Bordered,L as CustomRendering,D as Default,A as Empty,V as LargeSize,T as Loading,q as ProductTable,M as Showcase,z as SmallSize,I as Striped,R as WithSelection,$e as __namedExportsOrder,Ke as default};
