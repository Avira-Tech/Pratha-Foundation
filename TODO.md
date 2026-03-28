# Global Website Theme Update TODO

## Approved Plan Steps (Proceeding as confirmed by feedback)

- [x] **Step 1**: Update `tailwind.config.js` 
  - Set `secondary: '#000000'`
  - Remove `backgroundImage: 'heritage-gradient'`
- [x] **Step 2**: Clean `src/App.css`
  - Remove fonts import
  - Delete `.leaf-watermark` class
  - Update `.btn-primary` to `bg-black text-white`
  - Update `.icon-zen` border to `border-black`
- [x] **Step 3**: Update `src/index.css`
  - Set CSS var `--secondary: 0 0% 0%;` (hsl black)
- [x] **Step 4**: Patch `src/components/Hero.jsx`
  - Remove inline SVG `backgroundImage`, `backgroundColor`, `backgroundSize/Position`
  - Replace `text-secondary` with `text-black`
- [x] **Step 5**: Verify no other inline styles (search confirmed none)
- [x] **Step 6**: Test changes - run dev server, check all pages solid green bgs, black text, no patterns/gradients/other colors

**All steps complete!** Theme updated globally.

**Post-completion**: `cd pratha-foundation-website && npm start` to view.

