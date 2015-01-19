#Queries

Just wanted a place to write down all of my queries as I am exploring interesting ways to analyze this data.

* Average rating by most-contributing reviewers
"select avg(score) as average, count(score) as count, reviewer from 'data' group by reviewer order by count desc;"

* Reviewers with highest average rating contributing at least 50 reviews (Nicest regular reviewers)
"select avg(score) as average, count(score) as score_count, reviewer from 'data' group by reviewer having score_count >= 50 order by average desc;"

* Reviewers with highest average rating contributing at least 50 reviews (Meanest regular reviewers)
"select avg(score) as average, count(score) as score_count, reviewer from 'data' group by reviewer having score_count >= 50 order by average asc;"

* Average album ratings by year
"select avg(score) as average, release_year from 'data' group by release_year order by release_year asc;"
(it would be cool to get a std deviation for this figure)

* Worst albums by year
"select * from 'data' where release_year = {YEAR} order by cast(score as REAL) asc limit 10;"

* Best albums by year
"select * from 'data' where release_year = {YEAR} order by cast(score as REAL) desc limit 10;"

* Best albums by year without BNR
"select * from 'data' where release_year = 2014 and accolade != " Best New Reissue " order by cast(score as REAL) desc limit 10;"

* Worst album of every year
"select min(cast(score as REAL)), data.* from 'data' group by release_year order by release_year asc;"

* Best album of every year
"select max(cast(score as REAL)), data.* from 'data' group by release_year order by release_year asc;"

* Best album of every year without BNR
"select max(cast(score as REAL)), data.* from 'data' group by release_year having accolade != " Best New Reissue " order by release_year asc;"

* Albums with 0.0 rating 
"select * from 'data' where cast(score as real) = 0.0;"

* Albums with 10.0 rating
"select * from 'data' where cast(score as real) = 10;"

* Artists with consistently bad ratings, been reviewed at least twice, after 1995
"select avg(score) as average_score, artist from 'data' group by artist having count(score) > 1  and release_year > 1995 order by average_score asc;"

* Artists with consistently good ratings, been reviewed at least twice, after 1995
select avg(score) as average_score, artist from 'data' group by artist having count(score) > 1  and release_year > 1995 order by average_score desc;

* Top Labels, reviewed at least 10 times
"select avg(score) as average_score, count(score) as score_count, label from 'data' group by label having score_count >= 10 order by average_score desc;"

* Worst Labels, reviewed at least 10 times
"select avg(score) as average_score, count(score) as score_count, label from 'data' group by label having score_count >= 10 order by average_score asc;"

* Most Reviewed Labels, with their average rating
"select avg(score) as average_score, count(score) as score_count, label from 'data' group by label order by score_count desc;"