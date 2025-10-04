import { useState, useRef, useEffect } from 'react';
import { Eye, EyeOff, Trash2, X } from 'lucide-react';
import { InputNumberSelect } from './input-number-select';
import { ColorPicker } from '../index';

import { cn } from '../../hooks/cn';

// Helper function to parse color string into HEX and opacity
const parseColor = (colorStr: string) => {
    if (!colorStr) return { hex: '------', opacity: 100 };

    // Handle gradients by returning a "Mixed" state
    if (colorStr.includes('gradient')) {
        return { hex: 'Mixed', opacity: 100 };
    }

    if (colorStr.startsWith('#')) {
        return { hex: colorStr.toUpperCase(), opacity: 100 };
    }
    const rgbaMatch = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (rgbaMatch) {
        const r = parseInt(rgbaMatch[1]);
        const g = parseInt(rgbaMatch[2]);
        const b = parseInt(rgbaMatch[3]);
        const a = rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1;
        const componentToHex = (c: number) => {
            const hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        };
        const hex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        return { hex: hex.toUpperCase(), opacity: Math.round(a * 100) };
    }
    // Fallback for invalid colors
    return { hex: colorStr, opacity: 100 };
}

const rgbToHex = (rgbStr: string): string => {
    if (!rgbStr) return '#000000'; // Default color

    // If it's already a hex, return it.
    if (rgbStr.startsWith('#')) return rgbStr.toUpperCase();

    // Match rgb(r,g,b) or rgba(r,g,b,a)
    const match = rgbStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);

    if (match) {
        const r = parseInt(match[1], 10);
        const g = parseInt(match[2], 10);
        const b = parseInt(match[3], 10);

        const toHex = (c: number) => ('0' + c.toString(16)).slice(-2);

        return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
    }

    // Return a default if the format is unrecognized
    return '#000000';
};

const hexToRgb = (hexStr: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const fullHex = hexStr.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
    if (!result) return null;
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    };
};

