const gameStates = {
    start: {
        text: "You stand before the legendary data vault, inspired by the mysterious Vault8 on Elmwood Trail. Three entrances beckon:\n\nA. The Neural Gateway\nB. The Statistical Nexus\nC. The Quantum Terminal",
        choices: [
            { text: "A. Enter the Neural Gateway", nextState: "neural1" },
            { text: "B. Access the Statistical Nexus", nextState: "stats1" },
            { text: "C. Approach the Quantum Terminal", nextState: "quantum1" }
        ]
    },
    // Neural Path (7 depths)
    neural1: {
        text: "Neural Gateway - Level 1\nComplete the sequence: 2, 4, 16, 256, ?",
        choices: [
            { text: "A. 65536", nextState: "neural2" },
            { text: "B. 1024", nextState: "neuralWarn1" },
            { text: "C. 65535", nextState: "neuralWarn1" }
        ]
    },
    neural2: {
        text: "Neural Gateway - Level 2\nIdentify the outlier in this neural activation pattern:\n[0.1, 0.3, 0.2, 0.9, 0.2]",
        choices: [
            { text: "A. 0.1", nextState: "neuralWarn2" },
            { text: "B. 0.9", nextState: "neural3" },
            { text: "C. 0.2", nextState: "neuralWarn2" }
        ]
    },
    neural3: {
        text: "Neural Gateway - Level 3\nWhat's the optimal activation function for this hidden layer pattern?",
        choices: [
            { text: "A. Sigmoid", nextState: "neuralWarn3" },
            { text: "B. Linear", nextState: "neuralWarn3" },
            { text: "C. ReLU", nextState: "neural4" }
        ]
    },
    neural4: {
        text: "Neural Gateway - Level 4\nCalculate the gradient descent step size:\nLoss: 0.45\nLearning Rate: 0.1\nDerivative: -2.3",
        choices: [
            { text: "A. 0.23", nextState: "neural5" },
            { text: "B. -0.23", nextState: "neuralWarn4" },
            { text: "C. 0.115", nextState: "neuralWarn4" }
        ]
    },
    neural5: {
        text: "Neural Gateway - Level 5\nIdentify the architecture:\n[Input] → [Dense(64)] → [Dropout(0.3)] → [Dense(32)] → [Output]",
        choices: [
            { text: "A. CNN", nextState: "neuralWarn5" },
            { text: "B. RNN", nextState: "neuralWarn5" },
            { text: "C. Feed-forward", nextState: "neural6" }
        ]
    },
    neural6: {
        text: "Neural Gateway - Level 6\nOptimize the network:\nAccuracy: 98%\nOverfit Score: High\nTraining Time: Low",
        choices: [
            { text: "A. Increase dropout", nextState: "neural7" },
            { text: "B. Add more layers", nextState: "neuralWarn6" },
            { text: "C. Reduce neurons", nextState: "neuralWarn6" }
        ]
    },
    neural7: {
        text: "Neural Gateway - Final Level\nComplete the sacred neural sequence:\n[Torch] → [Tensor] → [Graph] → ?",
        choices: [
            { text: "A. Matrix", nextState: "neuralFail" },
            { text: "B. Array", nextState: "neuralFail" },
            { text: "C. Gradient", nextState: "vault" }
        ]
    },

    // Statistical Path (7 depths)
    stats1: {
        text: "Statistical Nexus - Level 1\nIn a normal distribution, what lies two steps from the mean?",
        choices: [
            { text: "A. 95% confidence interval", nextState: "statsWarn1" },
            { text: "B. 2 standard deviations", nextState: "stats2" },
            { text: "C. Z-score of 2", nextState: "statsWarn1" }
        ]
    },
    // [Add 6 more statistical levels similarly]

    // Quantum Path (7 depths)
    quantum1: {
        text: "Quantum Terminal - Level 1\nCalculate the quantum bit entropy:\n|ψ⟩ = α|0⟩ + β|1⟩, where α = β = 1/√2",
        choices: [
            { text: "A. 0", nextState: "quantumWarn1" },
            { text: "B. 1", nextState: "quantum2" },
            { text: "C. 0.5", nextState: "quantumWarn1" }
        ]
    },
    // [Add 6 more quantum levels similarly]

    // Warning and failure states
    neuralWarn1: {
        text: "WARNING: Neural pattern mismatch detected. Recalibrating...",
        choices: [
            { text: "A. Return to start", nextState: "start" },
            { text: "B. Try again", nextState: "neural1" }
        ],
        damage: 20
    },
    // [Add more warning states]

    vault: {
        text: "SUCCESS! The vault opens...\n\nYou've proven yourself worthy of the data within.\nFinal Access Code: DS_QUANTUM_ML_2024\n\nCongratulations, true Data Scientist!",
        choices: [
            { text: "Play Again", nextState: "start" }
        ],
        isSuccess: true
    }
};