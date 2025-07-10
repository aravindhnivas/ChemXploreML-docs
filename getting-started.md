# Getting Started

Welcome to the ChemXploreML documentation! ChemXploreML is a modular desktop application designed to simplify the process of predicting molecular properties using advanced machine learning techniques. This guide will help you quickly set up and start using ChemXploreML.

## Download and Installation

ChemXploreML is available as a downloadable application for macOS (Intel and Apple Silicon), Windows (64-bit) and Linux (64-bit, .deb, .rpm and .AppImage):

- [Click here to download latest release of ChemXploreML](https://github.com/aravindhnivas/ChemXploreML/releases)

### Initial Setup

1. Download the latest release from the [GitHub releases page](https://github.com/aravindhnivas/ChemXploreML/releases).
2. Extract the downloaded archive to your preferred location.
3. Run the ChemXploreML executable:
   - On macOS, open the `.dmg` file and drag ChemXploreML into your `Applications` folder.
   - On Windows, run the installer (`.exe`) and follow the installation instructions.
   - On Linux, first make the `.AppImage` file executable and then run it.

<!-- macOS Gatekeeper Warning (Important)macOS may prevent launching unsigned apps.  To bypass this:1.  Open Terminal.2.  Run:xattr -c /Applications/ChemXploreML.app3.  Right-click the app and select “Open”.A notarized version will be released in a future update. -->

### macOS Installation

:::warning macOS Gatekeeper Warning
macOS may prevent launching unsigned apps. To bypass this, run the following command in Terminal.app:

Install the app by dragging the ChemXploreML.app file to the Applications folder.

Then, run the following command in Terminal.app:

```bash
xattr -c /Applications/ChemXploreML.app
```

NOTE: This is a temporary workaround and a notarized version will be released in a future update.
:::

### Linux Installation

1. Download the latest release from the [GitHub releases page](https://github.com/aravindhnivas/ChemXploreML/releases).
2. Extract the downloaded archive to your preferred location.
3. Run the ChemXploreML executable:
   - On Linux, first make the `.AppImage` file executable and then run it.

```bash
# On Linux
chmod +x ChemXploreML-*.AppImage
./ChemXploreML-*.AppImage
```

## Quick Start Guide

ChemXploreML provides an intuitive user interface for data preparation, molecular embedding, and machine learning model training. Follow these steps to get started:

### 1. Load Your Data

- Launch ChemXploreML.
- Go to **LOAD FILE** tab and browse directory to load your `.csv` file.
- Supported file formats include CSV (preferred), JSON, and HDF5.

### 2. Vectorize Molecules

- Go to **VECTORIZE MOLECULES** tab.
- Select the molecular embedding model you want to use.
- Click on **Compute** button to start the vectorization process.
- The vectorized molecules will be saved in the **/embedded_vectors/<embedder_name>.npy** file.

### 3. Train Your Machine Learning Model

- Go to **ML Training** tab.
- Select **ML Model** from the sidebar.
- (Optional) In Control Panel, configure, `CV, Data split, scaling, cleaning, etc.`
- Select the machine learning model you want to use.
- Click on **Begin training** button to start the training process.
- The trained model will be saved as `<model_name>_<embedder_name>_embeddings_pretrained_model_<mode>.pkl` in the `/pretrained_models/<model_name>/<embedder_name>_embeddings/<mode>/` directory.
- The model performance plots will be saved in the `/pretrained_models/<model_name>/<embedder_name>_embeddings/<mode>/figures/` directory.

### 4. Predict Molecular Properties

- In **ML Prediction** tab, select **ML Prediction** from the sidebar.
- Choose `model -> embedder -> pre-trained model` from the dropdown menu.
- Enter `smiles` string in the **SMILES** text box.
- Click on **Compute** button to start the prediction process.
- The predicted property value will be displayed in the **Predicted value** text box.

## What's Next?

<!-- - Explore the [User Guides](./user-guides) for detailed instructions on using ChemXploreML.
- Check out the [FAQs](./faqs) for answers to common questions. -->

Enjoy exploring your molecular datasets with ChemXploreML!
