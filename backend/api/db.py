import mysql.connector

def open_connection():
  mydb = mysql.connector.connect(
      host="34.132.218.225",
      user="root",
      password="sqlater1234",
      database="sqlater"
  )
  mydb.autocommit = True
  return mydb

def insert_hw_assignment(data):
  #MAKE INTO AUTOINCREMENT later
  mydb = open_connection()
  cursor = mydb.cursor()
  # Other valid ways of formatting query
  # query1 = "INSERT INTO Homework_Assignments(hw_id, hw_name) VALUES (" + str(data["hw_id"]) + ",'" + data["hw_name"] + "')"
  # query2 = "INSERT INTO Homework_Assignments(hw_id, hw_name) VALUES ({}, '{}')".format(str(data["hw_id"]), str(data["hw_name"]))
  cursor.execute("INSERT INTO Homework_Assignments(hw_id, hw_name) VALUES (%s, %s)", (data["hw_id"], data["hw_name"]))
  ans = show_hw_assignment()
  cursor.close()
  mydb.close()
  return ans

def update_hw_title(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("UPDATE Homework_Assignments SET hw_name=%s WHERE hw_id=%s", (data['hw_name'], data['hw_id']))
  ans = show_hw_assignment()
  cursor.close()
  mydb.close()
  return ans

def delete_hw_assignment(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  #Execute must take in a tuple so (), needed
  cursor.execute("DELETE FROM Homework_Assignments WHERE hw_id=%s", (data['hw_id'],))
  ans = show_hw_assignment()
  cursor.close()
  mydb.close()
  return ans

def show_hw_assignment():
  mydb = open_connection()
  query = ("SELECT * FROM Homework_Assignments")
  cursor = mydb.cursor()
  cursor.execute(query)
  ans = ''
  for (hw_id, hw_name) in cursor:
    ans += str(hw_id) + ' ' + hw_name + '\n'
  cursor.close()
  mydb.close()
  return ans

