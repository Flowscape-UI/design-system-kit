import{r as c,j as a}from"./iframe-DEXx_Rvw.js";import{u as F,T as j,A as k}from"./use-image-actions-DQp3OOoR.js";import{I as b,a as m}from"./image-preview-C0FrANT-.js";import{c as N}from"./cn-Bzm_o1ou.js";import"./preload-helper-DCOVa-dD.js";import"./createLucideIcon-BwO1ILjJ.js";const H=t=>new Promise((s,r)=>{const e=new FileReader;e.onloadend=()=>{typeof e.result=="string"?s(e.result):r(new Error("Failed to read file as string"))},e.onerror=()=>{r(new Error("Error reading file"))},e.readAsDataURL(t)}),D=(t,s,r)=>{const e=c.useRef(null),[g,i]=c.useState(s),[u,l]=c.useState(r);return{previewUrl:g,fileName:u,fileInputRef:e,handleFileChange:async h=>{const o=h.target.files?.[0];if(o)try{const p=await H(o);i(p),l(o.name),t?.(o)}catch(p){console.error("Error reading file:",p),t?.(null)}},handleClick:()=>{e.current?.click()},clearFile:()=>{i(void 0),l(void 0),e.current&&(e.current.value="")}}},S=(t,s,r,e="Upload image")=>t||(r&&s?s:e),I=({title:t="Upload image",className:s,imageUrl:r,fileName:e,onImageChange:g,onHideImage:i,onDeleteImage:u})=>{const{previewUrl:l,fileName:f,fileInputRef:n,handleFileChange:d,handleClick:h,clearFile:o}=D(g,r,e),{isHidden:p,handleToggleHide:U,handleDelete:w}=F(i,u,o),C=S(f,e,r,t);return a.jsxs("div",{className:"w-fit",children:[a.jsxs("div",{className:N("flex items-center justify-between rounded-md p-1 border",m.light.container,m.dark.container,s),children:[a.jsxs("div",{className:"flex items-center gap-1 w-full",children:[a.jsx(b,{imageUrl:l,onClick:h}),a.jsx(j,{onClick:h,textLightClass:m.light.text,textDarkClass:m.dark.text,children:C})]}),a.jsx(k,{showOpacity:!1,isHidden:p,onToggleVisibility:U,onDelete:w,dividerClassName:N(m.light.divider,m.dark.divider)})]}),a.jsx("input",{ref:n,type:"file",accept:"image/*",onChange:d,className:"hidden"})]})};I.__docgenInfo={description:"",methods:[],displayName:"InputUploadImage",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Upload image'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},fileName:{required:!1,tsType:{name:"string"},description:""},onImageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File | null) => void",signature:{arguments:[{type:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},name:"file"}],return:{name:"void"}}},description:""},onHideImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(hidden: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hidden"}],return:{name:"void"}}},description:""},onDeleteImage:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const L={title:"Components/InputUploadImage",component:I,parameters:{layout:"centered",docs:{toc:{title:"Table of Contents"}},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"]},x={args:{title:"Upload Image"}},v={args:{title:"Image Upload"},render:()=>{const[t,s]=c.useState(void 0),[r,e]=c.useState(void 0),[g,i]=c.useState(!1),u=n=>{if(n){const d=new FileReader;d.onloadend=()=>{s(d.result),e(n.name)},d.readAsDataURL(n)}},l=()=>{s(void 0),e(void 0),i(!1)},f=n=>{i(n)};return a.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[a.jsx(I,{imageUrl:t,fileName:r,onImageChange:u,onDeleteImage:l,onHideImage:f,title:"Choose an image"}),t&&a.jsx("div",{className:"w-80 h-48 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 relative overflow-hidden flex items-center justify-center",children:g?a.jsx("span",{className:"text-gray-500 dark:text-gray-400 font-medium",children:"Image Hidden"}):a.jsx("img",{src:t,alt:"Preview",className:"w-full h-full object-cover"})}),r&&a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-gray-200",children:"Selected file:"}),a.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400 font-mono",children:r})]})]})}},y={args:{title:"product-image.png",imageUrl:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",fileName:"product-image.png"}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Upload Image'
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Image Upload'
  },
  render: () => {
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [fileName, setFileName] = useState<string | undefined>(undefined);
    const [isHidden, setIsHidden] = useState(false);
    const handleImageChange = (file: File | null) => {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageUrl(reader.result as string);
          setFileName(file.name);
        };
        reader.readAsDataURL(file);
      }
    };
    const handleDelete = () => {
      setImageUrl(undefined);
      setFileName(undefined);
      setIsHidden(false);
    };
    const handleHide = (hidden: boolean) => {
      setIsHidden(hidden);
    };
    return <div className="space-y-4 flex flex-col items-center gap-4">
                <InputUploadImage imageUrl={imageUrl} fileName={fileName} onImageChange={handleImageChange} onDeleteImage={handleDelete} onHideImage={handleHide} title="Choose an image" />

                {imageUrl && <div className="w-80 h-48 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 relative overflow-hidden flex items-center justify-center">
                        {isHidden ? <span className="text-gray-500 dark:text-gray-400 font-medium">
                                Image Hidden
                            </span> : <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />}
                    </div>}

                {fileName && <div className="text-center">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                            Selected file:
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                            {fileName}
                        </p>
                    </div>}
            </div>;
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'product-image.png',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop',
    fileName: 'product-image.png'
  }
}`,...y.parameters?.docs?.source}}};const P=["Default","Interactive","WithCustomTitle"];export{x as Default,v as Interactive,y as WithCustomTitle,P as __namedExportsOrder,L as default};
