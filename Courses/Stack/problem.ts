function getReversedBracket(ch : string) {
    // Logic Check the Revesed Bracket

    const map: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '[',
        '(': ')',
        '{': '}',
        '[': ']'
    };
    return map[ch];
}

function isLeftBracket(ch : string) : boolean {
    // logic check if is there is the left Bracket
    return ch === '(' || ch === '{' || ch === '[';return true;
}

function CheckValidBracket(bracket_string: string, S: string[] = []): boolean {
    for (const bracket of bracket_string) {
        const rev = getReversedBracket(bracket);

        if (isLeftBracket(bracket)) {
            S.push(bracket);
        } else {
            if (S.length === 0) return false; // stack empty = mismatch
            const top = S.pop();
            if (top !== rev) return false;    // mismatch
        }
    }

    return S.length === 0; // valid only if nothing left unmatched
}


console.log(CheckValidBracket("([]{})")); // true
console.log(CheckValidBracket("([)]"));   // false
console.log(CheckValidBracket("("));      // false