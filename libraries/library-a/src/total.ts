import sum from 'library-b';
import isEmpty from 'lodash-es/isEmpty';

function total(title: string | null, a: number | null, b: number | null) {
    if (isEmpty(title)) {
        return 'silence';
    }

    return `${title as string}: ${sum(a, b)}`;
}

export default total;