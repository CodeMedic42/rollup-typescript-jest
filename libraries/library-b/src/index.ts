import isNil from 'lodash/isNil';

function sum(a:number | null, b:number | null): number {
    if (isNil(a) || isNil(b)) {
        return 0;
    }

    return a + b;
}

export default sum;