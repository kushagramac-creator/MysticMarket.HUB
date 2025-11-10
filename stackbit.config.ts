import { GitContentSource, Type, defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    // We target the root of the repository
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            
            // 1. Point the 'Page' model directly at the single index.html file.
            // This tells the Visual Editor that index.html is the source of the data.
            pages: [{
                modelName: 'Page',
                filePath: 'index.html',
            }],
            
            // 2. Define all editable data structures (Models).
            models: [
                {
                    name: 'Page', // Maps to data-sb-object-id="index" in the body tag
                    type: Type.Page, // Distinguishes it as the main page model
                    fields: [
                        { name: 'title', type: Type.String, label: 'Website Title (Tab)' },
                        { name: 'hero_heading', type: Type.String, label: 'Hero Main Heading' },
                        { name: 'hero_tagline', type: Type.Text, label: 'Hero Tagline' },
                    ],
                },
                // Model for repeating elements (each phone/part card)
                {
                    name: 'Product', // Maps to data-sb-object-id="Product-1", "Product-2", etc.
                    type: Type.Data, // Data type, not a page itself
                    fields: [
                        { name: 'name', type: Type.String, label: 'Product Name' },
                        { name: 'price', type: Type.String, label: 'Current Price ($)' },
                        { name: 'old_price', type: Type.String, label: 'Old Price ($)' },
                        { name: 'condition', type: Type.String, label: 'Condition Grade' },
                    ],
                },
            ],
        }),
    ],
    // The sitemap is not needed as the single index.html file acts as the homepage.
});
