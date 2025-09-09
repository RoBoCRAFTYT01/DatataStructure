import { performance } from "perf_hooks";
import { FindValue } from "../../Courses/BigONotation/TimeComplexity.js";

jest.setTimeout(10000);

function measureTime(label: string, fn: () => void) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${label} took ${(end - start).toFixed(4)} ms`);
}

describe("Big O Notation Benchmarks", () => {
    test("O(1) constant operations", () => {
        measureTime("O(1)", () => {
            const a = 1;
            const b = 2;
            const c = a + 5 * b;
            expect(c).toBe(11);
        });
    });

    // test("O(log n) binary search", () => {
    //     const array = Array.from({ length: 1_000_000 }, (_, i) => i);
    //     measureTime("O(log n)", () => {
    //         const result = FindValue(array, 500_000);
    //         expect(result).toBe(500_000);
    //     });
    // });
});
