import { GitContentSource, Type } from '@stackbit/cms-git';

// Define the structure of your data models (Models property from the screenshot)

const stackbitConfig = {
    // 1. Configure the Git CMS
    contentSources: [
        new GitContentSource({
            // Path to your main HTML file
            pages: [{
                modelName: 'Page',
                filePath: 'index.html',
            }],
            // Define models that hold content (the data structure)
            models: [
                {
                    name: 'Page', // This represents the entire index.html file
                    type: Type.Page,
                    fields: [
                        // We map all editable content fields directly here
                        { name: 'title', type: Type.String, label: 'Page Title' },
                        { name: 'hero_heading', type: Type.String, label: 'Hero Main Heading' },
                        { name: 'hero_tagline', type: Type.Text, label: 'Hero Tagline' },
                        
                        // Example: Products (This will define the repeating items)
                        // In a simple static setup, defining a 'collection' in models is hard.
                        // We focus on the *Inline Editing* for product details.
                    ],
                },
                // We define a separate model just for the repeated product items
                {
                    name: 'Product',
                    type: Type.Data, // Data type, as it's not a whole page
                    fields: [
                        { name: 'name', type: Type.String, label: 'Product Name' },
                        { name: 'price', type: Type.String, label: 'Current Price' },
                        { name: 'old_price', type: Type.String, label: 'Old Price' },
                        { name: 'condition', type: Type.String, label: 'Condition Grade' },
                        { name: 'image', type: Type.String, label: 'Image Placeholder URL' },
                    ],
                },
            ],
            // Define where the product data is stored, referencing the Product model
            data: [
                {
                    modelName: 'Product',
                    dataDir: 'data/products', // Placeholder path (not strictly used in single-file HTML)
                    // The actual editing will happen via the Inline Editor attributes below.
                }
            ]
        }),
    ],
    // The visual editor config is simple since we use GitContentSource
};

export default stackbitConfig;
