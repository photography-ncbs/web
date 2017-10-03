import * as moment from 'moment';

export class Theme {
    name: string;
    details: string;
    submissionDate: string;
    votingDate: string;
    judgingDate: string;

    constructor(obj: any) {
        this.name = obj['name'];
        this.details = obj['details'];
        this.submissionDate = moment(obj['submissionDate']).format('DD MMM YYYY');
        this.votingDate = moment(obj['votingDate']).format('DD MMM YYYY');
        this.judgingDate = moment(obj['judgingDate']).format('DD MMM YYYY');
    }
}
