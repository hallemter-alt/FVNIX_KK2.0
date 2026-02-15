# FVNIX Color System Documentation

## Overview
A comprehensive natural material-inspired color system designed for B2B essential oils brand. Based on 7 color palette mood boards featuring natural materials like cinnamon, moss, sage, rose ash, quartz, mist, and organic textures.

---

## Core Brand Colors (3 Primary)

### 1. Oatmeal (Primary Light)
- **Hex**: `#F5F1E8`
- **CSS Variable**: `--color-primary-light`
- **Usage**: Main background color (70% of site)
- **Properties**: Warm, inviting, natural base

### 2. Taupe (Primary Medium)
- **Hex**: `#C8BFB0`
- **CSS Variable**: `--color-primary-medium`
- **Usage**: Cards, sections, containers
- **Properties**: Neutral, elegant, versatile

### 3. Moss (Primary Dark)
- **Hex**: `#6B7A5B`
- **CSS Variable**: `--color-primary-dark`
- **Usage**: Headers, accents, CTAs
- **Properties**: Natural green, professional, trustworthy

---

## Product Category Color Palettes

Each category has 3 shades (light → medium → accent) for flexible design hierarchy.

### Floral Series 🌸
**Inspiration**: Soft rose petals, cream fabrics, delicate natural materials

- **Light**: `#F0EDE5` (`--product-floral-light`)
- **Medium**: `#E8DDD5` (`--product-floral-medium`)
- **Accent**: `#D4C5BA` (`--product-floral-accent`)

**Products**: Rose, Osmanthus, Lavender, Jasmine
**Texture**: Ceramic matte finish
**Mood**: Elegant, calming, romantic

---

### Citrus Series 🍋
**Inspiration**: Golden honey, fresh meadows, warm sunshine

- **Light**: `#E8E4E0` (`--product-citrus-light`)
- **Medium**: `#C8A66C` (`--product-citrus-medium`)
- **Accent**: `#95A862` (`--product-citrus-accent`)

**Products**: Lemon, Orange, Bergamot, Grapefruit
**Texture**: Woven canvas
**Mood**: Fresh, energizing, optimistic

---

### Herbal Series 🌿
**Inspiration**: Sage leaves, natural linen, botanical gardens

- **Light**: `#C8BBA6` (`--product-herbal-light`)
- **Medium**: `#8B9D83` (`--product-herbal-medium`)
- **Accent**: `#6B7A5B` (`--product-herbal-accent`)

**Products**: Eucalyptus, Peppermint, Tea Tree, Rosemary
**Texture**: Linen weave
**Mood**: Clean, natural, refreshing

---

### Woody Series 🌲
**Inspiration**: Tree bark, warm earth, aged wood

- **Light**: `#B4A488` (`--product-woody-light`)
- **Medium**: `#9A826F` (`--product-woody-medium`)
- **Accent**: `#554D3A` (`--product-woody-accent`)

**Products**: Cedar, Sandalwood, Pine, Cypress
**Texture**: Wood grain
**Mood**: Grounded, stable, masculine

---

### Spicy Series 🌶️
**Inspiration**: Cinnamon bark, warm spices, toasted notes

- **Light**: `#C8A66C` (`--product-spicy-light`)
- **Medium**: `#B8916A` (`--product-spicy-medium`)
- **Accent**: `#857861` (`--product-spicy-accent`)

**Products**: Cinnamon, Clove, Ginger, Black Pepper
**Texture**: Stone surface
**Mood**: Warm, inviting, exotic

---

### Resinous Series 🌲💧
**Inspiration**: Forest mist, pine needles, coastal fog

- **Light**: `#758886` (`--product-resinous-light`)
- **Medium**: `#4D6768` (`--product-resinous-medium`)
- **Accent**: `#3E5954` (`--product-resinous-accent`)

**Products**: Frankincense, Myrrh, Benzoin, Copaiba
**Texture**: Woven texture
**Mood**: Deep, mysterious, grounding

---

## Extended Neutral Palette

