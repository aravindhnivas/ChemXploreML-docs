# Molecular Vectorization

## Overview

The Molecular Vectorization module provides tools for converting molecular structures into numerical representations (embeddings) that can be used for machine learning and similarity analysis.

## Available Encoders

- Molecular fingerprints
- Graph neural networks
- Transformer-based models
- 3D structure encoders

## Basic Usage

```python
from chemxploreml import MoleculeEncoder

# Initialize encoder
encoder = MoleculeEncoder()

# Encode a molecule
molecule = "CC(=O)OC1=CC=CC=C1C(=O)O"  # Aspirin SMILES
embedding = encoder.encode(molecule)

# Batch encoding
molecules = ["CC(=O)OC1=CC=CC=C1C(=O)O", "CC12CCC3C(C1CCC2O)CCC4=CC(=O)CCC34C"]
embeddings = encoder.encode_batch(molecules)
```

## Encoder Types

### Fingerprint-based

- ECFP (Extended Connectivity Fingerprints)
- MACCS keys
- RDKit fingerprints
- Atom pair fingerprints

### Deep Learning-based

- Graph Neural Networks
- Transformer models
- 3D structure encoders
- Hybrid models

## Applications

- Similarity search
- Property prediction
- Virtual screening
- Lead optimization

## Performance Considerations

- Encoding speed
- Memory usage
- GPU acceleration
- Batch processing

## Next Steps

- Learn about [Dimensionality Reduction](/dimensionality-reduction/)
- Explore [Machine Learning Training](/ml-training/model)
