import{R as te,r as l,j as e}from"./iframe-CMuf9cB7.js";import{t as h}from"./tinycolor-CTCHxbWk.js";import{c as C,I as se}from"./input-Ci731--R.js";import{c as oe}from"./createLucideIcon-C8kB59Fu.js";import"./preload-helper-DCOVa-dD.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],le=oe("palette",ne),x={light:{container:"bg-white border-gray-300 focus-within:ring-blue-500",input:"text-gray-900",icon:"text-gray-600",dragArea:"bg-gray-100 hover:bg-gray-200",preview:"border-gray-300"},dark:{container:"dark:bg-gray-800 dark:border-gray-600 dark:focus-within:ring-blue-400",input:"dark:text-gray-100",icon:"dark:text-gray-300",dragArea:"dark:bg-gray-700 dark:hover:bg-gray-600",preview:"dark:border-gray-600"}},c=te.forwardRef(({hexColor:r,handleChange:t,className:s,classNameInput:o,classNameIcon:d,classNamePreview:n,disabled:a,isDisabledMouseEvent:i=!1,onIconClick:V,onIconPointerDown:K,onIconPointerUp:O,showAlpha:u=!1,...J},Q)=>{const[q,A]=l.useState(!1),L=h(r),I=L.toHex(),G=L.getAlpha(),Y=Math.round(G*255).toString(16).padStart(2,"0"),D=u&&G<1?I+Y:I,[y,E]=l.useState(D),_=l.useRef(0);l.useEffect(()=>{q||E(D)},[r,q,D]);const U=g=>{const p=g.slice(0,6),m=g.slice(6,8),W=parseInt(m,16)/255;return h(`#${p}`).setAlpha(W).toHex8String().toUpperCase()},Z=g=>{const p=u?8:6,m=g.target.value.replace(/[^0-9a-fA-F]/g,"").slice(0,p).toUpperCase();E(m),m.length===6?t(`#${m}`):m.length===8&&u&&t(U(m))},ee=()=>{V?.(y)},re=g=>{if(a||i)return;g.preventDefault(),K?.(y);const p=g.currentTarget;p.setPointerCapture(g.pointerId);const m=document.createElement("style");m.id="dragging-cursor-style",m.innerHTML=`
        body, body * {
          cursor: ew-resize !important;
          user-select: none !important;
        }
      `,document.head.appendChild(m),_.current=parseInt(I,16);const W=g.clientX;A(!0);const B=u&&y.length>=8?y.slice(6,8):"",z=T=>{const H=T.clientX-W;let R=Math.round(_.current+H*55e3);R=Math.max(0,Math.min(16777215,R));const M=R.toString(16).padStart(6,"0").toUpperCase();E(M+B),t(u&&B?U(M+B):`#${M}`)},X=T=>{p.releasePointerCapture(T.pointerId),A(!1),O?.(y);const H=document.getElementById("dragging-cursor-style");H&&H.remove(),p.removeEventListener("pointermove",z),document.removeEventListener("pointerup",X)};p.addEventListener("pointermove",z),document.addEventListener("pointerup",X)},$=h(r).toRgbString(),ae=l.useMemo(()=>e.jsx("div",{className:C("w-5 h-5 rounded border-2 flex-shrink-0",x.light.preview,x.dark.preview,n),style:{backgroundColor:$}}),[$,n]);return e.jsxs("div",{className:C("inline-flex items-center overflow-hidden rounded-lg border-2 focus-within:ring-1 focus-within:ring-ring h-8",x.light.container,x.dark.container,s),children:[e.jsx("button",{type:"button",onClick:ee,onPointerDown:re,className:C("flex items-center justify-center aspect-square h-full",x.light.dragArea,x.dark.dragArea,{"cursor-ew-resize":!i&&!a,"cursor-not-allowed opacity-50":a||i},d),disabled:i||a,children:ae}),e.jsx("span",{className:C("px-2 text-sm font-medium select-none",x.light.icon,x.dark.icon),children:"#"}),e.jsx(se,{type:"text",className:C("w-full rounded-none border-none bg-transparent text-left px-2 py-0 h-full text-sm",x.light.input,x.dark.input,o),value:y.toLocaleUpperCase(),onChange:Z,onFocus:()=>A(!0),onBlur:()=>A(!1),maxLength:u?8:6,disabled:a,ref:Q,...J})]})});c.displayName="InputHexWithPreview";c.__docgenInfo={description:"",methods:[],displayName:"InputHexWithPreview",props:{hexColor:{required:!0,tsType:{name:"string"},description:""},handleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(hexColor: string) => void",signature:{arguments:[{type:{name:"string"},name:"hexColor"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},classNameInput:{required:!1,tsType:{name:"string"},description:""},classNameIcon:{required:!1,tsType:{name:"string"},description:""},classNamePreview:{required:!1,tsType:{name:"string"},description:""},isDisabledMouseEvent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(hexColor: string) => void",signature:{arguments:[{type:{name:"string"},name:"hexColor"}],return:{name:"void"}}},description:""},onIconPointerDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(hexColor: string) => void",signature:{arguments:[{type:{name:"string"},name:"hexColor"}],return:{name:"void"}}},description:""},onIconPointerUp:{required:!1,tsType:{name:"signature",type:"function",raw:"(hexColor: string) => void",signature:{arguments:[{type:{name:"string"},name:"hexColor"}],return:{name:"void"}}},description:""},showAlpha:{required:!1,tsType:{name:"boolean"},description:`Show and allow alpha channel input (another 2 hex symbols).
