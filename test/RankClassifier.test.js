import RankClassifier from "../src/RankClassifier.js";
import {log} from "console";
let rk = new RankClassifier();


describe('Suite de Testes da Classe Rank Classifier (Teste através de Boundaries dos Ranks e Teste de Menssagem.)', () => {
    let previousRank;
    Object.keys(RankClassifier.Ranks).forEach(rank => {
        test(`Teste para o rank: ${rank}`, () => {
            
            let lowerBoundaryXp = RankClassifier.Ranks[rank] + 1;
            let upperBondaryXP = rank != "Radiante" ?
             RankClassifier.Ranks[previousRank] :
             lowerBoundaryXp* 10;
            
            rk.hero.levelXP = lowerBoundaryXp;
            log(rk.hero.levelXP);
            expect(rk.playerRank).toBe(rank);
            expect(rk.rankMessage()).toBe(`O Herói de nome ${rk.hero.name} está no nível de ${rank}`);
            rk.hero.levelXP = upperBondaryXP;
            expect(rk.rankMessage()).toBe(`O Herói de nome ${rk.hero.name} está no nível de ${rank}`);
            expect(rk.playerRank).toBe(rank);

            previousRank = rank;           
        })
    })
})