import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-6NnNKPft.js";import{C as a}from"./index-Bh3AnJWl.js";import"./preload-helper-D1GhsIMC.js";import"./input-number-select-C0Dk15iY.js";import"./index-DI33cDzY.js";import"./index-A7OYNBJj.js";const x={title:"Components/ColorPicker",component:a,parameters:{layout:"centered"},argTypes:{value:{control:"color",description:"The current color value"},onChange:{action:"changed",description:"Callback when color changes"},width:{control:"number",description:"Width of the color picker"},height:{control:"number",description:"Height of the color picker"},hideControls:{control:"boolean",description:"Hide control buttons"},hideInputs:{control:"boolean",description:"Hide input fields"},hideOpacity:{control:"boolean",description:"Hide opacity control"},hidePresets:{control:"boolean",description:"Hide preset colors"}}},t={args:{value:"rgba(175, 51, 242, 1)",width:300,height:300},render:r=>{const[o,n]=d.useState(r.value);return e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[e.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"},children:"Basic Color Picker"}),e.jsx(a,{...r,value:o,onChange:n}),e.jsxs("div",{style:{marginTop:"20px",padding:"12px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsxs("p",{style:{fontWeight:"500"},children:["Selected Color: ",o]}),e.jsx("div",{style:{width:"96px",height:"48px",borderRadius:"4px",border:"1px solid #ccc",marginTop:"8px",backgroundColor:o}})]})]})}},i={args:{value:"#ff6b6b",width:200,height:200},render:r=>{const[o,n]=d.useState(r.value);return e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[e.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"},children:"Compact Size"}),e.jsx(a,{...r,value:o,onChange:n}),e.jsxs("div",{style:{marginTop:"20px",padding:"12px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsxs("p",{style:{fontWeight:"500"},children:["Selected Color: ",o]}),e.jsx("div",{style:{width:"96px",height:"48px",borderRadius:"4px",border:"1px solid #ccc",marginTop:"8px",backgroundColor:o}})]})]})}},s={args:{value:"#2ecc71",width:250,height:250,hideControls:!0,hideInputs:!0,hidePresets:!0,hideEyeDrop:!0},render:r=>{const[o,n]=d.useState(r.value);return e.jsxs("div",{className:"p-5 bg-gray-100",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Minimal Version"}),e.jsx(a,{...r,value:o,onChange:n}),e.jsxs("div",{className:"mt-5 p-3 bg-white rounded-lg",children:[e.jsxs("p",{className:"font-medium",children:["Selected Color: ",o]}),e.jsx("div",{className:"w-24 h-12 rounded border border-gray-300 mt-2",style:{backgroundColor:o}})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: "rgba(175, 51, 242, 1)",
    width: 300,
    height: 300
  },
  render: args => {
    const [color, setColor] = useState(args.value);
    return <div style={{
      padding: "20px",
      backgroundColor: "#f5f5f5"
    }}>
        <h3 style={{
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "16px"
      }}>
          Basic Color Picker
        </h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div style={{
        marginTop: "20px",
        padding: "12px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
          <p style={{
          fontWeight: "500"
        }}>Selected Color: {color}</p>
          <div style={{
          width: "96px",
          height: "48px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: "8px",
          backgroundColor: color
        }} />
        </div>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: "#ff6b6b",
    width: 200,
    height: 200
  },
  render: args => {
    const [color, setColor] = useState(args.value);
    return <div style={{
      padding: "20px",
      backgroundColor: "#f5f5f5"
    }}>
        <h3 style={{
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "16px"
      }}>
          Compact Size
        </h3>
        <ColorPicker {...args} value={color} onChange={setColor} />

        <div style={{
        marginTop: "20px",
        padding: "12px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
          <p style={{
          fontWeight: "500"
        }}>Selected Color: {color}</p>
          <div style={{
          width: "96px",
          height: "48px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: "8px",
          backgroundColor: color
        }} />
        </div>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: "#2ecc71",
    width: 250,
    height: 250,
    hideControls: true,
    hideInputs: true,
    hidePresets: true,
    hideEyeDrop: true
  },
  render: args => {
    const [color, setColor] = useState(args.value);
    return <div className="p-5 bg-gray-100">
        <h3 className="text-lg font-semibold mb-4">Minimal Version</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div className="mt-5 p-3 bg-white rounded-lg">
          <p className="font-medium">Selected Color: {color}</p>
          <div className="w-24 h-12 rounded border border-gray-300 mt-2" style={{
          backgroundColor: color
        }} />
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const C=["Basic","Compact","Minimal"];export{t as Basic,i as Compact,s as Minimal,C as __namedExportsOrder,x as default};
