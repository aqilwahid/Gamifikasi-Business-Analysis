const QUESTIONS = [
    {
        "id": 1,
        "category": "Basic Concepts",
        "question": "Manakah di bawah ini yang merupakan contoh dari Supervised Learning?",
        "options": [
            "Clustering pelanggan berdasarkan perilaku",
            "Prediksi harga rumah berdasarkan fitur",
            "Market Basket Analysis",
            "Dimensionality Reduction"
        ],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "category": "Model Evaluation",
        "question": "Kondisi dimana model memiliki performa sangat baik pada data training tetapi buruk pada data testing disebut...",
        "options": [
            "Underfitting",
            "Overfitting",
            "Cross-Validation",
            "Regularization"
        ],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "category": "Algorithms",
        "question": "Algoritma K-Means biasanya digunakan untuk permasalahan...",
        "options": [
            "Klasifikasi",
            "Regresi",
            "Clustering",
            "Reinforcement Learning"
        ],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "category": "Data Preprocessing",
        "question": "Teknik 'One-Hot Encoding' digunakan untuk mengatasi tipe data...",
        "options": [
            "Numerical",
            "Categorical",
            "Ordinal",
            "Time Series"
        ],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "category": "Deep Learning",
        "question": "Fungsi aktivasi yang sering digunakan pada output layer untuk masalah klasifikasi biner adalah...",
        "options": [
            "ReLU",
            "Sigmoid",
            "Softmax",
            "Tanh"
        ],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "category": "Model Evaluation",
        "question": "Metrik evaluasi yang menghitung perbandingan prediksi benar (positif & negatif) terhadap total data adalah...",
        "options": [
            "Precision",
            "Recall",
            "Accuracy",
            "F1-Score"
        ],
        "correctAnswer": 2
    },
    {
        "id": 7,
        "category": "Tools & Libraries",
        "question": "Manakah yang BUKAN merupakan library Python populer untuk Machine Learning?",
        "options": [
            "Scikit-Learn",
            "TensorFlow",
            "ReactJS",
            "PyTorch"
        ],
        "correctAnswer": 2
    },
    {
        "id": 8,
        "category": "Ensemble Methods",
        "question": "Bagging dan Boosting adalah teknik yang termasuk dalam kategori...",
        "options": [
            "Dimensionality Reduction",
            "Ensemble Learning",
            "Feature Selection",
            "Deep Learning"
        ],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "category": "Model Tuning",
        "question": "Hyperparameter adalah parameter yang...",
        "options": [
            "Dipelajari oleh model saat training",
            "Diatur secara manual sebelum proses training dimulai",
            "Dihasilkan dari proses testing",
            "Tidak berpengaruh pada performa model"
        ],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "category": "Model Evaluation",
        "question": "Teknik untuk membagi data menjadi k-bagian untuk evaluasi model disebut...",
        "options": [
            "Stratified Sampling",
            "Bootstrapping",
            "K-Fold Cross Validation",
            "Hold-out Method"
        ],
        "correctAnswer": 2
    },
    {
        "id": 11,
        "category": "Data Preprocessing",
        "question": "Apa tujuan utama dari proses Normalisasi (Normalization) data?",
        "options": [
            "Mengubah data kategori menjadi angka",
            "Menghilangkan outlier",
            "Mengubah skala fitur ke range tertentu (misal 0-1)",
            "Menambah fitur baru"
        ],
        "correctAnswer": 2
    },
    {
        "id": 12,
        "category": "Deep Learning",
        "question": "Layer pada Neural Network yang berfungsi untuk mengekstrak fitur pada gambar adalah...",
        "options": [
            "Fully Connected Layer",
            "Convolutional Layer",
            "Recurrent Layer",
            "Pooling Layer"
        ],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "category": "Model Evaluation",
        "question": "Confusion Matrix digunakan untuk mengevaluasi model...",
        "options": [
            "Regresi",
            "Clustering",
            "Klasifikasi",
            "Recommender System"
        ],
        "correctAnswer": 2
    },
    {
        "id": 14,
        "category": "NLP",
        "question": "Teknik NLP yang mengubah kata menjadi vektor angka disebut...",
        "options": [
            "Tokenization",
            "Stemming",
            "Lemmatization",
            "Word Embedding"
        ],
        "correctAnswer": 3
    },
    {
        "id": 15,
        "category": "Algorithms",
        "question": "Algoritma Decision Tree bekerja dengan cara...",
        "options": [
            "Mencari hyperplane terbaik",
            "Membuat aturan if-else berdasarkan fitur",
            "Menghitung probabilitas data",
            "Menemukan tetangga terdekat"
        ],
        "correctAnswer": 1
    },
    {
        "id": 16,
        "category": "Basic Concepts",
        "question": "Apa itu 'Label' dalam Supervised Learning?",
        "options": [
            "Variable input",
            "Variable output atau target yang ingin diprediksi",
            "Nama kolom pada dataset",
            "Metadata file"
        ],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "category": "Model Evaluation",
        "question": "Dalam kasus deteksi penipuan (Fraud Detection), metrik mana yang biasanya lebih penting?",
        "options": [
            "Accuracy",
            "Recall (Sensitivity)",
            "Precision",
            "Mean Squared Error"
        ],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "category": "Unsupervised Learning",
        "question": "Dimensionality Reduction bertujuan untuk...",
        "options": [
            "Menambah jumlah fitur",
            "Mengurangi jumlah fitur dengan tetap mempertahankan informasi penting",
            "Meningkatkan jumlah sampel data",
            "Mengubah tipe data menjadi string"
        ],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "category": "Algorithms",
        "question": "Algoritma SVM (Support Vector Machine) berusaha menemukan...",
        "options": [
            "Centroid terdekat",
            "Hyperplane dengan margin terbesar",
            "Pohon keputusan terbaik",
            "Nilai k terbaik"
        ],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "category": "Deep Learning",
        "question": "Masalah 'Vanishing Gradient' sering terjadi pada fungsi aktivasi...",
        "options": [
            "ReLU",
            "Leaky ReLU",
            "Sigmoid",
            "Linear"
        ],
        "correctAnswer": 2
    },
    {
        "id": 21,
        "category": "Model Tuning",
        "question": "Grid Search digunakan untuk...",
        "options": [
            "Mencari data yang hilang",
            "Mencari kombinasi hyperparameter terbaik",
            "Melakukan visualisasi data",
            "Membersihkan dataset"
        ],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "category": "Big Data",
        "question": "Framework populer untuk pemrosesan Big Data & Machine Learning terdistribusi adalah...",
        "options": [
            "Pandas",
            "Apache Spark",
            "NumPy",
            "Matplotlib"
        ],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "category": "Ethics",
        "question": "Bias algoritmik (Algorithmic Bias) dapat terjadi karena...",
        "options": [
            "Data training yang tidak representatif",
            "Komputer berpikir sendiri",
            "Hardware rusak",
            "Internet lambat"
        ],
        "correctAnswer": 0
    },
    {
        "id": 24,
        "category": "Reinforcement Learning",
        "question": "Komponen utama dalam Reinforcement Learning adalah...",
        "options": [
            "Agent, Environment, Action, Reward",
            "Input, Hidden Layer, Output",
            "Features, Target, Split",
            "Mean, Median, Mode"
        ],
        "correctAnswer": 0
    },
    {
        "id": 25,
        "category": "Time Series",
        "question": "Model ARIMA digunakan untuk analisis data...",
        "options": [
            "Gambar",
            "Suara",
            "Time Series (Deret Waktu)",
            "Teks"
        ],
        "correctAnswer": 2
    }
];
