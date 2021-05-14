export class AssertionError extends Error {}

export function ASSERT(predicate: boolean) {
    if (!predicate) {
        throw new AssertionError("Expected true.");
    }
}

export function ASSERT_EQUAL(a: unknown, b: unknown) {
    if (a !== b) {
        throw new AssertionError(`Expected ${a} to equal ${b}`);
    }
}
