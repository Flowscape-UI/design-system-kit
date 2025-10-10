import{r as o,j as e}from"./iframe-s8WP3KE-.js";import{I as n}from"./input-color-picker-DNiIvhCR.js";import"./preload-helper-DCOVa-dD.js";import"./input-CcGhGN5b.js";import"./input-number-select-BBHEQ8QN.js";import"./createLucideIcon-BiIdTSer.js";import"./index-C-w-lniU.js";import"./tinycolor-CTCHxbWk.js";import"./index-BwwVMpOW.js";import"./index-DaBiCCPj.js";import"./input-hex-BACLnUrS.js";const j={title:"Components/InputColorPicker",component:n,parameters:{layout:"centered"},argTypes:{value:{control:"color",description:"The current color value"},onChange:{action:"changed",description:"Callback when color changes"},showOpacity:{control:"boolean",description:"Show opacity control"},showGradient:{control:"boolean",description:"Show gradient controls"},pickerSize:{control:"number",description:"Size of the color picker"}}},c={args:{value:"rgba(175, 51, 242, 1)",showOpacity:!0,showGradient:!1,pickerSize:250},render:r=>{const[t,a]=o.useState(r.value);return e.jsxs("div",{className:"p-5 bg-gray-100",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Basic Input Color Picker"}),e.jsx(n,{...r,value:t,onChange:a}),e.jsxs("div",{className:"mt-5 p-3 bg-white rounded-lg",children:[e.jsxs("p",{className:"font-medium",children:["Selected Color: ",t]}),e.jsx("div",{className:"w-24 h-12 rounded border border-gray-300 mt-2",style:{backgroundColor:t}})]})]})}},l={args:{value:"linear-gradient(45deg, #ff6b6b, #4ecdc4)",showOpacity:!0,showGradient:!0,pickerSize:250},render:r=>{const[t,a]=o.useState(r.value);return e.jsxs("div",{className:"p-5 bg-gray-100",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"With Gradient Support"}),e.jsx(n,{...r,value:t,onChange:a}),e.jsxs("div",{className:"mt-5 p-3 bg-white rounded-lg",children:[e.jsx("p",{className:"font-medium",children:"Selected Color/Gradient:"}),e.jsx("p",{className:"font-mono text-xs break-all mt-1",children:t}),e.jsx("div",{className:"w-48 h-12 rounded border border-gray-300 mt-2",style:{background:t}})]})]})}},i={render:()=>{const[r,t]=o.useState("#3498db"),[a,p]=o.useState(!0),[m,h]=o.useState(!1),[d,u]=o.useState(250);return e.jsxs("div",{className:"p-5 bg-gray-100",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Interactive Demo"}),e.jsxs("div",{className:"mb-5 flex gap-5 items-center",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:a,onChange:s=>p(s.target.checked)}),"Show Opacity"]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:s=>h(s.target.checked)}),"Show Gradient"]}),e.jsxs("label",{className:"flex items-center gap-2",children:["Picker Size:",e.jsx("input",{type:"range",min:"150",max:"350",value:d,onChange:s=>u(Number(s.target.value))}),d,"px"]})]}),e.jsx(n,{value:r,onChange:t,showOpacity:a,showGradient:m,pickerSize:d}),e.jsxs("div",{className:"mt-5 p-3 bg-white rounded-lg",children:[e.jsx("p",{className:"font-medium",children:"Selected Color:"}),e.jsx("p",{className:"font-mono text-xs break-all mt-1",children:r}),e.jsx("div",{className:"w-48 h-12 rounded border border-gray-300 mt-2",style:{background:r}})]})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'rgba(175, 51, 242, 1)',
    showOpacity: true,
    showGradient: false,
    pickerSize: 250
  },
  render: args => {
    const [color, setColor] = useState(args.value);
    return <div className="p-5 bg-gray-100">
                <h3 className="text-lg font-semibold mb-4">Basic Input Color Picker</h3>
                <InputColorPicker {...args} value={color} onChange={setColor} />
                <div className="mt-5 p-3 bg-white rounded-lg">
                    <p className="font-medium">Selected Color: {color}</p>
                    <div className="w-24 h-12 rounded border border-gray-300 mt-2" style={{
          backgroundColor: color
        }} />
                </div>
            </div>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    showOpacity: true,
    showGradient: true,
    pickerSize: 250
  },
  render: args => {
    const [color, setColor] = useState(args.value);
    return <div className="p-5 bg-gray-100">
                <h3 className="text-lg font-semibold mb-4">With Gradient Support</h3>
                <InputColorPicker {...args} value={color} onChange={setColor} />
                <div className="mt-5 p-3 bg-white rounded-lg">
                    <p className="font-medium">Selected Color/Gradient:</p>
                    <p className="font-mono text-xs break-all mt-1">{color}</p>
                    <div className="w-48 h-12 rounded border border-gray-300 mt-2" style={{
          background: color
        }} />
                </div>
            </div>;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3498db');
    const [showOpacity, setShowOpacity] = useState(true);
    const [showGradient, setShowGradient] = useState(false);
    const [pickerSize, setPickerSize] = useState(250);
    return <div className="p-5 bg-gray-100">
                <h3 className="text-lg font-semibold mb-4">Interactive Demo</h3>

                <div className="mb-5 flex gap-5 items-center">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" checked={showOpacity} onChange={e => setShowOpacity(e.target.checked)} />
                        Show Opacity
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="checkbox" checked={showGradient} onChange={e => setShowGradient(e.target.checked)} />
                        Show Gradient
                    </label>

                    <label className="flex items-center gap-2">
                        Picker Size:
                        <input type="range" min="150" max="350" value={pickerSize} onChange={e => setPickerSize(Number(e.target.value))} />
                        {pickerSize}px
                    </label>
                </div>

                <InputColorPicker value={color} onChange={setColor} showOpacity={showOpacity} showGradient={showGradient} pickerSize={pickerSize} />

                <div className="mt-5 p-3 bg-white rounded-lg">
                    <p className="font-medium">Selected Color:</p>
                    <p className="font-mono text-xs break-all mt-1">{color}</p>
                    <div className="w-48 h-12 rounded border border-gray-300 mt-2" style={{
          background: color
        }} />
                </div>
            </div>;
  }
}`,...i.parameters?.docs?.source}}};const G=["Basic","WithGradient","InteractiveDemo"];export{c as Basic,i as InteractiveDemo,l as WithGradient,G as __namedExportsOrder,j as default};
