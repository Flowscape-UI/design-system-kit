import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-6NnNKPft.js";import{I as r}from"./input-number-select-C0Dk15iY.js";import"./preload-helper-D1GhsIMC.js";const v={title:"Components/InputNumberSelect",component:r,parameters:{layout:"centered"},argTypes:{value:{control:"number",description:"The current numeric value"},onChange:{action:"changed",description:"Callback when value changes"},step:{control:"number",description:"Step size for increment/decrement"},precision:{control:"number",description:"Number of decimal places"},orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the controls"},progression:{control:"select",options:["linear","exponential","logarithmic"],description:"Type of progression for value changes"},icon:{control:"text",description:"Icon or emoji to display"}}},t={args:{value:50,step:1,precision:0,orientation:"horizontal",progression:"linear"},render:a=>{const[n,s]=o.useState(a.value);return e.jsxs("div",{className:"p-5 bg-gray-100",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Basic Input Number Select"}),e.jsx(r,{...a,value:n,onChange:s}),e.jsx("div",{className:"mt-5 p-3 bg-white rounded-lg",children:e.jsxs("p",{className:"font-medium",children:["Current Value: ",n]})})]})}},i={args:{value:75,step:5,precision:0,orientation:"horizontal",progression:"linear",icon:"🎨"},render:a=>{const[n,s]=o.useState(a.value);return e.jsxs("div",{className:"p-5 bg-gray-100",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"With Icon"}),e.jsx(r,{...a,value:n,onChange:s}),e.jsx("div",{className:"mt-5 p-3 bg-white rounded-lg",children:e.jsxs("p",{className:"font-medium",children:["Current Value: ",n]})})]})}},l={render:()=>{const[a,n]=o.useState(50),[s,m]=o.useState(1),[c,u]=o.useState(10);return e.jsxs("div",{className:"p-5 bg-gray-100",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Progression Types Comparison"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[e.jsxs("div",{className:"p-4 bg-white rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Linear"}),e.jsx(r,{value:a,onChange:n,step:1,precision:0,orientation:"horizontal",progression:"linear"}),e.jsxs("p",{className:"font-medium mt-2",children:["Value: ",a]})]}),e.jsxs("div",{className:"p-4 bg-white rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Exponential"}),e.jsx(r,{value:s,onChange:m,step:.1,precision:2,orientation:"horizontal",progression:"exponential"}),e.jsxs("p",{className:"font-medium mt-2",children:["Value: ",s]})]}),e.jsxs("div",{className:"p-4 bg-white rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Logarithmic"}),e.jsx(r,{value:c,onChange:u,step:1,precision:1,orientation:"horizontal",progression:"logarithmic"}),e.jsxs("p",{className:"font-medium mt-2",children:["Value: ",c]})]})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    step: 1,
    precision: 0,
    orientation: 'horizontal',
    progression: 'linear'
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    return <div className="p-5 bg-gray-100">
        <h3 className="text-lg font-semibold mb-4">Basic Input Number Select</h3>
        <InputNumberSelect {...args} value={value} onChange={setValue} />
        <div className="mt-5 p-3 bg-white rounded-lg">
          <p className="font-medium">Current Value: {value}</p>
        </div>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    step: 5,
    precision: 0,
    orientation: 'horizontal',
    progression: 'linear',
    icon: '🎨'
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    return <div className="p-5 bg-gray-100">
        <h3 className="text-lg font-semibold mb-4">With Icon</h3>
        <InputNumberSelect {...args} value={value} onChange={setValue} />
        <div className="mt-5 p-3 bg-white rounded-lg">
          <p className="font-medium">Current Value: {value}</p>
        </div>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [linearValue, setLinearValue] = useState(50);
    const [exponentialValue, setExponentialValue] = useState(1);
    const [logarithmicValue, setLogarithmicValue] = useState(10);
    return <div className="p-5 bg-gray-100">
        <h3 className="text-lg font-semibold mb-4">Progression Types Comparison</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-4 bg-white rounded-lg">
            <h4 className="font-medium mb-2">Linear</h4>
            <InputNumberSelect value={linearValue} onChange={setLinearValue} step={1} precision={0} orientation="horizontal" progression="linear" />
            <p className="font-medium mt-2">Value: {linearValue}</p>
          </div>

          <div className="p-4 bg-white rounded-lg">
            <h4 className="font-medium mb-2">Exponential</h4>
            <InputNumberSelect value={exponentialValue} onChange={setExponentialValue} step={0.1} precision={2} orientation="horizontal" progression="exponential" />
            <p className="font-medium mt-2">Value: {exponentialValue}</p>
          </div>

          <div className="p-4 bg-white rounded-lg">
            <h4 className="font-medium mb-2">Logarithmic</h4>
            <InputNumberSelect value={logarithmicValue} onChange={setLogarithmicValue} step={1} precision={1} orientation="horizontal" progression="logarithmic" />
            <p className="font-medium mt-2">Value: {logarithmicValue}</p>
          </div>
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const N=["Basic","WithIcon","ProgressionComparison"];export{t as Basic,l as ProgressionComparison,i as WithIcon,N as __namedExportsOrder,v as default};
