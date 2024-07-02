import isNil from 'lodash-es/isNil';

function sum(a:number | null, b:number | null): number {
    if (isNil(a) || isNil(b)) {
        return 0;
    }

    return (a as number) + (b as number);
}

export default sum;