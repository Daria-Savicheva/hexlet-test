import _ from 'lodash';
export default function solution(content){
  // BEGIN
  const newContent = content.trim().split('\n');

  const head = newContent.slice(0, 1).join(',').split(',');

  const count = newContent.slice(1);
  const getData = count.map((city) => city.split(','));
  console.log(`Count: ${count.length}`) //step 1
 
  const getIndexOfCity = head.indexOf('City'); //ищу индекс City
  const cities = getData.map((city) => city[getIndexOfCity]); //все города по индексу
  const sortCities = _.uniq(cities).sort(); //удаляю дубли, привожу в нужный вид
  console.log(`Cities: ${sortCities.join(', ')}`); // step 2

  const getIndexHumidity = head.indexOf('Humidity');
  const minHumidity = getData.map((item) => item[getIndexHumidity]).reduce((acc, item) => acc < item ? acc : item);
  const maxHumidity = getData.map((item) => item[getIndexHumidity]).reduce((acc, item) => acc > item ? acc : item);
  console.log(`Humidity: Min: ${minHumidity}, Max: ${maxHumidity}`) //step 3

  const getIndexOfMaxTemp = head.indexOf('Max Temperature');
  const getMaxTemp = getData.map((item) => item[getIndexOfMaxTemp]).reduce((acc, item) => acc > item ? acc : item);
  const getIndexOfDate = head.indexOf('Date');
  const getHottestDate = getData.filter((day) => day[getIndexOfMaxTemp] === getMaxTemp);
  console.log(`HottestDay: ${getHottestDate[0][getIndexOfDate]} ${getHottestDate[0][getIndexOfCity]}`); // step 4

  const result = [];
  for (let city of sortCities){ //в цикле считаем среднюю температуру по каждому городу
    const getTemp = getData.filter((item) => item[getIndexOfCity] === city)
    const getMiddleTemp = getTemp.map((maxTemp) => maxTemp[getIndexOfMaxTemp]).reduce((acc, temp) => acc + Number(temp), 0) / getTemp.length;
    result.push(getMiddleTemp);
  }
  const middleMaxTemp = result.reduce((acc, item) => acc > item ? acc : item, 0); //находим максимальную
  const indexHottestCity = result.indexOf(middleMaxTemp); // ищем индекс максимальной температуры 

  console.log(`HottestCity: ${sortCities[indexHottestCity]}`); // по индексу максимальной температуры находим город, т.к. идексы ссответствуют(цикл)
 
 // END
}