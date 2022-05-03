const ExplorerService = require("../services/ExplorerService");
const Reader = require("../utils/Reader");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController{
    static getExplorerByMission(mission){
        const explorer = Reader.readJsonFile("explorers.json");
        const explorerByMission = ExplorerService.filterByMission(explorer, mission);
        return explorerByMission;
    }

    static getAmountExplorerByMission(mission){
        const explorer = Reader.readJsonFile("explorers.json");
        const explorersAmountInMission = ExplorerService.getAmountOfExplorersByMission(explorer,mission);
        return explorersAmountInMission;
    }

    static getExplorersUsernamesByMission(mission){
        const explorer = Reader.readJsonFile("explorers.json");
        const explorerUsernamesInMission = ExplorerService.getExplorersUsernamesByMission(explorer, mission);
        return explorerUsernamesInMission;
    }

    static getFizzbuzz(number){
        const checkNumber = FizzbuzzService.applyValidationInNumber(number);
        return checkNumber;

    }
    
}


module.exports = ExplorerController;