### Light Neutrals
| Color | Hex | Variable | Usage |
|-------|-----|----------|-------|
| Linen | `#FDFBF7` | `--color-linen` | Pure white alternative |
| Feather Cloud | `#F2F2F2` | `--color-feather-cloud` | Light neutral |
| Dawn | `#E8DFC4` | `--color-dawn` | Warm cream |
| Porcelain Oat | `#D9D0C7` | `--color-porcelain-oat` | Card backgrounds |
| Ameland | `#D9D0C1` | `--color-ameland` | Natural sand |

### Mid-tone Earth Colors
| Color | Hex | Variable | Usage |
|-------|-----|----------|-------|
| Dusty Beige | `#DBD1C5` | `--color-dusty-beige` | Soft sections |
| Dusk | `#B5A691` | `--color-dusk` | Warm dividers |
| Almond Cream | `#A69586` | `--color-almond-cream` | Subtle highlights |
| Stone Gray | `#A8A299` | `--color-stone-gray` | Neutral borders |
| Cinnamon | `#B8916A` | `--color-cinnamon` | Warm accents |

### Green Accents
| Color | Hex | Variable | Usage |
|-------|-----|----------|-------|
| Sage | `#8B9D83` | `--color-sage` | Soft green accent |
| Heather | `#A49B71` | `--color-heather` | Olive tone |
| Mossy | `#7B7D38` | `--color-mossy` | Highland green |
| Eucalyptus Fog | `#4D6768` | `--color-eucalyptus-fog` | Deep teal |
| Coastal Pine | `#3E5954` | `--color-coastal-pine` | Forest green |
| Dusty Sage | `#758886` | `--color-dusty-sage` | Muted sage |

### Deep Tones
| Color | Hex | Variable | Usage |
|-------|-----|----------|-------|
| Mocha | `#857861` | `--color-mocha` | Dark brown |
| Truffle | `#554D3A` | `--color-truffle` | Deep earth |
| Midnight Roast | `#403B31` | `--color-midnight-roast` | Coffee brown |
| Luxe Noir | `#060D0C` | `--color-luxe-noir` | Near black |
| Moorland | `#132B16` | `--color-moorland` | Dark forest |

---

## CSS Utility Classes

### Product Category Cards
```css
.product-floral-card      /* Gradient card for floral products */
.product-citrus-card      /* Gradient card for citrus products */
.product-herbal-card      /* Gradient card for herbal products */
.product-woody-card       /* Gradient card for woody products */
.product-spicy-card       /* Gradient card for spicy products */
.product-resinous-card    /* Gradient card for resinous products */
```

### Product Badges
```css
.product-badge-floral     /* Badge style for floral category */
.product-badge-citrus     /* Badge style for citrus category */
.product-badge-herbal     /* Badge style for herbal category */
.product-badge-woody      /* Badge style for woody category */
.product-badge-spicy      /* Badge style for spicy category */
.product-badge-resinous   /* Badge style for resinous category */
```

### Background Colors
```css
.bg-natural-light         /* Linen background */
.bg-natural-medium        /* Oatmeal background */
.bg-natural-warm          /* Natural beige background */
.bg-natural-taupe         /* Taupe background */
.bg-natural-stone         /* Stone gray background */
```

### Section Backgrounds (with gradient)
```css
.section-floral           /* Floral section gradient */
.section-citrus           /* Citrus section gradient */
.section-herbal           /* Herbal section gradient */
.section-woody            /* Woody section gradient */
.section-spicy            /* Spicy section gradient */
.section-resinous         /* Resinous section gradient */
```

---

## Usage Guidelines

### Color Distribution (70-25-5 Rule)
- **70%**: Primary Light (Oatmeal) - backgrounds, main surfaces
- **25%**: Primary Medium (Taupe) - cards, sections, containers
- **5%**: Primary Dark (Moss) + Category Colors - accents, CTAs, highlights

### Category Recognition
- Use category colors **only** for product-related elements
- Keep site navigation and structure in neutral/primary colors
- Apply category gradients subtly (max 2-stop gradients)
- Use category badges for quick visual identification

