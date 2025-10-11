import{r as s,j as e}from"./iframe-CMuf9cB7.js";import{I as a}from"./input-color-picker-MQo8pPIZ.js";import"./preload-helper-DCOVa-dD.js";import"./input-Ci731--R.js";import"./input-hex-Ht2xGYCl.js";import"./tinycolor-CTCHxbWk.js";import"./createLucideIcon-C8kB59Fu.js";import"./index-GuJPHahn.js";import"./index-BLMJ7b3i.js";import"./index-E1K9PUcI.js";import"./input-number-select-DgRWpy6r.js";const B={title:"Components/InputColorPicker",component:a,parameters:{layout:"centered",docs:{toc:{title:"Table of Contents"}},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#1a1a1a"}]}},tags:["autodocs"],argTypes:{value:{control:"text",description:"Current color value (solid color or gradient)"},onChange:{description:"Callback when color changes"},onOpacityChange:{description:"Callback when opacity changes"},className:{control:"text",description:"Custom classes for the container"},classNameGradientInput:{control:"text",description:"Custom classes for gradient input)"},showOpacity:{control:"boolean",description:"Show opacity control"},showGradient:{control:"boolean",description:"Show gradient controls in picker"},pickerSize:{control:"number",description:"Size of the color picker popup"},title:{control:"text",description:"Title shown in picker header"}}},l={args:{value:"rgba(175, 51, 242, 1)",showOpacity:!0,showGradient:!1,pickerSize:250},render:()=>{const[t,r]=s.useState("rgba(175, 51, 242, 1)");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{value:t,onChange:r}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-300",children:["Current color: ",t]})]})}},n={args:{value:"rgba(59, 130, 246, 1)"},render:()=>{const[t,r]=s.useState("rgba(59, 130, 246, 1)");return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsx(a,{value:t,onChange:r,title:"Background Color",showOpacity:!0}),e.jsx("div",{className:"w-64 h-32 rounded-lg flex items-center justify-center text-white font-semibold",style:{background:t},children:"Background Preview"})]})}},d={args:{value:"rgba(239, 68, 68, 1)"},render:()=>{const[t,r]=s.useState("rgba(239, 68, 68, 1)");return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsx(a,{value:t,onChange:r,title:"Text Color",showOpacity:!0}),e.jsxs("div",{className:"max-w-md p-6 bg-gray-100 dark:bg-gray-800 rounded-lg",children:[e.jsx("h3",{className:"text-2xl font-bold mb-2",style:{color:t},children:"Colored Heading"}),e.jsx("p",{className:"text-base",style:{color:t},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})}},i={args:{value:"linear-gradient(135deg, rgba(255, 107, 107, 1) 0%, rgba(78, 205, 196, 1) 100%)"},render:()=>{const[t,r]=s.useState("linear-gradient(135deg, rgba(255, 107, 107, 1) 0%, rgba(78, 205, 196, 1) 100%)");return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsx(a,{value:t,onChange:r,title:"Gradient Background",showOpacity:!0,showGradient:!0}),e.jsx("div",{className:"w-80 h-48 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xl",style:{background:t},children:"Gradient Preview"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 text-center max-w-md",children:'Click "Linear" to copy gradient CSS. Use opacity control to adjust transparency.'})]})}},g={args:{value:"rgba(59, 130, 246, 1)"},render:()=>{const[t,r]=s.useState("rgba(59, 130, 246, 1)"),[c,p]=s.useState("rgba(139, 92, 246, 1)"),[o,x]=s.useState("rgba(236, 72, 153, 1)");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Primary Color"}),e.jsx(a,{value:t,onChange:r,title:"Primary"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Secondary Color"}),e.jsx(a,{value:c,onChange:p,title:"Secondary"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Accent Color"}),e.jsx(a,{value:o,onChange:x,title:"Accent"})]})]}),e.jsxs("div",{className:"flex gap-3 justify-center",children:[e.jsx("div",{className:"w-20 h-20 rounded-lg shadow-md",style:{background:t}}),e.jsx("div",{className:"w-20 h-20 rounded-lg shadow-md",style:{background:c}}),e.jsx("div",{className:"w-20 h-20 rounded-lg shadow-md",style:{background:o}})]})]})}},m={args:{value:"rgba(255, 255, 255, 1)"},render:()=>{const[t,r]=s.useState("rgba(255, 255, 255, 1)"),[c,p]=s.useState("linear-gradient(135deg, rgba(99, 102, 241, 1) 0%, rgba(139, 92, 246, 1) 100%)"),[o,x]=s.useState("rgba(31, 41, 55, 1)");return e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-medium text-gray-700 dark:text-gray-300",children:"Card Background"}),e.jsx(a,{value:t,onChange:r,title:"Card BG",showOpacity:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-medium text-gray-700 dark:text-gray-300",children:"Header Background"}),e.jsx(a,{value:c,onChange:p,title:"Header BG",showOpacity:!0,showGradient:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-medium text-gray-700 dark:text-gray-300",children:"Text Color"}),e.jsx(a,{value:o,onChange:x,title:"Text",showOpacity:!0})]})]}),e.jsxs("div",{className:"rounded-xl shadow-xl overflow-hidden",style:{background:t},children:[e.jsx("div",{className:"h-32 flex items-center justify-center text-white font-bold text-xl",style:{background:c},children:"Card Header"}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",style:{color:o},children:"Card Title"}),e.jsx("p",{className:"text-sm",style:{color:o},children:"This is a preview of your card design. Adjust colors above to see changes in real-time."})]})]})]})}},u={args:{value:"rgba(0, 0, 0, 0.5)"},render:()=>{const[t,r]=s.useState("rgba(0, 0, 0, 0.5)");return e.jsxs("div",{className:"space-y-4 flex flex-col items-center gap-4",children:[e.jsx(a,{value:t,onChange:r,title:"Overlay Color",showOpacity:!0}),e.jsxs("div",{className:"relative w-80 h-48 rounded-lg overflow-hidden",children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",alt:"Background",className:"absolute inset-0 w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-white font-bold text-2xl",style:{background:t},children:"Overlay Text"})]}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 text-center max-w-md",children:"Adjust opacity to control overlay transparency"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:`Basic example of InputColorPicker component.
Use Controls to change parameters.
Switch background in toolbar to change theme (light/dark).`,...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:`## Background Color
Component for controlling element background color with opacity.`,...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`## Text Color
Component for controlling text color.`,...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:`## Gradient Background
Component with gradient support for creating beautiful backgrounds.`,...i.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`## Multiple Colors
Managing multiple colors for a design system.`,...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`## Card Design
Using color picker to design a card component.`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`## Opacity Control
Demonstrating opacity control for overlays and backgrounds.`,...u.parameters?.docs?.description}}};const O=["Default","BackgroundColor","TextColor","GradientBackground","MultipleColors","CardDesign","OpacityControl"];export{n as BackgroundColor,m as CardDesign,l as Default,i as GradientBackground,g as MultipleColors,u as OpacityControl,d as TextColor,O as __namedExportsOrder,B as default};
