export class List<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    add(item: T) {
        this.items.push(item);
    }

    get(index: number): T {
        return this.items[index];
    }

    size(): number {
        return this.items.length;
    }
}
