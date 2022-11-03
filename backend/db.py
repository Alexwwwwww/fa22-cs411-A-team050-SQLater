import mysql.connector

mydb = mysql.connector.connect(
    host="34.132.218.225",
    user="root",
    password="sqlater1234",
    database="sqlater"
)

query = ("SELECT * FROM Homework_Assignments")

cursor = mydb.cursor()
cursor.execute(query)

# TESTING CONNECTION TO DATABASE
for (hw_id, hw_name) in cursor:
  print(hw_id, hw_name)