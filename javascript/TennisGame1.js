const SCORES = {
    LOVE_ALL: "Love-All",
    FIFTEEN_ALL: "Fifteen-All",
    THIRTY_ALL: "Thirty-All",
    LOVE: "Love",
    FIFTEEN: "Fifteen",
    THIRTY: "Thirty",
    FORTY: "Forty",
    DEUCE: "Deuce",
}

const RESULTS = {
    ADVANTAGE_PLAYER_1: "Advantage player1",
    ADVANTAGE_PLAYER_2: "Advantage player2",
    WIN_PLAYER_1: "Win for player1",
    WIN_PLAYER_2: "Win for player2",
}

class TennisGame1 {
    constructor (player1Name, player2Name) {
        this.m_score1 = 0;
        this.m_score2 = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    wonPoint (playerName) {
        playerName === "player1" ? this.m_score1 += 1 : this.m_score2 += 1;
    }

    getScore() {
        let score = "", tempScore = 0;
        if (this.m_score1 === this.m_score2) {
            switch (this.m_score1) {
                case 0:
                    score = SCORES.LOVE_ALL;
                    break;
                case 1:
                    score = SCORES.FIFTEEN_ALL;
                    break;
                case 2:
                    score = SCORES.THIRTY_ALL;
                    break;
                default:
                    score = SCORES.DEUCE;
                    break;
            }
        } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
            let minusResult = this.m_score1 - this.m_score2;
            if (minusResult === 1) score = RESULTS.ADVANTAGE_PLAYER_1;
            else if (minusResult === -1) score = RESULTS.ADVANTAGE_PLAYER_2;
            else if (minusResult >= 2) score = RESULTS.WIN_PLAYER_1;
            else score = RESULTS.WIN_PLAYER_2;
        } else {
            for (let i = 1; i < 3; i++) {
                if (i === 1) {
                    tempScore = this.m_score1;
                } else {
                    score += "-";
                    tempScore = this.m_score2;
                }
                switch (tempScore) {
                    case 0:
                        score += SCORES.LOVE;
                        break;
                    case 1:
                        score += SCORES.FIFTEEN;
                        break;
                    case 2:
                        score += SCORES.THIRTY;
                        break;
                    case 3:
                        score += SCORES.FORTY;
                        break;
                }
            }
        }
        return score;
    };

};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}

// Smells
// 1. Use of functional prototypes instead of classes. Using classes is a lot cleaner and can be scaled easily compared to functions
// 2. Using var keyword, which can have side effects
// 3. Using strings inside function, can cause unexpected behaviour. Converted to objects where any changes can be made at a single place instead of all references.
