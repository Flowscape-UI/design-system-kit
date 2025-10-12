import{R as $,r as c,j as e}from"./iframe-DEXx_Rvw.js";import{u as O,t as m,a as K,I as V,D as X,b as J}from"./use-hex-input-YmIulaup.js";import{a as Q,I as g}from"./input-theme-CYF-iDsr.js";import{c as D}from"./cn-Bzm_o1ou.js";import{c as Y}from"./createLucideIcon-BwO1ILjJ.js";import"./preload-helper-DCOVa-dD.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],ee=Y("palette",Z),d=$.forwardRef(({hexColor:r,handleChange:t,className:a,classNameInput:s,classNameIcon:l,classNamePreview:n,disabled:o,isDisabledMouseEvent:i=!1,onIconClick:I,onIconPointerDown:W,onIconPointerUp:E,showAlpha:w=!1,...B},T)=>{const{localHex:x,handleHexInput:R,setIsEditing:k,setLocalHex:M}=O({hexColor:r,onChange:t,showAlpha:w}),q=m(r).toHex(),G=()=>{I?.(x)},{handlePointerDown:_}=K({orientation:"horizontal",onDragChange:(j,U)=>{let S=Math.round(U+j*55e3);S=Math.max(0,Math.min(16777215,S));const A=S.toString(16).padStart(6,"0").toUpperCase(),H=w&&x.length>=8?x.slice(6,8):"";M(A+H),t(w&&H?J(A+H):`#${A}`)},onDragStart:()=>{k(!0),W?.(x)},onDragEnd:()=>{k(!1),E?.(x)},disabled:o||i}),L=j=>{_(j,parseInt(q,16))},P=m(r).toRgbString(),z=c.useMemo(()=>e.jsx("div",{className:D("w-5 h-5 rounded border-2 flex-shrink-0",g.light.preview,g.dark.preview,n),style:{backgroundColor:P}}),[P,n]);return e.jsxs(V,{className:a,children:[e.jsx(X,{onClick:G,onPointerDown:L,disabled:o,isDisabledMouseEvent:i,dragOrientation:"horizontal",className:l,children:z}),e.jsx("span",{className:D("px-2 text-sm font-medium select-none",g.light.icon,g.dark.icon),children:"#"}),e.jsx(Q,{type:"text",className:D("w-full rounded-none border-none bg-transparent text-left px-2 py-0 h-full text-sm",g.light.input,g.dark.input,s),value:x.toLocaleUpperCase(),onChange:R,onFocus:()=>k(!0),onBlur:()=>k(!1),maxLength:w?8:6,disabled:o,ref:T,...B})]})});d.displayName="InputHexWithPreview";d.__docgenInfo={description:"",methods:[],displayName:"InputHexWithPreview",props:{hexColor:{required:!0,tsType:{name:"string"},description:""},handleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(hexColor: string) => void",signature:{arguments:[{type:{name:"string"},name:"hexColor"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},classNameInput:{required:!1,tsType:{name:"string"},description:""},classNameIcon:{required:!1,tsType:{name:"string"},description:""},classNamePreview:{required:!1,tsType:{name:"string"},description:""},isDisabledMouseEvent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(hexColor: string) => void",signature:{arguments:[{type:{name:"string"},name:"hexColor"}],return:{name:"void"}}},description:""},onIconPointerDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(hexColor: string) => void",signature:{arguments:[{type:{name:"string"},name:"hexColor"}],return:{name:"void"}}},description:""},onIconPointerUp:{required:!1,tsType:{name:"signature",type:"function",raw:"(hexColor: string) => void",signature:{arguments:[{type:{name:"string"},name:"hexColor"}],return:{name:"void"}}},description:""},showAlpha:{required:!1,tsType:{name:"boolean"},description:`Show and allow alpha channel input (another 2 hex symbols).
By default disabled (input only 6 symbols).`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const ce={title:"Components/InputHexWithPreview",component:d,parameters:{layout:"centered",docs:{toc:{title:"Table of Contents"}},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"],argTypes:{hexColor:{control:"color",description:'HEX color string (e.g., "#AF33F2")'},disabled:{control:"boolean",description:"Disable component"},isDisabledMouseEvent:{control:"boolean",description:"Disable mouse dragging"},classNamePreview:{control:"text",description:"Custom classes for color preview"},showAlpha:{control:"boolean",description:"Allow manual input of alpha channel (adds 2 hex symbols, total up to 8)"}}},p={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=c.useState("#AF33F2");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{hexColor:r,handleChange:t}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-300",children:["Current color: ",r]})]})}},F={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=c.useState(["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F"]),a=s=>l=>{const n=[...r];n[s]=l,t(n)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"grid grid-cols-2 gap-3",children:r.map((s,l)=>e.jsx(d,{hexColor:s,handleChange:a(l)},l))}),e.jsx("div",{className:"flex justify-center gap-2 flex-wrap",children:r.map((s,l)=>e.jsx("div",{className:"w-12 h-12 rounded-lg border-2 border-gray-300 dark:border-gray-600",style:{backgroundColor:s}},l))})]})}},h={args:{hexColor:"#FF6B6B",handleChange:r=>{}},render:()=>{const[r,t]=c.useState("#FF6B6B"),[a,s]=c.useState("#4ECDC4");return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 text-center",children:"Start"}),e.jsx(d,{hexColor:r,handleChange:t})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 text-center",children:"End"}),e.jsx(d,{hexColor:a,handleChange:s})]})]}),e.jsx("div",{className:"w-64 h-32 rounded-lg",style:{background:`linear-gradient(to right, ${r}, ${a})`}})]})}},u={args:{hexColor:"#AF33F2DD",handleChange:r=>{}},render:()=>{const[r,t]=c.useState("#AF33F2DD"),a=l=>{t(l)},s=m(r).getAlpha();return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-3 items-center",children:[e.jsx(d,{hexColor:r,handleChange:a,showAlpha:!0}),e.jsxs("div",{className:"space-y-1 flex gap-4",children:[e.jsx("label",{className:"text-xs text-gray-600 dark:text-gray-300",children:"Alpha:"}),e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 font-mono",children:[Math.round(s*100),"% (",r,")"]})]})]}),e.jsxs("div",{className:"relative w-48 h-48 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0",style:{backgroundImage:"repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 20px 20px"}}),e.jsx("div",{className:"absolute inset-0 rounded-lg",style:{backgroundColor:m(r).toRgbString()}})]}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 text-center max-w-md",children:"Enter last 2 hex-symbols for alpha-channel (e.g., 80 = 50% transparency). Preview shows real transparency on chessboard background."})]})}},y={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=c.useState("#AF33F2"),a=m(r),s=a.complement().toHexString(),l=a.analogous(3),n=a.triad();return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Primary color"}),e.jsx(d,{hexColor:r,handleChange:t})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Complementary"}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-7 h-7 rounded-md border-2 border-gray-300 dark:border-gray-600",style:{backgroundColor:s}}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400 font-mono",children:s})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Analogous"}),e.jsx("div",{className:"flex gap-2",children:l.map((o,i)=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("div",{className:"w-12 h-12 rounded-md border-2 border-gray-300 dark:border-gray-600",style:{backgroundColor:o.toHexString()}}),e.jsx("span",{className:"text-xs text-gray-600 dark:text-gray-400 font-mono",children:o.toHexString()})]},i))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Triad"}),e.jsx("div",{className:"flex gap-2",children:n.map((o,i)=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("div",{className:"w-12 h-12 rounded-md border-2 border-gray-300 dark:border-gray-600",style:{backgroundColor:o.toHexString()}}),e.jsx("span",{className:"text-xs text-gray-600 dark:text-gray-400 font-mono",children:o.toHexString()})]},i))})]})]})}},C={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=c.useState("#AF33F2"),a=m(r),s=Array.from({length:5},(n,o)=>{const i=(o+1)*15;return a.clone().lighten(i)}),l=Array.from({length:5},(n,o)=>{const i=(o+1)*15;return a.clone().darken(i)});return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Base color"}),e.jsx(d,{hexColor:r,handleChange:t})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Tints (lighter)"}),e.jsx("div",{className:"flex gap-1",children:s.map((n,o)=>e.jsx("div",{className:"w-12 h-12 rounded border border-gray-300 dark:border-gray-600",style:{backgroundColor:n.toHexString()},title:n.toHexString()},o))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Shades (darker)"}),e.jsx("div",{className:"flex gap-1",children:l.map((n,o)=>e.jsx("div",{className:"w-12 h-12 rounded border border-gray-300 dark:border-gray-600",style:{backgroundColor:n.toHexString()},title:n.toHexString()},o))})]})]})}},v={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=c.useState(["#AF33F2","#FF6B6B","#4ECDC4"]),a=()=>m.random().toHexString(),s=()=>{t([a(),a(),a()])},l=n=>o=>{const i=[...r];i[n]=o,t(i)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex gap-3",children:r.map((n,o)=>e.jsx(d,{hexColor:n,handleChange:l(o)},o))}),e.jsxs("button",{onClick:s,className:"mx-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2",children:[e.jsx(ee,{size:16}),"Generate new colors"]})]})}},N={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r]=c.useState("#AF33F2");return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"InputHexWithPreview (disabled)"}),e.jsx(d,{hexColor:r,handleChange:()=>{},disabled:!0})]})})}},f={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=c.useState("#AF33F2"),[a,s]=c.useState("#AF33F2");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"With dragging (default)"}),e.jsx(d,{hexColor:r,handleChange:t,isDisabledMouseEvent:!1}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Can drag color preview and enter value"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Without dragging"}),e.jsx(d,{hexColor:a,handleChange:s,isDisabledMouseEvent:!0}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Keyboard input only, dragging disabled"})]})]})}},b={args:{hexColor:"#AF33F2",handleChange:r=>{}},render:()=>{const[r,t]=c.useState("#AF33F2"),[a,s]=c.useState("#FF6B6B"),[l,n]=c.useState("#4ECDC4");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Large preview"}),e.jsx(d,{hexColor:r,handleChange:t,classNamePreview:"w-10 h-10"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Rounded preview"}),e.jsx(d,{hexColor:a,handleChange:s,classNamePreview:"rounded-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Without border"}),e.jsx(d,{hexColor:l,handleChange:n,classNamePreview:"border-0"})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Basic example of InputHexWithPreview component.
Use Controls to change parameters.
Switch background in toolbar to change theme (light/dark).`,...p.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`## Gradient
Creating a gradient from two colors.`,...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`## With alpha
Component with alpha channel support.`,...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`## Color scheme
Creating a color scheme with primary and complementary colors.`,...y.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`## Tints and shades
Generating tints and shades of a color.`,...C.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`## Random colors
Random color generator.`,...v.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`## Disabled state
Component in disabled state.`,...N.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"## Mouse event control\nDemonstration of `isDisabledMouseEvent` property.\nWhen enabled, dragging is disabled, only keyboard input remains.",...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`## Custom styles
Examples with custom preview styles.`,...b.parameters?.docs?.description}}};const ie=["Default","ColorPalette","GradientCreator","WithAlpha","ColorScheme","TintsAndShades","RandomColors","DisabledState","MouseEventControl","CustomStyles"];export{F as ColorPalette,y as ColorScheme,b as CustomStyles,p as Default,N as DisabledState,h as GradientCreator,f as MouseEventControl,v as RandomColors,C as TintsAndShades,u as WithAlpha,ie as __namedExportsOrder,ce as default};
