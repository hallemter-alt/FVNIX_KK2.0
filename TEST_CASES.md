# 🧪 Test Cases for Multi-Select Filtering

## Products Page Tests

### Single Tag Filter
- **URL**: `/products?tag=relax`
- **Expected**: Show only products with "relax" tag (e.g., Lavender)
- **Verify**: Chip shows "relax ✕", results count updates

### Multi-Tag OR Filter
- **URL**: `/products?tag=relax,fresh`
- **Expected**: Show products with EITHER "relax" OR "fresh" tag
- **Verify**: Both chips shown, more results than single tag

### Combined Filters
- **URL**: `/products?series=Citrus&tag=fresh,citrus`
- **Expected**: Citrus series products with fresh OR citrus tags
- **Verify**: All filters applied, shareable URL works

### Full-Text Search with Tags
- **URL**: `/products?q=lemon&tag=citrus,fresh`
- **Expected**: Products matching "lemon" AND having citrus or fresh tag
- **Verify**: Search box filled, tag chips shown

### Tag Toggle Interaction
1. Click a tag button → should add chip and filter
2. Click same button again → should remove chip and clear filter
3. Click "✕" on chip → should remove that tag
4. Click "Clear tags" → should remove all tag chips
5. Click "Clear All Filters" → should reset everything

## Documents Page Tests

### Single Type Filter
- **URL**: `/documents?type=TDS`
- **Expected**: Show only TDS documents
- **Verify**: Type chip shows "TDS ×", correct document count

### Multi-Type Filter
- **URL**: `/documents?type=TDS,COA`
- **Expected**: Show TDS OR COA documents
- **Verify**: Both type chips shown

### Product Filter
- **URL**: `/documents?product=lavender`
- **Expected**: Show only lavender-related documents
- **Verify**: Product chip shows "Lavender" or "薰衣草"

### Multi-Product Filter
- **URL**: `/documents?product=lavender,bergamot`
- **Expected**: Show documents for lavender OR bergamot
- **Verify**: Both product chips shown

### Lot Number Filter
- **URL**: `/documents?lot=A1`
- **Expected**: Show only documents for lot A1
- **Verify**: Lot chip shows "A1"

### Multi-Lot Filter
- **URL**: `/documents?lot=A1,B1`
- **Expected**: Show documents for lot A1 OR B1
- **Verify**: Both lot chips shown

### Combined Document Filters
- **URL**: `/documents?type=TDS,COA&product=lavender&lot=A1`
- **Expected**: TDS or COA documents for lavender from lot A1
- **Verify**: All filter chips shown, results correctly filtered

### Full-Text Search
- **URL**: `/documents?q=oil`
- **Expected**: Documents with "oil" in any field (title, type, product, lot)
- **Verify**: Search box shows "oil", results match

### Complex Filtering
- **URL**: `/documents?type=TDS&product=lavender,rose&lot=A1,B2&q=essential`
- **Expected**: TDS documents for (lavender OR rose) from (A1 OR B2) containing "essential"
- **Verify**: All filters active, correct intersection of conditions

## UI Interaction Tests

### Chip Removal
1. Select multiple filters in any category
2. Click "×" on individual chips → should remove only that filter
3. Verify URL updates correctly
4. Verify results update instantly

### Clear Buttons
1. Select filters in one category
2. Click category "Clear" button → should clear only that category
3. Select filters in multiple categories
4. Click "Clear All Filters" → should reset everything to empty state

### Responsive Design
1. **Desktop** (>1024px): Grid shows all filter options
2. **Tablet** (768-1024px): Grid adjusts columns
3. **Mobile** (<768px): Single column layout, scrollable
4. Verify filter chips wrap properly on all screen sizes

### Shareable URLs
1. Apply multiple filters
2. Copy URL from browser
3. Open in new tab/browser → filters should persist
4. Share with colleague → they see same filtered results

## Edge Cases

### Empty States
- **URL**: `/products?tag=nonexistent`
- **Expected**: "No results" message, filter still shown
- **URL**: `/documents?type=INVALID`
- **Expected**: No documents, filter shown with no matches

### Special Characters
- Test products/tags with spaces, dashes, special chars
- Verify URL encoding works correctly

### Performance
- Select many filters (e.g., 10+ products)
- Verify page remains responsive
- Check filter chips don't overflow viewport

### Navigation
1. Apply filters on products page
2. Click product card → detail page loads
3. Click back → filters should persist (browser back)
4. Navigate to documents → filters reset (different page)

## Regression Tests

### Existing Functionality
- [ ] Product detail pages still work
- [ ] Document download links work
- [ ] Navigation menu functions
- [ ] Footer links work
- [ ] About, Certifications, Market Position pages load
- [ ] Homepage hero and CTAs work
- [ ] Search across all fields still works

## Data Integrity Tests

### Products Data
- [ ] All 35 essential oils load correctly
- [ ] Tags are properly assigned to products
- [ ] Series, origin, extraction fields populated
- [ ] Multilingual names (EN/ZH/JA) display

### Documents Data
- [ ] Document types correctly assigned (TDS/COA/SDS/GCMS)
- [ ] Product slugs match product data
- [ ] Lot numbers are valid references
- [ ] Document URLs are accessible
- [ ] Language tags correct (en/zh/ja)

## Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Quick Test Script

```bash
# Test URLs (paste in browser or use curl for status check)

# Products
/products?tag=relax
/products?tag=relax,fresh
/products?series=Citrus&tag=fresh
/products?q=lemon&tag=citrus

# Documents
/documents?type=TDS
/documents?type=TDS,COA
/documents?product=lavender
/documents?product=lavender,bergamot
/documents?lot=A1
/documents?type=TDS&product=lavender&lot=A1&q=oil
```

## Expected Results Summary

| Feature | Status | Notes |
|---------|--------|-------|
| Product multi-tag OR filtering | ✅ | Comma-separated tags |
| Product tag chips UI | ✅ | Click to remove |
| Document type multi-select | ✅ | TDS,COA,SDS,GCMS |
| Document product multi-select | ✅ | Full product list |
| Document lot multi-select | ✅ | All lot numbers |
| Full-text search (products) | ✅ | Multi-field search |
| Full-text search (documents) | ✅ | All fields indexed |
| URL-based state | ✅ | Shareable links |
| Responsive design | ✅ | Mobile-first |
| Clear filters | ✅ | Individual & all |
| Backwards compatibility | ✅ | Existing features work |

