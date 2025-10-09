import{r as t,j as e}from"./iframe-hKpHQEvv.js";import{C as c}from"./index-Bmi48iO6.js";import{I as l}from"./input-number-select-BDLVqxk4.js";import{I as d}from"./input-color-picker-a-ciByaU.js";import"./preload-helper-DCOVa-dD.js";import"./index-BeMV0MyE.js";import"./index-DI8IOo1c.js";import"./createLucideIcon-aSWCgQ23.js";const C={title:"Demos/Combined Components",parameters:{layout:"fullscreen"}},s={render:()=>{const[o,r]=t.useState("rgba(175, 51, 242, 1)"),[a,m]=t.useState(100),[i,n]=t.useState(280);return e.jsxs("div",{className:"p-5 bg-gray-100 min-h-screen",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Color Picker Library - Complete Demo"}),e.jsx("p",{className:"text-gray-600 mb-8",children:"This demo showcases all components working together to create a comprehensive color selection experience."}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Main Color Picker"}),e.jsx(c,{value:o,onChange:r,width:300,height:300}),e.jsxs("div",{className:"mt-5 p-4 bg-white rounded-lg",children:[e.jsxs("p",{className:"font-medium",children:["Selected Color: ",o]}),e.jsx("div",{className:"w-36 h-20 rounded-lg border-2 border-gray-300 mt-2",style:{backgroundColor:o}})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Advanced Controls"}),e.jsxs("div",{className:"mb-5",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Opacity Control"}),e.jsx(l,{value:a,onChange:m,step:1,precision:0,orientation:"horizontal",progression:"linear",icon:"👁️"}),e.jsxs("p",{className:"font-medium mt-2",children:["Opacity: ",a,"%"]})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Hue Control"}),e.jsx(l,{value:i,onChange:n,step:1,precision:0,orientation:"horizontal",progression:"linear",icon:"🌈"}),e.jsxs("p",{className:"font-medium mt-2",children:["Hue: ",i,"°"]})]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Input Color Picker"}),e.jsx(d,{value:o,onChange:r,showOpacity:!0,showGradient:!0,pickerSize:250})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Color Formats"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-white rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"HEX"}),e.jsx("p",{className:"font-mono text-sm",children:o})]}),e.jsxs("div",{className:"p-4 bg-white rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"RGB"}),e.jsx("p",{className:"font-mono text-sm",children:o})]}),e.jsxs("div",{className:"p-4 bg-white rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"HSL"}),e.jsx("p",{className:"font-mono text-sm",children:o})]})]})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('rgba(175, 51, 242, 1)');
    const [opacity, setOpacity] = useState(100);
    const [hue, setHue] = useState(280);
    return <div className="p-5 bg-gray-100 min-h-screen">
                <h2 className="text-2xl font-bold mb-2">
                    Color Picker Library - Complete Demo
                </h2>
                <p className="text-gray-600 mb-8">
                    This demo showcases all components working together to create a
                    comprehensive color selection experience.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Left Column - Main Color Picker */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Main Color Picker</h3>
                        <ColorPicker value={color} onChange={setColor} width={300} height={300} />
                        <div className="mt-5 p-4 bg-white rounded-lg">
                            <p className="font-medium">Selected Color: {color}</p>
                            <div className="w-36 h-20 rounded-lg border-2 border-gray-300 mt-2" style={{
              backgroundColor: color
            }} />
                        </div>
                    </div>

                    {/* Right Column - Controls */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Advanced Controls</h3>

                        {/* Opacity Control */}
                        <div className="mb-5">
                            <h4 className="font-medium mb-2">Opacity Control</h4>
                            <InputNumberSelect value={opacity} onChange={setOpacity} step={1} precision={0} orientation="horizontal" progression="linear" icon="👁️" />
                            <p className="font-medium mt-2">Opacity: {opacity}%</p>
                        </div>

                        {/* Hue Control */}
                        <div className="mb-5">
                            <h4 className="font-medium mb-2">Hue Control</h4>
                            <InputNumberSelect value={hue} onChange={setHue} step={1} precision={0} orientation="horizontal" progression="linear" icon="🌈" />
                            <p className="font-medium mt-2">Hue: {hue}°</p>
                        </div>
                    </div>
                </div>

                {/* Input Color Picker Section */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Input Color Picker</h3>
                    <InputColorPicker value={color} onChange={setColor} showOpacity={true} showGradient={true} pickerSize={250} />
                </div>

                {/* Color Formats Comparison */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Color Formats</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white rounded-lg">
                            <h4 className="font-medium mb-2">HEX</h4>
                            <p className="font-mono text-sm">{color}</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg">
                            <h4 className="font-medium mb-2">RGB</h4>
                            <p className="font-mono text-sm">{color}</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg">
                            <h4 className="font-medium mb-2">HSL</h4>
                            <p className="font-mono text-sm">{color}</p>
                        </div>
                    </div>
                </div>
            </div>;
  }
}`,...s.parameters?.docs?.source}}};const f=["AllComponents"];export{s as AllComponents,f as __namedExportsOrder,C as default};
