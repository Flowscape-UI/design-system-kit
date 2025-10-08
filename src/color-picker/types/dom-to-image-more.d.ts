declare module 'dom-to-image-more' {
	const domtoimage: {
		toPng: (_node: HTMLElement, _options?: any) => Promise<string>
		toJpeg: (_node: HTMLElement, _options?: any) => Promise<string>
		toBlob: (_node: HTMLElement, _options?: any) => Promise<Blob>
		toPixelData: (
			_node: HTMLElement,
			_options?: any
		) => Promise<Uint8ClampedArray>
		toSvg: (_node: HTMLElement, _options?: any) => Promise<string>
	}
	export default domtoimage
}
