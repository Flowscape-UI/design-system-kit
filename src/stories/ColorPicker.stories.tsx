import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { addons } from 'storybook/manager-api'
import { themes } from 'storybook/theming'
import { ColorPicker } from '../color-picker'

addons.setConfig({ theme: themes.dark })

const meta: Meta<typeof ColorPicker> = {
	title: 'Components/ColorPicker',
	component: ColorPicker,
	parameters: {
		layout: 'centered',
		initialGlobals: {
			backgrounds: { value: 'dark' },
		},
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: '#0b0f1a' },
				{ name: 'black', value: '#000000' },
				{ name: 'white', value: '#ffffff' },
			],
		},
	},
	argTypes: {
		value: { control: 'color', description: 'The current color value' },
		onChange: { action: 'changed', description: 'Callback when color changes' },
		width: { control: 'number', description: 'Width of the color picker' },
		height: { control: 'number', description: 'Height of the color picker' },
		hideControls: { control: 'boolean', description: 'Hide control buttons' },
		hideInputs: { control: 'boolean', description: 'Hide input fields' },
		hideOpacity: { control: 'boolean', description: 'Hide opacity control' },
		hidePresets: { control: 'boolean', description: 'Hide preset colors' },
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: '#0b0f1a' },
				{ name: 'black', value: '#000000' },
				{ name: 'white', value: '#ffffff' },
			],
		},
	},
	args: {
		value: 'rgba(175, 51, 242, 1)',
		width: 300,
		height: 300,
	},
	render: args => {
		const [color, setColor] = useState(args.value)

		const copy = async () => {
			try {
				await navigator.clipboard.writeText(color as string)
				// легкий визуальный отклик: меняем title на 1.5s
				const t = document.getElementById('cp-title')
				if (t) {
					const prev = t.textContent
					t.textContent = 'Copied!'
					setTimeout(() => (t.textContent = prev ?? 'Selected Color'), 1500)
				}
			} catch {}
		}

		return (
			<div style={{ padding: 24 }}>
				{/* Карточка-презентация */}
				<div
					style={{
						maxWidth: 480,
						borderRadius: 12,
						// тонкая рамка + глубокая тень (в духе Spectrum neutral/dark)
						border: '1px solid #2a2f3a',
						boxShadow:
							'0 1px 0 rgba(255,255,255,0.04) inset, 0 12px 32px rgba(0,0,0,0.35)',
						background: '#202020',
						padding: 20,
						color: '#e5e7eb',
					}}
				>
					<h3 className="text-2xl text-center font-bold">Basic Color Picker</h3>

					<div className="mt-3 grid gap-4">
						<ColorPicker
							{...args}
							value={color}
							onChange={next => {
								setColor(next)
								args.onChange?.(next)
							}}
							className="mx-auto"
						/>

						{/* Инфопанель со «шахматкой» под альфу */}
						<div
							style={{
								border: '1px solid #2a2f3a',
								borderRadius: 10,
								background: '#141720',
								padding: 14,
								display: 'grid',
								gap: 10,
							}}
						>
							<div
								id="cp-title"
								style={{
									fontSize: 13,
									fontWeight: 600,
									opacity: 0.9,
								}}
							>
								Selected Color
							</div>

							<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
								{/* Чекерборд + цвет поверх */}
								<div
									style={{
										position: 'relative',
										width: 112,
										height: 56,
										borderRadius: 8,
										overflow: 'hidden',
										border: '1px solid #394052',
										boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)',
									}}
								>
									<div
										aria-hidden
										style={{
											position: 'absolute',
											inset: 0,
											background:
												'linear-gradient(45deg,#2b2f3a 25%,transparent 25%) 0 0/14px 14px,' +
												'linear-gradient(45deg,transparent 75%,#2b2f3a 75%) 0 0/14px 14px,' +
												'linear-gradient(45deg,transparent 75%,#2b2f3a 75%) 7px 7px/14px 14px,' +
												'linear-gradient(45deg,#2b2f3a 25%,transparent 25%) 7px 7px/14px 14px',
										}}
									/>
									<div
										style={{
											position: 'absolute',
											inset: 0,
											background: color as string,
										}}
									/>
								</div>

								<div style={{ display: 'grid', gap: 6 }}>
									<code
										style={{
											fontSize: 13,
											background: '#0f1320',
											border: '1px solid #2a2f3a',
											padding: '6px 8px',
											borderRadius: 6,
											minWidth: 200,
										}}
									>
										{String(color)}
									</code>
									<button
										onClick={copy}
										style={{
											width: 90,
											height: 28,
											fontSize: 12,
											fontWeight: 600,
											color: '#e8eaee',
											background:
												'linear-gradient(180deg,#2a2f3a,#1d2130) padding-box,' +
												'linear-gradient(90deg,#5f6af2,#a855f7) border-box',
											border: '1px solid transparent',
											borderRadius: 6,
											cursor: 'pointer',
										}}
									>
										Copy
									</button>
								</div>
							</div>
						</div>

						{/* Небольшой список примеров токенов/значений (визуальный баланс) */}
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(6, 1fr)',
								gap: 8,
								opacity: 0.9,
							}}
							aria-label="Color presets"
						>
							{[
								'#ffffff',
								'#0b0f1a',
								'#94a3b8',
								'#a855f7',
								'#22c55e',
								'#ef4444',
							].map(c => (
								<button
									key={c}
									onClick={() => {
										setColor(c)
										args.onChange?.(c as any)
									}}
									title={c}
									style={{
										height: 26,
										borderRadius: 6,
										border: '1px solid #2a2f3a',
										background: c,
										cursor: 'pointer',
									}}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		)
	},
}

