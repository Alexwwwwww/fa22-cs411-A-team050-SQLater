import mysql.connector
from flask import jsonify

def open_connection():
  mydb = mysql.connector.connect(
      host="34.132.218.225",
      user="root",
      password="sqlater1234",
      database="sqlater"
  )
  mydb.autocommit = True
  return mydb

#Homework Assignment CRUD
def insert_hw_assignment(data):
  #MAKE INTO AUTOINCREMENT later
  mydb = open_connection()
  cursor = mydb.cursor()
  # Other valid ways of formatting query
  # query1 = "INSERT INTO Homework_Assignments(hw_id, hw_name) VALUES (" + str(data["hw_id"]) + ",'" + data["hw_name"] + "')"
  # query2 = "INSERT INTO Homework_Assignments(hw_id, hw_name) VALUES ({}, '{}')".format(str(data["hw_id"]), str(data["hw_name"]))
  cursor.execute("INSERT INTO Homework_Assignments(hw_id, hw_name) VALUES (%s, %s)", (data["hw_id"], data["hw_name"]))
  cursor.close()
  mydb.close()
  return 'INSERTED HW ASSIGNMENT'

def update_hw_title(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("UPDATE Homework_Assignments SET hw_name=%s WHERE hw_id=%s", (data['hw_name'], data['hw_id']))
  cursor.close()
  mydb.close()
  return 'UPDATED HW TITLE'

def delete_hw_assignment(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  #Execute must take in a tuple so (), needed
  cursor.execute("DELETE FROM Homework_Assignments WHERE hw_id=%s", (data['hw_id'],))
  cursor.close()
  mydb.close()
  return 'DELETED HW ASSIGNMENT'

def get_avg_score_by_question_hw_ga():
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("""
    SELECT ga_id, NULL AS hw_id, question_number, AVG(question_score)
    FROM GA_Questions
    GROUP BY ga_id, question_number
    UNION
    SELECT NULL, hw_id, question_number, AVG(question_score)
    FROM Homework_Questions
    GROUP BY hw_id, question_number
  """)
  columns = cursor.description 
  result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cursor.fetchall()]
  res = jsonify(result)
  cursor.close()
  mydb.close()
  return res

def get_uin_average_score_greater_than_ga(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("""
    SELECT uin, AVG(score) avg_ga_score
    FROM GA_Submissions NATURAL JOIN GA_Groups
    WHERE ga_id IN (0,1)
    GROUP BY uin
    HAVING avg_ga_score >= %s
    ORDER BY avg_ga_score DESC
  """, (data['score'],))
  columns = cursor.description 
  result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cursor.fetchall()]
  user_grades = jsonify(result)
  cursor.close()
  mydb.close()
  return user_grades

def search_user_hw(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("SELECT * FROM Homework_Submissions WHERE uin=%s", (data["uin"],))
  columns = cursor.description 
  result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cursor.fetchall()]
  user_grades = jsonify(result)
  cursor.close()
  mydb.close()
  return user_grades

def show_hw_assignment():
  mydb = open_connection()
  query = ("SELECT * FROM Homework_Assignments")
  cursor = mydb.cursor()
  cursor.execute(query)
  columns = cursor.description 
  result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cursor.fetchall()]
  assignments = jsonify(result)
  cursor.close()
  mydb.close()
  return assignments

#Don't Need
# def search_hw_assignment(data):
#   mydb = open_connection()
#   cursor = mydb.cursor()
#   cursor.execute("SELECT * FROM Homework_Assignments WHERE hw_name LIKE %s", (data["hw_name_prefix"] + "%",))
#   result = cursor.fetchall()
#   assignments = jsonify(result)
#   cursor.close()
#   mydb.close()
#   return assignments

def search_user_hw(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("SELECT * FROM Homework_Submissions WHERE uin=%s", (data["uin"],))
  columns = cursor.description 
  result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cursor.fetchall()]
  user_grades = jsonify(result)
  cursor.close()
  mydb.close()
  return user_grades

#Students CRUD
def show_user():
  mydb = open_connection()
  query = ("SELECT * FROM Students LIMIT 10")
  cursor = mydb.cursor()
  cursor.execute(query)
  result = cursor.fetchall()
  users = jsonify(result)
  cursor.close()
  mydb.close()
  return users

def insert_user(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("INSERT INTO Students(uin, net_id, name) VALUES (%s, %s, %s)", (data["uin"], data["net_id"], data["name"]))
  cursor.close()
  mydb.close()
  return 'INSERTED USER'


