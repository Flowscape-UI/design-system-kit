import{r as c,j as e}from"./iframe-DEXx_Rvw.js";import{t as p}from"./use-hex-input-YmIulaup.js";import{I as t}from"./input-hex-Up87mn-z.js";import"./preload-helper-DCOVa-dD.js";import"./cn-Bzm_o1ou.js";import"./input-theme-CYF-iDsr.js";const v={title:"Components/InputHex",component:t,parameters:{layout:"centered",docs:{toc:{title:"Table of Contents"}},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"],argTypes:{hexColor:{control:"color",description:'HEX color string (e.g., "#AF33F2")'},disabled:{control:"boolean",description:"Disable component"},isDisabledMouseEvent:{control:"boolean",description:"Disable mouse dragging"},showAlpha:{control:"boolean",description:"Show and allow alpha channel input (8 symbols)"}}},s={args:{hexColor:"#AF33F2",handleChange:a=>{}},render:()=>{const[a,r]=c.useState("#AF33F2");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{hexColor:a,handleChange:r}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-300",children:["Current color: ",a.toUpperCase()]})]})}},o={args:{hexColor:"#AF33F2DD",handleChange:a=>{}},render:()=>{const[a,r]=c.useState("#AF33F2DD"),d=x=>{r(x)},i=p(a).getAlpha();return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-3 items-center",children:[e.jsx(t,{hexColor:a,handleChange:d,showAlpha:!0}),e.jsxs("div",{className:"space-y-1 flex gap-4",children:[e.jsx("label",{className:"text-xs text-gray-600 dark:text-gray-300",children:"Alpha:"}),e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 font-mono",children:[Math.round(i*100),"% (",a,")"]})]})]}),e.jsxs("div",{className:"relative w-48 h-48 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0",style:{backgroundImage:"repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 20px 20px"}}),e.jsx("div",{className:"absolute inset-0 rounded-lg",style:{backgroundColor:p(a).toRgbString()}})]}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 text-center max-w-md",children:"Enter last 2 hex-symbols for alpha-channel (e.g., 80 = 50% transparency). Preview shows real transparency on chessboard background."})]})}},n={args:{hexColor:"#AF33F2",handleChange:a=>{}},render:()=>{const[a]=c.useState("#AF33F2");return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"InputHex (disabled)"}),e.jsx(t,{hexColor:a,handleChange:()=>{},disabled:!0})]})})}},l={args:{hexColor:"#AF33F2",handleChange:a=>{}},render:()=>{const[a,r]=c.useState("#AF33F2"),[d,i]=c.useState("#AF33F2");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"With dragging (default)"}),e.jsx(t,{hexColor:a,handleChange:r,isDisabledMouseEvent:!1}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Can drag # icon and enter value"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Without dragging"}),e.jsx(t,{hexColor:d,handleChange:i,isDisabledMouseEvent:!0}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Keyboard input only, dragging disabled"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    hexColor: '#AF33F2',
    handleChange: (newColor: string) => {}
  },
  render: () => {
    const [color, setColor] = useState('#AF33F2');
    return <div className="space-y-4">
                <InputHex hexColor={color} handleChange={setColor} />
                <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                    Current color: {color.toUpperCase()}
                </p>
            </div>;
  }
}`,...s.parameters?.docs?.source},description:{story:`Basic example of InputHex component.
Use Controls to change parameters.
Switch background in toolbar to change theme (light/dark).`,...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
                    <InputHex hexColor={color} handleChange={handleChange} showAlpha />
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
}`,...o.parameters?.docs?.source},description:{story:`## With alpha
Component with alpha channel support.`,...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    hexColor: '#AF33F2',
    handleChange: (newColor: string) => {}
  },
  render: () => {
    const [color] = useState('#AF33F2');
    return <div className="space-y-4">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        InputHex (disabled)
                    </p>
                    <InputHex hexColor={color} handleChange={() => {}} disabled={true} />
                </div>
            </div>;
  }
}`,...n.parameters?.docs?.source},description:{story:`## Disabled state
Component in disabled state.`,...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
                    <InputHex hexColor={color1} handleChange={setColor1} isDisabledMouseEvent={false} />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Can drag # icon and enter value
                    </p>
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Without dragging
                    </p>
                    <InputHex hexColor={color2} handleChange={setColor2} isDisabledMouseEvent={true} />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Keyboard input only, dragging disabled
                    </p>
                </div>
            </div>;
  }
}`,...l.parameters?.docs?.source},description:{story:"## Mouse event control\nDemonstration of `isDisabledMouseEvent` property.\nWhen enabled, dragging is disabled, only keyboard input remains.",...l.parameters?.docs?.description}}};const b=["Default","WithAlpha","DisabledState","MouseEventControl"];export{s as Default,n as DisabledState,l as MouseEventControl,o as WithAlpha,b as __namedExportsOrder,v as default};
