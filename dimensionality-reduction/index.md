# Dimensionality Reduction

## Overview

The Dimensionality Reduction module provides various methods to reduce high-dimensional molecular embeddings into lower-dimensional spaces for visualization and analysis.

## Available Methods

- [PCA](/dimensionality-reduction/pca)
- [UMAP](/dimensionality-reduction/umap)
- [t-SNE](/dimensionality-reduction/t-sne)
- [KernelPCA](/dimensionality-reduction/kernelpca)
- [PHATE](/dimensionality-reduction/phate)
- [ISOMAP](/dimensionality-reduction/isomap)
- [Laplacian Eigenmaps](/dimensionality-reduction/laplacian-eigenmaps)
- [TriMap](/dimensionality-reduction/trimap)
- [Factor Analysis](/dimensionality-reduction/factor-analysis)

## Basic Usage

```python
from chemxploreml import DimensionalityReducer

# Initialize reducer
reducer = DimensionalityReducer(method="pca")

# Reduce dimensionality
reduced_data = reducer.fit_transform(embeddings)

# Visualize results
reducer.plot(reduced_data, labels=property_values)
```

## Method Selection Guide

### Linear Methods

- PCA: Best for linear relationships
- Factor Analysis: Good for latent variable discovery

### Nonlinear Methods

- UMAP: Fast and scalable
- t-SNE: Good for local structure
- PHATE: Excellent for trajectory data

### Graph-based Methods

- ISOMAP: Preserves geodesic distances
- Laplacian Eigenmaps: Good for manifold learning

## Visualization Features

- Interactive 2D/3D plots
- Property coloring
- Cluster highlighting
- Trajectory visualization
- Export options

## Performance Considerations

- Memory usage
- Computation time
- Scalability
- GPU acceleration

## Next Steps

- Learn about specific methods:
  - [PCA](/dimensionality-reduction/pca)
  - [UMAP](/dimensionality-reduction/umap)
  - [t-SNE](/dimensionality-reduction/t-sne)
- Explore [Machine Learning Training](/ml-training/model)
