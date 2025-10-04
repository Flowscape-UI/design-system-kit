import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-6NnNKPft.js";import{C as t}from"./index-Bh3AnJWl.js";import"./preload-helper-D1GhsIMC.js";import"./input-number-select-C0Dk15iY.js";import"./index-DI33cDzY.js";import"./index-A7OYNBJj.js";const S={title:"Components/ColorPicker/Test",component:t,parameters:{layout:"centered"},argTypes:{value:{control:"color",description:"The current color value"},onChange:{action:"changed",description:"Callback when color changes"},width:{control:"number",description:"Width of the color picker"},height:{control:"number",description:"Height of the color picker"},hideControls:{control:"boolean",description:"Hide control buttons"},hideInputs:{control:"boolean",description:"Hide input fields"},hideOpacity:{control:"boolean",description:"Hide opacity control"},hidePresets:{control:"boolean",description:"Hide preset colors"},hideHue:{control:"boolean",description:"Hide hue slider"},hideEyeDrop:{control:"boolean",description:"Hide eye dropper tool"}}},d={args:{value:"rgba(175, 51, 242, 1)",width:300,height:300},render:e=>{const[r,n]=s.useState(e.value);return o.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[o.jsx("h3",{children:"Basic Color Picker"}),o.jsx(t,{...e,value:r,onChange:n}),o.jsxs("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"white",borderRadius:"8px"},children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Selected Color:"})," ",r]}),o.jsx("div",{style:{width:"100px",height:"50px",backgroundColor:r,borderRadius:"4px",border:"1px solid #ccc",marginTop:"10px"}})]})]})}},i={args:{value:"#ff6b6b",width:200,height:200},render:e=>{const[r,n]=s.useState(e.value);return o.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[o.jsx("h3",{children:"Compact Color Picker"}),o.jsx(t,{...e,value:r,onChange:n}),o.jsxs("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"white",borderRadius:"8px"},children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Selected Color:"})," ",r]}),o.jsx("div",{style:{width:"100px",height:"50px",backgroundColor:r,borderRadius:"4px",border:"1px solid #ccc",marginTop:"10px"}})]})]})}},l={args:{value:"#4ecdc4",width:400,height:400},render:e=>{const[r,n]=s.useState(e.value);return o.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[o.jsx("h3",{children:"Large Color Picker"}),o.jsx(t,{...e,value:r,onChange:n}),o.jsxs("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"white",borderRadius:"8px"},children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Selected Color:"})," ",r]}),o.jsx("div",{style:{width:"100px",height:"50px",backgroundColor:r,borderRadius:"4px",border:"1px solid #ccc",marginTop:"10px"}})]})]})}},a={args:{value:"#3498db",width:300,height:300,hideControls:!0},render:e=>{const[r,n]=s.useState(e.value);return o.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[o.jsx("h3",{children:"Without Control Buttons"}),o.jsx(t,{...e,value:r,onChange:n}),o.jsxs("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"white",borderRadius:"8px"},children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Selected Color:"})," ",r]}),o.jsx("div",{style:{width:"100px",height:"50px",backgroundColor:r,borderRadius:"4px",border:"1px solid #ccc",marginTop:"10px"}})]})]})}},c={args:{value:"#e74c3c",width:300,height:300,hideInputs:!0},render:e=>{const[r,n]=s.useState(e.value);return o.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[o.jsx("h3",{children:"Without Input Fields"}),o.jsx(t,{...e,value:r,onChange:n}),o.jsxs("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"white",borderRadius:"8px"},children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Selected Color:"})," ",r]}),o.jsx("div",{style:{width:"100px",height:"50px",backgroundColor:r,borderRadius:"4px",border:"1px solid #ccc",marginTop:"10px"}})]})]})}},p={args:{value:"#f39c12",width:300,height:300,hideOpacity:!0},render:e=>{const[r,n]=s.useState(e.value);return o.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[o.jsx("h3",{children:"Without Opacity Control"}),o.jsx(t,{...e,value:r,onChange:n}),o.jsxs("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"white",borderRadius:"8px"},children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Selected Color:"})," ",r]}),o.jsx("div",{style:{width:"100px",height:"50px",backgroundColor:r,borderRadius:"4px",border:"1px solid #ccc",marginTop:"10px"}})]})]})}},h={args:{value:"#9b59b6",width:300,height:300,hidePresets:!0},render:e=>{const[r,n]=s.useState(e.value);return o.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[o.jsx("h3",{children:"Without Preset Colors"}),o.jsx(t,{...e,value:r,onChange:n}),o.jsxs("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"white",borderRadius:"8px"},children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Selected Color:"})," ",r]}),o.jsx("div",{style:{width:"100px",height:"50px",backgroundColor:r,borderRadius:"4px",border:"1px solid #ccc",marginTop:"10px"}})]})]})}},g={args:{value:"#2ecc71",width:250,height:250,hideControls:!0,hideInputs:!0,hidePresets:!0,hideEyeDrop:!0},render:e=>{const[r,n]=s.useState(e.value);return o.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[o.jsx("h3",{children:"Minimal Color Picker"}),o.jsx(t,{...e,value:r,onChange:n}),o.jsxs("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"white",borderRadius:"8px"},children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Selected Color:"})," ",r]}),o.jsx("div",{style:{width:"100px",height:"50px",backgroundColor:r,borderRadius:"4px",border:"1px solid #ccc",marginTop:"10px"}})]})]})}},u={render:()=>{const[e,r]=s.useState("#ff6b6b"),[n,C]=s.useState("rgb(255, 107, 107)"),[x,b]=s.useState("hsl(0, 100%, 70%)");return o.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:[o.jsx("h3",{children:"Different Color Formats"}),o.jsxs("div",{style:{marginBottom:"30px"},children:[o.jsx("h4",{children:"HEX Format"}),o.jsx(t,{value:e,onChange:r,width:250,height:250}),o.jsxs("p",{children:[o.jsx("strong",{children:"HEX:"})," ",e]})]}),o.jsxs("div",{style:{marginBottom:"30px"},children:[o.jsx("h4",{children:"RGB Format"}),o.jsx(t,{value:n,onChange:C,width:250,height:250}),o.jsxs("p",{children:[o.jsx("strong",{children:"RGB:"})," ",n]})]}),o.jsxs("div",{style:{marginBottom:"30px"},children:[o.jsx("h4",{children:"HSL Format"}),o.jsx(t,{value:x,onChange:b,width:250,height:250}),o.jsxs("p",{children:[o.jsx("strong",{children:"HSL:"})," ",x]})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        <h3>Basic Color Picker</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div style={{
          width: "100px",
          height: "50px",
          backgroundColor: color,
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: "10px"
        }} />
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        <h3>Compact Color Picker</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div style={{
          width: "100px",
          height: "50px",
          backgroundColor: color,
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: "10px"
        }} />
        </div>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: "#4ecdc4",
    width: 400,
    height: 400
  },
  render: args => {
    const [color, setColor] = useState(args.value);
    return <div style={{
      padding: "20px",
      backgroundColor: "#f5f5f5"
    }}>
        <h3>Large Color Picker</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div style={{
          width: "100px",
          height: "50px",
          backgroundColor: color,
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: "10px"
        }} />
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: "#3498db",
    width: 300,
    height: 300,
    hideControls: true
  },
  render: args => {
    const [color, setColor] = useState(args.value);
    return <div style={{
      padding: "20px",
      backgroundColor: "#f5f5f5"
    }}>
        <h3>Without Control Buttons</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div style={{
          width: "100px",
          height: "50px",
          backgroundColor: color,
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: "10px"
        }} />
        </div>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: "#e74c3c",
    width: 300,
    height: 300,
    hideInputs: true
  },
  render: args => {
    const [color, setColor] = useState(args.value);
    return <div style={{
      padding: "20px",
      backgroundColor: "#f5f5f5"
    }}>
        <h3>Without Input Fields</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div style={{
          width: "100px",
          height: "50px",
          backgroundColor: color,
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: "10px"
        }} />
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: "#f39c12",
    width: 300,
    height: 300,
    hideOpacity: true
  },
  render: args => {
    const [color, setColor] = useState(args.value);
    return <div style={{
      padding: "20px",
      backgroundColor: "#f5f5f5"
    }}>
        <h3>Without Opacity Control</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div style={{
          width: "100px",
          height: "50px",
          backgroundColor: color,
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: "10px"
        }} />
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: "#9b59b6",
    width: 300,
    height: 300,
    hidePresets: true
  },
  render: args => {
    const [color, setColor] = useState(args.value);
    return <div style={{
      padding: "20px",
      backgroundColor: "#f5f5f5"
    }}>
        <h3>Without Preset Colors</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div style={{
          width: "100px",
          height: "50px",
          backgroundColor: color,
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: "10px"
        }} />
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    return <div style={{
      padding: "20px",
      backgroundColor: "#f5f5f5"
    }}>
        <h3>Minimal Color Picker</h3>
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "8px"
      }}>
          <p>
            <strong>Selected Color:</strong> {color}
          </p>
          <div style={{
          width: "100px",
          height: "50px",
          backgroundColor: color,
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: "10px"
        }} />
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hexColor, setHexColor] = useState("#ff6b6b");
    const [rgbColor, setRgbColor] = useState("rgb(255, 107, 107)");
    const [hslColor, setHslColor] = useState("hsl(0, 100%, 70%)");
    return <div style={{
      padding: "20px",
      backgroundColor: "#f5f5f5"
    }}>
        <h3>Different Color Formats</h3>

        <div style={{
        marginBottom: "30px"
      }}>
          <h4>HEX Format</h4>
          <ColorPicker value={hexColor} onChange={setHexColor} width={250} height={250} />
          <p>
            <strong>HEX:</strong> {hexColor}
          </p>
        </div>

        <div style={{
        marginBottom: "30px"
      }}>
          <h4>RGB Format</h4>
          <ColorPicker value={rgbColor} onChange={setRgbColor} width={250} height={250} />
          <p>
            <strong>RGB:</strong> {rgbColor}
          </p>
        </div>

        <div style={{
        marginBottom: "30px"
      }}>
          <h4>HSL Format</h4>
          <ColorPicker value={hslColor} onChange={setHslColor} width={250} height={250} />
          <p>
            <strong>HSL:</strong> {hslColor}
          </p>
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const R=["Basic","Compact","Large","WithoutControls","WithoutInputs","WithoutOpacity","WithoutPresets","Minimal","ColorFormats"];export{d as Basic,u as ColorFormats,i as Compact,l as Large,g as Minimal,a as WithoutControls,c as WithoutInputs,p as WithoutOpacity,h as WithoutPresets,R as __namedExportsOrder,S as default};
