# Getting Started

Welcome to the ChemXploreML documentation! ChemXploreML is a modular desktop application designed to simplify the process of predicting molecular properties using advanced machine learning techniques. This guide will help you quickly set up and start using ChemXploreML.

## Download and Installation

ChemXploreML is available as a downloadable application for macOS and Windows OS:

- [Download ChemXploreML](https://github.com/aravindhnivas/ChemXploreML/releases)

### Initial Setup

1. Download the latest release from the [GitHub releases page](https://github.com/aravindhnivas/ChemXploreML/releases).
2. Extract the downloaded archive to your preferred location.
3. Run the ChemXploreML executable:
   - On macOS, open the `.dmg` file and drag ChemXploreML into your `Applications` folder.
   - On Windows, run the installer (`.exe`) and follow the installation instructions.

ChemXploreML has no additional prerequisites for installation, simplifying setup.

> **Note:** The first time you run ChemXploreML, the application will automatically perform initial setup and download required resources.

## Quick Start Guide

ChemXploreML provides an intuitive user interface for data preparation, molecular embedding, and machine learning model training. Follow these steps to get started:

### 1. Load Your Data

- Launch ChemXploreML.
- Go to **File > Open Dataset**.
- Supported file formats include CSV, JSON, and HDF5.

### 2. Choose Molecular Embeddings

ChemXploreML supports multiple molecular embeddings:

- **Mol2Vec**: Robust, 300-dimensional embeddings ideal for general-purpose tasks.
- **VICGAE**: Efficient 32-dimensional embeddings, great for faster processing and large datasets.

### 3. Train Your Machine Learning Model

- Select the desired machine learning algorithm (Gradient Boosting, XGBoost, CatBoost, or LightGBM).
- Configure model parameters or use automatic hyperparameter tuning powered by **Optuna**.

### 4. Analyze and Visualize Results

- Execute your model and instantly see key performance metrics (R², RMSE, MAE).
- Use built-in visualization tools to explore:
  - UMAP projections
  - Clustering and structural relationships
  - Performance plots (e.g., predicted vs. actual values)

## What's Next?

<!-- - [Detailed User Guides](./user-guides)
- [Advanced Configuration](./advanced-config)
- [FAQs](./faqs) -->

Enjoy exploring your molecular datasets with ChemXploreML!
