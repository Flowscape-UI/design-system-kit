import{r as o,j as e}from"./iframe-hrAirH9t.js";import{u as ie,T as oe,A as le}from"./use-image-actions-CD376SO3.js";import{I as de,a as R}from"./image-preview-C2niLBXr.js";import{c as I}from"./cn-Bzm_o1ou.js";import{I as ce}from"./input-select-modal-5MdHnpxX.js";import{R as ge}from"./rotate-cw-Djt_9a3I.js";import{c as me}from"./createLucideIcon-C2_XNH16.js";import"./preload-helper-DCOVa-dD.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],pe=me("upload",ue),he=(t,l=100,r=0)=>{const[c,a]=o.useState(t),[i,n]=o.useState(!1),[s,g]=o.useState(l),[h,p]=o.useState(r);return o.useEffect(()=>{a(t)},[t]),o.useEffect(()=>{g(l)},[l]),o.useEffect(()=>{p(r)},[r]),{imageUrl:c,isHidden:i,opacity:s,rotation:h,setImageUrl:a,setIsHidden:n,setOpacity:g,setRotation:p,toggleHidden:()=>{n(w=>!w)}}},f={light:{container:"bg-white",text:"text-gray-900",button:"bg-blue-600 hover:bg-blue-700",overlay:"bg-black/50",placeholder:"bg-gray-200 text-gray-500"},dark:{container:"dark:bg-gray-800",text:"dark:text-gray-200",button:"dark:bg-blue-600 dark:hover:bg-blue-700",overlay:"dark:bg-black/60",placeholder:"dark:bg-gray-700 dark:text-gray-400"}},ae=({isOpen:t,isRotateButtonActive:l,onClose:r,title:c,imageUrl:a,opacityImage:i=100,imageHidden:n,onImageChange:s,filters:g,onFiltersChange:h,rotation:p=0,onRotationChange:N,className:w,classNameContainer:S,classNameButton:C,classNameOverlay:b,classNamePlaceholder:y,classNameModal:k,classNameModalHeader:V,classNameModalTitle:L,classNameModalCloseButton:P,classNameModalContent:_})=>{const[U,T]=o.useState(a),[m,D]=o.useState(g||{exposure:0,contrast:0,saturation:0,temperature:0,tint:0,highlights:0,shadows:0}),M=o.useRef(null),W=o.useRef(null),j=(d,u,x)=>Math.min(Math.max(d,u),x),[z,E]=o.useState(p);o.useEffect(()=>{T(a)},[a]),o.useEffect(()=>{g&&D(g)},[g]),o.useEffect(()=>{E(p)},[p]);const G=(d,u)=>{const x={...m,[d]:u};D(x),h?.(x)},O=()=>{const d=(z+90)%360;E(d),N?.(d)},$=()=>{const d=m.highlights/100,u=m.shadows/100,x=j(1+m.exposure/100+Math.max(d,0)*.4-Math.max(u,0)*.5+Math.max(-u,0)*.3-Math.max(-d,0)*.3,.1,3),ne=j(1+m.contrast/100+Math.max(d,0)*.3+Math.max(u,0)*.4-Math.max(-d,0)*.3-Math.max(-u,0)*.4,.1,4),se=j(1+m.saturation/100,0,4),re=m.temperature*.6;return{filter:`brightness(${x}) contrast(${ne}) saturate(${se}) hue-rotate(${re}deg)`}},J=()=>{if(!m.tint)return null;const d=Math.min(Math.abs(m.tint)/100,1);return{backgroundColor:`hsla(${m.tint>=0?120:300}, 100%, 50%, ${d*.5})`,mixBlendMode:"color",opacity:d*.6}},K=()=>{if(!m.highlights)return null;const d=m.highlights,u=Math.min(Math.abs(d)/100,1);return d>0?{backgroundColor:"rgba(255, 255, 255, 1)",mixBlendMode:"screen",opacity:u*.5}:{backgroundColor:"rgba(0, 0, 0, 1)",mixBlendMode:"multiply",opacity:u*.4}},v=()=>{if(!m.shadows)return null;const d=m.shadows,u=Math.min(Math.abs(d)/100,1);return d>0?{backgroundColor:"rgba(0, 0, 0, 1)",mixBlendMode:"multiply",opacity:u*.6}:{backgroundColor:"rgba(255, 255, 255, 1)",mixBlendMode:"screen",opacity:u*.4}},Q=J(),X=K(),Y=v(),Z=d=>{const u=d.target.files?.[0];if(u){const x=new FileReader;x.onloadend=()=>{T(x.result)},x.readAsDataURL(u),s?.(u)}},ee=()=>{M.current?.click()};return t?e.jsxs(ce,{title:c,onClose:r,inputRef:W,className:k,classNameHeader:V,classNameTitle:L,classNameCloseButton:P,classNameContent:_,children:[e.jsxs("div",{className:I("w-[280px]",w),children:[e.jsx("div",{className:"flex items-center justify-end mb-2",children:l&&e.jsx("button",{type:"button",onClick:O,className:I("flex items-center justify-center gap-2 text-white py-2 px-3 rounded-md text-sm font-medium transition-colors cursor-pointer",f.light.button,f.dark.button,C),children:e.jsx(ge,{size:16})})}),e.jsxs("div",{className:I("rounded-md overflow-hidden relative group",f.light.container,f.dark.container,S),children:[U&&e.jsx(e.Fragment,{children:n?e.jsx("div",{className:I("w-full h-[250px] flex items-center justify-center",f.light.placeholder,f.dark.placeholder,y),children:"Image Hidden"}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full h-[250px] relative",style:{backgroundColor:"#ffffff",backgroundImage:"linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",backgroundSize:"20px 20px",backgroundPosition:"0 0, 0 10px, 10px -10px, -10px 0px"},children:[e.jsx("img",{src:U,alt:"Preview",className:"w-full h-full object-contain",style:{opacity:i/100,...$()}}),Q&&e.jsx("div",{className:"absolute inset-0 pointer-events-none",style:Q}),X&&e.jsx("div",{className:"absolute inset-0 pointer-events-none",style:X}),Y&&e.jsx("div",{className:"absolute inset-0 pointer-events-none",style:Y})]}),e.jsx("div",{className:I("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",f.light.overlay,f.dark.overlay,b),children:e.jsx(te,{handleUploadClick:ee,fileInputRef:M,handleFileChange:Z,classNameButton:C})})]})}),!U&&e.jsx("div",{className:I("w-full h-[250px] flex items-center justify-center",f.light.placeholder,f.dark.placeholder,y),children:e.jsx(te,{handleUploadClick:ee,fileInputRef:M,handleFileChange:Z,classNameButton:C})})]})]}),U&&!n&&e.jsx(fe,{filters:m,onFilterChange:G})]}):null},fe=({filters:t,onFilterChange:l})=>{const r=[{key:"exposure",label:"Exposure",min:-100,max:100},{key:"contrast",label:"Contrast",min:-100,max:100},{key:"saturation",label:"Saturation",min:-100,max:100},{key:"temperature",label:"Temperature",min:-100,max:100},{key:"tint",label:"Tint",min:-100,max:100},{key:"highlights",label:"Highlights",min:-100,max:100},{key:"shadows",label:"Shadows",min:-100,max:100}],c=(a,i,n=5)=>{const s=Math.abs(i)<=n?0:i;l(a,s)};return e.jsx("div",{className:"mt-4 space-y-3",children:r.map(({key:a,label:i,min:n,max:s})=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("label",{className:I("text-sm font-medium w-24 flex-shrink-0",f.light.text,f.dark.text),children:i}),e.jsx("input",{type:"range",min:n,max:s,value:t[a],onChange:g=>c(a,Number(g.target.value)),className:"flex-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider",style:{background:`linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(t[a]-n)/(s-n)*100}%, #d1d5db ${(t[a]-n)/(s-n)*100}%, #d1d5db 100%)`}})]},a))})},te=({handleUploadClick:t,fileInputRef:l,handleFileChange:r,classNameButton:c})=>e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:t,className:I("text-white py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer",f.light.button,f.dark.button,c),children:[e.jsx(pe,{size:16}),"Upload from computer"]}),e.jsx("input",{ref:l,type:"file",accept:"image/*",onChange:r,className:"hidden"})]});ae.__docgenInfo={description:"",methods:[],displayName:"ImagePickerModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},isRotateButtonActive:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},opacityImage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},imageHidden:{required:!1,tsType:{name:"boolean"},description:""},onImageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File | null) => void",signature:{arguments:[{type:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},name:"file"}],return:{name:"void"}}},description:""},filters:{required:!1,tsType:{name:"ImageFilters"},description:""},onFiltersChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(filters: ImageFilters) => void",signature:{arguments:[{type:{name:"ImageFilters"},name:"filters"}],return:{name:"void"}}},description:""},rotation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onRotationChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(rotation: number) => void",signature:{arguments:[{type:{name:"number"},name:"rotation"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},classNameContainer:{required:!1,tsType:{name:"string"},description:""},classNameButton:{required:!1,tsType:{name:"string"},description:""},classNameOverlay:{required:!1,tsType:{name:"string"},description:""},classNamePlaceholder:{required:!1,tsType:{name:"string"},description:""},classNameModal:{required:!1,tsType:{name:"string"},description:""},classNameModalHeader:{required:!1,tsType:{name:"string"},description:""},classNameModalTitle:{required:!1,tsType:{name:"string"},description:""},classNameModalCloseButton:{required:!1,tsType:{name:"string"},description:""},classNameModalContent:{required:!1,tsType:{name:"string"},description:""}}};const F=({title:t="Image",className:l,imageUrl:r,opacity:c=100,onImageChange:a,onOpacityChange:i,onHideImage:n,onDeleteImage:s,filters:g,onFiltersChange:h,rotation:p=0,onRotationChange:N,classNameModal:w,classNameModalContainer:S,classNameModalButton:C,classNameModalOverlay:b,classNameModalPlaceholder:y,classNameModalWrapper:k,classNameModalHeader:V,classNameModalTitle:L,classNameModalCloseButton:P,classNameModalContent:_})=>{const[U,T]=o.useState(!1),{opacity:m,rotation:D,setOpacity:M,setRotation:W}=he(r,c,p),{isHidden:j,isRotateButtonActive:z,handleToggleHide:E,handleDelete:G,setIsRotateButtonActive:O}=ie(n,s);o.useEffect(()=>{r&&O(!0)},[r,O]);const $=()=>{T(v=>!v)},J=v=>{M(v),i?.(v)},K=v=>{W(v),N?.(v)};return e.jsxs("div",{className:"w-fit",children:[e.jsxs("div",{className:I("flex items-center justify-between rounded-md p-1 border",R.light.container,R.dark.container,l),children:[e.jsxs("div",{className:"flex items-center gap-1 w-full",children:[e.jsx(de,{imageUrl:r,opacity:m,onClick:$}),e.jsx(oe,{onClick:$,textLightClass:R.light.text,textDarkClass:R.dark.text,children:"Image"})]}),e.jsx(le,{opacity:m,onOpacityChange:J,isHidden:j,onToggleVisibility:E,onDelete:G,dividerClassName:I(R.light.divider,R.dark.divider)})]}),e.jsx(ae,{isOpen:U,isRotateButtonActive:z,onClose:()=>T(!1),title:t,imageUrl:r,opacityImage:m,imageHidden:j,onImageChange:a,filters:g,onFiltersChange:h,rotation:D,onRotationChange:K,className:k,classNameContainer:S,classNameButton:C,classNameOverlay:b,classNamePlaceholder:y,classNameModal:w,classNameModalHeader:V,classNameModalTitle:L,classNameModalCloseButton:P,classNameModalContent:_})]})};F.__docgenInfo={description:"",methods:[],displayName:"InputImageSelect",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Image'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},opacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},onOpacityChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(opacity: number) => void",signature:{arguments:[{type:{name:"number"},name:"opacity"}],return:{name:"void"}}},description:""},onHideImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(hidden: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hidden"}],return:{name:"void"}}},description:""},onDeleteImage:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onImageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File | null) => void",signature:{arguments:[{type:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},name:"file"}],return:{name:"void"}}},description:""},filters:{required:!1,tsType:{name:"ImageFilters"},description:""},onFiltersChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(filters: ImageFilters) => void",signature:{arguments:[{type:{name:"ImageFilters"},name:"filters"}],return:{name:"void"}}},description:""},rotation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onRotationChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(rotation: number) => void",signature:{arguments:[{type:{name:"number"},name:"rotation"}],return:{name:"void"}}},description:""},classNameModal:{required:!1,tsType:{name:"string"},description:""},classNameModalContainer:{required:!1,tsType:{name:"string"},description:""},classNameModalButton:{required:!1,tsType:{name:"string"},description:""},classNameModalOverlay:{required:!1,tsType:{name:"string"},description:""},classNameModalPlaceholder:{required:!1,tsType:{name:"string"},description:""},classNameModalWrapper:{required:!1,tsType:{name:"string"},description:""},classNameModalHeader:{required:!1,tsType:{name:"string"},description:""},classNameModalTitle:{required:!1,tsType:{name:"string"},description:""},classNameModalCloseButton:{required:!1,tsType:{name:"string"},description:""},classNameModalContent:{required:!1,tsType:{name:"string"},description:""}}};const ye=async(t,l,r=.95)=>new Promise((c,a)=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{try{const n=document.createElement("canvas"),s=n.getContext("2d");if(!s){a(new Error("Failed to get canvas context"));return}const g=(l%360+360)%360,h=Math.round(g/90)%4;h===1||h===3?(n.width=i.height,n.height=i.width):(n.width=i.width,n.height=i.height),s.translate(n.width/2,n.height/2),s.rotate(h*Math.PI/2),s.drawImage(i,-i.width/2,-i.height/2);const p=n.toDataURL("image/jpeg",r);c(p)}catch(n){a(n)}},i.onerror=()=>{a(new Error("Failed to load image"))},i.src=t}),Ue={title:"Components/InputImageSelect",component:F,parameters:{layout:"centered",docs:{toc:{title:"Table of Contents"}},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"],argTypes:{imageUrl:{control:"text",description:"Current image URL"},onImageChange:{description:"Callback when image changes"},onHideImage:{description:"Callback when image visibility toggles"},onDeleteImage:{description:"Callback when image is deleted"},className:{control:"text",description:"Custom classes for the container"},title:{control:"text",description:"Title shown in picker header"}}},q={args:{title:"Image"},render:()=>{const[t,l]=o.useState(void 0),r=c=>{if(c){const a=new FileReader;a.onloadend=()=>{l(a.result)},a.readAsDataURL(c)}};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(F,{imageUrl:t,onImageChange:r}),e.jsx("p",{className:"text-center text-sm text-gray-600 dark:text-gray-300",children:t?"Image selected":"No image selected"})]})}},H={args:{title:"Background Image"},render:()=>{const[t,l]=o.useState("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"),r=c=>{if(c){const a=new FileReader;a.onloadend=()=>{l(a.result)},a.readAsDataURL(c)}};return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsx(F,{imageUrl:t,onImageChange:r,title:"Background Image"}),e.jsx("div",{className:"w-80 h-48 rounded-lg shadow-lg bg-cover bg-center flex items-center justify-center text-white font-bold text-2xl",style:{backgroundImage:t?`url(${t})`:"none",backgroundColor:t?"transparent":"#e5e7eb"},children:!t&&"No Background"})]})}},A={args:{title:"Image with Actions"},render:()=>{const[t,l]=o.useState("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"),[r,c]=o.useState(!1),[a,i]=o.useState(0),[n,s]=o.useState(t),[g,h]=o.useState(!1),[p,N]=o.useState(100),w=b=>{if(b){const y=new FileReader;y.onloadend=()=>{const k=y.result;l(k),s(k),i(0)},y.readAsDataURL(b)}},S=()=>{l(void 0),s(void 0),i(0)},C=b=>{c(b)};return o.useEffect(()=>{if(!t){s(void 0);return}if(a===0){s(t);return}(async()=>{h(!0);try{const y=await ye(t,a);s(y)}catch(y){console.error("Failed to rotate image:",y),s(t)}finally{h(!1)}})()},[t,a]),e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsx(F,{imageUrl:t,opacity:p,onOpacityChange:N,onImageChange:w,onDeleteImage:S,onHideImage:C,rotation:a,onRotationChange:i,title:"Image with Actions"}),e.jsx("div",{className:"w-80 h-48 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 relative overflow-hidden flex items-center justify-center",children:g?e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-300",children:"Rotating..."}):n&&!r?e.jsx("img",{src:n,alt:"Canvas preview",className:"w-full h-full object-cover",style:{opacity:p/100}}):e.jsx("span",{className:"text-white font-bold text-2xl",children:t?"Hidden":"No Image"})}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 text-center max-w-md",children:"Use eye icon to hide/show image, trash icon to delete it"})]})}},B={args:{title:"Image with Filters"},render:()=>{const[t,l]=o.useState("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"),[r,c]=o.useState({exposure:0,contrast:0,saturation:0,temperature:0,tint:0,highlights:0,shadows:0}),a=s=>{if(s){const g=new FileReader;g.onloadend=()=>{l(g.result)},g.readAsDataURL(s)}},i=s=>{c(s)},n=()=>{const s=1+r.exposure/100,g=1+r.contrast/100,h=1+r.saturation/100,p=r.temperature*1.8;return{filter:`brightness(${s}) contrast(${g}) saturate(${h}) hue-rotate(${p}deg)`}};return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsx(F,{imageUrl:t,onImageChange:a,filters:r,onFiltersChange:i,title:"Image with Filters"}),e.jsx("div",{className:"w-80 h-48 rounded-lg shadow-lg bg-cover bg-center flex items-center justify-center text-white font-bold text-2xl",style:{backgroundImage:t?`url(${t})`:"none",backgroundColor:t?"transparent":"#e5e7eb",...n()},children:!t&&"No Image"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 text-center max-w-md",children:"Click on the image to open the modal and adjust filters using sliders"})]})}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Image'
  },
  render: () => {
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const handleImageChange = (file: File | null) => {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
    return <div className="space-y-4">
                <InputImageSelect imageUrl={imageUrl} onImageChange={handleImageChange} />
                <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                    {imageUrl ? 'Image selected' : 'No image selected'}
                </p>
            </div>;
  }
}`,...q.parameters?.docs?.source},description:{story:`Basic example of InputImageSelect component.
Use Controls to change parameters.
Switch background in toolbar to change theme (light/dark).`,...q.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Background Image'
  },
  render: () => {
    const [imageUrl, setImageUrl] = useState<string | undefined>('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop');
    const handleImageChange = (file: File | null) => {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
    return <div className="space-y-4 flex flex-col items-center gap-4">
                <InputImageSelect imageUrl={imageUrl} onImageChange={handleImageChange} title="Background Image" />
                <div className="w-80 h-48 rounded-lg shadow-lg bg-cover bg-center flex items-center justify-center text-white font-bold text-2xl" style={{
        backgroundImage: imageUrl ? \`url(\${imageUrl})\` : 'none',
        backgroundColor: imageUrl ? 'transparent' : '#e5e7eb'
      }}>
                    {!imageUrl && 'No Background'}
                </div>
            </div>;
  }
}`,...H.parameters?.docs?.source},description:{story:`## Background Image
Component for controlling element background image.`,...H.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Image with Actions'
  },
  render: () => {
    const [imageUrl, setImageUrl] = useState<string | undefined>('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop');
    const [isHidden, setIsHidden] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [rotatedImageUrl, setRotatedImageUrl] = useState<string | undefined>(imageUrl);
    const [isRotating, setIsRotating] = useState(false);
    const [opacityValue, setOpacityValue] = useState(100);
    const handleImageChange = (file: File | null) => {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const url = reader.result as string;
          setImageUrl(url);
          setRotatedImageUrl(url);
          setRotation(0);
        };
        reader.readAsDataURL(file);
      }
    };
    const handleDelete = () => {
      setImageUrl(undefined);
      setRotatedImageUrl(undefined);
      setRotation(0);
    };
    const handleHide = (hidden: boolean) => {
      setIsHidden(hidden);
    };
    useEffect(() => {
      if (!imageUrl) {
        setRotatedImageUrl(undefined);
        return;
      }
      if (rotation === 0) {
        setRotatedImageUrl(imageUrl);
        return;
      }
      const applyRotation = async () => {
        setIsRotating(true);
        try {
          const rotated = await rotateImage90Degrees(imageUrl, rotation);
          setRotatedImageUrl(rotated);
        } catch (error) {
          console.error('Failed to rotate image:', error);
          setRotatedImageUrl(imageUrl);
        } finally {
          setIsRotating(false);
        }
      };
      applyRotation();
    }, [imageUrl, rotation]);
    return <div className="space-y-4 flex flex-col items-center gap-4">
                <InputImageSelect imageUrl={imageUrl} opacity={opacityValue} onOpacityChange={setOpacityValue} onImageChange={handleImageChange} onDeleteImage={handleDelete} onHideImage={handleHide} rotation={rotation} onRotationChange={setRotation} title="Image with Actions" />
                <div className="w-80 h-48 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 relative overflow-hidden flex items-center justify-center">
                    {isRotating ? <span className="text-sm text-gray-500 dark:text-gray-300">
                            Rotating...
                        </span> : rotatedImageUrl && !isHidden ? <img src={rotatedImageUrl} alt="Canvas preview" className="w-full h-full object-cover" style={{
          opacity: opacityValue / 100
        }} /> : <span className="text-white font-bold text-2xl">
                            {!imageUrl ? 'No Image' : 'Hidden'}
                        </span>}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 text-center max-w-md">
                    Use eye icon to hide/show image, trash icon to delete it
                </p>
            </div>;
  }
}`,...A.parameters?.docs?.source},description:{story:`## With Actions
Demonstrating all available actions: hide and delete.`,...A.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Image with Filters'
  },
  render: () => {
    const [imageUrl, setImageUrl] = useState<string | undefined>('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop');
    const [filters, setFilters] = useState<ImageFilters>({
      exposure: 0,
      contrast: 0,
      saturation: 0,
      temperature: 0,
      tint: 0,
      highlights: 0,
      shadows: 0
    });
    const handleImageChange = (file: File | null) => {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
    const handleFiltersChange = (newFilters: ImageFilters) => {
      setFilters(newFilters);
    };
    const getFilterStyle = () => {
      const brightness = 1 + filters.exposure / 100;
      const contrast = 1 + filters.contrast / 100;
      const saturate = 1 + filters.saturation / 100;
      const hueRotate = filters.temperature * 1.8;
      return {
        filter: \`brightness(\${brightness}) contrast(\${contrast}) saturate(\${saturate}) hue-rotate(\${hueRotate}deg)\`
      };
    };
    return <div className="space-y-4 flex flex-col items-center gap-4">
                <InputImageSelect imageUrl={imageUrl} onImageChange={handleImageChange} filters={filters} onFiltersChange={handleFiltersChange} title="Image with Filters" />
                <div className="w-80 h-48 rounded-lg shadow-lg bg-cover bg-center flex items-center justify-center text-white font-bold text-2xl" style={{
        backgroundImage: imageUrl ? \`url(\${imageUrl})\` : 'none',
        backgroundColor: imageUrl ? 'transparent' : '#e5e7eb',
        ...getFilterStyle()
      }}>
                    {!imageUrl && 'No Image'}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 text-center max-w-md">
                    Click on the image to open the modal and adjust filters using sliders
                </p>
            </div>;
  }
}`,...B.parameters?.docs?.source},description:{story:`## With Image Filters
Demonstrating image filters: exposure, contrast, saturation, temperature, tint, highlights, and shadows.
Filters are applied in real-time and can be used to adjust the image appearance.`,...B.parameters?.docs?.description}}};const je=["Default","BackgroundImage","WithActions","WithImageFilters"];export{H as BackgroundImage,q as Default,A as WithActions,B as WithImageFilters,je as __namedExportsOrder,Ue as default};
