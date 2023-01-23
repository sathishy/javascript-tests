/**
1. Write a program to find the number of posts written by each user. Consider below array and
prepare the given output by counting the number of posts written by each user.
Input Object: var posts =[
{userId:1, postName:&quot;post 1&quot;},
{userId:2, postName:&quot;post 2&quot;},
{userId:3, postName:&quot;post 3&quot;},
{userId:1, postName:&quot;post 4&quot;},
{userId:1, postName:&quot;post 5&quot;},
{userId:2, postName:&quot;post 6&quot;},
{userId:1, postName:&quot;post 7&quot;},
{userId:2, postName:&quot;post 8&quot;},
{userId:3, postName:&quot;post 9&quot;}
];
Output [{userId:1,postCount:4},{userId:2,postCount:3},{userId:3,postCount:2}]
*/
getTotalPostOfEachUser = (inputArr) => {
  let results = inputArr.reduce((acc, { userId, postName }) => {
    acc[userId] =
      userId in acc
        ? { userId, postCount: acc[userId].postCount + 1 }
        : { userId, postCount: 1 };
    return acc;
  }, {});
  return Object.values(results);
};

/**
 * 2. Write a program to list out the maximum and minimum temperatures recorded in a city on each
day(City should not repeat on a single day). Let us consider the below array for the weather data
based on different cities on different dates. Prepare an array which says on each day what is the
maximum temperature recorded and in which city it is recorded. Same with the minimum
temperature and the city it has been recorded.
Input Object: var &quot;weather_data&quot;= [
{
&quot;id&quot;: 4840240013377536,
&quot;applicable_date&quot;: &quot;2022-03-28&quot;,
&quot;min_temp&quot;: 3.74,
&quot;max_temp&quot;: 16.240000000000003,
&quot;city&quot;: &quot;Bangalore&quot;
},
{
&quot;id&quot;: 6158451006767104,
&quot;applicable_date&quot;: &quot;2022-03-29&quot;,
&quot;min_temp&quot;: 2.6300000000000005,

&quot;max_temp&quot;: 17.42,
&quot;city&quot;: &quot;Bangalore&quot;
},
{
&quot;id&quot;: 5139251006013440,
&quot;applicable_date&quot;: &quot;2022-03-30&quot;,
&quot;min_temp&quot;: 3.83,
&quot;max_temp&quot;: 16.88,
&quot;city&quot;: &quot;Bangalore&quot;
},]
 */
getMinMaxTempByDate = (temp) => {
  let results = temp.reduce((acc, item) => {
    const date = item.applicable_date;
    if (acc[date]) {
      acc[date].max_temp = Math.max(acc[date].max_temp, item.max_temp);
      acc[date].max_temp_city =
        acc[date].max_temp > item.max_temp ? acc[date].city : item.city;
      acc[date].min_temp = Math.min(acc[date].min_temp, item.min_temp);
      acc[date].min_temp_city =
        acc[date].min_temp > item.min_temp ? item.city : acc[date].city;
    } else {
      acc[date] = item;
    }
    return acc;
  }, {});

  return Object.values(results);
};

/**
4. Write a program to find missing numbers from the given array and return the missing numbers in
new array.
Sample input
arr=[4,5,7,1,9,2,3]
Explanation: From the array we can see the numbers from 1 to 9 as minimum number is 1 and
maximum number is 9. so, the missing numbers are 6 &amp; 8
Sample Output: [6,8]
 */
getMissingNumbers = (inputArr) => {
  let missingArr = [];
  for (let i = Math.min(...inputArr); i <= Math.max(...inputArr); i++) {
    if (inputArr.indexOf(i) == -1) {
      missingArr.push(i);
    }
  }
  return missingArr;
};
