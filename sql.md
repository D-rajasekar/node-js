## SQL:
- 1.List all directors of Pixar movies (alphabetically), without duplicates :

    - SELECT DISTINCT Director FROM movies ORDER BY Director ASC ;

- 2. List the last four Pixar movies released (ordered from most recent to least):

SELECT Title, Year FROM movies ORDER BY Year DESC LIMIT 4;

- 3. List the first five Pixar movies sorted alphabetically
    - select Title, Year FROM movies ORDER BY Title ASC LIMIT 5;

- 4. List the next five Pixar movies sorted alphabetically:

    - select Title, Year FROM movies ORDER BY Title ASC LIMIT 5 OFFSET 5 ;

- 1.List all the Canadian cities and their populations :

    - SELECT City, Population FROM North_american_cities WHERE Country = 'Canada';

- 2.List all the cities west of Chicago, ordered from west to east

    - SELECT City, Longitude FROM North_american_citiesWHERE Longitude < (SELECT Longitude FROM North_american_cities WHERE City = 'Chicago')
ORDER BY Longitude ASC;

- 3.List the two largest cities in Mexico (by population)

    - SELECT City, Population FROM North_american_cities WHERE Country = 'Mexico' ORDER BY Population DESC LIMIT 2;

- 4.List the third and fourth largest cities (by population) in the United States and their population 

    - SELECT  city,population FROM North_american_cities where country="United States" order by population DESC LIMIT 2 OFFSET 2 ;


- TASK:6:
- 1.Find the domestic and international sales for each movie :
```sql
SELECT
    m.Title,
    b.Domestic_sales,
    b.International_sales
FROM
    Movies m
JOIN
    Boxoffice b ON m.Id = b.Movie_id;
```

- 2.Show the sales numbers for each movie that did better internationally rather than domestically:
```
SELECT
    m.Title,
    b.Domestic_sales,
    b.International_sales
FROM
    Movies m
JOIN
    Boxoffice b ON m.Id = Movie_id
    where International_sales>Domestic_sales;
```
- TASK:7

- 1.Find the list of all buildings that have employees:
```
SELECT DISTINCT Building
FROM Employees;
```
- 2.Find the list of all buildings and their capacity:
```
SELECT Building_name,Capacity FROM Buildings;
```
- 3.List all buildings and the distinct employee roles in each building (including empty buildings):
```
SELECT DISTINCT building_name, role 
FROM buildings 
  LEFT JOIN employees
    ON building_name = building;
```    
- TASK 8:
- 1.Find the name and role of all employees who have not been assigned to a building 
```
FROM
    Employees e
LEFT JOIN
    Buildings b ON e.Building = b.Building_name
WHERE
    b.Building_name IS NULL;
```    
- 2.Find the names of the buildings that hold no employees:
```
SELECT * FROM buildings 
left join employees 
on building_name= building
where name is null
;
```
- TASK:9

- 1.List all movies and their combined sales in millions of dollars:

    - SELECT title,(Domestic_sales+international_sales)/1000000 FROM movies join Boxoffice on id=movie_id ;
- 2.List all movies and their ratings in percent:
    - SELECT title,(Domestic_sales+international_sales)/1000000,rating*10 FROM movies join Boxoffice on id=movie_id ;

- 3.List all movies that were released on even number years:
    - SELECT title,year FROM movies join Boxoffice on id=movie_id where year%2=0;

- TASK:9
- 1.Find the longest time that an employee has been at the studio
    - SELECT max(Years_employed) FROM employees ;

- 2.For each role, find the average number of years employed by employees in that role:
    - SELECT *,avg(Years_employed) FROM employees group by role  ;

- 3.Find the total number of employee years worked in each building
    - SELECT *,sum(years_employed) FROM employees group by building ;