By default disabled (input only 6 symbols).`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const pe={title:"Components/InputHexWithPreview",component:c,parameters:{layout:"centered",docs:{toc:{title:"Table of Contents"}},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"],argTypes:{hexColor:{control:"color",description:'HEX color string (e.g., "#AF33F2")'},disabled:{control:"boolean",description:"Disable component"},isDisabledMouseEvent:{control:"boolean",description:"Disable mouse dragging"},classNamePreview:{control:"text",description:"Custom classes for color preview"},showAlpha:{control:"boolean",description:"Allow manual input of alpha channel (adds 2 hex symbols, total up to 8)"}}},v={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=l.useState("#AF33F2");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{hexColor:r,handleChange:t}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-300",children:["Current color: ",r]})]})}},P={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=l.useState(["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F"]),s=o=>d=>{const n=[...r];n[o]=d,t(n)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"grid grid-cols-2 gap-3",children:r.map((o,d)=>e.jsx(c,{hexColor:o,handleChange:s(d)},d))}),e.jsx("div",{className:"flex justify-center gap-2 flex-wrap",children:r.map((o,d)=>e.jsx("div",{className:"w-12 h-12 rounded-lg border-2 border-gray-300 dark:border-gray-600",style:{backgroundColor:o}},d))})]})}},f={args:{hexColor:"#FF6B6B",handleChange:r=>{}},render:()=>{const[r,t]=l.useState("#FF6B6B"),[s,o]=l.useState("#4ECDC4");return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 text-center",children:"Start"}),e.jsx(c,{hexColor:r,handleChange:t})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 text-center",children:"End"}),e.jsx(c,{hexColor:s,handleChange:o})]})]}),e.jsx("div",{className:"w-64 h-32 rounded-lg",style:{background:`linear-gradient(to right, ${r}, ${s})`}})]})}},N={args:{hexColor:"#AF33F2DD",handleChange:r=>{}},render:()=>{const[r,t]=l.useState("#AF33F2DD"),s=d=>{t(d)},o=h(r).getAlpha();return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-3 items-center",children:[e.jsx(c,{hexColor:r,handleChange:s,showAlpha:!0}),e.jsxs("div",{className:"space-y-1 flex gap-4",children:[e.jsx("label",{className:"text-xs text-gray-600 dark:text-gray-300",children:"Alpha:"}),e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 font-mono",children:[Math.round(o*100),"% (",r,")"]})]})]}),e.jsxs("div",{className:"relative w-48 h-48 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0",style:{backgroundImage:"repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 20px 20px"}}),e.jsx("div",{className:"absolute inset-0 rounded-lg",style:{backgroundColor:h(r).toRgbString()}})]}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 text-center max-w-md",children:"Enter last 2 hex-symbols for alpha-channel (e.g., 80 = 50% transparency). Preview shows real transparency on chessboard background."})]})}},b={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=l.useState("#AF33F2"),s=h(r),o=s.complement().toHexString(),d=s.analogous(3),n=s.triad();return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Primary color"}),e.jsx(c,{hexColor:r,handleChange:t})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Complementary"}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-7 h-7 rounded-md border-2 border-gray-300 dark:border-gray-600",style:{backgroundColor:o}}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400 font-mono",children:o})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Analogous"}),e.jsx("div",{className:"flex gap-2",children:d.map((a,i)=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("div",{className:"w-12 h-12 rounded-md border-2 border-gray-300 dark:border-gray-600",style:{backgroundColor:a.toHexString()}}),e.jsx("span",{className:"text-xs text-gray-600 dark:text-gray-400 font-mono",children:a.toHexString()})]},i))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Triad"}),e.jsx("div",{className:"flex gap-2",children:n.map((a,i)=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("div",{className:"w-12 h-12 rounded-md border-2 border-gray-300 dark:border-gray-600",style:{backgroundColor:a.toHexString()}}),e.jsx("span",{className:"text-xs text-gray-600 dark:text-gray-400 font-mono",children:a.toHexString()})]},i))})]})]})}},w={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=l.useState("#AF33F2"),s=h(r),o=Array.from({length:5},(n,a)=>{const i=(a+1)*15;return s.clone().lighten(i)}),d=Array.from({length:5},(n,a)=>{const i=(a+1)*15;return s.clone().darken(i)});return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Base color"}),e.jsx(c,{hexColor:r,handleChange:t})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Tints (lighter)"}),e.jsx("div",{className:"flex gap-1",children:o.map((n,a)=>e.jsx("div",{className:"w-12 h-12 rounded border border-gray-300 dark:border-gray-600",style:{backgroundColor:n.toHexString()},title:n.toHexString()},a))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Shades (darker)"}),e.jsx("div",{className:"flex gap-1",children:d.map((n,a)=>e.jsx("div",{className:"w-12 h-12 rounded border border-gray-300 dark:border-gray-600",style:{backgroundColor:n.toHexString()},title:n.toHexString()},a))})]})]})}},k={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=l.useState(["#AF33F2","#FF6B6B","#4ECDC4"]),s=()=>h.random().toHexString(),o=()=>{t([s(),s(),s()])},d=n=>a=>{const i=[...r];i[n]=a,t(i)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex gap-3",children:r.map((n,a)=>e.jsx(c,{hexColor:n,handleChange:d(a)},a))}),e.jsxs("button",{onClick:o,className:"mx-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2",children:[e.jsx(le,{size:16}),"Generate new colors"]})]})}},F={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r]=l.useState("#AF33F2");return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"InputHexWithPreview (disabled)"}),e.jsx(c,{hexColor:r,handleChange:()=>{},disabled:!0})]})})}},j={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=l.useState("#AF33F2"),[s,o]=l.useState("#AF33F2");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"With dragging (default)"}),e.jsx(c,{hexColor:r,handleChange:t,isDisabledMouseEvent:!1}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Can drag color preview and enter value"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Without dragging"}),e.jsx(c,{hexColor:s,handleChange:o,isDisabledMouseEvent:!0}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Keyboard input only, dragging disabled"})]})]})}},S={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=l.useState("#AF33F2"),[s,o]=l.useState("#FF6B6B"),[d,n]=l.useState("#4ECDC4");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Large preview"}),e.jsx(c,{hexColor:r,handleChange:t,classNamePreview:"w-10 h-10"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Rounded preview"}),e.jsx(c,{hexColor:s,handleChange:o,classNamePreview:"rounded-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Without border"}),e.jsx(c,{hexColor:d,handleChange:n,classNamePreview:"border-0"})]})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    hexColor: '#AF33F2',
    handleChange: (newColor: string) => {}
  },
  render: () => {
    const [color, setColor] = useState('#AF33F2');
    return <div className="space-y-4">
                <InputHexWithPreview hexColor={color} handleChange={setColor} />
                <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                    Current color: {color}
                </p>
            </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Basic example of InputHexWithPreview component.
Use Controls to change parameters.
Switch background in toolbar to change theme (light/dark).`,...v.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    hexColor: '#AF33F2',
    handleChange: (newColor: string) => {}
  },
  render: () => {
    const [colors, setColors] = useState(['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F']);
    const handleColorChange = (index: number) => (newColor: string) => {
      const newColors = [...colors];
      newColors[index] = newColor;
      setColors(newColors);
    };
    return <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    {colors.map((color, index) => <InputHexWithPreview key={index} hexColor={color} handleChange={handleColorChange(index)} />)}
                </div>
                <div className="flex justify-center gap-2 flex-wrap">
                    {colors.map((color, index) => <div key={index} className="w-12 h-12 rounded-lg border-2 border-gray-300 dark:border-gray-600" style={{
          backgroundColor: color
        }} />)}
                </div>
            </div>;
  }
}`,...P.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    hexColor: '#FF6B6B',
    handleChange: (newColor: string) => {}
  },
  render: () => {
    const [color1, setColor1] = useState('#FF6B6B');
    const [color2, setColor2] = useState('#4ECDC4');
    return <div className="space-y-4 flex flex-col items-center gap-4">
                <div className="flex gap-3 items-center">
                    <div className="space-y-2">
                        <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
                            Start
                        </p>
                        <InputHexWithPreview hexColor={color1} handleChange={setColor1} />
                    </div>
                    <div className="space-y-2">
                        <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
                            End
                        </p>
                        <InputHexWithPreview hexColor={color2} handleChange={setColor2} />
                    </div>
                </div>
                <div className="w-64 h-32 rounded-lg" style={{
        background: \`linear-gradient(to right, \${color1}, \${color2})\`
      }} />
            </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:`## Gradient