### Accessibility
- Maintain WCAG AA contrast ratios:
  - Light backgrounds: Use dark text (#2C2418 or darker)
  - Dark backgrounds: Use light text (#F5F1E8 or lighter)
- Test all color combinations with contrast checker
- Avoid using color alone to convey information

### Texture Pairing
Each category works best with specific textures:
- **Floral**: `.texture-ceramic` (soft matte finish)
- **Citrus**: `.texture-woven` (canvas weave)
- **Herbal**: `.texture-linen` (natural fabric)
- **Woody**: `.texture-wood` (grain pattern)
- **Spicy**: `.texture-stone` (stone gradient)
- **Resinous**: `.texture-woven` (tight weave)

---

## Design Principles

### 1. Natural Material Inspiration
All colors derived from photographs of:
- Organic materials (wood, stone, fabric)
- Natural spices and botanicals
- Earth and landscape elements
- Artisanal textures

### 2. Professional B2B Aesthetic
- Subdued, sophisticated palette
- No bright or neon colors
- High-end, premium feel
- Trust-building neutrals

### 3. Clear Category Differentiation
- Each product family has distinct identity
- Colors don't compete or clash
- Easy to scan and identify at a glance
- Consistent within categories

### 4. Cohesive Brand Identity
- All colors work harmoniously together
- Unified natural material theme
- Consistent application across all pages
- Recognizable brand personality

---

## Implementation Examples

### Product Card (Dynamic)
```tsx
function getCategoryStyles(series: string) {
  // Returns category-specific classes based on product series
  // Example: "Floral" → product-floral-card + product-badge-floral
}

<Link className={`${categoryStyle.card} ${categoryStyle.border}`}>
  <div className={categoryStyle.badge}>{p.series}</div>
  {/* Product details */}
</Link>
```

### Section Background
```tsx
<section className="section-herbal py-16">
  {/* Herbal products section with gradient background */}
</section>
```

### Badge Component
```tsx
<span className="product-badge product-badge-citrus">
  Citrus
</span>
```

---

## Color Extraction Sources

Based on 7 mood board images:
1. **Cinnamon/Moss/Sage/Rose Ash** - Natural spices and herbs
2. **Midnight Roast/Eucalyptus Fog/Almond Cream** - Coffee and botanicals
3. **Highland Haven Palette** - Dawn, Heather, Mossy, Shade, Forest, Moorland
4. **Earth Color Swatches** - Dusty beige, Sunset dust, Meadow sage, Honeyed
5. **Olive/Beige/White Study** - Minimalist natural palette
6. **Luxe Noir/Coastal Pine/Dusty Sage** - Deep sophisticated tones
7. **Social Inclusive Palette** - Dusty beige, Dusk, Mocha, Truffle

---

## Future Considerations

### Potential Additions
- Seasonal color variations (spring/summer/fall/winter)
- Limited edition product colors
- Regional market adaptations (Japan-specific palette)

### Expansion Guidelines
- New colors must pass contrast checks
- Should fit within natural material theme
- Must work with existing textures
- Require approval from design lead

---

## Color Psychology Mapping

| Category | Primary Emotion | Secondary Emotion | Brand Attributes |
|----------|----------------|-------------------|------------------|
| Floral | Elegance | Romance | Delicate, Premium, Feminine |
| Citrus | Energy | Optimism | Fresh, Vibrant, Uplifting |
| Herbal | Cleanliness | Balance | Natural, Healing, Pure |
| Woody | Stability | Confidence | Grounded, Masculine, Strong |
| Spicy | Warmth | Comfort | Exotic, Inviting, Rich |
| Resinous | Mystery | Depth | Spiritual, Ancient, Grounding |

---

## Version History

- **v2.0** (2026-02-15): Complete product category color system implementation
- **v1.5** (2026-02-13): Natural texture backgrounds and earth palette
- **v1.0** (Initial): Basic brand colors and neutrals

---

## Contact

For questions about color usage or additions to the palette:
- Design Lead: [Contact info]
- Brand Guidelines: `/docs/BRAND_GUIDELINES.md`
- Component Library: `/docs/COMPONENTS.md`
