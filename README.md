# Classify.ai

Classify.ai is an AI-powered object detection app that instantly classifies objects in uploaded images, gaining detailed insights into your visual content.

![classify demo image](https://github.com/srb1998/Classify.ai/assets/80816037/9695dde0-9685-4623-b72f-2b24f1f7a0f4)

## Overview

Classify.ai simplifies object detection by allowing users to upload images and receive classification results in real-time. The integration of transformer.js and the powerful Xenova/detr-resnet-50 model ensures precise identification and classification of objects.

## Features

- **Object Detection**: Upload images and receive detailed information about the objects present.

- **Efficient Classification**: Utilizes the Xenova/detr-resnet-50 AI model for accurate and efficient object classification.

## Usage

1. Upload an image containing objects you want to classify.
2. Receive detailed information about the identified objects.

## Getting Started

To run the project locally, follow these steps:

```bash
# Clone the repository
```sh
git clone https://github.com/your-username/Classify.ai.git
```

# Install dependencies
```sh
cd Classify.ai
npm install
```

# Secret Key and API key
Obtain your Secret Key and APP_ID from Uploadthing.com  and set them as your environment variables.
```sh
UPLOADTHING_SECRET = xxxxxx
UPLOADTHING_APP_ID = xxxxxx
```

# Run the application locally
npm run dev