export const WithGradient: Story = {
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: '#0b0f1a' },
				{ name: 'black', value: '#000000' },
				{ name: 'white', value: '#ffffff' },
			],
		},
	},
	args: {
		value:
			'linear-gradient(90deg, rgba(175, 51, 242, 1) 0%, rgba(51, 154, 242, 1) 100%)',
		width: 300,
		height: 300,
		hideGradientControls: false,
	},
	render: args => {
		const [color, setColor] = useState(args.value)

		const copy = async () => {
			try {
				await navigator.clipboard.writeText(color as string)
				const t = document.getElementById('cp-gradient-title')
				if (t) {
					const prev = t.textContent
					t.textContent = 'Copied!'
					setTimeout(() => (t.textContent = prev ?? 'Selected Gradient'), 1500)
				}
			} catch {}
		}

		return (
			<div style={{ padding: 24 }}>
				<div
					style={{
						maxWidth: 480,
						borderRadius: 12,
						border: '1px solid #2a2f3a',
						boxShadow:
							'0 1px 0 rgba(255,255,255,0.04) inset, 0 12px 32px rgba(0,0,0,0.35)',
						background: '#202020',
						padding: 20,
						color: '#e5e7eb',
					}}
				>
					<h3 className="text-2xl text-center font-bold">
						Gradient Color Picker
					</h3>

					<div className="mt-3 grid gap-4">
						<ColorPicker
							{...args}
							value={color}
							onChange={next => {
								setColor(next)
								args.onChange?.(next)
							}}
							className="mx-auto"
						/>

						<div
							style={{
								border: '1px solid #2a2f3a',
								borderRadius: 10,
								background: '#141720',
								padding: 14,
								display: 'grid',
								gap: 10,
							}}
						>
							<div
								id="cp-gradient-title"
								style={{
									fontSize: 13,
									fontWeight: 600,
									opacity: 0.9,
								}}
							>
								Selected Gradient
							</div>

							<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
								<div
									style={{
										position: 'relative',
										width: 112,
										height: 56,
										borderRadius: 8,
										overflow: 'hidden',
										border: '1px solid #394052',
										boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)',
										background: color as string,
									}}
								/>

								<div style={{ display: 'grid', gap: 6 }}>
									<code
										style={{
											fontSize: 11,
											background: '#0f1320',
											border: '1px solid #2a2f3a',
											padding: '6px 8px',
											borderRadius: 6,
											minWidth: 200,
											maxWidth: 280,
											minHeight: 90,
											wordBreak: 'break-all',
										}}
									>
										{String(color)}
									</code>
									<button
										onClick={copy}
										style={{
											width: 90,
											height: 28,
											fontSize: 12,
											fontWeight: 600,
											color: '#e8eaee',
											background:
												'linear-gradient(180deg,#2a2f3a,#1d2130) padding-box,' +
												'linear-gradient(90deg,#5f6af2,#a855f7) border-box',
											border: '1px solid transparent',
											borderRadius: 6,
											cursor: 'pointer',
										}}
									>
										Copy
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	},
}
