# Changelog

## [1.3.0] - 2025-10-11

### Added

**🌈 Gradient Support for InputColorPicker**

- **Full gradient support** for `InputColorPicker` component
  - Linear gradients with multiple color stops
  - Automatic gradient detection and UI switching
  - Click gradient text to copy CSS to clipboard
  - Opacity control applies to all gradient colors

- **Gradient Input Features**
  - Displays gradient as "Linear" text with copy functionality
  - Customizable width via `classNameGradientInput` prop
  - Automatic mode switching between solid color and gradient
  - Preserves gradient format during opacity changes

- **Opacity Management**
  - Opacity applies to all rgba colors in gradients
  - Smooth drag control without value jumps
  - Separate opacity state for gradients vs solid colors
  - Real-time preview updates

- **New Props**
  - `classNameGradientInput?: string` - Custom classes for gradient input
  - `showGradient?: boolean` - Enable gradient mode in ColorPicker popup
  - Enhanced `onChange` callback with gradient support

### Changed

- **InputColorPicker Component**
  - Refactored to support both solid colors and gradients
  - Improved state management with `colorType` detection
  - Enhanced `useColorPickerState` hook with gradient logic
  - Better synchronization between gradient and opacity

- **Opacity Control**
  - Modified to apply opacity to all rgba colors in gradients
  - Fixed drag behavior to prevent value resets
  - Improved `useEffect` dependencies for gradient handling

### Fixed

- 🐛 Fixed opacity jumping between current value and 100% during drag for gradients
- 🐛 Fixed gradient input width inconsistency with solid color input
- 🐛 Fixed initial colorType not detecting gradients on mount
- 🐛 Fixed opacity not applying to all colors in gradient string
- 🐛 Improved gradient CSS parsing and manipulation

### Documentation

- Updated README.md with comprehensive InputColorPicker documentation
- Added gradient examples and usage patterns
- Enhanced Storybook with 7 interactive examples:
  - Default, BackgroundColor, TextColor
  - GradientBackground, MultipleColors
  - CardDesign, OpacityControl
- Added API reference for all InputColorPicker props

### Technical Improvements

- **TypeScript**
  - Added `classNameGradientInput` to InputColorPickerProps interface
  - Better type safety for gradient detection
  - Improved prop type definitions

- **Code Quality**
  - Modular gradient handling utilities
  - Consistent code formatting
  - Better error handling for clipboard operations

- **Bundle Size**
  - No significant increase in bundle size
  - Tree-shakeable as before
  - Optimized gradient regex operations

### Breaking Changes

**None** — This release is fully backward compatible.

- Components without gradient support work exactly as before
- All existing solid color functionality preserved
- New gradient features are opt-in via `showGradient` prop

## [1.2.0] - 2025-10-10

### Added

**🎨 Alpha Channel Support for HEX Inputs**

- **`showAlpha` prop** for `InputHex` and `InputHexWithPreview` components
  - Enable 8-symbol HEX input (RRGGBBAA format)
  - Supports alpha values from 00 (transparent) to FF (opaque)
  - Backward compatible — defaults to 6-symbol input

- **Automatic Preview Transparency**
  - `InputHexWithPreview` now displays alpha channel in preview
  - Preview shows real transparency on checkerboard background
  - Alpha affects preview color automatically

- **Smart Drag Behavior**
  - Drag changes only base color (first 6 symbols)
  - Alpha channel is preserved during drag operations
  - No conflicts between drag and alpha input

- **Uppercase Formatting**
  - All HEX values automatically converted to uppercase
  - Consistent formatting across all inputs
  - Applied to both manual input and drag operations

### Changed

- **InputHex Component**
  - Refactored state management (`disable` → `isEditing`)
  - Improved local state handling (`newHex` → `localHex`)
  - Enhanced input validation and filtering
  - Better synchronization with parent component

- **InputHexWithPreview Component**
  - Removed `opacity` prop (replaced by alpha channel in hex value)
  - Preview now uses alpha from hex color directly
  - Simplified API — one source of truth for transparency

### Fixed

- 🐛 Fixed bug where drag would reset to previous value when alpha present
- 🐛 Fixed race condition in state synchronization after drag
- 🐛 Fixed alpha preservation during drag operations
- 🐛 Improved `useEffect` dependencies for better state management

### Documentation

- Updated README.md with alpha channel examples
- Added comprehensive API reference for `showAlpha` prop
- Enhanced Storybook examples with alpha demonstrations
- Improved component descriptions and feature lists
- Added migration notes for `opacity` prop removal

### Technical Improvements

- **TypeScript**
  - Updated interfaces with `showAlpha?: boolean`
  - Better type safety for hex color validation
  - Improved prop type definitions

- **Code Quality**
  - Consistent code formatting across components
  - Better error handling for edge cases
  - Improved component architecture

