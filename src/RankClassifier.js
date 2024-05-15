export default class RankClassifier {
    static Ranks = {
        Radiante : 10000,
        Imortal : 9000,
        Ascendente : 8000,
        Platina : 7000,
        Ouro : 5000,
        Prata : 2000,
        Bronze : 1000,
        Ferro : -1
    };

    hero = {};
    get playerRank() {
        return this.getRank();
    }

    constructor(hero = {name : "Cloud Strife", levelXP : 0}) {
        this.hero = hero;
    }

    getRank() {
        let playerRank = "";
        Object.keys(RankClassifier.Ranks).every( rank => { 
            if(this.hero.levelXP > RankClassifier.Ranks[rank]) {
                playerRank = rank; 
                return false; 
            }
            return true;
        });
        return playerRank;
    }

    rankMessage() {
        const message = `O Herói de nome ${this.hero.name} está no nível de ${this.playerRank}`;
        //console.log(message);
        return message;
    }
}