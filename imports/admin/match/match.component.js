import template from './match.template.html';

import { Matchs } from '../../api/matchs';
import { Teams } from '../../api/teams';

class MatchController {
    constructor($scope, $reactive) {
        'ngInject';
        
        $reactive(this).attach($scope);

        this.subscribe('matchs');
        this.subscribe('teams');

        this.helpers({
            matchs() {
                return Matchs.find();
            },
            teams() {
                return Teams.find();
            }
        });
    }
    
    hasBeenPlayed(match) {
        return match.date < new Date();
    }

    removeMatch(id) {
        Matchs.remove(id, (err) => {
            if(err) return this.MessageService.showMessage(err.message);
        });
    }
}

const matchComponent = {
    templateUrl: template,
    controller: MatchController,
    controllerAs: 'ctrl'
};

export default matchComponent;
