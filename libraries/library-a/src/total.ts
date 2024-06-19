import sum from 'library-b';
import isEmpty from 'lodash/isEmpty';

function total(title: string | null, a: number | null, b: number | null) {
    if (isEmpty(title)) {
        return 'silence';
    }

    return `${title}: ${sum(a, b)}`
}

export default total;