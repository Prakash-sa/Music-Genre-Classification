# 🎵 Music Genre Classification with Cross-Modal Attention

This project implements a **Cross-Modal Attention (CMA)** model to classify music tracks into genres using both **audio features** and **textual metadata**. It combines deep learning techniques in PyTorch with a React-based frontend for real-time predictions.
---

## 🧠 Model Overview

This project implements a **Cross-Modal Attention (CMA)** architecture that fuses information from two distinct input sources:

1. **Audio Features**: Extracted using LibROSA (e.g., MFCCs, chroma, spectral contrast) to capture timbre, rhythm, and pitch information.
2. **Text Metadata**: Processed via contextual embeddings (BERT) to capture semantic context about the track (e.g., artist, title, description).

### 🧩 Architecture Components

- **Audio Encoder**: A convolutional or recurrent layer (e.g., 1D-CNN or LSTM) that transforms raw audio features into latent embeddings.
- **Text Encoder**: A feed-forward or pre-trained transformer layer that converts textual input into vector embeddings.
- **Cross-Modal Attention Layer**: Learns the interaction between audio and text features by computing attention weights across modalities.
- **Fusion Layer**: Combines weighted representations from both modalities and feeds them into a classification head.
- **Output**: Softmax layer outputs probabilities across 10 genre classes.

### 📊 Loss Function
- Multi-class **Cross-Entropy Loss** is used to train the model on labeled genre data.

---

📌 This architecture helps the model make better predictions by understanding both the **sound** and **context** of a track — improving generalization compared to using audio or text alone.

---

## 🔍 Overview

- **Goal**: Classify music tracks into 10 genres by fusing audio signals and text descriptions using a cross-modal neural network.
- **Accuracy Achieved**: **84%**
- **Tech Stack**: PyTorch, LibROSA, pandas, React, Vercel

---

## 🧠 Model Highlights

- **Cross-Modal Attention**:
  - Aligns audio and text embeddings to extract shared patterns
  - Improves accuracy over uni-modal baselines
- **Architecture**:
  - Audio encoder: CNN or LSTM
  - Text encoder: TF-IDF or pre-trained BERT
  - Attention-based fusion layer
- **Loss Function**: Cross-Entropy

---

## 🧰 Tools & Libraries

- `PyTorch`, `numpy`, `pandas`
- `LibROSA` for audio feature extraction
- `matplotlib`, `seaborn` for visualization
- React + Vercel for frontend deployment

---

## 🗃️ Dataset

- Based on the [4mula_small dataset](https://github.com/4mulaDataset/4mula)
- Preprocessing includes:
  - Tokenization and vectorization of genre descriptions
  - Normalization and zero-padding

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Prakash-sa/Music-Genre-Classification
cd Music-Genre-Classification
```

---

## 🏆 Achievements

- Successfully integrated **audio and text modalities** using a custom **Cross-Modal Attention** architecture.
- Achieved **84% classification accuracy** across 10 music genres.
- Deployed the system as a **full-stack web application** using React and Vercel.
- Demonstrated the project in an **academic showcase**, receiving positive feedback for innovation and implementation.

---

## ✅ Future Improvements

- Optimize the model and frontend for **mobile responsiveness and on-device inference** using tools like ONNX or TensorFlow Lite.

---

