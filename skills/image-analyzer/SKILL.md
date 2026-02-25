---
name: image-analyzer
description: Analyze images using OpenAI Vision API. Detect objects, extract text (OCR), describe scenes, and provide insights.
emoji: "🖼️"
requires: { "env": ["OPENAI_API_KEY"] }
---

# Image Analyzer

Use this skill when you need to:
- Identify objects, people, scenes in images
- Extract text from images (OCR)
- Describe what's in an image
- Get insights about composition, colors, emotions
- Analyze product photos, screenshots, documents

## Usage

Simply provide an image path/URL and describe what you want to analyze:

```
"Analyze this image: /path/to/image.jpg - What objects are in this photo?"
"Read the text from this screenshot: /path/to/screenshot.png"
"Describe the scene and mood in: https://example.com/photo.jpg"
```

## Supported Formats
- Local files: `/path/to/image.jpg`
- URLs: `https://example.com/image.png`
- Multiple images: array of up to 20 paths/URLs

## Example Prompts
- **Object detection**: "List all objects visible in this image"
- **OCR**: "Extract all text from this image"
- **Scene description**: "Describe what's happening in a detailed way"
- **Product analysis**: "Analyze this product photo and list features visible"
- **Document**: "Read and summarize this document image"
