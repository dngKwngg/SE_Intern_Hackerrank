/*
Enter your query here.
Please append a semicolon ";" at the end of the query
*/
SELECT DISTINCT p.name, c.name
FROM professor AS p
INNER JOIN schedule AS s ON p.id = s.professor_id
INNER JOIN course AS c ON c.id = s.course_id
WHERE p.department_id != c.department_id;