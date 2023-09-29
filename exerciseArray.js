const arr = [50000, 50000, 3400, -150, -790, -790, -1000, 1000, 8500, 8500, 60000];

const ReverseArray = function (arr) {
    let tempArr = [];
    for (let index = arr.length - 1; index >= 0; index--) {
        tempArr.push(arr[index]);
    }
    return tempArr;
};
// console.log(ReverseArray(arr));


const RemoveDupplicate = function (arr) {
    let tempArr = [];
    arr.forEach((item) => {
        if (!tempArr.includes(item)) tempArr.push(item);
    });
    return tempArr;
}
// console.log(RemoveDupplicate(arr));

const FindSecondLargestNumber = function (arr) {
    let max = arr[0];
    let tempArr = [];
    arr.forEach((item, index) => {
        if (item <= max) tempArr.push(item);
        else tempArr.unshift(item);
    });
    return RemoveDupplicate(tempArr)[1];
}
// console.log(FindSecondLargestNumber(arr));

const avg = function (arr) {
    let sum = arr.reduce((acc, item) => acc + item, 0);
    return sum / arr.length;
};


const ar1 = [5000, -2000, 80000, 80000, 80000, 5000];
const ar2 = [-2, 1, -3, 5, 4, 4, 5, -5, 4];
const FindMaxAvgConsecutiveSeries = function (array) {
    let resultArr = [array.at(0)];
    let maxAvg = avg(resultArr);

    let len = array.length;
    array.forEach((item, index) => {
        for (indexInside = index + 1; indexInside <= len; indexInside++) {
            let tempArr = array.slice(index, indexInside);

            let tempAvg = avg(tempArr);

            if (tempAvg >= maxAvg && tempArr.length > 1) {
                resultArr = [...tempArr];
                maxAvg = tempAvg;
            }
        }
    });
    return `MAX = ${maxAvg}, ARR = ${resultArr}`;
};
// console.log(FindMaxAvgConsecutiveSeries(ar2));

const users = [
    { id: 'john', name: "John Doe", age: 25 },
    { id: 'jane', name: "Jane Smith", age: 28 },
    { id: 'susan', name: "Susan Johnson", age: 22 },
    { id: 'michael', name: "Michael Brown", age: 30 },
    { id: 'emily', name: "Emily Davis", age: 35 },
    { id: 'david', name: "David Wilson", age: 29 },
    { id: 'sarah', name: "Sarah Martinez", age: 27 },
    { id: 'robert', name: "Robert Taylor", age: 26 },
    { id: 'linda', name: "Linda Anderson", age: 32 },
    { id: 'william', name: "William Thomas", age: 21 }
];
////////////////////////////////////////////////////////////////////////
//1
const calcSumByMap = function (users) {
    let sum = 0;
    users.map((user) => {
        sum += user.age;
    });
    return sum;
};
// console.log(calcSumByMap(users));

const calcSumByReduce = function (users) {
    return users.reduce((sum, { age }) => sum + age, 0);
};
// console.log(calcSumByReduce(users));

const calcSumByFilter = function (users) {
    const ageKey = Object.keys(users[0]).filter(ageUser => ageUser == 'age');
    const sumUser = user => ageKey.reduce((acc, ageUser) => acc + user[ageUser], 0);
    const totalSumUsers = users.reduce((acc, user) => acc + sumUser(user), 0);
    return totalSumUsers;
};
// console.log(calcSumByFilter(users));

const calcAvgByMap = function (users) {
    let sum = 0;
    users.map((user) => {
        sum += user.age;
    });
    return sum / users.length;
};
// console.log(calcAvgByMap(users));

const calcAvgByReduce = function (users) {
    return users.reduce((sum, { age }) => sum + age, 0) / users.length;
};
//console.log(calcAvgByReduce(users));

const calcAvgByFilter = function (users) {
    const ageKey = Object.keys(users[0]).filter(ageUser => ageUser == 'age');
    const sumUser = user => ageKey.reduce((acc, ageUser) => acc + user[ageUser], 0);
    const totalSumUsers = users.reduce((acc, user) => acc + sumUser(user), 0);
    return totalSumUsers / users.length;
};
// console.log(calcAvgByFilter(users));

const ascArrangement = function (key, users) {
    let tempArr = [...users];

}

////////////////////////////////////////////////////////////////////////
//2
const SortWithTwoParams = function (key, typeOfArrangement, users) {

    let tempArr = [...users];
    if (typeOfArrangement === 'asc') {
        switch (key) {
            case 'id': {
                return tempArr.sort((u1, u2) => (u1.id > u2.id) ? 1 : (u1.id < u2.id) ? -1 : 0);
            }
            case 'name': {
                return tempArr.sort((u1, u2) => (u1.name > u2.name) ? 1 : (u1.name < u2.name) ? -1 : 0);
            }
            case 'age': {
                return tempArr.sort((u1, u2) => (u1.age > u2.age) ? 1 : (u1.age < u2.age) ? -1 : 0);
            }
            default: {
                return 'You have selected the wrong key of Object';
            }
        }
    }
    if (typeOfArrangement === 'desc') {
        switch (key) {
            case 'id': {
                return tempArr.sort((u1, u2) => (u1.id > u2.id) ? -1 : (u1.id < u2.id) ? 1 : 0);
            }
            case 'name': {
                return tempArr.sort((u1, u2) => (u1.name > u2.name) ? -1 : (u1.name < u2.name) ? 1 : 0);
            }
            case 'age': {
                return tempArr.sort((u1, u2) => (u1.age > u2.age) ? -1 : (u1.age < u2.age) ? 1 : 0);
            }
            default: {
                return 'You have selected the wrong key of Object';
            }
        }
    }
    return `You should input 'asc' or 'desc' for typeOfArrangement and input 'id', 'name', or 'age' for key`;
};
// console.log(SortWithTwoParams('age', 'desc', users));

////////////////////////////////////////////////////////////////////////
//3

const cutHalfArrayByMap = function (users) {
    let cutArrayUsers = [[], []];
    users.map((user, index) => {
        cutArrayUsers[index < Math.round(users.length) / 2 ? 0 : 1].push(user);
    });
    return cutArrayUsers;
};
// console.log(cutHalfArrayByMap(users));

const cutHalfArrayByFilter = function (users) {
    let cutArrayUsers = [users.filter((user, index) => index < Math.round(users.length) / 2), users.filter((user, index) => index >= Math.round(users.length) / 2)];
    return cutArrayUsers;
};
console.log(cutHalfArrayByFilter(users));

const cutHalfArrayByReduce1 = function (users) {
    return users.reduce((acc, user, index) => {
        if (index < Math.round(users.length) / 2) {
            return [[...acc[0], user], acc[1]];
        }
        else {
            return [acc[0], [...acc[1], user]];
        }
    }, [[], []]);
};
// console.log(cutHalfArrayByReduce1(users));

const cutHalfArrayByReduce2 = function (users) {
    return users.reduce((acc, user, index) => {
        acc[index < Math.round(users.length) / 2 ? 0 : 1].push(user);
        return acc;
    }, [[], []]);
};
// console.log(cutHalfArrayByReduce2(users));

const cutHalfArrayByFor = function (users) {
    let cutArrayUsers = [[], []];
    users.forEach((user, index) => cutArrayUsers[index < Math.round(users.length) / 2 ? 0 : 1].push(user));
    return cutArrayUsers;
};
// console.log(cutHalfArrayByFor(users));
