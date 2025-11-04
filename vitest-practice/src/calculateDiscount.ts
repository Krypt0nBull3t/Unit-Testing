export function calculateDiscount(price: number, discount: number): number {
    if (price < 0) {
        throw new Error('Price cannot be negative');
    }

    if (discount < 0 || discount > 100) {
        throw new Error('Discount must be between 0 and 100');
    }

    return price - (price * discount / 100);
}