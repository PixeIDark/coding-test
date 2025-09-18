// 최소힙 구현시 바로 해결
// 32분
var FoodRatings = function (foods, cuisines, ratings) {
    this.map = new Map()
    this.obj = {}

    for (let i = 0; i < foods.length; i++) {
        const food = foods[i]
        const cuisine = cuisines[i]
        const rating = ratings[i]

        if (!this.map.has(cuisine)) this.map.set(cuisine, [])
        this.map.get(cuisine).push([food, rating])

        this.obj[food] = cuisine
    }
};

FoodRatings.prototype.changeRating = function (food, newRating) {
    const cuisine = this.obj[food]

    for (let i = 0; i < this.map.get(cuisine).length; i++) {
        const [oldFood, rating] = this.map.get(cuisine)[i]

        if (oldFood === food) {
            this.map.get(cuisine)[i] = [food, newRating]
            break
        }
    }
};

FoodRatings.prototype.highestRated = function (cuisine) {
    const arr = this.map.get(cuisine)
    arr.sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        return a[0].localeCompare(b[0]);
    })
    return arr[0][0]
};