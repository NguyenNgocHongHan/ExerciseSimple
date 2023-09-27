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

    // console.log(`1. maxAvg = ${maxAvg}`);
    let len = array.length;
    array.forEach((item, index) => {
        for (indexInside = index + 1; indexInside <= len; indexInside++) {
            let tempArr = array.slice(index, indexInside);
            // console.log(`2. tempArr = ${tempArr}`);

            let tempAvg = avg(tempArr);
            // console.log(`3. tempAvg = ${tempAvg}`);

            if (tempAvg >= maxAvg && tempArr.length > 1) {
                resultArr = [...tempArr];
                maxAvg = tempAvg;
                // console.log(`4. maxAvg = ${maxAvg}, resultArr = ${resultArr}`);
            }
            // console.log(`5. maxAvg = ${maxAvg}, resultArr = ${resultArr}`);
            // console.log();
        }
        // console.log('--------------------------------------------');
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
// console.log(calcAvgByReduce(users));

const FirstHalfUsers = function (users) {
    let firstUsers = [];
    users.map((user, index) => {
        if (index < Math.round(users.length / 2)) firstUsers.push(user);
    });
    return firstUsers;
};
// console.log(FirstHalfUsers(users));

const EndHalfUsers = function (users) {
    let endUsers = [];
    users.map((user, index) => {
        if (index >= Math.round(users.length / 2)) endUsers.push(user);
    });
    return endUsers;
};
// console.log(EndHalfUsers(users));

// tăng dần: asc, giảm dần: desc
const SortWithTwoParams = function (paramObject, paramSort, users) {
    switch (paramObject) {
        case 'id': {
            return users.sort((u1, u2) => (u1.id > u2.id) ? (paramSort == 'asc' ? 1 : paramSort == 'desc' ? -1 : `Error param sort`) : (u1.id < u2.id) ? (paramSort == 'asc' ? -1 : paramSort == 'desc' ? 1 : `Error param sort`) : 0);
        }
        case 'name': {
            return users.sort((u1, u2) => (u1.name > u2.name) ? (paramSort == 'asc' ? 1 : paramSort == 'desc' ? -1 : `Error param sort`) : (u1.name < u2.name) ? (paramSort == 'asc' ? -1 : paramSort == 'desc' ? 1 : `Error param sort`) : 0);
        }
        case 'age': {
            return users.sort((u1, u2) => (u1.age > u2.age) ? (paramSort == 'asc' ? 1 : paramSort == 'desc' ? -1 : `Error param sort`) : (u1.age < u2.age) ? (paramSort == 'asc' ? -1 : paramSort == 'desc' ? 1 : `Error param sort`) : 0);
        }
        default: {
            return 'You have selected the wrong Object parameter';
        }
    }
};

console.log(SortWithTwoParams('name', 'desc', users));;
