import './edition.template.html';

import { Teams } from '../../../api/teams';

class EditionController {
    /*@ngInject*/
    constructor($scope, $reactive, $stateParams, MessageService) {
        $reactive(this).attach($scope);
        this.MessageService = MessageService;

        this.teamId = $stateParams.id;

        this.subscribe('teams');

        this.helpers({
            team() {
                return Teams.findOne({ _id: this.teamId });
            }
        });
    }

    saveField(field) {
        if(!this.team[field]) return;

        let modification = {};
        modification[field] = this.team[field];

        Teams.update({_id: this.teamId}, {$set: modification}, (err) => {
            if(err) return this.MessageService.showMessage(err.message);

            this.MessageService.showMessage('Saved');
        })
    }
}

const EditionComponent = {
    templateUrl: 'imports/admin/team/edition/edition.template.html',
    controller: EditionController,
    controllerAs: 'ctrl'
}

export default EditionComponent;