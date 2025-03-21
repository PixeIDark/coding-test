// 보급 무제한, 만들 수 있는 레시피 목록 반환. 레시피가 재료가 될수 있음.

const recipes = ["burger", "bread", "sandwich"],
    ingredients = [["sandwich", "meat", "bread"], ["yeast", "flour"], ["bread", "meat"]],
    supplies = ["yeast", "flour", "meat"]
// Output: ["bread","sandwich","burger"]
// Explanation:
//     We can create "bread" since we have the ingredients "yeast" and "flour".
//     We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".
//     We can create "burger" since we have the ingredient "meat" and can create the ingredients "bread" and "sandwich".

// 그래프야. obj에 recipes와 supplies를 넣어보자.
var findAllRecipes = function (recipes, ingredients, supplies) {
    const canMakes = supplies.reduce((obj, recipe) => {
        obj[recipe] = true
        return obj
    }, {})
    const recipeList = recipes.reduce((obj, recipe, idx) => {
        obj[recipe] = idx
        return obj
    }, {})

    // ingredients 순회. 조건에 없으면 recipeList를 뒤져서 찾아보고 없으면 또 recipeList를 뒤짐 계속 반복 끝까지 못찾으면 못만드는거임
    // 이와중에 어느 구간이든 조건 충족하면 canMakes에 추가해주고
    const memo = {}

    const dfs = (curr, vis) => {
        if (memo[curr] !== undefined) return memo[curr]

        if (canMakes[curr]) return true

        if (recipeList[curr] === undefined || vis.has(curr)) return false
        vis.add(curr)

        for (const next of ingredients[recipeList[curr]]) {
            if (!dfs(next, vis)) {
                memo[curr] = false
                return false
            }
        }

        memo[curr] = true
        canMakes[curr] = true
        return true
    }

    let result = []

    for (const recipe of recipes) {
        if (canMakes[recipe]) {
            result.push(recipe)
            continue
        }
        // dfs로 가자 ingredient 요소 하나하나 다 뒤진다.

        if (dfs(recipe, new Set())) {
            canMakes[recipe] = true
            result.push(recipe)
        }
    }

    return result
};

console.log(findAllRecipes(recipes, ingredients, supplies));