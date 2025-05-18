---
title: Molecular Analysis
description: Tools for exploring and analyzing molecular structures
---

# Molecular Analysis

## Overview

The Molecular Analysis module provides tools for exploring and analyzing molecular structures. This section covers the fundamental features for molecular visualization and analysis.

![Molecular Analysis](../screenshots/molecular-analysis/cxml-molecular-analysis-overview.png)

## Features

- Molecular structure visualization
- Chemical property analysis
- Structural similarity assessment
- Molecular fingerprinting
- Substructure search

## Basic Usage

```python
from chemxploreml import MoleculeAnalyzer

# Initialize analyzer
analyzer = MoleculeAnalyzer()

# Load a molecule
molecule = analyzer.load_molecule("CC(=O)OC1=CC=CC=C1C(=O)O")  # Aspirin SMILES

# Get basic properties
properties = analyzer.get_properties(molecule)
```

## Visualization

ChemXploreML provides interactive visualization tools for molecular structures:

- 2D structure rendering
- 3D conformer visualization
- Property heatmaps
- Similarity networks

## Analysis Tools

### Property Calculation

Calculate various molecular properties:

- Molecular weight
- LogP
- Hydrogen bond donors/acceptors
- Rotatable bonds
- Aromatic rings

### Similarity Analysis

Compare molecules using different metrics:

- Tanimoto similarity
- Euclidean distance
- Cosine similarity

## Next Steps

- Learn about [Data Management](/load-file/)
- Explore [Molecular Vectorization](/embedd-molecules/)
