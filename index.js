import _ from 'lodash';
export default function solution(content){
  // BEGIN
  const newContent = content.split('\n');

  const head = newContent.slice(0, 1).join(',').split(',');

  const count = newContent.slice(1, newContent.length - 1);
  const getData = count.map((city) => city.split(','));

  console.log(`Count: ${count.length}`) //step 1

  const getIndexOfCity = head.indexOf('City'); //ищу индекс City
  const cities = getData.map((city) => city[getIndexOfCity]); //все города по индексу
  const newCities = _.uniq(cities).sort().join(', '); //удаляю дубли, привожу в нужный вид
  console.log(`Cities: ${newCities}`); // step 2

  const getIndexHumidity = head.indexOf('Humidity');
  const minHumidity = getData.map((item) => item[getIndexHumidity]).reduce((acc, item) => acc < item ? acc : item);
  const maxHumidity = getData.map((item) => item[getIndexHumidity]).reduce((acc, item) => acc > item ? acc : item);
  console.log(`Humidity: Min: ${minHumidity}, Max: ${maxHumidity}`) //step 3

  const getIndexOfMaxTemp = head.indexOf('Max Temperature');
  const getMaxTemp = getData.map((item) => item[getIndexOfMaxTemp]).reduce((acc, item) => acc > item ? acc : item);
  const getIndexOfDate = head.indexOf('Date');
  const getHottestDate = getData.filter((day) => day[getIndexOfMaxTemp] === getMaxTemp);
  console.log(`HottestDay: ${getHottestDate[0][getIndexOfDate]} ${getHottestDate[0][getIndexOfCity]}`);
  // END
}