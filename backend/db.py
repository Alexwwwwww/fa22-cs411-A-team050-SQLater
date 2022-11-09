import mysql.connector

mydb = mysql.connector.connect(
    host="34.132.218.225",
    user="root",
    password="sqlater1234",
    database="sqlater"
)
cursor = mydb.cursor()
mydb.autocommit = True

def insert_hw_assignment(hw_name):
  query = ("INSERT INTO Homework_Assignments hw_name VALUES " + hw_name)
  cursor.execute(query)
  show_hw_assignment()
  cursor.close()
  mydb.close()

def update_hw_title(hw_id, hw_name):
  query = ("UPDATE Homework_Assignments SET hw_name" + hw_name + " WHERE hw_id=" + hw_id)
  cursor.execute(query)
  show_hw_assignment()
  cursor.close()
  mydb.close()

def delete_hw_assignment(hw_id):
  query = ("DELETE FROM Homework_Assignments WHERE hw_id=" + hw_id)
  cursor.execute(query)
  show_hw_assignment()
  cursor.close()
  mydb.close()

def show_hw_assignment():
  query = ("SELECT * FROM Homework_Assignments")
  cursor.execute(query)
  for (hw_id, hw_name) in cursor:
    print(hw_id, hw_name)
  cursor.close()
  mydb.close()