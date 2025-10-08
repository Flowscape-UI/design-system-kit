# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

## [1.1.0] - 2024-12-19

### Added
- **Advanced Input Components System**
  - New `InputNumberSelect` component with drag-and-drop functionality
  - Support for multiple progression types: linear, arithmetic, geometric, paraboloid, exponential
  - Horizontal and vertical orientation support
  - Configurable precision and step values
  - Icon support (string or React component)
  - Enhanced validation with min/max constraints

- **Specialized Color Input Component**
  - `InputColorPicker` component with integrated color picker
  - Real-time color preview with live updates
  - Gradient support (linear and radial)
  - Opacity control with visual slider
  - Background visibility toggle (show/hide)
  - Background deletion functionality
  - HEX and RGBA format support
  - Draggable color picker modal

- **Utility Hooks and Functions**
  - `cn()` utility for Tailwind CSS class merging
  - `removeTrailingZeros()` function for number formatting
  - Enhanced TypeScript interfaces and types

- **New Dependencies**
  - `lucide-react` for modern icon set
  - `react-icons` for additional icon support
  - `tailwind-merge` for intelligent class merging

### Changed
- **Component Architecture**
  - Moved `InputNumberSelect` to `src/components/input/` directory
  - Updated import paths in `Inputs.tsx` component
  - Improved component organization and modularity

- **Styling System**
  - Integrated Tailwind CSS for modern styling
  - Enhanced dark theme support
  - Improved responsive design
  - Better visual feedback and animations

- **User Experience**
  - More intuitive drag-and-drop interactions
  - Enhanced visual feedback for value changes
  - Compact design with preserved functionality
  - Better keyboard accessibility
  - Smooth transitions and animations

### Technical Improvements
- **TypeScript Enhancements**
  - Extended interfaces with better type safety
  - Improved component prop definitions
  - Better error handling and validation

- **Performance Optimizations**
  - Optimized React hooks usage
  - Better component re-rendering patterns
  - Improved memory management

- **Code Quality**
  - Modular architecture with separated concerns
  - Reusable utility functions
  - Better code organization and maintainability

### Dependencies
- Added `lucide-react@^0.544.0`
- Added `react-icons@^5.5.0`
- Added `tailwind-merge@^3.3.1`
- Kept `tinycolor2@^1.6.0` for color manipulation

## [1.0.0] - 2024-12-19

### Added
- **Core Color Picker Component**
  - Full-featured React color picker for whiteboard systems
  - Support for multiple color formats: RGB, HSL, HSV, CMYK, HEX
  - Gradient support (linear and radial)
  - Eye dropper functionality for screen color picking

- **Advanced Features**
  - Dark/light mode with automatic theme detection
  - Highly customizable with hide/show options for all components
  - Preset color support with custom color arrays
  - Advanced sliders for fine-tuning colors
  - Color guide and comparable colors display

- **Component System**
  - Modular component architecture
  - `ColorPicker` main component
  - `useColorPicker` hook for advanced usage
  - Individual components: ColorSpectrum, Hue, Opacity, Controls, Inputs, Presets

- **Configuration Options**
  - Custom dimensions (width/height)
  - Configurable bar and crosshair sizes
  - Default color and gradient values
  - Custom styling support
  - Localization support

- **Developer Experience**
  - Full TypeScript support with type definitions
  - Comprehensive documentation and examples
  - Storybook playground with multiple examples
  - ESLint configuration for code quality

- **Build System**
  - Vite-based development environment
  - TSUP for library building
  - Ladle for component development
  - Vitest for testing

### Dependencies
- `react@>=18` (peer dependency)
- `react-dom@>=18` (peer dependency)
- `tinycolor2@^1.6.0` for color manipulation
- `@types/tinycolor2@^1.4.4` for TypeScript support

### Documentation
- Comprehensive README.md with installation and usage examples
- Complete API documentation
- Multiple playground examples demonstrating all features
- Browser support information
- Contributing guidelines

---

## Version History Summary

### v1.1.0 - Major Enhancement Release
- **Focus**: Advanced input components and improved UX
- **Key Features**: Drag-and-drop inputs, specialized color picker, Tailwind CSS integration
- **Impact**: Significantly enhanced user experience and component flexibility

### v1.0.0 - Initial Release
- **Focus**: Core color picker functionality
- **Key Features**: Multi-format color support, gradients, eye dropper, customization
- **Impact**: Solid foundation for whiteboard color selection needs

---

## Migration Guide

### From v1.0.0 to v1.1.0

#### Breaking Changes
- `InputNumberSelect` component moved from `src/components/InputNumberSelect.tsx` to `src/components/input/input-number-select.tsx`
- Import path changed: `import InputNumberSelect from './InputNumberSelect'` → `import { InputNumberSelect } from './input/input-number-select'`

#### New Dependencies Required
```bash
npm install lucide-react react-icons tailwind-merge
```

#### New Components Available
- `InputColorPicker` - Specialized color input with integrated picker
- Enhanced `InputNumberSelect` - Advanced numeric input with drag-and-drop
- `Input` - Base input component with Tailwind styling

#### Recommended Updates
- Consider using new `InputColorPicker` for color selection interfaces
- Leverage enhanced `InputNumberSelect` for better numeric input UX
- Integrate Tailwind CSS for consistent styling

---

## Future Roadmap

### Planned Features (v1.2.0)
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Additional color format support (LAB, XYZ)
- [ ] Color palette management
- [ ] Undo/redo functionality
- [ ] Color history tracking
- [ ] Export/import color schemes

### Long-term Goals
- [ ] Web Components support
- [ ] React Native compatibility
- [ ] Performance optimizations for large color palettes
- [ ] Advanced gradient editing tools
- [ ] Color harmony suggestions
- [ ] Integration with design systems

---

*This changelog follows [Keep a Changelog](https://keepachangelog.com/) format and uses [Semantic Versioning](https://semver.org/) for version numbers.*


