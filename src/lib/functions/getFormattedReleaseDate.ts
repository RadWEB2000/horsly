import moment from "moment";

export function getFormattedReleaseDate(release: string) {
    const publishedDate = moment(release);
    const daysDiff = moment().diff(publishedDate, 'days');

    if (daysDiff <= 7) {
        return publishedDate.locale('pl').fromNow();
    }

    return publishedDate.locale('pl').format('DD MMM YYYY');
}