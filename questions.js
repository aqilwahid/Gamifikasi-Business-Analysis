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
    },
    {
        "id": 26,
        "category": "Time Series",
        "question": "Transformasi data mana yang paling efektif untuk menangkap tren kepuasan pelanggan secara keseluruhan dari waktu ke waktu?",
        "options": [
            "Menghitung skor rata-rata kepuasan untuk setiap pelanggan.",
            "Membuat rata-rata bergerak (moving average) dari skor kepuasan selama periode waktu tertentu.",
            "Menerapkan Principal Component Analysis (PCA) pada fitur kepuasan.",
            "Menormalisasi skor kepuasan ke distribusi z-score."
        ],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "category": "Tools & Libraries",
        "question": "Pustaka Python apa yang harus mereka gunakan untuk mengumpulkan intelijen harga menggunakan teknik web scraping?",
        "options": [
            "Beautiful Soup",
            "Seaborn",
            "Matplotlib",
            "NumPy"
        ],
        "correctAnswer": 0
    },
    {
        "id": 28,
        "category": "Algorithms",
        "question": "Manakah dari pernyataan berikut tentang k-means yang SALAH?",
        "options": [
            "k-means clustering adalah metode kuantisasi vektor.",
            "k-means clustering bertujuan untuk mempartisi n pengamatan menjadi k klaster.",
            "k-means tidak deterministik, dan memerlukan sejumlah iterasi.",
            "k-means sama dengan k-nearest neighbor."
        ],
        "correctAnswer": 3
    },
    {
        "id": 29,
        "category": "Deep Learning",
        "question": "Manakah dari berikut ini yang merupakan algoritma optimasi yang digunakan dalam deep learning, KECUALI?",
        "options": [
            "Adam",
            "K-means",
            "RMSprop",
            "SGD"
        ],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "category": "Data Engineering",
        "question": "Manakah dari metode berikut yang PALING tepat untuk memuat data pelanggan ke lingkungan analisis data Anda dari database cuaca?",
        "options": [
            "Menyalin dan menempel data secara manual dari file datar ke dalam kode Anda.",
            "Menggunakan Beautiful Soup untuk mengekstrak data cuaca secara langsung dari situs web berita.",
            "Menghubungkan ke database cuaca menggunakan pustaka mesin database seperti pandas.read_sql() atau SQLAlchemy.",
            "Memuat file CSV Anda menggunakan pandas.read_csv()."
        ],
        "correctAnswer": 2
    },
    {
        "id": 31,
        "category": "Deep Learning",
        "question": "Apa perbedaan utama antara Batch Gradient Descent dan Stochastic Gradient Descent (SGD)?",
        "options": [
            "Batch lebih cepat daripada SGD.",
            "Batch menghitung gradien menggunakan seluruh set pelatihan, sedangkan SGD menggunakan satu contoh.",
            "SGD tidak menggunakan gradient.",
            "Batch hanya digunakan untuk regresi."
        ],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "category": "Ethics",
        "question": "Untuk membangun kepercayaan dan transparansi yang lebih besar dengan klien, prinsip AI mana yang harus diutamakan?",
        "options": [
            "Akuntabilitas",
            "Explainability (Keterjelaskan)",
            "Keadilan",
            "Interpretabilitas"
        ],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "category": "Data Engineering",
        "question": "Dalam konsep 'Tidy Data', bagaimana struktur data yang benar?",
        "options": [
            "Setiap kolom adalah variabel, setiap baris adalah observasi.",
            "Setiap baris adalah variabel.",
            "Hanya memiliki satu kolom.",
            "Data tersebar di banyak tabel tanpa kunci."
        ],
        "correctAnswer": 0
    },
    {
        "id": 34,
        "category": "Data Science Scenarios",
        "question": "Anda ingin memahami alasan utama churn pelanggan (Ya/Tidak). Masalah ini termasuk jenis apa?",
        "options": [
            "Natural Language Processing (NLP)",
            "Klasifikasi",
            "Time Series Forecasting",
            "Deteksi Anomali"
        ],
        "correctAnswer": 1
    },
    {
        "id": 35,
        "category": "Model Evaluation",
        "question": "Metrik mana yang paling umum digunakan untuk mengevaluasi model regresi?",
        "options": [
            "Akurasi",
            "F1-Score",
            "R-Squared",
            "Root Mean Squared Error (RMSE)"
        ],
        "correctAnswer": 3
    },
    {
        "id": 36,
        "category": "Time Series",
        "question": "Apa praktik terbaik untuk menangani nilai yang hilang dalam kolom deret waktu (time series)?",
        "options": [
            "Abaikan nilai yang hilang.",
            "Terapkan metode imputasi yang sesuai berdasarkan sifat data.",
            "Hapus catatan.",
            "Gunakan nilai yang paling sering."
        ],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "category": "Model Evaluation",
        "question": "Dalam deteksi spam, untuk menghindari kehilangan email penting (meminimalkan False Positives pada Email Sah), metrik mana yang harus dioptimalkan?",
        "options": [
            "Akurasi",
            "Skor F1",
            "Presisi (Precision)",
            "Recall"
        ],
        "correctAnswer": 2
    },
    {
        "id": 38,
        "category": "Statistics",
        "question": "Strategi mana yang dapat digunakan untuk meningkatkan kekuatan model statistik (statistical power)?",
        "options": [
            "Kurangi ukuran sampel",
            "Kurangi ukuran populasi",
            "Tingkatkan ukuran sampel",
            "Tingkatkan ukuran populasi"
        ],
        "correctAnswer": 2
    },
    {
        "id": 39,
        "category": "Feature Engineering",
        "question": "Mengapa penggunaan PCA langsung pada hasil TF-IDF sering tidak disarankan?",
        "options": [
            "TF-IDF menghasilkan dataset kategorikal.",
            "TF-IDF menghasilkan matriks jarang (sparse), dan PCA standar menghancurkan sparsity tersebut (memboroskan memori).",
            "TF-IDF menghasilkan dataset dimensi besar.",
            "TF-IDF menghasilkan fitur numerik."
        ],
        "correctAnswer": 1
    },
    {
        "id": 40,
        "category": "Data Engineering",
        "question": "Dalam uji A/B, item mana yang paling andal digunakan untuk mengaitkan pesanan dengan grup user?",
        "options": [
            "ID Cookie",
            "ID Pelanggan (Customer ID)",
            "ID Perangkat",
            "Alamat IP"
        ],
        "correctAnswer": 1
    },
    {
        "id": 41,
        "category": "Data Privacy",
        "question": "Dataset jenis apa yang dapat digunakan untuk mengatasi kurangnya data pelatihan sekaligus melindungi privasi?",
        "options": [
            "Data tiruan (Mock data)",
            "Data acak",
            "Data anonim",
            "Data sintetis yang dihasilkan AI"
        ],
        "correctAnswer": 3
    },
    {
        "id": 42,
        "category": "Dimensionality Reduction",
        "question": "Manakah dari metode berikut yang BUKAN merupakan teknik reduksi dimensi untuk dataset tabular?",
        "options": [
            "CBOW (Continuous Bag of Words)",
            "PCA",
            "t-SNE",
            "UMAP"
        ],
        "correctAnswer": 0
    },
    {
        "id": 43,
        "category": "Deep Learning",
        "question": "Fungsi aktivasi Sigmoid paling sering digunakan sebagai output layer untuk masalah...",
        "options": [
            "Klasifikasi biner",
            "Klasifikasi multi-kelas",
            "Klasifikasi multi-label",
            "Regresi Ridge"
        ],
        "correctAnswer": 0
    },
    {
        "id": 44,
        "category": "Deep Learning",
        "question": "Fungsi loss mana yang paling umum digunakan untuk model klasifikasi probabilitas?",
        "options": [
            "Cross-entropy / Log Loss",
            "Hinge Loss",
            "Mean Absolute Error",
            "Mean Square Error"
        ],
        "correctAnswer": 0
    },
    {
        "id": 45,
        "category": "Machine Learning Basics",
        "question": "Mengapa penting untuk membagi dataset menjadi set pelatihan (train) dan pengujian (test)?",
        "options": [
            "Untuk memastikan model dilatih lebih cepat.",
            "Untuk mengevaluasi kinerja model pada data yang tidak terlihat (unseen data).",
            "Untuk menambah ukuran dataset.",
            "Untuk mengurangi kebutuhan validasi silang."
        ],
        "correctAnswer": 1
    }
];
