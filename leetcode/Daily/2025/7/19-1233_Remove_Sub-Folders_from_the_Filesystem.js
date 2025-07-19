// startWith? 얘 써서 하위인지 판단하고 배열에 넣음
// 13분
var removeSubfolders = function (folder) {
    folder.sort()

    const result = []
    let hero = "hero"

    for (const str of folder) {
        if (!str.startsWith(hero + "/")) {
            hero = str
            result.push(hero)
        }
    }

    return result
};