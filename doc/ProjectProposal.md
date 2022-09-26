# CS 411 Course Staff Dashboard

## Project Summary
We aim to create a web app that allows CS 411 instructors and course staff to view analytics about student performance. Using either PrairieLearn and Canvas or auto generated data, the app would use student assignment performance to easily give the course staff feedback on the difficulty of the assignments and how students are collaborating.

<!--
This is our understanding of the full 411 dashboard:-
* It's a website that filters and displays collaboration stats for each GA group (problems completed, number of submissions, problems completed, student submission interactions, time to complete each problem, etc.).
* It can record the last date of attendance for each student from PL, Canvas, Campuswire, and in-person attendance.
* It may also use ML models to find struggling students based on some inputs (number of submissions, types of problem interactions, SQL code structure, etc.).
-->

## Description
CS 411 instructors and course staff do not currently have a comprehensive system for tracking individual and group activity. This will help them understand how students are working through the homework questions and collaborating on GAs together. We may use machine learning models to help course staff identify struggling students using these input statistics. The app will also contain the last date of attendance for each student from different course websites, such as PrairieLearn, Canvas, and Campuswire. This would be helpful when the course staff are requested this information by the college.
 
The app would display graphs (or when clicking on the assignment name itself) showing progress of students and class on assignments over the course of the semester. The course staff should be able to search for a specific student’s information and select filters to display our database tables with specific rows. There would be tabs at the top of the web page to navigate between different student assignment queries.



## Usefulness
Our application is able to make the management of the PrairieLearn  platform easier, enabling students to make the most of the group activities and other learning materials. PrairieLearn is one of the pioneers that integrate the autograder function and the management function. Management platforms such as Canvas could organize teaching materials and show score distribution in an intuitive way, but it does not include the autograder function. Autograder such as grade scope is not as convenient in terms of managing media. Our goal is to further enrich the function of PrarieLearn so that it will be better in terms of management, enhancing learning experience. 

## Realness
We’re hoping that the professor would be able to provide us with an API to fetch the data from PrairieLearn, Canvas. In case that is not possible, We will be auto generating the data.


## Functionality

The Data Stored in the database will have the following schema: -
* Students: uin, netid, First, Last
* GA: Activity Number, Group Name/Id, Students List, Total Score, Time to complete, 
* GA_Questions: Activity Number, Question Number, Group Name/Id, Number of correct submissions, Number incorrect submissions, Number of Invalid Not gradable submissions, Highest Score, Collaborating rating out of 10 
(calculated based on how students answered the form for each others collaboration)
* Homework: Homework Number, Student uin, Total Score, Time to complete, 
* Homework_Questions: Homework Number, Question Number, Student uin, Number of     correct submissions, Number incorrect submissions, Number of Invalid Not gradable submissions, Highest Score


Our website will be displaying the analytics of different students in the class. It will provide information like average score for each HW and GA. Top scores and scorers of each assignment. It will also have data manipulation functions to add, delete,or update the data.

A creative component that we want to implement is a GA group generator that pairs high scoring students with lower scoring individuals to help students learn from each other and improve. We plan on achieving this by ranking each student based on their overall scores across all assignments in the class. Based on this ranking, we will divide the class into two groups depending on whether a person is higher or lower than the average score in the class. Then, we randomly choose 2 from each group to form GA groups. This would improve the functionality of our application by providing useful insight to the instructor on how to form GA groups and whether this pairing helps improve collaboration rating and scores. 


## UI Mockup

Navigation bar: `Overall Assignment Statistics`, `Student Assignment Statistics`?, `Homework Assignment Statistics`, `GA Group Assignment Statistics`, `Struggling Students Rankings`, `Student Interaction with Course Website`
- Homework assignment statistics:
![alt text](https://github.com/cs411-alawini/fa22-cs411-A-team050-SQLater/blob/main/doc/Homework%20Assignment%20Statistics.png)
- Group assignment statistics:
![alt text](https://github.com/cs411-alawini/fa22-cs411-A-team050-SQLater/blob/main/doc/Group%20Assignment%20Statistics.png)
- Overall Assignment statitics:
![alt text](https://github.com/cs411-alawini/fa22-cs411-A-team050-SQLater/blob/main/doc/Overall%20Assignment%20Statistics.png)
## Project work distribution

We will be pair programming with two people working on the frontend and backend. These are the main functionalities of the project and we plan on splitting up the work as below.
 
* Graph Generation - ajasuja2
* Assignment Page - rverm2, yumeng10
* Homework Page/GA Page - ajasuja2, rogerw2
* Creative Component Code: rverm2, rogerw2
* Generating Dataset (if needed): rverm2, yumeng10
* Machine Learning Model (if time): ajasuja2, rogerw2, rverm2, yumeng10