Creating a gradient from two colors.`,...f.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    hexColor: '#AF33F2DD',
    handleChange: (newColor: string) => {}
  },
  render: () => {
    const [color, setColor] = useState('#AF33F2DD');
    const handleChange = (newColor: string) => {
      setColor(newColor);
    };
    const currentAlpha = tc(color).getAlpha();
    return <div className="space-y-4 flex flex-col items-center gap-4">
                <div className="flex flex-col gap-3 items-center">
                    <InputHexWithPreview hexColor={color} handleChange={handleChange} showAlpha />
                    <div className="space-y-1 flex gap-4">
                        <label className="text-xs text-gray-600 dark:text-gray-300">
                            Alpha:
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                            {Math.round(currentAlpha * 100)}% ({color})
                        </p>
                    </div>
                </div>
                <div className="relative w-48 h-48 rounded-lg overflow-hidden">
                    <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 20px 20px'
        }} />
                    <div className="absolute inset-0 rounded-lg" style={{
          backgroundColor: tc(color).toRgbString()
        }} />
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 text-center max-w-md">
                    Enter last 2 hex-symbols for alpha-channel (e.g., 80 = 50%
                    transparency). Preview shows real transparency on chessboard
                    background.
                </p>
            </div>;
  }
}`,...N.parameters?.docs?.source},description:{story:`## With alpha
Component with alpha channel support.`,...N.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    hexColor: '#AF33F2',
    handleChange: (newColor: string) => {}
  },
  render: () => {
    const [primaryColor, setPrimaryColor] = useState('#AF33F2');
    const hexColor = tc(primaryColor);

    // Generate complementary colors
    const complementary = hexColor.complement().toHexString();
    const analogous = hexColor.analogous(3);
    const triad = hexColor.triad();
    return <div className="space-y-6">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Primary color
                    </p>
                    <InputHexWithPreview hexColor={primaryColor} handleChange={setPrimaryColor} />
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Complementary
                    </p>
                    <div className="flex gap-2 items-center">
                        <div className="w-7 h-7 rounded-md border-2 border-gray-300 dark:border-gray-600" style={{
            backgroundColor: complementary
          }} />
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                            {complementary}
                        </span>
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Analogous
                    </p>
                    <div className="flex gap-2">
                        {analogous.map((color, index) => <div key={index} className="flex flex-col items-center gap-1">
                                <div className="w-12 h-12 rounded-md border-2 border-gray-300 dark:border-gray-600" style={{
              backgroundColor: color.toHexString()
            }} />
                                <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                                    {color.toHexString()}
                                </span>
                            </div>)}
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Triad
                    </p>
                    <div className="flex gap-2">
                        {triad.map((color, index) => <div key={index} className="flex flex-col items-center gap-1">
                                <div className="w-12 h-12 rounded-md border-2 border-gray-300 dark:border-gray-600" style={{
              backgroundColor: color.toHexString()
            }} />
                                <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                                    {color.toHexString()}
                                </span>
                            </div>)}
                    </div>
                </div>
            </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:`## Color scheme
Creating a color scheme with primary and complementary colors.`,...b.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    hexColor: '#AF33F2',
    handleChange: (newColor: string) => {}
  },
  render: () => {
    const [color, setColor] = useState('#AF33F2');
    const hexColor = tc(color);

    // Generate tints (lighter)
    const tints = Array.from({
      length: 5
    }, (_, i) => {
      const amount = (i + 1) * 15;
      return hexColor.clone().lighten(amount);
    });

    // Generate shades (darker)
    const shades = Array.from({
      length: 5
    }, (_, i) => {
      const amount = (i + 1) * 15;
      return hexColor.clone().darken(amount);
    });
    return <div className="space-y-6">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Base color
                    </p>
                    <InputHexWithPreview hexColor={color} handleChange={setColor} />
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Tints (lighter)
                    </p>
                    <div className="flex gap-1">
                        {tints.map((tint, index) => <div key={index} className="w-12 h-12 rounded border border-gray-300 dark:border-gray-600" style={{
            backgroundColor: tint.toHexString()
          }} title={tint.toHexString()} />)}
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Shades (darker)
                    </p>
                    <div className="flex gap-1">
                        {shades.map((shade, index) => <div key={index} className="w-12 h-12 rounded border border-gray-300 dark:border-gray-600" style={{
            backgroundColor: shade.toHexString()
          }} title={shade.toHexString()} />)}
                    </div>
                </div>
            </div>;
  }
}`,...w.parameters?.docs?.source},description:{story:`## Tints and shades
Generating tints and shades of a color.`,...w.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    hexColor: '#AF33F2',
    handleChange: (newColor: string) => {}
  },
  render: () => {
    const [colors, setColors] = useState<string[]>(['#AF33F2', '#FF6B6B', '#4ECDC4']);
    const generateRandomColor = () => {
      return tc.random().toHexString();
    };
    const handleGenerate = () => {
      setColors([generateRandomColor(), generateRandomColor(), generateRandomColor()]);
    };
    const handleColorChange = (index: number) => (newColor: string) => {
      const newColors = [...colors];
      newColors[index] = newColor;
      setColors(newColors);
    };
    return <div className="space-y-4">
                <div className="flex gap-3">
                    {colors.map((color, index) => <InputHexWithPreview key={index} hexColor={color} handleChange={handleColorChange(index)} />)}
                </div>
                <button onClick={handleGenerate} className="mx-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2">
                    <Palette size={16} />
                    Generate new colors
                </button>
            </div>;
  }
}`,...k.parameters?.docs?.source},description:{story:`## Random colors
Random color generator.`,...k.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    hexColor: '#AF33F2',
    handleChange: (newColor: string) => {}
  },
  render: () => {
    const [color] = useState('#AF33F2');
    return <div className="space-y-4">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        InputHexWithPreview (disabled)
                    </p>
                    <InputHexWithPreview hexColor={color} handleChange={() => {}} disabled={true} />
                </div>
            </div>;
  }
}`,...F.parameters?.docs?.source},description:{story:`## Disabled state
Component in disabled state.`,...F.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    hexColor: '#AF33F2',
    handleChange: (newColor: string) => {}
  },
  render: () => {
    const [color1, setColor1] = useState('#AF33F2');
    const [color2, setColor2] = useState('#AF33F2');
    return <div className="space-y-6">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        With dragging (default)
                    </p>
                    <InputHexWithPreview hexColor={color1} handleChange={setColor1} isDisabledMouseEvent={false} />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Can drag color preview and enter value
                    </p>
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Without dragging
                    </p>
                    <InputHexWithPreview hexColor={color2} handleChange={setColor2} isDisabledMouseEvent={true} />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Keyboard input only, dragging disabled
                    </p>
                </div>
            </div>;
  }
}`,...j.parameters?.docs?.source},description:{story:"## Mouse event control\nDemonstration of `isDisabledMouseEvent` property.\nWhen enabled, dragging is disabled, only keyboard input remains.",...j.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    hexColor: '#AF33F2',
    handleChange: (newColor: string) => {}
  },
  render: () => {
    const [color1, setColor1] = useState('#AF33F2');
    const [color2, setColor2] = useState('#FF6B6B');
    const [color3, setColor3] = useState('#4ECDC4');
    return <div className="space-y-4">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Large preview
                    </p>
                    <InputHexWithPreview hexColor={color1} handleChange={setColor1} classNamePreview="w-10 h-10" />
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Rounded preview
                    </p>
                    <InputHexWithPreview hexColor={color2} handleChange={setColor2} classNamePreview="rounded-full" />
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Without border
                    </p>
                    <InputHexWithPreview hexColor={color3} handleChange={setColor3} classNamePreview="border-0" />
                </div>
            </div>;
  }
}`,...S.parameters?.docs?.source},description:{story:`## Custom styles
Examples with custom preview styles.`,...S.parameters?.docs?.description}}};const he=["Default","ColorPalette","GradientCreator","WithAlpha","ColorScheme","TintsAndShades","RandomColors","DisabledState","MouseEventControl","CustomStyles"];export{P as ColorPalette,b as ColorScheme,S as CustomStyles,v as Default,F as DisabledState,f as GradientCreator,j as MouseEventControl,k as RandomColors,w as TintsAndShades,N as WithAlpha,he as __namedExportsOrder,pe as default};