export const InputColorPicker = ({
    title = 'Background Color',
    className,
    value = 'rgba(255,255,255,1)',
    onChange,
    onShowPicker,
    onHideBackground,
    onOpacityChange,
    onDeleteBackground,
}: {
    title?: string;
    value?: string;
    className?: string;
    onChange?: (color: string) => void;
    onShowPicker?: (hidden: boolean) => void;
    onHideBackground?: (hidden: boolean) => void;
    onOpacityChange?: (opacity: number) => void;
    onDeleteBackground?: () => void;
}) => {
    const { hex, opacity } = parseColor(value);
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const [color, setColor] = useState(value);
    const [inputValue, setInputValue] = useState(hex);
    const [livePreviewColor, setLivePreviewColor] = useState(value);
    const [colorType, setColorType] = useState<string>('color');

    const [opacityValue, setOpacityValue] = useState(100);


    useEffect(() => {
        const { hex: newHex } = parseColor(value);
        setInputValue(newHex);
        setColor(value);
        setLivePreviewColor(value);
    }, [value]);

    const pickerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ top: window.innerHeight / 2, left: window.innerWidth / 2 });
    const dragStart = useRef<{ x: number; y: number; top: number; left: number } | null>(null);

    const [isBackgroundHidden, setIsBackgroundHidden] = useState<boolean>(false);

    const handleTogglePicker = () => {
        if (!isPickerOpen) {
            setPosition({ top: window.innerHeight / 2, left: window.innerWidth / 2 });
        }
        onShowPicker?.(!isPickerOpen);
        setIsPickerOpen(prev => !prev);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filteredValue = e.target.value.replace(/[^0-9a-fA-F]/g, '');
        const finalValue = filteredValue.substring(0, 6).toUpperCase();
        setInputValue(finalValue);

        if (finalValue.length === 3 || finalValue.length === 6) {
            const newHex = `#${finalValue}`;
            const rgb = hexToRgb(newHex);
            if (rgb) {
                const newRgbaColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity / 100})`;
                setLivePreviewColor(newRgbaColor);
            }
        }
    };

    const handleInputFocus = () => {
        if (inputValue.startsWith('#')) {
            setInputValue(inputValue.substring(1));
        }
    };

    const handleHexChange = () => {
        if (hex === 'Mixed') return;

        let newHex = inputValue.trim();
        if (!newHex.startsWith('#')) {
            newHex = `#${newHex}`;
        }

        const rgb = hexToRgb(newHex);

        if (rgb) {
            const newRgbaColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity / 100})`;
            onChange?.(newRgbaColor);
            setInputValue(newHex.toUpperCase());
        } else {
            const { hex: originalHex } = parseColor(value);
            setInputValue(originalHex);
            setLivePreviewColor(value);
        }
    };

    const handleDragAndDrop = (e: React.MouseEvent) => {
        if (!pickerRef.current) return;

        dragStart.current = {
            x: e.clientX,
            y: e.clientY,
            top: pickerRef.current.offsetTop,
            left: pickerRef.current.offsetLeft,
        };

        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (!dragStart.current) return;
            const dx = moveEvent.clientX - dragStart.current.x;
            const dy = moveEvent.clientY - dragStart.current.y;
            setPosition({
                top: dragStart.current.top + dy,
                left: dragStart.current.left + dx,
            });
        };

        const handleMouseUp = () => {
            dragStart.current = null;
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };


    let displayColor = livePreviewColor && (livePreviewColor.includes('gradient') || livePreviewColor.startsWith('rgba') || livePreviewColor.startsWith('#')) ? livePreviewColor : '#FFFFFF';
    if (displayColor.startsWith('#')) {
        const opacityToHex = (opacity: number): string => {
            if (opacity < 0 || opacity > 100) return 'ff';
            const alpha = Math.round((opacity / 100) * 255);
            return alpha.toString(16).padStart(2, '0');
        };
        let hexVal = displayColor.substring(1);
        if (hexVal.length === 3 || hexVal.length === 4) {
            hexVal = hexVal.split('').map(char => char + char).join('');
        }
        const rgbHex = hexVal.substring(0, 6);
        displayColor = `#${rgbHex}${opacityToHex(opacityValue)}`;
    }

    return (
        <div className="w-fit">
            <div className={cn("flex items-center justify-between bg-[#3D3D3D] rounded-md p-1 border border-transparent", className)}>
                {colorType === 'color' ?
                    <div className='flex items-center gap-1 w-full'>
                        <button
                            onClick={handleTogglePicker}
                            className="relative size-5 rounded-sm overflow-hidden bg-white"
                        >
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage:
                                        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\' viewBox=\'0 0 8 8\'%3E%3Cg fill=\'%23d1d1d1\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M0 0h4v4H0V0zm4 4h4v4H4V4z\'/%3E%3C/g%3E%3C/svg%3E")',
                                }}
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: displayColor,
                                    opacity: opacityValue / 100,
                                }}
                            />
                        </button>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            onBlur={handleHexChange}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleHexChange();
                                    (e.target as HTMLInputElement).blur();
                                }
                            }}
                            className="bg-transparent outline-none px-2 text-gray-200 font-mono text-xs"
                            disabled={hex === 'Mixed'}
                        />
                    </div>
                    :
                    <button
                        onClick={handleTogglePicker}
                        className='inline-flex items-center gap-1 w-full'
                    >
                        <div className="relative size-5 rounded-sm overflow-hidden">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage:
                                        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\' viewBox=\'0 0 8 8\'%3E%3Cg fill=\'%23d1d1d1\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M0 0h4v4H0V0zm4 4h4v4H4V4z\'/%3E%3C/g%3E%3C/svg%3E")',
                                }}
                            />
                            <div className='absolute inset-0' style={{ background: displayColor, opacity: opacityValue / 100 }} />
                        </div>
                        <span className="outline-none px-2 text-gray-200 font-mono text-xs" >{inputValue}</span>
                    </button>
                }


                <div className='inline-flex items-center'>
                    <InputNumberSelect
                        value={opacityValue}
                        onChange={(value) => {
                            const newOpacity = Number(value) || 0;
                            onOpacityChange?.(newOpacity);
                            setOpacityValue(newOpacity);

                            if (color.includes('gradient')) {
                                return;
                            }

                            const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                            if (rgbMatch) {
                                const r = rgbMatch[1];
                                const g = rgbMatch[2];
                                const b = rgbMatch[3];
                                const newRgbaColor = `rgba(${r}, ${g}, ${b}, ${newOpacity / 100})`;
                                setColor(newRgbaColor);
                                onChange?.(newRgbaColor);
                            } else {
                                const rgb = hexToRgb(color);
                                if (rgb) {
                                    const newRgbaColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${newOpacity / 100})`;
                                    setColor(newRgbaColor);
                                    onChange?.(newRgbaColor);
                                }
                            }
                        }}
                        step={1}
                        min={0}
                        icon="%"
                        max={100}
                        className='bg-transparent dark:bg-transparent flex-row-reverse px-0 py-0 h-4 outline-none border-none font-mono text-xs text-gray-400'
                        classNameInput='w-10 text-gray-400 font-mono text-xs px-0 py-0 text-right'
                    />
                    <div className="w-px h-4 bg-gray-600 mx-1" /> {/* Divider */}
                    <button
                        onClick={() => {
                            onHideBackground?.(!isBackgroundHidden);
                            setIsBackgroundHidden(!isBackgroundHidden);
                        }}
                        className="p-1 text-gray-400 hover:text-white"
                    >
                        {isBackgroundHidden ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                    <button onClick={onDeleteBackground} className="p-1 text-gray-400 hover:text-white">
                        <Trash2 size={14} />
                    </button>
                </div>
            </div>

            {isPickerOpen && (
                <div
                    ref={pickerRef}
                    className="fixed z-50 bg-[#202020] overflow-hidden rounded-md"
                    style={{
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <header
                        className="flex items-center justify-between mb-2 py-1 cursor-move pl-3 pr-1"
                        onMouseDown={handleDragAndDrop}
                    >
                        <span className="text-gray-200 font-mono text-xs select-none">
                            {title}
                        </span>
                        <button
                            className="text-gray-400 hover:text-white"
                            onClick={() => setIsPickerOpen(false)}
                        >
                            <X size={22} />
                        </button>
                    </header>

                    <div className="px-3 pb-3">
                        <ColorPicker
                            className="mx-auto"
                            value={color}
                            onChange={(newColor) => {
                                onChange?.(newColor);
                                setColor(newColor);

                                if (newColor.includes('gradient')) {
                                    setLivePreviewColor(newColor);

                                    if (colorType === 'color') {
                                        setColorType('gradient');
                                    }

                                    if (newColor.includes('linear-gradient')) {
                                        setInputValue('Linear');
                                    } else if (newColor.includes('radial-gradient')) {
                                        setInputValue('Radial');
                                    } else {
                                        setInputValue('Gradient');
                                    }

                                    return;
                                }

                                if (colorType === 'gradient') {
                                    setColorType('color');
                                    return;
                                }

                                const rgbaMatch = newColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
                                if (rgbaMatch) {
                                    const alpha = rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1;
                                    setOpacityValue(Math.round(alpha * 100));
                                }

                                setLivePreviewColor(newColor);
                                setInputValue(rgbToHex(newColor));
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}