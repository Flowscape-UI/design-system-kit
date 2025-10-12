import{R as ee,j as e,r as n}from"./iframe-hrAirH9t.js";import{u as te,T as ae,A as re}from"./use-image-actions-CD376SO3.js";import{c as q}from"./cn-Bzm_o1ou.js";import{u as se,I as oe}from"./input-select-modal-5MdHnpxX.js";import{I as v}from"./input-theme-DZLah1XL.js";import{p as M,r as ne,h as _,f as ie,c as le,o as ce}from"./use-hex-input-Bo65ORHT.js";import{I as de}from"./input-hex-CpZLcSqA.js";import{C as ue}from"./index-DljDHXoq.js";import"./preload-helper-DCOVa-dD.js";import"./createLucideIcon-C2_XNH16.js";import"./index-CNySNrn1.js";import"./index-CMLUcoyQ.js";import"./input-number-select-Ci0ZAsHm.js";const ge=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23d1d1d1'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E")`,V=ee.forwardRef(({color:t,showCheckerboard:s=!0,size:g="size-5",className:p,onClick:i,disabled:l=!1},h)=>{const y=e.jsxs(e.Fragment,{children:[s&&e.jsx("div",{className:"absolute inset-0",style:{backgroundImage:ge}}),e.jsx("div",{className:"absolute inset-0",style:{background:t}})]}),d=q("relative rounded-sm overflow-hidden bg-white flex-shrink-0",g,p);return i?e.jsx("button",{ref:h,onClick:i,disabled:l,type:"button",className:q(d,{"cursor-pointer hover:opacity-90 transition-opacity":!l,"cursor-not-allowed opacity-50":l}),children:y}):e.jsx("div",{className:d,children:y})});V.displayName="ColorPreview";V.__docgenInfo={description:"Компонент для отображения цветового preview с опциональным checkerboard фоном",methods:[],displayName:"ColorPreview",props:{color:{required:!0,tsType:{name:"string"},description:"Цвет для отображения (любой валидный CSS color)"},showCheckerboard:{required:!1,tsType:{name:"boolean"},description:"Показывать checkerboard фон для прозрачности",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'size-4' | 'size-5' | 'size-6' | 'size-8'",elements:[{name:"literal",value:"'size-4'"},{name:"literal",value:"'size-5'"},{name:"literal",value:"'size-6'"},{name:"literal",value:"'size-8'"}]},description:"Размер preview (по умолчанию 'size-5')",defaultValue:{value:"'size-5'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Дополнительные классы"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Обработчик клика"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled состояние",defaultValue:{value:"false",computed:!1}}}};const pe=({value:t,onChange:s,onOpacityChange:g})=>{const{hex:p,opacity:i}=M(t),[l,h]=n.useState(t),[y,d]=n.useState(p),[A,m]=n.useState(t),[w,f]=n.useState(t.includes("gradient")?"gradient":"color"),[N,S]=n.useState(isNaN(i)?100:i);return n.useEffect(()=>{const{hex:a,opacity:r}=M(t);d(a),h(t),m(t),f(t.includes("gradient")?"gradient":"color"),t.includes("gradient")||S(isNaN(r)?100:r)},[t]),{hex:p,color:l,inputValue:y,livePreviewColor:A,colorType:w,opacityValue:N,handleInputChange:a=>{const r=ie(a.target.value);if(d(r),r.length===3||r.length===6){const c=`#${r}`,o=_(c);if(o){const x=`rgba(${o.r}, ${o.g}, ${o.b}, ${N/100})`;m(x)}}},handleInputFocus:()=>{y.startsWith("#")&&d(y.substring(1))},handleHexChange:()=>{if(p==="Linear")return;let a=y.trim();a.startsWith("#")||(a=`#${a}`);const r=_(a);if(r){const c=`rgba(${r.r}, ${r.g}, ${r.b}, ${N/100})`;s?.(c),d(a.toUpperCase())}else{const{hex:c}=M(t);d(c),m(t)}},handleOpacityChange:a=>{const r=isNaN(a)?100:a;if(g?.(r),S(r),l.includes("gradient")){const o=l.replace(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/g,(x,k,C,R)=>`rgba(${k}, ${C}, ${R}, ${r/100})`);h(o),m(o),s?.(o);return}const c=l.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(c){const o=c[1],x=c[2],k=c[3],C=`rgba(${o}, ${x}, ${k}, ${r/100})`;h(C),m(C),s?.(C)}else{const o=_(l);if(o){const x=`rgba(${o.r}, ${o.g}, ${o.b}, ${r/100})`;h(x),m(x),s?.(x)}}},handleColorChange:a=>{if(s?.(a),h(a),a.includes("gradient")){m(a),w==="color"&&f("gradient"),a.includes("linear-gradient")?d("Linear"):a.includes("radial-gradient")?d("Radial"):d("Gradient");return}if(w==="gradient"){f("color");return}const r=a.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(r){const c=r[4]!==void 0?parseFloat(r[4]):1,o=Math.round(c*100);S(isNaN(o)?100:o)}m(a),d(ne(a))}}},u=({title:t="Background Color",className:s,classNameGradientInput:g,value:p="rgba(255,255,255,1)",onChange:i,onShowPicker:l,onHideBackground:h,onOpacityChange:y,onDeleteBackground:d,showOpacity:A=!0,showGradient:m=!1,pickerSize:w=250})=>{const[f,N]=n.useState(!1),S=n.useRef(null),{isHidden:L,handleToggleHide:U,handleDelete:F}=te(h,d),{hex:W,color:z,inputValue:a,livePreviewColor:r,colorType:c,opacityValue:o,handleInputChange:x,handleOpacityChange:k,handleColorChange:C}=pe({value:p,onChange:i,onOpacityChange:y}),{resetPosition:R}=se(),K=()=>{f||R(),l?.(!f),N(T=>!T)},J=le(r,o),X=async()=>{if(c==="gradient"&&z)try{await navigator.clipboard.writeText(z)}catch(T){console.error("Failed to copy gradient:",T)}};return e.jsxs("div",{className:"w-fit",children:[e.jsxs("div",{className:q("flex items-center justify-between rounded-md p-1 border",v.light.container,v.dark.container,s),children:[c==="color"?e.jsxs("div",{className:"flex items-center gap-1 w-full",children:[e.jsx(V,{color:J,onClick:K}),e.jsx(de,{hexColor:`#${W.replace("#","")}${ce(o)}`,handleChange:T=>{const E=T.replace("#","").toUpperCase(),j=E.slice(0,6);let Q=o;if(E.length>=8){const D=E.slice(6,8),b=Math.round(parseInt(D,16)/255*100);!isNaN(b)&&b>=0&&b<=100&&(Q=b,k(b))}if(j.length===6&&/^[0-9A-F]{6}$/i.test(j)){const D=parseInt(j.slice(0,2),16),b=parseInt(j.slice(2,4),16),Y=parseInt(j.slice(4,6),16),Z=`rgba(${D}, ${b}, ${Y}, ${Q/100})`;i?.(Z),x({target:{value:j}})}},showAlpha:!0,className:"ml-1 bg-transparent border-none h-auto focus-within:ring-0 flex-1",classNameInput:q("bg-transparent px-2 font-mono text-xs",v.light.text,v.dark.text)})]}):e.jsxs("div",{className:"flex items-center gap-1 w-full",children:[e.jsx(V,{color:J,onClick:K}),e.jsx(ae,{onClick:X,textLightClass:v.light.text,textDarkClass:v.dark.text,className:g,title:"Click to copy",children:a})]}),e.jsx(re,{showOpacity:A,opacity:o,onOpacityChange:k,isHidden:L,onToggleVisibility:U,onDelete:F,dividerClassName:q(v.light.divider,v.dark.divider)})]}),f&&e.jsx(oe,{title:t,onClose:()=>N(!1),inputRef:S,children:e.jsx(ue,{className:"mx-auto",value:z,width:w,height:w,hideOpacity:!A,hideGradientControls:!m,onChange:C})})]})};u.__docgenInfo={description:"",methods:[],displayName:"InputColorPicker",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Background Color'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'rgba(255,255,255,1)'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},classNameGradientInput:{required:!1,tsType:{name:"string"},description:""},showOpacity:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showGradient:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pickerSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: string) => void",signature:{arguments:[{type:{name:"string"},name:"color"}],return:{name:"void"}}},description:""},onShowPicker:{required:!1,tsType:{name:"signature",type:"function",raw:"(hidden: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hidden"}],return:{name:"void"}}},description:""},onHideBackground:{required:!1,tsType:{name:"signature",type:"function",raw:"(hidden: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hidden"}],return:{name:"void"}}},description:""},onOpacityChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(opacity: number) => void",signature:{arguments:[{type:{name:"number"},name:"opacity"}],return:{name:"void"}}},description:""},onDeleteBackground:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Te={title:"Components/InputColorPicker",component:u,parameters:{layout:"centered",docs:{toc:{title:"Table of Contents"}},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"],argTypes:{value:{control:"text",description:"Current color value (solid color or gradient)"},onChange:{description:"Callback when color changes"},onOpacityChange:{description:"Callback when opacity changes"},className:{control:"text",description:"Custom classes for the container"},classNameGradientInput:{control:"text",description:"Custom classes for gradient input)"},showOpacity:{control:"boolean",description:"Show opacity control"},showGradient:{control:"boolean",description:"Show gradient controls in picker"},pickerSize:{control:"number",description:"Size of the color picker popup"},title:{control:"text",description:"Title shown in picker header"}}},B={args:{value:"rgba(175, 51, 242, 1)",showOpacity:!0,showGradient:!1,pickerSize:250},render:()=>{const[t,s]=n.useState("rgba(175, 51, 242, 1)");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(u,{value:t,onChange:s}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-300",children:["Current color: ",t]})]})}},O={args:{value:"rgba(59, 130, 246, 1)"},render:()=>{const[t,s]=n.useState("rgba(59, 130, 246, 1)");return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsx(u,{value:t,onChange:s,title:"Background Color",showOpacity:!0}),e.jsx("div",{className:"w-64 h-32 rounded-lg flex items-center justify-center text-white font-semibold",style:{background:t},children:"Background Preview"})]})}},P={args:{value:"rgba(239, 68, 68, 1)"},render:()=>{const[t,s]=n.useState("rgba(239, 68, 68, 1)");return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsx(u,{value:t,onChange:s,title:"Text Color",showOpacity:!0}),e.jsxs("div",{className:"max-w-md p-6 bg-gray-100 dark:bg-gray-800 rounded-lg",children:[e.jsx("h3",{className:"text-2xl font-bold mb-2",style:{color:t},children:"Colored Heading"}),e.jsx("p",{className:"text-base",style:{color:t},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})}},I={args:{value:"linear-gradient(135deg, rgba(255, 107, 107, 1) 0%, rgba(78, 205, 196, 1) 100%)"},render:()=>{const[t,s]=n.useState("linear-gradient(135deg, rgba(255, 107, 107, 1) 0%, rgba(78, 205, 196, 1) 100%)");return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsx(u,{value:t,onChange:s,title:"Gradient Background",showOpacity:!0,showGradient:!0}),e.jsx("div",{className:"w-80 h-48 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xl",style:{background:t},children:"Gradient Preview"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 text-center max-w-md",children:'Click "Linear" to copy gradient CSS. Use opacity control to adjust transparency.'})]})}},H={args:{value:"rgba(59, 130, 246, 1)"},render:()=>{const[t,s]=n.useState("rgba(59, 130, 246, 1)"),[g,p]=n.useState("rgba(139, 92, 246, 1)"),[i,l]=n.useState("rgba(236, 72, 153, 1)");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Primary Color"}),e.jsx(u,{value:t,onChange:s,title:"Primary"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Secondary Color"}),e.jsx(u,{value:g,onChange:p,title:"Secondary"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Accent Color"}),e.jsx(u,{value:i,onChange:l,title:"Accent"})]})]}),e.jsxs("div",{className:"flex gap-3 justify-center",children:[e.jsx("div",{className:"w-20 h-20 rounded-lg shadow-md",style:{background:t}}),e.jsx("div",{className:"w-20 h-20 rounded-lg shadow-md",style:{background:g}}),e.jsx("div",{className:"w-20 h-20 rounded-lg shadow-md",style:{background:i}})]})]})}},$={args:{value:"rgba(255, 255, 255, 1)"},render:()=>{const[t,s]=n.useState("rgba(255, 255, 255, 1)"),[g,p]=n.useState("linear-gradient(135deg, rgba(99, 102, 241, 1) 0%, rgba(139, 92, 246, 1) 100%)"),[i,l]=n.useState("rgba(31, 41, 55, 1)");return e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-medium text-gray-700 dark:text-gray-300",children:"Card Background"}),e.jsx(u,{value:t,onChange:s,title:"Card BG",showOpacity:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-medium text-gray-700 dark:text-gray-300",children:"Header Background"}),e.jsx(u,{value:g,onChange:p,title:"Header BG",showOpacity:!0,showGradient:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-medium text-gray-700 dark:text-gray-300",children:"Text Color"}),e.jsx(u,{value:i,onChange:l,title:"Text",showOpacity:!0})]})]}),e.jsxs("div",{className:"rounded-xl shadow-xl overflow-hidden",style:{background:t},children:[e.jsx("div",{className:"h-32 flex items-center justify-center text-white font-bold text-xl",style:{background:g},children:"Card Header"}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",style:{color:i},children:"Card Title"}),e.jsx("p",{className:"text-sm",style:{color:i},children:"This is a preview of your card design. Adjust colors above to see changes in real-time."})]})]})]})}},G={args:{value:"rgba(0, 0, 0, 0.5)"},render:()=>{const[t,s]=n.useState("rgba(0, 0, 0, 0.5)");return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsx(u,{value:t,onChange:s,title:"Overlay Color",showOpacity:!0}),e.jsxs("div",{className:"relative w-80 h-48 rounded-lg overflow-hidden",children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",alt:"Background",className:"absolute inset-0 w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-white font-bold text-2xl",style:{background:t},children:"Overlay Text"})]}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 text-center max-w-md",children:"Adjust opacity to control overlay transparency"})]})}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'rgba(175, 51, 242, 1)',
    showOpacity: true,
    showGradient: false,
    pickerSize: 250
  },
  render: () => {
    const [color, setColor] = useState('rgba(175, 51, 242, 1)');
    return <div className="space-y-4">
                <InputColorPicker value={color} onChange={setColor} />
                <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                    Current color: {color}
                </p>
            </div>;
  }
}`,...B.parameters?.docs?.source},description:{story:`Basic example of InputColorPicker component.
Use Controls to change parameters.
Switch background in toolbar to change theme (light/dark).`,...B.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'rgba(59, 130, 246, 1)'
  },
  render: () => {
    const [bgColor, setBgColor] = useState('rgba(59, 130, 246, 1)');
    return <div className="space-y-4 flex flex-col items-center gap-4">
                <InputColorPicker value={bgColor} onChange={setBgColor} title="Background Color" showOpacity={true} />
                <div className="w-64 h-32 rounded-lg flex items-center justify-center text-white font-semibold" style={{
        background: bgColor
      }}>
                    Background Preview
                </div>
            </div>;
  }
}`,...O.parameters?.docs?.source},description:{story:`## Background Color
Component for controlling element background color with opacity.`,...O.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'rgba(239, 68, 68, 1)'
  },
  render: () => {
    const [textColor, setTextColor] = useState('rgba(239, 68, 68, 1)');
    return <div className="space-y-4 flex flex-col items-center gap-4">
                <InputColorPicker value={textColor} onChange={setTextColor} title="Text Color" showOpacity={true} />
                <div className="max-w-md p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2" style={{
          color: textColor
        }}>
                        Colored Heading
                    </h3>
                    <p className="text-base" style={{
          color: textColor
        }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>;
  }
}`,...P.parameters?.docs?.source},description:{story:`## Text Color
Component for controlling text color.`,...P.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'linear-gradient(135deg, rgba(255, 107, 107, 1) 0%, rgba(78, 205, 196, 1) 100%)'
  },
  render: () => {
    const [gradient, setGradient] = useState('linear-gradient(135deg, rgba(255, 107, 107, 1) 0%, rgba(78, 205, 196, 1) 100%)');
    return <div className="space-y-4 flex flex-col items-center gap-4">
                <InputColorPicker value={gradient} onChange={setGradient} title="Gradient Background" showOpacity={true} showGradient={true} />
                <div className="w-80 h-48 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xl" style={{
        background: gradient
      }}>
                    Gradient Preview
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 text-center max-w-md">
                    Click "Linear" to copy gradient CSS. Use opacity control to adjust
                    transparency.
                </p>
            </div>;
  }
}`,...I.parameters?.docs?.source},description:{story:`## Gradient Background
Component with gradient support for creating beautiful backgrounds.`,...I.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'rgba(59, 130, 246, 1)'
  },
  render: () => {
    const [primary, setPrimary] = useState('rgba(59, 130, 246, 1)');
    const [secondary, setSecondary] = useState('rgba(139, 92, 246, 1)');
    const [accent, setAccent] = useState('rgba(236, 72, 153, 1)');
    return <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Primary Color
                        </p>
                        <InputColorPicker value={primary} onChange={setPrimary} title="Primary" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Secondary Color
                        </p>
                        <InputColorPicker value={secondary} onChange={setSecondary} title="Secondary" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Accent Color
                        </p>
                        <InputColorPicker value={accent} onChange={setAccent} title="Accent" />
                    </div>
                </div>

                <div className="flex gap-3 justify-center">
                    <div className="w-20 h-20 rounded-lg shadow-md" style={{
          background: primary
        }} />
                    <div className="w-20 h-20 rounded-lg shadow-md" style={{
          background: secondary
        }} />
                    <div className="w-20 h-20 rounded-lg shadow-md" style={{
          background: accent
        }} />
                </div>
            </div>;
  }
}`,...H.parameters?.docs?.source},description:{story:`## Multiple Colors
Managing multiple colors for a design system.`,...H.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'rgba(255, 255, 255, 1)'
  },
  render: () => {
    const [cardBg, setCardBg] = useState('rgba(255, 255, 255, 1)');
    const [headerBg, setHeaderBg] = useState('linear-gradient(135deg, rgba(99, 102, 241, 1) 0%, rgba(139, 92, 246, 1) 100%)');
    const [textColor, setTextColor] = useState('rgba(31, 41, 55, 1)');
    return <div className="space-y-6 w-80">
                <div className="grid grid-cols-1 gap-3">
                    <div className="space-y-2">
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            Card Background
                        </p>
                        <InputColorPicker value={cardBg} onChange={setCardBg} title="Card BG" showOpacity={true} />
                    </div>
                    <div className="space-y-2">
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            Header Background
                        </p>
                        <InputColorPicker value={headerBg} onChange={setHeaderBg} title="Header BG" showOpacity={true} showGradient={true} />
                    </div>
                    <div className="space-y-2">
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            Text Color
                        </p>
                        <InputColorPicker value={textColor} onChange={setTextColor} title="Text" showOpacity={true} />
                    </div>
                </div>

                <div className="rounded-xl shadow-xl overflow-hidden" style={{
        background: cardBg
      }}>
                    <div className="h-32 flex items-center justify-center text-white font-bold text-xl" style={{
          background: headerBg
        }}>
                        Card Header
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2" style={{
            color: textColor
          }}>
                            Card Title
                        </h3>
                        <p className="text-sm" style={{
            color: textColor
          }}>
                            This is a preview of your card design. Adjust colors above to see
                            changes in real-time.
                        </p>
                    </div>
                </div>
            </div>;
  }
}`,...$.parameters?.docs?.source},description:{story:`## Card Design
Using color picker to design a card component.`,...$.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'rgba(0, 0, 0, 0.5)'
  },
  render: () => {
    const [overlayColor, setOverlayColor] = useState('rgba(0, 0, 0, 0.5)');
    return <div className="space-y-4 flex flex-col items-center gap-4">
                <InputColorPicker value={overlayColor} onChange={setOverlayColor} title="Overlay Color" showOpacity={true} />
                <div className="relative w-80 h-48 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl" style={{
          background: overlayColor
        }}>
                        Overlay Text
                    </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 text-center max-w-md">
                    Adjust opacity to control overlay transparency
                </p>
            </div>;
  }
}`,...G.parameters?.docs?.source},description:{story:`## Opacity Control
Demonstrating opacity control for overlays and backgrounds.`,...G.parameters?.docs?.description}}};const Be=["Default","BackgroundColor","TextColor","GradientBackground","MultipleColors","CardDesign","OpacityControl"];export{O as BackgroundColor,$ as CardDesign,B as Default,I as GradientBackground,H as MultipleColors,G as OpacityControl,P as TextColor,Be as __namedExportsOrder,Te as default};
