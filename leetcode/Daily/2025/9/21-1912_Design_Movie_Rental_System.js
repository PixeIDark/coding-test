// entries[i] = [shopi, moviei, pricei]
// 각 매장은 최대 한권의 영화만 판매
// 68분
var MovieRentingSystem = function (n, entries) {
    this.movieToShops = new Map(); // movie => [{shop, price}] 가격순 정렬
    this.shopMoviePrice = new Map(); // "shop,movie" => price
    this.rented = new Set(); // "shop,movie"
    this.rentedList = []; // [{shop, movie, price}] 가격순 정렬된 대여목록

    for (let [shop, movie, price] of entries) {
        if (!this.movieToShops.has(movie)) this.movieToShops.set(movie, []);

        this.movieToShops.get(movie).push({shop, price});
        this.shopMoviePrice.set(`${shop},${movie}`, price);
    }

    for (let shops of this.movieToShops.values()) {
        shops.sort((a, b) => a.price - b.price || a.shop - b.shop);
    }
};

MovieRentingSystem.prototype.search = function (movie) {
    if (!this.movieToShops.has(movie)) return [];

    let result = [];

    for (let {shop, _} of this.movieToShops.get(movie)) {
        if (!this.rented.has(`${shop},${movie}`)) {
            result.push(shop);
            if (result.length === 5) break;
        }
    }
    return result;
};

MovieRentingSystem.prototype.rent = function (shop, movie) {
    this.rented.add(`${shop},${movie}`);
    let price = this.shopMoviePrice.get(`${shop},${movie}`);
    let item = {shop, movie, price};
    let pos = 0;

    while (pos < this.rentedList.length) {
        let curr = this.rentedList[pos];

        if (price < curr.price || (price === curr.price && shop < curr.shop) ||
            (price === curr.price && shop === curr.shop && movie < curr.movie)) break;
        pos++;
    }

    this.rentedList.splice(pos, 0, item);
};

MovieRentingSystem.prototype.drop = function (shop, movie) {
    this.rented.delete(`${shop},${movie}`);

    let index = this.rentedList.findIndex(item =>
        item.shop === shop && item.movie === movie);

    this.rentedList.splice(index, 1);
};

MovieRentingSystem.prototype.report = function () {
    return this.rentedList.slice(0, 5).map(item => [item.shop, item.movie]);
};