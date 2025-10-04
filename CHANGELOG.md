# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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