- **Bundle Size**
  - No increase in bundle size
  - Tree-shakeable as before
  - Optimized imports

### Breaking Changes

**None** — This release is fully backward compatible.

- Components without `showAlpha` prop work exactly as before (6 symbols)
- Removed `opacity` prop from `InputHexWithPreview` (use alpha in hex value instead)
- All existing code continues to work without modifications

### Migration Guide

#### Using Alpha Channel (Optional)

```tsx
// Before (v1.1.0)
<InputHexWithPreview hexColor="#FF5733" opacity={0.5} handleChange={setColor} />

// After (v1.2.0) - Use alpha in hex value
<InputHexWithPreview hexColor="#FF5733DD" handleChange={setColor} showAlpha />
```

#### No Changes Required

If you're not using alpha channel, no changes are needed:

```tsx
// Still works exactly the same
<InputHex hexColor="#FF5733" handleChange={setColor} />
<InputHexWithPreview hexColor="#FF5733" handleChange={setColor} />
```

## [1.1.0] - 2025-10-08

### Added

**🎉 13 New Specialized Input Components**

- `OpacityInput` - Opacity control (0-100%)
- `AngleInput` - Rotation angle control (0-360°)
- `BorderRadiusInput` - Border radius control with unit support
- `BorderRadiusMultiInput` - Control all 4 corners independently
- `WidthInput` - Width control with multiple units
- `HeightInput` - Height control with multiple units
- `SpacingInput` - Spacing and gap control
- `FontSizeInput` - Font size control
- `LineHeightInput` - Line height control (unitless)
- `LetterSpacingInput` - Letter spacing control
- `ZIndexInput` - Z-index layering control
- `ScaleInput` - Element scaling control
- `BlurInput` - Blur effect control

**Advanced Input Features**

- 🎛️ **5 Progression Types**: linear, arithmetic, geometric, paraboloid, exponential
- 🔄 **Drag-to-change** functionality for all numeric inputs
- 📐 **Dual orientation**: horizontal and vertical layouts
- 🎨 **Theme support**: light, dark, and auto modes
- 🔢 **Precision control**: configurable decimal places
- 📏 **Unit system**: px, %, rem, em, deg, pt, none
- 🎯 **Custom icons**: string or React component support
- 🎨 **Full customization**: className props for all elements

**Modular Architecture**

- Refactored `InputColorPicker` into modular structure:
  - `hooks/` - useColorPickerState, useDraggable
  - `utils/` - color conversion utilities
  - `types.ts` - TypeScript definitions
- Shared input utilities and hooks
- Consistent component patterns across all inputs

**Documentation**

- Added `INPUTS_GUIDE.md` with comprehensive input documentation
- Updated README.md with new components section
- Added Storybook examples for all input components
- Created `README.md` for InputColorPicker module

### Changed

- **InputColorPicker Architecture**
  - Decomposed into hooks, utils, and types
  - Improved code maintainability and reusability
  - Better TypeScript support with exported types

- **Input Components Structure**
  - Unified `src/inputs/` directory for all input components
  - Shared utilities in `src/inputs/shared/`
  - Consistent prop interfaces across components

- **Theme System**
  - Unified theme classes for light/dark modes
  - Auto theme detection based on system preferences
  - Consistent styling across all components

### Fixed

- 🐛 Fixed NaN% error in gradient color strings
- 🐛 Fixed opacity validation in gradients
- 🐛 Fixed LineHeightInput using wrong type (now uses BaseInputPropsWithoutUnit)
- 🐛 Improved color parsing for edge cases
- 🐛 Fixed import order consistency across components

### Technical Improvements

- **TypeScript**
  - Exported all shared types (Unit, Orientation, Progression, etc.)
  - Better type safety with strict null checks
  - Improved prop type definitions

- **Code Quality**
  - Unified import order across all components
  - Consistent code formatting
  - Better error handling and validation

- **Bundle Size**
  - Tree-shakeable exports for all input components
  - Modular imports for optimal bundle size
  - Individual component exports in package.json

### Dependencies

- No new dependencies added
- Leveraged existing `lucide-react` for icons
- Utilized `tailwind-merge` for className handling

## [1.0.0] - 2025-10-06

### Changed

- **Project Renamed**: `@flowscape-ui/color-picker` → `@flowscape-ui/design-system-kit`
- Updated package name to reflect expanded scope as a comprehensive design system
- Enhanced keywords for better discoverability (design-system, design-system-kit, ui-components, component-library, input-range, ui-kit)
- Updated all documentation and references to new package name
- Prepared for future expansion with additional UI components beyond color picker

### Note

This is the initial release under the new name. The library now serves as a foundation for a complete design system kit, with plans to include input range components and other essential UI elements.
